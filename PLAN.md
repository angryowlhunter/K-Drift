# 케이드리프트(K-Drift) MVP 기획

> **현황(2026-06):** MVP(M0–M6) 구현 완료 · **라이브 배포** https://kdrift.vercel.app
> AI 자동번역 + AI 수집·큐레이션 파이프라인까지 동작.

## 0. 한 줄 정의
한국 거주 외국인 대상 **다국어 생활정보 뉴스레터 → 정보 큐레이션 포털**.
뉴스레터로 신뢰·구독자를 쌓고, 정보 포털 → 생활서비스 제휴로 확장(사업계획 1·2·3단계).

## 1. MVP 목표 (단일 지표)
> "외국인이 한국어 없이도 신뢰할 수 있는 생활정보를 읽고, 이메일을 남긴다."
- 1순위 KPI: **구독 전환(이메일 확보)**. 나머지 기능은 모두 이를 보조.

## 2. 타깃 & 언어
- 1차 페르소나: 한국 거주 1~3년차 베트남인(20~30대, 노동/유학 비자), 모바일 우선.
- 노출 언어: **vi(기본) · en · ko**. 콘텐츠 원천은 한국어로 작성 후 번역.
- 근거: 거주 외국인 270만(2025), 베트남 33만 단일 최대. 설문 3,813명 중 91% "믿을 정보 플랫폼 없음".

## 3. 정보 구조 (카테고리 5)
| key | 카테고리 | 예시 |
|---|---|---|
| visa | 비자·체류 | 비자 종류·연장, 외국인등록증, 영주권 |
| medical | 의료·건강보험 | 건강보험 가입, 병원 이용, 응급 |
| housing | 주거·부동산 | 전·월세 계약, 보증금, 사기 예방 |
| labor | 노동·취업 | 근로계약, 임금체불 대응, 4대보험 |
| education | 교육·생활 | 한국어, 은행·통신 개통, 행정 |

## 4. 확정 스택
- Next.js 16 · React 19 · TS · Tailwind v4
- i18n: next-intl (`/[locale]`, vi/en/ko, `localePrefix: always`)
- 데이터/콘텐츠: Supabase (Postgres+Auth+Storage) + 자체 `/admin`
- 뉴스레터: Resend + React Email (구독폼 → Supabase + Resend Audience + 환영메일)
- AI: Anthropic API (Opus 4.8) — 한국어→vi/en 자동번역 · 수집 콘텐츠 큐레이션(구조화 출력)
- 배포: Vercel (라이브 https://kdrift.vercel.app, main push 시 자동 배포)

## 5. 라우트 맵
```
/[locale]                       랜딩 (히어로+구독폼+소셜프루프+카테고리+후기+CTA)  ✅ M1
/[locale]/articles              카테고리·검색 필터 그리드                         ✅ M2
/[locale]/articles/[slug]       글 상세 (목차·언어토글·하단 CTA)                   ✅ M2
/[locale]/newsletter            지난 뉴스레터 아카이브                            ✅ M4
/[locale]/newsletter/[issueNo]  뉴스레터 호별 상세                               ✅ M4
/[locale]/about                 소개·신뢰 근거                                  ✅ M2
/admin                          (인증) 대시보드 — 글/구독자 현황                  ✅ M3
/admin/articles/new · [id]      글 작성·수정 (vi/en/ko 탭 에디터)                 ✅ M3
/admin/newsletter · /new        뉴스레터 목록·작성·발송                          ✅ M4
/api/subscribe                  구독 처리                                       ✅ M1
```
> 카테고리별 모음은 전용 라우트(`/category/[cat]`) 대신 `/articles?category=<key>`
> 쿼리 파라미터로 처리한다. 전용 라우트 신설 여부(SEO 자산화)는 미결 — 10절 참고.

## 6. 데이터 모델 (supabase/schema.sql)
- `articles` (slug·category·cover·author·status·published_at) — 언어 무관 메타
- `article_translations` (article_id·locale·title·summary·body_mdx) — 언어별, UNIQUE(article_id, locale)
- `subscribers` (email·locale·source·status)
- `newsletter_issues` (issue_no·subject·locale·article_ids·sent_at)
- RLS: 공개 읽기 = published 글만. 쓰기 = service-role 서버 경유.
- 번역 fallback: ko 누락 시 en → vi 순.

**콘텐츠 파이프라인 (supabase/pipeline.sql)**
- `sources` (채널 레지스트리: type[api/rss/manual]·url·category·enabled)
- `raw_items` (수집 원본: source·url·title·content·hash 중복제거·curated)
- `digest_items` (AI 초안: title_ko·summary_ko·what_it_means_ko·effective_date·source_urls·confidence·status[draft/approved/rejected])

## 7. 뉴스레터 플로우
```
랜딩 구독폼 → POST /api/subscribe
  → Supabase subscribers insert (중복 = 23505 → already)
  → Resend Audience 등록 (옵션)
  → React Email 환영 메일 발송 (locale별)
주간 발송(M4) → 발행글 모아 React Email 템플릿 → Resend broadcast → newsletter_issues 기록
```
> env 미설정 시 dev fallback: 검증·UI 흐름만 동작(미저장).

## 8. 빌드 로드맵
| # | 내용 | 상태 |
|---|---|---|
| M0 | 스캐폴드 · i18n · Supabase · 스키마 | ✅ |
| M1 | 랜딩 + 구독폼 + API + 환영메일 | ✅ |
| M2 | 정보 큐레이션 (목록·상세·검색·언어토글·시드 글 5종) | ✅ |
| M3 | `/admin` 글 작성·발행 (Supabase Auth · vi/en/ko 탭 에디터 · Markdown 미리보기 · 이미지/커버 업로드 · 슬러그 자동생성) | ✅ |
| M4 | 뉴스레터 아카이브(공개) + 관리화면 작성·발송(Resend batch) | ✅ |
| M5 | **AI 자동번역** (한국어 원문 → vi/en, Opus 4.8 구조화 출력 · Markdown·고유명사 보존) | ✅ |
| M6 | **AI 수집·큐레이션 파이프라인 P0** (정부 RSS·수동 수집 → AI 관련성·요약·신뢰도 → 사람 검토 큐 승인 → 글 초안 자동 생성) | ✅ |
| 배포 | **Vercel 라이브 배포** (kdrift.vercel.app, main push 자동 배포) | ✅ |
| 이후 | 수집 자동 스케줄링 · 반박형 검증 · 수신거부 · 회원/프리미엄 · B2B 제휴 (P1~, 사업계획 2·3단계) | ◻ |

## 9. MVP 제외 (의도적 후순위)
회원 로그인(공개 사이트 한정), 커뮤니티/댓글, 결제/프리미엄, B2B 제휴 모듈.
> (AI 자동번역·AI 큐레이션 파이프라인은 후순위였으나 M5·M6로 구현 완료.)

## 10. 다음 액션
M0–M6 구현 완료 + Vercel 라이브 배포 완료(Supabase 연동·관리자 계정 생성됨).

**보안·운영 (먼저)**
1. **키 로테이션** — Supabase service_role·ANTHROPIC_API_KEY 재발급(대화 중 노출). `.env.local` + Vercel 환경변수 갱신.
2. `NEXT_PUBLIC_SITE_URL=https://kdrift.vercel.app` 환경변수 추가 후 재배포 (메일 링크·OG 정합).
3. Resend 도메인 인증 → `NEWSLETTER_FROM` 설정 (실제 메일 발송 시).

**파이프라인 고도화 (콘텐츠 엔진)**
4. **P1** 수집 자동 스케줄링 (cron) — 정부 채널 무인 정기 수집.
5. **P2** web_fetch 전문 대조 + 반박형 AI 검증 + 신뢰도 강화 (현재는 RSS 요약 기반).
6. 추가 채널: 법제처 OPEN API · data.go.kr (1차 권위 출처).

**런칭 전 필수 (법적·운영)**
7. **수신거부 흐름** — 메일 내 unsubscribe 링크 + 해지 엔드포인트/페이지
   (정보통신망법: 영리목적 광고성 정보 수신거부 수단·표시 의무). `subscriber_status='unsubscribed'` 활용.
8. **콘텐츠 분량** — 카테고리당 최소 글 수 목표 설정.
9. **SEO/다국어 메타** — hreflang, sitemap, 글별 OG.

**미결 결정**
10. 카테고리 전용 라우트(`/category/[cat]`) vs `?category=` 쿼리 확정 (SEO 트레이드오프).
11. KPI(구독 전환) 측정 — 분석/이벤트 트래킹 (`subscribers.source` 퍼널).

**이후 (사업계획 2·3단계)**
12. 더블 옵트인 · 회원/커뮤니티 · 프리미엄 · B2B 제휴.
