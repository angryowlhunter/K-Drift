const path = require("node:path");
const fs = require("node:fs");
const pptxgen = require("pptxgenjs");

const SHOTS = path.join(__dirname, "screenshots");
const img = (n) => path.join(SHOTS, n);
function pngSize(file) { const b = fs.readFileSync(file).subarray(16, 24); return { w: b.readUInt32BE(0), h: b.readUInt32BE(4) }; }

const NAVY = "1E2761", INK = "1E1B4B", INDIGO = "4F46E5", LIGHT = "F6F7FB";
const MUTED = "64748B", WHITE = "FFFFFF", LINE = "E2E8F0", GREEN = "16A34A", CARD = "FFFFFF";
const HEAD = "맑은 고딕", BODY = "맑은 고딕";

const p = new pptxgen();
p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
p.layout = "W";
p.author = "K-Drift";
p.title = "K-Drift 서비스 & 기능 소개";

const W = 13.333, H = 7.5;
const shadow = () => ({ type: "outer", color: "000000", blur: 9, offset: 3, angle: 135, opacity: 0.16 });

function screenshot(slide, file, box) {
  const s = pngSize(file); const r = s.w / s.h;
  let w = box.w, h = w / r; if (h > box.h) { h = box.h; w = h * r; }
  const x = box.x + (box.w - w) / 2, y = box.y + (box.h - h) / 2;
  slide.addShape(p.shapes.ROUNDED_RECTANGLE, { x: x - 0.08, y: y - 0.08, w: w + 0.16, h: h + 0.16, fill: { color: WHITE }, line: { color: LINE, width: 1 }, rectRadius: 0.06, shadow: shadow() });
  slide.addImage({ path: file, x, y, w, h });
}
function kicker(slide, num, text, color = INDIGO) {
  slide.addShape(p.shapes.OVAL, { x: 0.7, y: 0.62, w: 0.42, h: 0.42, fill: { color } });
  slide.addText(String(num), { x: 0.7, y: 0.62, w: 0.42, h: 0.42, align: "center", valign: "middle", color: WHITE, bold: true, fontFace: HEAD, fontSize: 16 });
  slide.addText(text, { x: 1.25, y: 0.6, w: 11, h: 0.5, color: MUTED, fontFace: BODY, fontSize: 13, bold: true, charSpacing: 2, valign: "middle" });
}
function title(slide, text, opts = {}) {
  slide.addText(text, { x: 0.7, y: 1.05, w: 12.2, h: 0.9, color: opts.color || INK, bold: true, fontFace: HEAD, fontSize: opts.size || 28, valign: "top" });
}
function caption(slide, x, y, w, head, lines, accent = INDIGO) {
  slide.addShape(p.shapes.RECTANGLE, { x, y: y + 0.05, w: 0.08, h: 0.45, fill: { color: accent } });
  slide.addText(head, { x: x + 0.25, y, w, h: 0.5, color: INK, bold: true, fontFace: HEAD, fontSize: 18 });
  slide.addText(lines.map((t) => ({ text: t, options: { bullet: { code: "2022" }, color: "334155", fontFace: BODY, fontSize: 14, breakLine: true, paraSpaceAfter: 9 } })),
    { x: x + 0.25, y: y + 0.6, w, h: lines.length * 0.62 });
}

// ════════ 1. TITLE ════════
{
  const s = p.addSlide(); s.background = { color: NAVY };
  s.addShape(p.shapes.OVAL, { x: 0.9, y: 0.85, w: 0.9, h: 0.9, fill: { color: INDIGO } });
  s.addText("K", { x: 0.9, y: 0.85, w: 0.9, h: 0.9, align: "center", valign: "middle", color: WHITE, bold: true, fontFace: HEAD, fontSize: 40 });
  s.addText("K-Drift", { x: 0.85, y: 2.4, w: 11.6, h: 1.2, color: WHITE, bold: true, fontFace: HEAD, fontSize: 58 });
  s.addText("서비스 & 기능 상세 소개", { x: 0.9, y: 3.6, w: 12.0, h: 0.8, color: "CADCFC", fontFace: HEAD, fontSize: 26, bold: true });
  s.addText("다국어 생활·법령 콘텐츠를 — 수집부터 발행까지, 관리자 한 화면에서 효율화", { x: 0.9, y: 4.55, w: 12.0, h: 0.6, color: "9FB3E8", italic: true, fontFace: BODY, fontSize: 16 });
  s.addText("2026.06", { x: 0.9, y: 6.6, w: 11.6, h: 0.4, color: "7B89C0", fontFace: BODY, fontSize: 12 });
}

// ════════ 2. OVERVIEW ════════
{
  const s = p.addSlide(); s.background = { color: LIGHT };
  kicker(s, 1, "SERVICE OVERVIEW");
  title(s, "두 개의 얼굴을 가진 플랫폼");
  const cards = [
    { x: 0.7, c: INDIGO, t: "독자 — 다국어 생활정보", b: ["모국어 뉴스레터로 핵심 정보 수신", "카테고리·검색으로 탐색", "같은 글을 vi · en · ko 전환"] },
    { x: 7.0, c: NAVY, t: "운영 — AI 콘텐츠 엔진", b: ["정부·법령 채널 자동 수집 + AI 큐레이션", "사람은 검증·승인만 → 자동 번역·발행", "소수 인력으로 다국어 대량·정확 생산"] },
  ];
  cards.forEach((c) => {
    s.addShape(p.shapes.ROUNDED_RECTANGLE, { x: c.x, y: 2.2, w: 5.6, h: 4.4, fill: { color: CARD }, line: { color: LINE, width: 1 }, rectRadius: 0.1, shadow: shadow() });
    s.addShape(p.shapes.RECTANGLE, { x: c.x, y: 2.2, w: 5.6, h: 0.12, fill: { color: c.c } });
    s.addText(c.t, { x: c.x + 0.35, y: 2.55, w: 4.9, h: 0.9, color: INK, bold: true, fontFace: HEAD, fontSize: 19 });
    s.addText(c.b.map((t) => ({ text: t, options: { bullet: { code: "2022" }, color: "334155", fontFace: BODY, fontSize: 15, breakLine: true, paraSpaceAfter: 10 } })),
      { x: c.x + 0.35, y: 3.5, w: 4.9, h: 2.9 });
  });
}

// ════════ 3–6. CONSUMER ════════
const consumer = [
  { n: 2, file: "01-landing.png", head: "다국어 랜딩 & 구독", lines: ["상단에서 vi · en · ko 즉시 전환", "이메일 한 번으로 모국어 구독", "구독 시 환영 메일 자동 발송"] },
  { n: 3, file: "02-articles.png", head: "글 탐색 — 카테고리 & 검색", lines: ["비자·의료·주거·노동·교육 5개 카테고리", "검색으로 원하는 생활정보 탐색", "카드형 목록으로 모바일 가독성↑"] },
  { n: 4, file: "03-article-detail.png", head: "글 상세 & 언어 전환", lines: ["목차(TOC)로 긴 글도 쉽게", "언어 토글 — 같은 글을 vi/en/ko로", "커버 이미지 + 출처 기반 신뢰"] },
  { n: 5, file: "04-newsletter.png", head: "뉴스레터 아카이브", lines: ["지난 호를 웹에서 모아보기", "호별 수록 글 + 발송일 표시", "검색 유입 → 구독 전환"] },
];
consumer.forEach((c) => {
  const s = p.addSlide(); s.background = { color: LIGHT };
  kicker(s, c.n, "PRODUCT · 독자 화면");
  title(s, c.head);
  caption(s, 0.7, 2.2, 4.2, "이런 화면입니다", c.lines);
  screenshot(s, img(c.file), { x: 5.3, y: 1.9, w: 7.5, h: 5.1 });
});

// ════════ 7. PUBLISHING EFFICIENCY FLOW ════════
{
  const s = p.addSlide(); s.background = { color: NAVY };
  kicker(s, 6, "ADMIN · 발행 효율화", "CADCFC");
  s.addText("관리자에서 콘텐츠 발행이 이렇게 흐릅니다", { x: 0.7, y: 1.05, w: 12.2, h: 0.9, color: WHITE, bold: true, fontFace: HEAD, fontSize: 28 });
  const steps = [
    ["①", "수집", "정부·법령\n공식 채널 클릭 수집"],
    ["②", "AI 큐레이션", "관련성 판정·요약\n시행일·신뢰도"],
    ["③", "사람 승인", "검토 큐에서\n검증·승인 ★"],
    ["④", "자동 번역", "한국어 → vi·en\n구조 보존"],
    ["⑤", "발행", "글·뉴스레터로\n발송"],
  ];
  const cw = 2.3, gap = 0.18, startX = (W - (cw * 5 + gap * 4)) / 2;
  steps.forEach((st, i) => {
    const x = startX + i * (cw + gap), hi = i === 2;
    s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y: 3.0, w: cw, h: 2.6, fill: { color: hi ? INDIGO : "2A3470" }, line: { color: hi ? "C7D2FE" : "3A4690", width: 1 }, rectRadius: 0.1, shadow: shadow() });
    s.addText(st[0], { x, y: 3.2, w: cw, h: 0.7, align: "center", color: hi ? WHITE : "9FB3E8", bold: true, fontFace: HEAD, fontSize: 30 });
    s.addText(st[1], { x, y: 3.95, w: cw, h: 0.5, align: "center", color: WHITE, bold: true, fontFace: HEAD, fontSize: 17 });
    s.addText(st[2], { x: x + 0.15, y: 4.5, w: cw - 0.3, h: 1.0, align: "center", color: "CDD7F2", fontFace: BODY, fontSize: 12 });
    if (i < 4) s.addText("›", { x: x + cw - 0.02, y: 3.0, w: gap + 0.04, h: 2.6, align: "center", valign: "middle", color: "9FB3E8", bold: true, fontSize: 22 });
  });
  s.addText("AI가 ①②④를 처리하고, 사람은 ③에서 검증·승인만 — 정확성이 중요한 법령·생활정보에 맞춘 설계.", { x: 0.7, y: 6.2, w: 12, h: 0.5, align: "center", color: "9FB3E8", italic: true, fontFace: BODY, fontSize: 14 });
}

// ════════ 8–13. FEATURE DETAIL (admin) ════════
const features = [
  { n: 7, kick: "FEATURE · AI 큐레이션", file: "06-digest-board.png", head: "AI 큐레이션 — 정부 채널을 자동 수집·요약",
    lines: ["법무부·고용노동부·정부 보도자료 등 공식 피드를 클릭 한 번에 수집",
            "AI가 외국인 관련성 판정 — 인사발령·내부행사 등 무관 정보는 자동 제외",
            "관련 항목만 구조화 요약: 제목·요약·‘외국인에게 의미’·시행일",
            "항목마다 신뢰도 점수 → 검증 가능성 확보"], acc: NAVY },
  { n: 8, kick: "FEATURE · 사람 승인", file: "06b-digest-review.png", head: "사람 승인 — 신뢰의 마지막 게이트",
    lines: ["검토 큐에서 AI 초안을 한눈에 (신뢰도·카테고리·출처)",
            "‘외국인에게 의미’까지 정리된 초안을 사람이 검토",
            "승인 / 수정 / 반려 — 법령·생활정보라 사람 승인을 필수로 설계",
            "승인 시 → 한국어 글 초안이 자동 생성되어 편집기로 연결"], acc: GREEN },
  { n: 9, kick: "FEATURE · 번역 자동화", file: "07-editor-translate.png", head: "번역 자동화 — 한국어 원문에서 버튼 한 번",
    lines: ["한국어로 작성 → ‘한국어 → 자동번역’ 클릭",
            "영어·베트남어가 자동 생성 (최신 AI 모델)",
            "Markdown 구조·고유명사(한국어 병기)·톤 보존",
            "슬러그도 번역된 영어 제목에서 자동 생성"], acc: INDIGO },
  { n: 10, kick: "FEATURE · 번역 결과", file: "08-editor-vi.png", head: "번역 결과 — 그대로 발행 가능한 품질",
    lines: ["예) 외국인등록증 → Alien Registration Card / Thẻ đăng ký người nước ngoài",
            "제목·요약·본문을 언어별 탭에서 즉시 확인",
            "자동번역을 그대로 쓰지 않고 검토·수정 후 발행",
            "베트남어 우선 — 1차 타깃에 최적화"], acc: INDIGO },
  { n: 11, kick: "FEATURE · 콘텐츠 편집기", file: "09-editor-preview.png", head: "콘텐츠 편집기 — 다국어를 한 화면에서",
    lines: ["vi · en · ko 탭으로 언어별 작성·검토",
            "Markdown 실시간 미리보기 — 결과를 보며 작성",
            "이미지·커버 업로드 (본문 삽입 포함)",
            "슬러그 자동 생성 · 저장 후 이어쓰기"], acc: NAVY },
  { n: 12, kick: "ADMIN · 대시보드", file: "05-admin-dashboard.png", head: "관리자 대시보드 — 운영 현황 한눈에",
    lines: ["글·발행·구독자 현황을 한 화면에",
            "글 목록에서 바로 편집 진입",
            "수집·큐레이션 → 발행 전체를 소수 인력으로"], acc: NAVY },
];
features.forEach((c) => {
  const s = p.addSlide(); s.background = { color: LIGHT };
  kicker(s, c.n, c.kick, c.acc);
  title(s, c.head);
  caption(s, 0.7, 2.2, 4.3, "핵심 기능", c.lines, c.acc);
  screenshot(s, img(c.file), { x: 5.4, y: 1.9, w: 7.4, h: 5.1 });
});

// ════════ 14. EFFICIENCY RECAP ════════
{
  const s = p.addSlide(); s.background = { color: LIGHT };
  kicker(s, 13, "EFFICIENCY");
  title(s, "발행 1건이 ‘클릭 + 검증’으로");
  const before = { x: 0.7, c: MUTED, t: "예전 방식 (수작업)", b: ["여러 부처 사이트에서 정보 검색", "행정 용어 해석·정리", "언어별 수동 번역", "글 작성·구조화", "→ 1건마다 많은 인력·시간"] };
  const after = { x: 7.0, c: INDIGO, t: "K-Drift", b: ["정부 채널 클릭 수집", "AI 요약·큐레이션 (무관 자동 제외)", "검토 큐에서 승인", "한국어→vi/en 자동 번역", "→ 클릭 몇 번 + 검증으로 발행"] };
  [before, after].forEach((col, i) => {
    s.addShape(p.shapes.ROUNDED_RECTANGLE, { x: col.x, y: 2.15, w: 5.6, h: 4.6, fill: { color: CARD }, line: { color: LINE, width: 1 }, rectRadius: 0.1, shadow: shadow() });
    if (i === 1) s.addShape(p.shapes.RECTANGLE, { x: col.x, y: 2.15, w: 5.6, h: 0.12, fill: { color: INDIGO } });
    s.addText(col.t, { x: col.x + 0.35, y: 2.45, w: 4.9, h: 0.6, color: i === 1 ? INDIGO : INK, bold: true, fontFace: HEAD, fontSize: 19 });
    s.addText(col.b.map((t) => ({ text: t, options: { bullet: { code: "2022" }, color: i === 1 ? "334155" : "64748B", fontFace: BODY, fontSize: 15, breakLine: true, paraSpaceAfter: 11 } })),
      { x: col.x + 0.35, y: 3.2, w: 4.9, h: 3.4 });
  });
}

// ════════ 15. CLOSING ════════
{
  const s = p.addSlide(); s.background = { color: NAVY };
  s.addShape(p.shapes.OVAL, { x: 0.85, y: 0.95, w: 0.7, h: 0.7, fill: { color: INDIGO } });
  s.addText("K", { x: 0.85, y: 0.95, w: 0.7, h: 0.7, align: "center", valign: "middle", color: WHITE, bold: true, fontFace: HEAD, fontSize: 30 });
  s.addText("수집 · AI 큐레이션 · 사람 승인 · 자동 번역 · 발행", { x: 0.85, y: 2.5, w: 12, h: 1.0, color: WHITE, bold: true, fontFace: HEAD, fontSize: 32 });
  s.addText("다국어 생활·법령 콘텐츠 발행의 전 과정을 한 시스템에서.", { x: 0.85, y: 3.6, w: 12, h: 0.6, color: "CADCFC", fontFace: BODY, fontSize: 18 });
  s.addText("AI가 차려놓고, 사람이 신뢰를 더한다.", { x: 0.85, y: 4.3, w: 12, h: 0.6, color: "9FB3E8", italic: true, fontFace: BODY, fontSize: 15 });
  s.addText("K-Drift  ·  2026.06", { x: 0.85, y: 6.8, w: 11, h: 0.4, color: "7B89C0", fontFace: BODY, fontSize: 11 });
}

p.writeFile({ fileName: path.join(__dirname, "K-Drift-서비스소개.pptx") }).then((f) => console.log("WROTE", f));
