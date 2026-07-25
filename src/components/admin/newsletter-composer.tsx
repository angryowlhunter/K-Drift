"use client";

import { useActionState, useRef, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Send, CheckCircle2, FlaskConical, Users } from "lucide-react";
import { sendNewsletterAction, testSendNewsletterAction, type SendResult } from "@/app/admin/newsletter-actions";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export type ComposerArticle = { id: string; title: string; category: string; locales: string[] };

export function NewsletterComposer({
  articles,
  recipientCounts,
}: {
  articles: ComposerArticle[];
  recipientCounts: Record<Locale, number>;
}) {
  const [state, formAction] = useActionState<SendResult, FormData>(sendNewsletterAction, { ok: true });
  const [locale, setLocale] = useState<Locale>("vi");
  const [confirming, setConfirming] = useState(false);
  const [testMsg, setTestMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [testing, startTest] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const field =
    "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";
  const label = "text-sm font-medium";
  const count = recipientCounts[locale] ?? 0;

  if (state.ok && state.sent !== undefined) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/10 p-6 text-center">
        <CheckCircle2 className="mx-auto size-8 text-success" />
        <p className="mt-3 font-semibold">발송 완료</p>
        <p className="mt-1 text-sm text-muted-foreground">{state.sent}명에게 전송되었습니다.</p>
      </div>
    );
  }

  function runTest() {
    if (!formRef.current) return;
    const fd = new FormData(formRef.current);
    setTestMsg(null);
    startTest(async () => {
      const r = await testSendNewsletterAction(fd);
      setTestMsg({ ok: r.ok, text: r.ok ? (r.info ?? "테스트 발송됨") : (r.error ?? "실패") });
    });
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={label}>발송 언어</label>
            <select
              name="locale"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className={cn(field, "mt-1")}
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {localeNames[l]} · 활성 {recipientCounts[l] ?? 0}명
                </option>
              ))}
            </select>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="size-3.5" />
              <strong className="text-foreground">{count}명</strong>의 {localeNames[locale]} 활성 구독자에게 발송됩니다.
            </p>
          </div>
          <div>
            <label className={label}>제목</label>
            <input name="subject" placeholder="이번 주 한국 생활 정보" className={cn(field, "mt-1")} />
          </div>
        </div>
        <div className="mt-4">
          <label className={label}>인사말 (선택)</label>
          <textarea
            name="intro"
            rows={3}
            placeholder="안녕하세요! 이번 주 소식을 전해드립니다."
            className="mt-1 w-full rounded-lg border border-input bg-background p-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
          />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <p className={label}>담을 글 선택 (발행된 글만)</p>
        {articles.length === 0 ? (
          <p className="mt-3 text-sm text-muted-foreground">발행된 글이 없습니다. 먼저 글을 발행하세요.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {articles.map((a) => (
              <li key={a.id}>
                <label className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm hover:bg-muted/40">
                  <input type="checkbox" name="articleIds" value={a.id} className="size-4" />
                  <span className="flex-1">{a.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {a.category} · {a.locales.join("/")}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!state.ok && state.error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {state.error}
        </p>
      )}
      {testMsg && (
        <p className={cn("rounded-lg border px-4 py-2 text-sm", testMsg.ok ? "border-success/30 bg-success/10 text-success" : "border-destructive/30 bg-destructive/10 text-destructive")}>
          {testMsg.text}
        </p>
      )}

      {/* Confirm-before-send gate */}
      {confirming ? (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="text-sm font-medium">
            {localeNames[locale]} 활성 구독자 <strong className="text-primary">{count}명</strong>에게 지금 발송합니다. 계속할까요?
          </p>
          {count === 0 && <p className="mt-1 text-xs text-destructive">활성 구독자가 0명입니다. 발송할 수 없습니다.</p>}
          <div className="mt-4 flex items-center gap-2">
            <ConfirmSendButton disabled={count === 0} />
            <button type="button" onClick={() => setConfirming(false)} className="text-sm text-muted-foreground hover:text-foreground">
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setConfirming(true)}
            disabled={articles.length === 0}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            <Send className="size-4" /> 발송 검토…
          </button>
          <button
            type="button"
            onClick={runTest}
            disabled={testing || articles.length === 0}
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-border px-4 text-sm font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-60"
            title="나(관리자 이메일)에게 테스트 메일 발송"
          >
            {testing ? <Loader2 className="size-4 animate-spin" /> : <FlaskConical className="size-4" />}
            테스트 발송
          </button>
        </div>
      )}
    </form>
  );
}

function ConfirmSendButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
    >
      {pending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
      확정 발송
    </button>
  );
}
