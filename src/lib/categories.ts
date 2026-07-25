import { ShieldCheck, HeartPulse, Home, Briefcase, GraduationCap, type LucideIcon } from "lucide-react";

export const CATEGORY_KEYS = ["visa", "medical", "housing", "labor", "education"] as const;
export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const CATEGORY_META: Record<
  CategoryKey,
  { icon: LucideIcon; colorVar: string }
> = {
  visa: { icon: ShieldCheck, colorVar: "var(--cat-visa)" },
  medical: { icon: HeartPulse, colorVar: "var(--cat-medical)" },
  housing: { icon: Home, colorVar: "var(--cat-housing)" },
  labor: { icon: Briefcase, colorVar: "var(--cat-labor)" },
  education: { icon: GraduationCap, colorVar: "var(--cat-education)" },
};
