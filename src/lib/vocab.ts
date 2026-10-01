import type { Locale } from "@/i18n/routing";
import {
  VOCAB_WORDS,
  VOCAB_LEVELS,
  type VocabLevel,
  type VocabPos,
} from "@/data/vocab-words";

/** 한 회차에 출제되는 단어 수. 1급부터 6급까지 급당 2단어. */
export const PER_LEVEL = 2;
export const VOCAB_LENGTH = VOCAB_LEVELS.length * PER_LEVEL;

/** 화면에 뿌리기 좋게 한 언어로 펼친 단어. */
export type VocabItem = {
  id: string;
  level: VocabLevel;
  pos: VocabPos;
  term: string;
  /** 해당 언어의 발음 표기 (한국어면 null). */
  reading: string | null;
  options: string[];
  answer: number;
  exampleKo: string;
  example: string;
  note: string;
};

/** 전체 단어 풀을 한 언어로 펼친다. 서버에서 호출해 클라이언트로 넘긴다. */
export function localizeVocab(locale: Locale): VocabItem[] {
  return VOCAB_WORDS.map((w) => {
    const copy = w[locale];
    return {
      id: w.id,
      level: w.level,
      pos: w.pos,
      term: w.term,
      reading: locale === "ko" ? null : w.reading[locale],
      options: [...copy.options],
      answer: w.answer,
      exampleKo: w.exampleKo,
      example: copy.example,
      note: copy.note,
    };
  });
}

function shuffle<T>(list: T[]): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * 급수당 PER_LEVEL개씩 뽑아 1급부터 6급 순으로 늘어놓는다.
 * 난이도가 올라가는 순서라 "어디까지 아는지"가 스스로도 느껴진다.
 */
export function pickVocab(pool: VocabItem[]): VocabItem[] {
  const picked: VocabItem[] = [];
  for (const level of VOCAB_LEVELS) {
    const bucket = pool.filter((w) => w.level === level);
    picked.push(...shuffle(bucket).slice(0, PER_LEVEL));
  }
  return picked;
}

/**
 * 맞힌 개수로 추정 급수를 돌려준다. 0은 "아직 입문" 단계.
 * 12문제 기준: 0~1 → 0, 2~3 → 1급 … 12 → 6급.
 */
export function levelForScore(score: number): number {
  if (score >= VOCAB_LENGTH) return 6;
  if (score <= 1) return 0;
  return Math.min(6, Math.floor((score - 2) / 2) + 1);
}

/** 급수별 정답 수. 결과 화면에서 어디서 막혔는지 보여 주는 데 쓴다. */
export function scoreByLevel(
  words: VocabItem[],
  answers: number[],
): { level: VocabLevel; correct: number; total: number }[] {
  return VOCAB_LEVELS.map((level) => {
    const idx = words.map((w, i) => ({ w, i })).filter(({ w }) => w.level === level);
    return {
      level,
      correct: idx.filter(({ w, i }) => answers[i] === w.answer).length,
      total: idx.length,
    };
  });
}
