import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Locale = "vi" | "en" | "ko";

const COPY: Record<Locale, { preview: string; heading: string; body: string; cta: string; signoff: string }> = {
  vi: {
    preview: "Chào mừng bạn đến với K-Drift!",
    heading: "Chào mừng đến với K-Drift 👋",
    body: "Cảm ơn bạn đã đăng ký. Mỗi tuần, chúng tôi sẽ gửi cho bạn thông tin rõ ràng, đáng tin cậy về visa, y tế, nhà ở, việc làm và đời sống ở Hàn Quốc.",
    cta: "Xem cẩm nang",
    signoff: "Hẹn gặp lại trong bản tin đầu tiên,\nĐội ngũ K-Drift",
  },
  en: {
    preview: "Welcome to K-Drift!",
    heading: "Welcome to K-Drift 👋",
    body: "Thanks for subscribing. Every week we'll send you clear, trustworthy info on visa, healthcare, housing, work, and daily life in Korea.",
    cta: "Browse the guides",
    signoff: "See you in the first issue,\nThe K-Drift team",
  },
  ko: {
    preview: "케이드리프트에 오신 것을 환영합니다!",
    heading: "케이드리프트에 오신 걸 환영해요 👋",
    body: "구독해 주셔서 감사합니다. 매주 비자·의료·주거·노동·생활 정보를 믿을 수 있게 정리해 보내드릴게요.",
    cta: "정보 둘러보기",
    signoff: "첫 뉴스레터에서 만나요,\n케이드리프트 팀",
  },
};

const UNSUB: Record<Locale, string> = {
  vi: "Hủy đăng ký",
  en: "Unsubscribe",
  ko: "수신거부",
};

export function WelcomeEmail({
  locale = "vi",
  siteUrl = "https://kdrift.kr",
  unsubscribeUrl,
}: {
  locale?: Locale;
  siteUrl?: string;
  unsubscribeUrl?: string;
}) {
  const c = COPY[locale] ?? COPY.vi;
  return (
    <Html lang={locale}>
      <Head />
      <Preview>{c.preview}</Preview>
      <Body style={{ backgroundColor: "#f6f7fb", fontFamily: "system-ui, sans-serif", margin: 0, padding: "32px 0" }}>
        <Container style={{ backgroundColor: "#ffffff", borderRadius: 16, maxWidth: 520, margin: "0 auto", padding: 40 }}>
          <Text style={{ fontSize: 20, fontWeight: 700, color: "#4338ca", margin: "0 0 24px" }}>K-Drift</Text>
          <Heading style={{ fontSize: 24, margin: "0 0 16px", color: "#1e1b4b" }}>{c.heading}</Heading>
          <Text style={{ fontSize: 15, lineHeight: 1.6, color: "#3f3f5a" }}>{c.body}</Text>
          <Section style={{ margin: "28px 0" }}>
            <Link
              href={`${siteUrl}/${locale}/articles`}
              style={{ backgroundColor: "#4f46e5", borderRadius: 10, color: "#fff", display: "inline-block", fontSize: 14, fontWeight: 600, padding: "12px 24px", textDecoration: "none" }}
            >
              {c.cta}
            </Link>
          </Section>
          <Text style={{ fontSize: 13, lineHeight: 1.6, color: "#71717a", whiteSpace: "pre-line" }}>{c.signoff}</Text>
          {unsubscribeUrl && (
            <Text style={{ fontSize: 12, lineHeight: 1.6, color: "#a1a1aa", margin: "16px 0 0" }}>
              <Link href={unsubscribeUrl} style={{ color: "#a1a1aa", textDecoration: "underline" }}>
                {UNSUB[locale]}
              </Link>
            </Text>
          )}
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;
