"use client";

import { useActionState, useState, useTransition, type FormEvent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";
import { Search, UserPlus, Download, Loader2, Ban, RotateCcw, Trash2 } from "lucide-react";
import {
  addSubscribersAction,
  setSubscriberStatusAction,
  deleteSubscriberAction,
  type SubActionResult,
} from "@/app/admin/subscriber-actions";
import type { Subscriber, SubStats, GrowthPoint } from "@/lib/subscribers";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const field =
  "h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

export function SubscribersBoard({
  stats,
  growth,
  subscribers,
  filter,
}: {
  stats: SubStats;
  growth: GrowthPoint[];
  subscribers: Subscriber[];
  filter: { q: string; locale: string; status: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [adding, setAdding] = useState(false);
  const [flash, setFlash] = useState<string | null>(null);

  function navigate(next: Record<string, string>) {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(next)) {
      if (v) sp.set(k, v);
      else sp.delete(k);
    }
    router.push(sp.toString() ? `${pathname}?${sp}` : pathname);
  }

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const v = new FormData(e.target as HTMLFormElement).get("q");
    navigate({ q: String(v ?? "") });
  }

  function exportCsv() {
    const head = ["email", "locale", "source", "status", "created_at"];
    const rows = subscribers.map((s) => [s.email, s.locale, s.source, s.status, s.created_at]);
    const csv = [head, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers-${subscribers.length}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const maxGrowth = Math.max(1, ...growth.map((g) => g.count));

  return (
    <div className="mt-6 space-y-8">
      {flash && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm shadow-lg">
          {flash}
          <button onClick={() => setFlash(null)} className="ml-3 text-xs text-muted-foreground hover:text-foreground">닫기</button>
        </div>
      )}

      {/* stat cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        <StatCard label="활성 구독자" value={stats.active} big />
        {locales.map((l) => (
          <StatCard key={l} label={localeNames[l]} value={stats.byLocale[l]} />
        ))}
        <StatCard label="수신거부" value={stats.unsubscribed} muted />
      </div>

      {/* growth chart */}
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="text-sm font-medium">월별 신규 구독 (최근 12개월)</p>
        <div className="mt-4 flex items-end gap-2" style={{ height: 140 }}>
          {growth.map((g) => (
            <div key={g.key} className="flex flex-1 flex-col items-center justify-end gap-1">
              <span className="text-[10px] text-muted-foreground">{g.count || ""}</span>
              <div
                className="w-full rounded-t bg-primary/80"
                style={{ height: `${(g.count / maxGrowth) * 100}%`, minHeight: g.count ? 4 : 0 }}
                title={`${g.label}: ${g.count}`}
              />
              <span className="text-[10px] text-muted-foreground">{g.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <form onSubmit={onSearch} className="relative">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <input name="q" defaultValue={filter.q} placeholder="이메일 검색" className={cn(field, "w-56 pl-9")} />
        </form>
        <select value={filter.locale} onChange={(e) => navigate({ locale: e.target.value })} className={field}>
          <option value="">모든 언어</option>
          {locales.map((l) => (
            <option key={l} value={l}>{localeNames[l]}</option>
          ))}
        </select>
        <select value={filter.status} onChange={(e) => navigate({ status: e.target.value })} className={field}>
          <option value="">전체 상태</option>
          <option value="active">활성</option>
          <option value="unsubscribed">수신거부</option>
        </select>
        <div className="ml-auto flex gap-2">
          <button onClick={() => setAdding((a) => !a)} className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:opacity-90">
            <UserPlus className="size-4" /> 구독자 추가
          </button>
          <button onClick={exportCsv} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border px-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Download className="size-4" /> CSV 내보내기
          </button>
        </div>
      </div>

      {adding && <AddForm onDone={(m) => { setFlash(m); setAdding(false); }} />}

      {/* table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <p className="border-b border-border bg-muted/40 px-4 py-2 text-xs text-muted-foreground">
          {subscribers.length}명 표시 (최대 500)
        </p>
        {subscribers.length === 0 ? (
          <p className="px-4 py-12 text-center text-sm text-muted-foreground">조건에 맞는 구독자가 없습니다.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-border text-left text-xs text-muted-foreground">
              <tr>
                <th className="px-4 py-2.5 font-medium">이메일</th>
                <th className="px-4 py-2.5 font-medium">언어</th>
                <th className="px-4 py-2.5 font-medium">유입</th>
                <th className="px-4 py-2.5 font-medium">상태</th>
                <th className="px-4 py-2.5 font-medium">가입일</th>
                <th className="px-4 py-2.5"></th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <Row key={s.id} s={s} onDone={setFlash} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, big, muted }: { label: string; value: number; big?: boolean; muted?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={cn("mt-1 font-bold", big ? "text-2xl text-primary" : "text-xl", muted && "text-muted-foreground")}>{value}</p>
    </div>
  );
}

function AddForm({ onDone }: { onDone: (m: string) => void }) {
  const [state, action] = useActionState<SubActionResult, FormData>(async (p, f) => {
    const r = await addSubscribersAction(p, f);
    if (r.ok && r.info) onDone(r.info);
    return r;
  }, { ok: true });
  return (
    <form action={action} className="rounded-xl border border-border bg-card p-5">
      <p className="text-sm font-medium">구독자 추가 (한 줄에 하나, 또는 쉼표로 여러 개)</p>
      <textarea name="emails" rows={3} placeholder={"a@example.com\nb@example.com"} className={cn(field, "mt-3 h-auto w-full py-2")} />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <select name="locale" defaultValue="vi" className={field}>
          {locales.map((l) => (<option key={l} value={l}>{localeNames[l]}</option>))}
        </select>
        <input name="source" defaultValue="manual" placeholder="유입경로" className={cn(field, "w-36")} />
        <AddSubmit />
      </div>
      {!state.ok && state.error && <p className="mt-2 text-xs text-destructive">{state.error}</p>}
    </form>
  );
}

function AddSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
      {pending && <Loader2 className="size-4 animate-spin" />} 추가
    </button>
  );
}

function Row({ s, onDone }: { s: Subscriber; onDone: (m: string) => void }) {
  const [pending, start] = useTransition();
  const active = s.status === "active";
  return (
    <tr className="border-b border-border last:border-0">
      <td className="px-4 py-2.5 font-medium">{s.email}</td>
      <td className="px-4 py-2.5 text-muted-foreground">{localeNames[s.locale as Locale] ?? s.locale}</td>
      <td className="px-4 py-2.5 text-muted-foreground">{s.source}</td>
      <td className="px-4 py-2.5">
        <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", active ? "bg-success/15 text-success" : "bg-muted text-muted-foreground")}>
          {active ? "활성" : "수신거부"}
        </span>
      </td>
      <td className="px-4 py-2.5 text-muted-foreground">{s.created_at.slice(0, 10)}</td>
      <td className="px-4 py-2.5 text-right whitespace-nowrap">
        <button
          disabled={pending}
          onClick={() => start(async () => {
            const r = await setSubscriberStatusAction(s.id, active ? "unsubscribed" : "active");
            onDone(r.ok ? (active ? "수신거부 처리됨." : "활성화됨.") : (r.error ?? "실패"));
          })}
          className="mr-1 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
          title={active ? "수신거부 처리" : "활성화"}
        >
          {active ? <Ban className="size-3.5" /> : <RotateCcw className="size-3.5" />}
        </button>
        <button
          disabled={pending}
          onClick={() => { if (confirm(`${s.email} 삭제할까요?`)) start(async () => { const r = await deleteSubscriberAction(s.id); onDone(r.ok ? "삭제됨." : (r.error ?? "실패")); }); }}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-destructive"
          title="삭제"
        >
          <Trash2 className="size-3.5" />
        </button>
      </td>
    </tr>
  );
}
