"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerSupabase } from "@/lib/supabase/server";
import { requireUser } from "@/lib/admin-data";
import { CATEGORY_KEYS, type CategoryKey } from "@/lib/categories";
import { locales } from "@/i18n/routing";

export type SaveResult = { ok: boolean; error?: string; savedAt?: string };

function parseForm(formData: FormData) {
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase().replace(/\s+/g, "-");
  const category = String(formData.get("category") ?? "");
  const author = String(formData.get("author") ?? "").trim() || "K-Drift";
  const coverEmoji = String(formData.get("coverEmoji") ?? "").trim() || "📄";
  const status = formData.get("status") === "published" ? "published" : "draft";

  const translations = locales
    .map((locale) => ({
      locale,
      title: String(formData.get(`title_${locale}`) ?? "").trim(),
      summary: String(formData.get(`summary_${locale}`) ?? "").trim(),
      body_mdx: String(formData.get(`body_${locale}`) ?? "").trim(),
    }))
    .filter((t) => t.title.length > 0);

  return { slug, category, author, coverEmoji, status, translations };
}

function validate(p: ReturnType<typeof parseForm>): string | null {
  if (!p.slug) return "슬러그(slug)를 입력하세요.";
  if (!/^[a-z0-9-]+$/.test(p.slug)) return "슬러그는 영문 소문자·숫자·하이픈만 가능합니다.";
  if (!CATEGORY_KEYS.includes(p.category as CategoryKey)) return "카테고리를 선택하세요.";
  if (p.translations.length === 0) return "최소 한 개 언어의 제목과 본문을 입력하세요.";
  return null;
}

export async function saveArticleAction(
  id: string | null,
  _prev: SaveResult,
  formData: FormData,
): Promise<SaveResult> {
  await requireUser();
  const p = parseForm(formData);
  const err = validate(p);
  if (err) return { ok: false, error: err };

  const supabase = createAdminClient();
  const now = new Date().toISOString();

  // Preserve the original publish date: stamp it only on the FIRST transition to
  // published, and never clear it (so editing or un/re-publishing keeps ordering stable).
  let existingPublishedAt: string | null = null;
  if (id) {
    const { data: prev } = await supabase
      .from("articles")
      .select("published_at")
      .eq("id", id)
      .maybeSingle();
    existingPublishedAt = prev?.published_at ?? null;
  }
  const publishedAt =
    existingPublishedAt ?? (p.status === "published" ? now : null);

  const articleRow = {
    slug: p.slug,
    category: p.category as CategoryKey,
    author: p.author,
    cover_image: p.coverEmoji,
    status: p.status as "draft" | "published",
    published_at: publishedAt,
    updated_at: now,
  };

  let articleId = id;

  if (id) {
    const { error } = await supabase.from("articles").update(articleRow).eq("id", id);
    if (error) return { ok: false, error: dbMsg(error.message) };
  } else {
    const { data, error } = await supabase
      .from("articles")
      .insert(articleRow)
      .select("id")
      .single();
    if (error) return { ok: false, error: dbMsg(error.message) };
    articleId = data.id;
  }

  // Replace translations for the locales that were filled in.
  for (const t of p.translations) {
    const { error } = await supabase
      .from("article_translations")
      .upsert(
        { article_id: articleId, ...t, updated_at: new Date().toISOString() },
        { onConflict: "article_id,locale" },
      );
    if (error) return { ok: false, error: dbMsg(error.message) };
  }

  revalidatePath("/admin");
  revalidatePath("/[locale]/articles", "page");
  // Also refresh the article's own (possibly pre-rendered 404) detail page and the
  // landing page's "latest articles" section, in every locale.
  revalidatePath(`/[locale]/articles/[slug]`, "page");
  revalidatePath("/[locale]", "page");

  // Save & keep editing: a brand-new article redirects to its own edit URL so it
  // gains an id; existing articles stay put and just show a "saved" indicator.
  if (!id) redirect(`/admin/articles/${articleId}`);
  return { ok: true, savedAt: now };
}

export async function deleteArticleAction(id: string) {
  await requireUser();
  const supabase = createAdminClient();
  await supabase.from("articles").delete().eq("id", id);
  revalidatePath("/admin");
  revalidatePath("/[locale]/articles", "page");
  revalidatePath(`/[locale]/articles/[slug]`, "page");
  revalidatePath("/[locale]", "page");
  redirect("/admin");
}

export async function signOutAction() {
  const supabase = await createServerSupabase();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

function dbMsg(message: string): string {
  if (message.includes("duplicate key") || message.includes("unique")) {
    return "이미 사용 중인 슬러그입니다. 다른 슬러그를 입력하세요.";
  }
  return `저장 실패: ${message}`;
}
