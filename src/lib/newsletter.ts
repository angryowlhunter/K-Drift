import "server-only";
import type { Locale } from "@/i18n/routing";
import { SEED_NEWSLETTER } from "@/data/seed-newsletter";
import { getArticleBySlug, type Article } from "@/lib/articles";
import { createAdminClient } from "@/lib/supabase/admin";

export type NewsletterIssue = {
  issueNo: number;
  subject: string;
  sentAt: string;
  articles: Article[];
};

const hasSupabase = () =>
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;

function subjectFor(subject: Partial<Record<Locale, string>>, locale: Locale): string {
  return subject[locale] ?? subject.en ?? subject.vi ?? subject.ko ?? "";
}

async function hydrateArticles(slugs: string[], locale: Locale): Promise<Article[]> {
  const list = await Promise.all(slugs.map((s) => getArticleBySlug(s, locale)));
  return list.filter((a): a is Article => a !== null);
}

export async function getIssues(locale: Locale): Promise<NewsletterIssue[]> {
  if (hasSupabase()) {
    const supabase = createAdminClient();
    const { data } = await supabase
      .from("newsletter_issues")
      .select("issue_no,subject,locale,article_ids,sent_at")
      .eq("locale", locale)
      .not("sent_at", "is", null)
      .order("sent_at", { ascending: false });
    if (data && data.length > 0) {
      return Promise.all(
        data.map(async (row) => ({
          issueNo: row.issue_no ?? 0,
          subject: row.subject,
          sentAt: row.sent_at ?? "",
          articles: await hydrateArticlesByIds(row.article_ids ?? [], locale),
        })),
      );
    }
  }
  // Seed fallback
  return Promise.all(
    SEED_NEWSLETTER.map(async (n) => ({
      issueNo: n.issueNo,
      subject: subjectFor(n.subject, locale),
      sentAt: n.sentAt,
      articles: await hydrateArticles(n.articleSlugs, locale),
    })),
  );
}

export async function getIssue(issueNo: number, locale: Locale): Promise<NewsletterIssue | null> {
  const issues = await getIssues(locale);
  return issues.find((i) => i.issueNo === issueNo) ?? null;
}

export function getSeedIssueNumbers(): number[] {
  return SEED_NEWSLETTER.map((n) => n.issueNo);
}

async function hydrateArticlesByIds(ids: string[], locale: Locale): Promise<Article[]> {
  if (ids.length === 0) return [];
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("articles")
    .select("slug")
    .in("id", ids)
    .eq("status", "published");
  if (!data) return [];
  return hydrateArticles(
    data.map((r) => r.slug as string),
    locale,
  );
}
