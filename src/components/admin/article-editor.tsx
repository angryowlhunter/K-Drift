"use client";

import { useActionState, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Loader2, Trash2, ImagePlus, Eye, Pencil, Check, Languages } from "lucide-react";
import { saveArticleAction, deleteArticleAction, type SaveResult } from "@/app/admin/actions";
import { translateFromKoreanAction } from "@/app/admin/translate-actions";
import { Markdown } from "@/components/markdown";
import { CATEGORY_KEYS } from "@/lib/categories";
import { locales, localeNames, type Locale } from "@/i18n/routing";
import { cn, isImageUrl, slugify } from "@/lib/utils";

export type EditorArticle = {
  id: string | null;
  slug: string;
  category: string;
  author: string;
  coverEmoji: string;
  status: "draft" | "published";
  translations: Record<Locale, { title: string; summary: string; body: string }>;
};

const CATEGORY_LABELS: Record<string, string> = {
  visa: "비자·체류",
  medical: "의료·건강보험",
  housing: "주거·부동산",
  labor: "노동·취업",
  education: "교육·생활",
};

// Korean first (the source you write), then vi (primary audience), then en.
const TAB_ORDER: Locale[] = ["ko", "vi", "en"];

async function uploadImage(file: File): Promise<string> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error ?? "업로드 실패");
  return json.url as string;
}

export function ArticleEditor({ article }: { article: EditorArticle }) {
  const boundSave = saveArticleAction.bind(null, article.id);
  const [state, formAction] = useActionState<SaveResult, FormData>(boundSave, { ok: true });
  const [activeTab, setActiveTab] = useState<Locale>("ko");
  const [preview, setPreview] = useState(false);

  const [cover, setCover] = useState(article.coverEmoji);
  const [slug, setSlug] = useState(article.slug);
  // Existing articles start "edited" so we never auto-rewrite a live slug (would 404 links).
  const [slugEdited, setSlugEdited] = useState(!!article.id);
  const [titles, setTitles] = useState<Record<Locale, string>>(() =>
    Object.fromEntries(
      locales.map((l) => [l, article.translations[l]?.title ?? ""]),
    ) as Record<Locale, string>,
  );
  const [summaries, setSummaries] = useState<Record<Locale, string>>(() =>
    Object.fromEntries(
      locales.map((l) => [l, article.translations[l]?.summary ?? ""]),
    ) as Record<Locale, string>,
  );
  const [bodies, setBodies] = useState<Record<Locale, string>>(() =>
    Object.fromEntries(
      locales.map((l) => [l, article.translations[l]?.body ?? ""]),
    ) as Record<Locale, string>,
  );
  const [translating, setTranslating] = useState(false);
  const [translateError, setTranslateError] = useState<string | null>(null);
  const bodyRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});

  // Korean is the source: translate ko → en/vi, fill the other tabs, then derive the slug.
  async function translateFromKorean() {
    setTranslating(true);
    setTranslateError(null);
    try {
      const res = await translateFromKoreanAction({
        title: titles.ko ?? "",
        summary: summaries.ko ?? "",
        body: bodies.ko ?? "",
      });
      if (!res.ok) {
        setTranslateError(res.error);
        return;
      }
      setTitles((p) => ({ ...p, en: res.en.title, vi: res.vi.title }));
      setSummaries((p) => ({ ...p, en: res.en.summary, vi: res.vi.summary }));
      setBodies((p) => ({ ...p, en: res.en.body, vi: res.vi.body }));
      if (!slugEdited) {
        const candidate = slugify(res.en.title);
        if (candidate) setSlug(candidate);
      }
    } catch (e) {
      setTranslateError(e instanceof Error ? e.message : "번역 오류");
    } finally {
      setTranslating(false);
    }
  }

  const field =
    "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30";
  const label = "text-sm font-medium";

  // Auto-fill the slug from the en title (preferred) or vi title, until the user
  // edits the slug by hand. Korean titles slugify to "" so they don't drive it.
  function updateTitle(locale: Locale, value: string) {
    setTitles((prev) => {
      const next = { ...prev, [locale]: value };
      if (!slugEdited) {
        const candidate = slugify(next.en?.trim() || "") || slugify(next.vi?.trim() || "");
        if (candidate) setSlug(candidate);
      }
      return next;
    });
  }

  function regenerateSlug() {
    const candidate = slugify(titles.en?.trim() || "") || slugify(titles.vi?.trim() || "");
    if (candidate) {
      setSlug(candidate);
      setSlugEdited(false);
    }
  }

  function insertImageInto(locale: Locale, url: string) {
    const ta = bodyRefs.current[locale];
    const md = `![](${url})`;
    setBodies((prev) => {
      const cur = prev[locale] ?? "";
      const pos = ta?.selectionStart ?? cur.length;
      const next = cur.slice(0, pos) + md + cur.slice(pos);
      return { ...prev, [locale]: next };
    });
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Meta */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <label className={label}>슬러그 (URL)</label>
              <button
                type="button"
                onClick={regenerateSlug}
                className="text-xs font-medium text-primary hover:underline"
              >
                제목에서 생성
              </button>
            </div>
            <input
              name="slug"
              value={slug}
              onChange={(e) => {
                setSlug(e.target.value);
                setSlugEdited(true);
              }}
              placeholder="alien-registration-card"
              className={cn(field, "mt-1")}
            />
            <p className="mt-1 text-xs text-muted-foreground">
              영문 소문자·숫자·하이픈 · 제목(EN/VI) 입력 시 자동 생성
            </p>
          </div>
          <div>
            <label className={label}>카테고리</label>
            <select name="category" defaultValue={article.category} className={cn(field, "mt-1")}>
              <option value="">선택…</option>
              {CATEGORY_KEYS.map((c) => (
                <option key={c} value={c}>
                  {CATEGORY_LABELS[c]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={label}>커버 (이모지 또는 이미지)</label>
            <input type="hidden" name="coverEmoji" value={cover} />
            <div className="mt-1 flex items-center gap-3">
              <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-border bg-muted text-2xl">
                {isImageUrl(cover) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cover} alt="" className="size-full object-cover" />
                ) : (
                  cover || "📄"
                )}
              </span>
              <input
                value={isImageUrl(cover) ? "" : cover}
                onChange={(e) => setCover(e.target.value)}
                placeholder="🪪 (이모지)"
                disabled={isImageUrl(cover)}
                className={cn(field, "flex-1 disabled:opacity-50")}
              />
              <ImageUploadButton onUploaded={setCover} label="이미지" />
              {isImageUrl(cover) && (
                <button type="button" onClick={() => setCover("📄")} className="text-xs text-muted-foreground hover:text-destructive">
                  제거
                </button>
              )}
            </div>
          </div>
          <div>
            <label className={label}>작성자</label>
            <input name="author" defaultValue={article.author} placeholder="K-Drift" className={cn(field, "mt-1")} />
          </div>
        </div>

        <fieldset className="mt-4">
          <legend className={label}>상태</legend>
          <div className="mt-2 flex gap-4 text-sm">
            <label className="inline-flex items-center gap-1.5">
              <input type="radio" name="status" value="draft" defaultChecked={article.status === "draft"} />
              초안
            </label>
            <label className="inline-flex items-center gap-1.5">
              <input type="radio" name="status" value="published" defaultChecked={article.status === "published"} />
              발행
            </label>
          </div>
        </fieldset>
      </div>

      {/* Translations */}
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center justify-between border-b border-border">
          <div className="flex gap-1">
            {TAB_ORDER.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setActiveTab(l)}
                className={cn(
                  "-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === l
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {localeNames[l]}
                {l === "ko" && <span className="ml-1 text-xs text-primary">· 원문</span>}
              </button>
            ))}
          </div>
          <div className="mb-1 flex items-center gap-2">
            <button
              type="button"
              onClick={translateFromKorean}
              disabled={translating || !(titles.ko?.trim() || bodies.ko?.trim())}
              title="한국어 원문에서 영어·베트남어로 자동 번역"
              className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary transition hover:bg-primary/10 disabled:opacity-50"
            >
              {translating ? <Loader2 className="size-3.5 animate-spin" /> : <Languages className="size-3.5" />}
              한국어 → 자동번역
            </button>
            <button
              type="button"
              onClick={() => setPreview((p) => !p)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              {preview ? <Pencil className="size-3.5" /> : <Eye className="size-3.5" />}
              {preview ? "편집" : "미리보기"}
            </button>
          </div>
        </div>
        {translateError && (
          <p className="mt-2 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-1.5 text-xs text-destructive">
            {translateError}
          </p>
        )}

        {locales.map((l) => (
          <div key={l} className={cn("space-y-4 pt-5", activeTab === l ? "block" : "hidden")}>
            <div>
              <label className={label}>제목 ({localeNames[l]})</label>
              <input
                name={`title_${l}`}
                value={titles[l]}
                onChange={(e) => updateTitle(l, e.target.value)}
                className={cn(field, "mt-1")}
              />
            </div>
            <div>
              <label className={label}>요약</label>
              <input
                name={`summary_${l}`}
                value={summaries[l]}
                onChange={(e) => setSummaries((prev) => ({ ...prev, [l]: e.target.value }))}
                className={cn(field, "mt-1")}
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className={label}>본문 (Markdown)</label>
                <ImageUploadButton onUploaded={(url) => insertImageInto(l, url)} label="이미지 삽입" icon />
              </div>
              {/* Textarea stays mounted (so it submits) — hidden under preview. */}
              <textarea
                ref={(el) => {
                  bodyRefs.current[l] = el;
                }}
                name={`body_${l}`}
                value={bodies[l]}
                onChange={(e) => setBodies((prev) => ({ ...prev, [l]: e.target.value }))}
                rows={16}
                className={cn(
                  "mt-1 w-full rounded-lg border border-input bg-background p-3 font-mono text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30",
                  preview && "hidden",
                )}
              />
              {preview && (
                <div className="mt-1 min-h-[16rem] rounded-lg border border-border bg-background p-4">
                  {bodies[l]?.trim() ? (
                    <Markdown>{bodies[l]}</Markdown>
                  ) : (
                    <p className="text-sm text-muted-foreground">미리볼 본문이 없습니다.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <p className="pt-3 text-xs text-muted-foreground">
          제목이 입력된 언어만 저장됩니다. (최소 1개 언어 필요)
        </p>
      </div>

      {!state.ok && state.error && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          {state.error}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SaveButton />
          {state.ok && state.savedAt && (
            <span className="inline-flex items-center gap-1 text-sm text-success">
              <Check className="size-4" /> 저장됨
            </span>
          )}
        </div>
        {article.id && <DeleteButton id={article.id} />}
      </div>
    </form>
  );
}

function ImageUploadButton({
  onUploaded,
  label,
  icon,
}: {
  onUploaded: (url: string) => void;
  label: string;
  icon?: boolean;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  return (
    <>
      <input
        ref={ref}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          setBusy(true);
          setErr(null);
          try {
            onUploaded(await uploadImage(file));
          } catch (ex) {
            setErr(ex instanceof Error ? ex.message : "업로드 실패");
          } finally {
            setBusy(false);
          }
        }}
      />
      <button
        type="button"
        onClick={() => ref.current?.click()}
        disabled={busy}
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-xs font-medium text-muted-foreground transition hover:text-foreground disabled:opacity-60"
        title={err ?? undefined}
      >
        {busy ? <Loader2 className="size-3.5 animate-spin" /> : <ImagePlus className="size-3.5" />}
        {icon ? label : label}
      </button>
    </>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" />}
      저장
    </button>
  );
}

function DeleteButton({ id }: { id: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm("이 글을 삭제할까요? 되돌릴 수 없습니다.")) deleteArticleAction(id);
      }}
      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-destructive/30 px-4 text-sm font-medium text-destructive transition hover:bg-destructive/10"
    >
      <Trash2 className="size-4" /> 삭제
    </button>
  );
}
