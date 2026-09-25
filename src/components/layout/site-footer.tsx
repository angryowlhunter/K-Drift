import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CONTACT_EMAIL = "koreaoppa3@gmail.com";

export function SiteFooter() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold">
              <span className="grid size-7 place-items-center rounded-lg bg-primary text-sm text-primary-foreground">
                K
              </span>
              K-Drift
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {/* Menu */}
          <div>
            <p className="text-sm font-semibold">{t("menu")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/articles" className="transition-colors hover:text-foreground">
                  {nav("articles")}
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="transition-colors hover:text-foreground">
                  {nav("newsletter")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  {nav("about")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold">{t("contact")}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>(주)코리아브로스 · KoreaBros Inc.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:text-left">
          © {year} KoreaBros Inc. · {t("rights")}
        </div>
      </div>
    </footer>
  );
}
