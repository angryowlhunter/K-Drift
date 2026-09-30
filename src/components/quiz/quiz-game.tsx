"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, X, ArrowRight, RotateCcw, Share2, Sparkles } from "lucide-react";
import { SubscribeForm } from "@/components/subscribe-form";
import {
  pickQuiz,
  tierForScore,
  compareToResidence,
  RESIDENCE_KEYS,
  QUIZ_LENGTH,
  type QuizItem,
  type ResidenceKey,
} from "@/lib/quiz";
import { cn } from "@/lib/utils";

const TIER_EMOJI: Record<number, string> = { 1: "🛬", 2: "🏠", 3: "🧭", 4: "🇰🇷" };

type Phase = "start" | "playing" | "result";

export function QuizGame({ pool }: { pool: QuizItem[] }) {
  const t = useTranslations("quiz");
  const tc = useTranslations("categories");

  const [phase, setPhase] = useState<Phase>("start");
  const [residence, setResidence] = useState<ResidenceKey | null>(null);
  const [questions, setQuestions] = useState<QuizItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  function start() {
    setQuestions(pickQuiz(pool));
    setAnswers([]);
    setIndex(0);
    setPicked(null);
    setPhase("playing");
  }

  function choose(option: number) {
    if (picked !== null) return; // 이미 답한 문제
    setPicked(option);
  }

  function next() {
    if (picked === null) return;
    const nextAnswers = [...answers, picked];
    setAnswers(nextAnswers);
    setPicked(null);
    if (index + 1 >= questions.length) {
      setPhase("result");
    } else {
      setIndex(index + 1);
    }
  }

  // ── 시작 화면 ───────────────────────────────────────────────
  if (phase === "start") {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" />
            {t("meta")}
          </span>
          <h1 className="text-section-title mt-6">{t("title")}</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("start.subtitle")}</p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold">{t("start.residenceLabel")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("start.residenceHint")}</p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {RESIDENCE_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setResidence(residence === key ? null : key)}
                aria-pressed={residence === key}
                className={cn(
                  "rounded-xl border px-4 py-3 text-sm font-medium transition",
                  residence === key
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:border-ring/50",
                )}
              >
                {t(`residence.${key}`)}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={start}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cta text-sm font-bold text-cta-foreground shadow-lg shadow-cta/30 transition hover:brightness-105"
          >
            {t("start.button")}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    );
  }

  // ── 문제 풀이 ───────────────────────────────────────────────
  if (phase === "playing") {
    const q = questions[index];
    const revealed = picked !== null;
    const correct = picked === q.answer;

    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 진행 상태 */}
        <div className="flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((index + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
            {index + 1} / {questions.length}
          </span>
        </div>

        {/* 문제 */}
        <div className="mt-8">
          <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
            {tc(`${q.category}.name`)}
          </span>
          <h2 className="mt-4 text-xl font-bold leading-relaxed text-pretty sm:text-2xl">
            {q.prompt}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{q.term}</span>
            {q.reading && <span className="ml-1.5">({q.reading})</span>}
          </p>
        </div>

        {/* 선택지 */}
        <div className="mt-7 space-y-2.5">
          {q.options.map((option, i) => {
            const isAnswer = i === q.answer;
            const isPicked = picked === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => choose(i)}
                disabled={revealed}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-relaxed transition",
                  !revealed && "border-border bg-card hover:border-primary/50 hover:bg-primary/5",
                  revealed && isAnswer && "border-success bg-success/10",
                  revealed && isPicked && !isAnswer && "border-destructive bg-destructive/10",
                  revealed && !isAnswer && !isPicked && "border-border bg-card opacity-50",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-[11px] font-bold",
                    revealed && isAnswer && "border-success bg-success text-white",
                    revealed && isPicked && !isAnswer && "border-destructive bg-destructive text-white",
                    (!revealed || (!isAnswer && !isPicked)) && "border-muted-foreground/40 text-muted-foreground",
                  )}
                >
                  {revealed && isAnswer ? (
                    <Check className="size-3" />
                  ) : revealed && isPicked ? (
                    <X className="size-3" />
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            );
          })}
        </div>

        {/* 해설 */}
        {revealed && (
          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
            <p
              className={cn(
                "text-sm font-bold",
                correct ? "text-success" : "text-destructive",
              )}
            >
              {correct ? t("play.correct") : t("play.wrong")}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{q.explanation}</p>
          </div>
        )}

        {revealed && (
          <button
            type="button"
            onClick={next}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            {index + 1 >= questions.length ? t("play.finish") : t("play.next")}
            <ArrowRight className="size-4" />
          </button>
        )}
      </div>
    );
  }

  // ── 결과 ───────────────────────────────────────────────────
  const score = answers.reduce((sum, a, i) => sum + (a === questions[i].answer ? 1 : 0), 0);
  const tier = tierForScore(score);
  const comparison = compareToResidence(tier, residence);
  const wrong = questions.filter((q, i) => answers[i] !== q.answer);

  async function share() {
    const text = `${t("title")} — ${score}/${questions.length} · ${t(`result.tiers.t${tier}.name`)}`;
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: t("title"), text, url });
        return;
      }
      await navigator.clipboard.writeText(`${text}\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* 사용자가 공유를 취소한 경우 — 무시 */
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      {/* 등급 카드 */}
      <div className="band-navy rounded-3xl px-6 py-12 text-center">
        <div className="text-5xl">{TIER_EMOJI[tier]}</div>
        <p className="mt-5 text-sm font-medium text-white/60">
          {score} / {questions.length}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white">
          {t(`result.tiers.t${tier}.name`)}
        </h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/70">
          {t(`result.tiers.t${tier}.desc`)}
        </p>
        {comparison && (
          <p className="mt-5 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-white">
            {t(`result.compare.${comparison}`)}
          </p>
        )}
      </div>

      {/* 액션 */}
      <div className="mt-5 flex gap-2.5">
        <button
          type="button"
          onClick={start}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold transition hover:border-ring/50"
        >
          <RotateCcw className="size-4" />
          {t("result.retake")}
        </button>
        <button
          type="button"
          onClick={share}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold transition hover:border-ring/50"
        >
          <Share2 className="size-4" />
          {copied ? t("result.shared") : t("result.share")}
        </button>
      </div>

      {/* 틀린 문제 */}
      {wrong.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold">{t("result.reviewTitle")}</h2>
          <div className="mt-4 space-y-3">
            {wrong.map((q) => (
              <details
                key={q.id}
                className="group rounded-xl border border-border bg-card px-5 py-4 transition open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{q.prompt}</span>
                  <span className="text-lg text-muted-foreground transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm font-medium text-success">
                  {q.options[q.answer]}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {q.explanation}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* 이번에 나온 한국어 */}
      <section className="mt-12">
        <h2 className="text-lg font-bold">{t("result.vocabTitle")}</h2>
        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {questions.map((q) => (
            <li key={q.id} className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="shrink-0 font-bold">
                {q.term}
                {q.reading && (
                  <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                    {q.reading}
                  </span>
                )}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{q.meaning}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 구독 유도 */}
      <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold">{t("result.subscribeTitle")}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {t("result.subscribeSubtitle")}
        </p>
        <SubscribeForm source="quiz" className="mx-auto mt-6 max-w-md" />
      </section>
    </div>
  );
}
