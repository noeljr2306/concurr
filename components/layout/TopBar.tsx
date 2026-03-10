"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User } from "lucide-react";

interface TopBarProps {
  userName: string;
  userId: string;
}

const tabs = [
  { label: "Overview", href: "wallets" },
  { label: "Security", href: "security" },
  { label: "Activity", href: "activity" },
];

export default function TopBar({ userName, userId }: TopBarProps) {
  const pathname = usePathname();

  const activeTab =
    tabs.find((t) => pathname.includes(`/${t.href}`))?.href ?? "wallets";

  return (
    <header className="bg-white border-b border-slate-200 px-7 flex items-center justify-between h-[60px] gap-4 flex-shrink-0">
      {/* Left */}
      <div className="flex items-center gap-0">
        <div className="flex items-center gap-2.5 mr-8">
          <div className="w-[30px] h-[30px] rounded-full bg-slate-100 flex items-center justify-center">
            <User size={15} strokeWidth={1.8} className="text-slate-500" />
          </div>
          <span className="font-semibold text-[15px] text-slate-900">
            {userName}&apos;s Wallets
          </span>
        </div>

        {/* Tabs */}
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={`/user-accounts/${userId}/${tab.href}`}
            className={`h-[60px] flex items-center px-1 mr-6 text-[13.5px] border-b-2 transition-all duration-150 ${
              activeTab === tab.href
                ? "border-slate-900 text-slate-900 font-semibold"
                : "border-transparent text-slate-400 hover:text-slate-600 font-normal"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 w-[220px]">
          <Search size={14} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Search transactions..."
            className="bg-transparent border-none outline-none text-[13px] text-slate-500 placeholder:text-slate-400 w-full"
          />
        </div>
        <div className="w-[34px] h-[34px] rounded-full bg-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
            <circle cx="17" cy="17" r="17" fill="#cbd5e1" />
            <circle cx="17" cy="13" r="5" fill="#94a3b8" />
            <ellipse cx="17" cy="27" rx="8" ry="5" fill="#94a3b8" />
          </svg>
        </div>
      </div>
    </header>
  );
}
