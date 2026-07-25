import { useTranslations } from "next-intl";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-2 font-bold">
          <span className="grid size-6 place-items-center rounded-md bg-primary text-xs text-primary-foreground">
            K
          </span>
          {t("rights")}
        </div>
        <p className="text-sm text-muted-foreground">{t("tagline")}</p>
      </div>
    </footer>
  );
}
