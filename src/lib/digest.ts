import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import type { CategoryKey } from "@/lib/categories";

export type Source = {
  id: string;
  name: string;
  type: "api" | "rss" | "manual";
  url: string | null;
  category: CategoryKey | null;
  enabled: boolean;
};

export type RawItem = {
  id: string;
  source_id: string | null;
  url: string | null;
  title: string | null;
  content: string;
  curated: boolean;
  fetched_at: string;
};

export type DigestStatus = "draft" | "approved" | "rejected";

export type DigestItem = {
  id: string;
  raw_item_id: string | null;
  category: CategoryKey | null;
  title_ko: string;
  summary_ko: string;
  what_it_means_ko: string;
  effective_date: string | null;
  source_urls: string[];
  confidence: number | null;
  status: DigestStatus;
  reviewer: string | null;
  created_at: string;
};

export async function listSources(): Promise<Source[]> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("sources").select("*").order("type");
  return (data as Source[]) ?? [];
}

export async function listUncuratedRawItems(limit = 50): Promise<RawItem[]> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("raw_items")
    .select("id,source_id,url,title,content,curated,fetched_at")
    .eq("curated", false)
    .order("fetched_at", { ascending: false })
    .limit(limit);
  return (data as RawItem[]) ?? [];
}

export async function listDigestItems(status: DigestStatus = "draft"): Promise<DigestItem[]> {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("digest_items")
    .select("*")
    .eq("status", status)
    .order("created_at", { ascending: false });
  return (data as DigestItem[]) ?? [];
}

export async function digestCounts(): Promise<Record<DigestStatus, number>> {
  const supabase = createAdminClient();
  const out: Record<DigestStatus, number> = { draft: 0, approved: 0, rejected: 0 };
  for (const s of ["draft", "approved", "rejected"] as DigestStatus[]) {
    const { count } = await supabase
      .from("digest_items")
      .select("*", { count: "exact", head: true })
      .eq("status", s);
    out[s] = count ?? 0;
  }
  return out;
}
