"use client";

import { Search, Bell, HelpCircle } from "lucide-react";

export default function GlobalTopBar() {
  return (
    <header className="bg-white border-b border-slate-200 px-7 flex items-center justify-between h-[60px] gap-4 flex-shrink-0">
      {/* Centered search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 w-full max-w-[420px]">
          <Search size={14} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Search Escrow IDs, Clients, or Transactions..."
            className="bg-transparent border-none outline-none text-[13px] text-slate-500 placeholder:text-slate-400 w-full"
          />
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Bell */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
          <Bell size={17} strokeWidth={1.8} />
        </button>

        {/* Help */}
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors">
          <HelpCircle size={17} strokeWidth={1.8} />
        </button>

        {/* System status */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
          <span className="text-[13px] text-slate-500 font-medium">System:</span>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-green-600">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Stable
          </span>
        </div>
      </div>
    </header>
  );
}
