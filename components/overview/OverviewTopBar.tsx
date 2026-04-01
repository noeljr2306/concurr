"use client";

import { Search, Bell, MessageSquare } from "lucide-react";

export default function OverviewTopBar() {
  return (
    <header className="bg-white border-b border-slate-200 px-7 flex items-center justify-between h-[60px] gap-4 flex-shrink-0">
      {/* Centered search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 w-full max-w-[400px]">
          <Search size={14} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Search escrows, transactions, or users..."
            className="bg-transparent border-none outline-none text-[13px] text-slate-500 placeholder:text-slate-400 w-full"
          />
        </div>
      </div>

      {/* Right: icons + user */}
      <div className="flex items-center gap-3">
        {/* Bell with dot */}
        <button className="relative w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={17} strokeWidth={1.8} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>

        {/* Message */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
          <MessageSquare size={17} strokeWidth={1.8} />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200" />

        {/* User identity */}
        <div className="flex items-center gap-2.5">
          <div className="text-right">
            <p className="text-[13px] font-bold text-slate-900 leading-tight">Sarah Jenkins</p>
            <p className="text-[11.5px] text-slate-400 leading-tight">Platform Admin</p>
          </div>
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0 shadow-sm">
            SJ
          </div>
        </div>
      </div>
    </header>
  );
}
