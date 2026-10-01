import { ADVANCED_WORDS } from "./vocab/advanced";
import { BEGINNER_WORDS } from "./vocab/beginner";
import { INTERMEDIATE_WORDS } from "./vocab/intermediate";
import type { VocabWord } from "./vocab/types";

export {
  VOCAB_LEVELS,
  VOCAB_POS,
  type VocabCopy,
  type VocabLevel,
  type VocabPos,
  type VocabWord,
} from "./vocab/types";

/**
 * 「TOPIK 단어 테스트」 단어 풀. 급수별 10단어씩 총 60단어.
 * 한 회차에는 급수당 2단어씩 12단어가 1급 → 6급 순으로 출제된다.
 *
 * 등급의 근거: TOPIK은 공식 어휘 목록을 공개하지 않는다. 그래서 등급은
 * 국립국어원 「한국어 표준 교육과정」(문화체육관광부 고시 제2020-54호)의
 * 등급별 어휘를 기준으로 삼았고, 뜻풀이는 표준국어대사전을 따랐다.
 * 결과에 나오는 급수는 TOPIK 성적이 아니라 참고용 추정치다.
 */
export const VOCAB_WORDS: VocabWord[] = [
  ...BEGINNER_WORDS,
  ...INTERMEDIATE_WORDS,
  ...ADVANCED_WORDS,
];
