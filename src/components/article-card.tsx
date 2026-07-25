import { useFormatter, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Article } from "@/lib/articles";
import { isImageUrl } from "@/lib/utils";
import { CategoryBadge } from "./category-badge";

export function ArticleCard({ article }: { article: Article }) {
  const t = useTranslations("articles");
  const format = useFormatter();
  const hasImage = isImageUrl(article.coverEmoji);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-md"
    >
      {hasImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.coverEmoji}
          alt=""
          className="aspect-[16/9] w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
      <div className="flex items-center justify-between">
        <CategoryBadge category={article.category} />
        {!hasImage && (
          <span aria-hidden className="text-2xl">
            {article.coverEmoji}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-balance group-hover:text-primary">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
        {article.summary}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {article.publishedAt
            ? format.dateTime(new Date(article.publishedAt), { dateStyle: "medium" })
            : ""}
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-primary">
          {t("readMore")}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
      </div>
    </Link>
  );
}
