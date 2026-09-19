import { defineRouting } from "next-intl/routing";

export const locales = ["vi", "en", "ko", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
  ko: "한국어",
  ja: "日本語",
  zh: "简体中文",
};

export const routing = defineRouting({
  locales,
  // Vietnamese-first per business plan (largest single nationality).
  defaultLocale: "vi",
  // Always prefix so /vi, /en, /ko are explicit and SEO-friendly.
  localePrefix: "always",
});
