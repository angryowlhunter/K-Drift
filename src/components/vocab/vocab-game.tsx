"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, BookOpen, Check, RotateCcw, Share2, X } from "lucide-react";
import { SubscribeForm } from "@/components/subscribe-form";
import { levelForScore, pickVocab, scoreByLevel, type VocabItem } from "@/lib/vocab";
import { cn } from "@/lib/utils";

const LEVEL_EMOJI: Record<number, string> = {
  0: "🌱",
  1: "🔤",
  2: "💬",
  3: "📗",
  4: "📘",
  5: "📙",
  6: "🏅",
};

type Phase = "start" | "playing" | "result";

export function VocabGame({ pool }: { pool: VocabItem[] }) {
  const t = useTranslations("vocab");

  const [phase, setPhase] = useState<Phase>("start");
  const [words, setWords] = useState<VocabItem[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  function start() {
    setWords(pickVocab(pool));
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
    if (index + 1 >= words.length) {
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
            <BookOpen className="size-3.5 text-primary" />
            {t("meta")}
          </span>
          <h1 className="text-section-title mt-6">{t("title")}</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{t("start.subtitle")}</p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold">{t("start.howTitle")}</p>
          <ul className="mt-3 space-y-2">
            {(["h1", "h2", "h3"] as const).map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="leading-relaxed">{t(`start.${key}`)}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={start}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cta text-sm font-bold text-cta-foreground shadow-lg shadow-cta/30 transition hover:brightness-105"
          >
            {t("start.button")}
            <ArrowRight className="size-4" />
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    );
  }

  // ── 문제 풀이 ───────────────────────────────────────────────
  if (phase === "playing") {
    const w = words[index];
    const revealed = picked !== null;
    const correct = picked === w.answer;

    return (
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        {/* 진행 상태 */}
        <div className="flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${((index + (revealed ? 1 : 0)) / words.length) * 100}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-semibold tabular-nums text-muted-foreground">
            {index + 1} / {words.length}
          </span>
        </div>

        {/* 단어 */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {t("levelLabel", { level: w.level })}
            </span>
            <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {t(`pos.${w.pos}`)}
            </span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{t("prompt")}</p>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-pretty sm:text-5xl">
            {w.term}
          </h2>
          {w.reading && <p className="mt-2 text-sm text-muted-foreground">{w.reading}</p>}
        </div>

        {/* 선택지 */}
        <div className="mt-9 space-y-2.5">
          {w.options.map((option, i) => {
            const isAnswer = i === w.answer;
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
                    (!revealed || (!isAnswer && !isPicked)) &&
                      "border-muted-foreground/40 text-muted-foreground",
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

        {/* 예문과 쓰임새 */}
        {revealed && (
          <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
            <p className={cn("text-sm font-bold", correct ? "text-success" : "text-destructive")}>
              {correct ? t("play.correct") : t("play.wrong")}
            </p>
            <p className="mt-3 text-sm font-semibold leading-relaxed">{w.exampleKo}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.example}</p>
            <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
              {w.note}
            </p>
          </div>
        )}

        {revealed && (
          <button
            type="button"
            onClick={next}
            className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            {index + 1 >= words.length ? t("play.finish") : t("play.next")}
            <ArrowRight className="size-4" />
          </button>
        )}
      </div>
    );
  }

  // ── 결과 ───────────────────────────────────────────────────
  const score = answers.reduce((sum, a, i) => sum + (a === words[i].answer ? 1 : 0), 0);
  const level = levelForScore(score);
  const breakdown = scoreByLevel(words, answers);
  const wrong = words.filter((w, i) => answers[i] !== w.answer);

  async function share() {
    const text = `${t("title")} — ${score}/${words.length} · ${t(`result.levels.l${level}.name`)}`;
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
      {/* 추정 급수 카드 */}
      <div className="band-navy rounded-3xl px-6 py-12 text-center">
        <div className="text-5xl">{LEVEL_EMOJI[level]}</div>
        <p className="mt-5 text-sm font-medium text-white/60">
          {score} / {words.length}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white">
          {t(`result.levels.l${level}.name`)}
        </h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/70">
          {t(`result.levels.l${level}.desc`)}
        </p>
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

      {/* 급수별 결과 */}
      <section className="mt-12">
        <h2 className="text-lg font-bold">{t("result.breakdownTitle")}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{t("result.breakdownHint")}</p>
        <ul className="mt-4 space-y-2.5">
          {breakdown.map(({ level: lv, correct, total }) => (
            <li key={lv} className="flex items-center gap-3">
              <span className="w-12 shrink-0 text-xs font-semibold text-muted-foreground">
                {t("levelLabel", { level: lv })}
              </span>
              <div className="flex flex-1 gap-1.5">
                {Array.from({ length: total }, (_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-2.5 flex-1 rounded-full",
                      i < correct ? "bg-success" : "bg-muted",
                    )}
                  />
                ))}
              </div>
              <span className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums text-muted-foreground">
                {correct}/{total}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 틀린 단어 다시 보기 */}
      {wrong.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-bold">{t("result.reviewTitle")}</h2>
          <div className="mt-4 space-y-3">
            {wrong.map((w) => (
              <details
                key={w.id}
                className="group rounded-xl border border-border bg-card px-5 py-4 transition open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">
                    {w.term}
                    <span className="ml-2 text-xs font-normal text-muted-foreground">
                      {t("levelLabel", { level: w.level })}
                    </span>
                  </span>
                  <span className="text-lg text-muted-foreground transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm font-medium text-success">{w.options[w.answer]}</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed">{w.exampleKo}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.example}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.note}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* 이번에 나온 단어 */}
      <section className="mt-12">
        <h2 className="text-lg font-bold">{t("result.vocabTitle")}</h2>
        <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {words.map((w) => (
            <li
              key={w.id}
              className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <span className="w-28 shrink-0 font-bold">
                {w.term}
                {w.reading && (
                  <span className="ml-1.5 text-xs font-normal text-muted-foreground">
                    {w.reading}
                  </span>
                )}
              </span>
              <span className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {w.options[w.answer]}
              </span>
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                {t("levelLabel", { level: w.level })}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t("disclaimer")}</p>
      </section>

      {/* 구독 유도 */}
      <section className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 text-center sm:p-8">
        <h2 className="text-xl font-bold">{t("result.subscribeTitle")}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {t("result.subscribeSubtitle")}
        </p>
        <SubscribeForm source="vocab" className="mx-auto mt-6 max-w-md" />
      </section>
    </div>
  );
}
