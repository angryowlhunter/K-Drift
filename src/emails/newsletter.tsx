import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Locale = "vi" | "en" | "ko" | "ja" | "zh";

export type NewsletterArticle = { slug: string; title: string; summary: string };

const FOOTER: Record<Locale, string> = {
  vi: "Bạn nhận được email này vì đã đăng ký K-Drift.",
  en: "You're receiving this because you subscribed to K-Drift.",
  ko: "케이드리프트를 구독하셔서 이 메일을 받았습니다.",
  ja: "このメールはK-Driftにご登録いただいた方にお送りしています。",
  zh: "您收到此邮件是因为您订阅了 K-Drift。",
};

const READ: Record<Locale, string> = {
  vi: "Đọc bài →",
  en: "Read →",
  ko: "읽기 →",
  ja: "読む →",
  zh: "阅读 →",
};

const UNSUB: Record<Locale, string> = {
  vi: "Hủy đăng ký",
  en: "Unsubscribe",
  ko: "수신거부",
  ja: "配信停止",
  zh: "退订",
};

export function NewsletterEmail({
  locale = "vi",
  subject,
  intro,
  articles,
  siteUrl = "https://k-drift.com",
  unsubscribeUrl,
}: {
  locale?: Locale;
  subject: string;
  intro?: string;
  articles: NewsletterArticle[];
  siteUrl?: string;
  /** Per-recipient one-click unsubscribe link (법적 필수). */
  unsubscribeUrl?: string;
}) {
  return (
    <Html lang={locale}>
      <Head />
      <Preview>{subject}</Preview>
      <Body style={{ backgroundColor: "#f6f7fb", fontFamily: "system-ui, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: 16, maxWidth: 560, margin: "0 auto", padding: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#4338ca", margin: "0 0 4px" }}>K-Drift</Text>
          <Heading style={{ fontSize: 22, margin: "12px 0 8px", color: "#1e1b4b" }}>{subject}</Heading>
          {intro && <Text style={{ fontSize: 15, lineHeight: 1.6, color: "#3f3f5a" }}>{intro}</Text>}

          {articles.map((a, i) => (
            <Section key={a.slug}>
              {i > 0 && <Hr style={{ borderColor: "#eceef3", margin: "20px 0" }} />}
              <Text style={{ fontSize: 17, fontWeight: 600, margin: "16px 0 4px", color: "#1e1b4b" }}>
                {a.title}
              </Text>
              <Text style={{ fontSize: 14, lineHeight: 1.6, color: "#52525b", margin: "0 0 8px" }}>
                {a.summary}
              </Text>
              <Link
                href={`${siteUrl}/${locale}/articles/${a.slug}`}
                style={{ fontSize: 14, fontWeight: 600, color: "#4f46e5", textDecoration: "none" }}
              >
                {READ[locale]}
              </Link>
            </Section>
          ))}

          <Hr style={{ borderColor: "#eceef3", margin: "28px 0 16px" }} />
          <Text style={{ fontSize: 12, lineHeight: 1.6, color: "#a1a1aa" }}>
            {FOOTER[locale]}
            {unsubscribeUrl && (
              <>
                {" · "}
                <Link href={unsubscribeUrl} style={{ color: "#a1a1aa", textDecoration: "underline" }}>
                  {UNSUB[locale]}
                </Link>
              </>
            )}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default NewsletterEmail;
