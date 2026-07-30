"use client";

import { useActionState, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Rss, Landmark, Sparkles, Check, X, ChevronDown } from "lucide-react";
import {
  ingestManualAction,
  ingestSourceAction,
  curateRawItemAction,
  approveDigestAction,
  rejectDigestAction,
  updateDigestAction,
  type ActionResult,
} from "@/app/admin/digest-actions";
import type { Source, RawItem, DigestItem } from "@/lib/digest";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";

export function DigestBoard({
  rssSources,
  rawItems,
  drafts,
}: {
  rssSources: Source[];
  rawItems: RawItem[];
  drafts: DigestItem[];
}) {
  const [flash, setFlash] = useState<{ msg: string; href?: string } | null>(null);
  const notify = (msg: string, href?: string) => setFlash({ msg, href });

  return (
    <div className="mt-8 space-y-10">
      {flash && (
        <div className="fixed bottom-6 left-1/2 z-50 flex max-w-md items-center gap-3 -translate-x-1/2 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-lg">
          <span>{flash.msg}</span>
          {flash.href && (
            <a href={flash.href} className="shrink-0 rounded-md bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              편집하기 →
            </a>
          )}
          <button
            type="button"
            onClick={() => setFlash(null)}
            className="shrink-0 text-xs text-muted-foreground hover:text-foreground"
          >
            닫기
          </button>
        </div>
      )}

      {/* 1. Ingest */}
      <section>
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">1 · 수집</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <RssPanel sources={rssSources} onDone={notify} />
          <ManualPanel onDone={notify} />
        </div>
      </section>

      {/* 2. Uncurated → AI */}
      <section>
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          2 · AI 요약 대기 ({rawItems.length})
        </h2>
        {rawItems.length === 0 ? (
          <p className="mt-3 rounded-lg border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
            수집된 원본이 없습니다.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {rawItems.map((r) => (
              <RawRow key={r.id} item={r} onDone={notify} />
            ))}
          </ul>
        )}
      </section>

      {/* 3. Review */}
      <section>
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          3 · 검토 대기 초안 ({drafts.length})
        </h2>
        {drafts.length === 0 ? (
          <p className="mt-3 rounded-lg border border-dashed border-border py-8 text-center text-sm text-muted-foreground">
            검토할 초안이 없습니다.
          </p>
        ) : (
          <div className="mt-3 space-y-4">
            {drafts.map((d) => (
              <DraftCard key={d.id} item={d} onDone={notify} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function RssPanel({ sources, onDone }: { sources: Source[]; onDone: (msg: string, href?: string) => void }) {
  const [pending, start] = useTransition();
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-sm font-medium">공식 채널 수집</p>
      {sources.length === 0 ? (
        <p className="mt-2 text-xs text-muted-foreground">활성 수집 소스가 없습니다.</p>
      ) : (
        <div className="mt-3 space-y-2">
          {sources.map((s) => (
            <button
              key={s.id}
              type="button"
              disabled={pending}
              onClick={() =>
                start(async () => {
                  const r = await ingestSourceAction(s.id);
                  onDone(r.ok ? `[${s.name}] ${r.info}` : `[${s.name}] ${r.error}`);
                })
              }
              className="inline-flex w-full items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted/40 disabled:opacity-60"
            >
              {pending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : s.type === "api" ? (
                <Landmark className="size-4 text-primary" />
              ) : (
                <Rss className="size-4 text-primary" />
              )}
              {s.name}에서 수집
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ManualPanel({ onDone }: { onDone: (msg: string, href?: string) => void }) {
  const [state, action] = useActionState<ActionResult, FormData>(async (p, f) => {
    const r = await ingestManualAction(p, f);
    if (r.ok && r.info) onDone(r.info);
    return r;
  }, { ok: true });

  return (
    <form action={action} className="rounded-xl border border-border bg-card p-4">
      <p className="text-sm font-medium">수동 입력 (붙여넣기)</p>
      <input name="title" placeholder="제목 (선택)" className={cn(field, "mt-3")} />
      <input name="url" placeholder="출처 URL (선택)" className={cn(field, "mt-2")} />
      <textarea name="content" rows={4} placeholder="법령/공지 본문을 붙여넣으세요" className={cn(field, "mt-2")} />
      {!state.ok && state.error && <p className="mt-2 text-xs text-destructive">{state.error}</p>}
      <ManualSubmit />
    </form>
  );
}

function ManualSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-3 inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" />}
      수집
    </button>
  );
}

function RawRow({ item, onDone }: { item: RawItem; onDone: (msg: string, href?: string) => void }) {
  const [pending, start] = useTransition();
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{item.title || "(제목 없음)"}</p>
        <p className="truncate text-xs text-muted-foreground">{item.content.slice(0, 120)}</p>
      </div>
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const r = await curateRawItemAction(item.id);
            onDone(r.ok ? r.info ?? "완료" : (r.error ?? "실패"));
          })
        }
        className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-primary/40 bg-primary/5 px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/10 disabled:opacity-60"
      >
        {pending ? <Loader2 className="size-3.5 animate-spin" /> : <Sparkles className="size-3.5" />}
        AI 요약
      </button>
    </li>
  );
}

function confidenceTone(c: number | null) {
  if (c == null) return "text-muted-foreground";
  if (c >= 0.75) return "text-success";
  if (c >= 0.5) return "text-warning";
  return "text-destructive";
}

function DraftCard({ item, onDone }: { item: DigestItem; onDone: (msg: string, href?: string) => void }) {
  const [pending, start] = useTransition();
  const [editing, setEditing] = useState(false);
  const [state, action] = useActionState<ActionResult, FormData>(async (p, f) => {
    const r = await updateDigestAction(p, f);
    if (r.ok) { onDone(r.info ?? "저장됨"); setEditing(false); }
    return r;
  }, { ok: true });

  const approve = () =>
    start(async () => {
      const r = await approveDigestAction(item.id);
      onDone(
        r.ok ? (r.info ?? "승인됨.") : (r.error ?? "실패"),
        r.ok && r.articleId ? `/admin/articles/${r.articleId}` : undefined,
      );
    });
  const reject = () =>
    start(async () => {
      const r = await rejectDigestAction(item.id);
      onDone(r.ok ? (r.info ?? "반려됨.") : (r.error ?? "실패"));
    });

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-xs">
        {item.category && <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">{item.category}</span>}
        <span className={cn("font-medium", confidenceTone(item.confidence))}>
          신뢰도 {item.confidence == null ? "—" : `${Math.round(item.confidence * 100)}%`}
        </span>
        {item.effective_date && <span className="text-muted-foreground">시행일 {item.effective_date}</span>}
      </div>

      {editing ? (
        <form action={action} className="mt-3 space-y-2">
          <input type="hidden" name="id" value={item.id} />
          <input name="title_ko" defaultValue={item.title_ko} className={field} />
          <textarea name="summary_ko" defaultValue={item.summary_ko} rows={3} className={field} />
          <textarea name="what_it_means_ko" defaultValue={item.what_it_means_ko} rows={2} className={field} placeholder="외국인에게 의미" />
          <input name="effective_date" defaultValue={item.effective_date ?? ""} placeholder="시행일" className={field} />
          {!state.ok && state.error && <p className="text-xs text-destructive">{state.error}</p>}
          <div className="flex gap-2">
            <EditSave />
            <button type="button" onClick={() => setEditing(false)} className="text-sm text-muted-foreground hover:text-foreground">
              취소
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="mt-2 font-semibold tracking-tight">{item.title_ko}</h3>
          <p className="mt-1 text-sm text-foreground/90">{item.summary_ko}</p>
          {item.what_it_means_ko && (
            <p className="mt-2 rounded-lg bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
              💡 {item.what_it_means_ko}
            </p>
          )}
          {item.source_urls.length > 0 && (
            <a href={item.source_urls[0]} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs text-primary underline">
              출처 보기
            </a>
          )}
          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              disabled={pending}
              onClick={approve}
              className="inline-flex items-center gap-1.5 rounded-lg bg-success px-3 py-1.5 text-sm font-semibold text-success-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              <Check className="size-4" /> 승인
            </button>
            <button
              type="button"
              disabled={pending}
              onClick={reject}
              className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 px-3 py-1.5 text-sm font-medium text-destructive transition hover:bg-destructive/10 disabled:opacity-60"
            >
              <X className="size-4" /> 반려
            </button>
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="ml-auto inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              수정 <ChevronDown className="size-3.5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function EditSave() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" />}
      저장
    </button>
  );
}
