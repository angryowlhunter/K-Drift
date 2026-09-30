import type { Locale } from "@/i18n/routing";

/**
 * 한국 살이 생존력 테스트 — 문제 풀.
 *
 * 출제 규칙(src/lib/quiz.ts):
 *  - 카테고리 5종에서 고르게 뽑고, 난이도는 항상 easy 4 / normal 5 / hard 3.
 *  - 그래서 매 회차 문제는 달라도 난이도는 일정 → 점수 비교가 공정하다.
 *
 * 문제 본문·선택지는 사용자 언어로, 테스트 대상인 한국어 용어만 한글 + 발음으로 노출한다.
 */

export const QUIZ_CATEGORIES = ["visa", "medical", "housing", "labor", "education"] as const;
export type QuizCategory = (typeof QUIZ_CATEGORIES)[number];

export const QUIZ_DIFFICULTIES = ["easy", "normal", "hard"] as const;
export type QuizDifficulty = (typeof QUIZ_DIFFICULTIES)[number];

/** 한 문제를 한 언어로 옮긴 것. */
export type QuizCopy = {
  prompt: string;
  options: [string, string, string, string];
  explanation: string;
  /** 결과 화면 "이번에 나온 한국어" 목록에 쓰는 짧은 뜻풀이. */
  meaning: string;
};

export type QuizQuestion = {
  id: string;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  /** 테스트 대상 한국어 용어 (항상 한글 그대로 노출). */
  term: string;
  /** 언어별 발음 표기. 한국어에는 필요 없다. */
  reading: Record<Exclude<Locale, "ko">, string>;
  /** 정답 선택지의 인덱스 (0~3). */
  answer: 0 | 1 | 2 | 3;
} & Record<Locale, QuizCopy>;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ── 주거·부동산 ────────────────────────────────────────────────
  {
    id: "jeonse",
    category: "housing",
    difficulty: "normal",
    term: "전세",
    reading: { en: "jeonse", vi: "jeonse", ja: "チョンセ", zh: "jeonse" },
    answer: 1,
    ko: {
      prompt: "부동산에서 “전세”는 무슨 뜻일까요?",
      options: [
        "매달 집세를 내는 계약",
        "큰 보증금을 맡기고 월세 없이 사는 계약",
        "집을 완전히 사들이는 것",
        "회사가 집세를 대신 내주는 제도",
      ],
      explanation:
        "전세는 큰 보증금을 집주인에게 맡기고 계약 기간 동안 월세를 내지 않는 한국 특유의 제도예요. 계약이 끝나면 보증금을 돌려받지만 전세사기 위험이 있으니, 계약 전 등기부등본 확인은 필수입니다.",
      meaning: "보증금을 맡기고 월세 없이 사는 임대 방식",
    },
    en: {
      prompt: "In Korean real estate, what does 전세 mean?",
      options: [
        "A contract where you pay rent every month",
        "A contract where you leave a large deposit and pay no monthly rent",
        "Buying the property outright",
        "A system where your company pays your rent",
      ],
      explanation:
        "Jeonse is a uniquely Korean system: you hand the landlord a large deposit and pay no monthly rent for the contract period. You get the deposit back at the end — but jeonse fraud is a real risk, so always check the property register (등기부등본) before signing.",
      meaning: "Renting with a large deposit instead of monthly rent",
    },
    vi: {
      prompt: "Trong bất động sản Hàn Quốc, 전세 nghĩa là gì?",
      options: [
        "Hợp đồng trả tiền nhà hàng tháng",
        "Hợp đồng đặt cọc một khoản lớn và không phải trả tiền nhà hàng tháng",
        "Mua đứt căn nhà",
        "Chế độ công ty trả tiền nhà thay bạn",
      ],
      explanation:
        "Jeonse là chế độ đặc trưng của Hàn Quốc: bạn giao cho chủ nhà một khoản đặt cọc lớn và không phải trả tiền nhà hàng tháng. Hết hợp đồng bạn nhận lại tiền cọc, nhưng có rủi ro lừa đảo jeonse nên nhất định phải kiểm tra sổ đăng ký bất động sản (등기부등본) trước khi ký.",
      meaning: "Thuê nhà bằng tiền đặt cọc lớn thay vì trả hàng tháng",
    },
    ja: {
      prompt: "韓国の不動産で「전세」とは何でしょう?",
      options: [
        "毎月家賃を払う契約",
        "まとまった保証金を預け、家賃を払わずに住む契約",
        "家を買い取ること",
        "会社が家賃を代わりに払う制度",
      ],
      explanation:
        "チョンセは韓国独特の制度で、大家にまとまった保証金を預ける代わりに契約期間中の家賃が不要になります。契約終了時に保証金は返ってきますが、チョンセ詐欺のリスクがあるため、契約前の登記簿謄本(등기부등본)の確認が必須です。",
      meaning: "保証金を預けて家賃なしで住む賃貸方式",
    },
    zh: {
      prompt: "在韩国房地产中,“전세”是什么意思?",
      options: [
        "每月支付房租的合同",
        "缴纳一大笔保证金、无需月租的合同",
        "直接买下房子",
        "公司代付房租的制度",
      ],
      explanation:
        "全税(jeonse)是韩国特有的制度:向房东缴纳一大笔保证金,合同期内无需支付月租。合同到期可拿回保证金,但存在「全税诈骗」风险,签约前务必查看房产登记簿(등기부등본)。",
      meaning: "用大额保证金代替月租的租房方式",
    },
  },
  {
    id: "gwanribi",
    category: "housing",
    difficulty: "easy",
    term: "관리비",
    reading: { en: "gwanribi", vi: "gwanribi", ja: "クァルリビ", zh: "gwanribi" },
    answer: 2,
    ko: {
      prompt: "월세 계약을 했습니다. “관리비”는 어떤 돈일까요?",
      options: [
        "계약할 때 부동산에 내는 수수료",
        "보증금의 다른 이름",
        "월세와 별도로 내는 건물 공용 비용",
        "이사할 때 한 번만 내는 돈",
      ],
      explanation:
        "관리비는 월세와 별도로 매달 내는 돈으로, 복도 청소·경비·공용 전기·엘리베이터 등에 쓰입니다. 건물에 따라 수도요금이나 인터넷이 포함되기도 하니, 계약 전에 “관리비에 뭐가 포함되나요?”를 꼭 물어보세요.",
      meaning: "월세와 별도로 매달 내는 건물 공용 관리 비용",
    },
    en: {
      prompt: "You signed a monthly rental contract. What is 관리비?",
      options: [
        "The commission you pay the real estate agent",
        "Another word for the deposit",
        "A building maintenance fee paid on top of rent",
        "A one-time fee paid when you move in",
      ],
      explanation:
        "Gwanribi is a monthly fee separate from your rent, covering hallway cleaning, security, shared electricity, elevators and so on. Some buildings include water or internet in it — always ask \"what's included in the 관리비?\" before signing.",
      meaning: "Monthly building maintenance fee, separate from rent",
    },
    vi: {
      prompt: "Bạn vừa ký hợp đồng thuê nhà theo tháng. 관리비 là khoản tiền gì?",
      options: [
        "Phí hoa hồng trả cho công ty bất động sản",
        "Tên gọi khác của tiền đặt cọc",
        "Phí quản lý chung của tòa nhà, trả riêng ngoài tiền thuê",
        "Khoản tiền chỉ trả một lần khi chuyển vào",
      ],
      explanation:
        "Gwanribi là khoản trả hàng tháng tách riêng khỏi tiền thuê, dùng cho dọn dẹp hành lang, bảo vệ, điện chung, thang máy... Một số tòa nhà tính cả tiền nước hoặc internet vào đây, nên trước khi ký hãy hỏi rõ \"관리비 gồm những gì?\".",
      meaning: "Phí quản lý tòa nhà trả hàng tháng, ngoài tiền thuê",
    },
    ja: {
      prompt: "月家賃(ウォルセ)の契約をしました。「관리비」とは何のお金でしょう?",
      options: [
        "契約時に不動産屋へ払う手数料",
        "保証金の別名",
        "家賃とは別に払う建物の共益費",
        "引っ越しのとき一度だけ払うお金",
      ],
      explanation:
        "クァルリビは家賃とは別に毎月払う共益費で、廊下の清掃・警備・共用電気・エレベーターなどに使われます。建物によっては水道代やインターネット代が含まれることもあるので、契約前に「관리비には何が含まれますか?」と必ず確認しましょう。",
      meaning: "家賃とは別に毎月払う建物の共益費",
    },
    zh: {
      prompt: "你签了月租合同。“관리비”是什么费用?",
      options: [
        "签约时付给中介的手续费",
        "保证金的另一种说法",
        "在房租之外另付的楼宇公共管理费",
        "搬入时只付一次的费用",
      ],
      explanation:
        "管理费(gwanribi)是与房租分开、每月缴纳的费用,用于走廊清洁、保安、公共用电、电梯等。部分楼宇还包含水费或网费,签约前一定要问清「관리비包含哪些项目」。",
      meaning: "在房租之外每月缴纳的楼宇公共管理费",
    },
  },
  {
    id: "jeonip-singo",
    category: "housing",
    difficulty: "hard",
    term: "전입신고",
    reading: { en: "jeonip-singo", vi: "jeonip-singo", ja: "チョニプシンゴ", zh: "jeonip-singo" },
    answer: 0,
    ko: {
      prompt: "이사를 했습니다. 외국인등록증이 있다면 “전입신고(체류지 변경신고)”는 언제까지 해야 할까요?",
      options: [
        "이사한 날부터 14일 이내",
        "이사한 날부터 3개월 이내",
        "다음 비자 연장 때 함께",
        "집주인이 알아서 해주므로 할 필요 없음",
      ],
      explanation:
        "외국인등록을 마친 사람이 이사하면 14일 이내에 새 주소를 신고해야 하고, 늦으면 과태료가 부과될 수 있습니다. 관할 출입국·외국인청 또는 주민센터에서 할 수 있어요. 전세·월세라면 이때 확정일자도 함께 받아두면 보증금을 지키는 데 도움이 됩니다.",
      meaning: "이사 후 새 주소를 신고하는 절차 (14일 이내)",
    },
    en: {
      prompt: "You just moved. If you hold an alien registration card, by when must you file 전입신고 (change of residence)?",
      options: [
        "Within 14 days of moving",
        "Within 3 months of moving",
        "Together with your next visa extension",
        "Never — the landlord handles it for you",
      ],
      explanation:
        "Registered foreign residents must report a new address within 14 days of moving; filing late can mean a fine. You can do it at your immigration office or a community service center (주민센터). If you're renting, get the fixed date stamp (확정일자) at the same time — it helps protect your deposit.",
      meaning: "Reporting your new address after moving (within 14 days)",
    },
    vi: {
      prompt: "Bạn vừa chuyển nhà. Nếu đã có thẻ đăng ký người nước ngoài, phải làm 전입신고 (khai báo thay đổi nơi cư trú) trong bao lâu?",
      options: [
        "Trong vòng 14 ngày kể từ ngày chuyển",
        "Trong vòng 3 tháng kể từ ngày chuyển",
        "Làm cùng lúc với lần gia hạn visa tiếp theo",
        "Không cần vì chủ nhà sẽ làm giúp",
      ],
      explanation:
        "Người nước ngoài đã đăng ký cư trú phải khai báo địa chỉ mới trong vòng 14 ngày sau khi chuyển nhà; khai muộn có thể bị phạt. Bạn có thể làm tại văn phòng xuất nhập cảnh hoặc trung tâm hành chính phường (주민센터). Nếu thuê nhà, hãy xin luôn dấu xác nhận ngày (확정일자) để bảo vệ tiền đặt cọc.",
      meaning: "Thủ tục khai báo địa chỉ mới sau khi chuyển nhà (trong 14 ngày)",
    },
    ja: {
      prompt: "引っ越しをしました。外国人登録証がある場合、「전입신고」(滞在地変更届)はいつまでに行うべきでしょう?",
      options: [
        "引っ越した日から14日以内",
        "引っ越した日から3か月以内",
        "次のビザ延長のときにまとめて",
        "大家がやってくれるので不要",
      ],
      explanation:
        "外国人登録を済ませた人が引っ越した場合、14日以内に新住所を届け出る必要があり、遅れると過料が科されることがあります。管轄の出入国・外国人庁または住民センター(주민센터)で手続きできます。賃貸なら同時に確定日付(확정일자)も受けておくと保証金を守るのに役立ちます。",
      meaning: "引っ越し後に新住所を届け出る手続き(14日以内)",
    },
    zh: {
      prompt: "你刚搬了家。如果持有外国人登录证,“전입신고”(居住地变更申报)最晚要在什么时候完成?",
      options: [
        "搬家之日起14天内",
        "搬家之日起3个月内",
        "等下次签证延期时一并办理",
        "不用办,房东会代办",
      ],
      explanation:
        "已完成外国人登录的人搬家后,须在14天内申报新住址,逾期可能被处以罚款。可在管辖出入境·外国人厅或社区中心(주민센터)办理。若是租房,建议同时办理确定日期(확정일자),有助于保护保证金。",
      meaning: "搬家后申报新住址的手续(14天内)",
    },
  },

  // ── 노동·취업 ─────────────────────────────────────────────────
  {
    id: "kaltoe",
    category: "labor",
    difficulty: "easy",
    term: "칼퇴",
    reading: { en: "kaltoe", vi: "kaltoe", ja: "カルテ", zh: "kaltoe" },
    answer: 3,
    ko: {
      prompt: "회사 동료가 “오늘 칼퇴한다”고 합니다. 무슨 뜻일까요?",
      options: [
        "오늘 회사를 그만둔다",
        "야근을 한다",
        "회식에 간다",
        "정시에 딱 맞춰 퇴근한다",
      ],
      explanation:
        "“칼퇴”는 칼같이 정시에 퇴근한다는 뜻의 줄임말이에요. 참고로 법적으로 연장근로는 주 12시간을 넘을 수 없고, 초과근무에는 가산수당을 받아야 합니다. 정시 퇴근은 눈치 볼 일이 아니라 당연한 권리예요.",
      meaning: "정시에 정확히 퇴근하는 것",
    },
    en: {
      prompt: "A coworker says they're doing 칼퇴 today. What do they mean?",
      options: [
        "They're quitting the company today",
        "They're working overtime",
        "They're going to a company dinner",
        "They're leaving work exactly on time",
      ],
      explanation:
        "Kaltoe literally means leaving \"as sharp as a knife\" — right at closing time. For context: by law overtime cannot exceed 12 hours a week, and overtime must be paid at a premium rate. Leaving on time is a right, not something to feel guilty about.",
      meaning: "Leaving work exactly on time",
    },
    vi: {
      prompt: "Đồng nghiệp nói hôm nay họ sẽ 칼퇴. Điều đó nghĩa là gì?",
      options: [
        "Hôm nay họ nghỉ việc",
        "Họ sẽ làm thêm giờ",
        "Họ đi liên hoan công ty",
        "Họ tan làm đúng giờ quy định",
      ],
      explanation:
        "Kaltoe là từ rút gọn, nghĩa là tan làm \"chuẩn như dao cắt\" — đúng giờ tan sở. Lưu ý: theo luật, làm thêm giờ không được vượt quá 12 tiếng/tuần và phải được trả lương tăng ca. Tan làm đúng giờ là quyền lợi, không có gì phải ngại.",
      meaning: "Tan làm đúng giờ quy định",
    },
    ja: {
      prompt: "同僚が「今日は칼퇴する」と言いました。どういう意味でしょう?",
      options: [
        "今日で会社を辞める",
        "残業をする",
        "飲み会に行く",
        "定時ぴったりに退勤する",
      ],
      explanation:
        "「カルテ」は刃物のようにきっちり定時で退勤する、という意味の略語です。ちなみに法律上、時間外労働は週12時間を超えられず、残業には割増賃金が支払われなければなりません。定時退勤は遠慮することではなく当然の権利です。",
      meaning: "定時ちょうどに退勤すること",
    },
    zh: {
      prompt: "同事说今天要“칼퇴”。这是什么意思?",
      options: [
        "今天要辞职",
        "要加班",
        "要去公司聚餐",
        "准点下班,一分钟都不多留",
      ],
      explanation:
        "“칼퇴”是缩略语,意思是像刀切一样准时下班。补充一点:依法加班每周不得超过12小时,且加班须支付加成工资。准时下班是正当权利,不必有心理负担。",
      meaning: "准点下班",
    },
  },
  {
    id: "sadae-boheom",
    category: "labor",
    difficulty: "normal",
    term: "4대보험",
    reading: { en: "sadae-boheom", vi: "sadae-boheom", ja: "サデボホム", zh: "sadae-boheom" },
    answer: 2,
    ko: {
      prompt: "월급명세서의 “4대보험”에 포함되지 않는 것은?",
      options: ["국민연금", "건강보험", "소득세", "고용보험"],
      explanation:
        "4대보험은 국민연금·건강보험·고용보험·산재보험을 말합니다. 소득세는 세금이라 보험이 아니에요. 보험료는 보통 회사와 근로자가 나눠 내지만, 산재보험만은 회사가 전액 부담합니다.",
      meaning: "국민연금·건강보험·고용보험·산재보험을 묶어 부르는 말",
    },
    en: {
      prompt: "Which of these is NOT part of 4대보험 on your payslip?",
      options: ["National pension", "Health insurance", "Income tax", "Employment insurance"],
      explanation:
        "The four insurances are national pension, health insurance, employment insurance and industrial accident insurance. Income tax is a tax, not insurance. Premiums are usually split between employer and employee — except industrial accident insurance, which the employer pays in full.",
      meaning: "The four mandatory social insurances in Korea",
    },
    vi: {
      prompt: "Mục nào sau đây KHÔNG thuộc 4대보험 trên phiếu lương?",
      options: ["Lương hưu quốc dân", "Bảo hiểm y tế", "Thuế thu nhập", "Bảo hiểm thất nghiệp"],
      explanation:
        "\"Bốn bảo hiểm\" gồm: lương hưu quốc dân, bảo hiểm y tế, bảo hiểm thất nghiệp và bảo hiểm tai nạn lao động. Thuế thu nhập là thuế, không phải bảo hiểm. Phí bảo hiểm thường do công ty và người lao động chia nhau, riêng bảo hiểm tai nạn lao động do công ty trả toàn bộ.",
      meaning: "Bốn loại bảo hiểm xã hội bắt buộc ở Hàn Quốc",
    },
    ja: {
      prompt: "給与明細の「4대보험」に含まれないものはどれでしょう?",
      options: ["国民年金", "健康保険", "所得税", "雇用保険"],
      explanation:
        "四大保険とは国民年金・健康保険・雇用保険・労災保険を指します。所得税は税金なので保険ではありません。保険料は通常、会社と労働者が分担しますが、労災保険だけは会社が全額負担します。",
      meaning: "韓国の4つの社会保険の総称",
    },
    zh: {
      prompt: "工资单上的“4대보험”不包括下列哪一项?",
      options: ["国民年金", "健康保险", "所得税", "雇佣保险"],
      explanation:
        "四大保险指国民年金、健康保险、雇佣保险和工伤保险。所得税属于税金,不是保险。保费通常由公司与劳动者分担,唯独工伤保险由公司全额承担。",
      meaning: "韩国四种法定社会保险的统称",
    },
  },
  {
    id: "yeoncha",
    category: "labor",
    difficulty: "normal",
    term: "연차",
    reading: { en: "yeoncha", vi: "yeoncha", ja: "ヨンチャ", zh: "yeoncha" },
    answer: 1,
    ko: {
      prompt: "1년 이상 일했고 출근율이 80% 이상입니다. 법으로 보장되는 “연차” 휴가는 며칠일까요?",
      options: ["5일", "15일", "30일", "회사가 정하는 대로"],
      explanation:
        "1년 이상 근무하고 출근율이 80% 이상이면 연차 유급휴가 15일이 법으로 보장됩니다. 1년 미만이라면 1개월 개근할 때마다 1일씩 생겨요. 연차는 원칙적으로 근로자가 원하는 날에 쓸 수 있고, 외국인 근로자에게도 똑같이 적용됩니다.",
      meaning: "법으로 보장되는 유급 연차휴가",
    },
    en: {
      prompt: "You've worked over a year with at least 80% attendance. How many days of 연차 (paid annual leave) does the law guarantee?",
      options: ["5 days", "15 days", "30 days", "Whatever the company decides"],
      explanation:
        "After one year of service with 80%+ attendance, the law guarantees 15 days of paid annual leave. Under a year, you earn 1 day for each full month worked. In principle you choose when to use it — and this applies equally to foreign workers.",
      meaning: "Legally guaranteed paid annual leave",
    },
    vi: {
      prompt: "Bạn đã làm việc trên 1 năm với tỷ lệ đi làm từ 80% trở lên. Luật bảo đảm bao nhiêu ngày 연차 (nghỉ phép có lương)?",
      options: ["5 ngày", "15 ngày", "30 ngày", "Tùy công ty quyết định"],
      explanation:
        "Làm việc từ 1 năm trở lên với tỷ lệ đi làm 80% trở lên, bạn được luật bảo đảm 15 ngày phép năm có lương. Dưới 1 năm thì cứ mỗi tháng đi làm đầy đủ được 1 ngày. Về nguyên tắc bạn được chọn ngày nghỉ, và quy định này áp dụng bình đẳng với lao động nước ngoài.",
      meaning: "Nghỉ phép năm có lương được pháp luật bảo đảm",
    },
    ja: {
      prompt: "1年以上勤務し、出勤率80%以上です。法律で保障される「연차」(年次有給休暇)は何日でしょう?",
      options: ["5日", "15日", "30日", "会社が決めた日数"],
      explanation:
        "1年以上勤務し出勤率80%以上であれば、年次有給休暇15日が法律で保障されます。1年未満の場合は1か月皆勤ごとに1日ずつ付与されます。原則として労働者が希望する日に使え、外国人労働者にも同じく適用されます。",
      meaning: "法律で保障される年次有給休暇",
    },
    zh: {
      prompt: "你已工作满1年且出勤率达80%以上。法律保障的“연차”(带薪年假)有多少天?",
      options: ["5天", "15天", "30天", "由公司自行决定"],
      explanation:
        "工作满1年且出勤率达80%以上,法律保障15天带薪年假。不满1年的,每满勤1个月可获得1天。原则上由劳动者自行选择休假日期,外国劳动者同样适用。",
      meaning: "法律保障的带薪年假",
    },
  },

  // ── 의료·건강보험 ───────────────────────────────────────────────
  {
    id: "silbi-boheom",
    category: "medical",
    difficulty: "hard",
    term: "실비보험",
    reading: { en: "silbi-boheom", vi: "silbi-boheom", ja: "シルビボホム", zh: "silbi-boheom" },
    answer: 1,
    ko: {
      prompt: "병원에서 “실비보험 있으세요?”라고 물어봅니다. 무엇을 묻는 걸까요?",
      options: [
        "국민건강보험에 가입되어 있는지",
        "본인부담 의료비를 돌려받는 민간보험에 가입했는지",
        "여행자보험이 있는지",
        "회사에서 의료비를 지원해주는지",
      ],
      explanation:
        "실비보험(실손의료보험)은 국민건강보험이 적용된 뒤 남는 본인부담금을 보험사가 돌려주는 민간보험이에요. 국민건강보험과는 완전히 다른 별개의 상품이라, 가입하지 않았다면 “없어요”라고 답하면 됩니다.",
      meaning: "본인부담 의료비를 보상해주는 민간 의료보험",
    },
    en: {
      prompt: "At a clinic they ask whether you have 실비보험. What are they asking about?",
      options: [
        "Whether you're enrolled in national health insurance",
        "Whether you have private insurance that reimburses your out-of-pocket medical costs",
        "Whether you have travel insurance",
        "Whether your company covers your medical bills",
      ],
      explanation:
        "Silbi-boheom (indemnity medical insurance) is private insurance that reimburses what you still pay after national health insurance has covered its share. It's a completely separate product from national health insurance — if you don't have it, just say 없어요.",
      meaning: "Private insurance covering out-of-pocket medical costs",
    },
    vi: {
      prompt: "Ở bệnh viện, họ hỏi bạn có 실비보험 không. Họ đang hỏi về điều gì?",
      options: [
        "Bạn có tham gia bảo hiểm y tế quốc dân không",
        "Bạn có bảo hiểm tư nhân hoàn lại phần chi phí y tế tự trả không",
        "Bạn có bảo hiểm du lịch không",
        "Công ty có hỗ trợ viện phí cho bạn không",
      ],
      explanation:
        "Silbi-boheom (bảo hiểm y tế bồi thường thực tế) là bảo hiểm tư nhân hoàn lại phần chi phí bạn vẫn phải tự trả sau khi bảo hiểm y tế quốc dân đã chi trả. Đây là sản phẩm hoàn toàn tách biệt với bảo hiểm y tế quốc dân — nếu chưa tham gia, chỉ cần trả lời 없어요.",
      meaning: "Bảo hiểm tư nhân bồi thường chi phí y tế tự trả",
    },
    ja: {
      prompt: "病院で「실비보험はありますか?」と聞かれました。何を尋ねているのでしょう?",
      options: [
        "国民健康保険に加入しているか",
        "自己負担の医療費を払い戻す民間保険に入っているか",
        "旅行保険があるか",
        "会社が医療費を負担してくれるか",
      ],
      explanation:
        "シルビボホム(実損医療保険)は、国民健康保険が適用された後に残る自己負担分を保険会社が払い戻す民間保険です。国民健康保険とはまったく別の商品なので、加入していなければ「없어요」と答えれば大丈夫です。",
      meaning: "自己負担の医療費を補償する民間医療保険",
    },
    zh: {
      prompt: "在医院被问到“有没有실비보험?”。这是在问什么?",
      options: [
        "是否已参加国民健康保险",
        "是否有可报销自付医疗费的商业保险",
        "是否有旅行保险",
        "公司是否报销医疗费",
      ],
      explanation:
        "实费保险(实损医疗保险)是一种商业保险,用于报销国民健康保险赔付后仍需自付的部分。它与国民健康保险是完全不同的产品,如果没有购买,回答「없어요」即可。",
      meaning: "报销自付医疗费用的商业医疗保险",
    },
  },
  {
    id: "geongang-boheom",
    category: "medical",
    difficulty: "normal",
    term: "건강보험",
    reading: { en: "geongang-boheom", vi: "geongang-boheom", ja: "コンガンボホム", zh: "geongang-boheom" },
    answer: 0,
    ko: {
      prompt: "직장에 다니지 않는 외국인도 한국에 일정 기간 이상 머물면 건강보험에 의무적으로 가입해야 합니다. 그 기준은?",
      options: ["6개월 이상 체류", "2년 이상 체류", "5년 이상 체류", "가입 의무 없음"],
      explanation:
        "국내에 6개월 이상 체류하는 외국인은 지역가입자로 건강보험에 의무 가입해야 합니다. 보험료가 부담스럽게 느껴질 수 있지만, 가입하면 병원비의 상당 부분을 지원받고 건강검진도 받을 수 있어요. 직장인이라면 회사를 통해 직장가입자로 가입됩니다.",
      meaning: "국민건강보험 — 6개월 이상 체류 외국인은 의무 가입",
    },
    en: {
      prompt: "Foreigners without a job must still enroll in national health insurance after staying in Korea for how long?",
      options: ["6 months or more", "2 years or more", "5 years or more", "They never have to enroll"],
      explanation:
        "Foreigners staying 6 months or longer must enroll as regional subscribers. The premium can feel steep, but enrolling covers a large share of hospital costs and gives you access to national health checkups. If you're employed, your company enrolls you as a workplace subscriber instead.",
      meaning: "National health insurance — mandatory after 6 months",
    },
    vi: {
      prompt: "Người nước ngoài không đi làm vẫn phải tham gia bảo hiểm y tế quốc dân sau khi ở Hàn Quốc bao lâu?",
      options: ["Từ 6 tháng trở lên", "Từ 2 năm trở lên", "Từ 5 năm trở lên", "Không bắt buộc tham gia"],
      explanation:
        "Người nước ngoài cư trú từ 6 tháng trở lên bắt buộc tham gia bảo hiểm y tế với tư cách đối tượng khu vực. Mức phí có thể khiến bạn thấy nặng, nhưng khi tham gia bạn được hỗ trợ phần lớn viện phí và được khám sức khỏe định kỳ. Nếu đi làm, công ty sẽ đăng ký cho bạn theo diện người lao động.",
      meaning: "Bảo hiểm y tế quốc dân — bắt buộc sau 6 tháng cư trú",
    },
    ja: {
      prompt: "会社に勤めていない外国人も、韓国に一定期間以上滞在すると健康保険への加入が義務になります。その基準は?",
      options: ["6か月以上の滞在", "2年以上の滞在", "5年以上の滞在", "加入義務はない"],
      explanation:
        "韓国に6か月以上滞在する外国人は、地域加入者として健康保険に加入する義務があります。保険料を負担に感じるかもしれませんが、加入すれば医療費の大部分が補助され、健康診断も受けられます。会社員であれば勤務先を通じて職場加入者となります。",
      meaning: "国民健康保険 — 6か月以上滞在する外国人は加入義務",
    },
    zh: {
      prompt: "没有工作的外国人在韩国停留多久后也必须参加国民健康保险?",
      options: ["停留6个月以上", "停留2年以上", "停留5年以上", "无参保义务"],
      explanation:
        "在韩停留6个月以上的外国人须以地区参保人身份强制参加健康保险。保费或许让人觉得有压力,但参保后可报销大部分医疗费,还能享受健康体检。若是上班族,则由公司办理职场参保。",
      meaning: "国民健康保险 — 停留满6个月的外国人须强制参保",
    },
  },

  // ── 비자·체류 ─────────────────────────────────────────────────
  {
    id: "arc",
    category: "visa",
    difficulty: "easy",
    term: "외국인등록증",
    reading: {
      en: "oegugin-deungnokjeung (ARC)",
      vi: "oegugin-deungnokjeung (ARC)",
      ja: "ウェグギンドゥンノクチュン",
      zh: "oegugin-deungnokjeung",
    },
    answer: 2,
    ko: {
      prompt: "한국에 며칠 넘게 머물 예정이면 “외국인등록증”을 발급받아야 할까요?",
      options: ["30일", "60일", "90일", "180일"],
      explanation:
        "90일을 초과해 체류하려면 입국일로부터 90일 이내에 외국인등록을 해야 합니다. 기한을 넘기면 과태료가 부과돼요. 외국인등록증은 한국에서의 신분증이라 은행 계좌 개설, 휴대폰 개통, 병원 이용의 기본이 됩니다.",
      meaning: "90일 초과 체류자의 한국 신분증",
    },
    en: {
      prompt: "You must register for an alien registration card if you stay in Korea longer than how many days?",
      options: ["30 days", "60 days", "90 days", "180 days"],
      explanation:
        "If you're staying more than 90 days, you must register within 90 days of arrival — miss the deadline and you may be fined. The card is your ID in Korea and is the basis for opening a bank account, getting a phone plan, and visiting hospitals.",
      meaning: "Your Korean ID card, required beyond 90 days",
    },
    vi: {
      prompt: "Bạn phải làm thẻ đăng ký người nước ngoài nếu ở Hàn Quốc quá bao nhiêu ngày?",
      options: ["30 ngày", "60 ngày", "90 ngày", "180 ngày"],
      explanation:
        "Nếu lưu trú quá 90 ngày, bạn phải đăng ký trong vòng 90 ngày kể từ ngày nhập cảnh; quá hạn có thể bị phạt. Thẻ này là giấy tờ tùy thân của bạn tại Hàn Quốc, là cơ sở để mở tài khoản ngân hàng, đăng ký điện thoại và khám chữa bệnh.",
      meaning: "Thẻ tùy thân tại Hàn Quốc, bắt buộc khi ở quá 90 ngày",
    },
    ja: {
      prompt: "韓国に何日を超えて滞在する場合、「외국인등록증」(外国人登録証)の発給を受ける必要があるでしょう?",
      options: ["30日", "60日", "90日", "180日"],
      explanation:
        "90日を超えて滞在する場合は、入国日から90日以内に外国人登録をしなければなりません。期限を過ぎると過料が科されます。外国人登録証は韓国での身分証であり、銀行口座の開設、携帯電話の契約、病院の利用の基本になります。",
      meaning: "90日超の滞在者が持つ韓国の身分証",
    },
    zh: {
      prompt: "在韩国停留超过多少天就必须办理“외국인등록증”(外国人登录证)?",
      options: ["30天", "60天", "90天", "180天"],
      explanation:
        "停留超过90天的,须在入境之日起90天内办理外国人登录,逾期可能被罚款。该证是你在韩国的身份证件,也是开设银行账户、办理手机、就医的基础。",
      meaning: "停留超90天者在韩国的身份证件",
    },
  },
  {
    id: "bija-yeonjang",
    category: "visa",
    difficulty: "hard",
    term: "비자 연장",
    reading: { en: "bija yeonjang", vi: "bija yeonjang", ja: "ビザヨンジャン", zh: "bija yeonjang" },
    answer: 1,
    ko: {
      prompt: "체류기간 연장 신청은 언제부터 할 수 있을까요?",
      options: [
        "만료 당일에만",
        "만료일 4개월 전부터 만료일까지",
        "만료된 뒤 1개월 안에",
        "언제든 상관없음",
      ],
      explanation:
        "체류기간 연장은 만료일 4개월 전부터 만료일까지 신청할 수 있습니다. 하이코리아(www.hikorea.go.kr)에서 온라인 신청이나 방문 예약을 할 수 있어요. 만료일을 넘기면 불법체류가 되어 범칙금과 출국 조치 대상이 될 수 있으니, 달력에 미리 표시해두세요.",
      meaning: "체류기간 연장 신청 (만료 4개월 전부터 가능)",
    },
    en: {
      prompt: "When can you apply to extend your period of stay?",
      options: [
        "Only on the day it expires",
        "From 4 months before the expiry date up to the expiry date",
        "Within 1 month after it expires",
        "Any time — it doesn't matter",
      ],
      explanation:
        "You can apply from 4 months before your expiry date up until the date itself, online or by booking a visit through Hi Korea (www.hikorea.go.kr). Letting it lapse makes you an overstayer, which can mean fines and departure orders — put the date in your calendar early.",
      meaning: "Extending your stay (from 4 months before expiry)",
    },
    vi: {
      prompt: "Bạn có thể nộp đơn gia hạn thời gian lưu trú từ khi nào?",
      options: [
        "Chỉ đúng ngày hết hạn",
        "Từ 4 tháng trước ngày hết hạn cho đến ngày hết hạn",
        "Trong vòng 1 tháng sau khi hết hạn",
        "Lúc nào cũng được",
      ],
      explanation:
        "Bạn có thể nộp đơn từ 4 tháng trước ngày hết hạn cho đến đúng ngày hết hạn, qua mạng hoặc đặt lịch hẹn tại Hi Korea (www.hikorea.go.kr). Để quá hạn sẽ thành cư trú bất hợp pháp, có thể bị phạt và buộc xuất cảnh — hãy đánh dấu ngày này trong lịch từ sớm.",
      meaning: "Gia hạn lưu trú (nộp được từ 4 tháng trước hạn)",
    },
    ja: {
      prompt: "滞在期間の延長申請はいつから可能でしょう?",
      options: [
        "満了日当日のみ",
        "満了日の4か月前から満了日まで",
        "満了後1か月以内",
        "いつでもかまわない",
      ],
      explanation:
        "滞在期間の延長は満了日の4か月前から満了日まで申請できます。ハイコリア(www.hikorea.go.kr)でオンライン申請や訪問予約が可能です。満了日を過ぎると不法滞在となり、범칙금(反則金)や出国措置の対象になり得るので、早めにカレンダーに印を付けておきましょう。",
      meaning: "滞在期間の延長申請(満了4か月前から可能)",
    },
    zh: {
      prompt: "停留期限延期申请从什么时候可以办理?",
      options: [
        "只能在到期当天",
        "从到期日前4个月起至到期日",
        "到期后1个月内",
        "任何时候都可以",
      ],
      explanation:
        "停留期限延期可从到期日前4个月起至到期当日提出申请,可通过Hi Korea(www.hikorea.go.kr)在线申请或预约到访。一旦逾期即成为非法滞留,可能面临罚款和出境处理,请及早在日历上标记。",
      meaning: "停留期限延期(到期前4个月起可申请)",
    },
  },

  // ── 교육·생활 ─────────────────────────────────────────────────
  {
    id: "one-plus-one",
    category: "education",
    difficulty: "easy",
    term: "1+1 / 2+1",
    reading: { en: "won-peulleoseu-won", vi: "won-peulleoseu-won", ja: "ワンプラスワン", zh: "won-peulleoseu-won" },
    answer: 0,
    ko: {
      prompt: "편의점에서 “1+1”과 “2+1”을 봤습니다. 각각 몇 개를 가져갈 수 있을까요?",
      options: [
        "1+1은 2개, 2+1은 3개",
        "1+1은 1개, 2+1은 2개",
        "둘 다 2개",
        "1+1은 3개, 2+1은 2개",
      ],
      explanation:
        "1+1은 하나 값에 2개, 2+1은 두 개 값에 3개예요. 같은 브랜드의 다른 맛끼리는 교차로 고를 수 있는 경우가 많지만, 행사 상품끼리만 가능합니다. 계산대에서 “행사 상품 맞나요?”라고 확인하면 안전해요.",
      meaning: "편의점 묶음 할인 표시 (하나 값에 둘 / 둘 값에 셋)",
    },
    en: {
      prompt: "You see 1+1 and 2+1 labels at a convenience store. How many items do you get?",
      options: [
        "1+1 gives you 2, 2+1 gives you 3",
        "1+1 gives you 1, 2+1 gives you 2",
        "Both give you 2",
        "1+1 gives you 3, 2+1 gives you 2",
      ],
      explanation:
        "1+1 means two items for the price of one; 2+1 means three for the price of two. You can often mix different flavors of the same brand, but only among items in the same promotion. Asking \"행사 상품 맞나요?\" at the counter is the safe move.",
      meaning: "Convenience store bundle deals (2 for 1 / 3 for 2)",
    },
    vi: {
      prompt: "Bạn thấy nhãn \"1+1\" và \"2+1\" ở cửa hàng tiện lợi. Mỗi loại được lấy bao nhiêu món?",
      options: [
        "1+1 được 2 món, 2+1 được 3 món",
        "1+1 được 1 món, 2+1 được 2 món",
        "Cả hai đều được 2 món",
        "1+1 được 3 món, 2+1 được 2 món",
      ],
      explanation:
        "1+1 là mua 1 tính tiền được 2 món; 2+1 là tính tiền 2 được 3 món. Thường có thể phối các vị khác nhau của cùng thương hiệu, nhưng chỉ trong số sản phẩm đang khuyến mãi. Hỏi \"행사 상품 맞나요?\" ở quầy thanh toán là chắc ăn nhất.",
      meaning: "Nhãn khuyến mãi ở cửa hàng tiện lợi (2 tính 1 / 3 tính 2)",
    },
    ja: {
      prompt: "コンビニで「1+1」と「2+1」の表示を見ました。それぞれ何個もらえるでしょう?",
      options: [
        "1+1は2個、2+1は3個",
        "1+1は1個、2+1は2個",
        "どちらも2個",
        "1+1は3個、2+1は2個",
      ],
      explanation:
        "1+1は1個の値段で2個、2+1は2個の値段で3個です。同じブランドの別の味を組み合わせられることも多いですが、対象は同じ企画商品同士に限られます。レジで「행사 상품 맞나요?」(企画商品ですか?)と確認すると安心です。",
      meaning: "コンビニのまとめ買い割引表示(1個分で2個/2個分で3個)",
    },
    zh: {
      prompt: "在便利店看到“1+1”和“2+1”。各自能拿几件?",
      options: [
        "1+1拿2件,2+1拿3件",
        "1+1拿1件,2+1拿2件",
        "两者都拿2件",
        "1+1拿3件,2+1拿2件",
      ],
      explanation:
        "1+1是付一件的钱拿两件;2+1是付两件的钱拿三件。同品牌不同口味常可混搭,但仅限于同一活动商品之间。在收银台确认一句「행사 상품 맞나요?」(是活动商品吗?)最稳妥。",
      meaning: "便利店的捆绑优惠标示(一件价拿两件/两件价拿三件)",
    },
  },
  {
    id: "eumsingmul",
    category: "education",
    difficulty: "normal",
    term: "음식물 쓰레기",
    reading: {
      en: "eumsingmul sseuregi",
      vi: "eumsingmul sseuregi",
      ja: "ウムシンムルスレギ",
      zh: "eumsingmul sseuregi",
    },
    answer: 3,
    ko: {
      prompt: "다음 중 “음식물 쓰레기”가 아니라 일반 쓰레기로 버려야 하는 것은?",
      options: ["사과 껍질", "밥과 국물 건더기", "채소 다듬고 남은 부분", "닭 뼈와 조개 껍데기"],
      explanation:
        "음식물 쓰레기는 “동물이 먹을 수 있는가”가 기준이에요. 뼈·조개껍데기·달걀껍데기·과일 씨앗처럼 딱딱한 것은 일반 쓰레기로 버려야 합니다. 잘못 버리면 과태료가 나올 수 있고, 음식물 쓰레기는 전용 봉투나 전용 용기에 버려야 해요.",
      meaning: "음식물 쓰레기 — 전용 봉투에 따로 버리는 음식 찌꺼기",
    },
    en: {
      prompt: "Which of these does NOT count as 음식물 쓰레기 (food waste) and must go in general trash?",
      options: ["Apple peel", "Rice and stew solids", "Vegetable trimmings", "Chicken bones and clam shells"],
      explanation:
        "The rule of thumb is \"could an animal eat it?\" Hard items like bones, shells, eggshells and fruit pits go in general waste. Sorting it wrong can bring a fine, and food waste must go in designated bags or containers.",
      meaning: "Food waste — separated into designated bags",
    },
    vi: {
      prompt: "Thứ nào sau đây KHÔNG phải 음식물 쓰레기 (rác thực phẩm) mà phải bỏ vào rác thường?",
      options: ["Vỏ táo", "Cơm và cái trong canh", "Phần bỏ đi khi sơ chế rau", "Xương gà và vỏ nghêu sò"],
      explanation:
        "Nguyên tắc là \"động vật có ăn được không?\". Những thứ cứng như xương, vỏ sò, vỏ trứng, hạt trái cây phải bỏ vào rác thường. Phân loại sai có thể bị phạt, và rác thực phẩm phải bỏ vào túi hoặc thùng chuyên dụng.",
      meaning: "Rác thực phẩm — phân loại riêng vào túi chuyên dụng",
    },
    ja: {
      prompt: "次のうち「음식물 쓰레기」(生ごみ)ではなく、一般ごみとして捨てるべきものはどれでしょう?",
      options: ["りんごの皮", "ご飯やスープの具", "野菜の切れ端", "鶏の骨と貝殻"],
      explanation:
        "生ごみの基準は「動物が食べられるか」です。骨・貝殻・卵の殻・果物の種のような硬いものは一般ごみとして捨てます。分別を誤ると過料が科されることがあり、生ごみは専用の袋か専用容器に捨てる必要があります。",
      meaning: "生ごみ — 専用袋に分けて捨てる食べ物のごみ",
    },
    zh: {
      prompt: "下列哪一项不属于“음식물 쓰레기”(厨余垃圾),必须按一般垃圾丢弃?",
      options: ["苹果皮", "米饭和汤里的食材", "择菜剩下的部分", "鸡骨头和贝壳"],
      explanation:
        "判断标准是「动物能不能吃」。骨头、贝壳、蛋壳、果核等坚硬物须按一般垃圾丢弃。分类错误可能被罚款,厨余垃圾必须投入专用垃圾袋或专用容器。",
      meaning: "厨余垃圾 — 须用专用垃圾袋单独投放",
    },
  },
];
