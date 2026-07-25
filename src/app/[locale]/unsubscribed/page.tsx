import { setRequestLocale, getTranslations } from "next-intl/server";
import { MailX, AlertTriangle } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default async function UnsubscribedPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  const { error } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("unsubscribe");

  const failed = error === "1";

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <div
        className={`grid size-14 place-items-center rounded-2xl ${
          failed ? "bg-destructive/10" : "bg-primary/10"
        }`}
      >
        {failed ? (
          <AlertTriangle className="size-7 text-destructive" />
        ) : (
          <MailX className="size-7 text-primary" />
        )}
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-balance">
        {failed ? t("errorTitle") : t("title")}
      </h1>
      <p className="mt-4 text-muted-foreground text-pretty">
        {failed ? t("errorDesc") : t("desc")}
      </p>
      {!failed && <p className="mt-2 text-sm text-muted-foreground">{t("resub")}</p>}
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        {t("home")}
      </Link>
    </section>
  );
}
