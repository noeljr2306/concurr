// ─── Types ────────────────────────────────────────────────────────────────────
export type UserRole = "admin" | "client" | "freelancer";

export interface Session {
  userId: string;
  name: string;
  email: string;
  role: UserRole;
  avatarInitials: string;
}

// ─── Role → portal home ───────────────────────────────────────────────────────
export const ROLE_HOME: Record<UserRole, string> = {
  admin:      "/admin/overview",
  client:     "/client/dashboard",
  freelancer: "/freelancer/dashboard",
};

// ─── Mock users (replace with real DB/JWT lookup) ────────────────────────────
export const MOCK_USERS: Record<string, Session & { password: string }> = {
  "admin@concurr.io": {
    userId:          "usr_admin_001",
    name:            "Alex Rivera",
    email:           "admin@concurr.io",
    role:            "admin",
    avatarInitials:  "AR",
    password:        "admin123",
  },
  "client@concurr.io": {
    userId:          "usr_client_001",
    name:            "Marcus Chen",
    email:           "client@concurr.io",
    role:            "client",
    avatarInitials:  "MC",
    password:        "client123",
  },
  "freelancer@concurr.io": {
    userId:          "usr_freelancer_001",
    name:            "Sarah Johnson",
    email:           "freelancer@concurr.io",
    role:            "freelancer",
    avatarInitials:  "SJ",
    password:        "freelancer123",
  },
};

// ─── Cookie helpers (client-side) ────────────────────────────────────────────
export const COOKIE_ROLE    = "concurr_role";
export const COOKIE_SESSION = "concurr_session";
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function setSessionCookies(session: Session) {
  const expires = new Date(Date.now() + COOKIE_MAX_AGE * 1000).toUTCString();
  document.cookie = `${COOKIE_ROLE}=${session.role}; path=/; expires=${expires}; SameSite=Lax`;
  document.cookie = `${COOKIE_SESSION}=${encodeURIComponent(
    JSON.stringify(session)
  )}; path=/; expires=${expires}; SameSite=Lax`;
}

export function clearSessionCookies() {
  document.cookie = `${COOKIE_ROLE}=; path=/; max-age=0`;
  document.cookie = `${COOKIE_SESSION}=; path=/; max-age=0`;
}

export function getSessionFromCookie(): Session | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_SESSION}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("=")));
  } catch {
    return null;
  }
}
