"use client";

import { Bell, Download, Calendar, ChevronDown } from "lucide-react";

export default function FinancialTopBar() {
  return (
    <header className="bg-white border-b border-slate-200 px-7 flex items-center justify-between h-[60px] gap-4 flex-shrink-0">
      {/* Left: Title */}
      <h1 className="text-[18px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
        Financial Reports
      </h1>

      {/* Center: Date range picker */}
      <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-[13px] font-medium text-slate-700">
        <Calendar size={14} className="text-slate-400" strokeWidth={1.8} />
        Oct 1, 2023 – Oct 31, 2023
        <ChevronDown size={13} className="text-slate-400" strokeWidth={2} />
      </button>

      {/* Right: Export + Bell */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[13px] font-semibold rounded-lg transition-colors">
          <Download size={14} strokeWidth={2} />
          Export PDF/CSV
        </button>
        <button className="w-9 h-9 rounded-lg flex items-center justify-center bg-indigo-700 hover:bg-indigo-800 text-white transition-colors">
          <Bell size={16} strokeWidth={1.8} />
        </button>
      </div>
    </header>
  );
}
