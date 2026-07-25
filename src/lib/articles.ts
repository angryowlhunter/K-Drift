import "server-only";
import type { CategoryKey } from "@/lib/categories";
import type { Locale } from "@/i18n/routing";
import { SEED_ARTICLES, type ArticleSeed } from "@/data/seed-articles";
import { createAdminClient } from "@/lib/supabase/admin";

export type Article = {
  slug: string;
  category: CategoryKey;
  author: string;
  publishedAt: string;
  coverEmoji: string;
  title: string;
  summary: string;
  body: string;
  /** Locale actually rendered (may differ from requested when falling back). */
  renderedLocale: Locale;
  /** Locales this article is available in. */
  availableLocales: Locale[];
};

// Pick the best translation for a requested locale: requested -> ko -> en -> vi -> any.
const FALLBACK_ORDER: Locale[] = ["ko", "en", "vi"];

function resolveTranslation(seed: ArticleSeed, locale: Locale) {
  const order = [locale, ...FALLBACK_ORDER.filter((l) => l !== locale)];
  const renderedLocale = order.find((l) => seed.translations[l]) ?? locale;
  return { t: seed.translations[renderedLocale]!, renderedLocale };
}

function seedToArticle(seed: ArticleSeed, locale: Locale): Article {
  const { t, renderedLocale } = resolveTranslation(seed, locale);
  return {
    slug: seed.slug,
    category: seed.category,
    author: seed.author,
    publishedAt: seed.publishedAt,
    coverEmoji: seed.coverEmoji,
    title: t.title,
    summary: t.summary,
    body: t.body,
    renderedLocale,
    availableLocales: Object.keys(seed.translations) as Locale[],
  };
}

const hasSupabase = () =>
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

export type ListParams = {
  locale: Locale;
  category?: CategoryKey;
  query?: string;
};

export async function getArticles({ locale, category, query }: ListParams): Promise<Article[]> {
  let articles: Article[];

  if (hasSupabase()) {
    articles = await getArticlesFromDb(locale, category);
  } else {
    articles = SEED_ARTICLES.filter((a) => !category || a.category === category).map((a) =>
      seedToArticle(a, locale),
    );
  }

  const q = query?.trim().toLowerCase();
  if (q) {
    articles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q),
    );
  }
  return articles.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getArticleBySlug(slug: string, locale: Locale): Promise<Article | null> {
  if (hasSupabase()) {
    return getArticleFromDb(slug, locale);
  }
  const seed = SEED_ARTICLES.find((a) => a.slug === slug);
  return seed ? seedToArticle(seed, locale) : null;
}

export function getAllSlugs(): string[] {
  // Used for generateStaticParams. Seed-based; DB slugs render on demand.
  return SEED_ARTICLES.map((a) => a.slug);
}

// ---------------------------------------------------------------------------
// Supabase-backed reads (used once env is configured). RLS-safe via admin client.
// ---------------------------------------------------------------------------
type DbRow = {
  slug: string;
  category: CategoryKey;
  author: string | null;
  cover_image: string | null;
  published_at: string | null;
  article_translations: {
    locale: Locale;
    title: string;
    summary: string | null;
    body_mdx: string;
  }[];
};

function rowToArticle(row: DbRow, locale: Locale): Article {
  const order = [locale, ...FALLBACK_ORDER.filter((l) => l !== locale)];
  const available = row.article_translations.map((t) => t.locale);
  const renderedLocale = order.find((l) => available.includes(l)) ?? locale;
  const t =
    row.article_translations.find((x) => x.locale === renderedLocale) ??
    row.article_translations[0];
  return {
    slug: row.slug,
    category: row.category,
    author: row.author ?? "K-Drift",
    publishedAt: row.published_at ?? "",
    coverEmoji: row.cover_image ?? "📄",
    title: t?.title ?? row.slug,
    summary: t?.summary ?? "",
    body: t?.body_mdx ?? "",
    renderedLocale,
    availableLocales: available,
  };
}

async function getArticlesFromDb(locale: Locale, category?: CategoryKey): Promise<Article[]> {
  const supabase = createAdminClient();
  let q = supabase
    .from("articles")
    .select("slug,category,author,cover_image,published_at,article_translations(locale,title,summary,body_mdx)")
    .eq("status", "published");
  if (category) q = q.eq("category", category);
  const { data, error } = await q;
  if (error || !data) return [];
  return (data as DbRow[]).map((r) => rowToArticle(r, locale));
}

async function getArticleFromDb(slug: string, locale: Locale): Promise<Article | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("articles")
    .select("slug,category,author,cover_image,published_at,article_translations(locale,title,summary,body_mdx)")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();
  if (error || !data) return null;
  return rowToArticle(data as DbRow, locale);
}
