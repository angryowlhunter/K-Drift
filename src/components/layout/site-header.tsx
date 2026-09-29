import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <Image src="/logo-symbol.png" alt="K-Drift" width={28} height={28} priority />
          <span>K-Drift</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link href="/articles" className="transition-colors hover:text-foreground">
            {t("articles")}
          </Link>
          <Link href="/newsletter" className="transition-colors hover:text-foreground">
            {t("newsletter")}
          </Link>
          <Link href="/about" className="transition-colors hover:text-foreground">
            {t("about")}
          </Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
