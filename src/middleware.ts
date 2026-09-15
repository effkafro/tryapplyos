import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Statische Public-Assets (Logo, OG-Image, Favicon-Variants etc.) und
  // .well-known (Apple App Site Association) brauchen kein Locale-Routing.
  if (/\.[a-z0-9]+$/i.test(pathname) || pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }
  return intl(req);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
