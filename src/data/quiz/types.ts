import type { Locale } from "@/i18n/routing";

export const QUIZ_CATEGORIES = ["visa", "medical", "housing", "labor", "education"] as const;
export type QuizCategory = (typeof QUIZ_CATEGORIES)[number];

export const QUIZ_DIFFICULTIES = ["easy", "normal", "hard"] as const;
export type QuizDifficulty = (typeof QUIZ_DIFFICULTIES)[number];

/** 한 문제를 한 언어로 옮긴 것. */
export type QuizCopy = {
  prompt: string;
  options: [string, string, string, string];
  explanation: string;
  /** 결과 화면 "이번에 나온 한국어" 목록에 쓰는 짧은 뜻풀이. */
  meaning: string;
};

export type QuizQuestion = {
  id: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  /** 테스트 대상 한국어 용어 (항상 한글 그대로 노출). */
  term: string;
  /** 언어별 발음 표기. 한국어에는 필요 없다. */
  reading: Record<Exclude<Locale, "ko">, string>;
  /** 정답 선택지의 인덱스 (0~3). */
  answer: 0 | 1 | 2 | 3;
  /**
   * 사실 확인에 사용한 공식 출처. 화면에는 노출되지 않지만,
   * 제도가 바뀌었을 때 어디를 다시 보면 되는지 알 수 있도록 남긴다.
   * 수치·기한이 들어간 문제에는 반드시 적는다.
   */
  sources: string[];
} & Record<Locale, QuizCopy>;
