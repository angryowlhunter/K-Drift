import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Sparkles,
  Landmark,
  ShieldCheck,
  UserCheck,
  BadgeCheck,
  Inbox,
  Languages,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SubscribeForm } from "@/components/subscribe-form";
import { ArticleCard } from "@/components/article-card";
import { CATEGORY_KEYS, CATEGORY_META } from "@/lib/categories";
import { getArticles } from "@/lib/articles";
import { getSubscriberCount } from "@/lib/stats";

// Real channel reach from the business plan.
const SOCIAL_STATS = {
  youtube: "106K",
  tiktok: "400K",
} as const;

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("hero");
  const tht = await getTranslations("heroTrust");
  const tb = await getTranslations("trustBar");
  const tc = await getTranslations("categories");
  const ts = await getTranslations("socialProof");
  const th = await getTranslations("howItWorks");
  const tl = await getTranslations("latest");
  const tm = await getTranslations("testimonials");
  const tq = await getTranslations("faq");
  const tf = await getTranslations("finalCta");

  const [subscriberCount, latestArticles] = await Promise.all([
    getSubscriberCount(),
    getArticles({ locale: locale as Locale }),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_0%,oklch(0.52_0.2_262/0.14),transparent)]" />
        <div className="mx-auto max-w-3xl px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" />
            {t("badge")}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
            {t("subtitle")}
          </p>
          <div className="mx-auto mt-8 max-w-lg">
            <SubscribeForm source="hero" />
          </div>
          {/* Trust chips */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Landmark className="size-3.5 text-primary" />
              {tht("official")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserCheck className="size-3.5 text-primary" />
              {tht("review")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-primary" />
              {tht("free")}
            </span>
          </div>
        </div>
      </section>

      {/* Official-source strip */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
          <p className="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {tb("label")}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {(["s1", "s2", "s3", "s4", "s5"] as const).map((key) => (
              <span
                key={key}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/60"
              >
                <Landmark className="size-4 text-foreground/35" />
                {tb(key)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section>
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <p className="text-center text-sm font-medium text-muted-foreground">
            {ts("title")}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <Stat value={SOCIAL_STATS.youtube} label={ts("youtube")} />
            <Stat value={SOCIAL_STATS.tiktok} label={ts("tiktok")} />
            {subscriberCount !== null && (
              <Stat value={formatCount(subscriberCount)} label={ts("subscribers")} />
            )}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">{th("title")}</h2>
            <p className="mt-3 text-muted-foreground">{th("subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {(
              [
                { key: "step1", icon: Inbox },
                { key: "step2", icon: BadgeCheck },
                { key: "step3", icon: Languages },
              ] as const
            ).map(({ key, icon: Icon }, i) => (
              <div
                key={key}
                className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-11 place-items-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-primary/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold">{th(`${key}.title`)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {th(`${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">{tc("title")}</h2>
          <p className="mt-3 text-muted-foreground">{tc("subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_KEYS.map((key) => {
            const Icon = CATEGORY_META[key].icon;
            return (
              <Link
                key={key}
                href={`/articles?category=${key}`}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <div
                  className="grid size-11 place-items-center rounded-xl"
                  style={{ backgroundColor: `color-mix(in oklch, ${CATEGORY_META[key].colorVar} 15%, transparent)` }}
                >
                  <Icon className="size-5" style={{ color: CATEGORY_META[key].colorVar }} />
                </div>
                <h3 className="mt-4 font-semibold group-hover:text-primary">
                  {tc(`${key}.name`)}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{tc(`${key}.desc`)}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest articles */}
      {latestArticles.length > 0 && (
        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{tl("title")}</h2>
                <p className="mt-3 text-muted-foreground">{tl("subtitle")}</p>
              </div>
              <Link
                href="/articles"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {tl("viewAll")}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.slice(0, 3).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">{tm("title")}</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {(["t1", "t2", "t3"] as const).map((key) => (
            <figure
              key={key}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="size-6 text-primary/40" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-pretty">
                “{tm(`${key}.quote`)}”
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium text-muted-foreground">
                — {tm(`${key}.author`)}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight">{tq("title")}</h2>
          <div className="mt-10 space-y-3">
            {(["q1", "q2", "q3", "q4"] as const).map((key) => (
              <details
                key={key}
                className="group rounded-xl border border-border bg-card px-5 py-4 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium [&::-webkit-details-marker]:hidden">
                  {tq(`${key}.q`)}
                  <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {tq(`${key}.a`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[radial-gradient(80%_120%_at_50%_0%,oklch(0.52_0.2_262/0.1),transparent)] px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance">{tf("title")}</h2>
          <p className="mt-3 text-muted-foreground">{tf("subtitle")}</p>
          <div className="mx-auto mt-8 max-w-lg">
            <SubscribeForm source="footer-cta" />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold tracking-tight sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
