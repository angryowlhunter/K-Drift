import { AlertTriangle } from "lucide-react";

export function SetupNotice() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20">
      <div className="rounded-2xl border border-warning/40 bg-warning/10 p-6">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <AlertTriangle className="size-5 text-warning" />
          Supabase가 아직 연결되지 않았습니다
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          관리화면을 사용하려면 Supabase 연동이 필요합니다. 아래 순서로 설정하세요:
        </p>
        <ol className="mt-3 ml-5 list-decimal space-y-1.5 text-sm text-muted-foreground">
          <li>Supabase 프로젝트 생성</li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5">supabase/schema.sql</code> 실행
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5">.env.local</code> 에 URL·anon·service-role 키 입력
          </li>
          <li>Supabase Authentication에서 관리자 계정(이메일/비밀번호) 추가</li>
          <li>개발 서버 재시작</li>
        </ol>
      </div>
    </div>
  );
}
