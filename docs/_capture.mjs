import { readFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  readFileSync(new URL("../.env.local", import.meta.url), "utf8")
    .split(/\r?\n/).filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => { const i = l.indexOf("="); return [l.slice(0, i).trim(), l.slice(i + 1).trim().replace(/^"|"$/g, "")]; }),
);

const BASE = "http://localhost:3200";
const OUT = new URL("./screenshots/", import.meta.url);
mkdirSync(OUT, { recursive: true });

const admin = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

// temp admin account for capturing the admin views
const email = "shot.capture@kdrift.local";
const password = "K-Drift-Shot-2026!";
let userId = null;
{
  const { data, error } = await admin.auth.admin.createUser({ email, password, email_confirm: true });
  if (error && !String(error.message).includes("already")) { console.error("createUser:", error.message); }
  userId = data?.user?.id ?? null;
  if (!userId) {
    const { data: list } = await admin.auth.admin.listUsers();
    userId = list?.users?.find((u) => u.email === email)?.id ?? null;
  }
  console.log("temp admin:", userId);
}

// pick an article id for the editor screenshot
let articleId = null;
{
  const { data } = await admin.from("articles").select("id,slug").order("updated_at", { ascending: false }).limit(5);
  articleId = data?.find((a) => a.slug?.startsWith("alien"))?.id ?? data?.[0]?.id ?? null;
  console.log("article for editor:", articleId);
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

const shot = async (name, opts = {}) => {
  await page.waitForTimeout(1200);
  await page.screenshot({ path: new URL(`./${name}.png`, OUT).pathname.replace(/^\/([A-Za-z]:)/, "$1"), fullPage: !!opts.full });
  console.log("shot:", name);
};
const go = async (path) => { await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 30000 }).catch(() => {}); };

// ── public (consumer product) ──
await go("/ko");                              await shot("01-landing");
await go("/ko/articles");                     await shot("02-articles");
await go("/ko/articles/alien-registration-card"); await shot("03-article-detail");
await go("/ko/newsletter");                    await shot("04-newsletter");

// ── admin login ──
await go("/admin/login");
await page.fill('input[type="email"]', email);
await page.fill('input[type="password"]', password);
await page.click('button[type="submit"]');
await page.waitForURL("**/admin", { timeout: 15000 }).catch(() => {});
await page.waitForTimeout(1500);

// ── admin (AI pipeline / operator) ──
await go("/admin");                            await shot("05-admin-dashboard");

await go("/admin/digest");                     await shot("06-digest-board");
// scroll to the human-review queue (draft cards with 신뢰도/승인/반려)
await page.getByText("검토 대기 초안").first().scrollIntoViewIfNeeded().catch(() => {});
await shot("06b-digest-review");

if (articleId) {
  await go(`/admin/articles/${articleId}`);    await shot("07-editor-translate");      // 한국어 원문 탭
  await page.click('button:has-text("Tiếng Việt")').catch(() => {});
  await shot("08-editor-vi");                                                            // 번역 결과(vi)
  await page.click('button:has-text("미리보기")').catch(() => {});
  await shot("09-editor-preview");                                                       // Markdown 미리보기
}

await browser.close();

// cleanup temp admin
if (userId) { await admin.auth.admin.deleteUser(userId); console.log("deleted temp admin"); }
console.log("CAPTURE DONE");
