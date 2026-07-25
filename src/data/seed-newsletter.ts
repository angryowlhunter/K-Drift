import type { Locale } from "@/i18n/routing";

export type NewsletterSeed = {
  issueNo: number;
  sentAt: string; // ISO date
  articleSlugs: string[];
  subject: Partial<Record<Locale, string>>;
};

// Demo archive before Supabase is wired. Subjects per locale; articles by slug.
export const SEED_NEWSLETTER: NewsletterSeed[] = [
  {
    issueNo: 2,
    sentAt: "2026-06-02",
    articleSlugs: ["protect-your-deposit", "unpaid-wages-what-to-do"],
    subject: {
      ko: "보증금 지키기 & 임금 못 받았을 때",
      en: "Protecting your deposit & unpaid wages",
      vi: "Bảo vệ tiền cọc & khi bị nợ lương",
    },
  },
  {
    issueNo: 1,
    sentAt: "2026-05-26",
    articleSlugs: ["alien-registration-card", "national-health-insurance", "bank-account-and-phone"],
    subject: {
      ko: "한국 생활 시작: 외국인등록증·건강보험·통장",
      en: "Starting out in Korea: ARC, health insurance, bank account",
      vi: "Bắt đầu ở Hàn Quốc: ARC, bảo hiểm y tế, tài khoản",
    },
  },
];
