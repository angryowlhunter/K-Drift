import type { QuizQuestion } from "./types";

/**
 * 의료·건강보험 12문제.
 * 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고 sources에 남겼다.
 * 확인되지 않은 수치(건강보험료 체납 시 비자 연장 제한 금액 기준, 질환별 실제 진료비 등)는
 * 일부러 출제하지 않았다.
 */
export const MEDICAL_QUESTIONS: QuizQuestion[] = [
  {
    id: "il-il-gu",
    category: "medical",
    difficulty: "easy",
    term: "119",
    reading: {
      en: "il-il-gu (119)",
      vi: "il-il-gu (119)",
      ja: "イリルグ(119)",
      zh: "119",
    },
    answer: 1,
    sources: [
      "119구조·구급에 관한 법률 제2조",
      "https://www.nfa.go.kr/nfa/",
      "외국인종합안내센터(1345) 운영 안내 — 20개 언어, 평일 09:00~22:00",
      "https://www.immigration.go.kr/immigration/1530/subview.do",
    ],
    ko: {
      prompt: "길에서 사람이 갑자기 쓰러졌습니다. 구급차를 부르려면 몇 번으로 전화할까요?",
      options: ["112", "119", "1339", "1345"],
      explanation:
        "119는 소방청이 운영하는 화재·구조·구급 신고 번호입니다. 구급차가 필요하면 119, 범죄 신고는 112로 나뉩니다. 체류·생활 문의는 외국인종합안내센터 1345가 따로 있는데 20개 언어로 상담되지만 평일 09시~22시에만 운영하니, 응급 상황에서는 망설이지 말고 119를 누르세요.",
      meaning: "화재·구조·구급 신고 번호",
    },
    en: {
      prompt: "Someone collapses on the street. Which number do you call for an ambulance?",
      options: ["112", "119", "1339", "1345"],
      explanation:
        "119 is the fire, rescue and ambulance line run by the National Fire Agency. Ambulance is 119; crime reports go to 112. For visa and daily-life questions there is a separate line, 1345, which covers 20 languages but only runs weekdays 9am–10pm — so in an emergency, don’t hesitate, just dial 119.",
      meaning: "Fire, rescue and ambulance line",
    },
    vi: {
      prompt: "Có người bất ngờ ngã xuống trên đường. Bạn gọi số nào để xin xe cấp cứu?",
      options: ["112", "119", "1339", "1345"],
      explanation:
        "119 là số báo cháy, cứu hộ và cấp cứu do Cục Phòng cháy Quốc gia vận hành. Cần xe cấp cứu thì gọi 119; báo tội phạm thì gọi 112. Thắc mắc về visa và đời sống có đường dây riêng là 1345, hỗ trợ 20 ngôn ngữ nhưng chỉ hoạt động ngày thường 9h–22h — nên trong trường hợp cấp cứu, hãy bấm 119 ngay.",
      meaning: "Số báo cháy, cứu hộ và cấp cứu",
    },
    ja: {
      prompt: "路上で人が急に倒れました。救急車を呼ぶには何番に電話するでしょう?",
      options: ["112", "119", "1339", "1345"],
      explanation:
        "119は消防庁が運営する火災・救助・救急の通報番号です。救急車が必要なときは119、犯罪の通報は112と分かれています。在留や生活の相談には外国人総合案内センター1345が別にあり、20言語に対応しますが平日09時~22時のみの運営なので、緊急時はためらわず119を押してください。",
      meaning: "火災・救助・救急の通報番号",
    },
    zh: {
      prompt: "有人在路上突然倒下。要叫救护车该打哪个号码?",
      options: ["112", "119", "1339", "1345"],
      explanation:
        "119是消防厅运营的火灾·救援·急救报警号码。需要救护车打119,报案则打112。居留和生活方面的咨询另有外国人综合咨询中心1345,支持20种语言,但只在工作日09时~22时运营,所以紧急情况下请直接拨119。",
      meaning: "火灾·救援·急救报警号码",
    },
  },
  {
    id: "cheobangjeon",
    category: "medical",
    difficulty: "easy",
    term: "처방전",
    reading: {
      en: "cheobangjeon (prescription)",
      vi: "cheobangjeon (đơn thuốc)",
      ja: "チョバンジョン(処方箋)",
      zh: "cheobangjeon(处方)",
    },
    answer: 2,
    sources: [
      "약사법 제23조(의약품 조제)·의료법 제18조(처방전 작성과 교부)",
      "https://www.law.go.kr/법령/약사법",
    ],
    ko: {
      prompt: "병원에서 “처방전”을 받았습니다. 이것을 들고 어디로 가야 할까요?",
      options: [
        "병원 원무과에 다시 제출한다",
        "보건소에 제출해 약을 받는다",
        "약국에 제출해 약을 받는다",
        "건강보험공단에 제출한다",
      ],
      explanation:
        "한국은 진단·처방은 의사가, 조제는 약사가 맡습니다. 그래서 처방전은 병원 밖 약국에 내야 약이 나옵니다. 보통 병원 바로 옆에 약국이 있습니다. 처방전 없이 살 수 있는 약(진통제·감기약 일부)은 일반의약품이라 부르고, 이것만 약국에서 바로 살 수 있습니다.",
      meaning: "약국에 내고 약을 받는 종이",
    },
    en: {
      prompt: "You received a ‘cheobangjeon’ (prescription) at the clinic. Where do you take it?",
      options: [
        "Back to the clinic’s billing desk",
        "To a public health center to collect the medicine",
        "To a pharmacy to collect the medicine",
        "To the National Health Insurance Service",
      ],
      explanation:
        "In Korea doctors diagnose and prescribe, while pharmacists dispense. So the prescription has to be handed in at a pharmacy outside the clinic — usually there is one right next door. Medicines you can buy without a prescription (some painkillers and cold remedies) are called over-the-counter drugs, and only those can be bought at the pharmacy directly.",
      meaning: "The paper you hand to a pharmacy for medicine",
    },
    vi: {
      prompt: "Bạn nhận được “처방전” (đơn thuốc) tại phòng khám. Bạn mang nó đi đâu?",
      options: [
        "Nộp lại cho quầy thu ngân của phòng khám",
        "Nộp cho trung tâm y tế công để nhận thuốc",
        "Nộp cho hiệu thuốc để nhận thuốc",
        "Nộp cho Cơ quan Bảo hiểm Y tế Quốc gia",
      ],
      explanation:
        "Ở Hàn Quốc, bác sĩ chẩn đoán và kê đơn, dược sĩ pha chế thuốc. Vì vậy đơn thuốc phải được nộp ở hiệu thuốc bên ngoài phòng khám — thường ngay cạnh đó. Thuốc mua được mà không cần đơn (một số thuốc giảm đau, thuốc cảm) gọi là thuốc không kê đơn, và chỉ những loại đó mới mua trực tiếp được ở hiệu thuốc.",
      meaning: "Tờ giấy nộp cho hiệu thuốc để nhận thuốc",
    },
    ja: {
      prompt: "病院で「처방전」(処方箋)を受け取りました。これを持ってどこへ行くでしょう?",
      options: [
        "病院の会計窓口にもう一度提出する",
        "保健所に提出して薬をもらう",
        "薬局に提出して薬をもらう",
        "健康保険公団に提出する",
      ],
      explanation:
        "韓国では診断と処方は医師、調剤は薬剤師が担います。そのため処方箋は病院の外の薬局に出さないと薬が出ません。たいてい病院のすぐ隣に薬局があります。処方箋なしで買える薬(一部の痛み止めや風邪薬)は一般医薬品と呼び、これだけが薬局でそのまま買えます。",
      meaning: "薬局に出して薬をもらう紙",
    },
    zh: {
      prompt: "你在医院拿到了「처방전」(处方)。应该拿着它去哪里?",
      options: [
        "再交回医院的收费窗口",
        "交给保健所领药",
        "交给药店领药",
        "交给国民健康保险公团",
      ],
      explanation:
        "在韩国,诊断和开方由医生负责,配药由药师负责。因此处方必须交到医院外的药店才能拿到药,通常医院旁边就有药店。不需要处方就能买的药(部分止痛药、感冒药)叫一般医药品,只有这类可以在药店直接购买。",
      meaning: "交给药店领药的单子",
    },
  },
  {
    id: "bogeonso",
    category: "medical",
    difficulty: "easy",
    term: "보건소",
    reading: {
      en: "bogeonso (public health center)",
      vi: "bogeonso (trung tâm y tế công)",
      ja: "ポゴンソ(保健所)",
      zh: "bogeonso(保健所)",
    },
    answer: 0,
    sources: [
      "지역보건법 제10조(보건소의 설치)",
      "https://www.law.go.kr/법령/지역보건법",
    ],
    ko: {
      prompt: "“보건소”에 대한 설명으로 맞는 것은?",
      options: [
        "시·군·구가 운영하는 공공 보건기관으로, 예방접종·건강 상담 등을 맡는다",
        "건강보험료를 걷는 기관이다",
        "응급 수술을 전문으로 하는 큰 병원이다",
        "약을 조제해 주는 공공 약국이다",
      ],
      explanation:
        "보건소는 지역보건법에 따라 시·군·구마다 설치되는 공공 보건기관입니다. 예방접종, 결핵·감염병 관리, 건강 상담 등을 맡고 비용이 저렴하거나 무료인 항목이 많습니다. 건강보험료를 걷는 곳은 국민건강보험공단이고, 수술이 필요한 치료는 병원·종합병원으로 가야 합니다.",
      meaning: "시·군·구가 운영하는 공공 보건기관",
    },
    en: {
      prompt: "Which statement about a ‘bogeonso’ (public health center) is correct?",
      options: [
        "A public health facility run by the city, county or district, handling vaccinations and health counselling",
        "The agency that collects health insurance premiums",
        "A large hospital specialising in emergency surgery",
        "A public pharmacy that dispenses medicine",
      ],
      explanation:
        "Under the Regional Public Health Act, every city, county and district operates a bogeonso. It handles vaccinations, tuberculosis and infectious-disease control, and health counselling, and many of its services are cheap or free. Premiums are collected by the National Health Insurance Service, and anything needing surgery belongs at a hospital.",
      meaning: "Public health center run by your district",
    },
    vi: {
      prompt: "Phát biểu nào về “보건소” (trung tâm y tế công) là đúng?",
      options: [
        "Cơ sở y tế công do thành phố, huyện hoặc quận vận hành, phụ trách tiêm chủng và tư vấn sức khỏe",
        "Cơ quan thu phí bảo hiểm y tế",
        "Bệnh viện lớn chuyên mổ cấp cứu",
        "Hiệu thuốc công pha chế thuốc",
      ],
      explanation:
        "Theo Luật Y tế Khu vực, mỗi thành phố, huyện và quận đều có một bogeonso. Nơi này phụ trách tiêm chủng, quản lý bệnh lao và bệnh truyền nhiễm, tư vấn sức khỏe, và nhiều dịch vụ có giá rẻ hoặc miễn phí. Phí bảo hiểm do Cơ quan Bảo hiểm Y tế Quốc gia thu, còn việc cần phẫu thuật thì phải đến bệnh viện.",
      meaning: "Trung tâm y tế công của quận bạn",
    },
    ja: {
      prompt: "「보건소」(保健所)の説明として正しいものは?",
      options: [
        "市・郡・区が運営する公共の保健機関で、予防接種や健康相談を担う",
        "健康保険料を徴収する機関である",
        "緊急手術を専門にする大きな病院である",
        "薬を調剤してくれる公営の薬局である",
      ],
      explanation:
        "保健所は地域保健法に基づき市・郡・区ごとに設置される公共の保健機関です。予防接種、結核や感染症の管理、健康相談などを担い、費用が安いか無料の項目も多くあります。健康保険料を徴収するのは国民健康保険公団で、手術が必要な治療は病院・総合病院に行く必要があります。",
      meaning: "市・郡・区が運営する公共の保健機関",
    },
    zh: {
      prompt: "关于「보건소」(保健所)的说明,哪一项正确?",
      options: [
        "由市·郡·区运营的公共保健机构,负责预防接种、健康咨询等",
        "是征收健康保险费的机构",
        "是专门做急救手术的大医院",
        "是帮人配药的公立药店",
      ],
      explanation:
        "根据《地区保健法》,保健所由各市·郡·区设立,属于公共保健机构。它负责预防接种、结核与传染病管理、健康咨询等,很多项目费用低廉甚至免费。征收健康保险费的是国民健康保险公团,需要手术的治疗则要去医院·综合医院。",
      meaning: "市·郡·区运营的公共保健机构",
    },
  },
  {
    id: "uiwon",
    category: "medical",
    difficulty: "easy",
    term: "의원",
    reading: {
      en: "uiwon (clinic)",
      vi: "uiwon (phòng khám)",
      ja: "ウィウォン(医院)",
      zh: "uiwon(医院/诊所)",
    },
    answer: 3,
    sources: [
      "의료법 제3조(의료기관)·제3조의3(종합병원)",
      "https://www.law.go.kr/법령/의료법",
    ],
    ko: {
      prompt: "감기 기운이 있어 동네 “○○내과의원”에 갔습니다. 「의원」은 어떤 곳일까요?",
      options: [
        "종합병원보다 규모가 큰 상급 의료기관",
        "입원 병상이 100개 이상인 큰 병원",
        "약만 파는 곳이라 진료는 받을 수 없다",
        "규모가 작은 동네 의료기관으로, 주로 외래 진료를 한다",
      ],
      explanation:
        "한국의 의료기관은 의료법에 따라 의원 → 병원 → 종합병원 → 상급종합병원 순으로 커집니다. 의원은 입원 병상이 거의 없거나 적은 동네 의료기관으로, 감기·장염처럼 흔한 증상은 여기서 보는 것이 빠르고 본인부담도 가장 낮습니다. 큰 병원부터 가는 습관은 시간과 돈을 모두 더 쓰게 됩니다.",
      meaning: "규모가 작은 동네 의료기관",
    },
    en: {
      prompt: "You feel a cold coming on and visit a neighbourhood ‘uiwon’. What is a uiwon?",
      options: [
        "A tertiary institution larger than a general hospital",
        "A large hospital with 100 or more inpatient beds",
        "A place that only sells medicine, with no consultations",
        "A small neighbourhood clinic that mainly provides outpatient care",
      ],
      explanation:
        "Under the Medical Service Act, Korean facilities scale up from uiwon (clinic) to byeongwon (hospital), general hospital, and tertiary general hospital. A uiwon has few or no inpatient beds and handles everyday complaints like colds and stomach bugs — it is faster and carries the lowest patient share. Starting at a big hospital costs you both time and money.",
      meaning: "Small neighbourhood clinic",
    },
    vi: {
      prompt: "Bạn thấy hơi cảm và đến “의원” gần nhà. “의원” là nơi thế nào?",
      options: [
        "Cơ sở y tế cấp cao hơn cả bệnh viện đa khoa",
        "Bệnh viện lớn có từ 100 giường nội trú trở lên",
        "Chỗ chỉ bán thuốc, không khám bệnh được",
        "Cơ sở y tế nhỏ trong khu phố, chủ yếu khám ngoại trú",
      ],
      explanation:
        "Theo Luật Y tế, cơ sở y tế Hàn Quốc lớn dần theo thứ tự uiwon (phòng khám) → byeongwon (bệnh viện) → bệnh viện đa khoa → bệnh viện đa khoa cấp cao. Uiwon có rất ít hoặc không có giường nội trú, xử lý các triệu chứng thường gặp như cảm lạnh, viêm ruột — nhanh hơn và mức tự chi trả cũng thấp nhất. Cứ đến bệnh viện lớn trước sẽ tốn cả thời gian lẫn tiền.",
      meaning: "Cơ sở y tế nhỏ trong khu phố",
    },
    ja: {
      prompt: "風邪気味で近所の「의원」(医院)に行きました。「의원」はどんな所でしょう?",
      options: [
        "総合病院より規模の大きい上級医療機関",
        "入院ベッドが100床以上ある大きな病院",
        "薬だけを売る所なので診療は受けられない",
        "規模の小さい地域の医療機関で、主に外来診療を行う",
      ],
      explanation:
        "韓国の医療機関は医療法に基づき、의원(医院)→ 병원(病院)→ 総合病院 → 上級総合病院の順に規模が大きくなります。의원は入院ベッドがほとんどないか少ない地域の医療機関で、風邪や胃腸炎のようなよくある症状はここで診てもらうのが早く、自己負担も最も低くなります。最初から大病院に行く習慣は時間もお金も余計にかかります。",
      meaning: "規模の小さい地域の医療機関",
    },
    zh: {
      prompt: "你有点感冒,去了小区的「의원」。「의원」是什么样的地方?",
      options: [
        "比综合医院规模更大的上级医疗机构",
        "住院床位在100张以上的大医院",
        "只卖药的地方,不能看病",
        "规模较小的社区医疗机构,主要做门诊",
      ],
      explanation:
        "根据《医疗法》,韩国医疗机构按의원(诊所)→ 병원(医院)→ 综合医院 → 上级综合医院的顺序规模递增。의원几乎没有或只有少量住院床位,感冒、肠胃炎这类常见症状在这里看最快,自付比例也最低。一上来就去大医院,时间和钱都会多花。",
      meaning: "规模较小的社区医疗机构",
    },
  },
  {
    id: "geongang-boheom",
    category: "medical",
    difficulty: "normal",
    term: "건강보험",
    reading: {
      en: "geongang-boheom (national health insurance)",
      vi: "geongang-boheom (bảo hiểm y tế)",
      ja: "コンガンボホム(健康保険)",
      zh: "geongang-boheom(健康保险)",
    },
    answer: 1,
    sources: [
      "국민건강보험법 제109조(외국인 등에 대한 특례)",
      "https://www.nhis.or.kr/lm/lmxsrv/law/lawLinkContentView.do?SEQ=27&LINKCODE=c010900000",
      "재외국민 및 외국인 지역보험료 부과기준 — 유학(D-2)·일반연수(D-4) 50% 경감",
      "https://www.nhis.or.kr/static/html/wbma/b/wbmab0103.html",
    ],
    ko: {
      prompt: "직장에 다니지 않는 외국인이 한국에 6개월 넘게 살고 있습니다. 건강보험은 어떻게 될까요?",
      options: [
        "원하면 가입할 수 있는 선택 사항이다",
        "지역가입자로 당연가입 대상이라 보험료를 내야 한다",
        "외국인은 가입할 수 없고 전액 자기 돈으로 치료받아야 한다",
        "영주권(F-5)을 받은 뒤에만 가입할 수 있다",
      ],
      explanation:
        "국민건강보험법 제109조에 따라 6개월 이상 국내에 체류하는 외국인은 지역가입자로 당연가입됩니다. 가입할지 말지 고르는 제도가 아니라, 조건이 되면 자동으로 대상이 되고 보험료가 부과됩니다. 유학(D-2)·일반연수(D-4) 자격은 보험료의 50%가 경감되고, 종교(D-6)는 30% 경감됩니다. 직장에 다니면 직장가입자로 회사와 반반 부담합니다.",
      meaning: "6개월 이상 체류 시 당연가입하는 공적 보험",
    },
    en: {
      prompt: "A foreigner who is not employed has lived in Korea for more than six months. What happens with health insurance?",
      options: [
        "It is optional — you can join if you want to",
        "You are automatically a local-subscriber and must pay premiums",
        "Foreigners cannot join and must pay for all treatment themselves",
        "You can only join after getting permanent residency (F-5)",
      ],
      explanation:
        "Under Article 109 of the National Health Insurance Act, foreigners staying in Korea for six months or more are automatically enrolled as local subscribers. This is not a choice: once you meet the condition, enrolment and premiums follow. Study (D-2) and general training (D-4) statuses get a 50% premium reduction, and religious (D-6) gets 30%. If you are employed, you join as a workplace subscriber and split the premium with your employer.",
      meaning: "Public insurance you join automatically after six months",
    },
    vi: {
      prompt: "Một người nước ngoài không đi làm đã sống ở Hàn Quốc hơn sáu tháng. Bảo hiểm y tế sẽ thế nào?",
      options: [
        "Là tùy chọn — muốn thì tham gia",
        "Đương nhiên là người tham gia khu vực và phải nộp phí bảo hiểm",
        "Người nước ngoài không được tham gia, phải tự trả toàn bộ chi phí",
        "Chỉ được tham gia sau khi có thường trú (F-5)",
      ],
      explanation:
        "Theo Điều 109 Luật Bảo hiểm Y tế Quốc gia, người nước ngoài lưu trú từ sáu tháng trở lên đương nhiên được ghi danh làm người tham gia khu vực. Đây không phải là lựa chọn: đủ điều kiện là tự động thuộc đối tượng và bị thu phí. Tư cách du học (D-2) và tu nghiệp (D-4) được giảm 50% phí, tôn giáo (D-6) giảm 30%. Nếu đi làm, bạn tham gia theo diện nơi làm việc và chia đôi phí với công ty.",
      meaning: "Bảo hiểm công đương nhiên tham gia khi ở quá sáu tháng",
    },
    ja: {
      prompt: "勤め先がない外国人が韓国に6か月を超えて住んでいます。健康保険はどうなるでしょう?",
      options: [
        "希望すれば加入できる任意の制度である",
        "地域加入者として当然加入の対象になり、保険料を払わなければならない",
        "外国人は加入できず、全額自己負担で治療を受けるしかない",
        "永住権(F-5)を得たあとにのみ加入できる",
      ],
      explanation:
        "国民健康保険法第109条により、6か月以上国内に滞在する外国人は地域加入者として当然加入になります。加入するかどうかを選ぶ制度ではなく、条件を満たせば自動的に対象となり保険料が賦課されます。留学(D-2)・一般研修(D-4)の資格は保険料が50%軽減され、宗教(D-6)は30%軽減です。勤め先があれば職場加入者となり、会社と半分ずつ負担します。",
      meaning: "6か月以上の滞在で当然加入する公的保険",
    },
    zh: {
      prompt: "一位没有工作的外国人在韩国住了六个月以上。健康保险会怎样?",
      options: [
        "是可选项目,想参加就参加",
        "当然成为地区参保人,必须缴纳保险费",
        "外国人不能参保,治疗费要全额自付",
        "只有拿到永居权(F-5)之后才能参保",
      ],
      explanation:
        "根据《国民健康保险法》第109条,在韩国停留六个月以上的外国人当然被纳入地区参保人。这不是可选制度:满足条件就自动成为对象并被征收保险费。留学(D-2)和一般研修(D-4)资格可减免50%保险费,宗教(D-6)减免30%。如果有工作,则作为职场参保人与公司各承担一半。",
      meaning: "停留六个月以上即当然参保的公共保险",
    },
  },
  {
    id: "bonin-budam",
    category: "medical",
    difficulty: "normal",
    term: "본인부담금",
    reading: {
      en: "bonin-budamgeum (patient share)",
      vi: "bonin-budamgeum (phần tự chi trả)",
      ja: "ボニンブダムグム(自己負担金)",
      zh: "bonin-budamgeum(自付额)",
    },
    answer: 0,
    sources: [
      "국민건강보험법 시행령 별표2(본인일부부담금의 부담률과 부담액)",
      "https://www.law.go.kr/법령/국민건강보험법시행령",
    ],
    ko: {
      prompt: "같은 외래 진료를 받을 때, 건강보험 가입자의 “본인부담금” 비율이 가장 낮은 곳은?",
      options: ["의원", "병원", "종합병원", "상급종합병원"],
      explanation:
        "외래 진료의 본인부담률은 의원 30%, 병원 40%, 종합병원 50%이고, 상급종합병원은 진찰료를 전액 내고 나머지 진료비의 60%를 부담합니다(국민건강보험법 시행령 별표2). 큰 병원이 더 좋아 보여도 같은 감기로 가면 돈을 더 내는 구조입니다. 가벼운 증상은 의원에서 보고, 필요할 때 큰 병원으로 올려 보내는 것이 제도의 설계입니다.",
      meaning: "진료비 중 환자가 직접 내는 몫",
    },
    en: {
      prompt: "For the same outpatient visit, where is an insured patient’s ‘bonin-budamgeum’ (patient share) lowest?",
      options: ["Clinic (uiwon)", "Hospital (byeongwon)", "General hospital", "Tertiary general hospital"],
      explanation:
        "Outpatient patient share is 30% at a clinic, 40% at a hospital and 50% at a general hospital; at a tertiary general hospital you pay the consultation fee in full plus 60% of the rest (National Health Insurance Act Enforcement Decree, Table 2). A bigger hospital may look better, but for the same cold it simply costs more. The system is designed so mild symptoms start at a clinic and get referred up only when needed.",
      meaning: "The share of the bill the patient pays",
    },
    vi: {
      prompt: "Với cùng một lần khám ngoại trú, “본인부담금” (phần tự chi trả) của người có bảo hiểm thấp nhất ở đâu?",
      options: ["Phòng khám (uiwon)", "Bệnh viện (byeongwon)", "Bệnh viện đa khoa", "Bệnh viện đa khoa cấp cao"],
      explanation:
        "Tỷ lệ tự chi trả khi khám ngoại trú là 30% ở phòng khám, 40% ở bệnh viện, 50% ở bệnh viện đa khoa; ở bệnh viện đa khoa cấp cao thì trả toàn bộ phí khám cộng 60% phần còn lại (Nghị định thi hành Luật Bảo hiểm Y tế Quốc gia, Bảng 2). Bệnh viện lớn trông có vẻ tốt hơn, nhưng cùng một cơn cảm thì chỉ tốn thêm tiền. Chế độ được thiết kế để triệu chứng nhẹ khám ở phòng khám trước, cần thiết mới chuyển lên.",
      meaning: "Phần chi phí khám bệnh người bệnh tự trả",
    },
    ja: {
      prompt: "同じ外来診療を受けるとき、健康保険加入者の「본인부담금」(自己負担金)の割合が最も低いのはどこでしょう?",
      options: ["의원(医院)", "병원(病院)", "総合病院", "上級総合病院"],
      explanation:
        "外来診療の自己負担率は의원30%、병원40%、総合病院50%で、上級総合病院は診察料を全額払った上で残りの診療費の60%を負担します(国民健康保険法施行令別表2)。大きい病院のほうが良さそうに見えても、同じ風邪で行けばお金を多く払う仕組みです。軽い症状は의원で診てもらい、必要なときに大病院へ上げるのが制度の設計です。",
      meaning: "診療費のうち患者が自分で払う分",
    },
    zh: {
      prompt: "同样是门诊,参保人的「본인부담금」(自付额)比例在哪里最低?",
      options: ["의원(诊所)", "병원(医院)", "综合医院", "上级综合医院"],
      explanation:
        "门诊自付比例为诊所30%、医院40%、综合医院50%;上级综合医院则需全额支付诊察费,再负担其余诊疗费的60%(《国民健康保险法施行令》附表2)。大医院看着更好,但同样一个感冒去那里只是多花钱。制度的设计是:轻症先在诊所看,必要时再往上转诊。",
      meaning: "诊疗费中患者自己负担的部分",
    },
  },
  {
    id: "cheobangjeon-gihan",
    category: "medical",
    difficulty: "normal",
    term: "처방전 사용기간",
    reading: {
      en: "cheobangjeon sayong-gigan (prescription validity)",
      vi: "cheobangjeon sayong-gigan (hiệu lực đơn thuốc)",
      ja: "チョバンジョン サヨンギガン(処方箋の使用期間)",
      zh: "cheobangjeon sayong-gigan(处方使用期限)",
    },
    answer: 1,
    sources: [
      "의료법 시행규칙 제12조(처방전의 기재사항 등) — 사용기간은 교부일부터 3일",
      "https://www.law.go.kr/법령/의료법시행규칙",
    ],
    ko: {
      prompt: "처방전에 따로 적혀 있지 않다면, 처방전은 받은 날부터 며칠 안에 약국에 내야 할까요?",
      options: ["당일만", "3일", "7일", "30일"],
      explanation:
        "처방전 사용기간은 의료법 시행규칙에 따라 교부일을 포함해 3일입니다(의사가 더 길게 적어 둔 경우는 그 기간). 주말을 끼면 생각보다 빨리 지나가고, 지나면 약국에서 조제받을 수 없어 병원에 다시 가 재발급을 받아야 합니다. 진료비를 한 번 더 내는 일이 생기니, 병원에 다녀온 날 약국에 바로 가는 것이 가장 안전합니다.",
      meaning: "처방전을 약국에 낼 수 있는 기간(3일)",
    },
    en: {
      prompt: "Unless the prescription says otherwise, within how many days of issue must you hand it to a pharmacy?",
      options: ["Same day only", "3 days", "7 days", "30 days"],
      explanation:
        "Under the Enforcement Rule of the Medical Service Act, a prescription is valid for 3 days including the day it was issued — unless the doctor wrote a longer period. A weekend eats that up faster than you expect, and once it lapses the pharmacy cannot dispense: you have to return to the clinic for a reissue and pay the consultation fee again. Safest habit is to stop at the pharmacy the same day.",
      meaning: "The window for using a prescription (3 days)",
    },
    vi: {
      prompt: "Nếu trên đơn không ghi khác, bạn phải nộp đơn thuốc cho hiệu thuốc trong vòng bao nhiêu ngày kể từ ngày nhận?",
      options: ["Chỉ trong ngày", "3 ngày", "7 ngày", "30 ngày"],
      explanation:
        "Theo Quy tắc thi hành Luật Y tế, đơn thuốc có hiệu lực 3 ngày tính cả ngày cấp — trừ khi bác sĩ ghi thời hạn dài hơn. Gặp cuối tuần là hết hạn nhanh hơn bạn tưởng, và khi quá hạn thì hiệu thuốc không được pha chế: bạn phải quay lại phòng khám xin cấp lại và trả phí khám thêm một lần. An toàn nhất là ghé hiệu thuốc ngay trong ngày đi khám.",
      meaning: "Thời hạn dùng đơn thuốc (3 ngày)",
    },
    ja: {
      prompt: "処方箋に別の記載がない場合、受け取った日から何日以内に薬局へ出さなければならないでしょう?",
      options: ["当日のみ", "3日", "7日", "30日"],
      explanation:
        "処方箋の使用期間は医療法施行規則により、交付日を含めて3日です(医師がより長く記載した場合はその期間)。週末が入ると思ったより早く過ぎてしまい、過ぎると薬局で調剤を受けられず、病院に行き直して再発行してもらう必要があります。診察料をもう一度払うことになるので、病院に行った日にそのまま薬局へ寄るのが一番安全です。",
      meaning: "処方箋を薬局に出せる期間(3日)",
    },
    zh: {
      prompt: "如果处方上没有另行标注,从拿到那天起必须在几天内交给药店?",
      options: ["仅当天", "3天", "7天", "30天"],
      explanation:
        "根据《医疗法施行规则》,处方的使用期限为含交付日起3天(医生另写更长期限的,按所写期限)。碰上周末会比想象中更快过期,过期后药店无法配药,只能再去医院重新开方,还要再付一次诊察费。最稳妥的习惯是看完病当天就顺路去药店。",
      meaning: "处方可交药店使用的期限(3天)",
    },
  },
  {
    id: "geongang-geomjin",
    category: "medical",
    difficulty: "normal",
    term: "건강검진",
    reading: {
      en: "geongang-geomjin (health checkup)",
      vi: "geongang-geomjin (khám sức khỏe)",
      ja: "コンガンコムジン(健康診断)",
      zh: "geongang-geomjin(健康检查)",
    },
    answer: 2,
    sources: [
      "산업안전보건법 시행규칙 제197조(일반건강진단의 주기) — 사무직 2년 1회, 그 밖의 근로자 1년 1회",
      "https://www.law.go.kr/법령/산업안전보건법시행규칙",
    ],
    ko: {
      prompt: "회사에서 받는 일반건강진단의 주기에 대한 설명으로 맞는 것은?",
      options: [
        "모든 근로자가 2년에 한 번 받는다",
        "모든 근로자가 매년 받는다",
        "사무직은 2년에 한 번, 그 밖의 근로자는 매년 받는다",
        "본인이 원할 때만 받으면 된다",
      ],
      explanation:
        "산업안전보건법 시행규칙에 따라 사무직 근로자는 2년에 1회 이상, 그 밖의 근로자는 1년에 1회 이상 일반건강진단을 받습니다. 공장·현장·조리 업무처럼 몸을 쓰는 일은 매년 대상입니다. 받을지 말지는 선택이 아니라 사업주의 의무이고, 검진 비용은 건강보험에서 지원되므로 개인이 따로 부담하지 않는 항목이 많습니다.",
      meaning: "회사에서 주기적으로 받는 건강 검사",
    },
    en: {
      prompt: "Which statement about the cycle of the general health checkup at work is correct?",
      options: [
        "Every worker gets one every two years",
        "Every worker gets one every year",
        "Office workers every two years, other workers every year",
        "Only when you request it yourself",
      ],
      explanation:
        "Under the Enforcement Rule of the Occupational Safety and Health Act, office workers get a general checkup at least once every two years, and all other workers at least once a year. Physical work — factories, sites, kitchens — is on the yearly cycle. This is the employer’s legal duty rather than your choice, and health insurance covers most of the cost, so many items are free to you.",
      meaning: "Periodic workplace health checkup",
    },
    vi: {
      prompt: "Phát biểu nào về chu kỳ khám sức khỏe định kỳ tại công ty là đúng?",
      options: [
        "Mọi người lao động khám hai năm một lần",
        "Mọi người lao động khám mỗi năm một lần",
        "Nhân viên văn phòng hai năm một lần, lao động khác mỗi năm",
        "Chỉ khám khi bản thân muốn",
      ],
      explanation:
        "Theo Quy tắc thi hành Luật An toàn và Sức khỏe Nghề nghiệp, nhân viên văn phòng khám tổng quát ít nhất hai năm một lần, các lao động khác ít nhất mỗi năm một lần. Công việc dùng sức — nhà máy, công trường, nhà bếp — thuộc chu kỳ hằng năm. Đây là nghĩa vụ của người sử dụng lao động chứ không phải lựa chọn của bạn, và bảo hiểm y tế chi trả phần lớn chi phí nên nhiều mục bạn không phải trả thêm.",
      meaning: "Khám sức khỏe định kỳ tại công ty",
    },
    ja: {
      prompt: "会社で受ける一般健康診断の周期について正しい説明は?",
      options: [
        "すべての労働者が2年に1回受ける",
        "すべての労働者が毎年受ける",
        "事務職は2年に1回、その他の労働者は毎年受ける",
        "本人が希望したときだけ受ければよい",
      ],
      explanation:
        "産業安全保健法施行規則により、事務職の労働者は2年に1回以上、その他の労働者は1年に1回以上一般健康診断を受けます。工場・現場・調理のように体を使う仕事は毎年が対象です。受けるかどうかは選択ではなく事業主の義務であり、費用は健康保険から支援されるため個人の負担がない項目も多くあります。",
      meaning: "会社で定期的に受ける健康診断",
    },
    zh: {
      prompt: "关于公司一般健康检查的周期,哪项说明正确?",
      options: [
        "所有劳动者每两年一次",
        "所有劳动者每年一次",
        "办公室职员每两年一次,其他劳动者每年一次",
        "只在自己想做的时候做",
      ],
      explanation:
        "根据《产业安全保健法施行规则》,办公室职员每两年至少做一次一般健康检查,其他劳动者每年至少一次。工厂、工地、厨房等需要体力的工作属于每年一次。做不做不是个人选择,而是雇主的法定义务,费用由健康保险支持,很多项目个人无需另付。",
      meaning: "公司定期提供的健康检查",
    },
  },
  {
    id: "uiyak-bunup",
    category: "medical",
    difficulty: "normal",
    term: "의약분업",
    reading: {
      en: "uiyak-bunup (separation of prescribing and dispensing)",
      vi: "uiyak-bunup (tách kê đơn và pha chế)",
      ja: "ウィヤクプノプ(医薬分業)",
      zh: "uiyak-bunup(医药分业)",
    },
    answer: 3,
    sources: [
      "약사법 제23조(의약품 조제)·의료법 제18조",
      "https://www.law.go.kr/법령/약사법",
    ],
    ko: {
      prompt: "한국의 “의약분업”이 뜻하는 것은?",
      options: [
        "병원과 약국이 같은 건물에 있어야 한다는 원칙",
        "약값을 환자와 보험이 반씩 나눠 낸다는 원칙",
        "처방전 없이도 모든 약을 살 수 있다는 원칙",
        "진단·처방은 의사가, 조제는 약사가 맡도록 역할을 나눈 제도",
      ],
      explanation:
        "의약분업은 의사가 진단하고 처방하면 약사가 그 처방대로 약을 조제하도록 역할을 나눈 제도입니다. 그래서 병원에서는 약을 주지 않고 처방전만 주고, 약은 약국에서 받습니다. 처방이 필요한 약을 처방전 없이 받을 수 없는 것도 이 때문입니다. 병원 옆에 약국이 모여 있는 풍경은 이 제도가 만든 결과입니다.",
      meaning: "처방은 의사, 조제는 약사로 역할을 나눈 제도",
    },
    en: {
      prompt: "What does Korea’s ‘uiyak-bunup’ mean?",
      options: [
        "A rule that clinics and pharmacies must share one building",
        "A rule that patient and insurer split the drug cost in half",
        "A rule that any medicine can be bought without a prescription",
        "A system splitting roles: doctors diagnose and prescribe, pharmacists dispense",
      ],
      explanation:
        "Uiyak-bunup separates the roles: the doctor diagnoses and prescribes, and the pharmacist dispenses according to that prescription. That is why a clinic hands you only a prescription and the medicine comes from a pharmacy, and why prescription-only drugs cannot be obtained without one. The cluster of pharmacies you see next to every hospital is a product of this system.",
      meaning: "Doctors prescribe, pharmacists dispense",
    },
    vi: {
      prompt: "“의약분업” của Hàn Quốc nghĩa là gì?",
      options: [
        "Nguyên tắc phòng khám và hiệu thuốc phải nằm cùng một tòa nhà",
        "Nguyên tắc người bệnh và bảo hiểm chia đôi tiền thuốc",
        "Nguyên tắc mọi loại thuốc đều mua được mà không cần đơn",
        "Chế độ phân vai: bác sĩ chẩn đoán và kê đơn, dược sĩ pha chế",
      ],
      explanation:
        "Uiyak-bunup phân chia vai trò: bác sĩ chẩn đoán và kê đơn, dược sĩ pha chế theo đơn đó. Vì vậy phòng khám chỉ đưa đơn thuốc chứ không đưa thuốc, còn thuốc thì lấy ở hiệu thuốc; cũng vì vậy thuốc cần kê đơn không thể lấy mà không có đơn. Cảnh các hiệu thuốc tập trung ngay cạnh bệnh viện chính là kết quả của chế độ này.",
      meaning: "Bác sĩ kê đơn, dược sĩ pha chế",
    },
    ja: {
      prompt: "韓国の「의약분업」(医薬分業)が意味するものは?",
      options: [
        "病院と薬局が同じ建物に入らなければならないという原則",
        "薬代を患者と保険が半分ずつ負担するという原則",
        "処方箋なしでもすべての薬を買えるという原則",
        "診断・処方は医師、調剤は薬剤師が担うよう役割を分けた制度",
      ],
      explanation:
        "医薬分業は、医師が診断して処方し、薬剤師がその処方どおりに薬を調剤するよう役割を分けた制度です。そのため病院では薬を渡さず処方箋だけを渡し、薬は薬局で受け取ります。処方が必要な薬を処方箋なしに受け取れないのもこのためです。病院の隣に薬局が集まっている風景はこの制度が生んだ結果です。",
      meaning: "処方は医師、調剤は薬剤師と役割を分けた制度",
    },
    zh: {
      prompt: "韩国的「의약분업」(医药分业)是什么意思?",
      options: [
        "医院和药店必须在同一栋楼里的原则",
        "药费由患者和保险各付一半的原则",
        "所有药都可以不用处方就买到的原则",
        "分工制度:诊断开方由医生负责,配药由药师负责",
      ],
      explanation:
        "医药分业把角色分开:医生诊断并开处方,药师按处方配药。因此医院只给处方不给药,药要到药店领;需要处方的药没有处方也拿不到,原因同样在此。每家医院旁边都聚着一堆药店,正是这个制度带来的景象。",
      meaning: "医生开方、药师配药的分工制度",
    },
  },
  {
    id: "silbi-boheom",
    category: "medical",
    difficulty: "hard",
    term: "실비보험",
    reading: {
      en: "silbi-boheom (indemnity medical insurance)",
      vi: "silbi-boheom (bảo hiểm bù chi phí y tế)",
      ja: "シルビボホム(実費保険)",
      zh: "silbi-boheom(实费保险)",
    },
    answer: 2,
    sources: [
      "국민건강보험법 제13조(보험자)·제41조(요양급여)",
      "https://www.law.go.kr/법령/국민건강보험법",
      "보험업법 제2조(정의) — 민영 실손의료보험은 보험회사 상품",
      "https://www.law.go.kr/법령/보험업법",
    ],
    ko: {
      prompt: "동료가 “실비보험도 들어 둬”라고 합니다. 「실비보험」(실손의료보험)은 무엇일까요?",
      options: [
        "건강보험료를 깎아 주는 정부 제도",
        "건강보험에 가입하면 자동으로 따라오는 추가 보장",
        "보험회사가 파는 민간 보험으로, 건강보험이 안 내주는 본인부담금 등을 돌려받는 상품",
        "병원비를 나중에 나눠 낼 수 있게 해 주는 병원 할부 제도",
      ],
      explanation:
        "국민건강보험은 국민건강보험공단이 운영하는 공적 제도이고, 실손의료보험은 보험회사가 파는 민간 상품입니다. 둘은 별개여서 건강보험에 가입했다고 실비보험이 따라오지 않습니다. 실비보험은 건강보험이 부담하지 않는 본인부담금이나 비급여 항목을 약관에 정해진 한도 안에서 돌려주는 구조라, 큰 수술이나 입원이 생겼을 때 차이가 크게 느껴집니다. 가입 전에 보장 범위와 자기부담 비율을 꼭 확인하세요.",
      meaning: "본인부담금을 돌려받는 민간 의료보험",
    },
    en: {
      prompt: "A colleague says ‘you should get silbi-boheom too’. What is silbi-boheom (indemnity medical insurance)?",
      options: [
        "A government scheme that discounts your health insurance premium",
        "Extra cover that comes automatically with national health insurance",
        "A private policy sold by insurers that reimburses the patient share national insurance doesn’t cover",
        "A hospital instalment plan letting you pay bills later",
      ],
      explanation:
        "National health insurance is a public scheme run by the National Health Insurance Service; indemnity medical insurance is a private product sold by insurance companies. They are separate — joining national insurance does not bring indemnity cover with it. Indemnity policies refund the patient share and non-covered items within the limits written in the policy, which makes a visible difference for major surgery or hospital stays. Check the scope of cover and your deductible before signing.",
      meaning: "Private insurance reimbursing your patient share",
    },
    vi: {
      prompt: "Đồng nghiệp nói “nên mua cả silbi-boheom”. “실비보험” (bảo hiểm bù chi phí y tế) là gì?",
      options: [
        "Chế độ của nhà nước giảm phí bảo hiểm y tế",
        "Phần bảo đảm thêm tự động đi kèm bảo hiểm y tế quốc gia",
        "Sản phẩm bảo hiểm tư do công ty bảo hiểm bán, hoàn lại phần tự chi trả mà bảo hiểm quốc gia không chi",
        "Chế độ trả góp của bệnh viện cho phép trả tiền sau",
      ],
      explanation:
        "Bảo hiểm y tế quốc gia là chế độ công do Cơ quan Bảo hiểm Y tế Quốc gia vận hành; bảo hiểm bù chi phí y tế là sản phẩm tư do các công ty bảo hiểm bán. Hai thứ tách biệt — tham gia bảo hiểm quốc gia không tự có bảo hiểm tư. Loại bảo hiểm này hoàn lại phần tự chi trả và các mục ngoài danh mục trong hạn mức ghi ở hợp đồng, nên khi phải mổ lớn hay nằm viện thì khác biệt rất rõ. Trước khi ký hãy xem kỹ phạm vi bảo đảm và tỷ lệ tự chịu.",
      meaning: "Bảo hiểm tư hoàn lại phần tự chi trả",
    },
    ja: {
      prompt: "同僚が「실비보험も入っておきなよ」と言います。「실비보험」(実損医療保険)とは何でしょう?",
      options: [
        "健康保険料を割り引いてくれる政府の制度",
        "健康保険に加入すると自動的についてくる追加保障",
        "保険会社が売る民間保険で、健康保険が払わない自己負担金などを返してもらう商品",
        "病院代を後から分割で払えるようにする病院の分割制度",
      ],
      explanation:
        "国民健康保険は国民健康保険公団が運営する公的制度で、実損医療保険は保険会社が売る民間商品です。両者は別物なので、健康保険に入ったからといって実費保険がついてくるわけではありません。実費保険は健康保険が負担しない自己負担金や保険適用外の項目を、約款で定められた限度内で返す仕組みなので、大きな手術や入院があったときに差が大きく感じられます。加入前に保障範囲と自己負担割合を必ず確認してください。",
      meaning: "自己負担金を返してもらう民間医療保険",
    },
    zh: {
      prompt: "同事说「실비보험也该买一份」。「실비보험」(实损医疗保险)是什么?",
      options: [
        "政府给健康保险费打折的制度",
        "参加国民健康保险后自动附带的额外保障",
        "保险公司销售的商业保险,报销国民健康保险不支付的自付额等",
        "医院提供的分期付款制度,让你以后再付医疗费",
      ],
      explanation:
        "国民健康保险是国民健康保险公团运营的公共制度,实损医疗保险是保险公司销售的商业产品。两者各自独立——参加了国民健康保险并不会自动带来实费保险。实费保险在合同约定的限额内报销健康保险不负担的自付额和非保险项目,遇到大手术或住院时差别非常明显。投保前请务必确认保障范围和自担比例。",
      meaning: "报销自付额的商业医疗保险",
    },
  },
  {
    id: "jinryo-uiroeseo",
    category: "medical",
    difficulty: "hard",
    term: "진료의뢰서",
    reading: {
      en: "jinryo-uiroeseo (referral letter)",
      vi: "jinryo-uiroeseo (giấy chuyển tuyến)",
      ja: "チンリョウィロェソ(診療依頼書)",
      zh: "jinryo-uiroeseo(诊疗转诊单)",
    },
    answer: 1,
    sources: [
      "국민건강보험 요양급여의 기준에 관한 규칙 제2조(요양급여의 절차)",
      "https://www.nhis.or.kr/static/html/wbma/c/wbmac0102.html",
    ],
    ko: {
      prompt: "상급종합병원(큰 대학병원)에 바로 가서 외래 진료를 받으려 합니다. “진료의뢰서”(요양급여의뢰서)가 없으면?",
      options: [
        "본인부담금이 10%만 늘어난다",
        "원칙적으로 건강보험이 적용되지 않아 진료비를 전액 부담한다",
        "진료 자체를 거부당한다",
        "의뢰서는 입원할 때만 필요해서 외래에는 아무 영향이 없다",
      ],
      explanation:
        "한국의 요양급여는 1단계(의원·병원·종합병원)와 2단계(상급종합병원)로 나뉩니다. 2단계 진료를 받으려면 1단계 의료기관에서 요양급여의뢰서를 받아 가야 하고, 없으면 원칙적으로 건강보험이 적용되지 않아 전액 본인부담이 됩니다. 다만 응급환자, 분만, 치과 요양급여, 등록 장애인의 재활의학과 진료, 가정의학과 진료, 그 병원에 근무하는 가입자, 혈우병 환자는 의뢰서 없이도 2단계 진료를 받을 수 있습니다.",
      meaning: "큰 병원 진료에 필요한 소개 서류",
    },
    en: {
      prompt: "You want to walk straight into a tertiary general hospital for an outpatient visit. Without a ‘jinryo-uiroeseo’ (referral letter), what happens?",
      options: [
        "Your patient share just rises by 10%",
        "As a rule health insurance does not apply and you pay the full bill",
        "You are refused treatment outright",
        "Referrals are only for admissions, so outpatient visits are unaffected",
      ],
      explanation:
        "Korean benefit coverage is split into stage 1 (clinics, hospitals, general hospitals) and stage 2 (tertiary general hospitals). For stage-2 care you need a referral from a stage-1 facility; without it, health insurance does not apply as a rule and you pay the whole bill. The exceptions that need no referral are emergency patients, childbirth, dental benefits, rehabilitation medicine for registered disabled patients, family medicine, subscribers employed at that hospital, and haemophilia patients.",
      meaning: "Referral letter needed for big hospitals",
    },
    vi: {
      prompt: "Bạn muốn đến thẳng bệnh viện đa khoa cấp cao để khám ngoại trú. Không có “진료의뢰서” (giấy chuyển tuyến) thì sao?",
      options: [
        "Phần tự chi trả chỉ tăng thêm 10%",
        "Về nguyên tắc bảo hiểm y tế không áp dụng, bạn trả toàn bộ chi phí",
        "Bạn bị từ chối khám hoàn toàn",
        "Giấy chuyển tuyến chỉ cần khi nhập viện, khám ngoại trú không ảnh hưởng",
      ],
      explanation:
        "Chi trả bảo hiểm ở Hàn Quốc chia thành bước 1 (phòng khám, bệnh viện, bệnh viện đa khoa) và bước 2 (bệnh viện đa khoa cấp cao). Muốn khám bước 2 phải có giấy chuyển tuyến từ cơ sở bước 1; không có thì về nguyên tắc bảo hiểm không áp dụng và bạn trả toàn bộ. Các ngoại lệ không cần giấy chuyển tuyến: bệnh nhân cấp cứu, sinh con, khám chữa răng, khoa phục hồi chức năng cho người khuyết tật đã đăng ký, khoa y học gia đình, người tham gia đang làm việc tại bệnh viện đó, và bệnh nhân máu khó đông.",
      meaning: "Giấy giới thiệu cần cho bệnh viện lớn",
    },
    ja: {
      prompt: "上級総合病院(大きな大学病院)に直接行って外来診療を受けようとしています。「진료의뢰서」(療養給付依頼書)がないと?",
      options: [
        "自己負担金が10%だけ増える",
        "原則として健康保険が適用されず、診療費を全額負担する",
        "診療そのものを断られる",
        "依頼書は入院のときだけ必要なので外来には影響がない",
      ],
      explanation:
        "韓国の療養給付は1段階(의원・병원・総合病院)と2段階(上級総合病院)に分かれます。2段階の診療を受けるには1段階の医療機関で療養給付依頼書をもらう必要があり、なければ原則として健康保険が適用されず全額自己負担になります。ただし救急患者、分娩、歯科の療養給付、登録障害者のリハビリテーション科診療、家庭医学科の診療、その病院に勤務する加入者、血友病患者は依頼書なしでも2段階の診療を受けられます。",
      meaning: "大病院の診療に必要な紹介書類",
    },
    zh: {
      prompt: "你想直接去上级综合医院(大型大学医院)看门诊。没有「진료의뢰서」(疗养给付转诊单)会怎样?",
      options: [
        "自付额只增加10%",
        "原则上健康保险不适用,诊疗费要全额自付",
        "会被直接拒诊",
        "转诊单只在住院时需要,门诊不受影响",
      ],
      explanation:
        "韩国的疗养给付分为第一阶段(诊所·医院·综合医院)和第二阶段(上级综合医院)。要接受第二阶段诊疗,须先在第一阶段机构取得疗养给付转诊单;没有的话原则上健康保险不适用,需全额自付。但急诊患者、分娩、牙科疗养给付、已登记残疾人的康复医学科诊疗、家庭医学科诊疗、在该医院工作的参保人、血友病患者,无需转诊单也可接受第二阶段诊疗。",
      meaning: "到大医院看病所需的转诊文件",
    },
  },
  {
    id: "gyeongjeung-eungeupsil",
    category: "medical",
    difficulty: "hard",
    term: "경증 응급실 이용",
    reading: {
      en: "gyeongjeung eungeupsil iyong (mild-case ER visit)",
      vi: "gyeongjeung eungeupsil iyong (đến cấp cứu khi bệnh nhẹ)",
      ja: "キョンジュン ウングプシル イヨン(軽症での救急室利用)",
      zh: "gyeongjeung eungeupsil iyong(轻症使用急诊室)",
    },
    answer: 3,
    sources: [
      "국민건강보험법 시행규칙 개정(2024.9.12. 시행) — 경증·비응급(KTAS 4~5) 환자의 권역응급의료센터 등 이용 시 응급실 진료비 본인부담 90%",
      "https://www.law.go.kr/법령/국민건강보험법시행규칙",
    ],
    ko: {
      prompt: "가벼운 증상(KTAS 4~5등급)으로 권역응급의료센터 같은 큰 응급실을 이용하면, 응급실 진료비 본인부담은?",
      options: ["30%", "50%", "60%", "90%"],
      explanation:
        "2024년 9월 12일부터 경증·비응급(KTAS 4~5등급) 환자가 권역응급의료센터·권역외상센터 등을 이용하면 응급실 진료비의 90%를 본인이 부담합니다. 중증 환자가 제때 치료받도록 응급실을 비워 두기 위한 조치입니다. 밤에 열이 나거나 가벼운 상처가 생겼을 때는 동네 병원의 야간진료, 달빛어린이병원, 야간 문 여는 약국을 먼저 찾아보는 편이 비용과 대기 시간 모두 유리합니다. 물론 의식이 없거나 숨쉬기 힘든 상황이라면 비용을 따지지 말고 119로 응급실에 가야 합니다.",
      meaning: "경증으로 큰 응급실을 쓸 때의 본인부담(90%)",
    },
    en: {
      prompt: "If you use a major emergency room such as a regional emergency medical center with a mild condition (KTAS level 4–5), what is your share of the ER bill?",
      options: ["30%", "50%", "60%", "90%"],
      explanation:
        "Since 12 September 2024, mild and non-urgent patients (KTAS 4–5) who use regional emergency medical centers or regional trauma centers pay 90% of the ER bill themselves. The point is to keep emergency rooms free so severe cases get treated in time. For a night-time fever or a small cut, a local clinic’s evening hours, a Moonlight Children’s Hospital, or a late-opening pharmacy will cost less and take less waiting. Of course, if someone is unconscious or struggling to breathe, forget the cost and call 119.",
      meaning: "Your 90% share when using a major ER for a mild case",
    },
    vi: {
      prompt: "Nếu bạn dùng phòng cấp cứu lớn như trung tâm cấp cứu khu vực với triệu chứng nhẹ (KTAS cấp 4–5), phần tự chi trả cho viện phí cấp cứu là bao nhiêu?",
      options: ["30%", "50%", "60%", "90%"],
      explanation:
        "Từ ngày 12/9/2024, bệnh nhân nhẹ và không cấp cứu (KTAS 4–5) sử dụng trung tâm cấp cứu khu vực hoặc trung tâm chấn thương khu vực phải tự trả 90% viện phí cấp cứu. Mục đích là giữ phòng cấp cứu trống để bệnh nhân nặng được điều trị kịp thời. Khi sốt về đêm hay có vết thương nhỏ, hãy tìm phòng khám gần nhà có giờ khám buổi tối, Bệnh viện Nhi Ánh Trăng, hoặc hiệu thuốc mở khuya — vừa rẻ hơn vừa chờ ít hơn. Tất nhiên nếu có người mất ý thức hay khó thở thì đừng tính tiền, hãy gọi 119.",
      meaning: "Mức tự chi trả 90% khi bệnh nhẹ mà vào cấp cứu lớn",
    },
    ja: {
      prompt: "軽い症状(KTAS4~5等級)で広域救急医療センターのような大きな救急室を利用すると、救急室の診療費の自己負担は?",
      options: ["30%", "50%", "60%", "90%"],
      explanation:
        "2024年9月12日から、軽症・非救急(KTAS4~5等級)の患者が広域救急医療センターや広域外傷センターなどを利用すると、救急室の診療費の90%を自己負担します。重症患者が適切な時期に治療を受けられるよう救急室を空けておくための措置です。夜に熱が出たり軽いけがをしたときは、近所の病院の夜間診療、月明かり子ども病院、夜間に開く薬局を先に探すほうが費用も待ち時間も有利です。もちろん意識がない、息が苦しいという状況なら費用を気にせず119で救急室へ向かってください。",
      meaning: "軽症で大きな救急室を使うときの自己負担(90%)",
    },
    zh: {
      prompt: "以轻症(KTAS 4~5级)使用区域急救医疗中心这类大型急诊室时,急诊诊疗费的自付比例是多少?",
      options: ["30%", "50%", "60%", "90%"],
      explanation:
        "自2024年9月12日起,轻症·非急症(KTAS 4~5级)患者使用区域急救医疗中心、区域创伤中心等,须自行负担急诊诊疗费的90%。目的是腾出急诊室,让重症患者能及时得到救治。夜间发烧或有小伤口时,先找附近医院的夜间门诊、月光儿童医院或夜间营业的药店,费用和等候时间都更有利。当然,如果出现失去意识或呼吸困难的情况,就别算钱了,直接打119去急诊。",
      meaning: "轻症使用大型急诊室时的自付比例(90%)",
    },
  },
];
