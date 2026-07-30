"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeForm({
  source = "landing",
  className,
}: {
  source?: string;
  className?: string;
}) {
  const t = useTranslations("subscribe");
  const th = useTranslations("hero");
  const tf = useTranslations("footer");
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, source }),
      });
      const data = (await res.json()) as { ok: boolean; code?: string };

      if (data.ok) {
        setStatus("success");
        setMessage(t("success"));
        setEmail("");
      } else {
        setStatus("error");
        const code = data.code === "invalid" || data.code === "already" ? data.code : "error";
        setMessage(t(code));
      }
    } catch {
      setStatus("error");
      setMessage(t("error"));
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 rounded-xl border border-success/30 bg-success/10 px-5 py-4 text-success",
          className,
        )}
      >
        <CheckCircle2 className="size-5 shrink-0" />
        <span className="text-sm font-medium">{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={th("emailPlaceholder")}
          aria-label={th("emailPlaceholder")}
          className="h-12 flex-1 rounded-xl border border-input bg-card px-4 text-sm outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              {th("cta")}
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm text-destructive">{message}</p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">
        {th("privacy")}{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          {tf("privacy")}
        </Link>
      </p>
    </form>
  );
}
