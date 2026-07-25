import Link from "next/link";
import { Plus, Mail } from "lucide-react";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { supabaseConfigured, listAdminIssues } from "@/lib/admin-data";
import { localeNames, type Locale } from "@/i18n/routing";

export const dynamic = "force-dynamic";

export default async function AdminNewsletterPage() {
  if (!supabaseConfigured()) return <SetupNotice />;
  const issues = await listAdminIssues();

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">뉴스레터</h1>
          <Link
            href="/admin/newsletter/new"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            <Plus className="size-4" /> 새 뉴스레터
          </Link>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
          {issues.length === 0 ? (
            <p className="px-4 py-12 text-center text-sm text-muted-foreground">
              아직 발송한 뉴스레터가 없습니다.
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/40 text-left text-xs text-muted-foreground">
                <tr>
                  <th className="px-4 py-2.5 font-medium">호</th>
                  <th className="px-4 py-2.5 font-medium">제목</th>
                  <th className="px-4 py-2.5 font-medium">언어</th>
                  <th className="px-4 py-2.5 font-medium">글 수</th>
                  <th className="px-4 py-2.5 font-medium">발송일</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((i) => (
                  <tr key={i.id} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 text-muted-foreground">#{i.issue_no ?? "—"}</td>
                    <td className="px-4 py-3">
                      <Mail className="mr-2 inline size-3.5 text-muted-foreground" />
                      {i.subject}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {localeNames[i.locale as Locale] ?? i.locale}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{i.article_ids.length}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {i.sent_at ? new Date(i.sent_at).toLocaleDateString("ko-KR") : "미발송"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </>
  );
}
