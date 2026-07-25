import { createAdminClient } from "@/lib/supabase/admin";

// Live subscriber count for social proof. Returns null if Supabase isn't configured
// or the query fails, so the landing page can simply hide the stat.
export async function getSubscriberCount(): Promise<number | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return null;
  }
  try {
    const supabase = createAdminClient();
    const { count, error } = await supabase
      .from("subscribers")
      .select("*", { count: "exact", head: true })
      .eq("status", "active");
    if (error) return null;
    return count ?? 0;
  } catch {
    return null;
  }
}
