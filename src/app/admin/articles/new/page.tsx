import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { ArticleEditor, type EditorArticle } from "@/components/admin/article-editor";
import { supabaseConfigured } from "@/lib/admin-data";

const EMPTY: EditorArticle = {
  id: null,
  slug: "",
  category: "",
  author: "K-Drift",
  coverEmoji: "📄",
  status: "draft",
  translations: {
    vi: { title: "", summary: "", body: "" },
    en: { title: "", summary: "", body: "" },
    ko: { title: "", summary: "", body: "" },
    ja: { title: "", summary: "", body: "" },
    zh: { title: "", summary: "", body: "" },
  },
};

export default function NewArticlePage() {
  if (!supabaseConfigured()) return <SetupNotice />;
  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          ← 대시보드
        </Link>
        <h1 className="mt-3 mb-6 text-2xl font-bold tracking-tight">새 글 작성</h1>
        <ArticleEditor article={EMPTY} />
      </main>
    </>
  );
}
