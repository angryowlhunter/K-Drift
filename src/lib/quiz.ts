import type { Locale } from "@/i18n/routing";
import {
  QUIZ_QUESTIONS,
  QUIZ_DIFFICULTIES,
  type QuizCategory,
  type QuizDifficulty,
} from "@/data/quiz-questions";

/** 한 회차에 출제되는 문제 수. */
export const QUIZ_LENGTH = 12;

/**
 * 난이도 쿼터. 문제는 매번 달라져도 난이도 구성은 항상 같으므로
 * 회차가 달라도 점수를 서로 비교할 수 있다.
 */
export const DIFFICULTY_QUOTA: Record<QuizDifficulty, number> = {
  easy: 4,
  normal: 5,
  hard: 3,
};

/** 화면에 뿌리기 좋게 한 언어로 펼친 문제. */
export type QuizItem = {
  id: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  /** 테스트 대상 한국어 용어. */
  term: string;
  /** 해당 언어의 발음 표기 (한국어면 null). */
  reading: string | null;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  meaning: string;
};

/** 전체 문제 풀을 한 언어로 펼친다. 서버에서 호출해 클라이언트로 넘긴다. */
export function localizeQuiz(locale: Locale): QuizItem[] {
  return QUIZ_QUESTIONS.map((q) => {
    const copy = q[locale] ?? q.ko;
    return {
      id: q.id,
      category: q.category,
      difficulty: q.difficulty,
      term: q.term,
      reading: locale === "ko" ? null : (q.reading[locale] ?? null),
      prompt: copy.prompt,
      options: [...copy.options],
      answer: q.answer,
      explanation: copy.explanation,
      meaning: copy.meaning,
    };
  });
}

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * 풀에서 한 회차분을 뽑는다.
 *  - 난이도는 DIFFICULTY_QUOTA 그대로 (쉬움4·보통5·어려움3).
 *  - 같은 난이도 안에서는 아직 적게 뽑힌 카테고리를 먼저 집어 5개 분야가 고루 나온다.
 * 풀이 쿼터를 못 채우면 남은 문제로 채운다(초기 12문제 상태 대응).
 */
export function pickQuiz(pool: QuizItem[]): QuizItem[] {
  const picked: QuizItem[] = [];
  const perCategory = new Map<QuizCategory, number>();
  const used = new Set<string>();

  for (const difficulty of QUIZ_DIFFICULTIES) {
    const candidates = shuffle(pool.filter((q) => q.difficulty === difficulty));
    for (let i = 0; i < DIFFICULTY_QUOTA[difficulty]; i++) {
      // 정렬은 안정적이므로 카테고리 수가 같으면 섞인 순서가 유지된다.
      candidates.sort(
        (a, b) => (perCategory.get(a.category) ?? 0) - (perCategory.get(b.category) ?? 0),
      );
      const next = candidates.shift();
      if (!next) break;
      picked.push(next);
      used.add(next.id);
      perCategory.set(next.category, (perCategory.get(next.category) ?? 0) + 1);
    }
  }

  // 풀이 부족해 쿼터를 못 채웠다면 남은 문제로 보충한다.
  if (picked.length < QUIZ_LENGTH) {
    for (const q of shuffle(pool)) {
      if (picked.length >= QUIZ_LENGTH) break;
      if (!used.has(q.id)) {
        picked.push(q);
        used.add(q.id);
      }
    }
  }

  return shuffle(picked.slice(0, QUIZ_LENGTH));
}

/** 결과 등급 (1=여행자 … 4=5년차 이상). 번역문은 messages의 quiz.result.tiers. */
export type QuizTier = 1 | 2 | 3 | 4;

export function tierForScore(score: number): QuizTier {
  if (score <= 3) return 1;
  if (score <= 6) return 2;
  if (score <= 9) return 3;
  return 4;
}

/** 시작 화면에서 고르는 실제 거주 기간. 등급과 같은 척도라 바로 비교된다. */
export const RESIDENCE_KEYS = ["under6m", "under2y", "under5y", "over5y"] as const;
export type ResidenceKey = (typeof RESIDENCE_KEYS)[number];

export function residenceTier(key: ResidenceKey): QuizTier {
  return (RESIDENCE_KEYS.indexOf(key) + 1) as QuizTier;
}

/** 실거주 기간과 결과를 견줘 어떤 문구를 보여줄지. */
export function compareToResidence(
  tier: QuizTier,
  residence: ResidenceKey | null,
): "higher" | "same" | "lower" | null {
  if (!residence) return null;
  const base = residenceTier(residence);
  if (tier > base) return "higher";
  if (tier === base) return "same";
  return "lower";
}
