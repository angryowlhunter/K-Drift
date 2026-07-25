import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { locales, type Locale } from "@/i18n/routing";

export type SubStatus = "active" | "unsubscribed";
export type Subscriber = {
  id: string;
  email: string;
  locale: Locale;
  source: string;
  status: SubStatus;
  created_at: string;
};

export type SubFilter = { search?: string; locale?: Locale; status?: SubStatus };

export async function listSubscribers(f: SubFilter = {}, limit = 500): Promise<Subscriber[]> {
  const supabase = createAdminClient();
  let q = supabase
    .from("subscribers")
    .select("id,email,locale,source,status,created_at")
    .order("created_at", { ascending: false })
    .limit(limit);
  if (f.locale) q = q.eq("locale", f.locale);
  if (f.status) q = q.eq("status", f.status);
  if (f.search?.trim()) q = q.ilike("email", `%${f.search.trim()}%`);
  const { data } = await q;
  return (data as Subscriber[]) ?? [];
}

export type SubStats = {
  active: number;
  unsubscribed: number;
  byLocale: Record<Locale, number>; // active per locale
};

export async function subscriberStats(): Promise<SubStats> {
  const supabase = createAdminClient();
  const countWhere = async (col: string, val: string, extra?: [string, string]) => {
    let q = supabase.from("subscribers").select("*", { count: "exact", head: true }).eq(col, val);
    if (extra) q = q.eq(extra[0], extra[1]);
    const { count } = await q;
    return count ?? 0;
  };
  const active = await countWhere("status", "active");
  const unsubscribed = await countWhere("status", "unsubscribed");
  const byLocale = {} as Record<Locale, number>;
  for (const l of locales) byLocale[l] = await countWhere("locale", l, ["status", "active"]);
  return { active, unsubscribed, byLocale };
}

export type GrowthPoint = { key: string; label: string; count: number };

/** New active subscribers per month, last 12 months (oldest → newest). */
export async function subscriberGrowth(): Promise<GrowthPoint[]> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("subscribers")
    .select("created_at,status")
    .eq("status", "active")
    .limit(50000);
  const rows = (data as { created_at: string }[]) ?? [];

  const now = new Date();
  const buckets: GrowthPoint[] = [];
  const index = new Map<string, GrowthPoint>();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const pt: GrowthPoint = { key, label: `${d.getMonth() + 1}월`, count: 0 };
    buckets.push(pt);
    index.set(key, pt);
  }
  for (const r of rows) {
    const d = new Date(r.created_at);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const pt = index.get(key);
    if (pt) pt.count++;
  }
  return buckets;
}
