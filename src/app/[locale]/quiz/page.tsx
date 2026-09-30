import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { QuizGame } from "@/components/quiz/quiz-game";
import { localizeQuiz } from "@/lib/quiz";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "quiz" });
  return {
    title: `${t("title")} — K-Drift`,
    description: t("subtitle"),
    alternates: { canonical: `/${locale}/quiz` },
    openGraph: {
      title: `${t("title")} — K-Drift`,
      description: t("subtitle"),
      url: `/${locale}/quiz`,
    },
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // 문제 풀은 서버에서 현재 언어로만 펼쳐 넘긴다(5개 언어 전부 보내지 않도록).
  const pool = localizeQuiz(locale as Locale);

  return <QuizGame pool={pool} />;
}
