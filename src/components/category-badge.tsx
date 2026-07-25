import { useTranslations } from "next-intl";
import { CATEGORY_META, type CategoryKey } from "@/lib/categories";

export function CategoryBadge({ category }: { category: CategoryKey }) {
  const tc = useTranslations("categories");
  const { icon: Icon, colorVar } = CATEGORY_META[category];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        color: colorVar,
        backgroundColor: `color-mix(in oklch, ${colorVar} 12%, transparent)`,
      }}
    >
      <Icon className="size-3.5" />
      {tc(`${category}.name`)}
    </span>
  );
}
