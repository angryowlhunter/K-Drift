import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerSupabase } from "@/lib/supabase/server";
import type { CategoryKey } from "@/lib/categories";
import type { Locale } from "@/i18n/routing";

export const supabaseConfigured = () =>
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.SUPABASE_SERVICE_ROLE_KEY &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Throws if the caller isn't an authenticated admin. Use at the top of server actions. */
export async function requireUser() {
  const supabase = await createServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

export type AdminTranslation = {
  locale: Locale;
  title: string;
  summary: string | null;
  body_mdx: string;
};

export type AdminArticle = {
  id: string;
  slug: string;
  category: CategoryKey;
  author: string | null;
  cover_image: string | null;
  status: "draft" | "published";
  published_at: string | null;
  updated_at: string;
  article_translations: AdminTranslation[];
};

const SELECT = "id,slug,category,author,cover_image,status,published_at,updated_at,article_translations(locale,title,summary,body_mdx)";

export async function listAdminArticles(): Promise<AdminArticle[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("articles")
    .select(SELECT)
    .order("updated_at", { ascending: false });
  if (error || !data) return [];
  return data as AdminArticle[];
}

export async function getAdminArticle(id: string): Promise<AdminArticle | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("articles").select(SELECT).eq("id", id).maybeSingle();
  if (error || !data) return null;
  return data as AdminArticle;
}

export async function getSubscriberCountAdmin(): Promise<number> {
  const supabase = createAdminClient();
  const { count } = await supabase
    .from("subscribers")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");
  return count ?? 0;
}

export type AdminIssue = {
  id: string;
  issue_no: number | null;
  subject: string;
  locale: Locale;
  article_ids: string[];
  sent_at: string | null;
};

export async function listAdminIssues(): Promise<AdminIssue[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("newsletter_issues")
    .select("id,issue_no,subject,locale,article_ids,sent_at")
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data as AdminIssue[];
}

/** Active subscriber emails for a locale (newsletter recipients). */
export async function getSubscriberEmails(locale: Locale): Promise<string[]> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("subscribers")
    .select("email")
    .eq("status", "active")
    .eq("locale", locale);
  return (data ?? []).map((r) => r.email as string);
}
