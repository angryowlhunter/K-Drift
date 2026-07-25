import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Signed one-click unsubscribe links (정보통신망법: 수신거부 수단 필수).
 * Token = HMAC-SHA256(email, secret) so the link can't be forged for other emails.
 * Secret: UNSUBSCRIBE_SECRET (recommended) — falls back to the service-role key
 * so no extra setup is strictly required.
 */
function secret(): string {
  return (
    process.env.UNSUBSCRIBE_SECRET ??
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    "kdrift-dev-secret"
  );
}

export function unsubscribeToken(email: string): string {
  return createHmac("sha256", secret()).update(email.trim().toLowerCase()).digest("hex").slice(0, 32);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = unsubscribeToken(email);
  if (token.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function unsubscribeUrl(email: string, locale: string, siteUrl?: string): string {
  const base = siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://kdrift.vercel.app";
  const params = new URLSearchParams({
    email: email.trim().toLowerCase(),
    token: unsubscribeToken(email),
    locale,
  });
  return `${base}/api/unsubscribe?${params.toString()}`;
}
