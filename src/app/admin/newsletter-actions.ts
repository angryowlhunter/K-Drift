"use server";

import { revalidatePath } from "next/cache";
import { render } from "@react-email/render";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireUser, getSubscriberEmails } from "@/lib/admin-data";
import { NewsletterEmail, type NewsletterArticle } from "@/emails/newsletter";
import { unsubscribeUrl } from "@/lib/unsubscribe";
import { locales, type Locale } from "@/i18n/routing";

/** Placeholder swapped for each recipient's signed unsubscribe link at send time. */
const UNSUB_PLACEHOLDER = "https://unsub.invalid/placeholder";

const escapeAttr = (s: string) => s.replace(/&/g, "&amp;");

const withUnsubLink = (html: string, email: string, locale: Locale) =>
  html.replaceAll(UNSUB_PLACEHOLDER, escapeAttr(unsubscribeUrl(email, locale)));

export type SendResult = { ok: boolean; error?: string; sent?: number; info?: string };

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

type Prepared = {
  locale: Locale;
  subject: string;
  intro: string;
  articleIds: string[];
  html: string;
  from: string;
};

/** Validate the form, resolve articles, render the email. Shared by send + test-send. */
async function prepareEmail(formData: FormData): Promise<{ error: string } | Prepared> {
  const locale = (locales as readonly string[]).includes(String(formData.get("locale")))
    ? (formData.get("locale") as Locale)
    : "vi";
  const subject = String(formData.get("subject") ?? "").trim();
  const intro = String(formData.get("intro") ?? "").trim();
  const articleIds = formData.getAll("articleIds").map(String);

  if (!subject) return { error: "제목을 입력하세요." };
  if (articleIds.length === 0) return { error: "글을 1개 이상 선택하세요." };
  if (!process.env.RESEND_API_KEY || !process.env.NEWSLETTER_FROM) {
    return { error: "Resend가 설정되지 않았습니다. RESEND_API_KEY / NEWSLETTER_FROM 을 .env.local 에 추가하세요." };
  }

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("articles")
    .select("slug,article_translations(locale,title,summary)")
    .in("id", articleIds)
    .eq("status", "published");

  const fallback: Locale[] = [locale, "ko", "en", "vi"];
  const articles: NewsletterArticle[] = (rows ?? []).map((r) => {
    const tr = (r.article_translations ?? []) as { locale: Locale; title: string; summary: string | null }[];
    const pick = fallback.map((l) => tr.find((t) => t.locale === l)).find(Boolean) ?? tr[0];
    return { slug: r.slug as string, title: pick?.title ?? (r.slug as string), summary: pick?.summary ?? "" };
  });
  if (articles.length === 0) return { error: "선택한 발행 글을 찾을 수 없습니다." };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kdrift.kr";
  const html = await render(
    NewsletterEmail({
      locale,
      subject,
      intro: intro || undefined,
      articles,
      siteUrl,
      unsubscribeUrl: UNSUB_PLACEHOLDER,
    }),
  );
  return { locale, subject, intro, articleIds, html, from: process.env.NEWSLETTER_FROM };
}

export async function sendNewsletterAction(_prev: SendResult, formData: FormData): Promise<SendResult> {
  await requireUser();
  const p = await prepareEmail(formData);
  if ("error" in p) return { ok: false, error: p.error };

  const recipients = await getSubscriberEmails(p.locale);
  if (recipients.length === 0) return { ok: false, error: `${p.locale} 언어의 활성 구독자가 없습니다.` };

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    for (const batch of chunk(recipients, 100)) {
      const { error } = await resend.batch.send(
        batch.map((to) => ({ from: p.from, to, subject: p.subject, html: withUnsubLink(p.html, to, p.locale) })),
      );
      if (error) return { ok: false, error: `발송 실패: ${error.message}` };
    }
  } catch (err) {
    return { ok: false, error: `발송 오류: ${String(err)}` };
  }

  const supabase = createAdminClient();
  const { data: last } = await supabase
    .from("newsletter_issues")
    .select("issue_no")
    .order("issue_no", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextNo = (last?.issue_no ?? 0) + 1;
  await supabase.from("newsletter_issues").insert({
    issue_no: nextNo,
    subject: p.subject,
    locale: p.locale,
    article_ids: p.articleIds,
    sent_at: new Date().toISOString(),
  });

  revalidatePath("/admin/newsletter");
  revalidatePath("/[locale]/newsletter", "page");
  revalidatePath("/[locale]/newsletter/[issueNo]", "page");
  return { ok: true, sent: recipients.length };
}

/** Send the rendered email only to the logged-in admin, for preview. */
export async function testSendNewsletterAction(formData: FormData): Promise<SendResult> {
  const user = await requireUser();
  const to = user.email;
  if (!to) return { ok: false, error: "관리자 이메일을 찾을 수 없습니다." };

  const p = await prepareEmail(formData);
  if ("error" in p) return { ok: false, error: p.error };

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from: p.from, to, subject: `[테스트] ${p.subject}`, html: withUnsubLink(p.html, to, p.locale) });
    if (error) return { ok: false, error: `테스트 발송 실패: ${error.message}` };
  } catch (err) {
    return { ok: false, error: `테스트 발송 오류: ${String(err)}` };
  }
  return { ok: true, info: `테스트 메일을 ${to} 로 보냈습니다.` };
}
