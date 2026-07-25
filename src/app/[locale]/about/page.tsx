import { setRequestLocale, getTranslations } from "next-intl/server";
import { CATEGORY_KEYS, CATEGORY_META } from "@/lib/categories";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const tc = await getTranslations("categories");

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-primary">{t("lead")}</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance">{t("title")}</h1>

      <div className="mt-8 space-y-5 text-lg text-muted-foreground text-pretty">
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {CATEGORY_KEYS.map((key) => {
          const Icon = CATEGORY_META[key].icon;
          return (
            <div
              key={key}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center"
            >
              <Icon className="size-5" style={{ color: CATEGORY_META[key].colorVar }} />
              <span className="text-xs font-medium">{tc(`${key}.name`)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
