import { defineRouting } from "next-intl/routing";

// Display order everywhere (header dropdown, article language pills, admin lists):
// Korean → English → Vietnamese → Japanese → Chinese.
export const locales = ["ko", "en", "vi", "ja", "zh"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  vi: "Tiếng Việt",
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
