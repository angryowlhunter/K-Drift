# K-Drift (케이드리프트)

한국 거주 외국인을 위한 **다국어 생활정보 뉴스레터 + 정보 큐레이션 플랫폼**.
뉴스레터로 신뢰를 쌓고, 정보 포털로 확장한다.

> 핵심: 비자·의료·주거·노동·교육 등 한국 생활 핵심 정보를 **베트남어·영어·한국어**로 믿을 수 있게 전달.

🔗 **라이브:** https://kdrift.vercel.app

## 기술 스택

- **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4**
- **next-intl** — 3개 로케일 (`vi` 기본 · `en` · `ko`), 경로 `/[locale]/...`
- **Supabase** (Postgres + Auth + Storage) — 콘텐츠/구독자 저장, RLS
- **Resend + React Email** — 구독 환영 메일 · 주간 뉴스레터 발송
- **Anthropic API (Opus 4.8)** — 한국어→vi/en 자동번역 · 수집 콘텐츠 AI 큐레이션
- 배포: **Vercel** · 아이콘 `lucide-react`

## 실행

```bash
npm install
cp .env.local.example .env.local   # 키 채우기 (Supabase/Resend)
npm run dev      # http://localhost:3200
npm run build    # 프로덕션 빌드 + 타입체크
```

> 환경변수가 없어도 랜딩/구독 폼은 **dev fallback** 으로 동작한다(구독은 미저장, 콘솔 경고). 실제 저장·메일은 `.env.local` 설정 후.

## 디렉토리

```
src/
  app/
    [locale]/            로케일 라우트 (랜딩 page.tsx, layout.tsx)
    api/subscribe/       구독 처리 (Supabase insert + Resend 환영메일)
    globals.css          디자인 토큰 (oklch, 카테고리 색)
  components/
    layout/              헤더·푸터·언어전환
    subscribe-form.tsx   구독 폼 (클라이언트)
  emails/welcome.tsx     React Email 환영 메일 (다국어)
  i18n/                  next-intl 설정 (routing/request/navigation)
  lib/
    categories.ts        5개 카테고리 상수 + 아이콘/색
    supabase/            client(브라우저)·server·admin(service-role)
    stats.ts             구독자 수 집계 (소셜 프루프)
    utils.ts             cn()
  proxy.ts               로케일 라우팅 (Next 16 proxy 규약)
messages/                vi.json · en.json · ko.json
supabase/schema.sql      DB 스키마 (articles / article_translations / subscribers / newsletter_issues)
```

## 데이터 모델

- `articles` (언어 무관 메타) + `article_translations` (언어별 본문) → 한 글의 vi/en/ko 묶음
- `subscribers` (이메일·로케일·소스·상태)
- `newsletter_issues` (발송 아카이브)

RLS: 공개 읽기는 `status='published'` 글만. 구독/발송 쓰기는 service-role 서버 경유.

## 로드맵

- [x] **M0** 스캐폴드 · i18n 3로케일 · Supabase 클라이언트 · 스키마
- [x] **M1** 랜딩 + 구독 폼 + `/api/subscribe` + 환영 메일
- [x] **M2** 정보 큐레이션 (목록·상세·카테고리·검색·언어 토글·시드 글 5종)
- [x] **M3** `/admin` 글 작성·발행 (Supabase Auth · vi/en/ko 탭 에디터 · Markdown 미리보기 · 이미지/커버 업로드 · 슬러그 자동생성)
- [x] **M4** 뉴스레터 아카이브(공개) + 관리화면 작성·발송(Resend batch)
- [x] **M5** AI 자동번역 (한국어 원문 → vi/en, Opus 4.8 구조화 출력)
- [x] **M6** AI 수집·큐레이션 파이프라인 P0 (정부 RSS·수동 → AI 초안 → 사람 승인 → 글 승급)
- [x] **배포** Vercel 라이브 (kdrift.vercel.app)
- [x] **M7** 랜딩 UI/UX 개선 (신뢰 요소·제작 과정·최신 글·후기·FAQ) · 수신거부 원클릭 플로우 · SEO (sitemap/robots/hreflang/OG)
- [ ] 이후 수집 자동 스케줄링 · 반박형 검증 · 회원/프리미엄 · B2B 제휴

상세 기획은 [`PLAN.md`](./PLAN.md) 참고.
