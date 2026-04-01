import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Role → home portal mapping ───────────────────────────────────────────────
const ROLE_HOME: Record<string, string> = {
  admin: "/admin/overview",
  client: "/client/dashboard",
  freelancer: "/freelancer/dashboard",
};

// ─── Which path prefixes belong to which role ─────────────────────────────────
const PORTAL_ROLE: Record<string, string> = {
  "/admin": "admin",
  "/client": "client",
  "/freelancer": "freelancer",
};

// ─── Public paths that never require auth ─────────────────────────────────────
const PUBLIC_PATHS = ["/auth", "/_next", "/favicon", "/api/auth"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public paths
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Read role from cookie (set at login)
  const role = request.cookies.get("concurr_role")?.value;

  // ── Not logged in → send to login ──────────────────────────────────────────
  if (!role) {
    // Root → login
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.redirect(url);
    }
    // Any portal path → login, preserving intended destination
    const isPortalPath = Object.keys(PORTAL_ROLE).some((prefix) =>
      pathname.startsWith(prefix),
    );
    if (isPortalPath) {
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // ── Logged in: root → portal home ──────────────────────────────────────────
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = ROLE_HOME[role] ?? "/auth/login";
    return NextResponse.redirect(url);
  }

  // ── Logged in: wrong portal → own portal home ──────────────────────────────
  const accessedPortal = Object.keys(PORTAL_ROLE).find((prefix) =>
    pathname.startsWith(prefix),
  );
  if (accessedPortal && PORTAL_ROLE[accessedPortal] !== role) {
    const url = request.nextUrl.clone();
    url.pathname = ROLE_HOME[role] ?? "/auth/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on every route except static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
