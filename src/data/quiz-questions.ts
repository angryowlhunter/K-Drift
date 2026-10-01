import { EDUCATION_QUESTIONS } from "./quiz/education";
import { HOUSING_QUESTIONS } from "./quiz/housing";
import { LABOR_QUESTIONS } from "./quiz/labor";
import { MEDICAL_QUESTIONS } from "./quiz/medical";
import type { QuizQuestion } from "./quiz/types";
import { VISA_QUESTIONS } from "./quiz/visa";

export {
  QUIZ_CATEGORIES,
  QUIZ_DIFFICULTIES,
  type QuizCategory,
  type QuizCopy,
  type QuizDifficulty,
  type QuizQuestion,
} from "./quiz/types";

/**
 * 「한국 살이 생존력 테스트」 문제 풀. 카테고리별 12문제씩 총 60문제.
 * 한 회차에는 난이도 쿼터(easy 4 / normal 5 / hard 3)에 맞춰 12문제만 뽑히므로,
 * 같은 사람이 여러 번 풀어도 매번 다른 문제를 만난다.
 *
 * 모든 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고, 각 문제의
 * sources 필드에 법 조문과 URL을 남겼다. 제도가 바뀌면 그 출처부터 다시 보면 된다.
 * 확인되지 못한 수치는 아예 출제하지 않았다.
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  ...VISA_QUESTIONS,
  ...MEDICAL_QUESTIONS,
  ...HOUSING_QUESTIONS,
  ...LABOR_QUESTIONS,
  ...EDUCATION_QUESTIONS,
];
