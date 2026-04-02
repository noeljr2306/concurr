"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  DollarSign,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { clearSessionCookies, getSessionFromCookie } from "@/lib/auth";

const navItems = [
  { label: "Dashboard", href: "/freelancer/dashboard", icon: LayoutDashboard },
  { label: "Projects",  href: "/freelancer/projects",  icon: FolderKanban    },
  { label: "Earnings",  href: "/freelancer/earnings",  icon: DollarSign      },
  { label: "Messages",  href: "/freelancer/messages",  icon: MessageSquare   },
  { label: "Settings",  href: "/freelancer/settings",  icon: Settings        },
];

export default function FreelancerSidebar() {
  const pathname = usePathname();
  const router   = useRouter();
  const session  = getSessionFromCookie();

  function handleLogout() {
    clearSessionCookies();
    router.push("/auth/login");
  }

  return (
    <aside className="w-[220px] min-w-[220px] bg-white border-r border-slate-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-100">
        <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" rx="2" fill="#14b8a6" />
            <rect x="13" y="2" width="9" height="9" rx="2" fill="#14b8a6" opacity="0.4" />
            <rect x="2" y="13" width="9" height="9" rx="2" fill="#14b8a6" opacity="0.4" />
            <rect x="13" y="13" width="9" height="9" rx="2" fill="#14b8a6" />
          </svg>
        </div>
        <span className="font-bold text-[15px] text-slate-900 tracking-tight">Concurr</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          const Icon   = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg mb-0.5 text-[13.5px] font-medium transition-all duration-150 ${
                active
                  ? "bg-teal-50 text-teal-700"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <Icon size={16} strokeWidth={active ? 2.2 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: user + logout */}
      <div className="border-t border-slate-100 px-3 py-3 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-[12px] font-bold flex-shrink-0">
            {session?.avatarInitials ?? "??"}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-slate-800 truncate">{session?.name ?? "Freelancer"}</p>
            <p className="text-[11px] text-slate-400 truncate">Freelancer</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-[13.5px] font-medium text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all"
        >
          <LogOut size={15} strokeWidth={1.8} />
          Sign out
        </button>
      </div>
    </aside>
  );
}
