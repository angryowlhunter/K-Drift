import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { ArticleEditor, type EditorArticle } from "@/components/admin/article-editor";
import { supabaseConfigured, getAdminArticle } from "@/lib/admin-data";
import { locales, type Locale } from "@/i18n/routing";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!supabaseConfigured()) return <SetupNotice />;
  const { id } = await params;
  const article = await getAdminArticle(id);
  if (!article) notFound();

  const translations = Object.fromEntries(
    locales.map((l) => {
      const t = article.article_translations.find((x) => x.locale === l);
      return [l, { title: t?.title ?? "", summary: t?.summary ?? "", body: t?.body_mdx ?? "" }];
    }),
  ) as EditorArticle["translations"];

  const editor: EditorArticle = {
    id: article.id,
    slug: article.slug,
    category: article.category,
    author: article.author ?? "K-Drift",
    coverEmoji: article.cover_image ?? "📄",
    status: article.status,
    translations,
  };

  const koTitle =
    article.article_translations.find((t) => t.locale === ("ko" as Locale))?.title ??
    article.slug;

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          ← 대시보드
        </Link>
        <h1 className="mt-3 mb-6 text-2xl font-bold tracking-tight">글 편집 — {koTitle}</h1>
        <ArticleEditor article={editor} />
      </main>
    </>
  );
}
