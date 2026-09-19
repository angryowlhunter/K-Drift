"use server";

import { createHash, randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import Anthropic from "@anthropic-ai/sdk";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireUser } from "@/lib/admin-data";
import { ingestPolicyNews } from "@/lib/ingest";
import { CATEGORY_KEYS, type CategoryKey } from "@/lib/categories";

export type ActionResult = { ok: boolean; error?: string; info?: string };

const hashOf = (s: string) => createHash("sha256").update(s).digest("hex").slice(0, 32);

// ─── Ingest ────────────────────────────────────────────────────────────────

/** Manual paste: title + content (+ optional source url) → one raw_item. */
export async function ingestManualAction(_prev: ActionResult, form: FormData): Promise<ActionResult> {
  await requireUser();
  const title = String(form.get("title") ?? "").trim();
  const content = String(form.get("content") ?? "").trim();
  const url = String(form.get("url") ?? "").trim() || null;
  if (!content) return { ok: false, error: "내용을 입력하세요." };

  const supabase = createAdminClient();
  const { data: src } = await supabase.from("sources").select("id").eq("type", "manual").maybeSingle();
  const { error } = await supabase
    .from("raw_items")
    .insert({ source_id: src?.id ?? null, url, title: title || null, content, hash: hashOf((url ?? "") + title + content) });
  if (error) {
    if (error.code === "23505") return { ok: false, error: "이미 수집된 내용입니다." };
    return { ok: false, error: `저장 실패: ${error.message}` };
  }
  revalidatePath("/admin/digest");
  return { ok: true, info: "수집 완료 — 아래에서 'AI 요약'을 실행하세요." };
}

/** Dispatch ingestion by source type (rss / api). Used by the collect buttons. */
export async function ingestSourceAction(sourceId: string): Promise<ActionResult> {
  await requireUser();
  const supabase = createAdminClient();
  const { data: src } = await supabase.from("sources").select("id,type").eq("id", sourceId).maybeSingle();
  if (!src) return { ok: false, error: "소스를 찾을 수 없습니다." };
  if (src.type === "api") return ingestPolicyNewsAction(sourceId);
  return ingestRssAction(sourceId);
}

/** Pull recent policy news from the data.go.kr API (core logic in src/lib/ingest.ts). */
export async function ingestPolicyNewsAction(sourceId: string): Promise<ActionResult> {
  await requireUser();
  const supabase = createAdminClient();
  const { data: src } = await supabase.from("sources").select("id,url").eq("id", sourceId).maybeSingle();
  if (!src?.url) return { ok: false, error: "API URL이 없는 소스입니다." };

  const r = await ingestPolicyNews({ id: src.id as string, url: src.url as string });
  if (r.ok) revalidatePath("/admin/digest");
  return { ok: r.ok, error: r.error, info: r.info };
}

/** Pull an RSS source and store new items (deduped by hash). */
export async function ingestRssAction(sourceId: string): Promise<ActionResult> {
  await requireUser();
  const supabase = createAdminClient();
  const { data: src } = await supabase.from("sources").select("id,url").eq("id", sourceId).maybeSingle();
  if (!src?.url) return { ok: false, error: "RSS URL이 없는 소스입니다." };

  let xml: string;
  try {
    const res = await fetch(src.url, { headers: { "user-agent": "Mozilla/5.0 (compatible; K-Drift/0.1)" } });
    if (!res.ok) return { ok: false, error: `RSS 요청 실패: ${res.status}` };
    xml = await res.text();
  } catch (e) {
    return { ok: false, error: `RSS 가져오기 실패: ${e instanceof Error ? e.message : String(e)}` };
  }

  const items = parseRssItems(xml).slice(0, 20);
  if (items.length === 0) return { ok: false, error: "RSS에서 항목을 찾지 못했습니다 (피드 형식 확인 필요)." };

  let added = 0;
  for (const it of items) {
    const hash = hashOf(it.guid || it.link || it.title);
    const { error } = await supabase.from("raw_items").insert({
      source_id: src.id,
      external_id: it.guid || null,
      url: it.link || null,
      title: it.title || null,
      content: it.description || it.title,
      hash,
    });
    if (!error) added++;
  }
  revalidatePath("/admin/digest");
  return { ok: true, info: `${added}건 새로 수집 (중복 ${items.length - added}건 건너뜀).` };
}

type RssItem = { title: string; link: string; description: string; guid: string };

/** Minimal RSS/Atom item parser (no dependency). Good enough for P0. */
function parseRssItems(xml: string): RssItem[] {
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s\S]*?<\/entry>/gi) ?? [];
  const pick = (b: string, tag: string) => {
    const m = b.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
    if (!m) return "";
    return m[1]
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  };
  const link = (b: string) => {
    const href = b.match(/<link[^>]*href="([^"]+)"/i);
    if (href) return href[1];
    return pick(b, "link");
  };
  return blocks.map((b) => ({ title: pick(b, "title"), link: link(b), description: pick(b, "description") || pick(b, "summary"), guid: pick(b, "guid") || pick(b, "id") }));
}

// ─── AI curation ─────────────────────────────────────────────────────────────

const CURATE_SYSTEM = `You curate Korean government / legal / policy items for K-Drift, a newsletter that
helps foreign residents in Korea master daily life, economy, and law (visa, healthcare, housing, labor,
education, taxes). Given one raw item (Korean), decide if it materially affects foreign residents.

If relevant, write — IN KOREAN — a trustworthy, foreigner-friendly digest:
- title_ko: a clear, specific headline
- summary_ko: 2–4 sentences, plain Korean, no jargon
- what_it_means_ko: 1–2 sentences on what a foreign resident should actually DO or know
- effective_date: the 시행일/적용일 if stated, else "" (never invent one)
- category: one of visa | medical | housing | labor | education (closest fit)
- confidence: 0.0–1.0 — your confidence this is accurate AND relevant. Lower it when the source is thin,
  ambiguous, or you are inferring. NEVER fabricate facts, dates, or numbers not in the source.

If the item does NOT materially affect foreign residents (purely domestic politics, unrelated notices,
press fluff), set relevant=false and leave the other fields empty. Be selective — quality over quantity.`;

const FIELDS = {
  relevant: { type: "boolean" },
  category: { type: "string", enum: [...CATEGORY_KEYS] },
  title_ko: { type: "string" },
  summary_ko: { type: "string" },
  what_it_means_ko: { type: "string" },
  effective_date: { type: "string" },
  confidence: { type: "number" },
};

const CURATE_SCHEMA = {
  type: "object",
  properties: FIELDS,
  required: ["relevant", "category", "title_ko", "summary_ko", "what_it_means_ko", "effective_date", "confidence"],
  additionalProperties: false,
} as const;

/** Run Claude on one raw_item → create a draft digest_item (or mark skipped). */
export async function curateRawItemAction(rawItemId: string): Promise<ActionResult> {
  await requireUser();
  if (!process.env.ANTHROPIC_API_KEY) return { ok: false, error: "ANTHROPIC_API_KEY가 없습니다." };

  const supabase = createAdminClient();
  const { data: raw } = await supabase
    .from("raw_items")
    .select("id,url,title,content")
    .eq("id", rawItemId)
    .maybeSingle();
  if (!raw) return { ok: false, error: "원본을 찾을 수 없습니다." };

  const client = new Anthropic();
  let parsed: {
    relevant: boolean; category: string; title_ko: string; summary_ko: string;
    what_it_means_ko: string; effective_date: string; confidence: number;
  };
  try {
    const res = await client.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 2000,
      system: [{ type: "text", text: CURATE_SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { format: { type: "json_schema", schema: CURATE_SCHEMA } },
      messages: [{
        role: "user",
        content: `[SOURCE URL]\n${raw.url ?? "(none)"}\n\n[TITLE]\n${raw.title ?? ""}\n\n[CONTENT]\n${raw.content}`,
      }],
    });
    const text = res.content.find((b) => b.type === "text");
    if (!text || text.type !== "text") return { ok: false, error: "AI 응답이 비었습니다." };
    parsed = JSON.parse(text.text);
  } catch (e) {
    return { ok: false, error: `AI 요약 실패: ${e instanceof Error ? e.message : String(e)}` };
  }

  await supabase.from("raw_items").update({ curated: true }).eq("id", raw.id);

  if (!parsed.relevant) {
    revalidatePath("/admin/digest");
    return { ok: true, info: "⏭️ 외국인 관련성 낮음 — 건너뜀 (초안 생성 안 함)." };
  }

  const category = (CATEGORY_KEYS as readonly string[]).includes(parsed.category)
    ? (parsed.category as CategoryKey)
    : null;
  const { error } = await supabase.from("digest_items").insert({
    raw_item_id: raw.id,
    category,
    title_ko: parsed.title_ko,
    summary_ko: parsed.summary_ko,
    what_it_means_ko: parsed.what_it_means_ko,
    effective_date: parsed.effective_date || null,
    source_urls: raw.url ? [raw.url] : [],
    confidence: parsed.confidence,
    status: "draft",
  });
  if (error) return { ok: false, error: `초안 저장 실패: ${error.message}` };
  revalidatePath("/admin/digest");
  return {
    ok: true,
    info: `✓ 초안 생성 (신뢰도 ${Math.round((parsed.confidence ?? 0) * 100)}%) — 아래 '검토 대기 초안'에서 확인하세요.`,
  };
}

// ─── Review (human gate) ─────────────────────────────────────────────────────

export async function rejectDigestAction(id: string): Promise<ActionResult> {
  const user = await requireUser();
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("digest_items")
    .update({ status: "rejected", reviewer: user.email ?? "admin", updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/digest");
  return { ok: true, info: "반려됨." };
}

export type ApproveResult = ActionResult & { articleId?: string };

/** Approve a draft → create a Korean article draft prefilled from the digest. */
export async function approveDigestAction(id: string): Promise<ApproveResult> {
  const user = await requireUser();
  const supabase = createAdminClient();

  const { data: d } = await supabase
    .from("digest_items")
    .select("title_ko,summary_ko,what_it_means_ko,effective_date,category,source_urls")
    .eq("id", id)
    .maybeSingle();
  if (!d) return { ok: false, error: "초안을 찾을 수 없습니다." };

  // Compose a Korean article body from the digest fields.
  const parts = [d.summary_ko as string];
  if (d.what_it_means_ko) parts.push(`## 외국인에게 의미\n${d.what_it_means_ko}`);
  if (d.effective_date) parts.push(`**시행일:** ${d.effective_date}`);
  const urls = (d.source_urls as string[]) ?? [];
  if (urls.length) parts.push(`---\n출처: ${urls.map((u) => `[${u}](${u})`).join(" · ")}`);
  const body = parts.filter(Boolean).join("\n\n");

  const slug = `digest-${randomUUID().slice(0, 8)}`;
  const category = (d.category as CategoryKey | null) ?? "education"; // editable in the editor

  const { data: art, error: artErr } = await supabase
    .from("articles")
    .insert({ slug, category, author: "K-Drift", cover_image: "📄", status: "draft", published_at: null })
    .select("id")
    .single();
  if (artErr) return { ok: false, error: `글 초안 생성 실패: ${artErr.message}` };

  const { error: trErr } = await supabase.from("article_translations").insert({
    article_id: art.id,
    locale: "ko",
    title: d.title_ko,
    summary: d.summary_ko,
    body_mdx: body,
  });
  if (trErr) return { ok: false, error: `번역행 생성 실패: ${trErr.message}` };

  await supabase
    .from("digest_items")
    .update({ status: "approved", reviewer: user.email ?? "admin", updated_at: new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin/digest");
  revalidatePath("/admin");
  return { ok: true, info: "✓ 승인 → 한국어 글 초안 생성됨.", articleId: art.id };
}

export async function updateDigestAction(_prev: ActionResult, form: FormData): Promise<ActionResult> {
  await requireUser();
  const id = String(form.get("id") ?? "");
  const supabase = createAdminClient();
  const { error } = await supabase
    .from("digest_items")
    .update({
      title_ko: String(form.get("title_ko") ?? "").trim(),
      summary_ko: String(form.get("summary_ko") ?? "").trim(),
      what_it_means_ko: String(form.get("what_it_means_ko") ?? "").trim(),
      effective_date: String(form.get("effective_date") ?? "").trim() || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/digest");
  return { ok: true, info: "저장됨." };
}
