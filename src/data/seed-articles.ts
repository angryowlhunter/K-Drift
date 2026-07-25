import type { CategoryKey } from "@/lib/categories";
import type { Locale } from "@/i18n/routing";

export type ArticleSeed = {
  slug: string;
  category: CategoryKey;
  author: string;
  publishedAt: string; // ISO date
  coverEmoji: string;
  translations: Partial<Record<Locale, { title: string; summary: string; body: string }>>;
};

// Seed content doubles as (1) demo content before Supabase is wired and
// (2) the initial rows to insert into the DB later. Bodies are Markdown.
// NOTE: practical, non-legal-advice guidance. Always link to official sources.

export const SEED_ARTICLES: ArticleSeed[] = [
  {
    slug: "alien-registration-card",
    category: "visa",
    author: "K-Drift",
    publishedAt: "2026-06-01",
    coverEmoji: "🪪",
    translations: {
      ko: {
        title: "외국인등록증(ARC) 발급과 연장",
        summary: "90일 넘게 한국에 머문다면 꼭 필요한 외국인등록증. 발급 절차와 연장 시 주의사항을 정리했습니다.",
        body: `## 외국인등록증이란?
한국에 91일 이상 체류하는 외국인은 입국일로부터 **90일 이내**에 외국인등록을 해야 합니다. 등록을 마치면 받는 카드가 외국인등록증(ARC)이며, 은행 계좌 개설·휴대폰 개통·건강보험 등 거의 모든 생활에 필요합니다.

## 발급 절차
1. **하이코리아(hikorea.go.kr)** 에서 방문 예약
2. 출입국·외국인청 방문 — 여권, 사진, 수수료(3만 원), 체류지 증빙
3. 보통 **2~3주 후** 등기우편으로 수령

## 연장은 미리미리
체류기간 만료 **4개월 전부터** 연장 신청이 가능합니다. 만료일을 넘기면 범칙금이 부과되니, 만료 1~2개월 전에 예약하세요.

> 팁: 하이코리아 예약은 자리가 빨리 찹니다. 만료 2개월 전에 예약을 잡아두는 것을 추천합니다.`,
      },
      en: {
        title: "Alien Registration Card (ARC): Getting and Renewing It",
        summary: "If you stay in Korea over 90 days, the ARC is essential. Here's how to get one and what to watch when renewing.",
        body: `## What is the ARC?
Foreigners staying in Korea for more than 90 days must register **within 90 days** of arrival. The card you receive is the Alien Registration Card (ARC), and you need it for almost everything — opening a bank account, getting a phone, health insurance, and more.

## How to get it
1. Book a visit on **HiKorea (hikorea.go.kr)**
2. Visit the Immigration Office — passport, photo, fee (₩30,000), proof of residence
3. Usually delivered by registered mail **2–3 weeks later**

## Renew early
You can apply to extend your stay starting **4 months before** your status expires. Overstaying brings fines, so book an appointment 1–2 months before expiry.

> Tip: HiKorea slots fill up fast. Book your appointment about 2 months before expiry.`,
      },
      vi: {
        title: "Thẻ đăng ký người nước ngoài (ARC): Cấp và gia hạn",
        summary: "Nếu ở Hàn Quốc trên 90 ngày, thẻ ARC là bắt buộc. Đây là cách làm thẻ và lưu ý khi gia hạn.",
        body: `## Thẻ ARC là gì?
Người nước ngoài ở Hàn Quốc trên 90 ngày phải đăng ký **trong vòng 90 ngày** kể từ khi nhập cảnh. Thẻ bạn nhận được là Thẻ đăng ký người nước ngoài (ARC), cần cho hầu hết mọi việc — mở tài khoản ngân hàng, đăng ký điện thoại, bảo hiểm y tế...

## Cách làm thẻ
1. Đặt lịch hẹn trên **HiKorea (hikorea.go.kr)**
2. Đến Văn phòng xuất nhập cảnh — hộ chiếu, ảnh, lệ phí (30.000 won), giấy tờ chỗ ở
3. Thường nhận qua bưu điện sau **2–3 tuần**

## Gia hạn sớm
Bạn có thể xin gia hạn từ **4 tháng trước** khi hết hạn lưu trú. Ở quá hạn sẽ bị phạt, nên hãy đặt lịch hẹn 1–2 tháng trước khi hết hạn.

> Mẹo: Lịch hẹn HiKorea hết rất nhanh. Hãy đặt trước khoảng 2 tháng.`,
      },
    },
  },
  {
    slug: "national-health-insurance",
    category: "medical",
    author: "K-Drift",
    publishedAt: "2026-05-28",
    coverEmoji: "🏥",
    translations: {
      ko: {
        title: "건강보험 가입과 병원 이용법",
        summary: "외국인도 건강보험에 가입하면 진료비가 크게 줄어듭니다. 가입 조건과 병원 이용 순서를 알려드립니다.",
        body: `## 외국인도 의무 가입
6개월 이상 체류하는 외국인은 **지역가입자**로 건강보험에 자동 가입됩니다. 직장에 다니면 회사를 통해 **직장가입자**가 됩니다. 보험이 있으면 진료비의 약 **30~40%만** 본인이 부담합니다.

## 병원 이용 순서
1. 가벼운 증상은 동네 **의원(1차)** 으로
2. 의원에서 의뢰서를 받아 **종합병원(2·3차)** 으로
3. 접수 시 외국인등록증을 제시하면 보험이 적용됩니다

## 보험료를 안 내면?
지역가입자 보험료를 체납하면 비자 연장이 제한될 수 있습니다. 매달 고지서를 확인하고 자동이체를 걸어두세요.

> 응급 상황은 **119**(구급차), 통역이 필요하면 **1339**(질병관리청)나 다산콜 **120**을 이용하세요.`,
      },
      en: {
        title: "National Health Insurance & Using Hospitals",
        summary: "Foreigners with health insurance pay far less for care. Here's who qualifies and how to use hospitals.",
        body: `## Mandatory for foreigners too
Foreigners staying 6+ months are automatically enrolled as **regional subscribers**. If you're employed, you join through your company as a **workplace subscriber**. With insurance, you pay only about **30–40%** of medical costs.

## How to use hospitals
1. For minor symptoms, go to a local **clinic (primary care)**
2. Get a referral from the clinic to a **general hospital (secondary/tertiary)**
3. Show your ARC at reception to apply insurance

## What if you don't pay?
Unpaid regional premiums can affect your visa extension. Check your monthly bill and set up auto-pay.

> For emergencies call **119** (ambulance). For interpretation, call **1339** (KDCA) or Dasan **120**.`,
      },
      vi: {
        title: "Bảo hiểm y tế quốc gia & Cách dùng bệnh viện",
        summary: "Người nước ngoài có bảo hiểm y tế trả viện phí thấp hơn nhiều. Đây là điều kiện và cách đi bệnh viện.",
        body: `## Bắt buộc với cả người nước ngoài
Người nước ngoài ở từ 6 tháng trở lên được tự động đăng ký làm **người tham gia theo khu vực**. Nếu đi làm, bạn tham gia qua công ty. Có bảo hiểm, bạn chỉ trả khoảng **30–40%** chi phí khám chữa bệnh.

## Cách đi bệnh viện
1. Triệu chứng nhẹ thì đến **phòng khám (tuyến 1)** gần nhà
2. Lấy giấy chuyển viện đến **bệnh viện đa khoa (tuyến 2/3)**
3. Xuất trình thẻ ARC khi đăng ký để được áp dụng bảo hiểm

## Nếu không đóng phí?
Nợ phí bảo hiểm khu vực có thể ảnh hưởng việc gia hạn visa. Hãy kiểm tra hóa đơn hàng tháng và cài tự động thanh toán.

> Cấp cứu gọi **119** (xe cứu thương). Cần phiên dịch, gọi **1339** hoặc Dasan **120**.`,
      },
    },
  },
  {
    slug: "protect-your-deposit",
    category: "housing",
    author: "K-Drift",
    publishedAt: "2026-05-20",
    coverEmoji: "🏠",
    translations: {
      ko: {
        title: "전·월세 보증금 지키는 법",
        summary: "보증금 사기를 피하는 핵심 3단계. 계약 전·후에 꼭 확인해야 할 것들을 정리했습니다.",
        body: `## 1. 계약 전: 등기부등본 확인
계약 전 반드시 **등기부등본**을 떼어 집주인이 실제 소유자인지, 근저당(빚)이 얼마인지 확인하세요. 인터넷등기소에서 약 700원에 발급됩니다. 빚이 집값에 가까우면 위험합니다.

## 2. 계약 시: 특약과 신분 확인
- 계약서의 집주인 이름과 **신분증**을 대조
- 보증금은 반드시 **집주인 본인 계좌**로 송금
- 중요한 약속은 **특약사항**에 글로 남기기

## 3. 계약 후: 확정일자 + 전입신고
이사 당일 **주민센터**에서 전입신고를 하고 계약서에 **확정일자**를 받으세요. 이 두 가지가 있어야 보증금에 대한 **우선변제권**이 생깁니다.

> 보증금이 크면 **전세보증보험(HUG/SGI)** 가입을 고려하세요. 집주인이 돌려주지 못해도 보험사가 대신 지급합니다.`,
      },
      en: {
        title: "How to Protect Your Housing Deposit",
        summary: "Three key steps to avoid deposit scams — what to check before and after signing.",
        body: `## 1. Before signing: check the property register
Always pull the **property register (deungbu)** to confirm the landlord is the real owner and how much debt (mortgage) is on the home. It costs about ₩700 online. If the debt is close to the home's value, that's risky.

## 2. At signing: verify identity and special terms
- Match the landlord's name on the contract to their **ID card**
- Send the deposit only to the **landlord's own bank account**
- Put important promises in writing as **special clauses**

## 3. After signing: fixed date + move-in report
On moving day, file a **move-in report** at the community center (jumin center) and get a **fixed date (hwakjeong-ilja)** stamped on your contract. Both are required to gain **priority repayment rights** over your deposit.

> For large deposits, consider **jeonse deposit insurance (HUG/SGI)** — the insurer pays if the landlord can't return your money.`,
      },
      vi: {
        title: "Cách bảo vệ tiền đặt cọc thuê nhà",
        summary: "Ba bước quan trọng để tránh lừa đảo tiền cọc — cần kiểm tra gì trước và sau khi ký.",
        body: `## 1. Trước khi ký: kiểm tra sổ đăng ký nhà
Luôn lấy **sổ đăng ký bất động sản (deungbu)** để xác nhận chủ nhà là chủ sở hữu thật và nhà đang nợ (thế chấp) bao nhiêu. Phí khoảng 700 won trực tuyến. Nếu nợ gần bằng giá trị nhà thì rất rủi ro.

## 2. Khi ký: xác minh danh tính và điều khoản
- Đối chiếu tên chủ nhà trên hợp đồng với **chứng minh thư**
- Chỉ chuyển tiền cọc vào **tài khoản của chính chủ nhà**
- Ghi rõ các cam kết quan trọng vào **điều khoản đặc biệt**

## 3. Sau khi ký: ngày xác định + khai báo cư trú
Ngày chuyển đến, hãy **khai báo cư trú** tại trung tâm hành chính và đóng dấu **ngày xác định (hwakjeong-ilja)** lên hợp đồng. Cả hai mới cho bạn **quyền ưu tiên hoàn trả** tiền cọc.

> Với tiền cọc lớn, hãy cân nhắc **bảo hiểm tiền cọc jeonse (HUG/SGI)** — công ty bảo hiểm trả thay nếu chủ nhà không hoàn được tiền.`,
      },
    },
  },
  {
    slug: "unpaid-wages-what-to-do",
    category: "labor",
    author: "K-Drift",
    publishedAt: "2026-05-12",
    coverEmoji: "💼",
    translations: {
      ko: {
        title: "임금을 못 받았을 때 대응법",
        summary: "임금체불은 외국인도 똑같이 보호받습니다. 증거 수집부터 노동청 신고까지 단계별로 안내합니다.",
        body: `## 임금체불, 참지 마세요
체류 자격과 관계없이 **일한 대가는 받을 권리**가 있습니다. 임금체불은 법 위반이며 외국인도 동일하게 보호받습니다.

## 1단계: 증거 모으기
- 근로계약서, 출퇴근 기록, 급여명세서
- 사장과의 문자·카톡 대화
- 통장 입금 내역(일부라도 받은 경우)

## 2단계: 고용노동부에 진정
**고용노동부 고객상담센터 1350** 에 전화하거나, 가까운 **지방고용노동청**에 진정서를 제출합니다. 외국인 노동자 지원센터에서 통역과 서류 작성을 도와줍니다.

## 3단계: 무료 법률 지원
대한법률구조공단(**132**)에서 무료로 상담과 소송을 지원합니다.

> 퇴사했더라도 **3년 이내**면 청구할 수 있습니다. 증거만 있으면 늦지 않았습니다.`,
      },
      en: {
        title: "What to Do When Your Wages Go Unpaid",
        summary: "Foreigners are protected against unpaid wages just the same. Here's a step-by-step from evidence to filing.",
        body: `## Don't just put up with it
Regardless of your visa status, you have the **right to be paid** for work done. Unpaid wages are illegal, and foreigners are protected equally.

## Step 1: Gather evidence
- Employment contract, attendance records, payslips
- Text/KakaoTalk messages with your employer
- Bank records (even if you were paid partially)

## Step 2: File with the Labor Ministry
Call the **Labor Ministry counseling center at 1350**, or file a complaint at your nearest **Regional Labor Office**. Migrant worker support centers help with interpretation and paperwork.

## Step 3: Free legal help
The Korea Legal Aid Corporation (**132**) provides free consultation and litigation support.

> Even after leaving a job, you can claim **within 3 years**. With evidence, it's not too late.`,
      },
      vi: {
        title: "Phải làm gì khi bị nợ lương",
        summary: "Người nước ngoài cũng được bảo vệ khỏi việc nợ lương. Hướng dẫn từng bước từ thu thập bằng chứng đến nộp đơn.",
        body: `## Đừng cam chịu
Bất kể tình trạng visa, bạn có **quyền được trả công** cho công việc đã làm. Nợ lương là vi phạm pháp luật, và người nước ngoài được bảo vệ như nhau.

## Bước 1: Thu thập bằng chứng
- Hợp đồng lao động, bảng chấm công, phiếu lương
- Tin nhắn/KakaoTalk với chủ
- Sao kê ngân hàng (kể cả khi mới nhận một phần)

## Bước 2: Nộp đơn lên Bộ Lao động
Gọi **trung tâm tư vấn Bộ Lao động số 1350**, hoặc nộp đơn tại **Văn phòng Lao động địa phương** gần nhất. Trung tâm hỗ trợ lao động nước ngoài giúp phiên dịch và làm giấy tờ.

## Bước 3: Hỗ trợ pháp lý miễn phí
Cục Trợ giúp Pháp lý Hàn Quốc (**132**) tư vấn và hỗ trợ kiện tụng miễn phí.

> Dù đã nghỉ việc, bạn vẫn có thể đòi **trong vòng 3 năm**. Có bằng chứng là chưa muộn.`,
      },
    },
  },
  {
    slug: "bank-account-and-phone",
    category: "education",
    author: "K-Drift",
    publishedAt: "2026-05-05",
    coverEmoji: "🏦",
    translations: {
      ko: {
        title: "은행 계좌 개설과 휴대폰 개통",
        summary: "한국 생활의 기본, 통장과 휴대폰. 외국인이 막히기 쉬운 부분과 준비물을 정리했습니다.",
        body: `## 은행 계좌 개설
필요한 것: **외국인등록증, 여권**. 일부 은행은 외국인등록 후 일정 기간이 지나야 개설을 허용합니다.

- 처음에는 **한도계좌**(이체·출금 한도 제한)로 개설되는 경우가 많습니다
- 재직증명서, 통신비 납부내역 등을 제출하면 한도를 풀 수 있습니다
- 영어 상담이 가능한 지점을 미리 확인하면 편합니다

## 휴대폰 개통
- **후불 요금제**는 외국인등록증과 계좌가 필요합니다
- 신용·체류기간이 짧으면 **선불 유심(prepaid)** 으로 시작하세요
- 알뜰폰(MVNO)은 통신비를 크게 아낄 수 있습니다

> 계좌와 번호는 다른 모든 가입(배달앱, 정부24 등)의 기초입니다. 입국 초기에 우선 처리하세요.`,
      },
      en: {
        title: "Opening a Bank Account & Getting a Phone",
        summary: "The basics of life in Korea: a bank account and a phone. Here's where foreigners get stuck and what to prepare.",
        body: `## Opening a bank account
What you need: **ARC and passport**. Some banks require a waiting period after registration before letting you open an account.

- At first you often get a **limited account** (caps on transfers/withdrawals)
- Submit proof of employment or utility bills to lift the limits
- Check in advance which branches offer English service

## Getting a phone
- **Postpaid plans** need an ARC and a bank account
- If your credit/stay is short, start with a **prepaid SIM**
- Budget carriers (MVNO) can cut your phone bill a lot

> Your account and number are the foundation for everything else (delivery apps, Gov24, etc.). Sort them out early.`,
      },
      vi: {
        title: "Mở tài khoản ngân hàng & đăng ký điện thoại",
        summary: "Những điều cơ bản khi sống ở Hàn: tài khoản ngân hàng và điện thoại. Đây là chỗ hay vướng và đồ cần chuẩn bị.",
        body: `## Mở tài khoản ngân hàng
Cần: **thẻ ARC và hộ chiếu**. Một số ngân hàng yêu cầu chờ một thời gian sau khi đăng ký mới cho mở tài khoản.

- Ban đầu thường là **tài khoản giới hạn** (hạn mức chuyển/rút)
- Nộp giấy xác nhận việc làm hoặc hóa đơn tiện ích để gỡ hạn mức
- Nên hỏi trước chi nhánh nào có hỗ trợ tiếng Anh

## Đăng ký điện thoại
- **Gói trả sau** cần thẻ ARC và tài khoản ngân hàng
- Nếu thời gian lưu trú ngắn, hãy bắt đầu bằng **SIM trả trước (prepaid)**
- Nhà mạng giá rẻ (MVNO) giúp tiết kiệm nhiều cước

> Tài khoản và số điện thoại là nền tảng cho mọi đăng ký khác (app giao đồ ăn, Gov24...). Hãy làm sớm.`,
      },
    },
  },
];
