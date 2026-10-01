import type { QuizQuestion } from "./types";

/**
 * 주거·부동산 12문제.
 * 수치·기한은 2026년 10월 기준으로 공식 출처를 확인했고 sources에 남겼다.
 * 확인되지 않은 수치(HUG 전세보증금반환보증 한도·보증료율, 지자체별 중개보수 요율 등)는
 * 일부러 출제하지 않았다.
 */
export const HOUSING_QUESTIONS: QuizQuestion[] = [
  {
    id: "gwanribi",
    category: "housing",
    difficulty: "easy",
    term: "관리비",
    reading: {
      en: "gwanribi (maintenance fee)",
      vi: "gwanribi (phí quản lý)",
      ja: "クァンリビ(管理費)",
      zh: "gwanribi(管理费)",
    },
    answer: 2,
    sources: [
      "공동주택관리법 제23조(관리비 등의 납부 및 공개 등)",
      "https://www.law.go.kr/법령/공동주택관리법",
    ],
    ko: {
      prompt: "월세 50만원인 방을 구했는데 집주인이 “관리비는 따로 5만원이에요”라고 합니다. 관리비는 무엇일까요?",
      options: [
        "다음 달 월세를 미리 내는 돈",
        "계약이 끝나면 돌려받는 돈",
        "건물 청소·복도 전기·경비 같은 공용 비용",
        "부동산 중개사에게 주는 수수료",
      ],
      explanation:
        "관리비는 건물 공용 부분을 유지하는 데 드는 돈입니다. 복도·계단 전기, 청소, 경비, 승강기 유지비 등이 들어가고 월세와 별개로 매달 냅니다. 보증금처럼 돌려받는 돈이 아니므로, 집을 고를 때는 월세만 보지 말고 월세 + 관리비로 비교해야 실제 부담이 보입니다. 관리비에 수도·인터넷이 포함되는지도 계약 전에 꼭 물어보세요.",
      meaning: "건물 공용 부분 유지에 쓰는 매월 비용",
    },
    en: {
      prompt: "You found a room at 500,000 won a month, and the landlord says ‘gwanribi is 50,000 extra’. What is gwanribi?",
      options: [
        "Next month’s rent paid in advance",
        "Money refunded when the contract ends",
        "Shared costs like cleaning, hallway electricity and security",
        "The fee paid to the real-estate agent",
      ],
      explanation:
        "Gwanribi covers the upkeep of the building’s shared parts: hallway and stairway lighting, cleaning, security, lift maintenance. You pay it monthly on top of rent, and unlike a deposit it is never refunded. So when comparing places, compare rent plus maintenance fee, not rent alone — and ask before signing whether water and internet are included in it.",
      meaning: "Monthly fee for shared building upkeep",
    },
    vi: {
      prompt: "Bạn tìm được phòng giá 500.000 won/tháng, chủ nhà nói “phí quản lý thu riêng 50.000 won”. Phí quản lý là gì?",
      options: [
        "Tiền thuê tháng sau trả trước",
        "Tiền được hoàn lại khi kết thúc hợp đồng",
        "Chi phí dùng chung như dọn vệ sinh, điện hành lang, bảo vệ",
        "Phí trả cho công ty bất động sản",
      ],
      explanation:
        "Phí quản lý là tiền duy trì phần dùng chung của tòa nhà: điện hành lang và cầu thang, dọn vệ sinh, bảo vệ, bảo dưỡng thang máy. Bạn trả hằng tháng, tách khỏi tiền thuê, và khác tiền cọc là không được hoàn lại. Vì vậy khi so sánh nhà, hãy so tiền thuê cộng phí quản lý chứ đừng chỉ xem tiền thuê — và trước khi ký hãy hỏi xem phí đó có bao gồm nước và internet không.",
      meaning: "Phí hằng tháng cho phần dùng chung của tòa nhà",
    },
    ja: {
      prompt: "家賃50万ウォンの部屋を見つけたら、大家さんが「관리비(管理費)は別に5万ウォンです」と言います。管理費とは何でしょう?",
      options: [
        "翌月の家賃を前払いするお金",
        "契約が終わったら返ってくるお金",
        "建物の清掃・廊下の電気・警備などの共用費用",
        "不動産の仲介業者に払う手数料",
      ],
      explanation:
        "管理費は建物の共用部分を維持するためのお金です。廊下や階段の電気、清掃、警備、エレベーターの維持費などが含まれ、家賃とは別に毎月払います。保証金のように返ってくるお金ではないので、部屋を選ぶときは家賃だけでなく家賃+管理費で比べないと実際の負担が見えません。管理費に水道やインターネットが含まれるかも、契約前に必ず聞いてください。",
      meaning: "建物の共用部分の維持に使う毎月の費用",
    },
    zh: {
      prompt: "你找到一间月租50万韩元的房子,房东说「관리비(管理费)另收5万」。管理费是什么?",
      options: [
        "提前支付的下个月房租",
        "合同结束后会退还的钱",
        "楼道清洁、走廊用电、保安等公用费用",
        "付给房产中介的手续费",
      ],
      explanation:
        "管理费是维护楼房公用部分的钱,包括走廊和楼梯用电、清洁、保安、电梯维护等,与房租分开每月缴纳。它不像保证金那样会退还。所以挑房子时要用「房租+管理费」来比较,只看房租看不出真实负担。签约前也一定要问清管理费里是否含水费和网费。",
      meaning: "维护楼房公用部分的每月费用",
    },
  },
  {
    id: "wolse",
    category: "housing",
    difficulty: "easy",
    term: "월세",
    reading: {
      en: "wolse (monthly rent)",
      vi: "wolse (thuê theo tháng)",
      ja: "ウォルセ(月払い賃貸)",
      zh: "wolse(月租)",
    },
    answer: 1,
    sources: [
      "주택임대차보호법 제3조의2(보증금의 회수)",
      "https://www.law.go.kr/법령/주택임대차보호법",
    ],
    ko: {
      prompt: "부동산에서 “보증금 1,000만원 / 월세 60만원”이라고 합니다. 이 구조에 대한 설명으로 맞는 것은?",
      options: [
        "매달 60만원을 내고, 1,000만원도 매년 다시 내야 한다",
        "1,000만원은 맡겨 두는 돈이라 계약이 끝나면 돌려받고, 매달 60만원을 낸다",
        "1,000만원은 중개수수료이고 월세만 집주인에게 간다",
        "1,000만원을 내면 월세는 안 내도 된다",
      ],
      explanation:
        "월세는 보증금을 맡기고 매달 임대료를 내는 방식입니다. 보증금은 집주인에게 빌려주는 돈이 아니라 맡겨 두는 돈이라, 계약이 끝나고 집을 비워 주면 돌려받습니다. 다만 밀린 월세나 집 파손 비용이 있으면 거기서 빼고 줍니다. 보증금이 클수록 월세가 싸지는 교환 관계라, 가진 돈과 매달 낼 수 있는 금액을 함께 보고 정하면 됩니다.",
      meaning: "보증금을 맡기고 매달 임대료를 내는 방식",
    },
    en: {
      prompt: "An agent offers ‘deposit 10 million won / wolse 600,000 won’. Which description is correct?",
      options: [
        "You pay 600,000 a month and the 10 million again every year",
        "The 10 million is held and returned when the contract ends; you pay 600,000 monthly",
        "The 10 million is the agent’s commission and only rent goes to the landlord",
        "Once you pay the 10 million you owe no monthly rent",
      ],
      explanation:
        "Wolse means you leave a deposit and pay rent each month. The deposit is held, not spent: when the contract ends and you move out, you get it back, minus any unpaid rent or damage. A bigger deposit buys lower monthly rent, so the choice comes down to how much cash you can park versus how much you can pay each month.",
      meaning: "Deposit held, rent paid monthly",
    },
    vi: {
      prompt: "Công ty bất động sản báo “tiền cọc 10 triệu won / wolse 600.000 won”. Mô tả nào đúng?",
      options: [
        "Trả 600.000 mỗi tháng và phải trả lại 10 triệu mỗi năm",
        "10 triệu là tiền gửi, hết hợp đồng được trả lại; mỗi tháng trả 600.000",
        "10 triệu là phí trung gian, chỉ tiền thuê mới đến tay chủ nhà",
        "Đóng 10 triệu rồi thì không phải trả tiền thuê tháng",
      ],
      explanation:
        "Wolse là hình thức đặt cọc rồi trả tiền thuê hằng tháng. Tiền cọc là tiền gửi chứ không phải cho chủ nhà, nên khi hết hợp đồng và trả nhà thì bạn nhận lại, chỉ trừ phần tiền thuê còn nợ hoặc hư hỏng. Cọc càng lớn thì tiền thuê hằng tháng càng thấp, nên hãy cân giữa số tiền bạn có thể gửi và số tiền trả được mỗi tháng.",
      meaning: "Đặt cọc rồi trả tiền thuê hằng tháng",
    },
    ja: {
      prompt: "不動産で「保証金1,000万ウォン/월세60万ウォン」と言われました。この仕組みの説明として正しいものは?",
      options: [
        "毎月60万ウォンを払い、1,000万ウォンも毎年また払う",
        "1,000万ウォンは預けるお金なので契約終了時に返ってきて、毎月60万ウォンを払う",
        "1,000万ウォンは仲介手数料で、家賃だけが大家に行く",
        "1,000万ウォンを払えば家賃は払わなくてよい",
      ],
      explanation:
        "월세は保証金を預けて毎月の賃料を払う方式です。保証金は大家に貸すお金ではなく預けるお金なので、契約が終わって部屋を空ければ返ってきます。ただし滞納した家賃や部屋の破損費用があれば、そこから差し引かれます。保証金が大きいほど家賃が安くなる交換関係なので、手元の資金と毎月払える額を合わせて決めればよいです。",
      meaning: "保証金を預けて毎月賃料を払う方式",
    },
    zh: {
      prompt: "中介说「保证金1,000万韩元/월세60万韩元」。关于这种结构,哪项说明正确?",
      options: [
        "每月付60万,1,000万每年还要再付一次",
        "1,000万是押在那里的钱,合同结束时退还;每月付60万",
        "1,000万是中介费,只有月租进房东口袋",
        "交了1,000万就不用再付月租",
      ],
      explanation:
        "월세是先交保证金、再每月付租金的方式。保证金是寄存的钱而不是借给房东的钱,合同结束腾房后会退还,只扣除拖欠的租金或房屋损坏费用。保证金越高月租越低,是一种交换关系,所以要结合手头能拿出的钱和每月能承担的金额来定。",
      meaning: "交保证金后每月付租金的方式",
    },
  },
  {
    id: "bojeunggeum",
    category: "housing",
    difficulty: "easy",
    term: "보증금",
    reading: {
      en: "bojeunggeum (deposit)",
      vi: "bojeunggeum (tiền cọc)",
      ja: "ポジュングム(保証金)",
      zh: "bojeunggeum(保证金)",
    },
    answer: 3,
    sources: [
      "주택임대차보호법 제3조의2·제8조(보증금 중 일정액의 보호)",
      "https://www.law.go.kr/법령/주택임대차보호법",
    ],
    ko: {
      prompt: "계약이 끝나 집을 비워 주려고 합니다. 보증금은 어떻게 될까요?",
      options: [
        "집주인이 가지는 돈이라 돌려받을 수 없다",
        "국가가 보관하다가 돌려준다",
        "중개사무소가 보관하다가 돌려준다",
        "밀린 월세·수리비 등을 뺀 나머지를 집주인이 돌려준다",
      ],
      explanation:
        "보증금은 임차인이 임대인에게 맡기는 돈이고, 집을 비워 주면 돌려받는 것이 원칙입니다. 밀린 월세나 관리비, 임차인 책임으로 생긴 파손 수리비가 있으면 거기서 공제됩니다. 그래서 입주할 때 집 상태를 사진으로 남겨 두면 나중에 다툴 일이 줄어듭니다. 돌려받지 못하는 사고를 막기 위한 장치가 확정일자와 대항력인데, 이건 뒤에서 더 다룹니다.",
      meaning: "집주인에게 맡기고 나중에 돌려받는 돈",
    },
    en: {
      prompt: "Your contract is ending and you are moving out. What happens to the deposit?",
      options: [
        "It belongs to the landlord and cannot be recovered",
        "The government holds it and returns it",
        "The agency holds it and returns it",
        "The landlord returns it minus unpaid rent, repairs and the like",
      ],
      explanation:
        "The deposit is money the tenant entrusts to the landlord, and as a rule it comes back once you vacate. Unpaid rent, maintenance fees, and repairs caused by the tenant are deducted from it. Photographing the condition of the place on move-in day saves a lot of argument later. The safeguards against a deposit you can’t get back are the fixed date and opposing power — covered later in this test.",
      meaning: "Money entrusted to the landlord, returned later",
    },
    vi: {
      prompt: "Hợp đồng sắp hết và bạn chuẩn bị dọn đi. Tiền cọc sẽ thế nào?",
      options: [
        "Là tiền của chủ nhà nên không lấy lại được",
        "Nhà nước giữ rồi trả lại",
        "Công ty bất động sản giữ rồi trả lại",
        "Chủ nhà trả lại phần còn lại sau khi trừ tiền thuê nợ, phí sửa chữa",
      ],
      explanation:
        "Tiền cọc là khoản người thuê gửi cho chủ nhà, và về nguyên tắc sẽ được trả lại khi bạn trả nhà. Tiền thuê còn nợ, phí quản lý, và chi phí sửa chữa do người thuê gây ra sẽ bị trừ vào đó. Vì vậy chụp ảnh tình trạng nhà vào ngày nhận nhà sẽ giúp tránh tranh chấp sau này. Hai lá chắn chống việc không lấy lại được cọc là ngày xác định và quyền đối kháng — phần sau của bài kiểm tra sẽ nói rõ hơn.",
      meaning: "Tiền gửi chủ nhà và được trả lại sau",
    },
    ja: {
      prompt: "契約が終わって部屋を空けようとしています。保証金はどうなるでしょう?",
      options: [
        "大家のものになるお金なので返してもらえない",
        "国が保管していて返してくれる",
        "仲介事務所が保管していて返してくれる",
        "滞納した家賃や修理費などを差し引いた残りを大家が返す",
      ],
      explanation:
        "保証金は賃借人が賃貸人に預けるお金で、部屋を空ければ返ってくるのが原則です。滞納した家賃や管理費、賃借人の責任で生じた破損の修理費があれば、そこから差し引かれます。入居するときに部屋の状態を写真に残しておくと、あとで争いになることが減ります。返してもらえない事故を防ぐ仕組みが確定日付と対抗力ですが、これは後ろの問題で詳しく扱います。",
      meaning: "大家に預けてあとで返してもらうお金",
    },
    zh: {
      prompt: "合同到期要搬走了。保证金会怎样?",
      options: [
        "是房东的钱,拿不回来",
        "由国家保管后退还",
        "由中介事务所保管后退还",
        "房东扣除拖欠租金、维修费等后把余额退还",
      ],
      explanation:
        "保证金是承租人寄存给房东的钱,腾房后原则上会退还。拖欠的租金、管理费,以及承租人造成的损坏维修费会从中扣除。因此入住当天把房屋状态拍照留存,日后能少很多争执。防止拿不回保证金的两道防线是确定日期和对抗力,本测试后面的题会讲到。",
      meaning: "寄存给房东、日后退还的钱",
    },
  },
  {
    id: "wonrum",
    category: "housing",
    difficulty: "easy",
    term: "원룸",
    reading: {
      en: "wonrum (one-room studio)",
      vi: "wonrum (phòng studio)",
      ja: "ウォンルム(ワンルーム)",
      zh: "wonrum(单间/一居室)",
    },
    answer: 0,
    sources: [
      "건축법 시행령 제3조의5 별표1(용도별 건축물의 종류) — 단독주택·공동주택 분류",
      "https://www.law.go.kr/법령/건축법시행령",
    ],
    ko: {
      prompt: "집을 찾다 보면 “원룸”, “투룸”이라는 말이 자주 나옵니다. 「원룸」은 어떤 집일까요?",
      options: [
        "방·거실·부엌이 하나의 공간으로 합쳐진 작은 집",
        "방이 하나이고 거실과 부엌이 따로 있는 집",
        "한 사람만 계약할 수 있는 1인 전용 아파트",
        "건물 전체에 방이 하나뿐인 단독주택",
      ],
      explanation:
        "원룸은 잠자는 공간과 거실·부엌이 벽으로 나뉘지 않고 한 공간에 있는 집을 말합니다. 법에 정해진 용어가 아니라 시장에서 쓰는 말이어서, 같은 원룸이라도 분리형(부엌만 살짝 나뉜 형태)처럼 종류가 여러 가지입니다. 「투룸」은 방이 둘이거나 방 하나에 거실이 따로 있는 집을 가리킵니다. 광고의 말만 믿지 말고 직접 보고 구조를 확인하세요.",
      meaning: "방과 거실·부엌이 한 공간인 작은 집",
    },
    en: {
      prompt: "House hunting, you keep seeing ‘wonrum’ and ‘turum’. What is a wonrum?",
      options: [
        "A small home where the sleeping area, living space and kitchen share one room",
        "A home with one bedroom plus a separate living room and kitchen",
        "A one-person-only apartment that just one tenant may sign for",
        "A detached house with only one room in the entire building",
      ],
      explanation:
        "A wonrum is a place where the sleeping area, living space and kitchen are not divided by walls but sit in a single room. It is market vocabulary rather than a legal term, so wonrums vary — some are ‘separated type’, with the kitchen partly walled off. A turum means two bedrooms, or one bedroom plus a separate living room. Don’t trust the listing wording; go see the layout yourself.",
      meaning: "Studio where room and kitchen share one space",
    },
    vi: {
      prompt: "Khi tìm nhà bạn hay thấy “원룸” và “투룸”. “원룸” là loại nhà thế nào?",
      options: [
        "Căn nhỏ mà chỗ ngủ, phòng khách và bếp gộp trong một không gian",
        "Căn có một phòng ngủ, phòng khách và bếp tách riêng",
        "Căn hộ chỉ một người được phép ký hợp đồng",
        "Nhà riêng mà cả tòa chỉ có một phòng",
      ],
      explanation:
        "Wonrum là căn nhà mà chỗ ngủ, chỗ sinh hoạt và bếp không bị tường chia mà nằm trong một không gian. Đây là từ dùng trên thị trường chứ không phải thuật ngữ pháp lý, nên cũng có nhiều kiểu — chẳng hạn loại “phân ly” có bếp được quây lại một phần. “투룸” nghĩa là hai phòng ngủ, hoặc một phòng ngủ cộng phòng khách riêng. Đừng tin chữ trong quảng cáo, hãy đến xem tận mắt cách bố trí.",
      meaning: "Căn nhỏ có phòng và bếp trong một không gian",
    },
    ja: {
      prompt: "家を探すと「원룸」「투룸」という言葉によく出会います。「원룸」はどんな家でしょう?",
      options: [
        "寝る空間・居間・台所が一つの空間にまとまった小さな家",
        "部屋が一つで、居間と台所が別にある家",
        "一人だけが契約できる1人専用マンション",
        "建物全体に部屋が一つしかない一戸建て",
      ],
      explanation:
        "원룸は寝る空間と居間・台所が壁で分かれず一つの空間にある家を指します。法律で定められた用語ではなく市場で使われる言葉なので、同じ원룸でも分離型(台所だけ軽く仕切られた形)などいくつか種類があります。「투룸」は部屋が二つ、または部屋一つに居間が別にある家を指します。広告の言葉だけを信じず、実際に見て間取りを確認してください。",
      meaning: "部屋と居間・台所が一つの空間の小さな家",
    },
    zh: {
      prompt: "找房时常看到「원룸」「투룸」。「원룸」是什么样的房子?",
      options: [
        "睡觉区、起居区和厨房合在一个空间的小户型",
        "有一间卧室,另有独立客厅和厨房的房子",
        "只允许一个人签约的单人专用公寓",
        "整栋楼只有一个房间的独栋住宅",
      ],
      explanation:
        "원룸指睡觉区、起居区和厨房没有墙隔开、集中在一个空间的房子。它不是法律用语而是市场说法,所以同样叫원룸也分好几种,比如「分离型」把厨房稍作隔断。「투룸」指两间卧室,或一间卧室加独立客厅。别只看广告措辞,一定要亲自去看格局。",
      meaning: "房间与厨房在同一空间的小户型",
    },
  },
  {
    id: "jeonse",
    category: "housing",
    difficulty: "normal",
    term: "전세",
    reading: {
      en: "jeonse (lump-sum lease)",
      vi: "jeonse (thuê trả gộp)",
      ja: "チョンセ(チョンセ)",
      zh: "jeonse(全租)",
    },
    answer: 2,
    sources: [
      "주택임대차보호법 제3조·제4조(임대차기간 등)",
      "https://www.law.go.kr/법령/주택임대차보호법",
    ],
    ko: {
      prompt: "“전세 2억”이라는 조건을 보았습니다. 전세에 대한 설명으로 맞는 것은?",
      options: [
        "2억원에 그 집을 사는 것이다",
        "2억원을 2년에 나눠 내는 월세다",
        "큰 보증금을 맡기고 매달 임대료 없이 사는 방식으로, 계약이 끝나면 보증금을 돌려받는다",
        "2억원을 집주인에게 주고 돌려받지 않는 대신 10년간 사는 방식이다",
      ],
      explanation:
        "전세는 큰 금액을 보증금으로 맡기고 매달 임대료 없이 사는 한국 특유의 방식입니다. 집을 사는 것이 아니라 빌리는 것이고, 계약이 끝나면 보증금을 그대로 돌려받습니다. 문제는 돌려받지 못하는 경우인데, 집주인의 빚이 집값보다 많으면 보증금이 위험해집니다. 그래서 계약 전 등기부등본으로 근저당을 확인하고, 계약 후 확정일자와 전입신고로 권리를 지키는 절차가 중요합니다. 주택임대차보호법상 기간을 정하지 않거나 2년 미만으로 정했더라도 임차인은 2년을 주장할 수 있습니다.",
      meaning: "큰 보증금을 맡기고 월세 없이 사는 방식",
    },
    en: {
      prompt: "You see a listing for ‘jeonse 200 million’. Which description is correct?",
      options: [
        "You are buying the place for 200 million won",
        "It is monthly rent of 200 million split over two years",
        "You leave a large deposit and live rent-free, getting the deposit back when the lease ends",
        "You give the landlord 200 million, never get it back, and live there for ten years",
      ],
      explanation:
        "Jeonse is a distinctly Korean arrangement: you hand over a large deposit and pay no monthly rent. You are renting, not buying, and the deposit comes back in full at the end. The danger is when it doesn’t — if the landlord’s debts exceed the value of the property, your deposit is at risk. That is why you check the registry for mortgages before signing, and secure a fixed date and move-in report afterwards. Under the Housing Lease Protection Act, a tenant can insist on two years even if no term or a shorter one was agreed.",
      meaning: "Large deposit, no monthly rent",
    },
    vi: {
      prompt: "Bạn thấy tin “jeonse 200 triệu won”. Mô tả nào đúng?",
      options: [
        "Bạn mua căn đó với giá 200 triệu won",
        "Là tiền thuê tháng 200 triệu chia ra trong hai năm",
        "Đặt một khoản cọc lớn và ở không phải trả tiền thuê tháng, hết hợp đồng nhận lại cọc",
        "Đưa chủ nhà 200 triệu, không lấy lại, bù vào đó được ở mười năm",
      ],
      explanation:
        "Jeonse là hình thức rất đặc trưng của Hàn Quốc: bạn gửi một khoản cọc lớn và không phải trả tiền thuê hằng tháng. Bạn đang thuê chứ không phải mua, và hết hợp đồng thì nhận lại nguyên khoản cọc. Vấn đề là khi không nhận lại được — nếu nợ của chủ nhà lớn hơn giá trị căn nhà, tiền cọc của bạn gặp rủi ro. Vì vậy trước khi ký phải tra sổ đăng ký xem có thế chấp không, sau khi ký phải lấy ngày xác định và khai báo chuyển đến. Theo Luật Bảo hộ Thuê nhà ở, dù không định thời hạn hoặc định dưới hai năm, người thuê vẫn có thể yêu cầu hai năm.",
      meaning: "Cọc lớn, không trả tiền thuê tháng",
    },
    ja: {
      prompt: "「전세2億」という条件を見ました。전세の説明として正しいものは?",
      options: [
        "2億ウォンでその家を買うことである",
        "2億ウォンを2年に分けて払う月払い賃貸である",
        "大きな保証金を預けて毎月の賃料なしで住む方式で、契約が終われば保証金が返ってくる",
        "2億ウォンを大家に渡して返してもらわない代わりに10年間住む方式である",
      ],
      explanation:
        "전세は大きな金額を保証金として預け、毎月の賃料なしで住む韓国独特の方式です。家を買うのではなく借りるのであり、契約が終われば保証金はそのまま返ってきます。問題は返ってこない場合で、大家の借金が家の価値より多いと保証金が危なくなります。だから契約前に登記簿で根抵当を確認し、契約後に確定日付と転入届で権利を守る手順が大切です。住宅賃貸借保護法では期間を定めなかったり2年未満で定めた場合でも、賃借人は2年を主張できます。",
      meaning: "大きな保証金を預けて賃料なしで住む方式",
    },
    zh: {
      prompt: "你看到「전세2亿」的房源。关于全租,哪项说明正确?",
      options: [
        "用2亿韩元把这套房买下来",
        "是把2亿分摊到两年里付的月租",
        "交一大笔保证金后免月租居住,合同结束时退还保证金",
        "把2亿给房东且不退还,换取十年居住权",
      ],
      explanation:
        "全租是韩国特有的方式:交一大笔保证金,之后不付月租。这是租而不是买,合同结束时保证金原额退还。问题在于拿不回来的情况——如果房东的债务超过房屋价值,保证金就有风险。所以签约前要查登记簿看有无抵押,签约后要办确定日期和迁入申报来保住权利。依《住宅租赁保护法》,即使没有约定期限或约定不满两年,承租人仍可主张两年。",
      meaning: "交大额保证金、免月租居住的方式",
    },
  },
  {
    id: "hwajeong-ilja",
    category: "housing",
    difficulty: "normal",
    term: "확정일자",
    reading: {
      en: "hwajeong-ilja (fixed date)",
      vi: "hwajeong-ilja (ngày xác định)",
      ja: "ファクチョンイルチャ(確定日付)",
      zh: "hwajeong-ilja(确定日期)",
    },
    answer: 0,
    sources: [
      "주택임대차보호법 제3조의2 제2항(우선변제권)",
      "https://www.law.go.kr/법령/주택임대차보호법",
      "주택 임대차 신고 시 확정일자 자동 부여 — 부동산 거래신고 등에 관한 법률 제6조의5",
      "https://www.law.go.kr/법령/부동산거래신고등에관한법률",
    ],
    ko: {
      prompt: "계약서에 받는 “확정일자”는 왜 필요할까요?",
      options: [
        "집이 경매로 넘어갔을 때 보증금을 다른 채권자보다 먼저 받을 수 있는 순위를 잡기 위해",
        "집주인이 월세를 올리지 못하게 막기 위해",
        "계약서가 위조되지 않았음을 증명하기 위해",
        "중개수수료를 깎기 위해",
      ],
      explanation:
        "확정일자는 “이 계약서가 그날 존재했다”는 것을 공적으로 증명하는 도장입니다. 전입신고로 생기는 대항력과 합쳐지면 우선변제권이 되어, 집이 경매·공매로 넘어갔을 때 보증금을 먼저 받을 순위가 생깁니다. 주민센터·등기소·공증사무소에서 받을 수 있고, 임대차 신고를 하면 확정일자가 자동으로 부여됩니다. 이사하는 날 전입신고와 확정일자를 같이 처리하는 것이 가장 안전합니다.",
      meaning: "보증금 순위를 잡아 주는 공적 날짜 도장",
    },
    en: {
      prompt: "Why do you need a ‘hwajeong-ilja’ (fixed date) on your lease?",
      options: [
        "To secure priority over other creditors for your deposit if the property is auctioned",
        "To stop the landlord from raising the rent",
        "To prove the contract has not been forged",
        "To negotiate down the agency commission",
      ],
      explanation:
        "A fixed date is an official stamp proving the contract existed on that day. Combined with the opposing power you gain by reporting your move-in, it becomes a preferential payment right — a place in the queue for your deposit if the property goes to auction. You can get it at a community service center, registry office or notary, and reporting your lease assigns one automatically. Safest is to handle the move-in report and the fixed date on moving day itself.",
      meaning: "Official date stamp securing deposit priority",
    },
    vi: {
      prompt: "Vì sao cần “확정일자” (ngày xác định) trên hợp đồng thuê?",
      options: [
        "Để có thứ tự ưu tiên nhận tiền cọc trước các chủ nợ khác nếu nhà bị bán đấu giá",
        "Để chủ nhà không được tăng tiền thuê",
        "Để chứng minh hợp đồng không bị làm giả",
        "Để mặc cả giảm phí trung gian",
      ],
      explanation:
        "Ngày xác định là con dấu công chứng minh hợp đồng đã tồn tại vào ngày đó. Kết hợp với quyền đối kháng có được nhờ khai báo chuyển đến, nó thành quyền ưu tiên thanh toán — tức chỗ đứng trong hàng nhận lại tiền cọc nếu nhà bị đấu giá. Bạn có thể xin tại trung tâm hành chính phường, phòng đăng ký hoặc văn phòng công chứng; khai báo hợp đồng thuê thì ngày xác định được cấp tự động. An toàn nhất là làm khai báo chuyển đến và ngày xác định ngay trong ngày dọn vào.",
      meaning: "Dấu ngày công giúp giữ thứ tự nhận cọc",
    },
    ja: {
      prompt: "契約書に受ける「확정일자」(確定日付)はなぜ必要でしょう?",
      options: [
        "家が競売にかかったとき、保証金を他の債権者より先に受け取れる順位を確保するため",
        "大家が家賃を上げられないようにするため",
        "契約書が偽造されていないことを証明するため",
        "仲介手数料を安くしてもらうため",
      ],
      explanation:
        "確定日付は「この契約書がその日に存在した」ことを公的に証明する印です。転入届で生じる対抗力と合わさると優先弁済権になり、家が競売・公売にかかったときに保証金を先に受け取る順位ができます。住民センター・登記所・公証事務所で受けられ、賃貸借の届出をすれば確定日付が自動的に付与されます。引っ越しの日に転入届と確定日付を一緒に済ませるのが一番安全です。",
      meaning: "保証金の順位を確保する公的な日付印",
    },
    zh: {
      prompt: "合同上要办的「확정일자」(确定日期)为什么重要?",
      options: [
        "房子被拍卖时,能排在其他债权人之前优先收回保证金",
        "防止房东涨房租",
        "证明合同没有被伪造",
        "用来砍中介费",
      ],
      explanation:
        "确定日期是公证「这份合同在那一天已存在」的印章。它与迁入申报带来的对抗力结合后,就成为优先受偿权——房子被拍卖、公卖时,你在拿回保证金的队伍里有了位次。可以在社区服务中心、登记所或公证事务所办理,办理租赁申报时还会自动赋予确定日期。最稳妥的做法是搬家当天把迁入申报和确定日期一起办完。",
      meaning: "确保保证金受偿顺位的官方日期章",
    },
  },
  {
    id: "gyeyak-gaesin-yogugwon",
    category: "housing",
    difficulty: "normal",
    term: "계약갱신요구권",
    reading: {
      en: "gyeyak-gaesin-yogugwon (renewal request right)",
      vi: "gyeyak-gaesin-yogugwon (quyền yêu cầu gia hạn)",
      ja: "ケヤクケンシンヨグクォン(契約更新要求権)",
      zh: "gyeyak-gaesin-yogugwon(合同更新请求权)",
    },
    answer: 2,
    sources: [
      "주택임대차보호법 제6조의3(계약갱신 요구 등) — 1회 한정, 존속기간 2년, 만료 6개월 전부터 2개월 전까지",
      "주택임대차보호법 제7조(차임 등의 증감청구권) — 증액은 5% 이내",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=629&ccfNo=4&cciNo=4&cnpClsNo=1",
    ],
    ko: {
      prompt: "2년 계약이 끝나가는데 더 살고 싶습니다. “계약갱신요구권”에 대한 설명으로 맞는 것은?",
      options: [
        "횟수 제한 없이 계속 갱신을 요구할 수 있다",
        "계약이 끝난 뒤에 요구해도 된다",
        "1회에 한해 요구할 수 있고, 갱신되면 2년 더 살 수 있다",
        "집주인이 동의해야만 효력이 생긴다",
      ],
      explanation:
        "임차인은 계약갱신요구권을 1회에 한해 쓸 수 있고, 갱신된 임대차의 존속기간은 2년입니다(주택임대차보호법 제6조의3). 요구는 계약 만료 6개월 전부터 2개월 전까지 사이에 해야 하고, 이 기간을 놓치면 권리를 쓸 수 없습니다. 갱신할 때 집주인이 보증금·월세를 올리더라도 5%를 넘을 수 없습니다(제7조). 문자나 카카오톡처럼 날짜가 남는 방법으로 요구해 두면 나중에 증거가 됩니다.",
      meaning: "임차인이 1회 쓸 수 있는 2년 갱신 권리",
    },
    en: {
      prompt: "Your two-year lease is ending but you want to stay. Which statement about the renewal request right is correct?",
      options: [
        "You can demand renewal as many times as you like",
        "You may demand it after the contract has already ended",
        "You may demand it once, and renewal gives you another two years",
        "It only takes effect if the landlord agrees",
      ],
      explanation:
        "A tenant may exercise the renewal request right once, and the renewed lease runs for two years (Housing Lease Protection Act, Art. 6-3). The request must be made between six months and two months before expiry; miss that window and the right is gone. On renewal the landlord may raise the deposit or rent, but by no more than 5% (Art. 7). Make the request by text or messenger so there is a dated record to point to later.",
      meaning: "A tenant’s one-time right to two more years",
    },
    vi: {
      prompt: "Hợp đồng hai năm sắp hết nhưng bạn muốn ở tiếp. Phát biểu nào về quyền yêu cầu gia hạn là đúng?",
      options: [
        "Có thể yêu cầu gia hạn không giới hạn số lần",
        "Có thể yêu cầu sau khi hợp đồng đã hết hạn",
        "Chỉ được yêu cầu một lần, và khi gia hạn thì được ở thêm hai năm",
        "Chỉ có hiệu lực nếu chủ nhà đồng ý",
      ],
      explanation:
        "Người thuê được dùng quyền yêu cầu gia hạn một lần, và hợp đồng gia hạn có thời hạn hai năm (Luật Bảo hộ Thuê nhà ở, Điều 6-3). Phải yêu cầu trong khoảng từ sáu tháng đến hai tháng trước khi hết hạn; bỏ qua khoảng đó là mất quyền. Khi gia hạn, chủ nhà có thể tăng tiền cọc hoặc tiền thuê nhưng không quá 5% (Điều 7). Hãy yêu cầu bằng tin nhắn hoặc ứng dụng chat để có bằng chứng kèm ngày tháng.",
      meaning: "Quyền dùng một lần để ở thêm hai năm",
    },
    ja: {
      prompt: "2年の契約が終わりそうですが、もっと住みたいです。「계약갱신요구권」(契約更新要求権)の説明として正しいものは?",
      options: [
        "回数制限なく更新を要求し続けられる",
        "契約が終わったあとに要求してもよい",
        "1回に限り要求でき、更新されれば2年さらに住める",
        "大家が同意しなければ効力が生じない",
      ],
      explanation:
        "賃借人は契約更新要求権を1回に限り使えて、更新された賃貸借の存続期間は2年です(住宅賃貸借保護法第6条の3)。要求は契約満了の6か月前から2か月前までの間に行う必要があり、この期間を過ぎると権利を使えません。更新のときに大家が保証金や家賃を上げても5%を超えることはできません(第7条)。メッセージやメッセンジャーのように日付が残る方法で要求しておけば、あとで証拠になります。",
      meaning: "賃借人が1回使える2年更新の権利",
    },
    zh: {
      prompt: "两年合同快到期,但你还想继续住。关于「계약갱신요구권」(合同更新请求权),哪项说明正确?",
      options: [
        "可以无次数限制地反复要求更新",
        "合同到期之后再要求也可以",
        "只能要求一次,更新后可再住两年",
        "只有房东同意才产生效力",
      ],
      explanation:
        "承租人可行使合同更新请求权一次,更新后的租赁存续期为两年(《住宅租赁保护法》第6条之3)。请求须在合同到期前六个月至两个月之间提出,错过这段时间就用不了该权利。更新时房东即便上调保证金或租金,也不得超过5%(第7条)。用短信或聊天软件提出请求,留下带日期的记录,日后就是证据。",
      meaning: "承租人可用一次的两年更新权",
    },
  },
  {
    id: "imdaecha-singo",
    category: "housing",
    difficulty: "normal",
    term: "임대차 신고",
    reading: {
      en: "imdaecha singo (lease report)",
      vi: "imdaecha singo (khai báo hợp đồng thuê)",
      ja: "イムデチャシンゴ(賃貸借の届出)",
      zh: "imdaecha singo(租赁申报)",
    },
    answer: 1,
    sources: [
      "부동산 거래신고 등에 관한 법률 제6조의2·제6조의5 — 보증금 6천만원 초과 또는 월차임 30만원 초과, 계약 체결일부터 30일 이내 신고, 신고 시 확정일자 자동 부여",
      "https://www.law.go.kr/법령/부동산거래신고등에관한법률",
    ],
    ko: {
      prompt: "보증금 1억원, 월세 50만원으로 계약했습니다. 주택 임대차 신고는 언제까지 해야 할까요?",
      options: ["계약일부터 14일 이내", "계약일부터 30일 이내", "입주 후 60일 이내", "신고 의무가 없다"],
      explanation:
        "보증금이 6천만원을 넘거나 월차임이 30만원을 넘는 주택 임대차 계약은 계약 체결일부터 30일 이내에 신고해야 합니다(부동산 거래신고 등에 관한 법률). 신고하면 확정일자가 자동으로 부여되어 따로 받으러 다닐 필요가 없다는 점이 큰 장점입니다. 신고는 보통 임대인·임차인이 함께 하지만 한쪽이 계약서를 가지고 신고해도 되고, 주민센터나 부동산거래관리시스템에서 처리할 수 있습니다.",
      meaning: "일정 금액 이상 임대차 계약의 30일 내 신고",
    },
    en: {
      prompt: "You signed a lease with a 100 million won deposit and 500,000 won monthly rent. By when must the lease be reported?",
      options: [
        "Within 14 days of signing",
        "Within 30 days of signing",
        "Within 60 days of moving in",
        "There is no reporting duty",
      ],
      explanation:
        "A residential lease with a deposit over 60 million won or monthly rent over 300,000 won must be reported within 30 days of signing (Act on Report on Real Estate Transactions). The big advantage is that reporting assigns the fixed date automatically, so you don’t have to go get one separately. Landlord and tenant usually file together, but either party can file with the contract in hand, at a community service center or through the real-estate transaction system online.",
      meaning: "30-day reporting duty for larger leases",
    },
    vi: {
      prompt: "Bạn ký hợp đồng với tiền cọc 100 triệu won và tiền thuê 500.000 won/tháng. Phải khai báo hợp đồng thuê trong thời hạn nào?",
      options: [
        "Trong 14 ngày kể từ ngày ký",
        "Trong 30 ngày kể từ ngày ký",
        "Trong 60 ngày sau khi dọn vào",
        "Không có nghĩa vụ khai báo",
      ],
      explanation:
        "Hợp đồng thuê nhà ở có tiền cọc trên 60 triệu won hoặc tiền thuê tháng trên 300.000 won phải được khai báo trong 30 ngày kể từ ngày ký (Luật về Khai báo Giao dịch Bất động sản). Lợi thế lớn là khi khai báo thì ngày xác định được cấp tự động, bạn không phải đi xin riêng. Thường chủ nhà và người thuê cùng khai, nhưng một bên mang hợp đồng đi khai cũng được, tại trung tâm hành chính phường hoặc qua hệ thống quản lý giao dịch bất động sản.",
      meaning: "Nghĩa vụ khai báo trong 30 ngày với hợp đồng lớn",
    },
    ja: {
      prompt: "保証金1億ウォン、月払い家賃50万ウォンで契約しました。住宅賃貸借の届出はいつまでにするでしょう?",
      options: [
        "契約日から14日以内",
        "契約日から30日以内",
        "入居後60日以内",
        "届出の義務はない",
      ],
      explanation:
        "保証金が6千万ウォンを超える、または月家賃が30万ウォンを超える住宅賃貸借契約は、契約締結日から30日以内に届け出なければなりません(不動産取引申告等に関する法律)。届出をすると確定日付が自動的に付与され、別に受けに行く必要がないのが大きな利点です。届出は通常は賃貸人と賃借人が一緒に行いますが、片方が契約書を持って届け出てもよく、住民センターや不動産取引管理システムで処理できます。",
      meaning: "一定額以上の賃貸借契約の30日内の届出",
    },
    zh: {
      prompt: "你以保证金1亿韩元、月租50万韩元签了合同。住宅租赁申报的期限是?",
      options: [
        "签约日起14天内",
        "签约日起30天内",
        "入住后60天内",
        "没有申报义务",
      ],
      explanation:
        "保证金超过6千万韩元,或月租超过30万韩元的住宅租赁合同,须自签约之日起30天内申报(《不动产交易申报等法律》)。最大的好处是申报后会自动赋予确定日期,不必再单独去办。申报通常由出租人和承租人共同办理,但一方带着合同去办也可以,可在社区服务中心或不动产交易管理系统办理。",
      meaning: "一定金额以上租赁合同的30天申报义务",
    },
  },
  {
    id: "deunggibu-deungbon",
    category: "housing",
    difficulty: "normal",
    term: "등기부등본",
    reading: {
      en: "deunggibu-deungbon (property register)",
      vi: "deunggibu-deungbon (sổ đăng ký bất động sản)",
      ja: "トゥンギブトゥンボン(登記簿謄本)",
      zh: "deunggibu-deungbon(登记簿谨本)",
    },
    answer: 3,
    sources: [
      "부동산등기법 제19조(등기사항증명서의 발급 등)",
      "https://www.law.go.kr/법령/부동산등기법",
      "대법원 인터넷등기소",
      "https://www.iros.go.kr/",
    ],
    ko: {
      prompt: "전세 계약 전에 “등기부등본”을 꼭 확인하라고 합니다. 여기서 무엇을 봐야 할까요?",
      options: [
        "이웃 주민들의 이름과 직업",
        "그 집의 인터넷 속도와 관리 상태",
        "건물이 몇 년에 지어졌는지만",
        "진짜 소유자가 누구인지, 그리고 근저당 같은 빚이 얼마나 잡혀 있는지",
      ],
      explanation:
        "등기부등본은 그 부동산의 공식 기록입니다. 소유자 정보는 갑구, 근저당권·전세권 같은 권리 관계는 을구에 적혀 있습니다. 계약 전에 ① 계약하려는 사람이 등기부상 소유자와 같은지 ② 이미 잡힌 빚(근저당)이 집값에 비해 큰지를 보는 것이 전세사기를 피하는 가장 기본적인 방법입니다. 대법원 인터넷등기소에서 누구나 소액의 수수료로 열람할 수 있고, 계약하는 날 다시 한 번 최신본을 확인하는 것이 안전합니다.",
      meaning: "소유자와 빚을 보여 주는 부동산 공식 기록",
    },
    en: {
      prompt: "Everyone says to check the ‘deunggibu-deungbon’ (property register) before a jeonse contract. What are you looking for?",
      options: [
        "The names and jobs of the neighbours",
        "The internet speed and upkeep of the unit",
        "Only the year the building was built",
        "Who really owns it, and how much debt such as mortgages is registered against it",
      ],
      explanation:
        "The property register is the official record for that property. Ownership appears in section 1, and rights such as mortgages and jeonse rights in section 2. Before signing, check (1) that the person you are contracting with is the registered owner, and (2) whether existing debt is large relative to the property’s value. That is the most basic defence against jeonse fraud. Anyone can view it for a small fee at the Supreme Court’s internet registry, and it is safest to pull a fresh copy again on signing day.",
      meaning: "Official record showing owner and debts",
    },
    vi: {
      prompt: "Ai cũng nói trước khi ký jeonse phải kiểm tra “등기부등본” (sổ đăng ký bất động sản). Bạn cần xem gì ở đó?",
      options: [
        "Tên và nghề nghiệp của những người láng giềng",
        "Tốc độ internet và tình trạng bảo trì của căn nhà",
        "Chỉ năm xây dựng của tòa nhà",
        "Ai thực sự là chủ sở hữu, và có bao nhiêu nợ như thế chấp đang ghi trên đó",
      ],
      explanation:
        "Sổ đăng ký là hồ sơ chính thức của bất động sản đó. Thông tin chủ sở hữu ghi ở phần giáp, các quyền như thế chấp hay quyền jeonse ghi ở phần ất. Trước khi ký, hãy xem (1) người ký với bạn có đúng là chủ sở hữu trên sổ không, và (2) nợ đã ghi có lớn so với giá trị căn nhà không. Đó là cách phòng lừa đảo jeonse cơ bản nhất. Ai cũng có thể tra với phí nhỏ tại cổng đăng ký điện tử của Tòa án Tối cao, và an toàn nhất là lấy bản mới nhất một lần nữa vào ngày ký.",
      meaning: "Hồ sơ chính thức cho biết chủ sở hữu và nợ",
    },
    ja: {
      prompt: "チョンセ契約の前に「등기부등본」(登記簿謄本)を必ず確認しろと言われます。ここで何を見るべきでしょう?",
      options: [
        "近所の住民の名前と職業",
        "その家のインターネット速度と管理状態",
        "建物が何年に建てられたかだけ",
        "本当の所有者が誰か、そして根抵当のような借金がどれだけ付いているか",
      ],
      explanation:
        "登記簿謄本はその不動産の公式な記録です。所有者の情報は甲区、根抵当権やチョンセ権のような権利関係は乙区に書かれています。契約前に①契約しようとしている人が登記簿上の所有者と同じか②すでに付いている借金(根抵当)が家の価値に比べて大きいかを見ることが、チョンセ詐欺を避ける最も基本的な方法です。大法院インターネット登記所で誰でも少額の手数料で閲覧でき、契約する日にもう一度最新のものを確認するのが安全です。",
      meaning: "所有者と借金を示す不動産の公式記録",
    },
    zh: {
      prompt: "大家都说签全租合同前一定要查「등기부등본」(登记簿谨本)。要在上面看什么?",
      options: [
        "邻居们的姓名和职业",
        "这套房的网速和维护状况",
        "只看楼是哪一年建的",
        "真正的所有人是谁,以及上面登记了多少抵押之类的债务",
      ],
      explanation:
        "登记簿谨本是该不动产的官方记录。所有人信息写在甲区,抵押权、全租权等权利关系写在乙区。签约前要看:①与你签约的人是否就是登记簿上的所有人;②已登记的债务相对房价是否过大。这是防范全租诈骗最基本的办法。任何人都可在大法院互联网登记所以少量手续费查阅,签约当天再拉一份最新的更稳妥。",
      meaning: "显示所有人与债务的不动产官方记录",
    },
  },
  {
    id: "jeonip-singo",
    category: "housing",
    difficulty: "hard",
    term: "전입신고",
    reading: {
      en: "jeonip-singo (move-in report)",
      vi: "jeonip-singo (khai báo chuyển đến)",
      ja: "チョニプシンゴ(転入届)",
      zh: "jeonip-singo(迁入申报)",
    },
    answer: 2,
    sources: [
      "출입국관리법 제36조(체류지 변경의 신고) — 외국인은 전입한 날부터 15일 이내",
      "https://www.law.go.kr/법령/출입국관리법",
      "주민등록법 제11조(신고의무자) — 국민의 전입신고는 14일 이내",
      "https://www.law.go.kr/법령/주민등록법",
    ],
    ko: {
      prompt: "외국인등록을 한 외국인이 이사를 했습니다. 체류지 변경신고는 전입한 날부터 며칠 이내에 해야 할까요?",
      options: ["7일", "14일", "15일", "30일"],
      explanation:
        "외국인의 체류지 변경신고 기한은 전입한 날부터 15일 이내입니다(출입국관리법 제36조). 흔히 14일로 알려져 있는데, 14일은 한국 국민의 전입신고 기한(주민등록법 제11조)이라 서로 다른 제도입니다. 외국인은 새 체류지의 시·군·구청이나 출입국·외국인청에 신고할 수 있고, 이 신고가 주거의 대항력과도 이어지므로 이사한 날 바로 처리하는 것이 가장 안전합니다. 기한을 넘기면 과태료가 부과될 수 있습니다.",
      meaning: "외국인이 이사 후 15일 내 하는 체류지 신고",
    },
    en: {
      prompt: "A registered foreign resident has moved house. Within how many days of moving in must the change of residence be reported?",
      options: ["7 days", "14 days", "15 days", "30 days"],
      explanation:
        "For foreign residents the deadline is 15 days from the date of moving in (Immigration Act, Art. 36). It is widely repeated as 14 days, but 14 days is the deadline for Korean nationals’ move-in report under the Resident Registration Act — a different system. Foreigners can report at the new district office or at an immigration office, and since this report also underpins your opposing power as a tenant, it is safest to do it the day you move. Missing the deadline can bring a fine.",
      meaning: "Foreign residents’ 15-day residence report",
    },
    vi: {
      prompt: "Một người nước ngoài đã đăng ký cư trú vừa chuyển nhà. Phải khai báo thay đổi nơi lưu trú trong bao nhiêu ngày kể từ ngày chuyển đến?",
      options: ["7 ngày", "14 ngày", "15 ngày", "30 ngày"],
      explanation:
        "Với người nước ngoài, thời hạn là 15 ngày kể từ ngày chuyển đến (Luật Quản lý Xuất nhập cảnh, Điều 36). Nhiều người vẫn nói là 14 ngày, nhưng 14 ngày là thời hạn khai báo chuyển đến của công dân Hàn Quốc theo Luật Đăng ký Cư dân — hai chế độ khác nhau. Người nước ngoài có thể khai tại ủy ban quận/huyện nơi ở mới hoặc tại cơ quan xuất nhập cảnh, và vì việc khai báo này cũng là nền tảng cho quyền đối kháng của người thuê, an toàn nhất là làm ngay trong ngày dọn đến. Quá hạn có thể bị phạt tiền.",
      meaning: "Khai báo nơi lưu trú trong 15 ngày của người nước ngoài",
    },
    ja: {
      prompt: "外国人登録をした外国人が引っ越しました。滞在地変更の届出は転入した日から何日以内にするでしょう?",
      options: ["7日", "14日", "15日", "30日"],
      explanation:
        "外国人の滞在地変更届の期限は、転入した日から15日以内です(出入国管理法第36条)。よく14日と言われますが、14日は韓国国民の転入届の期限(住民登録法第11条)で、別の制度です。外国人は新しい滞在地の市・郡・区役所や出入国・外国人庁に届け出ることができ、この届出は住まいの対抗力にもつながるので、引っ越した日にすぐ済ませるのが一番安全です。期限を過ぎると過料が課されることがあります。",
      meaning: "外国人が引っ越し後15日内に行う滞在地の届出",
    },
    zh: {
      prompt: "一位已办外国人登录的外国人搬了家。居留地变更申报应在迁入之日起几天内办理?",
      options: ["7天", "14天", "15天", "30天"],
      explanation:
        "外国人的居留地变更申报期限为迁入之日起15天内(《出入境管理法》第36条)。很多人以为是14天,但14天是韩国国民依《居民登录法》第11条办理迁入申报的期限,属于不同制度。外国人可在新居留地的市·郡·区政府或出入境·外国人厅办理,而且这项申报还关系到租房的对抗力,所以搬家当天就办最稳妥。超过期限可能会被罚款。",
      meaning: "外国人搬家后15天内的居留地申报",
    },
  },
  {
    id: "daehangnyeok",
    category: "housing",
    difficulty: "hard",
    term: "대항력",
    reading: {
      en: "daehangnyeok (opposing power)",
      vi: "daehangnyeok (quyền đối kháng)",
      ja: "テハンニョク(対抗力)",
      zh: "daehangnyeok(对抗力)",
    },
    answer: 1,
    sources: [
      "주택임대차보호법 제3조 제1항 — 인도와 주민등록을 마친 때에는 그 다음 날부터 제3자에 대하여 효력이 생긴다",
      "https://www.law.go.kr/법령/주택임대차보호법",
      "주택임대차보호법 제8조·시행령 — 서울특별시 소액임차인 최우선변제: 보증금 1억 6,500만원 이하 중 5,500만원",
    ],
    ko: {
      prompt: "이삿날 입주하고 전입신고까지 마쳤습니다. 임차인의 “대항력”은 언제부터 생길까요?",
      options: [
        "전입신고를 접수한 순간부터",
        "입주와 전입신고를 모두 마친 날의 다음 날 0시부터",
        "확정일자를 받은 날부터",
        "계약서에 서명한 날부터",
      ],
      explanation:
        "주택임대차보호법 제3조 제1항은 주택의 인도와 주민등록을 마친 때에는 “그 다음 날부터” 제3자에 대해 효력이 생긴다고 정합니다. 즉 대항력은 전입신고 당일이 아니라 다음 날 0시에 발생합니다. 이 하루 차이가 중요한 이유는, 집주인이 전입신고한 날에 담보를 새로 설정하면 그 담보가 임차인보다 앞설 수 있기 때문입니다. 그래서 잔금과 전입신고를 같은 날 처리하고, 계약서에 이 기간 중 담보를 설정하지 않는다는 특약을 넣는 방법이 쓰입니다. 참고로 서울에서는 보증금 1억 6,500만원 이하인 임차인은 5,500만원까지 다른 담보권자보다 먼저 받을 수 있습니다.",
      meaning: "임차인 권리가 제3자에게 효력을 갖는 힘",
    },
    en: {
      prompt: "You moved in on moving day and filed your move-in report. When does a tenant’s ‘daehangnyeok’ (opposing power) begin?",
      options: [
        "The moment the move-in report is accepted",
        "From midnight on the day after both move-in and the report are completed",
        "From the day you obtain the fixed date",
        "From the day you signed the contract",
      ],
      explanation:
        "Article 3(1) of the Housing Lease Protection Act says that once the home has been handed over and resident registration completed, the lease takes effect against third parties ‘from the following day’. So opposing power starts at midnight the next day, not on the day you file. That one-day gap matters: if the landlord registers a new security interest on the very day you file, that interest can rank ahead of you. Hence the practice of paying the balance and filing the report the same day, and writing a special clause barring new security interests during that window. For reference, in Seoul a tenant with a deposit of 165 million won or less can recover up to 55 million won ahead of other secured creditors.",
      meaning: "Tenant’s right made effective against third parties",
    },
    vi: {
      prompt: "Bạn dọn vào đúng ngày hẹn và đã khai báo chuyển đến. “대항력” (quyền đối kháng) của người thuê phát sinh từ khi nào?",
      options: [
        "Ngay khi khai báo chuyển đến được tiếp nhận",
        "Từ 0 giờ ngày hôm sau, sau khi hoàn tất cả việc dọn vào và khai báo",
        "Từ ngày lấy được ngày xác định",
        "Từ ngày ký hợp đồng",
      ],
      explanation:
        "Điều 3 khoản 1 Luật Bảo hộ Thuê nhà ở quy định rằng khi đã nhận nhà và hoàn tất đăng ký cư dân thì hợp đồng có hiệu lực với người thứ ba “từ ngày hôm sau”. Nghĩa là quyền đối kháng phát sinh lúc 0 giờ ngày kế tiếp, không phải ngay ngày khai báo. Khoảng cách một ngày này quan trọng: nếu chủ nhà đăng ký một quyền bảo đảm mới đúng vào ngày bạn khai báo, quyền đó có thể xếp trước bạn. Vì vậy người ta thường thanh toán phần còn lại và khai báo trong cùng một ngày, đồng thời ghi điều khoản đặc biệt cấm thiết lập bảo đảm mới trong khoảng thời gian đó. Tham khảo: tại Seoul, người thuê có tiền cọc từ 165 triệu won trở xuống có thể thu hồi tới 55 triệu won trước các chủ nợ có bảo đảm khác.",
      meaning: "Sức mạnh để quyền người thuê có hiệu lực với bên thứ ba",
    },
    ja: {
      prompt: "引っ越しの日に入居し、転入届まで済ませました。賃借人の「대항력」(対抗力)はいつから生じるでしょう?",
      options: [
        "転入届を受け付けた瞬間から",
        "入居と転入届の両方を終えた日の翌日0時から",
        "確定日付を受けた日から",
        "契約書に署名した日から",
      ],
      explanation:
        "住宅賃貸借保護法第3条第1項は、住宅の引渡しと住民登録を終えたときは「その翌日から」第三者に対して効力が生じると定めています。つまり対抗力は転入届の当日ではなく、翌日0時に発生します。この1日の差が重要なのは、大家が転入届を出した日に新しく担保を設定すると、その担保が賃借人より先になりうるからです。そのため残金の支払いと転入届を同じ日に処理し、契約書にこの期間中は担保を設定しないという特約を入れる方法が使われます。参考に、ソウルでは保証金1億6,500万ウォン以下の賃借人は5,500万ウォンまで他の担保権者より先に受け取れます。",
      meaning: "賃借人の権利が第三者に効力を持つ力",
    },
    zh: {
      prompt: "你在搬家当天入住并办完了迁入申报。承租人的「대항력」(对抗力)从什么时候产生?",
      options: [
        "迁入申报被受理的那一刻起",
        "完成入住和申报当天的次日0时起",
        "取得确定日期之日起",
        "签署合同之日起",
      ],
      explanation:
        "《住宅租赁保护法》第3条第1款规定,完成房屋交付和居民登录后,租赁自「次日起」对第三人产生效力。也就是说,对抗力在次日0时生效,而不是申报当天。这一天之差很关键:如果房东就在你申报那天新设担保,该担保可能排在你前面。所以实务上会把付尾款和办迁入申报安排在同一天,并在合同中加入这段期间内不得设定新担保的特别约定。顺带一提,在首尔,保证金在1亿6,500万韩元以下的承租人,可在其他担保权人之前优先取回最多5,500万韩元。",
      meaning: "使承租人权利对第三人生效的效力",
    },
  },
  {
    id: "mukshijeok-gaesin",
    category: "housing",
    difficulty: "hard",
    term: "묵시적 갱신",
    reading: {
      en: "mukshijeok gaesin (implied renewal)",
      vi: "mukshijeok gaesin (gia hạn mặc nhiên)",
      ja: "ムクシジョク ケンシン(黙示の更新)",
      zh: "mukshijeok gaesin(默示更新)",
    },
    answer: 2,
    sources: [
      "주택임대차보호법 제6조(계약의 갱신) — 존속기간 2년",
      "주택임대차보호법 제6조의2 제2항 — 임차인의 해지는 임대인이 통지를 받은 날부터 3개월이 지나면 효력 발생",
      "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=629&ccfNo=4&cciNo=4&cnpClsNo=1",
    ],
    ko: {
      prompt: "아무도 말을 꺼내지 않아 계약이 자동으로 2년 더 이어졌습니다(묵시적 갱신). 이때 임차인이 나가겠다고 통지하면 효력은 언제 생길까요?",
      options: [
        "통지한 즉시 계약이 끝난다",
        "통지한 날부터 1개월이 지나면",
        "임대인이 통지를 받은 날부터 3개월이 지나면",
        "남은 2년을 모두 채워야 한다",
      ],
      explanation:
        "임대인이 만료 6개월 전부터 2개월 전까지 갱신 거절이나 조건 변경을 통지하지 않으면 계약은 같은 조건으로 갱신되고 존속기간은 2년이 됩니다(주택임대차보호법 제6조). 다만 묵시적 갱신에서 임차인은 언제든 해지를 통지할 수 있고, 임대인이 통지를 받은 날부터 3개월이 지나면 효력이 생깁니다(제6조의2). 즉 2년에 묶이지 않고 3개월 전에 알리면 나갈 수 있다는 뜻입니다. 반대로 임차인이 차임을 2기분 연체하는 등 의무를 크게 위반한 경우에는 묵시적 갱신이 인정되지 않습니다.",
      meaning: "자동 연장된 계약을 3개월 통지로 끝내는 구조",
    },
    en: {
      prompt: "Nobody said anything, so your lease rolled on for another two years (implied renewal). If the tenant then gives notice to leave, when does it take effect?",
      options: [
        "The contract ends immediately on notice",
        "One month after the day notice was given",
        "Three months after the landlord receives the notice",
        "You must serve out the remaining two years",
      ],
      explanation:
        "If the landlord gives no notice of refusal or changed terms between six and two months before expiry, the lease renews on the same terms for two years (Housing Lease Protection Act, Art. 6). But under implied renewal the tenant may give notice at any time, and it takes effect three months after the landlord receives it (Art. 6-2). In other words you are not locked into two years — three months’ notice is enough. Conversely, implied renewal does not apply if the tenant has seriously breached their duties, such as falling two rent periods behind.",
      meaning: "Auto-renewed lease endable on three months’ notice",
    },
    vi: {
      prompt: "Không ai nói gì nên hợp đồng tự kéo dài thêm hai năm (gia hạn mặc nhiên). Nếu người thuê thông báo muốn dọn đi thì hiệu lực phát sinh khi nào?",
      options: [
        "Hợp đồng kết thúc ngay khi thông báo",
        "Một tháng sau ngày thông báo",
        "Ba tháng sau ngày chủ nhà nhận được thông báo",
        "Phải ở hết hai năm còn lại",
      ],
      explanation:
        "Nếu chủ nhà không thông báo từ chối gia hạn hay thay đổi điều kiện trong khoảng sáu tháng đến hai tháng trước khi hết hạn, hợp đồng được gia hạn với cùng điều kiện và thời hạn là hai năm (Luật Bảo hộ Thuê nhà ở, Điều 6). Tuy nhiên trong gia hạn mặc nhiên, người thuê có thể thông báo chấm dứt bất cứ lúc nào, và hiệu lực phát sinh ba tháng sau khi chủ nhà nhận được thông báo (Điều 6-2). Nghĩa là bạn không bị khóa trong hai năm — báo trước ba tháng là đủ. Ngược lại, gia hạn mặc nhiên không được công nhận nếu người thuê vi phạm nghĩa vụ nghiêm trọng, chẳng hạn nợ tiền thuê đến hai kỳ.",
      meaning: "Hợp đồng tự gia hạn, chấm dứt bằng thông báo ba tháng",
    },
    ja: {
      prompt: "誰も何も言わないまま契約が自動的に2年延びました(黙示の更新)。このとき賃借人が出ていくと通知したら、効力はいつ生じるでしょう?",
      options: [
        "通知した時点で即契約が終わる",
        "通知した日から1か月が過ぎたとき",
        "賃貸人が通知を受けた日から3か月が過ぎたとき",
        "残りの2年をすべて満了しなければならない",
      ],
      explanation:
        "賃貸人が満了の6か月前から2か月前までに更新拒絶や条件変更を通知しなければ、契約は同じ条件で更新され存続期間は2年になります(住宅賃貸借保護法第6条)。ただし黙示の更新では賃借人はいつでも解約を通知でき、賃貸人が通知を受けた日から3か月が過ぎると効力が生じます(第6条の2)。つまり2年に縛られず、3か月前に知らせれば出ていけるということです。逆に賃借人が家賃を2期分滞納するなど義務を著しく違反した場合は、黙示の更新は認められません。",
      meaning: "自動延長された契約を3か月の通知で終える仕組み",
    },
    zh: {
      prompt: "谁都没提,合同就自动又延长了两年(默示更新)。此时承租人通知要搬走,效力何时产生?",
      options: [
        "通知的那一刻合同即终止",
        "通知之日起满一个月时",
        "出租人收到通知之日起满三个月时",
        "必须住满剩下的两年",
      ],
      explanation:
        "如果出租人在到期前六个月至两个月之间没有通知拒绝更新或变更条件,合同按原条件更新,存续期为两年(《住宅租赁保护法》第6条)。但在默示更新下,承租人随时可以通知解除,出租人收到通知之日起满三个月生效(第6条之2)。也就是说你并没有被两年锁住,提前三个月告知即可搬走。反之,若承租人严重违反义务,例如拖欠两期租金,则不认可默示更新。",
      meaning: "自动延长的合同可凭三个月通知终止",
    },
  },
];
