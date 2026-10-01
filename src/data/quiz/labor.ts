import type { QuizQuestion } from "./types";

/**
 * 노동·취업 12문제.
 * 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고 sources에 남겼다.
 * 확인되지 않은 수치(유학생 주당 아르바이트 허용시간, 실업급여 지급액·지급일수 등)는
 * 일부러 출제하지 않았다. 최저임금은 연도별로 다르므로 설명에 항상 「2026년」을 밝혔다.
 */
export const LABOR_QUESTIONS: QuizQuestion[] = [
  {
    id: "kaltoe",
    category: "labor",
    difficulty: "easy",
    term: "칼퇴",
    reading: {
      en: "kaltoe (leaving right on time)",
      vi: "kaltoe (về đúng giờ)",
      ja: "カルトェ(定時退社)",
      zh: "kaltoe(准点下班)",
    },
    answer: 0,
    sources: [
      "근로기준법 제50조(근로시간)",
      "https://www.law.go.kr/법령/근로기준법",
    ],
    ko: {
      prompt: "동료가 “오늘은 칼퇴해야지”라고 합니다. 「칼퇴」는 무슨 뜻일까요?",
      options: [
        "정해진 퇴근 시간에 딱 맞춰 퇴근하는 것",
        "회사를 그만두는 것",
        "야근을 자원하는 것",
        "점심시간을 건너뛰고 일찍 가는 것",
      ],
      explanation:
        "칼퇴는 「칼같이 퇴근한다」를 줄인 말로, 정해진 퇴근 시간에 바로 나가는 것을 뜻합니다. 법으로 보면 소정근로시간이 끝나면 퇴근하는 것이 당연한 일인데, 일상에서 이런 말이 생겼다는 것 자체가 한국 직장 문화의 한 단면입니다. 참고로 회사를 그만두는 것은 「퇴사」이고, 「칼퇴」와는 전혀 다른 말입니다.",
      meaning: "정시에 바로 퇴근하는 것",
    },
    en: {
      prompt: "A colleague says ‘I’m doing kaltoe today’. What does kaltoe mean?",
      options: [
        "Leaving exactly at the scheduled end of the workday",
        "Quitting the company",
        "Volunteering for overtime",
        "Skipping lunch to leave early",
      ],
      explanation:
        "Kaltoe is short for ‘leaving as sharp as a knife’ — walking out the moment the workday officially ends. Legally, going home when your contracted hours finish is simply normal, so the fact that Korean has a slang word for it says something about workplace culture here. Note that quitting the company is toesa, a completely different word.",
      meaning: "Leaving right at closing time",
    },
    vi: {
      prompt: "Đồng nghiệp nói “hôm nay phải kaltoe thôi”. “칼퇴” nghĩa là gì?",
      options: [
        "Về đúng ngay giờ tan làm đã định",
        "Nghỉ việc ở công ty",
        "Tình nguyện làm thêm giờ",
        "Bỏ giờ ăn trưa để về sớm",
      ],
      explanation:
        "Kaltoe là dạng rút gọn của “về đúng như dao cắt”, nghĩa là ra khỏi công ty ngay khi hết giờ làm. Về mặt pháp luật, hết giờ làm theo hợp đồng thì về là điều hiển nhiên, nên việc tiếng Hàn có hẳn một từ cho chuyện này cũng nói lên phần nào văn hóa công sở ở đây. Lưu ý: nghỉ việc là “퇴사” (toesa), một từ hoàn toàn khác.",
      meaning: "Về ngay khi đến giờ tan làm",
    },
    ja: {
      prompt: "同僚が「今日は칼퇴しよう」と言います。「칼퇴」はどんな意味でしょう?",
      options: [
        "決められた退勤時間にぴったり合わせて退勤すること",
        "会社を辞めること",
        "残業を志願すること",
        "昼休みを飛ばして早く帰ること",
      ],
      explanation:
        "칼퇴は「칼같이 퇴근한다(刃물のようにきっちり退勤する)」の略で、決められた退勤時間になったらすぐ出ることを意味します。法律から見れば所定労働時間が終われば退勤するのは当然のことなのに、日常にこういう言葉が生まれていること自体が韓国の職場文化の一面です。ちなみに会社を辞めることは「퇴사」で、「칼퇴」とはまったく別の言葉です。",
      meaning: "定時になったらすぐ退勤すること",
    },
    zh: {
      prompt: "同事说「今天要칼퇴」。「칼퇴」是什么意思?",
      options: [
        "正好在规定的下班时间点下班",
        "从公司辞职",
        "主动申请加班",
        "跳过午饭时间提早离开",
      ],
      explanation:
        "칼퇴是「像刀一样准时下班」的缩略说法,指一到下班时间就立刻走。从法律上看,约定工时结束就回家本是理所当然的事,而韩语里偏偏有这么一个词,恰好反映了这里职场文化的一个侧面。顺带一提,辞职是「퇴사」,和「칼퇴」完全是两个词。",
      meaning: "一到点就立刻下班",
    },
  },
  {
    id: "choejeo-imgeum",
    category: "labor",
    difficulty: "easy",
    term: "최저임금",
    reading: {
      en: "choejeo-imgeum (minimum wage)",
      vi: "choejeo-imgeum (tiền lương tối thiểu)",
      ja: "チェジョイムグム(最低賃金)",
      zh: "choejeo-imgeum(最低工资)",
    },
    answer: 2,
    sources: [
      "2026년 적용 최저임금 고시 — 고용노동부 고시 제2025-47호, 시간급 10,320원",
      "https://www.moel.go.kr/",
      "최저임금법 제6조(최저임금의 효력)·제28조(벌칙)",
      "https://www.law.go.kr/법령/최저임금법",
    ],
    ko: {
      prompt: "2026년 한국의 시간당 최저임금은 얼마일까요?",
      options: ["9,620원", "10,030원", "10,320원", "11,000원"],
      explanation:
        "2026년 최저임금은 시간급 10,320원입니다(고용노동부 고시). 2025년은 10,030원이었으니 해마다 달라지므로 올해 기준을 확인하는 습관이 필요합니다. 최저임금은 내국인·외국인, 정규직·아르바이트, 업종을 가리지 않고 모든 근로자에게 똑같이 적용되고, 당사자가 합의했더라도 최저임금보다 낮은 계약은 그 부분이 무효입니다. 주 40시간 기준 월 환산액은 209시간을 곱해 계산합니다.",
      meaning: "법으로 정한 시간당 최저 임금",
    },
    en: {
      prompt: "What is Korea’s hourly minimum wage in 2026?",
      options: ["9,620 won", "10,030 won", "10,320 won", "11,000 won"],
      explanation:
        "For 2026 the minimum wage is 10,320 won per hour (Ministry of Employment and Labor notice). It was 10,030 won in 2025, so the figure changes annually and it is worth checking the current year. The minimum applies identically to Koreans and foreigners, permanent staff and part-timers, across all industries — and even if both sides agreed to less, that part of the contract is void. The monthly equivalent for a 40-hour week is calculated by multiplying by 209 hours.",
      meaning: "Legally set hourly wage floor",
    },
    vi: {
      prompt: "Tiền lương tối thiểu theo giờ của Hàn Quốc năm 2026 là bao nhiêu?",
      options: ["9.620 won", "10.030 won", "10.320 won", "11.000 won"],
      explanation:
        "Năm 2026, lương tối thiểu là 10.320 won/giờ (thông báo của Bộ Lao động và Việc làm). Năm 2025 là 10.030 won, nên con số thay đổi hằng năm và bạn nên có thói quen kiểm tra mức của năm hiện tại. Lương tối thiểu áp dụng như nhau cho người Hàn và người nước ngoài, nhân viên chính thức và làm thêm, ở mọi ngành — và dù hai bên có thỏa thuận thấp hơn thì phần đó của hợp đồng vô hiệu. Mức quy đổi theo tháng với tuần 40 giờ được tính bằng cách nhân với 209 giờ.",
      meaning: "Mức lương giờ tối thiểu do luật định",
    },
    ja: {
      prompt: "2026年の韓国の時間当たり最低賃金はいくらでしょう?",
      options: ["9,620ウォン", "10,030ウォン", "10,320ウォン", "11,000ウォン"],
      explanation:
        "2026年の最低賃金は時間給10,320ウォンです(雇用労働部告示)。2025年は10,030ウォンだったので毎年変わり、その年の基準を確認する習慣が必要です。最低賃金は韓国人・外国人、正社員・アルバイト、業種を問わずすべての労働者に同じように適用され、当事者が合意していても最低賃金より低い契約はその部分が無効です。週40時間基準の月換算額は209時間を掛けて計算します。",
      meaning: "法律で定めた時間当たりの最低賃金",
    },
    zh: {
      prompt: "2026年韩国的小时最低工资是多少?",
      options: ["9,620韩元", "10,030韩元", "10,320韩元", "11,000韩元"],
      explanation:
        "2026年最低工资为每小时10,320韩元(雇佣劳动部告示)。2025年是10,030韩元,可见数字每年变动,养成查当年标准的习惯很有必要。最低工资对韩国人和外国人、正式员工和打工者、各个行业一律适用;即便双方约定更低,合同的那部分也无效。按每周40小时折算月薪时,乘以209小时计算。",
      meaning: "法律规定的小时最低工资",
    },
  },
  {
    id: "geunro-gyeyakseo",
    category: "labor",
    difficulty: "easy",
    term: "근로계약서",
    reading: {
      en: "geunro-gyeyakseo (employment contract)",
      vi: "geunro-gyeyakseo (hợp đồng lao động)",
      ja: "クンロケヤクソ(労働契約書)",
      zh: "geunro-gyeyakseo(劳动合同)",
    },
    answer: 3,
    sources: [
      "근로기준법 제17조(근로조건의 명시) — 임금·소정근로시간·휴일·연차 유급휴가 등을 서면으로 명시해 교부",
      "https://www.law.go.kr/법령/근로기준법",
    ],
    ko: {
      prompt: "새 일자리를 구했습니다. 근로계약서에 대한 설명으로 맞는 것은?",
      options: [
        "구두로 약속했으면 쓰지 않아도 된다",
        "사장님만 한 부 가지고 있으면 된다",
        "3개월 수습이 끝난 뒤에 쓰는 것이다",
        "임금·근로시간·휴일 등을 서면으로 적어 근로자에게 한 부 주어야 한다",
      ],
      explanation:
        "근로기준법 제17조는 임금, 소정근로시간, 휴일, 연차 유급휴가 등 주요 근로조건을 서면으로 명시해 근로자에게 교부하도록 정합니다. 즉 계약서는 사장님 책상에만 있어서는 안 되고, 일하는 사람이 자기 몫을 가지고 있어야 합니다. 일을 시작하기 전에 받는 것이 원칙이고, 임금이 밀리거나 조건이 달라졌을 때 이 종이 한 장이 거의 유일한 증거가 됩니다. 사진으로 찍어 따로 보관해 두세요.",
      meaning: "근로조건을 적어 근로자에게 주는 서면 계약",
    },
    en: {
      prompt: "You got a new job. Which statement about the employment contract is correct?",
      options: [
        "A verbal promise means no written contract is needed",
        "It is enough for the boss to keep one copy",
        "It is signed only after the three-month probation ends",
        "Wages, hours and holidays must be stated in writing and a copy given to the worker",
      ],
      explanation:
        "Article 17 of the Labor Standards Act requires the key terms — wages, contracted hours, holidays, annual paid leave — to be stated in writing and handed to the worker. So the contract cannot live only in the boss’s drawer: the person doing the work must hold their own copy. As a rule you receive it before you start, and if wages go unpaid or terms change, that single sheet is almost your only evidence. Photograph it and keep the copy somewhere separate.",
      meaning: "Written terms the worker must receive a copy of",
    },
    vi: {
      prompt: "Bạn vừa có việc mới. Phát biểu nào về hợp đồng lao động là đúng?",
      options: [
        "Đã hứa bằng miệng thì không cần viết",
        "Chỉ cần chủ giữ một bản là đủ",
        "Chỉ ký sau khi hết ba tháng thử việc",
        "Tiền lương, giờ làm, ngày nghỉ phải ghi bằng văn bản và giao một bản cho người lao động",
      ],
      explanation:
        "Điều 17 Luật Tiêu chuẩn Lao động yêu cầu ghi rõ bằng văn bản các điều kiện chính — tiền lương, giờ làm theo hợp đồng, ngày nghỉ, phép năm có lương — và giao cho người lao động. Nghĩa là hợp đồng không thể chỉ nằm trong ngăn bàn của chủ: người làm việc phải giữ bản của mình. Về nguyên tắc bạn nhận trước khi bắt đầu làm, và khi bị nợ lương hay điều kiện bị thay đổi, tờ giấy đó gần như là bằng chứng duy nhất. Hãy chụp ảnh và lưu riêng một bản.",
      meaning: "Hợp đồng văn bản mà người lao động phải được giữ một bản",
    },
    ja: {
      prompt: "新しい仕事が決まりました。労働契約書についての説明として正しいものは?",
      options: [
        "口頭で約束したなら書かなくてもよい",
        "社長が1部持っていれば十分である",
        "3か月の試用期間が終わったあとに書くものである",
        "賃金・労働時間・休日などを書面に明示し、労働者に1部渡さなければならない",
      ],
      explanation:
        "勤労基準法第17条は、賃金、所定労働時間、休日、年次有給休暇などの主要な労働条件を書面で明示し、労働者に交付するよう定めています。つまり契約書が社長の机の中だけにあってはならず、働く人が自分の分を持っていなければなりません。仕事を始める前に受け取るのが原則で、賃金が遅れたり条件が変わったときは、この一枚がほぼ唯一の証拠になります。写真に撮って別に保管しておいてください。",
      meaning: "労働条件を書いて労働者に渡す書面契約",
    },
    zh: {
      prompt: "你找到了新工作。关于劳动合同,哪项说明正确?",
      options: [
        "口头约定过就不必书面签订",
        "老板自己留一份就够了",
        "是三个月试用期结束后才签的",
        "工资、工时、休息日等须以书面写明,并交给劳动者一份",
      ],
      explanation:
        "《劳动标准法》第17条要求把工资、约定工时、休息日、年度带薪休假等主要劳动条件书面写明并交付给劳动者。也就是说合同不能只放在老板抽屉里,干活的人必须自己手里有一份。原则上在开始工作前就要拿到;一旦被拖欠工资或条件被改动,这一张纸几乎是唯一的证据。拍照并另外保存一份吧。",
      meaning: "须交给劳动者一份的书面劳动条件",
    },
  },
  {
    id: "imgeum-chebul",
    category: "labor",
    difficulty: "easy",
    term: "임금체불",
    reading: {
      en: "imgeum-chebul (unpaid wages)",
      vi: "imgeum-chebul (nợ lương)",
      ja: "イムグムチェブル(賃金未払い)",
      zh: "imgeum-chebul(拖欠工资)",
    },
    answer: 1,
    sources: [
      "근로기준법 제36조(금품 청산)·제43조(임금 지급)·제109조(벌칙)",
      "https://www.law.go.kr/법령/근로기준법",
      "고용노동부 노동포털 — 임금체불 진정 접수",
      "https://labor.moel.go.kr/",
    ],
    ko: {
      prompt: "두 달째 월급을 받지 못했습니다. 가장 먼저 찾아갈 곳은?",
      options: [
        "출입국·외국인청",
        "사업장을 관할하는 고용노동청(노동포털로 진정 접수)",
        "국민건강보험공단",
        "경찰서 교통과",
      ],
      explanation:
        "임금체불은 근로기준법 위반이고, 사업장을 관할하는 고용노동청에 진정을 넣는 것이 정식 절차입니다. 온라인 노동포털에서도 접수할 수 있고, 체류자격과 관계없이 일한 사람이라면 누구나 신고할 수 있습니다. 준비할 것은 근로계약서, 출퇴근 기록, 급여 입금 내역, 사장님과 주고받은 문자 같은 자료입니다. 통역이 필요하면 외국인노동자지원센터나 1345의 도움을 받을 수 있습니다.",
      meaning: "일한 임금을 제때 받지 못한 상태",
    },
    en: {
      prompt: "You haven’t been paid for two months. Where do you go first?",
      options: [
        "The immigration office",
        "The labor office with jurisdiction over your workplace (file via the online labor portal)",
        "The National Health Insurance Service",
        "The traffic division of a police station",
      ],
      explanation:
        "Unpaid wages violate the Labor Standards Act, and the proper route is a complaint to the labor office covering your workplace. You can also file through the online labor portal, and anyone who actually worked can file regardless of visa status. Bring your employment contract, attendance records, bank records of past pay, and messages exchanged with the employer. If you need an interpreter, a foreign workers’ support center or the 1345 line can help.",
      meaning: "Wages earned but not paid on time",
    },
    vi: {
      prompt: "Bạn đã hai tháng không được trả lương. Nơi đầu tiên cần tìm đến là đâu?",
      options: [
        "Cơ quan xuất nhập cảnh",
        "Cục Lao động quản lý nơi làm việc (nộp đơn qua cổng lao động trực tuyến)",
        "Cơ quan Bảo hiểm Y tế Quốc gia",
        "Phòng giao thông của đồn cảnh sát",
      ],
      explanation:
        "Nợ lương là vi phạm Luật Tiêu chuẩn Lao động, và trình tự chính thức là gửi đơn khiếu nại đến Cục Lao động quản lý nơi làm việc của bạn. Bạn cũng có thể nộp qua cổng lao động trực tuyến, và bất kỳ ai đã thực sự làm việc đều được khiếu nại, không phụ thuộc tư cách lưu trú. Hãy chuẩn bị hợp đồng lao động, bản ghi giờ làm, lịch sử chuyển lương, và tin nhắn trao đổi với chủ. Nếu cần phiên dịch, trung tâm hỗ trợ lao động nước ngoài hoặc đường dây 1345 có thể giúp.",
      meaning: "Tiền lương đã làm mà không được trả đúng hạn",
    },
    ja: {
      prompt: "2か月分の給料をもらえていません。最初に行くべきところは?",
      options: [
        "出入国・外国人庁",
        "事業場を管轄する雇用労働庁(労働ポータルで申告を受付)",
        "国民健康保険公団",
        "警察署の交通課",
      ],
      explanation:
        "賃金未払いは勤労基準法違反であり、事業場を管轄する雇用労働庁に申告(진정)を入れるのが正式な手続きです。オンラインの労働ポータルからも受け付けており、在留資格に関係なく実際に働いた人は誰でも申告できます。用意するものは労働契約書、出退勤の記録、給与の入金履歴、社長とやり取りしたメッセージなどの資料です。通訳が必要なら外国人労働者支援センターや1345の助けを受けられます。",
      meaning: "働いた賃金を期日に受け取れない状態",
    },
    zh: {
      prompt: "你已经两个月没拿到工资。应该最先去哪里?",
      options: [
        "出入境·外国人厅",
        "管辖你所在工作场所的雇佣劳动厅(通过劳动门户网站提交申诉)",
        "国民健康保险公团",
        "警察局交通科",
      ],
      explanation:
        "拖欠工资违反《劳动标准法》,正式途径是向管辖你工作场所的雇佣劳动厅提交申诉。也可以通过在线劳动门户提交,而且只要实际工作过,无论居留资格如何都可以申诉。要准备劳动合同、上下班记录、以往工资入账记录,以及与老板往来的短信等资料。需要翻译时,可以找外国人劳动者支援中心或1345寻求帮助。",
      meaning: "已付出劳动却未按期收到的工资",
    },
  },
  {
    id: "sadae-boheom",
    category: "labor",
    difficulty: "normal",
    term: "4대보험",
    reading: {
      en: "sadae-boheom (four major insurances)",
      vi: "sadae-boheom (bốn loại bảo hiểm)",
      ja: "サデボホム(四大保険)",
      zh: "sadae-boheom(四大保险)",
    },
    answer: 3,
    sources: [
      "2026년 보험료율 — 국민연금 9.5%(근로자 4.75%), 건강보험 7.19%(근로자 3.595%), 장기요양 0.9448%, 고용보험 실업급여 1.8%(근로자 0.9%)",
      "산업재해보상보험법 제6조·제72조 — 산재보험료는 사업주가 전액 부담",
      "https://www.law.go.kr/법령/산업재해보상보험법",
      "https://www.4insure.or.kr/",
    ],
    ko: {
      prompt: "“4대보험”(국민연금·건강보험·고용보험·산재보험) 중에서 보험료를 사업주가 전액 부담하는 것은?",
      options: ["국민연금", "건강보험", "고용보험", "산재보험"],
      explanation:
        "산재보험료는 산업재해보상보험법에 따라 사업주가 전액 부담합니다. 일하다 다친 책임은 사업주에게 있다는 원칙이어서, 근로자 급여에서 산재보험료가 빠지는 일은 없습니다. 나머지 셋은 근로자와 사업주가 나눠 냅니다. 2026년 기준으로 국민연금은 총 9.5%(근로자 4.75%), 건강보험은 총 7.19%(근로자 3.595%)에 장기요양보험료 0.9448%가 붙고, 고용보험 실업급여분은 총 1.8%(근로자 0.9%)입니다. 급여명세서에서 산재보험이 공제되어 있으면 반드시 확인해 보세요.",
      meaning: "국민연금·건강보험·고용보험·산재보험 네 가지",
    },
    en: {
      prompt: "Among the ‘four major insurances’ (pension, health, employment, industrial accident), which premium is paid entirely by the employer?",
      options: ["National pension", "Health insurance", "Employment insurance", "Industrial accident insurance"],
      explanation:
        "Industrial accident insurance premiums are borne entirely by the employer under the Industrial Accident Compensation Insurance Act. The principle is that responsibility for workplace injury sits with the employer, so this premium never comes out of your pay. The other three are split. For 2026: national pension totals 9.5% (worker 4.75%), health insurance 7.19% (worker 3.595%) plus long-term care at 0.9448%, and the unemployment portion of employment insurance 1.8% (worker 0.9%). If your payslip deducts accident insurance, query it.",
      meaning: "Pension, health, employment and accident insurance",
    },
    vi: {
      prompt: "Trong “bốn loại bảo hiểm” (lương hưu, y tế, việc làm, tai nạn lao động), loại nào do người sử dụng lao động trả toàn bộ phí?",
      options: ["Lương hưu quốc gia", "Bảo hiểm y tế", "Bảo hiểm việc làm", "Bảo hiểm tai nạn lao động"],
      explanation:
        "Phí bảo hiểm tai nạn lao động do người sử dụng lao động chịu toàn bộ, theo Luật Bảo hiểm Bồi thường Tai nạn Lao động. Nguyên tắc là trách nhiệm với thương tích tại nơi làm việc thuộc về chủ, nên phí này không bao giờ bị trừ vào lương của bạn. Ba loại còn lại chia đôi. Năm 2026: lương hưu tổng 9,5% (người lao động 4,75%), bảo hiểm y tế 7,19% (người lao động 3,595%) cộng bảo hiểm chăm sóc dài hạn 0,9448%, và phần trợ cấp thất nghiệp của bảo hiểm việc làm là 1,8% (người lao động 0,9%). Nếu phiếu lương trừ bảo hiểm tai nạn, hãy hỏi lại.",
      meaning: "Bốn bảo hiểm: lương hưu, y tế, việc làm, tai nạn",
    },
    ja: {
      prompt: "「4대보험」(国民年金・健康保険・雇用保険・労災保険)のうち、保険料を事業主が全額負担するものは?",
      options: ["国民年金", "健康保険", "雇用保険", "労災保険"],
      explanation:
        "労災保険料は産業災害補償保険法により事業主が全額負担します。働いていて負傷した責任は事業主にあるという原則なので、労働者の給与から労災保険料が引かれることはありません。残りの三つは労働者と事業主が分担します。2026年基準で国民年金は計9.5%(労働者4.75%)、健康保険は計7.19%(労働者3.595%)に長期療養保険料0.9448%が加わり、雇用保険の失業給付分は計1.8%(労働者0.9%)です。給与明細で労災保険が控除されていたら必ず確認してください。",
      meaning: "国民年金・健康保険・雇用保険・労災保険の四つ",
    },
    zh: {
      prompt: "「四大保险」(国民年金·健康保险·雇佣保险·工伤保险)中,哪一项的保险费由雇主全额负担?",
      options: ["国民年金", "健康保险", "雇佣保险", "工伤保险"],
      explanation:
        "依《产业灾害补偿保险法》,工伤保险费由雇主全额负担。原则是工作中受伤的责任在雇主,所以不会从劳动者工资里扣工伤保险费。其余三项由劳资双方分担。以2026年为准:国民年金合计9.5%(劳动者4.75%),健康保险7.19%(劳动者3.595%)另加长期疗养保险费0.9448%,雇佣保险的失业给付部分合计1.8%(劳动者0.9%)。如果工资单上扣了工伤保险,一定要去问清楚。",
      meaning: "国民年金·健康保险·雇佣保险·工伤保险四项",
    },
  },
  {
    id: "yeoncha",
    category: "labor",
    difficulty: "normal",
    term: "연차",
    reading: {
      en: "yeoncha (annual paid leave)",
      vi: "yeoncha (phép năm có lương)",
      ja: "ヨンチャ(年次有給休暇)",
      zh: "yeoncha(年假)",
    },
    answer: 0,
    sources: [
      "근로기준법 제60조(연차 유급휴가) — 1년 미만은 1개월 개근 시 1일, 1년 이상 80% 출근 시 15일",
      "https://www.law.go.kr/법령/근로기준법",
    ],
    ko: {
      prompt: "입사 7개월째인 직원의 “연차”는 어떻게 될까요?",
      options: [
        "1개월 개근마다 1일씩 생겨서 최대 7일 쓸 수 있다",
        "1년이 되기 전에는 연차가 전혀 없다",
        "입사하자마자 15일이 한꺼번에 생긴다",
        "회사가 주기로 하면 주고 아니면 안 준다",
      ],
      explanation:
        "근로기준법 제60조는 계속근로 1년 미만인 근로자에게 1개월 개근 시 1일의 유급휴가를 주도록 정합니다. 그래서 7개월을 개근했다면 7일이 생깁니다. 1년 이상 근무하고 출근율이 80% 이상이면 15일이 주어지고, 근속 연수에 따라 조금씩 늘어납니다. 연차는 회사의 선심이 아니라 법에 따른 권리이고, 쓰지 못한 연차는 수당으로 정산받을 수 있습니다.",
      meaning: "법으로 보장되는 유급휴가",
    },
    en: {
      prompt: "An employee is in their seventh month on the job. What annual paid leave do they have?",
      options: [
        "One day for each full month worked, so up to seven days",
        "None at all before completing one year",
        "A full 15 days from the day they joined",
        "Whatever the company feels like granting",
      ],
      explanation:
        "Article 60 of the Labor Standards Act gives workers with less than one year of service one paid day off for each month worked without absence. Seven clean months therefore means seven days. After one year with at least 80% attendance you get 15 days, rising gradually with length of service. Annual leave is a legal right, not the company’s favour, and unused days can be settled as pay.",
      meaning: "Paid leave guaranteed by law",
    },
    vi: {
      prompt: "Một nhân viên đang ở tháng thứ bảy làm việc. Phép năm của người đó thế nào?",
      options: [
        "Mỗi tháng làm đủ được 1 ngày, nên tối đa có 7 ngày",
        "Chưa đủ một năm thì không có phép nào",
        "Vừa vào làm là có ngay 15 ngày",
        "Công ty muốn cho thì cho, không thì thôi",
      ],
      explanation:
        "Điều 60 Luật Tiêu chuẩn Lao động quy định người lao động chưa đủ một năm được 1 ngày phép có lương cho mỗi tháng làm việc không nghỉ. Vậy làm đủ bảy tháng thì có bảy ngày. Sau một năm với tỷ lệ đi làm từ 80% trở lên thì được 15 ngày, và tăng dần theo số năm công tác. Phép năm là quyền theo luật chứ không phải ân huệ của công ty, và những ngày chưa dùng có thể được thanh toán thành tiền.",
      meaning: "Phép có lương được luật bảo đảm",
    },
    ja: {
      prompt: "入社7か月目の職員の「연차」(年次有給休暇)はどうなるでしょう?",
      options: [
        "1か月皆勤ごとに1日ずつ発生し、最大7日使える",
        "1年になる前は年次休暇がまったくない",
        "入社した時点で15日が一度に発生する",
        "会社が与えると決めれば与え、そうでなければ与えない",
      ],
      explanation:
        "勤労基準法第60条は、継続勤労1年未満の労働者に1か月皆勤ごとに1日の有給休暇を与えるよう定めています。したがって7か月皆勤なら7日が発生します。1年以上勤務して出勤率が80%以上なら15日が与えられ、勤続年数に応じて少しずつ増えます。年次休暇は会社の好意ではなく法に基づく権利で、使えなかった分は手当として精算を受けられます。",
      meaning: "法律で保障される有給休暇",
    },
    zh: {
      prompt: "一位入职第七个月的员工,「연차」(年假)会怎样?",
      options: [
        "每满一个月全勤得1天,所以最多可用7天",
        "不满一年之前完全没有年假",
        "入职当天就一次性获得15天",
        "公司愿意给就给,不愿意就没有",
      ],
      explanation:
        "《劳动标准法》第60条规定,连续工作不满一年的劳动者,每满一个月全勤可获1天带薪假。因此全勤七个月就有七天。工作满一年且出勤率达80%以上则获得15天,并随工龄逐步增加。年假是法定权利而非公司恩惠,未使用的天数可折算成工资结清。",
      meaning: "法律保障的带薪休假",
    },
  },
  {
    id: "juhyu-sudang",
    category: "labor",
    difficulty: "normal",
    term: "주휴수당",
    reading: {
      en: "juhyu-sudang (weekly holiday allowance)",
      vi: "juhyu-sudang (phụ cấp ngày nghỉ tuần)",
      ja: "チュヒュスダン(週休手当)",
      zh: "juhyu-sudang(周休津贴)",
    },
    answer: 1,
    sources: [
      "근로기준법 제55조(휴일)·시행령 제30조 — 1주 소정근로시간 15시간 이상이고 1주를 개근한 근로자에게 유급 주휴일",
      "https://www.law.go.kr/법령/근로기준법",
    ],
    ko: {
      prompt: "아르바이트를 하면서 “주휴수당”을 받으려면 어떤 조건을 채워야 할까요?",
      options: [
        "주 40시간 이상 근무해야 한다",
        "1주 소정근로시간이 15시간 이상이고 그 주를 개근해야 한다",
        "정규직이어야 한다",
        "1년 이상 근무해야 한다",
      ],
      explanation:
        "주휴수당은 1주 소정근로시간이 15시간 이상이고 그 주를 개근한 근로자에게 유급 휴일 하루치 임금을 주는 제도입니다(근로기준법 제55조). 정규직인지 아르바이트인지, 내국인인지 외국인인지는 따지지 않습니다. 예를 들어 주 3일씩 하루 6시간(주 18시간) 일하고 결근이 없다면 주휴수당 대상입니다. 시급만 계산해 둔 사장님과 금액이 안 맞는 일이 흔하니, 계약 때 주휴수당이 시급에 포함된 것인지 따로 주는 것인지 확인해 두세요.",
      meaning: "주 15시간 이상 개근 시 받는 유급 휴일 수당",
    },
    en: {
      prompt: "To receive ‘juhyu-sudang’ (weekly holiday allowance) in a part-time job, what must you meet?",
      options: [
        "Work at least 40 hours a week",
        "Have contracted hours of 15 or more a week and work that week without absence",
        "Be a permanent employee",
        "Have worked for over a year",
      ],
      explanation:
        "Weekly holiday allowance pays one day’s wage as a paid rest day to workers whose contracted hours are 15 or more a week and who worked that week without absence (Labor Standards Act, Art. 55). Permanent or part-time, Korean or foreign, makes no difference. Three days a week at six hours each — 18 hours — with no absence qualifies. Employers who only worked out the hourly rate often come up short, so confirm at signing whether the allowance is folded into your hourly rate or paid separately.",
      meaning: "Paid rest-day allowance for 15+ hours a week",
    },
    vi: {
      prompt: "Để nhận “주휴수당” (phụ cấp ngày nghỉ tuần) khi làm thêm, bạn phải đáp ứng điều kiện gì?",
      options: [
        "Phải làm từ 40 giờ/tuần trở lên",
        "Giờ làm theo hợp đồng từ 15 giờ/tuần trở lên và đi làm đủ tuần đó",
        "Phải là nhân viên chính thức",
        "Phải làm trên một năm",
      ],
      explanation:
        "Phụ cấp ngày nghỉ tuần trả một ngày lương như ngày nghỉ có lương cho người lao động có giờ làm theo hợp đồng từ 15 giờ/tuần trở lên và đi làm đủ tuần đó (Luật Tiêu chuẩn Lao động, Điều 55). Chính thức hay làm thêm, người Hàn hay người nước ngoài đều không phân biệt. Ví dụ làm 3 ngày/tuần, mỗi ngày 6 giờ (18 giờ/tuần) mà không nghỉ thì thuộc đối tượng. Nhiều chủ chỉ tính lương giờ nên số tiền thường bị thiếu; vì vậy khi ký hãy xác nhận phụ cấp này đã gộp vào lương giờ hay trả riêng.",
      meaning: "Phụ cấp nghỉ có lương khi làm từ 15 giờ/tuần",
    },
    ja: {
      prompt: "アルバイトをしながら「주휴수당」(週休手当)を受け取るには、どんな条件を満たすでしょう?",
      options: [
        "週40時間以上勤務しなければならない",
        "1週の所定労働時間が15時間以上で、その週を皆勤しなければならない",
        "正社員でなければならない",
        "1年以上勤務しなければならない",
      ],
      explanation:
        "週休手当は、1週の所定労働時間が15時間以上でその週を皆勤した労働者に、有給休日1日分の賃金を支給する制度です(勤労基準法第55条)。正社員かアルバイトか、韓国人か外国人かは問いません。たとえば週3日、1日6時間(週18時間)働いて欠勤がなければ週休手当の対象です。時給だけ計算していた社長と金額が合わないことがよくあるので、契約のときに週休手当が時給に含まれているのか別に支払われるのか確認しておいてください。",
      meaning: "週15時間以上の皆勤で受け取る有給休日手当",
    },
    zh: {
      prompt: "打工时想拿到「주휴수당」(周休津贴),需要满足什么条件?",
      options: [
        "每周必须工作40小时以上",
        "每周约定工时达15小时以上,且该周全勤",
        "必须是正式员工",
        "必须工作满一年以上",
      ],
      explanation:
        "周休津贴是指对每周约定工时达15小时以上、且该周全勤的劳动者,支付一天带薪休息日工资的制度(《劳动标准法》第55条)。不论正式员工还是打工、韩国人还是外国人,一律适用。比如每周工作3天、每天6小时(共18小时)且没有缺勤,就属于适用对象。很多老板只算了时薪,金额常常不对,所以签约时要确认这项津贴是已含在时薪里,还是另行支付。",
      meaning: "每周满15小时且全勤可得的带薪休息日津贴",
    },
  },
  {
    id: "toejikgeum",
    category: "labor",
    difficulty: "normal",
    term: "퇴직금",
    reading: {
      en: "toejikgeum (severance pay)",
      vi: "toejikgeum (tiền trợ cấp thôi việc)",
      ja: "テジックム(退職金)",
      zh: "toejikgeum(退职金)",
    },
    answer: 2,
    sources: [
      "근로자퇴직급여 보장법 제4조(퇴직급여제도의 설정) — 계속근로 1년 이상, 4주 평균 주 15시간 이상",
      "근로자퇴직급여 보장법 제9조(퇴직금의 지급) — 퇴직일부터 14일 이내",
      "https://www.law.go.kr/법령/근로자퇴직급여보장법",
    ],
    ko: {
      prompt: "1년 3개월 일하고 그만뒀습니다. “퇴직금”은 언제까지 받아야 할까요?",
      options: [
        "다음 달 급여일에",
        "퇴직일부터 7일 이내",
        "퇴직일부터 14일 이내",
        "퇴직일부터 3개월 이내",
      ],
      explanation:
        "근로자퇴직급여 보장법 제9조는 사용자가 근로자가 퇴직한 날부터 14일 이내에 퇴직금을 지급하도록 정합니다(특별한 사정이 있으면 당사자 합의로 연장 가능). 퇴직금 대상은 계속근로기간 1년 이상이고 4주 평균 주 소정근로시간이 15시간 이상인 근로자여서, 아르바이트도 조건을 채우면 받습니다. 14일이 지나도 주지 않으면 임금체불과 같은 절차로 고용노동청에 진정할 수 있습니다.",
      meaning: "1년 이상 일한 사람이 퇴직 때 받는 돈",
    },
    en: {
      prompt: "You worked a year and three months and quit. By when must severance pay be paid?",
      options: [
        "On next month’s payday",
        "Within 7 days of leaving",
        "Within 14 days of leaving",
        "Within 3 months of leaving",
      ],
      explanation:
        "Article 9 of the Employee Retirement Benefit Security Act requires the employer to pay severance within 14 days of the employee’s departure (extendable by agreement in special circumstances). Eligibility requires one year or more of continuous service and contracted hours averaging 15 or more a week over four weeks — so part-timers who meet it are entitled too. If 14 days pass with no payment, you can file with the labor office exactly as for unpaid wages.",
      meaning: "Payment on leaving after a year or more",
    },
    vi: {
      prompt: "Bạn làm một năm ba tháng rồi nghỉ. “퇴직금” (trợ cấp thôi việc) phải được trả trong thời hạn nào?",
      options: [
        "Vào ngày trả lương tháng sau",
        "Trong 7 ngày kể từ ngày nghỉ",
        "Trong 14 ngày kể từ ngày nghỉ",
        "Trong 3 tháng kể từ ngày nghỉ",
      ],
      explanation:
        "Điều 9 Luật Bảo đảm Trợ cấp Thôi việc quy định người sử dụng lao động phải trả trợ cấp trong 14 ngày kể từ ngày người lao động thôi việc (có thể gia hạn theo thỏa thuận nếu có hoàn cảnh đặc biệt). Điều kiện là thời gian làm việc liên tục từ một năm trở lên và giờ làm theo hợp đồng bình quân từ 15 giờ/tuần trong bốn tuần — nên người làm thêm đáp ứng điều kiện cũng được nhận. Quá 14 ngày mà không trả, bạn có thể khiếu nại lên Cục Lao động y như trường hợp nợ lương.",
      meaning: "Khoản tiền nhận khi thôi việc sau một năm trở lên",
    },
    ja: {
      prompt: "1年3か月働いて辞めました。「퇴직금」(退職金)はいつまでに受け取るでしょう?",
      options: [
        "翌月の給与日に",
        "退職日から7日以内",
        "退職日から14日以内",
        "退職日から3か月以内",
      ],
      explanation:
        "勤労者退職給与保障法第9条は、使用者が労働者が退職した日から14日以内に退職金を支給するよう定めています(特別の事情があれば当事者の合意で延長可能)。退職金の対象は継続勤労期間1年以上で、4週平均の週所定労働時間が15時間以上の労働者なので、アルバイトでも条件を満たせば受け取れます。14日を過ぎても支払われない場合は、賃金未払いと同じ手続きで雇用労働庁に申告できます。",
      meaning: "1年以上働いた人が退職時に受け取るお金",
    },
    zh: {
      prompt: "你工作了一年三个月后离职。「퇴직금」(退职金)最晚什么时候必须拿到?",
      options: [
        "下个月的发薪日",
        "离职之日起7天内",
        "离职之日起14天内",
        "离职之日起3个月内",
      ],
      explanation:
        "《劳动者退职给付保障法》第9条规定,雇主须在劳动者离职之日起14天内支付退职金(有特殊情形时可经双方约定延长)。适用条件是连续工作一年以上,且四周平均每周约定工时达15小时以上——所以打工者满足条件也能拿到。超过14天仍未支付的,可以按照拖欠工资的同样程序向雇佣劳动厅提交申诉。",
      meaning: "工作满一年以上离职时可得的款项",
    },
  },
  {
    id: "siryeop-geubyeo",
    category: "labor",
    difficulty: "normal",
    term: "실업급여",
    reading: {
      en: "sireop-geubyeo (unemployment benefit)",
      vi: "sireop-geubyeo (trợ cấp thất nghiệp)",
      ja: "シロプクピョ(失業給付)",
      zh: "sireop-geubyeo(失业给付)",
    },
    answer: 1,
    sources: [
      "고용보험법 제40조(구직급여의 수급 요건) — 이직 전 18개월 동안 피보험단위기간 180일 이상",
      "https://www.law.go.kr/법령/고용보험법",
      "고용보험법 시행령 제3조 — 외국인근로자 중 E-9·H-2는 고용보험 당연적용",
      "https://www.ei.go.kr/",
    ],
    ko: {
      prompt: "“실업급여”(구직급여)의 기본 요건에 대한 설명으로 맞는 것은?",
      options: [
        "체류자격이 E-9이면 외국인이라 대상이 아니다",
        "이직 전 18개월 동안 피보험단위기간이 180일 이상이어야 한다",
        "스스로 그만두어도 항상 받을 수 있다",
        "1년 이상 한 회사에서만 일해야 받을 수 있다",
      ],
      explanation:
        "구직급여는 이직 전 18개월(기준기간) 동안 고용보험 피보험단위기간이 통산 180일 이상이고, 비자발적으로 이직했으며, 일할 능력과 의사가 있는데도 취업하지 못한 상태일 때 받습니다(고용보험법 제40조). 한 회사에서 180일을 채워야 하는 것이 아니라 여러 직장을 합해 계산합니다. E-9(비전문취업)과 H-2(방문취업) 체류자격도 고용보험 당연적용 대상이므로 외국인이라고 제외되지 않습니다. 반대로 개인 사정으로 스스로 그만두면 원칙적으로 대상이 아닙니다.",
      meaning: "비자발적 이직 후 받는 구직 지원 급여",
    },
    en: {
      prompt: "Which statement about the basic requirements for unemployment benefit is correct?",
      options: [
        "E-9 holders are foreigners, so they are not eligible",
        "You need 180 or more insured days within the 18 months before leaving",
        "You can always claim it even if you quit voluntarily",
        "You must have worked at a single company for over a year",
      ],
      explanation:
        "Job-seeking benefit requires at least 180 insured days in total within the 18 months before you left, an involuntary separation, and that you are able and willing to work but not yet employed (Employment Insurance Act, Art. 40). The 180 days need not come from one employer — periods across jobs are added up. E-9 (non-professional employment) and H-2 (work and visit) statuses are covered by employment insurance, so being foreign does not exclude you. Conversely, quitting for personal reasons generally does.",
      meaning: "Benefit after involuntary job loss",
    },
    vi: {
      prompt: "Phát biểu nào về điều kiện cơ bản của “실업급여” (trợ cấp tìm việc) là đúng?",
      options: [
        "Người có tư cách E-9 là người nước ngoài nên không thuộc đối tượng",
        "Phải có từ 180 ngày tham gia bảo hiểm trở lên trong 18 tháng trước khi nghỉ",
        "Tự ý nghỉ việc thì lúc nào cũng được nhận",
        "Phải làm ở cùng một công ty trên một năm mới được nhận",
      ],
      explanation:
        "Trợ cấp tìm việc yêu cầu tổng cộng từ 180 ngày tham gia bảo hiểm trở lên trong 18 tháng trước khi nghỉ, việc nghỉ là không tự nguyện, và bạn có khả năng cùng ý muốn làm việc nhưng chưa có việc (Luật Bảo hiểm Việc làm, Điều 40). 180 ngày không cần đến từ một chủ duy nhất — các giai đoạn ở nhiều nơi làm được cộng dồn. Tư cách E-9 (lao động phổ thông) và H-2 (thăm thân và làm việc) đều thuộc diện bảo hiểm việc làm, nên là người nước ngoài không bị loại. Ngược lại, tự ý nghỉ vì lý do cá nhân thì về nguyên tắc không thuộc đối tượng.",
      meaning: "Trợ cấp sau khi mất việc không tự nguyện",
    },
    ja: {
      prompt: "「실업급여」(失業給付・求職給付)の基本要件についての説明として正しいものは?",
      options: [
        "在留資格がE-9なら外国人なので対象ではない",
        "離職前18か月の間に被保険単位期間が180日以上なければならない",
        "自分から辞めても常に受け取れる",
        "1年以上同じ会社で働いた場合だけ受け取れる",
      ],
      explanation:
        "求職給付は、離職前18か月(基準期間)の間に雇用保険の被保険単位期間が通算180日以上あり、非自発的に離職し、働く能力と意思があるのに就職できていない状態のときに受け取れます(雇用保険法第40条)。180日を一つの会社で満たす必要はなく、複数の職場を合わせて計算します。E-9(非専門就業)とH-2(訪問就業)の在留資格も雇用保険の当然適用対象なので、外国人だからといって除外されません。逆に個人的な事情で自ら辞めた場合は原則として対象外です。",
      meaning: "非自発的な離職後に受け取る求職支援給付",
    },
    zh: {
      prompt: "关于「실업급여」(失业给付·求职给付)的基本条件,哪项说明正确?",
      options: [
        "居留资格为E-9的是外国人,不属于适用对象",
        "离职前18个月内被保险单位期间须达180天以上",
        "自己主动辞职也一定能领取",
        "必须在同一家公司工作一年以上才能领取",
      ],
      explanation:
        "求职给付要求离职前18个月(基准期间)内雇佣保险被保险单位期间合计达180天以上,属于非自愿离职,且有工作能力和意愿却尚未就业(《雇佣保险法》第40条)。180天不必在一家公司凑满,多个工作单位的期间可以合并计算。E-9(非专业就业)和H-2(访问就业)居留资格同样属于雇佣保险当然适用对象,不会因为是外国人而被排除。反之,因个人原因主动辞职原则上不属于适用对象。",
      meaning: "非自愿离职后领取的求职支援给付",
    },
  },
  {
    id: "gasan-sudang",
    category: "labor",
    difficulty: "hard",
    term: "가산수당",
    reading: {
      en: "gasan-sudang (premium pay)",
      vi: "gasan-sudang (phụ cấp tăng thêm)",
      ja: "カサンスダン(加算手当)",
      zh: "gasan-sudang(加算津贴)",
    },
    answer: 3,
    sources: [
      "근로기준법 제56조(연장·야간 및 휴일 근로) — 연장·야간 50% 가산, 휴일근로 8시간 이내 50% / 8시간 초과 100% 가산",
      "https://www.law.go.kr/법령/근로기준법",
    ],
    ko: {
      prompt: "휴일에 나와 10시간을 일했습니다. 8시간을 넘긴 2시간에 대한 가산율은?",
      options: ["가산 없음", "25%", "50%", "100%"],
      explanation:
        "근로기준법 제56조는 휴일근로에 대해 8시간 이내는 통상임금의 50%, 8시간을 초과한 부분은 100%를 가산해 지급하도록 정합니다. 그래서 휴일에 10시간을 일했다면 앞의 8시간은 1.5배, 뒤의 2시간은 2배로 계산됩니다. 연장근로와 야간근로(밤 10시부터 다음 날 오전 6시)는 각각 50% 가산이고, 야간에 연장근로를 하면 두 가산이 함께 붙습니다. 급여명세서에서 이 항목들이 빠져 있지 않은지 확인해 보세요.",
      meaning: "연장·야간·휴일 근로에 더해 주는 임금",
    },
    en: {
      prompt: "You came in on a holiday and worked 10 hours. What premium applies to the 2 hours beyond 8?",
      options: ["No premium", "25%", "50%", "100%"],
      explanation:
        "Article 56 of the Labor Standards Act sets holiday-work premiums at 50% of ordinary wages for the first 8 hours and 100% beyond 8 hours. So for a 10-hour holiday shift, the first 8 hours count at 1.5× and the last 2 at 2×. Overtime and night work (10pm to 6am) each carry a 50% premium, and overtime performed at night attracts both. Check that these line items actually appear on your payslip.",
      meaning: "Extra pay for overtime, night and holiday work",
    },
    vi: {
      prompt: "Bạn đi làm vào ngày nghỉ và làm 10 giờ. Phần 2 giờ vượt quá 8 giờ được cộng thêm bao nhiêu phần trăm?",
      options: ["Không cộng thêm", "25%", "50%", "100%"],
      explanation:
        "Điều 56 Luật Tiêu chuẩn Lao động quy định làm việc ngày nghỉ được cộng 50% lương thông thường cho 8 giờ đầu và 100% cho phần vượt quá 8 giờ. Vậy với ca 10 giờ trong ngày nghỉ, 8 giờ đầu tính 1,5 lần và 2 giờ sau tính 2 lần. Làm thêm giờ và làm đêm (22h đến 6h sáng) mỗi loại cộng 50%, và làm thêm giờ vào ban đêm thì cộng cả hai. Hãy kiểm tra xem phiếu lương của bạn có thực sự ghi những khoản này không.",
      meaning: "Lương cộng thêm cho làm thêm, làm đêm, ngày nghỉ",
    },
    ja: {
      prompt: "休日に出て10時間働きました。8時間を超えた2時間に対する加算率は?",
      options: ["加算なし", "25%", "50%", "100%"],
      explanation:
        "勤労基準法第56条は休日労働について、8時間以内は通常賃金の50%、8時間を超えた部分は100%を加算して支給するよう定めています。したがって休日に10時間働いたなら、前の8時間は1.5倍、後の2時間は2倍で計算されます。延長労働と夜間労働(夜10時から翌朝6時)はそれぞれ50%の加算で、夜間に延長労働をすれば二つの加算が重なります。給与明細でこれらの項目が抜けていないか確認してください。",
      meaning: "延長・夜間・休日労働に上乗せされる賃金",
    },
    zh: {
      prompt: "你在休息日上班工作了10小时。超过8小时的那2小时加算率是多少?",
      options: ["不加算", "25%", "50%", "100%"],
      explanation:
        "《劳动标准法》第56条规定,休息日工作在8小时以内按通常工资加算50%,超过8小时的部分加算100%。因此休息日工作10小时,前8小时按1.5倍计,后2小时按2倍计。延长工作和夜间工作(晚10点至次日早6点)各加算50%,在夜间加班则两项加算叠加。请检查工资单上这些项目有没有被漏掉。",
      meaning: "延长·夜间·休息日工作的额外工资",
    },
  },
  {
    id: "sueop-gigan",
    category: "labor",
    difficulty: "hard",
    term: "수습기간",
    reading: {
      en: "sueop-gigan (probation period)",
      vi: "sueop-gigan (thời gian thử việc)",
      ja: "ススプキガン(試用期間)",
      zh: "sueop-gigan(试用期)",
    },
    answer: 2,
    sources: [
      "최저임금법 제5조 제2항·시행령 제3조 — 1년 이상 근로계약을 체결하고 수습을 시작한 날부터 3개월 이내인 경우 최저임금의 90% 지급 가능, 단순노무 종사자(한국표준직업분류 대분류 9)는 제외",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1694&ccfNo=1&cciNo=2&cnpClsNo=3",
    ],
    ko: {
      prompt: "사장님이 “수습 6개월 동안은 최저임금의 90%만 줄게”라고 합니다. 맞는 설명은?",
      options: [
        "수습이면 기간 제한 없이 90%를 줄 수 있다",
        "수습에는 최저임금이 적용되지 않는다",
        "1년 이상 근로계약을 맺은 경우에만, 수습 시작일부터 3개월까지 90%가 가능하다",
        "모든 업종에서 90%가 허용된다",
      ],
      explanation:
        "최저임금법 제5조 제2항에 따라 감액은 1년 이상의 기간을 정해 근로계약을 체결하고 수습을 시작한 날부터 3개월 이내인 경우에만 가능하며, 그때도 최저임금의 90% 이상을 주어야 합니다. 그래서 「수습 6개월 동안 90%」는 뒤의 3개월이 위법입니다. 또 한국표준직업분류 대분류 9(단순노무 종사자)에 해당하는 일은 수습이라도 감액할 수 없습니다. 2026년 최저임금 10,320원을 기준으로 하면 감액 시 시간급은 9,288원입니다. 최저임금 위반은 3년 이하의 징역 또는 2천만원 이하의 벌금 대상입니다.",
      meaning: "최저임금 감액이 허용되는 3개월의 수습",
    },
    en: {
      prompt: "Your boss says ‘for your six-month probation I’ll pay 90% of minimum wage’. Which statement is correct?",
      options: [
        "Probation allows 90% for any length of time",
        "Minimum wage does not apply during probation",
        "Only with a contract of one year or more, and only for 3 months from the start of probation",
        "90% is allowed in every industry",
      ],
      explanation:
        "Under Article 5(2) of the Minimum Wage Act, the reduction is allowed only where the contract is for one year or more and only within 3 months from the start of probation — and even then you must receive at least 90% of the minimum wage. So ‘90% for a six-month probation’ is unlawful for the last three months. Jobs classified under major group 9 of the Korean Standard Classification of Occupations (elementary workers) cannot be reduced at all, probation or not. Against the 2026 minimum of 10,320 won, the reduced rate is 9,288 won. Violations carry up to 3 years’ imprisonment or a fine of up to 20 million won.",
      meaning: "The 3-month probation where reduced wage is allowed",
    },
    vi: {
      prompt: "Chủ nói “sáu tháng thử việc tôi chỉ trả 90% lương tối thiểu”. Phát biểu nào đúng?",
      options: [
        "Là thử việc thì được trả 90% không giới hạn thời gian",
        "Thời gian thử việc không áp dụng lương tối thiểu",
        "Chỉ khi hợp đồng từ một năm trở lên, và chỉ trong 3 tháng kể từ ngày bắt đầu thử việc",
        "Mọi ngành nghề đều được phép trả 90%",
      ],
      explanation:
        "Theo Điều 5 khoản 2 Luật Lương Tối thiểu, việc giảm chỉ được phép khi hợp đồng có thời hạn từ một năm trở lên và chỉ trong vòng 3 tháng kể từ ngày bắt đầu thử việc — và ngay cả khi đó bạn vẫn phải nhận ít nhất 90% lương tối thiểu. Vậy “90% trong sáu tháng thử việc” là trái luật ở ba tháng sau. Ngoài ra, công việc thuộc nhóm lớn 9 của Phân loại Nghề nghiệp Tiêu chuẩn Hàn Quốc (lao động giản đơn) thì dù thử việc cũng không được giảm. Lấy mức tối thiểu 2026 là 10.320 won thì mức giảm là 9.288 won/giờ. Vi phạm lương tối thiểu có thể bị tù đến 3 năm hoặc phạt tiền đến 20 triệu won.",
      meaning: "Thời gian thử việc 3 tháng được giảm lương tối thiểu",
    },
    ja: {
      prompt: "社長が「試用期間6か月は最低賃金の90%だけ払うよ」と言います。正しい説明は?",
      options: [
        "試用期間なら期間制限なく90%を払える",
        "試用期間には最低賃金が適用されない",
        "1年以上の労働契約を結んだ場合にのみ、試用開始日から3か月まで90%が可能である",
        "すべての業種で90%が許される",
      ],
      explanation:
        "最低賃金法第5条第2項により、減額は1年以上の期間を定めて労働契約を結び、試用を始めた日から3か月以内の場合にのみ可能で、そのときも最低賃金の90%以上を払わなければなりません。したがって「試用6か月の間90%」は後ろの3か月が違法です。また韓国標準職業分類の大分類9(単純労務従事者)に該当する仕事は、試用期間でも減額できません。2026年の最低賃金10,320ウォンを基準にすると、減額時の時間給は9,288ウォンです。最低賃金違反は3年以下の懲役または2千万ウォン以下の罰金の対象です。",
      meaning: "最低賃金の減額が許される3か月の試用期間",
    },
    zh: {
      prompt: "老板说「试用期六个月只付最低工资的90%」。哪项说明正确?",
      options: [
        "只要是试用期,就能无期限地付90%",
        "试用期不适用最低工资",
        "只有签订一年以上劳动合同时,且仅限试用开始之日起3个月内可付90%",
        "所有行业都允许付90%",
      ],
      explanation:
        "根据《最低工资法》第5条第2款,减额只有在签订一年以上期限的劳动合同、且在试用开始之日起3个月内才允许,即便如此也必须支付最低工资的90%以上。因此「试用六个月都付90%」在后三个月是违法的。此外,属于韩国标准职业分类大类9(简单劳务从业者)的工作,即使在试用期也不得减额。以2026年最低工资10,320韩元为准,减额后时薪为9,288韩元。违反最低工资可处3年以下有期徒刑或2千万韩元以下罚金。",
      meaning: "允许减额最低工资的3个月试用期",
    },
  },
  {
    id: "saeopjang-byeongyeong",
    category: "labor",
    difficulty: "hard",
    term: "사업장 변경",
    reading: {
      en: "saeopjang byeongyeong (change of workplace)",
      vi: "saeopjang byeongyeong (đổi nơi làm việc)",
      ja: "サオプチャン ピョンギョン(事業場の変更)",
      zh: "saeopjang byeongyeong(变更工作场所)",
    },
    answer: 0,
    sources: [
      "외국인근로자의 고용 등에 관한 법률 제25조(사업 또는 사업장 변경의 허용) — 최초 3년 중 3회, 재고용 기간(1년 10개월) 중 2회, 근로자의 책임이 아닌 사유는 횟수에 포함하지 않음",
      "https://www.law.go.kr/법령/외국인근로자의고용등에관한법률",
      "https://www.eps.go.kr/",
    ],
    ko: {
      prompt: "E-9(비전문취업)으로 일하는 사람이 사업주의 부당한 처우 때문에 일터를 옮겼습니다. 이 경우 사업장 변경 횟수는?",
      options: [
        "근로자의 책임이 아닌 사유여서 횟수에 포함되지 않는다",
        "사유와 관계없이 1회로 계산된다",
        "2회로 계산된다",
        "부당한 처우가 있어도 사업장을 옮길 수 없다",
      ],
      explanation:
        "외국인근로자의 고용 등에 관한 법률 제25조는 E-9 근로자의 사업장 변경을 최초 3년 동안 원칙적으로 3회, 재고용 기간(1년 10개월) 동안 2회로 제한합니다. 다만 사용자의 부당한 처우, 휴업·폐업처럼 근로자에게 책임이 없는 사유로 옮기는 경우는 이 횟수에 포함되지 않습니다. 이 예외를 인정받으려면 증거가 중요하므로, 임금 미지급 기록·폭언이나 폭행의 증거·근로조건 위반 자료를 모아 고용센터에 제출해야 합니다. 혼자 판단하기 어려우면 외국인노동자지원센터나 1345에서 상담을 받으세요.",
      meaning: "E-9 근로자가 일터를 옮기는 제도",
    },
    en: {
      prompt: "An E-9 (non-professional employment) worker changes workplace because of unfair treatment by the employer. How does this count?",
      options: [
        "It does not count, because the cause is not the worker’s responsibility",
        "It counts as one change regardless of the cause",
        "It counts as two changes",
        "Unfair treatment does not permit a change of workplace at all",
      ],
      explanation:
        "Article 25 of the Act on the Employment of Foreign Workers caps workplace changes for E-9 workers at 3 during the first 3 years and 2 during the re-employment period (1 year 10 months). But changes caused by the employer’s unfair treatment, or by business suspension or closure — anything not the worker’s fault — are excluded from that count. Winning that exception turns on evidence, so gather records of unpaid wages, proof of abuse or assault, and documentation of breached terms, and submit them to the employment center. If the judgment call is hard, get advice from a foreign workers’ support center or the 1345 line.",
      meaning: "The workplace-change system for E-9 workers",
    },
    vi: {
      prompt: "Một người làm việc theo E-9 (lao động phổ thông) đổi nơi làm vì bị chủ đối xử bất công. Trường hợp này tính số lần thế nào?",
      options: [
        "Không tính vào số lần, vì nguyên nhân không thuộc trách nhiệm người lao động",
        "Tính là 1 lần bất kể nguyên nhân",
        "Tính là 2 lần",
        "Dù bị đối xử bất công cũng không được đổi nơi làm việc",
      ],
      explanation:
        "Điều 25 Luật về Tuyển dụng Lao động Nước ngoài giới hạn việc đổi nơi làm của lao động E-9 ở 3 lần trong 3 năm đầu và 2 lần trong giai đoạn tái tuyển dụng (1 năm 10 tháng). Tuy nhiên, việc đổi do chủ đối xử bất công, do nghỉ kinh doanh hay đóng cửa — tức những nguyên nhân không phải lỗi của người lao động — thì không tính vào số lần đó. Để được công nhận ngoại lệ này, bằng chứng rất quan trọng: hãy thu thập chứng cứ nợ lương, bằng chứng bị mắng nhiếc hay hành hung, tài liệu về việc vi phạm điều kiện lao động, rồi nộp cho trung tâm việc làm. Nếu khó tự đánh giá, hãy xin tư vấn ở trung tâm hỗ trợ lao động nước ngoài hoặc đường dây 1345.",
      meaning: "Chế độ đổi nơi làm việc của lao động E-9",
    },
    ja: {
      prompt: "E-9(非専門就業)で働く人が、事業主の不当な処遇のために職場を移りました。この場合、事業場変更の回数は?",
      options: [
        "労働者の責任ではない事由なので回数に含まれない",
        "事由に関係なく1回として計算される",
        "2回として計算される",
        "不当な処遇があっても事業場を移ることはできない",
      ],
      explanation:
        "外国人勤労者の雇用等に関する法律第25条は、E-9労働者の事業場変更を最初の3年間は原則3回、再雇用期間(1年10か月)は2回に制限しています。ただし使用者の不当な処遇、休業・廃業のように労働者に責任がない事由で移る場合は、この回数に含まれません。この例外を認めてもらうには証拠が重要なので、賃金未払いの記録、暴言や暴行の証拠、労働条件違反の資料を集めて雇用センターに提出する必要があります。一人で判断しにくければ、外国人労働者支援センターや1345で相談を受けてください。",
      meaning: "E-9労働者が職場を移る制度",
    },
    zh: {
      prompt: "一位以E-9(非专业就业)工作的人,因雇主的不当对待而更换了工作场所。这种情况算几次?",
      options: [
        "因原因不属于劳动者责任,不计入次数",
        "无论原因如何都算1次",
        "算2次",
        "即便受到不当对待也不能更换工作场所",
      ],
      explanation:
        "《外国人劳动者雇佣等法律》第25条将E-9劳动者更换工作场所限制为最初3年原则上3次、再雇佣期间(1年10个月)2次。但因雇主不当对待、停业或歇业等不属于劳动者责任的原因而更换的,不计入该次数。要获得这项例外的认定,证据很关键:请收集拖欠工资的记录、辱骂或殴打的证据、违反劳动条件的材料,提交给雇佣中心。自己难以判断时,可以到外国人劳动者支援中心或拨1345咨询。",
      meaning: "E-9劳动者更换工作场所的制度",
    },
  },
];
