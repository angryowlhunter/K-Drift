"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    startTransition(() => {
      // @ts-expect-error -- params are passed through unchanged for the current route.
      router.replace({ pathname, params }, { locale: next });
    });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
      <Globe className="ml-1.5 size-3.5 text-muted-foreground" aria-hidden />
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          disabled={isPending}
          aria-current={l === locale}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            l === locale
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
