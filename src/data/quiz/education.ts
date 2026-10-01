import type { QuizQuestion } from "./types";

/**
 * 교육·생활 12문제. (사이트에서는 「교육·생활 / Daily Life」로 표시된다.)
 * 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고 sources에 남겼다.
 * 확인되지 않은 수치(종량제 봉투 가격, 쓰레기 배출 요일, 지하철 기본요금 등)는
 * 지자체마다 달라 일부러 출제하지 않았다.
 */
export const EDUCATION_QUESTIONS: QuizQuestion[] = [
  {
    id: "one-plus-one",
    category: "education",
    difficulty: "easy",
    term: "1+1 / 2+1",
    reading: {
      en: "won peulleoseu won / tu peulleoseu won",
      vi: "won peulleoseu won / tu peulleoseu won",
      ja: "ウォンプラスウォン/トゥプラスウォン",
      zh: "1+1 / 2+1",
    },
    answer: 2,
    sources: [
      "표시·광고의 공정화에 관한 법률 제3조(부당한 표시·광고 행위의 금지)",
      "https://www.law.go.kr/법령/표시광고의공정화에관한법률",
    ],
    ko: {
      prompt: "편의점 음료에 “2+1”이라고 붙어 있습니다. 무슨 뜻일까요?",
      options: [
        "두 개를 사면 한 개 값만 내면 된다",
        "세 개를 사야 할인이 된다",
        "두 개를 사면 같은 상품 한 개를 더 준다",
        "두 번째 상품을 반값에 준다",
      ],
      explanation:
        "2+1은 두 개를 사면 한 개를 더 주는 행사입니다. 같은 식으로 1+1은 하나를 사면 하나를 더 주는 것입니다. 주의할 점은 반드시 같은 상품이 아니어도 되는 경우가 있고, 행사 대상이 특정 용량·맛으로 한정되는 때가 많다는 것입니다. 계산대에서 자동으로 적용되지 않으면 직원에게 물어보면 되고, 행사 표시와 실제 가격이 다르면 그 자리에서 확인해 달라고 요청해도 괜찮습니다.",
      meaning: "두 개 사면 하나 더 주는 행사",
    },
    en: {
      prompt: "A drink at the convenience store is tagged ‘2+1’. What does it mean?",
      options: [
        "Buy two, pay for only one",
        "You must buy three to get a discount",
        "Buy two and get one more of the same item free",
        "The second item is half price",
      ],
      explanation:
        "2+1 means buy two, get one more free; by the same logic 1+1 means buy one, get one. Watch out for two things: the free item doesn’t always have to be identical, and promotions are often limited to specific sizes or flavours. If it doesn’t apply automatically at the till, just ask the clerk — and if the tag and the price don’t match, it’s perfectly fine to ask them to check on the spot.",
      meaning: "Buy two, get one free promotion",
    },
    vi: {
      prompt: "Một loại nước ở cửa hàng tiện lợi dán nhãn “2+1”. Nghĩa là gì?",
      options: [
        "Mua hai chỉ phải trả tiền một",
        "Phải mua ba mới được giảm giá",
        "Mua hai được tặng thêm một món cùng loại",
        "Món thứ hai được nửa giá",
      ],
      explanation:
        "2+1 nghĩa là mua hai tặng một; tương tự, 1+1 là mua một tặng một. Cần lưu ý hai điều: món tặng không nhất thiết phải giống hệt, và chương trình thường chỉ áp dụng cho dung tích hoặc hương vị nhất định. Nếu ở quầy thu ngân không tự áp dụng, cứ hỏi nhân viên — và nếu nhãn khuyến mãi khác với giá thực tế, bạn hoàn toàn có thể yêu cầu họ kiểm tra ngay tại đó.",
      meaning: "Chương trình mua hai tặng một",
    },
    ja: {
      prompt: "コンビニの飲み物に「2+1」と付いています。どんな意味でしょう?",
      options: [
        "二つ買えば一つ分の値段だけ払えばよい",
        "三つ買わないと割引にならない",
        "二つ買えば同じ商品を一つもらえる",
        "二つめの商品を半額にしてくれる",
      ],
      explanation:
        "2+1は二つ買えば一つもらえる企画です。同じように1+1は一つ買えば一つもらえるという意味です。注意すべき点は、必ず同じ商品でなくてもよい場合があることと、対象が特定の容量・味に限られることが多いことです。レジで自動的に適用されなければ店員に聞けばよく、企画の表示と実際の価格が違えばその場で確認してほしいと頼んでも大丈夫です。",
      meaning: "二つ買えば一つもらえる企画",
    },
    zh: {
      prompt: "便利店的饮料上贴着「2+1」。是什么意思?",
      options: [
        "买两件只需付一件的钱",
        "必须买三件才有折扣",
        "买两件再送一件同款",
        "第二件半价",
      ],
      explanation:
        "2+1是指买两件送一件;同理,1+1就是买一送一。要注意两点:赠品不一定非得是完全相同的商品,而且活动常常只限特定容量或口味。如果收银时没有自动适用,直接问店员就好;若标签和实际价格不一致,当场请对方核对也完全没问题。",
      meaning: "买两件送一件的促销",
    },
  },
  {
    id: "il-sam-sa-o",
    category: "education",
    difficulty: "easy",
    term: "1345",
    reading: {
      en: "il-sam-sa-o (1345)",
      vi: "il-sam-sa-o (1345)",
      ja: "イルサムサオ(1345)",
      zh: "1345",
    },
    answer: 0,
    sources: [
      "외국인종합안내센터(1345) 운영 안내 — 20개 언어, 평일 09:00~22:00(18시 이후는 한국어·영어·중국어)",
      "https://www.immigration.go.kr/immigration/1530/subview.do",
    ],
    ko: {
      prompt: "비자 연장 서류가 헷갈립니다. 모국어로 상담받을 수 있는 “1345”는 어떤 곳일까요?",
      options: [
        "법무부 외국인종합안내센터로, 여러 언어로 체류·생활 상담을 해 준다",
        "경찰 신고 전화다",
        "구급차를 부르는 번호다",
        "은행 고객센터 공통 번호다",
      ],
      explanation:
        "1345는 법무부가 운영하는 외국인종합안내센터입니다. 한국어·영어·중국어·베트남어·일본어를 포함해 20개 언어로 출입국 민원과 생활 안내를 받을 수 있습니다. 평일 09시부터 22시까지 운영하고, 18시 이후 야간에는 한국어·영어·중국어만 가능합니다. 관공서와 통화할 때 3자 통역을 넣어 주기도 하니, 혼자 설명하기 어려운 민원에 특히 쓸모가 있습니다. 범죄 신고는 112, 구급·화재는 119입니다.",
      meaning: "여러 언어로 상담하는 외국인종합안내센터",
    },
    en: {
      prompt: "You’re confused by visa extension paperwork. What is ‘1345’, where you can get help in your own language?",
      options: [
        "The Ministry of Justice’s Immigration Contact Center, offering multilingual help on residence and daily life",
        "The police reporting line",
        "The number for calling an ambulance",
        "A shared customer-service number for banks",
      ],
      explanation:
        "1345 is the Immigration Contact Center run by the Ministry of Justice. It covers 20 languages — including Korean, English, Chinese, Vietnamese and Japanese — for immigration paperwork and everyday questions. It runs weekdays 09:00 to 22:00, and after 18:00 only Korean, English and Chinese are available. They will also join a three-way call to interpret with a government office, which makes them especially useful when explaining something yourself is hard. Crime goes to 112, ambulance and fire to 119.",
      meaning: "Multilingual contact center for foreign residents",
    },
    vi: {
      prompt: "Bạn đang lúng túng với giấy tờ gia hạn visa. “1345” — nơi bạn có thể được tư vấn bằng tiếng mẹ đẻ — là gì?",
      options: [
        "Trung tâm Tư vấn Tổng hợp cho Người nước ngoài của Bộ Tư pháp, tư vấn lưu trú và đời sống bằng nhiều ngôn ngữ",
        "Số điện thoại báo cảnh sát",
        "Số gọi xe cấp cứu",
        "Số tổng đài chung của các ngân hàng",
      ],
      explanation:
        "1345 là Trung tâm Tư vấn Tổng hợp cho Người nước ngoài do Bộ Tư pháp vận hành. Trung tâm hỗ trợ 20 ngôn ngữ — gồm tiếng Hàn, Anh, Trung, Việt, Nhật — cho thủ tục xuất nhập cảnh và các thắc mắc đời sống. Hoạt động ngày thường từ 09:00 đến 22:00; sau 18:00 chỉ còn tiếng Hàn, Anh và Trung. Họ còn có thể tham gia cuộc gọi ba bên để phiên dịch với cơ quan nhà nước, rất hữu ích khi bạn khó tự giải thích. Báo tội phạm là 112, cấp cứu và cháy là 119.",
      meaning: "Trung tâm tư vấn đa ngôn ngữ cho người nước ngoài",
    },
    ja: {
      prompt: "ビザ延長の書類がわかりません。母国語で相談できる「1345」はどんな所でしょう?",
      options: [
        "法務部の外国人総合案内センターで、複数の言語で在留・生活の相談に応じてくれる",
        "警察への通報電話である",
        "救急車を呼ぶ番号である",
        "銀行のカスタマーセンター共通番号である",
      ],
      explanation:
        "1345は法務部が運営する外国人総合案内センターです。韓国語・英語・中国語・ベトナム語・日本語を含む20言語で、出入国の手続きや生活の案内を受けられます。平日09時から22時まで運営し、18時以降の夜間は韓国語・英語・中国語のみになります。役所と通話するときに三者通訳を入れてくれることもあるので、自分だけで説明しにくい手続きに特に役立ちます。犯罪の通報は112、救急・火災は119です。",
      meaning: "多言語で相談できる外国人総合案内センター",
    },
    zh: {
      prompt: "签证延期的材料让你一头雾水。可以用母语咨询的「1345」是什么?",
      options: [
        "法务部外国人综合咨询中心,用多种语言提供居留和生活咨询",
        "报警电话",
        "叫救护车的号码",
        "银行客服的通用号码",
      ],
      explanation:
        "1345是法务部运营的外国人综合咨询中心。它支持20种语言,包括韩语、英语、汉语、越南语、日语,可咨询出入境手续和生活问题。工作日09时至22时运营,18时以后的夜间只提供韩语、英语和汉语。与政府机关通话时他们还能加入三方通译,所以自己讲不清的事务找他们特别有用。报案打112,急救和火灾打119。",
      meaning: "提供多语言咨询的外国人综合咨询中心",
    },
  },
  {
    id: "taekbae",
    category: "education",
    difficulty: "easy",
    term: "택배",
    reading: {
      en: "taekbae (parcel delivery)",
      vi: "taekbae (giao hàng tận nơi)",
      ja: "テクベ(宅配)",
      zh: "taekbae(快递)",
    },
    answer: 1,
    sources: [
      "생활물류서비스산업발전법 제2조(정의) — 소화물배송대행서비스 등",
      "https://www.law.go.kr/법령/생활물류서비스산업발전법",
    ],
    ko: {
      prompt: "“택배 왔어요”라는 문자를 받았습니다. 「택배」는 무엇일까요?",
      options: [
        "음식을 조리해 가져다주는 서비스",
        "집이나 사무실까지 물건을 배송해 주는 서비스",
        "짐을 맡아 보관해 주는 서비스",
        "이사를 도와주는 서비스",
      ],
      explanation:
        "택배는 물건을 보내는 사람의 집에서 받는 사람의 집까지 배송해 주는 서비스입니다. 음식을 가져다주는 것은 「배달」이라 따로 부르고, 이사는 「이삿짐 센터」가 맡습니다. 집에 아무도 없을 때 어디에 두면 좋을지(문 앞, 경비실, 무인택배함) 미리 적어 두면 분실을 줄일 수 있고, 운송장 번호로 지금 어디까지 왔는지 조회할 수 있습니다.",
      meaning: "집까지 물건을 배송해 주는 서비스",
    },
    en: {
      prompt: "You get a text saying ‘taekbae arrived’. What is taekbae?",
      options: [
        "A service that cooks and brings you food",
        "A service delivering parcels to your home or office",
        "A service that stores your luggage",
        "A service that helps you move house",
      ],
      explanation:
        "Taekbae is parcel delivery from the sender’s door to the recipient’s door. Food brought to you is called baedal, a separate word, and moving house is handled by a moving company. Noting a safe drop spot in advance — the door, the security office, a parcel locker — cuts down on lost packages, and the tracking number tells you where your parcel is right now.",
      meaning: "Parcel delivery to your door",
    },
    vi: {
      prompt: "Bạn nhận tin nhắn “taekbae đã đến”. “택배” là gì?",
      options: [
        "Dịch vụ nấu và mang đồ ăn đến",
        "Dịch vụ chuyển hàng đến nhà hoặc văn phòng",
        "Dịch vụ nhận giữ hành lý",
        "Dịch vụ giúp chuyển nhà",
      ],
      explanation:
        "Taekbae là dịch vụ giao hàng từ nhà người gửi đến nhà người nhận. Mang đồ ăn đến thì gọi là “배달” (baedal), một từ khác, còn chuyển nhà do công ty chuyển nhà lo. Ghi trước nơi để hàng an toàn — trước cửa, phòng bảo vệ, tủ nhận hàng tự động — sẽ giảm việc mất gói, và số vận đơn cho bạn biết hàng hiện đang ở đâu.",
      meaning: "Dịch vụ chuyển hàng đến nhà",
    },
    ja: {
      prompt: "「택배가 왔어요(宅配が来ました)」というメッセージが届きました。「택배」とは何でしょう?",
      options: [
        "食べ物を調理して持ってきてくれるサービス",
        "家や事務所まで荷物を配送してくれるサービス",
        "荷物を預かって保管してくれるサービス",
        "引っ越しを手伝ってくれるサービス",
      ],
      explanation:
        "택배は送る人の家から受け取る人の家まで荷物を配送するサービスです。食べ物を持ってきてくれるのは「배달(配達)」と別に呼び、引っ越しは「이삿짐 센터(引っ越しセンター)」が担います。家に誰もいないときにどこに置けばよいか(ドアの前、警備室、無人宅配ボックス)をあらかじめ書いておくと紛失を減らせ、送り状番号で今どこまで来ているか照会できます。",
      meaning: "家まで荷物を配送してくれるサービス",
    },
    zh: {
      prompt: "你收到一条短信说「택배到了」。「택배」是什么?",
      options: [
        "把食物做好送上门的服务",
        "把物品送到住所或办公室的配送服务",
        "代为保管行李的服务",
        "帮忙搬家的服务",
      ],
      explanation:
        "택배是把物品从寄件人家门口送到收件人家门口的配送服务。送餐叫「배달」,是另一个词;搬家则由搬家公司负责。提前写明家里没人时该放哪里(门口、保安室、无人快递柜)能减少丢件,运单号可以查到包裹现在到了哪儿。",
      meaning: "把物品送到家的配送服务",
    },
  },
  {
    id: "bunri-baechul",
    category: "education",
    difficulty: "easy",
    term: "분리배출",
    reading: {
      en: "bunri-baechul (separated disposal)",
      vi: "bunri-baechul (phân loại rác)",
      ja: "プンリペチュル(分別排出)",
      zh: "bunri-baechul(分类投放)",
    },
    answer: 3,
    sources: [
      "자원의 절약과 재활용촉진에 관한 법률 제13조(폐기물의 배출)·폐기물관리법 제15조",
      "https://www.law.go.kr/법령/자원의절약과재활용촉진에관한법률",
    ],
    ko: {
      prompt: "“분리배출”에 대한 설명으로 맞는 것은?",
      options: [
        "쓰레기를 한 봉투에 모아 버리는 것",
        "쓰레기를 밤에만 버리는 규칙",
        "이사할 때 짐을 나눠 옮기는 것",
        "종이·플라스틱·캔·유리 등을 종류별로 나눠 버리는 것",
      ],
      explanation:
        "분리배출은 재활용할 수 있는 폐기물을 종류별로 나눠서 내놓는 것입니다. 법으로 정해진 의무여서 지키지 않으면 과태료가 부과될 수 있습니다. 기본 원칙은 「비우고, 헹구고, 라벨을 떼고, 섞지 않는다」입니다. 다만 배출 요일과 봉투 종류·가격은 지자체 조례로 정해져 사는 곳마다 다르므로, 이사한 뒤에는 주민센터나 아파트 게시판에서 우리 동네 기준을 꼭 확인하세요.",
      meaning: "재활용품을 종류별로 나눠 버리는 것",
    },
    en: {
      prompt: "Which statement about ‘bunri-baechul’ (separated disposal) is correct?",
      options: [
        "Collecting all waste into a single bag",
        "A rule that waste may only be put out at night",
        "Splitting your belongings into loads when moving house",
        "Sorting paper, plastic, cans, glass and so on into separate categories",
      ],
      explanation:
        "Bunri-baechul means putting recyclable waste out sorted by type. It is a legal duty, and failing to comply can bring a fine. The basic rule of thumb is: empty it, rinse it, peel the label, don’t mix. Collection days and the type and price of official bags, however, are set by local ordinance and differ by district — so after moving, check your neighbourhood’s rules at the community service center or on your building’s noticeboard.",
      meaning: "Sorting recyclables by type when disposing",
    },
    vi: {
      prompt: "Phát biểu nào về “분리배출” (phân loại rác khi bỏ) là đúng?",
      options: [
        "Dồn hết rác vào một túi rồi bỏ",
        "Quy định chỉ được bỏ rác vào buổi tối",
        "Chia đồ ra từng chuyến khi chuyển nhà",
        "Phân riêng giấy, nhựa, lon, thủy tinh v.v. theo từng loại rồi bỏ",
      ],
      explanation:
        "Bunri-baechul là việc bỏ rác tái chế được sau khi đã phân theo loại. Đây là nghĩa vụ pháp lý, không tuân thủ có thể bị phạt tiền. Nguyên tắc cơ bản là: dốc hết, tráng sạch, bóc nhãn, không trộn lẫn. Tuy nhiên ngày thu gom cùng loại và giá túi rác do pháp lệnh địa phương quy định nên mỗi nơi mỗi khác — sau khi chuyển nhà, hãy xem quy định của khu mình ở trung tâm hành chính phường hoặc bảng thông báo của tòa nhà.",
      meaning: "Bỏ rác tái chế sau khi phân theo loại",
    },
    ja: {
      prompt: "「분리배출」(分別排出)についての説明として正しいものは?",
      options: [
        "ゴミを一つの袋にまとめて捨てること",
        "ゴミを夜だけ捨てるという規則",
        "引っ越しのときに荷物を分けて運ぶこと",
        "紙・プラスチック・缶・ガラスなどを種類別に分けて捨てること",
      ],
      explanation:
        "分別排出はリサイクルできる廃棄物を種類別に分けて出すことです。法律で定められた義務なので、守らないと過料が課されることがあります。基本の原則は「空にして、すすいで、ラベルを剥がして、混ぜない」です。ただし排出の曜日や袋の種類・価格は自治体の条例で定められ、住む場所によって異なるので、引っ越したら住民センターやマンションの掲示板で自分の地域の基準を必ず確認してください。",
      meaning: "リサイクル品を種類別に分けて捨てること",
    },
    zh: {
      prompt: "关于「분리배출」(分类投放),哪项说明正确?",
      options: [
        "把垃圾全装进一个袋子里丢掉",
        "只允许在夜间丢垃圾的规定",
        "搬家时把东西分批搬运",
        "把纸、塑料、罐、玻璃等按种类分开投放",
      ],
      explanation:
        "分类投放是把可回收废弃物按种类分开后再投放。这是法定义务,不遵守可能被罚款。基本原则是「倒空、冲洗、撕标签、不混装」。不过投放日以及垃圾袋的种类和价格由地方条例规定,各地不同——搬家后请到社区服务中心或楼内公告板确认自己所在地区的标准。",
      meaning: "把可回收物按种类分开投放",
    },
  },
  {
    id: "eumsingmul",
    category: "education",
    difficulty: "normal",
    term: "음식물 쓰레기",
    reading: {
      en: "eumsingmul sseuregi (food waste)",
      vi: "eumsingmul sseuregi (rác thực phẩm)",
      ja: "ウムシンムルスレギ(生ゴミ)",
      zh: "eumsingmul sseuregi(食物垃圾)",
    },
    answer: 2,
    sources: [
      "서울시 음식물류 폐기물 분리배출 기준 표준안 — 동물의 뼈, 조개·갑각류 껍데기, 알껍데기, 핵과류 씨, 양파·마늘 껍질 등은 일반쓰레기",
      "https://mediahub.seoul.go.kr/archives/2004122",
      "폐기물관리법 제15조의2(음식물류 폐기물의 발생 억제 등)",
    ],
    ko: {
      prompt: "다음 중 “음식물 쓰레기”가 아니라 일반쓰레기로 버려야 하는 것은?",
      options: ["식은 밥", "사과 과육", "닭 뼈와 조개껍데기", "상한 김치(양념을 씻어낸 것)"],
      explanation:
        "음식물 쓰레기는 가축의 사료나 퇴비로 재활용되기 때문에, 동물이 먹을 수 없거나 기계를 망가뜨리는 것은 음식물로 버리지 않습니다. 닭·소·돼지의 뼈, 조개·전복·게 껍데기, 달걀 껍데기, 복숭아·감 같은 핵과류의 씨, 양파·마늘·옥수수 껍질, 차 찌꺼기는 일반쓰레기입니다. 반대로 상한 김치는 양념을 씻어내면 음식물로 버릴 수 있습니다. 기준은 지자체 조례로 정해지므로, 애매하면 우리 구청 안내를 확인하세요.",
      meaning: "사료·퇴비로 쓰이는 음식 찌꺼기",
    },
    en: {
      prompt: "Which of these must go in general waste rather than ‘food waste’?",
      options: ["Leftover cooked rice", "Apple flesh", "Chicken bones and clam shells", "Spoiled kimchi (rinsed of seasoning)"],
      explanation:
        "Food waste is recycled into animal feed and compost, so anything an animal cannot eat or that would wreck the machinery does not belong there. Chicken, beef and pork bones; clam, abalone and crab shells; eggshells; stone-fruit pits like peach and persimmon; onion, garlic and corn husks; and tea dregs all go in general waste. Spoiled kimchi, by contrast, can go in food waste once the seasoning is rinsed off. Standards are set by local ordinance, so when in doubt check your district office’s guide.",
      meaning: "Food scraps recycled as feed or compost",
    },
    vi: {
      prompt: "Trong các thứ sau, cái nào phải bỏ vào rác thường chứ không phải “rác thực phẩm”?",
      options: ["Cơm nguội còn lại", "Thịt quả táo", "Xương gà và vỏ nghêu", "Kim chi hỏng (đã rửa sạch gia vị)"],
      explanation:
        "Rác thực phẩm được tái chế thành thức ăn gia súc và phân bón, nên thứ gì động vật không ăn được hoặc làm hỏng máy móc thì không bỏ vào đó. Xương gà, bò, lợn; vỏ nghêu, bào ngư, cua; vỏ trứng; hạt của quả có hạch như đào, hồng; vỏ hành, tỏi, bắp; bã trà — tất cả đều là rác thường. Ngược lại, kim chi hỏng sau khi rửa sạch gia vị thì bỏ được vào rác thực phẩm. Tiêu chuẩn do pháp lệnh địa phương quy định, nên khi không rõ hãy xem hướng dẫn của ủy ban quận mình.",
      meaning: "Rác thức ăn dùng làm thức ăn gia súc, phân bón",
    },
    ja: {
      prompt: "次のうち「음식물 쓰레기」(生ゴミ)ではなく一般ゴミとして捨てなければならないものは?",
      options: ["冷めたご飯", "りんごの果肉", "鶏の骨と貝殻", "傷んだキムチ(薬味を洗い流したもの)"],
      explanation:
        "生ゴミは家畜の飼料や堆肥としてリサイクルされるため、動物が食べられないものや機械を壊すものは生ゴミとして捨てません。鶏・牛・豚の骨、貝・アワビ・カニの殻、卵の殻、桃や柿のような核果類の種、玉ねぎ・にんにく・とうもろこしの皮、茶かすは一般ゴミです。逆に傷んだキムチは薬味を洗い流せば生ゴミとして捨てられます。基準は自治体の条例で定められるので、あいまいなときは自分の区役所の案内を確認してください。",
      meaning: "飼料・堆肥に使われる食べ物のかす",
    },
    zh: {
      prompt: "以下哪一项必须作为一般垃圾而不是「음식물 쓰레기」(食物垃圾)丢弃?",
      options: ["放凉的剩饭", "苹果果肉", "鸡骨头和贝壳", "坏掉的泡菜(已冲掉调料)"],
      explanation:
        "食物垃圾会被回收做家畜饲料或堆肥,所以动物吃不了或会损坏机器的东西不能当食物垃圾丢。鸡、牛、猪的骨头,贝类、鲍鱼、蟹的壳,蛋壳,桃子、柿子等核果的果核,洋葱、大蒜、玉米的皮,茶渣,都属于一般垃圾。相反,坏掉的泡菜把调料冲洗掉后可以当食物垃圾丢。标准由地方条例规定,拿不准时请查看所在区政府的指引。",
      meaning: "被回收作饲料、堆肥的食物残渣",
    },
  },
  {
    id: "topik",
    category: "education",
    difficulty: "normal",
    term: "토픽(TOPIK)",
    reading: {
      en: "TOPIK (Test of Proficiency in Korean)",
      vi: "TOPIK (Kỳ thi Năng lực tiếng Hàn)",
      ja: "トピック(TOPIK・韓国語能力試験)",
      zh: "TOPIK(韩国语能力考试)",
    },
    answer: 1,
    sources: [
      "한국어능력시험(TOPIK) 안내 — 국립국제교육원 시행. TOPIK I은 1~2급, TOPIK II는 3~6급 판정",
      "https://www.niied.go.kr/web/niied/contents/niied_topik",
    ],
    ko: {
      prompt: "한국어능력시험(TOPIK)의 급수 구조에 대한 설명으로 맞는 것은?",
      options: [
        "TOPIK I에서 1~3급, TOPIK II에서 4~6급이 나온다",
        "TOPIK I에서 1~2급, TOPIK II에서 3~6급이 나온다",
        "시험은 하나뿐이고 1급부터 6급까지 한 번에 판정한다",
        "급수 없이 합격·불합격만 나온다",
      ],
      explanation:
        "TOPIK은 국립국제교육원이 시행하며 TOPIK I(초급)과 TOPIK II(중·고급)로 나뉩니다. TOPIK I에서는 1급과 2급, TOPIK II에서는 3급부터 6급까지 판정됩니다. 따로 합격선을 넘는 방식이 아니라 받은 점수에 따라 급수가 자동으로 정해지는 구조입니다. 대학 입학이나 비자, 취업에서 요구하는 급수가 서로 다르니, 목표 급수를 먼저 정하고 그에 맞는 시험 종류를 고르는 것이 효율적입니다.",
      meaning: "한국어 실력을 1~6급으로 판정하는 시험",
    },
    en: {
      prompt: "Which statement about the level structure of TOPIK is correct?",
      options: [
        "TOPIK I awards levels 1–3 and TOPIK II awards 4–6",
        "TOPIK I awards levels 1–2 and TOPIK II awards 3–6",
        "There is only one exam, awarding levels 1 to 6 at once",
        "There are no levels, only pass or fail",
      ],
      explanation:
        "TOPIK is administered by the National Institute for International Education and splits into TOPIK I (beginner) and TOPIK II (intermediate–advanced). TOPIK I awards level 1 or 2; TOPIK II awards levels 3 through 6. There is no separate pass mark: your level follows automatically from your score. Universities, visas and employers ask for different levels, so it is more efficient to fix your target level first and then choose which exam to sit.",
      meaning: "Exam rating Korean ability from level 1 to 6",
    },
    vi: {
      prompt: "Phát biểu nào về cấu trúc cấp bậc của TOPIK là đúng?",
      options: [
        "TOPIK I cho cấp 1–3, TOPIK II cho cấp 4–6",
        "TOPIK I cho cấp 1–2, TOPIK II cho cấp 3–6",
        "Chỉ có một kỳ thi, xét luôn từ cấp 1 đến cấp 6",
        "Không có cấp bậc, chỉ có đạt hoặc không đạt",
      ],
      explanation:
        "TOPIK do Viện Giáo dục Quốc tế Quốc gia tổ chức, chia thành TOPIK I (sơ cấp) và TOPIK II (trung–cao cấp). TOPIK I xét cấp 1 và 2; TOPIK II xét từ cấp 3 đến cấp 6. Không có điểm đậu riêng: cấp bậc được xác định tự động theo số điểm bạn đạt. Trường đại học, visa và nhà tuyển dụng yêu cầu các cấp khác nhau, nên hiệu quả hơn là xác định cấp mục tiêu trước rồi chọn loại kỳ thi phù hợp.",
      meaning: "Kỳ thi xét năng lực tiếng Hàn từ cấp 1 đến 6",
    },
    ja: {
      prompt: "韓国語能力試験(TOPIK)の級の構造についての説明として正しいものは?",
      options: [
        "TOPIK Iで1~3級、TOPIK IIで4~6級が出る",
        "TOPIK Iで1~2級、TOPIK IIで3~6級が出る",
        "試験は一つだけで、1級から6級までを一度に判定する",
        "級はなく合格・不合格だけが出る",
      ],
      explanation:
        "TOPIKは国立国際教育院が実施し、TOPIK I(初級)とTOPIK II(中・高級)に分かれます。TOPIK Iでは1級と2級、TOPIK IIでは3級から6級までが判定されます。別に合格ラインを超える方式ではなく、取った点数に応じて級が自動的に決まる仕組みです。大学入学やビザ、就職で求められる級はそれぞれ違うので、目標の級を先に決めてそれに合う試験の種類を選ぶのが効率的です。",
      meaning: "韓国語の実力を1~6級で判定する試験",
    },
    zh: {
      prompt: "关于韩国语能力考试(TOPIK)的等级结构,哪项说明正确?",
      options: [
        "TOPIK I判定1~3级,TOPIK II判定4~6级",
        "TOPIK I判定1~2级,TOPIK II判定3~6级",
        "只有一种考试,一次判定1级到6级",
        "没有等级,只有合格和不合格",
      ],
      explanation:
        "TOPIK由国立国际教育院实施,分为TOPIK I(初级)和TOPIK II(中·高级)。TOPIK I判定1级和2级,TOPIK II判定3级到6级。它不是另设合格线的方式,而是依据所得分数自动确定等级。大学入学、签证和就业要求的等级各不相同,所以先定下目标等级,再选对应的考试种类更有效率。",
      meaning: "将韩语能力判定为1~6级的考试",
    },
  },
  {
    id: "gukje-unjeon-myeonheo",
    category: "education",
    difficulty: "normal",
    term: "국제운전면허증",
    reading: {
      en: "gukje-unjeon-myeonheojeung (international driving permit)",
      vi: "gukje-unjeon-myeonheojeung (giấy phép lái xe quốc tế)",
      ja: "ククチェウンジョンミョノジュン(国際運転免許証)",
      zh: "gukje-unjeon-myeonheojeung(国际驾照)",
    },
    answer: 1,
    sources: [
      "도로교통법 제96조(국제운전면허증 또는 상호인정외국면허증에 의한 자동차등의 운전) — 입국한 날부터 1년",
      "https://www.law.go.kr/법령/도로교통법",
    ],
    ko: {
      prompt: "본국에서 발급받은 국제운전면허증으로 한국에서 운전할 수 있는 기간은?",
      options: ["6개월", "입국한 날부터 1년", "3년", "기간 제한 없음"],
      explanation:
        "도로교통법 제96조에 따라 국제운전면허증을 가진 사람은 입국한 날부터 1년 동안 국내에서 운전할 수 있습니다. 1년이 지나면 한국 운전면허로 바꿔야 하고, 국가에 따라 필기·실기 시험의 일부가 면제되는 상호인정 제도가 있습니다. 주의할 점은 국제운전면허증만으로는 부족하고 본국 면허증과 여권을 함께 가지고 다녀야 한다는 것, 그리고 렌터카 업체가 별도 조건을 요구할 수 있다는 것입니다.",
      meaning: "입국 후 1년간 유효한 외국 운전 허가",
    },
    en: {
      prompt: "How long can you drive in Korea on an international driving permit issued in your home country?",
      options: ["6 months", "One year from the date of entry", "3 years", "No time limit"],
      explanation:
        "Under Article 96 of the Road Traffic Act, a holder of an international driving permit may drive in Korea for one year from the date of entry. After that you must convert to a Korean licence; depending on your country, a mutual-recognition arrangement may waive part of the written or practical test. Note that the permit alone is not enough — carry your home-country licence and passport with it — and rental companies may impose their own conditions.",
      meaning: "Foreign driving permission valid one year after entry",
    },
    vi: {
      prompt: "Giấy phép lái xe quốc tế do nước bạn cấp cho phép lái xe ở Hàn Quốc trong bao lâu?",
      options: ["6 tháng", "Một năm kể từ ngày nhập cảnh", "3 năm", "Không giới hạn thời gian"],
      explanation:
        "Theo Điều 96 Luật Giao thông Đường bộ, người có giấy phép lái xe quốc tế được lái xe ở Hàn Quốc trong một năm kể từ ngày nhập cảnh. Sau đó bạn phải đổi sang giấy phép Hàn Quốc; tùy quốc gia, có thể được miễn một phần thi lý thuyết hoặc thực hành theo chế độ công nhận lẫn nhau. Lưu ý rằng chỉ giấy phép quốc tế là không đủ — phải mang kèm giấy phép của nước bạn và hộ chiếu — và các hãng cho thuê xe có thể đặt thêm điều kiện riêng.",
      meaning: "Quyền lái xe nước ngoài có hiệu lực một năm sau nhập cảnh",
    },
    ja: {
      prompt: "本国で発給された国際運転免許証で韓国で運転できる期間は?",
      options: ["6か月", "入国した日から1年", "3年", "期間の制限なし"],
      explanation:
        "道路交通法第96条により、国際運転免許証を持つ人は入国した日から1年間、国内で運転できます。1年が過ぎたら韓国の運転免許に切り替える必要があり、国によっては学科・技能試験の一部が免除される相互認定の制度があります。注意すべき点は、国際運転免許証だけでは足りず本国の免許証とパスポートを一緒に持ち歩かなければならないこと、そしてレンタカー会社が別の条件を求めることがあることです。",
      meaning: "入国後1年間有効な外国の運転許可",
    },
    zh: {
      prompt: "用本国签发的国际驾照,可以在韩国开车多长时间?",
      options: ["6个月", "自入境之日起1年", "3年", "没有期限"],
      explanation:
        "依《道路交通法》第96条,持有国际驾照者可自入境之日起在韩国驾驶一年。满一年后须换成韩国驾照;根据国别,互认制度可能免除部分笔试或路考。要注意的是,仅有国际驾照不够,须同时携带本国驾照和护照;另外租车公司可能另有附加条件。",
      meaning: "入境后一年内有效的外国驾驶许可",
    },
  },
  {
    id: "il-il-i-tongyeok",
    category: "education",
    difficulty: "normal",
    term: "112 통역",
    reading: {
      en: "il-il-i tongyeok (112 interpretation)",
      vi: "il-il-i tongyeok (phiên dịch 112)",
      ja: "イリリ トンヨク(112通訳)",
      zh: "112 tongyeok(112通译)",
    },
    answer: 0,
    sources: [
      "경찰청 — 112 신고 외국어 통역서비스 365일 24시간 확대 운영(2024.3.18부터, 영어·중국어)",
      "https://m.bokjiro.go.kr/ssis-tem/cms/mob/news/news/1306359_1122.html",
    ],
    ko: {
      prompt: "밤에 범죄 피해를 당해 112에 신고해야 합니다. 외국어 통역 지원에 대한 설명으로 맞는 것은?",
      options: [
        "영어와 중국어는 365일 24시간 통역이 지원된다",
        "통역은 평일 낮에만 가능하다",
        "모든 언어가 24시간 지원된다",
        "통역 서비스는 없고 한국어로만 신고할 수 있다",
      ],
      explanation:
        "경찰청은 2024년 3월 18일부터 112 신고 외국어 통역 서비스를 영어·중국어에 대해 365일 24시간으로 확대했습니다. 통역요원을 추가로 뽑아 야간에도 끊기지 않게 한 조치입니다. 일본어·베트남어 등은 수요와 성과를 보며 확대할 계획이라고 밝혔으므로, 지금은 24시간 지원이 확인된 언어가 영어·중국어라고 알아 두는 편이 안전합니다. 신고할 때는 먼저 지금 있는 위치를 말하는 것이 가장 중요합니다.",
      meaning: "112 신고 시 받을 수 있는 외국어 통역",
    },
    en: {
      prompt: "You are the victim of a crime at night and must call 112. Which statement about foreign-language interpretation is correct?",
      options: [
        "English and Chinese interpretation is available 24 hours, 365 days",
        "Interpretation is only available on weekday daytimes",
        "Every language is supported 24 hours",
        "There is no interpretation service; you can only report in Korean",
      ],
      explanation:
        "From 18 March 2024 the National Police Agency expanded 112 interpretation to 24 hours a day, 365 days a year for English and Chinese, hiring additional interpreters so night-time coverage doesn’t break. It said Japanese, Vietnamese and others would follow as demand and results are reviewed, so for now it is safest to remember English and Chinese as the confirmed round-the-clock languages. When you call, the single most important thing to say first is where you are.",
      meaning: "Foreign-language interpretation on 112 calls",
    },
    vi: {
      prompt: "Bạn bị hại vào ban đêm và phải gọi 112. Phát biểu nào về hỗ trợ phiên dịch tiếng nước ngoài là đúng?",
      options: [
        "Tiếng Anh và tiếng Trung được phiên dịch 24 giờ, 365 ngày",
        "Chỉ phiên dịch vào ban ngày các ngày thường",
        "Mọi ngôn ngữ đều được hỗ trợ 24 giờ",
        "Không có dịch vụ phiên dịch, chỉ trình báo được bằng tiếng Hàn",
      ],
      explanation:
        "Từ ngày 18/3/2024, Cơ quan Cảnh sát Quốc gia đã mở rộng phiên dịch cho cuộc gọi 112 lên 24 giờ mỗi ngày, 365 ngày mỗi năm với tiếng Anh và tiếng Trung, tuyển thêm phiên dịch để ban đêm không bị ngắt. Cơ quan này cho biết tiếng Nhật, tiếng Việt và các tiếng khác sẽ được mở rộng tùy theo nhu cầu và kết quả, nên hiện tại an toàn nhất là ghi nhớ tiếng Anh và tiếng Trung là hai ngôn ngữ đã xác nhận có phiên dịch suốt ngày đêm. Khi gọi, điều quan trọng nhất cần nói trước là bạn đang ở đâu.",
      meaning: "Phiên dịch tiếng nước ngoài khi gọi 112",
    },
    ja: {
      prompt: "夜に犯罪被害を受けて112に通報しなければなりません。外国語通訳の支援についての説明として正しいものは?",
      options: [
        "英語と中国語は365日24時間の通訳が支援される",
        "通訳は平日の昼間だけ可能である",
        "すべての言語が24時間支援される",
        "通訳サービスはなく、韓国語でしか通報できない",
      ],
      explanation:
        "警察庁は2024年3月18日から、112通報の外国語通訳サービスを英語・中国語について365日24時間に拡大しました。通訳要員を追加採用し、夜間も途切れないようにした措置です。日本語・ベトナム語などは需要と成果を見ながら拡大する計画だと明らかにしているので、現時点では24時間の支援が確認されている言語は英語・中国語だと覚えておくのが安全です。通報するときは、まず今いる場所を言うことが最も重要です。",
      meaning: "112通報時に受けられる外国語通訳",
    },
    zh: {
      prompt: "你在夜间遭遇犯罪侵害,需要报警打112。关于外语通译支援,哪项说明正确?",
      options: [
        "英语和汉语提供365天24小时通译",
        "通译只在工作日白天提供",
        "所有语言都提供24小时支援",
        "没有通译服务,只能用韩语报警",
      ],
      explanation:
        "自2024年3月18日起,警察厅将112报警的外语通译服务在英语·汉语上扩大到365天24小时,并增聘通译人员使夜间不中断。警方表示日语、越南语等将视需求和成效继续扩大,所以目前最稳妥的记法是:已确认全天候支援的语言是英语和汉语。报警时,最重要的是先说出你现在所在的位置。",
      meaning: "拨打112时可获得的外语通译",
    },
  },
  {
    id: "damunhwa-senteo",
    category: "education",
    difficulty: "normal",
    term: "다문화가족지원센터",
    reading: {
      en: "damunhwa-gajok-jiwon-senteo (multicultural family support center)",
      vi: "damunhwa-gajok-jiwon-senteo (trung tâm hỗ trợ gia đình đa văn hóa)",
      ja: "タムンファカジョクチウォンセント(多文化家族支援センター)",
      zh: "damunhwa-gajok-jiwon-senteo(多文化家庭支援中心)",
    },
    answer: 2,
    sources: [
      "다문화가족지원법 제12조(다문화가족지원센터의 설치·운영 등)",
      "https://www.law.go.kr/법령/다문화가족지원법",
    ],
    ko: {
      prompt: "“다문화가족지원센터”(가족센터)에서 받을 수 있는 도움은?",
      options: [
        "비자 발급 심사",
        "운전면허 시험 응시",
        "한국어 교육, 통역·번역, 가족 상담 같은 정착 지원",
        "건강보험료 면제 신청",
      ],
      explanation:
        "다문화가족지원법 제12조에 따라 전국 시·군·구에 설치되는 기관으로, 한국어 교육과 통역·번역, 가족 상담, 자녀 학습 지원 같은 정착 서비스를 제공합니다. 많은 지역에서 「가족센터」라는 이름으로 통합 운영되고 있습니다. 비자 심사는 출입국·외국인청, 운전면허는 도로교통공단, 건강보험 관련 신청은 국민건강보험공단이 맡는 일이라 기관이 서로 다릅니다. 무료이거나 매우 저렴한 프로그램이 많으니 가까운 센터를 한 번 찾아보면 좋습니다.",
      meaning: "한국어·상담·통역을 지원하는 정착 지원 기관",
    },
    en: {
      prompt: "What help can you get at a multicultural family support center (family center)?",
      options: [
        "Visa application review",
        "Sitting the driving licence test",
        "Settlement support such as Korean lessons, interpretation and translation, and family counselling",
        "Applying for a health insurance premium exemption",
      ],
      explanation:
        "Established in every city, county and district under Article 12 of the Multicultural Families Support Act, these centers provide settlement services: Korean language classes, interpretation and translation, family counselling, and learning support for children. In many areas they now operate under the combined name ‘family center’. Visa review belongs to immigration offices, driving tests to the Road Traffic Authority, and insurance applications to the National Health Insurance Service — different bodies entirely. Many programs are free or very cheap, so it is worth looking up the nearest one.",
      meaning: "Settlement center for Korean lessons and counselling",
    },
    vi: {
      prompt: "Bạn có thể nhận được sự giúp đỡ nào tại trung tâm hỗ trợ gia đình đa văn hóa (trung tâm gia đình)?",
      options: [
        "Xét duyệt cấp visa",
        "Dự thi lấy giấy phép lái xe",
        "Hỗ trợ định cư như lớp tiếng Hàn, phiên dịch·biên dịch, tư vấn gia đình",
        "Xin miễn phí bảo hiểm y tế",
      ],
      explanation:
        "Theo Điều 12 Luật Hỗ trợ Gia đình Đa văn hóa, các trung tâm này được lập ở mọi thành phố, huyện và quận, cung cấp dịch vụ định cư: lớp tiếng Hàn, phiên dịch và biên dịch, tư vấn gia đình, hỗ trợ học tập cho con. Ở nhiều nơi hiện gộp lại dưới tên “trung tâm gia đình”. Xét visa thuộc cơ quan xuất nhập cảnh, thi lái xe thuộc Công đoàn Giao thông Đường bộ, và việc liên quan bảo hiểm thuộc Cơ quan Bảo hiểm Y tế Quốc gia — hoàn toàn là các cơ quan khác. Nhiều chương trình miễn phí hoặc rất rẻ, nên đáng để tra xem trung tâm gần nhất ở đâu.",
      meaning: "Cơ quan hỗ trợ định cư: tiếng Hàn, tư vấn, phiên dịch",
    },
    ja: {
      prompt: "「다문화가족지원센터」(多文化家族支援センター・家族センター)で受けられる助けは?",
      options: [
        "ビザ発給の審査",
        "運転免許試験の受験",
        "韓国語教育、通訳・翻訳、家族相談のような定着支援",
        "健康保険料の免除申請",
      ],
      explanation:
        "多文化家族支援法第12条により全国の市・郡・区に設置される機関で、韓国語教育と通訳・翻訳、家族相談、子どもの学習支援のような定着サービスを提供します。多くの地域で「家族センター」という名前で統合運営されています。ビザの審査は出入国・外国人庁、運転免許は道路交通公団、健康保険関連の申請は国民健康保険公団が担うので、機関がそれぞれ違います。無料またはとても安いプログラムが多いので、近くのセンターを一度探してみるとよいです。",
      meaning: "韓国語・相談・通訳を支援する定着支援機関",
    },
    zh: {
      prompt: "在「다문화가족지원센터」(多文化家庭支援中心·家庭中心)能获得什么帮助?",
      options: [
        "签证签发审查",
        "参加驾照考试",
        "韩语教育、通译·翻译、家庭咨询等定居支援",
        "申请免除健康保险费",
      ],
      explanation:
        "依《多文化家庭支援法》第12条,该机构设在全国各市·郡·区,提供韩语教育、通译与翻译、家庭咨询、子女学习支援等定居服务。很多地区现已以「家庭中心」的名称整合运营。签证审查由出入境·外国人厅负责,驾照考试由道路交通公团负责,健康保险相关申请由国民健康保险公团负责,机构各不相同。很多项目免费或非常便宜,值得查一下离你最近的中心。",
      meaning: "提供韩语·咨询·通译的定居支援机构",
    },
  },
  {
    id: "hwanseung",
    category: "education",
    difficulty: "hard",
    term: "환승",
    reading: {
      en: "hwanseung (transfer)",
      vi: "hwanseung (chuyển tuyến)",
      ja: "ファンスン(乗り換え)",
      zh: "hwanseung(换乘)",
    },
    answer: 3,
    sources: [
      "서울특별시 통합환승할인제도 안내 — 하차 후 30분 이내, 21시~익일 07시는 60분 이내, 최대 4회(5회 승차)",
      "https://news.seoul.go.kr/traffic/transfer_discount",
    ],
    ko: {
      prompt: "수도권 통합환승할인에서, 밤 11시에 버스를 내린 뒤 지하철로 환승할 수 있는 시간은?",
      options: ["10분 이내", "20분 이내", "30분 이내", "60분 이내"],
      explanation:
        "수도권 통합환승할인은 하차 태그 후 30분 이내에 다음 수단을 타면 적용되지만, 21시부터 다음 날 07시까지의 야간에는 60분으로 늘어납니다. 밤에는 배차 간격이 길어지는 현실을 반영한 것입니다. 환승 할인은 최대 4회(총 5회 승차)까지 가능하고, 반드시 내릴 때도 카드를 태그해야 인정됩니다. 하차 태그를 잊으면 다음 승차에서 환승이 아닌 새 요금으로 계산되니 습관을 들여 두세요.",
      meaning: "하차 후 일정 시간 안에 갈아타며 받는 할인",
    },
    en: {
      prompt: "Under the capital-area integrated transfer discount, if you get off a bus at 11pm, how long do you have to transfer to the subway?",
      options: ["Within 10 minutes", "Within 20 minutes", "Within 30 minutes", "Within 60 minutes"],
      explanation:
        "The discount applies if you board your next service within 30 minutes of tagging off — but between 21:00 and 07:00 the window stretches to 60 minutes, reflecting the longer waits at night. Up to 4 transfers are discounted (5 boardings in total), and it only counts if you tag your card when getting off as well. Forget the exit tag and your next boarding is charged as a new fare rather than a transfer, so make it a habit.",
      meaning: "Discount for transferring within a time window",
    },
    vi: {
      prompt: "Theo chế độ giảm giá chuyển tuyến tích hợp vùng thủ đô, nếu bạn xuống xe buýt lúc 23h thì có bao lâu để chuyển sang tàu điện ngầm?",
      options: ["Trong 10 phút", "Trong 20 phút", "Trong 30 phút", "Trong 60 phút"],
      explanation:
        "Chế độ này áp dụng nếu bạn lên phương tiện tiếp theo trong vòng 30 phút sau khi quẹt thẻ xuống — nhưng từ 21:00 đến 07:00 thì khoảng thời gian nới ra 60 phút, phản ánh thực tế giãn cách chuyến dài hơn vào đêm. Được giảm giá tối đa 4 lần chuyển tuyến (tổng 5 lượt lên xe), và chỉ được tính nếu bạn cũng quẹt thẻ khi xuống. Quên quẹt khi xuống thì lượt lên tiếp theo bị tính như vé mới chứ không phải chuyển tuyến, nên hãy tập thành thói quen.",
      meaning: "Giảm giá khi chuyển tuyến trong khoảng thời gian cho phép",
    },
    ja: {
      prompt: "首都圏統合乗り換え割引で、夜11時にバスを降りたあと地下鉄に乗り換えられる時間は?",
      options: ["10分以内", "20分以内", "30分以内", "60分以内"],
      explanation:
        "首都圏統合乗り換え割引は、下車タグのあと30分以内に次の交通手段に乗れば適用されますが、21時から翌日07時までの夜間は60分に延びます。夜は運行間隔が長くなる現実を反映したものです。乗り換え割引は最大4回(合計5回の乗車)まで可能で、降りるときにも必ずカードをタグしないと認められません。下車タグを忘れると次の乗車が乗り換えではなく新しい運賃として計算されるので、習慣にしておいてください。",
      meaning: "下車後の一定時間内に乗り換えて受ける割引",
    },
    zh: {
      prompt: "在首都圈整合换乘优惠中,晚上11点下公交后,可以在多长时间内换乘地铁?",
      options: ["10分钟内", "20分钟内", "30分钟内", "60分钟内"],
      explanation:
        "首都圈整合换乘优惠的条件是下车刷卡后30分钟内搭乘下一班交通工具,但21时至次日07时的夜间时段延长为60分钟,这是考虑到夜间发车间隔更长的现实。换乘优惠最多可享4次(共5次乘车),而且下车时也必须刷卡才被认定。忘了下车刷卡,下一次乘车就会按新票价而不是换乘计费,所以要养成习惯。",
      meaning: "下车后在规定时间内换乘可享的优惠",
    },
  },
  {
    id: "oegugin-janyeo-chuihak",
    category: "education",
    difficulty: "hard",
    term: "취학",
    reading: {
      en: "chwihak (school enrolment)",
      vi: "chwihak (nhập học)",
      ja: "チュィハク(就学)",
      zh: "chwihak(就学)",
    },
    answer: 2,
    sources: [
      "교육기본법 제8조(의무교육) — 의무교육은 「모든 국민」 대상",
      "초·중등교육법 시행령 제19조(외국인 자녀 등의 입학 및 전학) — 거주사실 확인 서류로 입학·전학 가능",
      "https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=47&ccfNo=3&cciNo=2&cnpClsNo=3",
    ],
    ko: {
      prompt: "외국인 자녀의 한국 초등학교·중학교 취학에 대한 설명으로 맞는 것은?",
      options: [
        "한국 국적이 없으면 입학할 수 없다",
        "입학도 가능하고 의무교육 대상이기도 하다",
        "입학은 가능하지만 법적으로 의무교육 대상은 아니다",
        "국제학교에만 다닐 수 있다",
      ],
      explanation:
        "두 가지를 구분해야 합니다. 의무교육은 교육기본법 제8조에 따라 「모든 국민」을 대상으로 하므로 외국인 자녀는 법적 의무교육 대상이 아닙니다. 그러나 초·중등교육법 시행령 제19조에 따라 보호자가 거주지 학교에 신청하면 입학·전학할 수 있고, 학교는 이를 거부할 수 없습니다. 신청할 때는 외국인등록 사실증명이나 출입국에 관한 사실증명, 또는 임대차계약서·거주사실 인우보증서 같은 거주 확인 서류를 냅니다. 즉 「의무는 아니지만 권리는 보장된다」가 정확한 이해입니다.",
      meaning: "외국인 자녀도 보장되는 학교 입학",
    },
    en: {
      prompt: "Which statement about foreign children enrolling in Korean elementary and middle school is correct?",
      options: [
        "Without Korean nationality they cannot enrol",
        "They can enrol and are also subject to compulsory education",
        "They can enrol, but are not legally subject to compulsory education",
        "They may only attend international schools",
      ],
      explanation:
        "Two things must be kept apart. Compulsory education under Article 8 of the Framework Act on Education applies to ‘all citizens’, so foreign children are not legally within it. But under Article 19 of the Enforcement Decree of the Elementary and Secondary Education Act, a guardian may apply to the local school and enrol or transfer, and the school cannot refuse. The application uses proof of alien registration or immigration records, or residence documents such as a lease or a neighbour’s attestation of residence. In short: not an obligation, but a guaranteed right.",
      meaning: "School enrolment guaranteed for foreign children",
    },
    vi: {
      prompt: "Phát biểu nào về việc con em người nước ngoài nhập học tiểu học và trung học cơ sở ở Hàn Quốc là đúng?",
      options: [
        "Không có quốc tịch Hàn Quốc thì không được nhập học",
        "Vừa được nhập học và cũng thuộc diện giáo dục bắt buộc",
        "Được nhập học, nhưng về mặt pháp lý không thuộc diện giáo dục bắt buộc",
        "Chỉ được học ở trường quốc tế",
      ],
      explanation:
        "Phải phân biệt hai điều. Giáo dục bắt buộc theo Điều 8 Luật Cơ bản về Giáo dục áp dụng cho “mọi công dân”, nên con em người nước ngoài không thuộc diện bắt buộc về mặt pháp lý. Nhưng theo Điều 19 Nghị định thi hành Luật Giáo dục Tiểu học và Trung học, người bảo hộ có thể làm đơn với trường ở nơi cư trú để nhập học hoặc chuyển trường, và trường không được từ chối. Khi làm đơn thì nộp giấy chứng nhận đăng ký người nước ngoài hoặc chứng nhận về xuất nhập cảnh, hoặc giấy tờ xác nhận cư trú như hợp đồng thuê nhà, giấy bảo lãnh xác nhận cư trú của người lân cận. Nói ngắn gọn: không phải nghĩa vụ, nhưng là quyền được bảo đảm.",
      meaning: "Quyền nhập học được bảo đảm cho con em người nước ngoài",
    },
    ja: {
      prompt: "外国人の子どもの韓国の小学校・中学校就学についての説明として正しいものは?",
      options: [
        "韓国国籍がなければ入学できない",
        "入学も可能で、義務教育の対象でもある",
        "入学は可能だが、法的に義務教育の対象ではない",
        "インターナショナルスクールにしか通えない",
      ],
      explanation:
        "二つを区別する必要があります。義務教育は教育基本法第8条により「すべての国民」を対象とするので、外国人の子どもは法的な義務教育の対象ではありません。しかし初・中等教育法施行令第19条により、保護者が居住地の学校に申請すれば入学・転学でき、学校はこれを拒否できません。申請のときは外国人登録事実証明や出入国に関する事実証明、または賃貸借契約書・居住事実の隣人保証書のような居住確認書類を出します。つまり「義務ではないが権利は保障される」が正確な理解です。",
      meaning: "外国人の子どもにも保障される学校入学",
    },
    zh: {
      prompt: "关于外国人子女在韩国就读小学·初中,哪项说明正确?",
      options: [
        "没有韩国国籍就不能入学",
        "既可以入学,也属于义务教育对象",
        "可以入学,但法律上不属于义务教育对象",
        "只能上国际学校",
      ],
      explanation:
        "需要区分两件事。依《教育基本法》第8条,义务教育的对象是「全体国民」,所以外国人子女在法律上不属于义务教育对象。但依《初·中等教育法施行令》第19条,监护人向居住地学校提出申请即可入学或转学,学校不得拒绝。申请时提交外国人登录事实证明或出入境事实证明,或租赁合同、邻人居住事实保证书等居住证明材料。简而言之:不是义务,但权利受到保障。",
      meaning: "外国人子女同样得到保障的入学权",
    },
  },
  {
    id: "sahoetonghap-program",
    category: "education",
    difficulty: "hard",
    term: "사회통합프로그램",
    reading: {
      en: "sahoetonghap peurogeuraem (KIIP)",
      vi: "sahoetonghap peurogeuraem (KIIP)",
      ja: "サフェトンハプ プログラム(社会統合プログラム・KIIP)",
      zh: "sahoetonghap peurogeuraem(社会统合项目·KIIP)",
    },
    answer: 1,
    sources: [
      "국적법 시행령 제4조의2 제1항 단서·국적법 시행규칙 제4조 — 사회통합프로그램 이수자는 귀화적격심사의 종합평가 면제, 이수자 중 종합평가 60점 이상 득점자는 면접심사도 면제",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1770&ccfNo=2&cciNo=2&cnpClsNo=2",
    ],
    ko: {
      prompt: "법무부 “사회통합프로그램”(KIIP)을 이수하면 귀화 절차에서 받는 혜택은?",
      options: [
        "귀화 요건인 체류 기간이 절반으로 줄어든다",
        "귀화적격심사의 종합평가가 면제되고, 종합평가에서 60점 이상을 받으면 면접심사도 면제된다",
        "귀화 신청 수수료가 면제된다",
        "아무 혜택도 없고 수료증만 받는다",
      ],
      explanation:
        "국적법 시행령 제4조의2와 시행규칙 제4조에 따라 사회통합프로그램 이수자는 귀화적격심사의 종합평가가 면제되고, 이수자 중 종합평가에서 60점 이상을 받은 사람은 면접심사까지 면제됩니다. 한국어와 한국 사회 이해를 단계별로 배우는 과정이라, 귀화뿐 아니라 영주자격 신청에서도 활용됩니다. 다만 체류 기간 요건 자체가 줄어드는 것은 아니며, 수수료 면제와도 관계가 없습니다. 신청은 사회통합정보망에서 하고, 사전평가 결과에 따라 시작 단계가 정해집니다.",
      meaning: "한국어·사회 이해를 배우는 법무부 교육 과정",
    },
    en: {
      prompt: "What do you gain in the naturalisation process by completing the Ministry of Justice’s ‘KIIP’ (Korea Immigration and Integration Program)?",
      options: [
        "The required residence period for naturalisation is halved",
        "The comprehensive assessment is waived, and scoring 60 or more on it also waives the interview",
        "The naturalisation application fee is waived",
        "No benefit at all — you just get a certificate",
      ],
      explanation:
        "Under Article 4-2 of the Nationality Act Enforcement Decree and Article 4 of its Enforcement Rule, those who complete KIIP are exempt from the comprehensive assessment in the naturalisation eligibility screening, and completers who score 60 or more on that assessment are additionally exempt from the interview. Because the course teaches Korean and Korean society in stages, it is also used in permanent-residency applications. It does not, however, shorten the residence requirement itself, and has nothing to do with fees. You apply through the Social Integration Information Net, and a placement test determines which stage you start at.",
      meaning: "Ministry of Justice course on Korean language and society",
    },
    vi: {
      prompt: "Hoàn thành “사회통합프로그램” (KIIP) của Bộ Tư pháp thì được lợi gì trong quy trình nhập tịch?",
      options: [
        "Thời gian lưu trú yêu cầu để nhập tịch giảm một nửa",
        "Được miễn kỳ đánh giá tổng hợp, và nếu đạt 60 điểm trở lên ở kỳ đánh giá đó thì được miễn cả phỏng vấn",
        "Được miễn phí hồ sơ xin nhập tịch",
        "Không có lợi gì, chỉ nhận chứng chỉ",
      ],
      explanation:
        "Theo Điều 4-2 Nghị định thi hành Luật Quốc tịch và Điều 4 Quy tắc thi hành, người hoàn thành KIIP được miễn kỳ đánh giá tổng hợp trong thẩm định điều kiện nhập tịch, và người đã hoàn thành mà đạt 60 điểm trở lên ở kỳ đánh giá đó còn được miễn cả phỏng vấn. Vì khóa học dạy tiếng Hàn và hiểu biết xã hội Hàn Quốc theo từng cấp, nó cũng được dùng khi xin thường trú. Tuy nhiên nó không làm giảm chính yêu cầu về thời gian lưu trú, và cũng không liên quan đến phí. Bạn đăng ký qua Mạng Thông tin Hòa nhập Xã hội, và bài kiểm tra đầu vào quyết định bạn bắt đầu từ cấp nào.",
      meaning: "Khóa học của Bộ Tư pháp về tiếng Hàn và xã hội",
    },
    ja: {
      prompt: "法務部の「사회통합프로그램」(社会統合プログラム・KIIP)を修了すると、帰化の手続きで受けられる恩恵は?",
      options: [
        "帰化の要件である滞在期間が半分に減る",
        "帰化適格審査の総合評価が免除され、総合評価で60点以上を取れば面接審査も免除される",
        "帰化申請の手数料が免除される",
        "何の恩恵もなく修了証だけもらえる",
      ],
      explanation:
        "国籍法施行令第4条の2と施行規則第4条により、社会統合プログラムの修了者は帰化適格審査の総合評価が免除され、修了者のうち総合評価で60点以上を取った人は面接審査まで免除されます。韓国語と韓国社会の理解を段階別に学ぶ課程なので、帰化だけでなく永住資格の申請でも活用されます。ただし滞在期間の要件そのものが減るわけではなく、手数料の免除とも関係ありません。申請は社会統合情報網で行い、事前評価の結果によって開始する段階が決まります。",
      meaning: "韓国語と社会理解を学ぶ法務部の教育課程",
    },
    zh: {
      prompt: "修完法务部的「사회통합프로그램」(社会统合项目·KIIP),在归化程序中能得到什么好处?",
      options: [
        "归化所需的居留期限减半",
        "免除归化适格审查中的综合评价,综合评价达60分以上还可免除面试审查",
        "免除归化申请手续费",
        "没有任何好处,只拿一张结业证",
      ],
      explanation:
        "依《国籍法施行令》第4条之2和《施行规则》第4条,修完社会统合项目者可免除归化适格审查中的综合评价;修完者中综合评价达60分以上的,还可一并免除面试审查。由于该课程按阶段教授韩语和韩国社会常识,申请永居资格时也会用到。不过它并不减少居留期限这一要件本身,也与手续费无关。报名在社会统合信息网进行,由事前评价结果决定从哪一阶段开始。",
      meaning: "法务部开设的韩语与社会理解课程",
    },
  },
];
