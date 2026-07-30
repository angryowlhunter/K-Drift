# K-Drift (케이드리프트)

한국 거주 외국인을 위한 **다국어 생활정보 뉴스레터 + 정보 큐레이션 플랫폼**.
뉴스레터로 신뢰를 쌓고, 정보 포털로 확장한다.

> 핵심: 비자·의료·주거·노동·교육 등 한국 생활 핵심 정보를 **베트남어·영어·한국어**로 믿을 수 있게 전달.

🔗 **라이브:** https://k-drift.vercel.app
운영: (주)코리아브로스 · 문의 koreaoppa3@gmail.com

## 기술 스택

- **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4**
- **next-intl** — 3개 로케일 (`vi` 기본 · `en` · `ko`), 경로 `/[locale]/...`
- **Supabase** (Postgres + Auth + Storage) — 콘텐츠/구독자 저장, RLS
- **Resend + React Email** — 구독 환영 메일 · 주간 뉴스레터 발송 (메일마다 서명된 수신거부 링크 포함)
- **정책브리핑 정책뉴스 API** (data.go.kr) — 정부 공식 발표 수집 (korea.kr RSS 중단에 따른 공식 대체)
- **Anthropic API** — 한국어→vi/en 자동번역 · 수집 콘텐츠 AI 큐레이션 (키 없이도 사이트는 정상 동작)
- 배포: **Vercel** (main push 시 자동 배포) · 아이콘 `lucide-react`

## 실행

```bash
npm install
cp .env.local.example .env.local   # 키 채우기
npm run dev      # http://localhost:3200
npm run build    # 프로덕션 빌드 + 타입체크
```

**환경변수** (Vercel에도 동일하게 설정)

| 변수 | 용도 |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` / `SUPABASE_SERVICE_ROLE_KEY` | Supabase 연결 |
| `RESEND_API_KEY` / `NEWSLETTER_FROM` | 메일 발송 (도메인 인증 전엔 `onboarding@resend.dev`) |
| `NEXT_PUBLIC_SITE_URL` | 사이트 대표 주소 (메일 링크·수신거부·sitemap 생성 기준) |
| `UNSUBSCRIBE_SECRET` | 수신거부 링크 서명용 비밀 문자열 |
| `POLICY_NEWS_API_KEY` | 정책브리핑 정책뉴스 API 인증키 (data.go.kr) |
| `ANTHROPIC_API_KEY` | (선택) AI 자동번역·AI 요약 버튼 활성화 |

> 환경변수가 없어도 랜딩/구독 폼은 **dev fallback** 으로 동작한다(구독은 미저장, 콘솔 경고).

## 라우트

```
/[locale]                       랜딩 (신뢰 배지·공식 출처·제작 과정·최신 글·후기·FAQ)
/[locale]/articles[/slug]       정보 글 목록·상세 (카테고리·검색·언어 토글)
/[locale]/newsletter[/issueNo]  뉴스레터 아카이브 (실제 발송 기록만 표시)
/[locale]/about                 소개
/[locale]/privacy               개인정보처리방침 (3개 언어)
/[locale]/unsubscribed          수신거부 완료 안내
/admin                          (인증) 대시보드·글 에디터·뉴스레터·구독자·수집 큐레이션
/api/subscribe                  구독 처리 (중복 방지 + 환영 메일)
/api/unsubscribe                원클릭 수신거부 (HMAC 서명 토큰 검증)
/api/admin/upload               이미지 업로드 (Supabase Storage `media` 버킷)
sitemap.xml · robots.txt        SEO (hreflang 포함)
```

## 데이터 모델 (supabase/)

- `schema.sql` — `articles`(언어 무관 메타) + `article_translations`(언어별 본문) + `subscribers` + `newsletter_issues`
- `pipeline.sql` — 수집 파이프라인: `sources`(채널) → `raw_items`(해시 중복제거) → `digest_items`(AI 초안·승인 큐)
- `sources-update.sql` — korea.kr RSS 중단 대응: 정책뉴스 API 채널로 교체
- RLS: 공개 읽기는 `status='published'` 글만. 쓰기는 service-role 서버 경유.

## 콘텐츠 파이프라인

```
수집(정책뉴스 API 버튼 / 수동 붙여넣기)
  → AI 요약·관련성 필터 (ANTHROPIC_API_KEY 필요)
  → 사람 검토·승인 (관리자)
  → 한국어 글 초안 자동 생성
  → 에디터에서 다듬기 + AI 자동번역(vi/en) + 발행
  → 발행 글을 골라 뉴스레터 발송 (Resend batch, 언어별)
```

## 로드맵

- [x] **M0–M6** MVP: 스캐폴드 · i18n · 랜딩+구독 · 정보 큐레이션 · admin 에디터 · 뉴스레터 발송 · AI 번역 · 수집 파이프라인
- [x] **M7** 랜딩 v2 (신뢰 중심 재설계) · 수신거부 원클릭 · SEO(sitemap/robots/hreflang/OG)
- [x] **M8** 계정 이전 (소유자 단독 관리) · korea.kr RSS 중단 대응(정책뉴스 API 교체) · 개인정보처리방침(3개 언어)
- [ ] 수집 자동 스케줄링(Vercel Cron) · UTM 채널별 전환 측정 · 도메인 연결·실발송 개방 · 회원/프리미엄 · B2B 제휴
