import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** A cover value can be an emoji (legacy/seed) or an uploaded image URL. */
export function isImageUrl(cover: string | null | undefined): boolean {
  return !!cover && /^https?:\/\//.test(cover);
}

/**
 * Make a URL-safe slug ([a-z0-9-]) from a title.
 * Strips Latin diacritics (so Vietnamese "Thẻ đăng ký" -> "the-dang-ky").
 * Non-Latin scripts (e.g. Korean) yield "", so callers should prefer en/vi titles.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "") // combining diacritics
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
