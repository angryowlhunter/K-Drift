import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = CONTENT[locale as keyof typeof CONTENT]?.title ?? CONTENT.vi.title;
  return { title: `${title} — K-Drift` };
}

type Section = { h: string; body: string[] };
type PolicyContent = { title: string; effective: string; intro: string; sections: Section[] };

const OPERATOR = "(주)코리아브로스 (대표: 최종락)";
const CONTACT = "koreaoppa3@gmail.com";
const EFFECTIVE_DATE = "2026-07-30";

const CONTENT: Record<"ko" | "vi" | "en", PolicyContent> = {
  ko: {
    title: "개인정보처리방침",
    effective: `시행일: ${EFFECTIVE_DATE}`,
    intro: `${OPERATOR}(이하 "K-Drift")는 개인정보 보호법 등 관련 법령을 준수하며, 이용자의 개인정보를 소중히 보호합니다. 본 방침은 K-Drift 뉴스레터 및 웹사이트 서비스에 적용됩니다.`,
    sections: [
      {
        h: "1. 수집하는 개인정보와 수집 방법",
        body: [
          "수집 항목: 이메일 주소, 선택한 언어(베트남어/영어/한국어), 유입 경로 정보.",
          "수집 방법: 웹사이트의 뉴스레터 구독 신청 폼을 통해 이용자가 직접 입력합니다. 그 외의 개인정보는 수집하지 않습니다.",
        ],
      },
      {
        h: "2. 개인정보의 처리 목적",
        body: [
          "뉴스레터(한국 생활 정보) 발송 및 서비스 관련 안내를 위해서만 사용합니다.",
          "수집한 이메일은 광고성 정보의 제3자 제공, 판매, 대여에 사용하지 않습니다.",
        ],
      },
      {
        h: "3. 보유 및 파기",
        body: [
          "구독 해지(수신거부) 시 관련 법령상 보관 의무가 없는 한 지체 없이 파기합니다.",
          "모든 뉴스레터 하단의 수신거부 링크를 통해 언제든 즉시 해지할 수 있습니다.",
        ],
      },
      {
        h: "4. 개인정보 처리의 위탁 및 국외 이전",
        body: [
          "서비스 운영을 위해 아래 해외 사업자에게 개인정보 처리를 위탁하고 있으며, 이 과정에서 개인정보가 국외로 이전·보관될 수 있습니다.",
          "· Supabase Inc.(미국) — 구독자 정보 보관 (데이터 저장 위치: AWS 서울 리전) · 구독 유지 기간 동안 보관",
          "· Resend (Plus Five Five, Inc., 미국) — 이메일 발송 처리 · 발송 시점에 이메일 주소 전달",
          "이용자는 국외 이전을 거부할 수 있으며, 거부 시 뉴스레터 서비스 이용이 제한될 수 있습니다. 거부 요청: 아래 연락처.",
        ],
      },
      {
        h: "5. 이용자의 권리",
        body: [
          "이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요청할 수 있습니다.",
          `요청 방법: ${CONTACT} 로 이메일을 보내주시면 지체 없이 처리합니다.`,
        ],
      },
      {
        h: "6. 개인정보의 안전성 확보 조치",
        body: [
          "개인정보는 접근 권한이 통제된 데이터베이스에 암호화된 통신(HTTPS)으로 저장·관리되며, 운영자 외의 접근을 차단하고 있습니다.",
        ],
      },
      {
        h: "7. 개인정보 보호책임자",
        body: [
          `책임자: 최종락 (${OPERATOR.replace(" (대표: 최종락)", "")} 대표)`,
          `문의: ${CONTACT}`,
        ],
      },
      {
        h: "8. 방침의 변경",
        body: [
          "본 방침이 변경되는 경우 웹사이트를 통해 공지하며, 중요한 변경은 이메일로 안내합니다.",
        ],
      },
    ],
  },
  vi: {
    title: "Chính sách bảo mật thông tin cá nhân",
    effective: `Ngày hiệu lực: ${EFFECTIVE_DATE}`,
    intro: `${OPERATOR} (sau đây gọi là "K-Drift") tuân thủ Luật bảo vệ thông tin cá nhân của Hàn Quốc và các quy định liên quan, đồng thời coi trọng việc bảo vệ thông tin cá nhân của người dùng. Chính sách này áp dụng cho bản tin và trang web K-Drift.`,
    sections: [
      {
        h: "1. Thông tin thu thập và cách thu thập",
        body: [
          "Thông tin thu thập: địa chỉ email, ngôn ngữ đã chọn (tiếng Việt/Anh/Hàn), thông tin kênh truy cập.",
          "Cách thu thập: người dùng tự nhập qua biểu mẫu đăng ký bản tin trên trang web. Chúng tôi không thu thập thông tin cá nhân nào khác.",
        ],
      },
      {
        h: "2. Mục đích sử dụng",
        body: [
          "Chỉ sử dụng để gửi bản tin (thông tin đời sống Hàn Quốc) và các thông báo liên quan đến dịch vụ.",
          "Email của bạn không bao giờ được bán, cho thuê hay cung cấp cho bên thứ ba vì mục đích quảng cáo.",
        ],
      },
      {
        h: "3. Lưu trữ và xóa",
        body: [
          "Khi bạn hủy đăng ký, thông tin sẽ được xóa ngay lập tức trừ khi pháp luật yêu cầu lưu giữ.",
          "Bạn có thể hủy đăng ký bất cứ lúc nào qua liên kết ở cuối mỗi email.",
        ],
      },
      {
        h: "4. Ủy thác xử lý và chuyển dữ liệu ra nước ngoài",
        body: [
          "Để vận hành dịch vụ, chúng tôi ủy thác xử lý dữ liệu cho các nhà cung cấp nước ngoài sau, và dữ liệu có thể được lưu trữ ở nước ngoài:",
          "· Supabase Inc. (Hoa Kỳ) — lưu trữ thông tin người đăng ký (máy chủ đặt tại AWS Seoul) · trong thời gian bạn đăng ký",
          "· Resend (Plus Five Five, Inc., Hoa Kỳ) — xử lý gửi email · email được chuyển khi gửi bản tin",
          `Bạn có quyền từ chối việc chuyển dữ liệu ra nước ngoài; khi đó việc sử dụng bản tin có thể bị hạn chế. Liên hệ: ${CONTACT}.`,
        ],
      },
      {
        h: "5. Quyền của người dùng",
        body: [
          "Bạn có thể yêu cầu xem, sửa, xóa hoặc ngừng xử lý thông tin cá nhân của mình bất cứ lúc nào.",
          `Cách yêu cầu: gửi email đến ${CONTACT}, chúng tôi sẽ xử lý ngay.`,
        ],
      },
      {
        h: "6. Biện pháp bảo mật",
        body: [
          "Thông tin cá nhân được lưu trữ trong cơ sở dữ liệu có kiểm soát quyền truy cập, truyền qua kết nối mã hóa (HTTPS), và chỉ người vận hành mới có quyền truy cập.",
        ],
      },
      {
        h: "7. Người chịu trách nhiệm bảo vệ thông tin",
        body: [`Người chịu trách nhiệm: Choi Jong-rak (Giám đốc)`, `Liên hệ: ${CONTACT}`],
      },
      {
        h: "8. Thay đổi chính sách",
        body: [
          "Mọi thay đổi sẽ được thông báo trên trang web; các thay đổi quan trọng sẽ được thông báo qua email.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    effective: `Effective date: ${EFFECTIVE_DATE}`,
    intro: `${OPERATOR} ("K-Drift") complies with the Personal Information Protection Act of Korea and related laws, and values the protection of your personal information. This policy applies to the K-Drift newsletter and website.`,
    sections: [
      {
        h: "1. Information we collect and how",
        body: [
          "What we collect: email address, selected language (Vietnamese/English/Korean), and referral channel information.",
          "How: you enter it yourself through the newsletter subscription form on our website. We collect nothing else.",
        ],
      },
      {
        h: "2. Purpose of use",
        body: [
          "Used only to send our newsletter (living information for Korea) and service-related notices.",
          "Your email is never sold, rented, or shared with third parties for advertising.",
        ],
      },
      {
        h: "3. Retention and deletion",
        body: [
          "When you unsubscribe, your information is deleted without delay unless retention is required by law.",
          "You can unsubscribe instantly at any time via the link at the bottom of every email.",
        ],
      },
      {
        h: "4. Processing by third parties and international transfer",
        body: [
          "To operate the service, we entrust data processing to the following overseas providers; your data may be stored abroad:",
          "· Supabase Inc. (USA) — subscriber data storage (hosted in the AWS Seoul region) · retained while you are subscribed",
          "· Resend (Plus Five Five, Inc., USA) — email delivery · your address is passed at send time",
          `You may refuse the international transfer; doing so may limit your use of the newsletter. Contact: ${CONTACT}.`,
        ],
      },
      {
        h: "5. Your rights",
        body: [
          "You may request access to, correction of, deletion of, or suspension of processing of your personal information at any time.",
          `How: email ${CONTACT} and we will act without delay.`,
        ],
      },
      {
        h: "6. Security measures",
        body: [
          "Personal information is stored in an access-controlled database, transmitted over encrypted connections (HTTPS), and accessible only to the operator.",
        ],
      },
      {
        h: "7. Privacy officer",
        body: [`Officer: Jongrak Choi (CEO)`, `Contact: ${CONTACT}`],
      },
      {
        h: "8. Changes to this policy",
        body: [
          "Changes will be announced on the website; significant changes will also be notified by email.",
        ],
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = CONTENT[locale as keyof typeof CONTENT] ?? CONTENT.vi;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{c.effective}</p>
      <p className="mt-6 leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-10 space-y-8">
        {c.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold tracking-tight">{s.h}</h2>
            <div className="mt-2 space-y-2">
              {s.body.map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
