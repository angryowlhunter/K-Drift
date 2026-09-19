import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe";

const LOCALES = ["vi", "en", "ko", "ja", "zh"] as const;

/** One-click unsubscribe from email footers. GET so it works from any mail client. */
export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const email = (searchParams.get("email") ?? "").trim().toLowerCase();
  const token = searchParams.get("token") ?? "";
  const locale = (LOCALES as readonly string[]).includes(searchParams.get("locale") ?? "")
    ? (searchParams.get("locale") as string)
    : "vi";

  const confirmed = new URL(`/${locale}/unsubscribed`, origin);
  const failed = new URL(`/${locale}/unsubscribed?error=1`, origin);

  if (!email || !verifyUnsubscribeToken(email, token)) {
    return NextResponse.redirect(failed);
  }

  const hasSupabase =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!hasSupabase) {
    console.warn("[unsubscribe] Supabase not configured — skipping for", email);
    return NextResponse.redirect(confirmed);
  }

  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("subscribers")
      .update({ status: "unsubscribed" })
      .eq("email", email);
    if (error) {
      console.error("[unsubscribe] update failed", error);
      return NextResponse.redirect(failed);
    }
  } catch (err) {
    console.error("[unsubscribe] unexpected", err);
    return NextResponse.redirect(failed);
  }

  return NextResponse.redirect(confirmed);
}
