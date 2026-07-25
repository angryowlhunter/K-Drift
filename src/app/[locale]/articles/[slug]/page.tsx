import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useFormatter } from "next-intl";
import type { Metadata } from "next";
import { Info } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Markdown } from "@/components/markdown";
import { CategoryBadge } from "@/components/category-badge";
import { SubscribeForm } from "@/components/subscribe-form";
import { getArticleBySlug, getAllSlugs } from "@/lib/articles";
import { buildToc } from "@/lib/toc";
import { isImageUrl } from "@/lib/utils";
import { routing, localeNames, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getAllSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug, locale as Locale);
  if (!article) return {};
  const path = `/articles/${slug}`;
  return {
    title: `${article.title} — K-Drift`,
    description: article.summary,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(
        article.availableLocales.map((l) => [l, `/${l}${path}`]),
      ),
    },
    openGraph: {
      type: "article",
      siteName: "K-Drift",
      title: article.title,
      description: article.summary,
      url: `/${locale}${path}`,
      locale,
      publishedTime: article.publishedAt || undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = await getArticleBySlug(slug, locale as Locale);
  if (!article) notFound();

  const t = await getTranslations("article");
  const toc = buildToc(article.body);
  const isFallback = article.renderedLocale !== locale;

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link
        href="/articles"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {t("backToList")}
      </Link>

      <div className="mt-6 lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
        {/* Main */}
        <div className="min-w-0 max-w-2xl">
          <div className="flex items-center gap-3">
            <CategoryBadge category={article.category} />
            <PublishedDate iso={article.publishedAt} />
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground text-pretty">{article.summary}</p>

          <LangSwitch
            slug={article.slug}
            available={article.availableLocales}
            current={article.renderedLocale}
            label={t("availableIn")}
          />

          {isFallback && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-warning/30 bg-warning/10 px-3 py-2 text-sm text-muted-foreground">
              <Info className="mt-0.5 size-4 shrink-0" />
              <span>{t("fallbackNote")}</span>
            </div>
          )}

          {isImageUrl(article.coverEmoji) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.coverEmoji}
              alt=""
              className="mt-6 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
            />
          )}

          <hr className="my-8 border-border" />

          <Markdown>{article.body}</Markdown>

          {/* Bottom CTA */}
          <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold tracking-tight">{t("ctaTitle")}</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              {t("ctaSubtitle")}
            </p>
            <div className="mx-auto mt-5 max-w-md">
              <SubscribeForm source={`article:${article.slug}`} />
            </div>
          </section>
        </div>

        {/* TOC sidebar */}
        {toc.length > 0 && (
          <aside className="mt-10 hidden lg:mt-0 lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {t("tableOfContents")}
              </p>
              <nav className="mt-3 space-y-2 border-l border-border">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block border-l-2 border-transparent pl-3 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    style={{ paddingLeft: item.level === 3 ? 24 : 12 }}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}

function PublishedDate({ iso }: { iso: string }) {
  const format = useFormatter();
  if (!iso) return null;
  return (
    <span className="text-sm text-muted-foreground">
      {format.dateTime(new Date(iso), { dateStyle: "medium" })}
    </span>
  );
}

function LangSwitch({
  slug,
  available,
  current,
  label,
}: {
  slug: string;
  available: Locale[];
  current: Locale;
  label: string;
}) {
  const others = routing.locales.filter((l) => available.includes(l));
  if (others.length <= 1) return null;
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="text-xs text-muted-foreground">{label}:</span>
      {others.map((l) => (
        <Link
          key={l}
          href={`/articles/${slug}`}
          locale={l}
          className={
            l === current
              ? "rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
              : "rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          }
        >
          {localeNames[l]}
        </Link>
      ))}
    </div>
  );
}
