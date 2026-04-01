"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShieldCheck,
  Siren,
  Users,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

const mainNav = [
  { label: "Overview", href: "/admin/overview", icon: LayoutDashboard },
  {
    label: "Escrow Accounts",
    href: "/admin/escrow-accounts",
    icon: ShieldCheck,
  },
  { label: "Disputes", href: "/admin/disputes", icon: Siren },
  { label: "User Accounts", href: "/admin/user-accounts", icon: Users },
  {
    label: "Financial Reports",
    href: "/admin/financial-reports",
    icon: BarChart3,
  },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
];

const systemNav = [
  { label: "System Config", href: "/admin/system-config", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="w-[232px] min-w-[232px] bg-white border-r border-slate-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="9" height="9" rx="2" fill="#0ea5e9" />
            <rect
              x="13"
              y="2"
              width="9"
              height="9"
              rx="2"
              fill="#0ea5e9"
              opacity="0.45"
            />
            <rect
              x="2"
              y="13"
              width="9"
              height="9"
              rx="2"
              fill="#0ea5e9"
              opacity="0.45"
            />
            <rect x="13" y="13" width="9" height="9" rx="2" fill="#0ea5e9" />
          </svg>
        </div>
        <span className="font-bold text-[15px] text-slate-900 tracking-tight">
          Concurr Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-2 mt-1">
          Main
        </p>
        {mainNav.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg mb-0.5 text-[13.5px] font-medium transition-all duration-150 ${
                active
                  ? "bg-sky-50 text-sky-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <Icon size={16} strokeWidth={active ? 2.2 : 1.8} />
              {item.label}
            </Link>
          );
        })}

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-2 mt-4">
          System
        </p>
        {systemNav.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg mb-0.5 text-[13.5px] font-medium transition-all duration-150 ${
                active
                  ? "bg-sky-50 text-sky-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              }`}
            >
              <Icon size={16} strokeWidth={active ? 2.2 : 1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom user */}
      <div className="border-t border-slate-100 px-4 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="#e2e8f0" />
            <circle cx="18" cy="14" r="5" fill="#94a3b8" />
            <ellipse cx="18" cy="27" rx="9" ry="6" fill="#94a3b8" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-slate-800 truncate">
            Alex Rivera
          </p>
          <p className="text-[11.5px] text-slate-400 truncate">
            Senior Arbiter
          </p>
        </div>
      </div>
    </aside>
  );
}
