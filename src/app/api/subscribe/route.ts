import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LOCALES = ["vi", "en", "ko"] as const;
type Locale = (typeof LOCALES)[number];

function json(ok: boolean, code?: string, status = 200) {
  return NextResponse.json({ ok, ...(code ? { code } : {}) }, { status });
}

export async function POST(req: Request) {
  let body: { email?: string; locale?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return json(false, "error", 400);
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const locale: Locale = LOCALES.includes(body.locale as Locale) ? (body.locale as Locale) : "vi";
  const source = (body.source ?? "landing").slice(0, 40);

  if (!EMAIL_RE.test(email)) return json(false, "invalid", 400);

  const hasSupabase =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

  // Dev fallback: without a DB we can't persist, but let the UI flow be verified.
  if (!hasSupabase) {
    console.warn("[subscribe] Supabase not configured — skipping persistence for", email);
    await sendWelcome(email, locale);
    return json(true);
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("subscribers")
      .insert({ email, locale, source });

    if (error) {
      // 23505 = unique_violation (already subscribed)
      if (error.code === "23505") return json(false, "already", 409);
      console.error("[subscribe] insert failed", error);
      return json(false, "error", 500);
    }
  } catch (err) {
    console.error("[subscribe] unexpected", err);
    return json(false, "error", 500);
  }

  await Promise.allSettled([addToResendAudience(email), sendWelcome(email, locale)]);
  return json(true);
}

async function sendWelcome(email: string, locale: Locale) {
  if (!process.env.RESEND_API_KEY || !process.env.NEWSLETTER_FROM) return;
  try {
    const { Resend } = await import("resend");
    const { WelcomeEmail } = await import("@/emails/welcome");
    const { unsubscribeUrl } = await import("@/lib/unsubscribe");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kdrift.kr";
    const subject = { vi: "Chào mừng đến với K-Drift 👋", en: "Welcome to K-Drift 👋", ko: "케이드리프트에 오신 걸 환영해요 👋" }[locale];
    await resend.emails.send({
      from: process.env.NEWSLETTER_FROM,
      to: email,
      subject,
      react: WelcomeEmail({ locale, siteUrl, unsubscribeUrl: unsubscribeUrl(email, locale, siteUrl) }),
    });
  } catch (err) {
    console.error("[subscribe] welcome email failed", err);
  }
}

async function addToResendAudience(email: string) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) return;
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });
  } catch (err) {
    console.error("[subscribe] resend audience failed", err);
  }
}
