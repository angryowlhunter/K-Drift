import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useFormatter } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ArticleCard } from "@/components/article-card";
import { SubscribeForm } from "@/components/subscribe-form";
import { getIssue, getSeedIssueNumbers } from "@/lib/newsletter";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getSeedIssueNumbers().map((n) => ({ locale, issueNo: String(n) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; issueNo: string }>;
}): Promise<Metadata> {
  const { locale, issueNo } = await params;
  const issue = await getIssue(Number(issueNo), locale as Locale);
  if (!issue) return {};
  return { title: `${issue.subject} — K-Drift` };
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: Promise<{ locale: string; issueNo: string }>;
}) {
  const { locale, issueNo } = await params;
  setRequestLocale(locale);
  const issue = await getIssue(Number(issueNo), locale as Locale);
  if (!issue) notFound();

  const t = await getTranslations("newsletter");

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/newsletter"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {t("backToArchive")}
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">
            {t("issueLabel", { number: issue.issueNo })}
          </span>
          <IssueDate iso={issue.sentAt} />
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {issue.subject}
        </h1>
      </header>

      <section className="mt-8">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          {t("inThisIssue")}
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {issue.articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center sm:p-8">
        <p className="font-medium">{t("subscribePrompt")}</p>
        <div className="mx-auto mt-4 max-w-md">
          <SubscribeForm source={`newsletter:${issue.issueNo}`} />
        </div>
      </section>
    </div>
  );
}

function IssueDate({ iso }: { iso: string }) {
  const format = useFormatter();
  if (!iso) return null;
  return <span>{format.dateTime(new Date(iso), { dateStyle: "medium" })}</span>;
}
