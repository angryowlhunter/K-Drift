import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/articles";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://k-drift.com";

/** hreflang alternates for one path across all locales. */
function alternates(path: string) {
  return {
    languages: Object.fromEntries(
      routing.locales.map((l) => [l, `${SITE}/${l}${path}`]),
    ),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/articles", "/newsletter", "/about", "/privacy"];

  const entries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE}/${locale}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: alternates(path),
    })),
  );

  // Published articles (DB when configured, seed fallback otherwise).
  try {
    const articles = await getArticles({ locale: routing.defaultLocale });
    for (const a of articles) {
      const path = `/articles/${a.slug}`;
      for (const locale of routing.locales) {
        entries.push({
          url: `${SITE}/${locale}${path}`,
          lastModified: a.publishedAt ? new Date(a.publishedAt) : undefined,
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: alternates(path),
        });
      }
    }
  } catch {
    // Sitemap must never fail the build.
  }

  return entries;
}
