import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="ApplyOS", charset="UTF-8"',
    },
  });
}

function isAuthorized(req: NextRequest): boolean {
  const user = process.env.SITE_AUTH_USER;
  const pass = process.env.SITE_AUTH_PASSWORD;
  if (!user || !pass) return true;

  const header = req.headers.get("authorization");
  if (!header?.startsWith("Basic ")) return false;

  try {
    const decoded = atob(header.slice(6));
    const sep = decoded.indexOf(":");
    if (sep < 0) return false;
    return decoded.slice(0, sep) === user && decoded.slice(sep + 1) === pass;
  } catch {
    return false;
  }
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Statische Public-Assets (Logo, OG-Image, Favicon-Variants etc.) sind nicht
  // sensitiv und müssen vor der Basic-Auth durchgelassen werden, damit auch
  // next/image sie serverseitig laden kann (lädt ohne Auth-Header).
  if (/\.[a-z0-9]+$/i.test(pathname) || pathname.startsWith("/.well-known/")) {
    return NextResponse.next();
  }
  // Auth-Seiten (Ziel der Supabase-Mail-Links) müssen ohne Basic-Auth erreichbar
  // sein — sonst blockiert der Browser-Login-Dialog Reset bzw. Bestätigung.
  // Locale-agnostisch: /auth/reset, /auth/confirm (+ /de//en-Varianten).
  if (/^\/(de\/|en\/)?auth\/(reset|confirm)(\/|$)/.test(pathname)) {
    return intl(req);
  }
  if (!isAuthorized(req)) return unauthorized();
  return intl(req);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
