# 연동 가이드 (Supabase · Resend)

MVP는 키 없이도 동작한다(랜딩·구독 폼은 dev fallback, 정보 큐레이션은 seed 콘텐츠).
실제 저장·발송·관리화면을 쓰려면 아래를 설정한다.

## 1. Supabase

1. [supabase.com](https://supabase.com) 에서 프로젝트 생성
2. **SQL Editor** 에서 [`supabase/schema.sql`](./supabase/schema.sql) 전체 실행
3. **Project Settings → API** 에서 키 복사 → `.env.local`
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   SUPABASE_SERVICE_ROLE_KEY=...      # 서버 전용, 절대 노출 금지
   ```
4. **Authentication → Users → Add user** 로 관리자 계정(이메일/비밀번호) 추가
   - 공개 회원가입은 없다. 관리자는 대시보드에서 직접 추가한다.
5. 개발 서버 재시작 → `http://localhost:3200/admin` 로그인

> 설정 전에는 `/admin` 이 안내 화면(SetupNotice)을 보여준다.
> 설정 후 인증 게이트는 `src/proxy.ts` → `updateAdminSession` 이 담당한다.

## 2. Resend (뉴스레터)

1. [resend.com](https://resend.com) 가입 → 도메인 인증(SPF/DKIM)
2. API 키 발급 → `.env.local`
   ```
   RESEND_API_KEY=re_...
   NEWSLETTER_FROM="K-Drift <hello@your-domain>"
   RESEND_AUDIENCE_ID=...    # (선택) 구독자 오디언스
   ```
3. 구독 시 환영 메일([`src/emails/welcome.tsx`](./src/emails/welcome.tsx))이 자동 발송된다.

> 키가 없으면 구독은 저장만 되고 메일은 건너뛴다(콘솔 경고).

## 콘텐츠 흐름

seed 글([`src/data/seed-articles.ts`](./src/data/seed-articles.ts))은 Supabase 미설정 시의 데모용이자
초기 입력 데이터다. Supabase 연결 후 `/admin` 에서 같은 글들을 다시 입력하면
사이트가 자동으로 DB를 우선 사용한다(코드 변경 없음 — `src/lib/articles.ts` 가 분기).
