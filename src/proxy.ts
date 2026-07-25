import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { updateAdminSession } from "./lib/supabase/middleware";

// Next.js 16 renamed the `middleware` convention to `proxy`.
const intlMiddleware = createMiddleware(routing);

export default async function proxy(request: NextRequest) {
  // /admin is a non-localized internal tool guarded by Supabase auth.
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return updateAdminSession(request);
  }
  // Everything else goes through next-intl locale routing.
  return intlMiddleware(request);
}

export const config = {
  // Match all paths except api, _next, _vercel, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
