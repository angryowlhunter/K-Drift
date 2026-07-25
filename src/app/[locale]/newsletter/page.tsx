import { setRequestLocale, getTranslations } from "next-intl/server";
import { useFormatter } from "next-intl";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getIssues } from "@/lib/newsletter";
import type { Locale } from "@/i18n/routing";

export default async function NewsletterArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("newsletter");
  const issues = await getIssues(locale as Locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
      </header>

      {issues.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
          {t("empty")}
        </p>
      ) : (
        <ul className="mt-8 space-y-4">
          {issues.map((issue) => (
            <li key={issue.issueNo}>
              <Link
                href={`/newsletter/${issue.issueNo}`}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:shadow-md"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">
                      {t("issueLabel", { number: issue.issueNo })}
                    </span>
                    <IssueDate iso={issue.sentAt} />
                  </div>
                  <h2 className="mt-1 font-semibold tracking-tight group-hover:text-primary">
                    {issue.subject}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {issue.articles.map((a) => a.title).join(" · ")}
                  </p>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function IssueDate({ iso }: { iso: string }) {
  const format = useFormatter();
  if (!iso) return null;
  return <span>{format.dateTime(new Date(iso), { dateStyle: "medium" })}</span>;
}
