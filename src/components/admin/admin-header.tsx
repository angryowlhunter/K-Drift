import Link from "next/link";
import { LayoutDashboard, Plus, Mail, Sparkles, Users } from "lucide-react";
import { signOutAction } from "@/app/admin/actions";

export function AdminHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="flex items-center gap-2 font-bold">
            <span className="grid size-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground">
              K
            </span>
            Admin
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/admin" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <LayoutDashboard className="size-4" /> 대시보드
            </Link>
            <Link
              href="/admin/articles/new"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Plus className="size-4" /> 새 글
            </Link>
            <Link href="/admin/newsletter" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="size-4" /> 뉴스레터
            </Link>
            <Link href="/admin/subscribers" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Users className="size-4" /> 구독자
            </Link>
            <Link href="/admin/digest" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Sparkles className="size-4" /> 수집·큐레이션
            </Link>
          </nav>
        </div>
        <form action={signOutAction}>
          <button className="text-sm text-muted-foreground hover:text-foreground">로그아웃</button>
        </form>
      </div>
    </header>
  );
}
