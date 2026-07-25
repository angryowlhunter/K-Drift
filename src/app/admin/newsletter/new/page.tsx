import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { NewsletterComposer, type ComposerArticle } from "@/components/admin/newsletter-composer";
import { supabaseConfigured, listAdminArticles } from "@/lib/admin-data";
import { subscriberStats } from "@/lib/subscribers";

export const dynamic = "force-dynamic";

export default async function NewNewsletterPage() {
  if (!supabaseConfigured()) return <SetupNotice />;

  const [all, stats] = await Promise.all([listAdminArticles(), subscriberStats()]);
  const articles: ComposerArticle[] = all
    .filter((a) => a.status === "published")
    .map((a) => ({
      id: a.id,
      title:
        a.article_translations.find((t) => t.locale === "ko")?.title ??
        a.article_translations[0]?.title ??
        a.slug,
      category: a.category,
      locales: a.article_translations.map((t) => t.locale),
    }));

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin/newsletter" className="text-sm text-muted-foreground hover:text-foreground">
          ← 뉴스레터 목록
        </Link>
        <h1 className="mt-3 mb-6 text-2xl font-bold tracking-tight">새 뉴스레터 작성</h1>
        <NewsletterComposer articles={articles} recipientCounts={stats.byLocale} />
      </main>
    </>
  );
}
