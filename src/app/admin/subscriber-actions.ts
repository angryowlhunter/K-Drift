"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireUser } from "@/lib/admin-data";
import { locales, type Locale } from "@/i18n/routing";

export type SubActionResult = { ok: boolean; error?: string; info?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const asLocale = (v: string): Locale => ((locales as readonly string[]).includes(v) ? (v as Locale) : "vi");

/** Add one or many subscribers. Emails can be newline/comma separated. */
export async function addSubscribersAction(_prev: SubActionResult, form: FormData): Promise<SubActionResult> {
  await requireUser();
  const locale = asLocale(String(form.get("locale") ?? "vi"));
  const source = (String(form.get("source") ?? "manual").trim() || "manual").slice(0, 40);
  const raw = String(form.get("emails") ?? "");

  const emails = [...new Set(
    raw.split(/[\s,;]+/).map((e) => e.trim().toLowerCase()).filter(Boolean),
  )];
  if (emails.length === 0) return { ok: false, error: "이메일을 입력하세요." };

  const valid = emails.filter((e) => EMAIL_RE.test(e));
  const invalid = emails.length - valid.length;
  if (valid.length === 0) return { ok: false, error: "유효한 이메일이 없습니다." };

  const supabase = createAdminClient();
  const { error, count } = await supabase
    .from("subscribers")
    .upsert(valid.map((email) => ({ email, locale, source })), { onConflict: "email", ignoreDuplicates: true, count: "exact" });
  if (error) return { ok: false, error: `추가 실패: ${error.message}` };

  revalidatePath("/admin/subscribers");
  const added = count ?? 0;
  const dup = valid.length - added;
  return { ok: true, info: `${added}명 추가${dup ? ` (중복 ${dup} 건너뜀)` : ""}${invalid ? ` · 형식오류 ${invalid} 제외` : ""}.` };
}

export async function setSubscriberStatusAction(id: string, status: "active" | "unsubscribed"): Promise<SubActionResult> {
  await requireUser();
  const supabase = createAdminClient();
  const { error } = await supabase.from("subscribers").update({ status }).eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/subscribers");
  return { ok: true };
}

export async function deleteSubscriberAction(id: string): Promise<SubActionResult> {
  await requireUser();
  const supabase = createAdminClient();
  const { error } = await supabase.from("subscribers").delete().eq("id", id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/admin/subscribers");
  return { ok: true };
}
