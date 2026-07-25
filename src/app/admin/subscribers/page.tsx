import Link from "next/link";
import { AdminHeader } from "@/components/admin/admin-header";
import { SetupNotice } from "@/components/admin/setup-notice";
import { SubscribersBoard } from "@/components/admin/subscribers-board";
import { supabaseConfigured } from "@/lib/admin-data";
import { listSubscribers, subscriberStats, subscriberGrowth, type SubFilter, type SubStatus } from "@/lib/subscribers";
import { locales, type Locale } from "@/i18n/routing";

export const dynamic = "force-dynamic";

export default async function SubscribersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; locale?: string; status?: string }>;
}) {
  if (!supabaseConfigured()) return <SetupNotice />;

  const sp = await searchParams;
  const filter: SubFilter = {
    search: sp.q,
    locale: (locales as readonly string[]).includes(sp.locale ?? "") ? (sp.locale as Locale) : undefined,
    status: sp.status === "active" || sp.status === "unsubscribed" ? (sp.status as SubStatus) : undefined,
  };

  const [stats, growth, subscribers] = await Promise.all([
    subscriberStats(),
    subscriberGrowth(),
    listSubscribers(filter),
  ]);

  return (
    <>
      <AdminHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-muted-foreground hover:text-foreground">
          ← 대시보드
        </Link>
        <h1 className="mt-3 text-2xl font-bold tracking-tight">구독자 (주소록)</h1>
        <p className="mt-1 text-sm text-muted-foreground">구독자 현황·성장 추이를 보고, 검색·필터·추가·내보내기를 관리합니다.</p>

        <SubscribersBoard
          stats={stats}
          growth={growth}
          subscribers={subscribers}
          filter={{ q: sp.q ?? "", locale: filter.locale ?? "", status: filter.status ?? "" }}
        />
      </main>
    </>
  );
}
