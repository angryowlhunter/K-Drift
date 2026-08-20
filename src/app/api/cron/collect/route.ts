import { NextResponse } from "next/server";
import { ingestAllApiSources } from "@/lib/ingest";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Daily automated collection, triggered by Vercel Cron (vercel.json).
 * Vercel sends `Authorization: Bearer ${CRON_SECRET}` — reject anything else
 * so strangers can't trigger collection or probe the endpoint.
 * Side benefit: daily DB activity keeps the Supabase free project from pausing.
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET is not configured" },
      { status: 500 },
    );
  }
  if (req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const hasSupabase =
    !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!hasSupabase) {
    return NextResponse.json({ ok: false, error: "Supabase is not configured" }, { status: 500 });
  }

  const { ok, results } = await ingestAllApiSources();
  console.log("[cron/collect]", JSON.stringify(results));
  return NextResponse.json({ ok, results });
}
