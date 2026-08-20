import "server-only";
import { createHash } from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * 정책브리핑 정책뉴스 수집 코어 (korea.kr RSS 중단에 따른 공식 대체).
 * 관리자 버튼(digest-actions)과 매일 자동 수집(/api/cron/collect)이 공유한다.
 * data.go.kr "문화체육관광부_정책브리핑_정책뉴스_API" — env POLICY_NEWS_API_KEY 필요.
 */

export type IngestResult = { ok: boolean; error?: string; info?: string; added?: number };

const hashOf = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 32);

type PolicyNewsItem = { id: string; title: string; url: string; content: string };

function pickTag(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fmtDate(d: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}`;
}

/** Pull recent policy news for one source and store new items (deduped by hash). */
export async function ingestPolicyNews(src: { id: string; url: string }): Promise<IngestResult> {
  const rawKey = process.env.POLICY_NEWS_API_KEY;
  if (!rawKey) {
    return {
      ok: false,
      error:
        "POLICY_NEWS_API_KEY가 없습니다. 공공데이터포털(data.go.kr)에서 '정책브리핑 정책뉴스 API' 활용신청 후 발급받은 인증키를 Vercel 환경변수에 추가하세요.",
    };
  }
  // data.go.kr issues both encoded/decoded keys; use as-is when already percent-encoded.
  const serviceKey = rawKey.includes("%") ? rawKey : encodeURIComponent(rawKey);

  // policyNewsService2 spec: params are serviceKey/startDate/endDate only,
  // and the date range must not exceed 3 days (error code 98).
  const end = new Date();
  const start = new Date(end.getTime() - 2 * 24 * 3600 * 1000); // last 3 days incl. today
  const url = `${src.url}?serviceKey=${serviceKey}&startDate=${fmtDate(start)}&endDate=${fmtDate(end)}`;

  let xml: string;
  let httpStatus = 200;
  try {
    const res = await fetch(url, { headers: { accept: "application/xml" } });
    httpStatus = res.status;
    xml = await res.text();
  } catch (e) {
    return { ok: false, error: `API 요청 실패: ${e instanceof Error ? e.message : String(e)}` };
  }

  // data.go.kr sends error details as XML even on non-200 — surface the real reason.
  const apiErr = pickTag(xml, "returnAuthMsg") || pickTag(xml, "errMsg");
  if (apiErr && !/normal/i.test(apiErr)) {
    const hint = /등록되지 않은|NOT_REGISTERED/i.test(apiErr)
      ? " — data.go.kr에서 이 API 활용신청이 승인됐는지 확인하세요. 신규 키는 반영까지 최대 1시간 걸립니다."
      : " (인증키 등록/승인 상태를 확인하세요)";
    return { ok: false, error: `API 오류: ${apiErr}${hint}` };
  }
  if (httpStatus < 200 || httpStatus >= 300) {
    return { ok: false, error: `API 요청 실패: HTTP ${httpStatus}` };
  }

  const blocks = xml.match(/<NewsItem[\s\S]*?<\/NewsItem>/gi) ?? [];
  const items: PolicyNewsItem[] = blocks.map((b) => ({
    id: pickTag(b, "NewsItemId"),
    title: pickTag(b, "Title"),
    url: pickTag(b, "OriginalUrl"),
    content: [pickTag(b, "SubTitle1"), pickTag(b, "DataContents")].filter(Boolean).join("\n\n").slice(0, 6000),
  }));
  if (items.length === 0) {
    return { ok: true, added: 0, info: "최근 3일간 새 정책뉴스가 없습니다." };
  }

  const supabase = createAdminClient();
  let added = 0;
  for (const it of items) {
    const hash = hashOf(it.id || it.url || it.title);
    const { error } = await supabase.from("raw_items").insert({
      source_id: src.id,
      external_id: it.id || null,
      url: it.url || null,
      title: it.title || null,
      content: it.content || it.title,
      hash,
    });
    if (!error) added++;
  }
  return { ok: true, added, info: `${added}건 새로 수집 (중복 ${items.length - added}건 건너뜀).` };
}

/** Run ingestion for every enabled API source. Used by the daily cron. */
export async function ingestAllApiSources(): Promise<{ ok: boolean; results: (IngestResult & { sourceId: string })[] }> {
  const supabase = createAdminClient();
  const { data: sources } = await supabase
    .from("sources")
    .select("id,url")
    .eq("type", "api")
    .eq("enabled", true);

  const results: (IngestResult & { sourceId: string })[] = [];
  for (const src of sources ?? []) {
    if (!src.url) continue;
    const r = await ingestPolicyNews({ id: src.id as string, url: src.url as string });
    results.push({ sourceId: src.id as string, ...r });
  }
  return { ok: results.every((r) => r.ok), results };
}
