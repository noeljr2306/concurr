"use client";

import { Search, Bell, Plus } from "lucide-react";

export default function MessagesTopBar() {
  return (
    <header className="bg-white border-b border-slate-200 px-7 flex items-center justify-between h-[60px] gap-5 flex-shrink-0">
      {/* Left: title */}
      <h1 className="text-[18px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
        Messages
      </h1>

      {/* Center: search */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 w-full max-w-[400px]">
          <Search size={14} className="text-slate-400 flex-shrink-0" />
          <input
            placeholder="Search conversations..."
            className="bg-transparent border-none outline-none text-[13px] text-slate-500 placeholder:text-slate-400 w-full"
          />
        </div>
      </div>

      {/* Right: bell + New Message */}
      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors border border-slate-200">
          <Bell size={16} strokeWidth={1.8} />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-[13px] font-bold rounded-lg transition-colors whitespace-nowrap">
          <Plus size={14} strokeWidth={2.5} />
          New Message
        </button>
      </div>
    </header>
  );
}
