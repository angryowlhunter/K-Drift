import { setRequestLocale, getTranslations } from "next-intl/server";
import { CategoryFilter } from "@/components/category-filter";
import { ArticleCard } from "@/components/article-card";
import { getArticles } from "@/lib/articles";
import { CATEGORY_KEYS, type CategoryKey } from "@/lib/categories";
import type { Locale } from "@/i18n/routing";

export default async function ArticlesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { category, q } = await searchParams;
  const t = await getTranslations("articles");

  const activeCategory = CATEGORY_KEYS.includes(category as CategoryKey)
    ? (category as CategoryKey)
    : undefined;

  const articles = await getArticles({
    locale: locale as Locale,
    category: activeCategory,
    query: q,
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
      </header>

      <div className="mt-8">
        <CategoryFilter />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {t("resultsCount", { count: articles.length })}
      </p>

      {articles.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
          {t("empty")}
        </p>
      ) : (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
