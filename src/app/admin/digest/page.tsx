import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { DigestBoard } from "@/components/admin/digest-board";
import { supabaseConfigured } from "@/lib/admin-data";
import { listSources, listUncuratedRawItems, listDigestItems, digestCounts } from "@/lib/digest";

export const dynamic = "force-dynamic";

export default async function DigestPage() {
  if (!supabaseConfigured()) return <SetupNotice />;

  const [sources, rawItems, drafts, counts] = await Promise.all([
    listSources(),
    listUncuratedRawItems(),
    listDigestItems("draft"),
    digestCounts(),
  ]);

  const rssSources = sources.filter((s) => s.type === "rss" && s.enabled);

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          ← 대시보드
        </Link>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">콘텐츠 수집·큐레이션</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              수집 → AI 초안 → 검토·승인. 승인된 항목만 뉴스레터/글로 발전합니다.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            초안 {counts.draft} · 승인 {counts.approved} · 반려 {counts.rejected}
          </p>
        </div>

        <DigestBoard rssSources={rssSources} rawItems={rawItems} drafts={drafts} />
      </main>
    </>
  );
}
