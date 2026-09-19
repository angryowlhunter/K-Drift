"use server";

import Anthropic from "@anthropic-ai/sdk";
import { requireUser } from "@/lib/admin-data";

export type TranslatedFields = { title: string; summary: string; body: string };
export type TranslateResult =
  | { ok: true; en: TranslatedFields; vi: TranslatedFields; ja: TranslatedFields; zh: TranslatedFields }
  | { ok: false; error: string };

// Korean is the source of truth; we translate into English, Vietnamese, Japanese, and Simplified Chinese.
const SYSTEM = `You translate Korean living-information articles for K-Drift, a service that helps
foreign residents in Korea (visa, healthcare, housing, labor, education). The Korean text is the
source of truth. Translate it into natural, clear, trustworthy English (en), Vietnamese (vi),
Japanese (ja), and Simplified Chinese (zh).

Rules:
- Preserve the Markdown structure EXACTLY: same headings (##, ###), lists, bold, blockquotes, links, line breaks.
- Translate meaning faithfully and naturally — not word-for-word. The reader is a non-Korean resident.
- Keep Korean proper nouns / official terms recognizable: render the translation, and on first mention add the
  original Korean in parentheses, e.g. Alien Registration Card (외국인등록증) / Thẻ đăng ký người nước ngoài (외국인등록증) /
  外国人登録証 (외국인등록증) / 外国人登录证 (외국인등록증).
- Do NOT add, remove, or summarize content. Keep numbers, dates, agency names, and URLs intact.
- The title should be concise; the summary one or two sentences.
- Vietnamese is the primary audience — make it especially natural.
- zh must be Simplified Chinese (简体), not Traditional.
Return ONLY the structured fields for en, vi, ja, and zh.`;

const FIELDS = {
  type: "object",
  properties: {
    title: { type: "string" },
    summary: { type: "string" },
    body: { type: "string" },
  },
  required: ["title", "summary", "body"],
  additionalProperties: false,
} as const;

const SCHEMA = {
  type: "object",
  properties: { en: FIELDS, vi: FIELDS, ja: FIELDS, zh: FIELDS },
  required: ["en", "vi", "ja", "zh"],
  additionalProperties: false,
} as const;

export async function translateFromKoreanAction(source: {
  title: string;
  summary: string;
  body: string;
}): Promise<TranslateResult> {
  await requireUser();

  if (!process.env.ANTHROPIC_API_KEY) {
    return { ok: false, error: "ANTHROPIC_API_KEY가 설정되지 않았습니다. .env.local에 추가 후 서버를 재시작하세요." };
  }
  if (!source.title.trim() && !source.body.trim()) {
    return { ok: false, error: "한국어 제목 또는 본문을 먼저 입력하세요." };
  }

  const client = new Anthropic();

  const userContent = `Translate the following Korean article into English, Vietnamese, Japanese, and Simplified Chinese.

[TITLE]
${source.title}

[SUMMARY]
${source.summary}

[BODY (Markdown)]
${source.body}`;

  try {
    const res = await client.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 16000,
      // Stable instructions cached across repeated translate clicks in a session.
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { format: { type: "json_schema", schema: SCHEMA } },
      messages: [{ role: "user", content: userContent }],
    });

    const text = res.content.find((b) => b.type === "text");
    if (!text || text.type !== "text") {
      return { ok: false, error: "번역 결과를 받지 못했습니다." };
    }
    const parsed = JSON.parse(text.text) as {
      en: TranslatedFields;
      vi: TranslatedFields;
      ja: TranslatedFields;
      zh: TranslatedFields;
    };
    return { ok: true, en: parsed.en, vi: parsed.vi, ja: parsed.ja, zh: parsed.zh };
  } catch (err) {
    return { ok: false, error: `번역 실패: ${err instanceof Error ? err.message : String(err)}` };
  }
}
