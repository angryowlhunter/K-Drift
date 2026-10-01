import type { Locale } from "@/i18n/routing";

export const VOCAB_LEVELS = [1, 2, 3, 4, 5, 6] as const;
export type VocabLevel = (typeof VOCAB_LEVELS)[number];

/** 품사. 화면에는 언어별로 번역해 보여 준다. */
export const VOCAB_POS = ["noun", "verb", "adjective", "adverb", "idiom"] as const;
export type VocabPos = (typeof VOCAB_POS)[number];

/** 한 단어를 한 언어로 옮긴 것. */
export type VocabCopy = {
  /** 뜻 선택지 4개. */
  options: [string, string, string, string];
  /** 예문의 뜻. 한국어에서는 예문을 쉬운 말로 풀어 쓴다. */
  example: string;
  /** 어떻게 쓰이는지 한 줄 설명. */
  note: string;
};

export type VocabWord = {
  id: string;
  level: VocabLevel;
  /** 테스트 대상 단어 (항상 한글 그대로 노출). */
  term: string;
  pos: VocabPos;
  /** 언어별 발음 표기. 한국어에는 필요 없다. */
  reading: Record<Exclude<Locale, "ko">, string>;
  /** 정답 선택지의 인덱스 (0~3). */
  answer: 0 | 1 | 2 | 3;
  /** 한국어 예문. 모든 언어에서 한글 그대로 보여 준다. */
  exampleKo: string;
  /**
   * 뜻과 등급을 확인한 자료.
   * TOPIK은 공식 어휘 목록을 공개하지 않으므로, 등급은
   * 국립국어원 「한국어 표준 교육과정」의 등급별 어휘를 기준으로 삼았다.
   */
  sources: string[];
} & Record<Locale, VocabCopy>;
