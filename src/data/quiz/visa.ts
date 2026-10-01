import type { QuizQuestion } from "./types";

/**
 * 비자·체류 12문제.
 * 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고 sources에 남겼다.
 * 확인되지 않은 수치(유학생 주당 근로시간 상한, 건강보험 체납 금액 기준 등)는
 * 일부러 출제하지 않았다.
 */
export const VISA_QUESTIONS: QuizQuestion[] = [
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
    sources: [
      "출입국관리법 제31조 제1항",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=2042&ccfNo=4&cciNo=1&cnpClsNo=1",
    ],
    ko: {
      prompt: "한국에 며칠 넘게 머물 예정이면 “외국인등록증”을 발급받아야 할까요?",
      options: ["30일", "60일", "90일", "180일"],
      explanation:
        "90일을 초과해 체류하려면 입국일로부터 90일 이내에 외국인등록을 해야 합니다(출입국관리법 제31조). 외국인등록증은 한국에서의 신분증이라 은행 계좌 개설, 휴대폰 개통, 병원 이용의 기본이 됩니다.",
      meaning: "90일 초과 체류자의 한국 신분증",
    },
    en: {
      prompt: "You must register for an alien registration card if you stay in Korea longer than how many days?",
      options: ["30 days", "60 days", "90 days", "180 days"],
      explanation:
        "If you're staying more than 90 days, you must register within 90 days of arrival (Immigration Act, Art. 31). The card is your ID in Korea and is the basis for opening a bank account, getting a phone plan, and visiting hospitals.",
      meaning: "Your Korean ID card, required beyond 90 days",
    },
    vi: {
      prompt: "Bạn phải làm thẻ đăng ký người nước ngoài nếu ở Hàn Quốc quá bao nhiêu ngày?",
      options: ["30 ngày", "60 ngày", "90 ngày", "180 ngày"],
      explanation:
        "Nếu lưu trú quá 90 ngày, bạn phải đăng ký trong vòng 90 ngày kể từ ngày nhập cảnh (Luật Quản lý Xuất nhập cảnh, Điều 31). Thẻ này là giấy tờ tùy thân của bạn tại Hàn Quốc, là cơ sở để mở tài khoản ngân hàng, đăng ký điện thoại và khám chữa bệnh.",
      meaning: "Thẻ tùy thân tại Hàn Quốc, bắt buộc khi ở quá 90 ngày",
    },
    ja: {
      prompt: "韓国に何日を超えて滞在する場合、「외국인등록증」(外国人登録証)の発給を受ける必要があるでしょう?",
      options: ["30日", "60日", "90日", "180日"],
      explanation:
        "90日を超えて滞在する場合は、入国日から90日以内に外国人登録をしなければなりません(出入国管理法第31条)。外国人登録証は韓国での身分証であり、銀行口座の開設、携帯電話の契約、病院の利用の基本になります。",
      meaning: "90日超の滞在者が持つ韓国の身分証",
    },
    zh: {
      prompt: "在韩国停留超过多少天就必须办理“외국인등록증”(外国人登录证)?",
      options: ["30天", "60天", "90天", "180天"],
      explanation:
        "停留超过90天的,须在入境之日起90天内办理外国人登录(《出入境管理法》第31条)。该证是你在韩国的身份证件,也是开设银行账户、办理手机、就医的基础。",
      meaning: "停留超90天者在韩国的身份证件",
    },
  },
  {
    id: "hikorea-resv",
    category: "visa",
    difficulty: "easy",
    term: "하이코리아",
    reading: { en: "Hi Korea", vi: "Hi Korea", ja: "ハイコリア", zh: "Hi Korea" },
    answer: 1,
    sources: [
      "하이코리아 방문예약 이용안내",
      "https://www.hikorea.go.kr/resv/ResvIntroR.pt?locale=ko",
    ],
    ko: {
      prompt: "출입국·외국인청에 민원을 보러 가려고 합니다. 맞는 설명은?",
      options: [
        "예약 없이 아침 일찍 가서 번호표를 뽑으면 된다",
        "하이코리아에서 방문예약을 해야 하며, 예약 없이 가면 접수되지 않는다",
        "예약은 방문 당일 아침에만 할 수 있다",
        "모든 민원이 예외 없이 예약 대상이다",
      ],
      explanation:
        "2021년 4월부터 전국 출입국·외국인관서가 방문예약제를 시행 중이라, 예약 없이 방문하면 민원이 접수되지 않습니다. 당일 예약은 불가능하고 신청일 다음 날부터 예약할 수 있어요. 다만 체류지 변경신고와 여권 변경신고는 예약 없이도 처리됩니다. 예약은 반드시 공식 사이트 하이코리아에서 무료로 하세요.",
      meaning: "하이코리아 — 출입국 민원 온라인 신청·방문예약 공식 사이트",
    },
    en: {
      prompt: "You need to visit an immigration office. Which statement is correct?",
      options: [
        "Just show up early and take a number",
        "You must book through Hi Korea — walk-ins are not accepted",
        "You can only book on the morning of your visit",
        "Every single service requires a booking, with no exceptions",
      ],
      explanation:
        "Since April 2021 all immigration offices run on appointments, and walk-ins are turned away. Same-day booking isn't possible — slots open from the day after you apply. Two exceptions don't need a booking: reporting a change of residence and reporting a passport change. Always book free of charge on the official Hi Korea site.",
      meaning: "Hi Korea — the official site for immigration applications and bookings",
    },
    vi: {
      prompt: "Bạn cần đến văn phòng xuất nhập cảnh. Phát biểu nào đúng?",
      options: [
        "Cứ đến sớm lấy số thứ tự là được",
        "Phải đặt lịch qua Hi Korea; đến mà không đặt lịch sẽ không được tiếp nhận",
        "Chỉ có thể đặt lịch vào sáng ngày đến",
        "Mọi thủ tục đều bắt buộc đặt lịch, không có ngoại lệ",
      ],
      explanation:
        "Từ tháng 4/2021, tất cả văn phòng xuất nhập cảnh áp dụng chế độ đặt lịch; đến mà không đặt lịch sẽ không được tiếp nhận. Không thể đặt lịch trong ngày — lịch mở từ ngày hôm sau khi đăng ký. Hai ngoại lệ không cần đặt lịch: khai báo thay đổi nơi cư trú và khai báo thay đổi hộ chiếu. Hãy đặt lịch miễn phí trên trang chính thức Hi Korea.",
      meaning: "Hi Korea — trang chính thức để làm thủ tục xuất nhập cảnh và đặt lịch",
    },
    ja: {
      prompt: "出入国・外国人庁に手続きに行こうとしています。正しい説明はどれでしょう?",
      options: [
        "予約せずに朝早く行って番号札を取ればよい",
        "ハイコリアで訪問予約が必要で、予約なしでは受け付けられない",
        "予約は訪問当日の朝にしかできない",
        "すべての手続きが例外なく予約対象である",
      ],
      explanation:
        "2021年4月から全国の出入国・外国人官署が訪問予約制を実施しており、予約なしで訪問しても受け付けられません。当日予約はできず、申請日の翌日から予約できます。ただし滞在地変更届とパスポート変更届は予約なしでも処理されます。予約は必ず公式サイトのハイコリアで無料で行ってください。",
      meaning: "ハイコリア — 出入国手続きのオンライン申請・訪問予約の公式サイト",
    },
    zh: {
      prompt: "你要去出入境·外国人厅办理业务。下列说法哪个正确?",
      options: [
        "不用预约,早点去取号就行",
        "必须通过Hi Korea预约,未预约前往将不予受理",
        "只能在到访当天早上预约",
        "所有业务都必须预约,没有例外",
      ],
      explanation:
        "自2021年4月起,全国出入境·外国人官署实行访问预约制,未预约前往将不予受理。不能当天预约,申请次日起才可预约。但居住地变更申报和护照变更申报无需预约即可办理。预约请务必在官方网站Hi Korea免费办理。",
      meaning: "Hi Korea — 出入境业务在线申请与访问预约的官方网站",
    },
  },
  {
    id: "center-1345",
    category: "visa",
    difficulty: "easy",
    term: "1345",
    reading: { en: "1345", vi: "1345", ja: "1345", zh: "1345" },
    answer: 2,
    sources: [
      "법무부 출입국·외국인정책본부 외국인종합안내센터",
      "https://www.immigration.go.kr/immigration/1530/subview.do",
    ],
    ko: {
      prompt: "비자나 체류 문제를 내 언어로 상담받고 싶습니다. 어디에 전화해야 할까요?",
      options: ["112", "119", "1345", "1330"],
      explanation:
        "1345는 법무부 외국인종합안내센터로, 비자·체류·국적 관련 상담을 받을 수 있습니다. 국번 없이 1345, 해외에서는 +82-2-1345예요. 참고로 112는 경찰, 119는 화재·구급, 1330은 관광통역 안내입니다.",
      meaning: "외국인종합안내센터 — 비자·체류 상담 전화",
    },
    en: {
      prompt: "You want advice about your visa or residence status in your own language. Which number do you call?",
      options: ["112", "119", "1345", "1330"],
      explanation:
        "1345 is the Immigration Contact Center run by the Ministry of Justice, covering visa, residence and nationality questions. Dial 1345 inside Korea, or +82-2-1345 from abroad. For reference: 112 is the police, 119 is fire and ambulance, and 1330 is the tourist interpretation line.",
      meaning: "Immigration Contact Center — visa and residence helpline",
    },
    vi: {
      prompt: "Bạn muốn được tư vấn về visa hoặc tư cách lưu trú bằng tiếng mẹ đẻ. Gọi số nào?",
      options: ["112", "119", "1345", "1330"],
      explanation:
        "1345 là Tổng đài tư vấn cho người nước ngoài của Bộ Tư pháp, tư vấn về visa, lưu trú và quốc tịch. Gọi 1345 trong nước, hoặc +82-2-1345 từ nước ngoài. Tham khảo: 112 là cảnh sát, 119 là cứu hỏa·cấp cứu, 1330 là tổng đài phiên dịch du lịch.",
      meaning: "Tổng đài tư vấn cho người nước ngoài — về visa và lưu trú",
    },
    ja: {
      prompt: "ビザや滞在のことを自分の言語で相談したいです。どこに電話すればよいでしょう?",
      options: ["112", "119", "1345", "1330"],
      explanation:
        "1345は法務部の外国人総合案内センターで、ビザ・滞在・国籍に関する相談ができます。国内からは局番なしで1345、海外からは+82-2-1345です。ちなみに112は警察、119は火災・救急、1330は観光通訳案内です。",
      meaning: "外国人総合案内センター — ビザ・滞在相談の電話",
    },
    zh: {
      prompt: "你想用自己的语言咨询签证或居留问题。应该拨打哪个号码?",
      options: ["112", "119", "1345", "1330"],
      explanation:
        "1345是法务部外国人综合咨询中心,可咨询签证、居留和国籍相关事宜。国内直拨1345,海外拨+82-2-1345。补充:112是警察,119是消防·急救,1330是旅游翻译咨询。",
      meaning: "外国人综合咨询中心 — 签证·居留咨询电话",
    },
  },
  {
    id: "student-parttime",
    category: "visa",
    difficulty: "easy",
    term: "체류자격 외 활동허가",
    reading: {
      en: "cheryu-jagyeok oe hwaldong heoga",
      vi: "cheryu-jagyeok oe hwaldong heoga",
      ja: "チェリュジャギョク ウェ ファルドンホガ",
      zh: "cheryu-jagyeok oe hwaldong heoga",
    },
    answer: 1,
    sources: [
      "출입국관리법 제20조(체류자격 외 활동)",
      "https://www.hikorea.go.kr/info/InfoDatail.pt?CAT_SEQ=187&PARENT_ID=142",
    ],
    ko: {
      prompt: "유학(D-2) 비자로 공부하면서 아르바이트를 하려고 합니다. 맞는 것은?",
      options: [
        "유학생이니까 허가 없이 자유롭게 일할 수 있다",
        "미리 “체류자격 외 활동허가”를 받아야 하고, 허가 전에 일하면 불법이다",
        "신청서를 낸 날부터 바로 일을 시작해도 된다",
        "방학 중에는 허가 없이 일할 수 있다",
      ],
      explanation:
        "유학 비자의 본래 목적은 공부이므로, 아르바이트를 하려면 미리 체류자격 외 활동허가를 받아야 합니다(출입국관리법 제20조). 신청만 하고 허가가 나기 전에 일하면 불법 취업이 되어 처벌이나 강제퇴거 대상이 될 수 있어요. 허용 시간은 학위과정과 한국어 능력에 따라 다르니 하이코리아에서 본인 조건을 확인하세요.",
      meaning: "지금 비자의 목적 외 활동을 하려면 미리 받아야 하는 허가",
    },
    en: {
      prompt: "You're on a student (D-2) visa and want to take a part-time job. Which is correct?",
      options: [
        "Students can work freely without permission",
        "You must get prior permission for activities outside your status — working before it's granted is illegal",
        "You can start working the day you submit the application",
        "No permission is needed during school vacations",
      ],
      explanation:
        "A student visa is for studying, so part-time work requires advance permission for activities outside your status (Immigration Act, Art. 20). Working after merely applying — before permission is granted — counts as illegal employment and can lead to penalties or deportation. Permitted hours vary by degree programme and Korean proficiency, so check your own case on Hi Korea.",
      meaning: "Permission required before doing anything outside your visa's purpose",
    },
    vi: {
      prompt: "Bạn đang học bằng visa du học (D-2) và muốn làm thêm. Điều nào đúng?",
      options: [
        "Là du học sinh nên được tự do làm thêm, không cần xin phép",
        "Phải xin phép hoạt động ngoài tư cách lưu trú trước; làm việc trước khi được cấp phép là bất hợp pháp",
        "Có thể bắt đầu làm ngay từ ngày nộp đơn",
        "Trong kỳ nghỉ thì không cần xin phép",
      ],
      explanation:
        "Mục đích của visa du học là học tập, nên muốn làm thêm bạn phải xin phép hoạt động ngoài tư cách lưu trú trước (Luật Quản lý Xuất nhập cảnh, Điều 20). Chỉ nộp đơn rồi đi làm khi chưa được cấp phép bị coi là lao động bất hợp pháp, có thể bị xử phạt hoặc trục xuất. Số giờ được phép khác nhau tùy chương trình học và năng lực tiếng Hàn — hãy kiểm tra trường hợp của bạn trên Hi Korea.",
      meaning: "Giấy phép phải xin trước khi làm việc ngoài mục đích của visa",
    },
    ja: {
      prompt: "留学(D-2)ビザで勉強しながらアルバイトをしようと思います。正しいものは?",
      options: [
        "留学生なので許可なく自由に働ける",
        "事前に「資格外活動許可」を受ける必要があり、許可前に働くと違法になる",
        "申請書を出した日からすぐ働き始めてよい",
        "長期休暇中は許可なしで働ける",
      ],
      explanation:
        "留学ビザ本来の目的は勉強なので、アルバイトをするには事前に資格外活動許可を受ける必要があります(出入国管理法第20条)。申請しただけで許可前に働くと不法就労となり、処罰や強制退去の対象になり得ます。認められる時間は学位課程や韓国語能力によって異なるので、ハイコリアでご自身の条件を確認してください。",
      meaning: "今のビザの目的以外の活動をするために事前に必要な許可",
    },
    zh: {
      prompt: "你持留学(D-2)签证在读书,想做兼职。下列哪项正确?",
      options: [
        "是留学生,可以不用许可自由打工",
        "必须事先取得「居留资格外活动许可」,在获批前工作属违法",
        "从递交申请当天起就可以开始工作",
        "放假期间不需要许可",
      ],
      explanation:
        "留学签证的本来目的是学习,因此打工须事先取得居留资格外活动许可(《出入境管理法》第20条)。仅递交申请、尚未获批就工作属于非法就业,可能被处罚甚至强制遣返。允许的工时因学位课程和韩语能力而异,请在Hi Korea确认自己的条件。",
      meaning: "从事现有签证目的以外活动时须事先取得的许可",
    },
  },
  {
    id: "reentry-permit",
    category: "visa",
    difficulty: "normal",
    term: "재입국허가 면제",
    reading: {
      en: "jaeipguk-heoga myeonje",
      vi: "jaeipguk-heoga myeonje",
      ja: "チェイプククホガ ミョンジェ",
      zh: "jaeipguk-heoga myeonje",
    },
    answer: 2,
    sources: [
      "출입국관리법 제30조 제1항 단서",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=2853&ccfNo=2&cciNo=2&cnpClsNo=1",
    ],
    ko: {
      prompt: "외국인등록을 마친 사람이 잠시 본국에 다녀오려 합니다. 재입국허가 없이 다시 들어올 수 있는 기간은?",
      options: ["14일 이내", "1개월 이내", "1년 이내", "기간 제한 없음"],
      explanation:
        "출국한 날부터 1년 이내에 재입국하면 재입국허가가 면제됩니다. 단 남은 체류기간이 1년보다 짧으면 그 체류기간 안에 들어와야 해요. 체류기간이 만료되면 면제도 함께 사라지니, 장기간 나갈 계획이라면 출국 전에 체류기간부터 확인하세요.",
      meaning: "일정 기간 안에 돌아오면 재입국허가를 따로 받지 않아도 되는 제도",
    },
    en: {
      prompt: "A registered foreign resident wants to visit home briefly. Within how long can they return without a re-entry permit?",
      options: ["Within 14 days", "Within 1 month", "Within 1 year", "No time limit"],
      explanation:
        "Re-entry permission is waived if you return within one year of departure. But if less than a year remains on your period of stay, you must return before that period ends — once your stay expires, so does the waiver. Check your remaining period of stay before any long trip.",
      meaning: "Returning within the set period means no separate re-entry permit is needed",
    },
    vi: {
      prompt: "Người đã đăng ký cư trú muốn về nước một thời gian ngắn. Trong bao lâu thì được nhập cảnh lại mà không cần giấy phép tái nhập cảnh?",
      options: ["Trong vòng 14 ngày", "Trong vòng 1 tháng", "Trong vòng 1 năm", "Không giới hạn thời gian"],
      explanation:
        "Nếu quay lại trong vòng 1 năm kể từ ngày xuất cảnh thì được miễn giấy phép tái nhập cảnh. Tuy nhiên nếu thời gian lưu trú còn lại ngắn hơn 1 năm, bạn phải quay lại trước khi hết hạn — hết hạn lưu trú thì quyền miễn cũng mất. Hãy kiểm tra thời hạn lưu trú trước mỗi chuyến đi dài.",
      meaning: "Chế độ miễn giấy phép tái nhập cảnh nếu quay lại trong thời hạn quy định",
    },
    ja: {
      prompt: "外国人登録を済ませた人が一時帰国しようとしています。再入国許可なしで戻れる期間は?",
      options: ["14日以内", "1か月以内", "1年以内", "期間制限なし"],
      explanation:
        "出国した日から1年以内に再入国すれば再入国許可は免除されます。ただし残りの滞在期間が1年より短い場合は、その滞在期間内に戻る必要があります。滞在期間が満了すると免除もなくなるので、長期間出国する予定なら出国前に滞在期間を確認しましょう。",
      meaning: "一定期間内に戻れば再入国許可が不要になる制度",
    },
    zh: {
      prompt: "已完成外国人登录的人想短期回国。在多长时间内可以不办再入境许可就返回?",
      options: ["14天内", "1个月内", "1年内", "没有时间限制"],
      explanation:
        "自出境之日起1年内再次入境,可免办再入境许可。但若剩余停留期限不足1年,则须在停留期限内返回 — 停留期限届满,免除资格也随之消失。计划长期出境前,请先确认自己的停留期限。",
      meaning: "在规定期限内返回即可免办再入境许可的制度",
    },
  },
  {
    id: "arc-reissue",
    category: "visa",
    difficulty: "normal",
    term: "재발급",
    reading: { en: "jaebalgeup", vi: "jaebalgeup", ja: "チェバルグプ", zh: "jaebalgeup" },
    answer: 0,
    sources: [
      "출입국관리법 시행령 제42조 제2항",
      "https://law.go.kr/LSW/lsSideInfoP.do?chrClsCd=010201&docCls=&joBrNo=&joNo=&lsiSeq=118387&urlMode=lsRvsDocInfoR",
    ],
    ko: {
      prompt: "외국인등록증을 잃어버렸습니다. 재발급 신청은 언제까지 해야 할까요?",
      options: [
        "분실한 날부터 14일 이내",
        "분실한 날부터 6개월 이내",
        "다음 체류기간 연장 때 함께",
        "기한 없이 아무 때나",
      ],
      explanation:
        "외국인등록증을 잃어버렸거나 훼손됐다면 사유가 생긴 날부터 14일 이내에 재발급을 신청해야 합니다. 체류지 관할 출입국·외국인관서에 신청서와 사진 1장을 내면 돼요. 기한이 비슷한 절차들이 많아 헷갈리기 쉬운데, 외국인등록은 90일, 체류지 변경신고는 15일, 등록증 재발급은 14일입니다.",
      meaning: "분실·훼손된 외국인등록증을 다시 발급받는 절차 (14일 이내 신청)",
    },
    en: {
      prompt: "You lost your alien registration card. By when must you apply for a replacement?",
      options: [
        "Within 14 days of losing it",
        "Within 6 months of losing it",
        "At your next period-of-stay extension",
        "Any time — there's no deadline",
      ],
      explanation:
        "If your card is lost or damaged, you must apply for a replacement within 14 days of that happening. Bring an application form and one photo to the immigration office for your area. The deadlines are easy to mix up: 90 days for initial registration, 15 days for a change of residence, and 14 days for a replacement card.",
      meaning: "Replacing a lost or damaged registration card (apply within 14 days)",
    },
    vi: {
      prompt: "Bạn làm mất thẻ đăng ký người nước ngoài. Phải nộp đơn cấp lại trong bao lâu?",
      options: [
        "Trong vòng 14 ngày kể từ khi mất",
        "Trong vòng 6 tháng kể từ khi mất",
        "Làm cùng lúc với lần gia hạn lưu trú tiếp theo",
        "Không có thời hạn, lúc nào cũng được",
      ],
      explanation:
        "Nếu thẻ bị mất hoặc hư hỏng, bạn phải nộp đơn cấp lại trong vòng 14 ngày kể từ khi sự việc xảy ra. Nộp đơn kèm 1 ảnh tại văn phòng xuất nhập cảnh quản lý nơi cư trú. Các mốc thời hạn rất dễ nhầm: đăng ký lần đầu 90 ngày, khai báo đổi nơi cư trú 15 ngày, cấp lại thẻ 14 ngày.",
      meaning: "Thủ tục cấp lại thẻ bị mất hoặc hư hỏng (nộp trong 14 ngày)",
    },
    ja: {
      prompt: "外国人登録証をなくしました。再発給の申請はいつまでにすべきでしょう?",
      options: [
        "紛失した日から14日以内",
        "紛失した日から6か月以内",
        "次の滞在期間延長のときにまとめて",
        "期限はなく、いつでもよい",
      ],
      explanation:
        "外国人登録証を紛失・毀損した場合は、その事由が生じた日から14日以内に再発給を申請しなければなりません。滞在地管轄の出入国・外国人官署に申請書と写真1枚を提出します。期限が似た手続きが多く紛らわしいのですが、外国人登録は90日、滞在地変更届は15日、登録証の再発給は14日です。",
      meaning: "紛失・毀損した外国人登録証を再発給する手続き(14日以内に申請)",
    },
    zh: {
      prompt: "你的外国人登录证丢了。补发申请最晚要在什么时候提出?",
      options: [
        "丢失之日起14天内",
        "丢失之日起6个月内",
        "等下次停留期限延期时一并办理",
        "没有期限,随时都可以",
      ],
      explanation:
        "外国人登录证丢失或损坏的,须自事由发生之日起14天内申请补发。携带申请书和1张照片到居住地管辖的出入境·外国人官署办理。几个期限很容易混淆:初次登录90天,居住地变更申报15天,证件补发14天。",
      meaning: "补发丢失或损坏的外国人登录证(14天内申请)",
    },
  },
  {
    id: "nhis-visa-link",
    category: "visa",
    difficulty: "normal",
    term: "체납",
    reading: { en: "chenap", vi: "chenap", ja: "チェナプ", zh: "chenap" },
    answer: 2,
    sources: [
      "법무부 출입국·외국인정책본부 — 건강보험료 체납 외국인 비자연장 제한(2019.8 시행)",
      "https://www.immigration.go.kr/immigration/1515/subview.do",
    ],
    ko: {
      prompt: "건강보험료를 계속 내지 않고 있습니다. 체류기간 연장을 신청하면 어떻게 될까요?",
      options: [
        "보험과 비자는 별개라 아무 영향이 없다",
        "연장은 되지만 벌금이 부과된다",
        "체납이 확인되면 체류기간 연장이 제한될 수 있다",
        "즉시 강제퇴거 대상이 된다",
      ],
      explanation:
        "법무부는 2019년 8월부터 건강보험료를 체납한 외국인의 체류기간 연장을 제한하고 있습니다. 연장 신청 시 체납이 확인되면 납부를 안내하고, 그래도 내지 않으면 연장이 제한될 수 있어요. 보험료 문제가 체류 문제로 번지는 구조라, 밀렸다면 연장 신청 전에 공단(1577-1000)에 먼저 상담하는 게 좋습니다.",
      meaning: "보험료·세금 등을 기한까지 내지 않은 상태",
    },
    en: {
      prompt: "You've been skipping your health insurance premiums. What happens when you apply to extend your stay?",
      options: [
        "Nothing — insurance and visas are unrelated",
        "The extension goes through but you're fined",
        "If arrears are found, your extension can be restricted",
        "You are immediately deported",
      ],
      explanation:
        "Since August 2019 the Ministry of Justice has restricted period-of-stay extensions for foreigners with unpaid health insurance premiums. If arrears show up when you apply, you'll be asked to pay — and if you don't, the extension can be refused. An insurance problem turns into a residence problem, so if you're behind, call the NHIS (1577-1000) before applying.",
      meaning: "Being behind on payments such as insurance premiums or taxes",
    },
    vi: {
      prompt: "Bạn đã lâu không đóng phí bảo hiểm y tế. Khi xin gia hạn lưu trú thì sao?",
      options: [
        "Không ảnh hưởng gì, bảo hiểm và visa là hai việc riêng biệt",
        "Vẫn được gia hạn nhưng bị phạt tiền",
        "Nếu phát hiện nợ phí, việc gia hạn lưu trú có thể bị hạn chế",
        "Bị trục xuất ngay lập tức",
      ],
      explanation:
        "Từ tháng 8/2019, Bộ Tư pháp hạn chế gia hạn lưu trú đối với người nước ngoài nợ phí bảo hiểm y tế. Khi xin gia hạn mà phát hiện nợ, bạn sẽ được yêu cầu nộp; nếu vẫn không nộp, việc gia hạn có thể bị từ chối. Vấn đề bảo hiểm sẽ kéo theo vấn đề cư trú, vì vậy nếu đang nợ hãy gọi Bảo hiểm Y tế Quốc dân (1577-1000) trước khi nộp đơn.",
      meaning: "Tình trạng chưa nộp phí bảo hiểm, thuế... đúng hạn",
    },
    ja: {
      prompt: "健康保険料をずっと払っていません。滞在期間の延長を申請するとどうなるでしょう?",
      options: [
        "保険とビザは別なので何の影響もない",
        "延長はされるが罰金が科される",
        "滞納が確認されると滞在期間の延長が制限されることがある",
        "ただちに強制退去の対象になる",
      ],
      explanation:
        "法務部は2019年8月から、健康保険料を滞納した外国人の滞在期間延長を制限しています。延長申請時に滞納が確認されると納付を案内され、それでも納めない場合は延長が制限されることがあります。保険料の問題が滞在の問題に発展する仕組みなので、滞納があるなら申請前に公団(1577-1000)に相談しましょう。",
      meaning: "保険料や税金などを期限までに納めていない状態",
    },
    zh: {
      prompt: "你一直没有缴纳健康保险费。申请延长停留期限时会怎样?",
      options: [
        "保险和签证是两回事,没有任何影响",
        "可以延期,但会被罚款",
        "一旦查出欠费,停留期限延期可能受到限制",
        "立即被强制遣返",
      ],
      explanation:
        "法务部自2019年8月起,对拖欠健康保险费的外国人限制停留期限延期。申请延期时若查出欠费,会先通知缴纳;仍不缴纳的,延期可能受限。保险费问题会演变成居留问题,如有拖欠,建议在申请前先致电公团(1577-1000)咨询。",
      meaning: "保险费、税金等未按期缴纳的状态",
    },
  },
  {
    id: "f5-work",
    category: "visa",
    difficulty: "normal",
    term: "영주(F-5)",
    reading: { en: "yeongju (F-5)", vi: "yeongju (F-5)", ja: "ヨンジュ(F-5)", zh: "yeongju (F-5)" },
    answer: 3,
    sources: [
      "법무부 출입국·외국인정책본부 — 영주(F-5) 자격 안내",
      "https://www.immigration.go.kr/bbs/immigration_eng/230/454086/download.do",
    ],
    ko: {
      prompt: "영주자격(F-5)을 받으면 취업은 어떻게 될까요?",
      options: [
        "지정된 업종에서만 일할 수 있다",
        "일할 때마다 매번 허가를 받아야 한다",
        "취업은 할 수 없고 거주만 가능하다",
        "취업·영리활동에 제한이 없다",
      ],
      explanation:
        "영주자격(F-5)에는 취업과 영리활동의 제한이 없어, 직장을 옮기거나 사업을 해도 별도의 체류자격 외 활동허가가 필요 없습니다. 체류기간 연장 신고 의무도 없어요. 다만 영주증 자체는 유효기간이 10년이라 만료 전에 재발급받아야 합니다.",
      meaning: "취업·거주 제한이 없는 영주 체류자격",
    },
    en: {
      prompt: "What does permanent residency (F-5) mean for employment?",
      options: [
        "You may only work in designated industries",
        "You need permission each time you take a job",
        "You cannot work — it only allows you to live here",
        "There are no restrictions on work or business activity",
      ],
      explanation:
        "F-5 carries no restriction on employment or profit-making activity, so changing jobs or running a business needs no separate activity permit, and there's no obligation to report extensions of stay. The residence card itself, however, is valid for 10 years and must be renewed before it expires.",
      meaning: "Permanent residency — no limits on work or where you live",
    },
    vi: {
      prompt: "Có tư cách định cư vĩnh viễn (F-5) thì việc làm ra sao?",
      options: [
        "Chỉ được làm trong các ngành được chỉ định",
        "Mỗi lần đi làm đều phải xin phép",
        "Không được đi làm, chỉ được cư trú",
        "Không có hạn chế nào về việc làm và hoạt động kinh doanh",
      ],
      explanation:
        "Tư cách F-5 không hạn chế việc làm và hoạt động sinh lợi, nên đổi việc hay kinh doanh đều không cần xin phép hoạt động ngoài tư cách lưu trú, cũng không phải khai báo gia hạn lưu trú. Tuy nhiên bản thân thẻ định cư có hiệu lực 10 năm và phải cấp lại trước khi hết hạn.",
      meaning: "Tư cách định cư vĩnh viễn — không hạn chế việc làm và nơi ở",
    },
    ja: {
      prompt: "永住資格(F-5)を得ると就労はどうなるでしょう?",
      options: [
        "指定された業種でのみ働ける",
        "働くたびに毎回許可が必要",
        "就労はできず居住のみ可能",
        "就労・営利活動に制限がない",
      ],
      explanation:
        "永住資格(F-5)には就労・営利活動の制限がないため、転職や事業を行っても別途の資格外活動許可は不要で、滞在期間延長の届出義務もありません。ただし永住証自体は有効期間が10年なので、満了前に再発給を受ける必要があります。",
      meaning: "就労・居住に制限がない永住の在留資格",
    },
    zh: {
      prompt: "取得永住资格(F-5)后,就业方面如何?",
      options: [
        "只能在指定行业工作",
        "每次就业都要重新申请许可",
        "不能就业,只能居住",
        "就业和营利活动没有任何限制",
      ],
      explanation:
        "永住资格(F-5)对就业和营利活动没有限制,换工作或经营事业都无需另行申请居留资格外活动许可,也没有停留期限延期申报义务。不过永住证本身有效期为10年,须在到期前办理换发。",
      meaning: "就业和居住均无限制的永住居留资格",
    },
  },
  {
    id: "center-languages",
    category: "visa",
    difficulty: "normal",
    term: "통역 지원",
    reading: {
      en: "tongyeok jiwon",
      vi: "tongyeok jiwon",
      ja: "トンヨク チウォン",
      zh: "tongyeok jiwon",
    },
    answer: 1,
    sources: [
      "법무부 출입국·외국인정책본부 외국인종합안내센터 운영 안내",
      "https://www.immigration.go.kr/immigration/1530/subview.do",
    ],
    ko: {
      prompt: "외국인종합안내센터(1345)에 대한 설명으로 맞는 것은?",
      options: [
        "한국어로만 상담할 수 있다",
        "20개 언어로 상담할 수 있고, 평일 저녁 늦게는 가능한 언어가 줄어든다",
        "24시간 언제나 모든 언어로 상담할 수 있다",
        "영어와 중국어만 지원한다",
      ],
      explanation:
        "1345는 한국어·영어·중국어·베트남어·일본어 등 최대 20개 언어로 상담합니다. 평일 09시부터 22시까지 운영하는데, 18시 이후에는 한국어·중국어·영어만 가능해요. 상담 외에 공공기관 창구에서 3자 통역을 받을 때도 쓸 수 있습니다.",
      meaning: "통역 지원 — 내 언어로 상담받을 수 있게 도와주는 서비스",
    },
    en: {
      prompt: "Which statement about the Immigration Contact Center (1345) is correct?",
      options: [
        "Consultations are in Korean only",
        "It covers up to 20 languages, with fewer available late on weekday evenings",
        "All languages are available 24 hours a day",
        "Only English and Chinese are supported",
      ],
      explanation:
        "1345 offers consultations in up to 20 languages including Korean, English, Chinese, Vietnamese and Japanese. It runs weekdays from 09:00 to 22:00, but after 18:00 only Korean, Chinese and English are available. You can also use it for three-way interpretation when dealing with public offices.",
      meaning: "Interpretation support — help getting advice in your own language",
    },
    vi: {
      prompt: "Phát biểu nào về Tổng đài tư vấn cho người nước ngoài (1345) là đúng?",
      options: [
        "Chỉ tư vấn bằng tiếng Hàn",
        "Hỗ trợ tới 20 ngôn ngữ, buổi tối ngày thường thì số ngôn ngữ giảm bớt",
        "Hỗ trợ mọi ngôn ngữ 24 giờ mỗi ngày",
        "Chỉ hỗ trợ tiếng Anh và tiếng Trung",
      ],
      explanation:
        "1345 tư vấn bằng tối đa 20 ngôn ngữ, gồm tiếng Hàn, Anh, Trung, Việt, Nhật... Tổng đài hoạt động các ngày thường từ 09:00 đến 22:00, nhưng sau 18:00 chỉ còn tiếng Hàn, Trung và Anh. Bạn cũng có thể dùng dịch vụ phiên dịch ba bên khi làm việc với cơ quan công.",
      meaning: "Hỗ trợ phiên dịch — giúp bạn được tư vấn bằng tiếng mẹ đẻ",
    },
    ja: {
      prompt: "外国人総合案内センター(1345)の説明として正しいものは?",
      options: [
        "韓国語でしか相談できない",
        "最大20言語で相談でき、平日の夜遅くは対応言語が減る",
        "24時間いつでもすべての言語で相談できる",
        "英語と中国語のみ対応している",
      ],
      explanation:
        "1345は韓国語・英語・中国語・ベトナム語・日本語など最大20言語で相談できます。平日09時から22時まで運営していますが、18時以降は韓国語・中国語・英語のみになります。相談のほか、公共機関の窓口で三者通訳を受けるときにも使えます。",
      meaning: "通訳支援 — 自分の言語で相談できるよう助けるサービス",
    },
    zh: {
      prompt: "关于外国人综合咨询中心(1345),下列说法哪个正确?",
      options: [
        "只能用韩语咨询",
        "最多支持20种语言,工作日较晚时段可用语言会减少",
        "24小时全天候支持所有语言",
        "只支持英语和中文",
      ],
      explanation:
        "1345可用韩语、英语、中文、越南语、日语等最多20种语言咨询。工作日09时至22时运营,但18时以后仅剩韩语、中文和英语。除咨询外,在公共机构窗口办事时也可使用三方翻译服务。",
      meaning: "翻译支援 — 帮助你用母语获得咨询的服务",
    },
  },
  {
    id: "bija-yeonjang",
    category: "visa",
    difficulty: "hard",
    term: "비자 연장",
    reading: { en: "bija yeonjang", vi: "bija yeonjang", ja: "ビザヨンジャン", zh: "bija yeonjang" },
    answer: 1,
    sources: [
      "하이코리아 방문예약 이용안내 — 체류기간 연장은 만료 4개월 전부터 신청",
      "https://www.hikorea.go.kr/resv/ResvIntroR.pt?locale=ko",
    ],
    ko: {
      prompt: "체류기간 연장 신청은 언제부터 할 수 있을까요?",
      options: [
        "만료 당일에만",
        "만료일 4개월 전부터 만료일까지",
        "만료된 뒤 1개월 안에",
        "언제든 상관없음",
      ],
      explanation:
        "체류기간 연장은 만료일 4개월 전부터 만료일까지 신청할 수 있습니다. 하이코리아에서 온라인 신청이나 방문 예약을 할 수 있어요. 만료일을 넘기면 불법체류가 되어 범칙금과 출국 조치 대상이 될 수 있으니, 만료 1~2개월 전에는 신청을 끝내두는 게 안전합니다. 만료 직전에는 예약이 몰려 원하는 날짜를 잡기 어렵거든요.",
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
        "You can apply from 4 months before your expiry date up until the date itself, online or by booking a visit through Hi Korea. Letting it lapse makes you an overstayer, which can mean fines and departure orders — aim to finish the application 1–2 months early, since appointment slots fill up as the deadline nears.",
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
        "Bạn có thể nộp đơn từ 4 tháng trước ngày hết hạn cho đến đúng ngày hết hạn, qua mạng hoặc đặt lịch hẹn tại Hi Korea. Để quá hạn sẽ thành cư trú bất hợp pháp, có thể bị phạt và buộc xuất cảnh — nên hoàn tất hồ sơ trước 1–2 tháng, vì càng gần hạn thì lịch hẹn càng khó đặt.",
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
        "滞在期間の延長は満了日の4か月前から満了日まで申請できます。ハイコリアでオンライン申請や訪問予約が可能です。満了日を過ぎると不法滞在となり、反則金や出国措置の対象になり得るので、満了の1〜2か月前には申請を終えておくのが安全です。満了直前は予約が集中して希望日が取りにくくなります。",
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
        "停留期限延期可从到期日前4个月起至到期当日提出申请,可通过Hi Korea在线申请或预约到访。一旦逾期即成为非法滞留,可能面临罚款和出境处理,建议在到期前1~2个月完成申请。越临近到期,预约越集中,越难约到合适的日期。",
      meaning: "停留期限延期(到期前4个月起可申请)",
    },
  },
  {
    id: "f5-years",
    category: "visa",
    difficulty: "hard",
    term: "영주자격 요건",
    reading: {
      en: "yeongju-jagyeok yogeon",
      vi: "yeongju-jagyeok yogeon",
      ja: "ヨンジュジャギョク ヨゴン",
      zh: "yeongju-jagyeok yogeon",
    },
    answer: 2,
    sources: [
      "출입국관리법 제10조의3 제2항, 시행령 별표 1의3",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=47&ccfNo=2&cciNo=1&cnpClsNo=1",
    ],
    ko: {
      prompt: "일반적인 취업·거주 자격으로 영주자격(F-5)을 신청하려면 한국에 몇 년 이상 체류해야 할까요?",
      options: ["1년 이상", "3년 이상", "5년 이상", "10년 이상"],
      explanation:
        "D-7부터 E-7까지 또는 거주(F-2) 자격으로 5년 이상 체류해야 신청할 수 있습니다. 다만 국민이나 영주권자의 배우자·미성년 자녀는 2년 이상이면 돼요. 체류기간 외에도 품행 단정, 생계유지능력, 기본소양이라는 공통 요건을 갖춰야 합니다.",
      meaning: "영주자격(F-5)을 받기 위한 체류기간 등 조건",
    },
    en: {
      prompt: "On an ordinary work or residence status, how many years in Korea are required to apply for permanent residency (F-5)?",
      options: ["1 year or more", "3 years or more", "5 years or more", "10 years or more"],
      explanation:
        "You need five years or more on a status from D-7 through E-7, or on residence (F-2). Spouses and minor children of Korean nationals or permanent residents need only two years. Beyond the time requirement, you must also meet common conditions: good conduct, ability to support yourself, and basic civic knowledge.",
      meaning: "The conditions, including years of stay, for permanent residency (F-5)",
    },
    vi: {
      prompt: "Với tư cách làm việc hoặc cư trú thông thường, cần ở Hàn Quốc bao nhiêu năm để xin tư cách định cư vĩnh viễn (F-5)?",
      options: ["Từ 1 năm trở lên", "Từ 3 năm trở lên", "Từ 5 năm trở lên", "Từ 10 năm trở lên"],
      explanation:
        "Cần lưu trú từ 5 năm trở lên với tư cách từ D-7 đến E-7, hoặc tư cách cư trú (F-2). Riêng vợ/chồng và con chưa thành niên của công dân Hàn Quốc hoặc người định cư vĩnh viễn thì chỉ cần 2 năm. Ngoài thời gian lưu trú, bạn còn phải đáp ứng các điều kiện chung: hạnh kiểm tốt, khả năng tự nuôi sống bản thân và kiến thức cơ bản về xã hội Hàn Quốc.",
      meaning: "Điều kiện (gồm thời gian lưu trú) để được tư cách định cư vĩnh viễn (F-5)",
    },
    ja: {
      prompt: "一般的な就労・居住資格で永住資格(F-5)を申請するには、韓国に何年以上滞在する必要があるでしょう?",
      options: ["1年以上", "3年以上", "5年以上", "10年以上"],
      explanation:
        "D-7からE-7まで、または居住(F-2)の資格で5年以上滞在する必要があります。ただし国民や永住者の配偶者・未成年の子は2年以上で申請できます。滞在期間のほかに、品行が正しいこと、生計維持能力、基本素養という共通要件も満たさなければなりません。",
      meaning: "永住資格(F-5)を得るための滞在期間などの条件",
    },
    zh: {
      prompt: "以一般就业或居住资格申请永住资格(F-5),需要在韩国停留多少年以上?",
      options: ["1年以上", "3年以上", "5年以上", "10年以上"],
      explanation:
        "需以D-7至E-7或居住(F-2)资格停留5年以上。但韩国国民或永住者的配偶及未成年子女只需2年以上。除停留年限外,还须满足品行端正、具备生计维持能力、具备基本素养等共同要件。",
      meaning: "取得永住资格(F-5)所需的停留年限等条件",
    },
  },
  {
    id: "ganyi-gwihwa",
    category: "visa",
    difficulty: "hard",
    term: "간이귀화",
    reading: {
      en: "ganyi-gwihwa",
      vi: "ganyi-gwihwa",
      ja: "カニグィファ",
      zh: "ganyi-gwihwa",
    },
    answer: 1,
    sources: [
      "국적법 제6조 제2항",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=47&ccfNo=2&cciNo=2&cnpClsNo=1",
    ],
    ko: {
      prompt: "한국인과 결혼한 외국인이 간이귀화를 신청하려면, 혼인 상태로 한국에 몇 년 이상 살아야 할까요?",
      options: ["혼인 즉시 가능", "2년 이상", "5년 이상", "10년 이상"],
      explanation:
        "한국 국민의 배우자는 혼인 상태로 2년 이상 국내에 계속 거주하면 간이귀화를 신청할 수 있습니다. 2년을 못 채웠더라도 혼인한 지 3년이 지나고 1년 이상 국내에 거주 중이면 가능해요. 배우자 사망이나 본인 책임이 아닌 사유로 혼인을 유지할 수 없게 된 경우, 미성년 자녀를 양육하는 경우에는 요건이 완화됩니다.",
      meaning: "결혼·혈통 등으로 요건이 완화된 귀화 절차",
    },
    en: {
      prompt: "A foreigner married to a Korean national wants simplified naturalization. How long must they have lived in Korea while married?",
      options: ["Immediately after marriage", "2 years or more", "5 years or more", "10 years or more"],
      explanation:
        "The spouse of a Korean national can apply after living continuously in Korea for two years while married. Even without the full two years, you qualify if three years have passed since the marriage and you've lived in Korea for at least one year. The requirement is eased if your spouse dies, if the marriage ends through no fault of yours, or if you're raising a minor child.",
      meaning: "Naturalization with relaxed requirements, via marriage or descent",
    },
    vi: {
      prompt: "Người nước ngoài kết hôn với công dân Hàn Quốc muốn nhập tịch giản lược thì phải sống ở Hàn Quốc bao lâu trong tình trạng hôn nhân?",
      options: ["Ngay sau khi kết hôn", "Từ 2 năm trở lên", "Từ 5 năm trở lên", "Từ 10 năm trở lên"],
      explanation:
        "Vợ/chồng của công dân Hàn Quốc có thể nộp đơn sau khi cư trú liên tục tại Hàn Quốc 2 năm trong tình trạng hôn nhân. Nếu chưa đủ 2 năm, bạn vẫn đủ điều kiện khi đã kết hôn được 3 năm và đang cư trú tại Hàn Quốc từ 1 năm trở lên. Điều kiện được nới lỏng nếu vợ/chồng qua đời, hôn nhân chấm dứt không do lỗi của bạn, hoặc bạn đang nuôi con chưa thành niên.",
      meaning: "Thủ tục nhập tịch với điều kiện được nới lỏng qua hôn nhân hoặc huyết thống",
    },
    ja: {
      prompt: "韓国人と結婚した外国人が簡易帰化を申請するには、婚姻状態で韓国に何年以上住む必要があるでしょう?",
      options: ["結婚後すぐ可能", "2年以上", "5年以上", "10年以上"],
      explanation:
        "韓国国民の配偶者は、婚姻状態で2年以上国内に継続して居住すれば簡易帰化を申請できます。2年に満たなくても、結婚から3年が経過し1年以上国内に居住していれば可能です。配偶者の死亡や自分に責任のない事由で婚姻を維持できなくなった場合、未成年の子を養育している場合は要件が緩和されます。",
      meaning: "結婚や血統などで要件が緩和された帰化手続き",
    },
    zh: {
      prompt: "与韩国人结婚的外国人要申请简易归化,须在婚姻状态下在韩国居住多少年以上?",
      options: ["结婚后立即可以", "2年以上", "5年以上", "10年以上"],
      explanation:
        "韩国国民的配偶在婚姻状态下连续在韩国居住满2年即可申请简易归化。即使不满2年,若结婚已满3年且在韩居住1年以上也可申请。若配偶死亡、因非本人过错导致婚姻无法维持,或正在抚养未成年子女,相关要件可予放宽。",
      meaning: "因婚姻或血统而放宽要件的归化程序",
    },
  },
];
