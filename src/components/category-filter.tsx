"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, type FormEvent } from "react";
import { Search } from "lucide-react";
import { CATEGORY_KEYS, CATEGORY_META, type CategoryKey } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function CategoryFilter() {
  const t = useTranslations("articles");
  const tc = useTranslations("categories");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const activeCat = params.get("category");
  const [q, setQ] = useState(params.get("q") ?? "");

  // Keep the input in sync if the URL changes elsewhere (e.g. back button).
  useEffect(() => {
    setQ(params.get("q") ?? "");
  }, [params]);

  function navigate(next: { category?: string | null; q?: string | null }) {
    const sp = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value) sp.set(key, value);
      else sp.delete(key);
    }
    const qs = sp.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  function onSearch(e: FormEvent) {
    e.preventDefault();
    navigate({ q: q.trim() || null });
  }

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-card text-muted-foreground hover:text-foreground",
    );

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={onSearch} className="relative">
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="h-11 w-full rounded-xl border border-input bg-card pl-10 pr-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
        />
      </form>

      <div className="flex flex-wrap gap-2">
        <button onClick={() => navigate({ category: null })} className={chip(!activeCat)}>
          {t("all")}
        </button>
        {CATEGORY_KEYS.map((key: CategoryKey) => {
          const Icon = CATEGORY_META[key].icon;
          return (
            <button
              key={key}
              onClick={() => navigate({ category: key })}
              className={cn(chip(activeCat === key), "inline-flex items-center gap-1.5")}
            >
              <Icon className="size-3.5" />
              {tc(`${key}.name`)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
