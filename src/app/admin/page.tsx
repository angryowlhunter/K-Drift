import Link from "next/link";
import { FileText, Mail, Plus, Pencil } from "lucide-react";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import {
  supabaseConfigured,
  listAdminArticles,
  getSubscriberCountAdmin,
} from "@/lib/admin-data";
import { isImageUrl } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!supabaseConfigured()) {
    return (
      <>
        <AdminHeaderShell />
        <SetupNotice />
      </>
    );
  }

  const [articles, subscribers] = await Promise.all([
    listAdminArticles(),
    getSubscriberCountAdmin(),
  ]);

  const published = articles.filter((a) => a.status === "published").length;

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-3 gap-4">
          <StatCard icon={<FileText className="size-4" />} label="전체 글" value={articles.length} />
          <StatCard icon={<FileText className="size-4" />} label="발행됨" value={published} />
          <StatCard icon={<Mail className="size-4" />} label="구독자" value={subscribers} />
        </div>

        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-lg font-semibold">글 목록</h2>
          <Link
            href="/admin/articles/new"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Plus className="size-4" /> 새 글
          </Link>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
          {articles.length === 0 ? (
            <p className="px-4 py-12 text-center text-sm text-muted-foreground">
              아직 글이 없습니다. “새 글”로 첫 글을 작성하세요.
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/40 text-left text-xs text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 font-medium">제목</th>
                  <th className="px-4 py-2.5 font-medium">카테고리</th>
                  <th className="px-4 py-2.5 font-medium">언어</th>
                  <th className="px-4 py-2.5 font-medium">상태</th>
                  <th className="px-4 py-2.5"></th>
                </tr>
              </thead>
              <tbody>
                {articles.map((a) => {
                  const title =
                    a.article_translations.find((t) => t.locale === "ko")?.title ??
                    a.article_translations[0]?.title ??
                    a.slug;
                  return (
                    <tr key={a.id} className="border-b border-border last:border-0">
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2">
                          {isImageUrl(a.cover_image) ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={a.cover_image!}
                              alt=""
                              className="size-8 shrink-0 rounded-md border border-border object-cover"
                            />
                          ) : (
                            <span className="shrink-0 text-lg">{a.cover_image || "📄"}</span>
                          )}
                          <span className="font-medium">{title}</span>
                          <span className="text-xs text-muted-foreground">/{a.slug}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{a.category}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {a.article_translations.map((t) => t.locale).join(" · ")}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={a.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={`/admin/articles/${a.id}`}
                          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                        >
                          <Pencil className="size-3.5" /> 편집
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}

function StatusBadge({ status }: { status: "draft" | "published" }) {
  const published = status === "published";
  return (
    <span
      className={
        published
          ? "rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success"
          : "rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
      }
    >
      {published ? "발행" : "초안"}
    </span>
  );
}

// Header without sign-out dependency for the setup-notice state.
function AdminHeaderShell() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 sm:px-6">
        <span className="flex items-center gap-2 font-bold">
          <span className="grid size-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground">
            K
          </span>
          Admin
        </span>
      </div>
    </header>
  );
}
