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
  MonitorPlay,
  Mail,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { SubscribeForm } from "@/components/subscribe-form";
import { ArticleCard } from "@/components/article-card";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { YouTubeLite } from "@/components/youtube-lite";
import { CATEGORY_KEYS, CATEGORY_META } from "@/lib/categories";
import { getArticles, type Article } from "@/lib/articles";
import { getSubscriberCount } from "@/lib/stats";

// Real channel reach from the business plan.
const SOCIAL_STATS = {
  youtube: { value: 106, suffix: "K" },
  tiktok: { value: 400, suffix: "K" },
} as const;

// ── YouTube embeds ──────────────────────────────────────────────────────────
// 영상 링크를 받으면 여기에 채웁니다. 비어 있으면 섹션이 렌더링되지 않습니다.
// 예: { id: "dQw4w9WgXcQ", title: "비자 연장 총정리" }
const YOUTUBE_VIDEOS: { id: string; title: string }[] = [];
const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@hanquocbros";

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
  const ty = await getTranslations("youtube");
  const tmeta = await getTranslations("meta");
  const tart = await getTranslations("articles");

  const [subscriberCount, latestArticles] = await Promise.all([
    getSubscriberCount(),
    getArticles({ locale: locale as Locale }),
  ]);

  const sourceItems = (["s1", "s2", "s3", "s4", "s5"] as const).map((k) => tb(k));

  // Split the hero title at its first comma so the second line gets the brand gradient.
  // Handles Western (,), fullwidth (,), and Japanese (、) commas.
  const heroTitle = t("title");
  const commaIdx = heroTitle.search(/[,,、]/);
  const titleTop = commaIdx > -1 ? heroTitle.slice(0, commaIdx + 1) : heroTitle;
  const titleAccent = commaIdx > -1 ? heroTitle.slice(commaIdx + 1).trim() : null;

  return (
    <>
      {/* Hero — copy left, live newsletter mockup right */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_50%_0%,oklch(0.52_0.2_262/0.13),transparent)]" />
        <div className="pointer-events-none absolute -z-10 top-[40%] right-[-8%] h-[420px] w-[540px] rounded-full bg-[radial-gradient(closest-side,oklch(0.68_0.19_35/0.1),transparent_70%)]" />
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-16 sm:px-6 sm:pt-24 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
                <Sparkles className="size-3.5 text-primary" />
                {t("badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-display mt-7 text-balance">
                {titleAccent ? (
                  <>
                    {titleTop}
                    <br />
                    <span className="text-gradient-brand">{titleAccent}</span>
                  </>
                ) : (
                  heroTitle
                )}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0">
                {t("subtitle")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mx-auto mt-8 max-w-lg lg:mx-0" id="subscribe">
                <SubscribeForm source="hero" />
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs font-medium text-muted-foreground lg:justify-start">
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
            </Reveal>
          </div>

          {/* Newsletter mockup — the "product shot", built from real latest articles */}
          <Reveal delay={200} className="hidden lg:block">
            <NewsletterMockup
              subject={tmeta("title")}
              badge={t("badge")}
              readLabel={tart("readMore")}
              articles={latestArticles.slice(0, 2)}
            />
          </Reveal>
        </div>
      </section>

      {/* Official sources — static badges */}
      <section className="border-y border-border bg-muted/40 py-9">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {tb("label")}
        </p>
        <Reveal>
          <div className="mx-auto mt-5 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 px-4">
            {sourceItems.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/70 shadow-sm"
              >
                <Landmark className="size-4 text-primary/60" />
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Social proof — dark navy band for contrast */}
      <section className="band-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-center text-sm font-medium text-white/60">{ts("title")}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <Reveal delay={0}>
              <DarkStat label={ts("youtube")}>
                <CountUp value={SOCIAL_STATS.youtube.value} suffix={SOCIAL_STATS.youtube.suffix} />
              </DarkStat>
            </Reveal>
            <Reveal delay={100}>
              <DarkStat label={ts("tiktok")}>
                <CountUp value={SOCIAL_STATS.tiktok.value} suffix={SOCIAL_STATS.tiktok.suffix} />
              </DarkStat>
            </Reveal>
            {/* Subscriber count becomes social proof only once it's meaningful;
                until then we show the language count (a real strength). */}
            {subscriberCount !== null && subscriberCount >= 100 ? (
              <Reveal delay={200} className="col-span-2 sm:col-span-1">
                <DarkStat label={ts("subscribers")}>
                  {subscriberCount < 1000 ? (
                    <CountUp value={subscriberCount} />
                  ) : (
                    formatCount(subscriberCount)
                  )}
                </DarkStat>
              </Reveal>
            ) : (
              <Reveal delay={200} className="col-span-2 sm:col-span-1">
                <DarkStat label={ts("languages")}>
                  <CountUp value={5} />
                </DarkStat>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* YouTube — 영상 링크가 등록되면 표시됩니다 */}
      {YOUTUBE_VIDEOS.length > 0 && (
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-section-title">{ty("title")}</h2>
                <p className="mt-3 text-muted-foreground">{ty("subtitle")}</p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {YOUTUBE_VIDEOS.slice(0, 2).map((v, i) => (
                <Reveal key={v.id} delay={i * 120}>
                  <YouTubeLite videoId={v.id} title={v.title} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-8 text-center">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <MonitorPlay className="size-4" />
                  {ty("channel")}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* How it works */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-title">{th("title")}</h2>
              <p className="mt-3 text-muted-foreground">{th("subtitle")}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {(
              [
                { key: "step1", icon: Inbox },
                { key: "step2", icon: BadgeCheck },
                { key: "step3", icon: Languages },
              ] as const
            ).map(({ key, icon: Icon }, i) => (
              <Reveal key={key} delay={i * 120}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-xl bg-primary/10">
                      <Icon className="size-5.5 text-primary" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] text-primary/50">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{th(`${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {th(`${key}.desc`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories — tinted cards */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section-title">{tc("title")}</h2>
              <p className="mt-3 text-muted-foreground">{tc("subtitle")}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_KEYS.map((key, i) => {
              const Icon = CATEGORY_META[key].icon;
              const color = CATEGORY_META[key].colorVar;
              return (
                <Reveal key={key} delay={(i % 3) * 100}>
                  <Link
                    href={`/articles?category=${key}`}
                    className="group block h-full rounded-2xl border border-border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundImage: `linear-gradient(140deg, color-mix(in oklch, ${color} 10%, transparent), transparent 55%)`,
                      borderColor: `color-mix(in oklch, ${color} 25%, var(--border))`,
                    }}
                  >
                    <div
                      className="grid size-12 place-items-center rounded-xl transition group-hover:scale-110"
                      style={{ backgroundColor: `color-mix(in oklch, ${color} 18%, transparent)` }}
                    >
                      <Icon className="size-5.5" style={{ color }} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight group-hover:text-primary">
                      {tc(`${key}.name`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {tc(`${key}.desc`)}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      {latestArticles.length > 0 && (
        <section>
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h2 className="text-section-title">{tl("title")}</h2>
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
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {latestArticles.slice(0, 3).map((article, i) => (
                <Reveal key={article.slug} delay={i * 120}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="text-section-title text-center">{tm("title")}</h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {(["t1", "t2", "t3"] as const).map((key, i) => (
              <Reveal key={key} delay={i * 120}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <Quote className="size-6 text-primary/40" />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-pretty">
                    “{tm(`${key}.quote`)}”
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-semibold text-muted-foreground">
                    — {tm(`${key}.author`)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <Reveal>
            <h2 className="text-section-title text-center">{tq("title")}</h2>
          </Reveal>
          <div className="mt-12 space-y-3">
            {(["q1", "q2", "q3", "q4"] as const).map((key, i) => (
              <Reveal key={key} delay={i * 60}>
                <details className="group rounded-xl border border-border bg-card px-6 py-5 transition open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold [&::-webkit-details-marker]:hidden">
                    {tq(`${key}.q`)}
                    <span className="text-lg text-muted-foreground transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {tq(`${key}.a`)}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — dark navy card */}
      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="band-navy relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-section-title text-balance text-white">{tf("title")}</h2>
            <p className="mt-4 text-white/70">{tf("subtitle")}</p>
            <div className="mx-auto mt-9 max-w-lg">
              <SubscribeForm source="footer-cta" tone="dark" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function DarkStat({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {children}
      </div>
      <div className="mt-2 text-sm font-medium text-white/60">{label}</div>
    </div>
  );
}

/** Stylized email preview built from real latest articles — the hero "product shot". */
function NewsletterMockup({
  subject,
  badge,
  readLabel,
  articles,
}: {
  subject: string;
  badge: string;
  readLabel: string;
  articles: Article[];
}) {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,oklch(0.52_0.2_262/0.25),transparent)] blur-2xl" />
      <div className="rotate-[1.5deg] rounded-2xl border border-border bg-card shadow-2xl transition duration-500 hover:rotate-0">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
          <span className="size-2.5 rounded-full bg-red-400/80" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="size-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Mail className="size-3.5" />
            K-Drift
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs font-bold text-primary">K-Drift</p>
          <p className="mt-1.5 text-lg font-bold leading-snug tracking-tight">{subject}</p>
          <p className="mt-1 text-xs text-muted-foreground">{badge}</p>
          <div className="mt-5 space-y-4">
            {articles.map((a) => (
              <div key={a.slug} className="rounded-xl border border-border bg-background p-4">
                <p className="line-clamp-2 text-sm font-semibold leading-snug">{a.title}</p>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {a.summary}
                </p>
                <p className="mt-2 text-xs font-semibold text-primary">{readLabel} →</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* floating badge */}
      <div className="absolute -left-5 -bottom-4 rotate-[-3deg] rounded-xl border border-border bg-card px-4 py-2.5 shadow-lg">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold">
          <ShieldCheck className="size-4 text-success" />
          {badge.split("·")[0]?.trim() ?? badge}
        </span>
      </div>
    </div>
  );
}
