"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

/**
 * Compact language dropdown. With 5 locales a pill row no longer fits on
 * mobile, so we use a native <select> (accessible, works everywhere) styled
 * as a small rounded control showing the current language.
 */
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
    <label className="relative inline-flex items-center gap-1.5 rounded-full border border-border bg-card py-1.5 pl-3 pr-2 text-xs font-medium text-foreground transition-colors hover:border-ring/50">
      <Globe className="size-3.5 text-muted-foreground" aria-hidden />
      <span className="pointer-events-none">{localeNames[locale as Locale] ?? locale}</span>
      <ChevronDown className="size-3 text-muted-foreground" aria-hidden />
      <select
        value={locale}
        disabled={isPending}
        onChange={(e) => switchTo(e.target.value as Locale)}
        aria-label="Language"
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
