"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, SlidersHorizontal, Lock, Gavel, Zap, Shield } from "lucide-react";
import { clientDashboardStats, activeEscrows, type EscrowStatus } from "@/data/client/clientData";

const STATUS_STYLES: Record<EscrowStatus, string> = {
  "IN PROGRESS": "border border-indigo-300 text-indigo-700 bg-white",
  "COMPLETED":   "border border-green-300  text-green-700  bg-white",
  "PENDING":     "border border-amber-300  text-amber-600  bg-white",
};

function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-10 px-4">
      {/* Floating icon illustration */}
      <div className="relative w-64 h-56 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-transparent rounded-3xl" />
        <div className="absolute top-6 right-10 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <Lock size={22} strokeWidth={1.6} className="text-indigo-700" />
        </div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-indigo-400" />
        </div>
        <div className="absolute bottom-8 left-10 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="1.6">
            <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
          </svg>
        </div>
        {/* Dots */}
        {[[52,32],[168,48],[40,130],[190,140]].map(([x,y],i)=>(
          <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-slate-300" style={{left:x,top:y}}/>
        ))}
      </div>

      <h2 className="text-[30px] font-bold text-slate-900 text-center mb-3">Your First Escrow Awaits</h2>
      <p className="text-[15px] text-slate-500 text-center max-w-sm leading-relaxed mb-8">
        Securely lock funds and start working with professionals in seconds. Our platform ensures safety for both parties.
      </p>
      <Link
        href="/client/projects/new"
        className="flex items-center gap-2 px-8 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[15px] font-bold rounded-full transition-colors shadow-sm"
      >
        <Plus size={16} strokeWidth={2.5}/> Create New Escrow
      </Link>
      <p className="text-[13.5px] text-slate-400 mt-4">
        Need help?{" "}
        <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Read our quick start guide</span>
      </p>

      {/* Feature pills */}
      <div className="flex items-start gap-10 mt-16">
        {[
          { icon: Shield, title:"Secure Vault",        desc:"Funds are held in institutional-grade cold storage vaults." },
          { icon: Gavel,  title:"Dispute Resolution",  desc:"Unbiased arbitration for any project complications."        },
          { icon: Zap,    title:"Instant Release",     desc:"One-click milestone approval and fund disbursement."        },
        ].map(({icon:Icon,title,desc})=>(
          <div key={title} className="text-center max-w-[160px]">
            <div className="flex justify-center mb-2.5">
              <Icon size={22} strokeWidth={1.6} className="text-slate-500"/>
            </div>
            <p className="text-[13.5px] font-bold text-slate-800 mb-1">{title}</p>
            <p className="text-[12px] text-slate-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PopulatedDashboard() {
  return (
    <div className="p-7 space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-4">
        {/* Wallet Balance */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Cummulative Wallet Balance</p>
          <p className="text-[26px] font-bold text-slate-900 leading-tight mb-4">{clientDashboardStats.walletBalance}</p>
          <Link href="/client/wallets" className="flex items-center gap-1.5 px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-[12.5px] font-bold rounded-full transition-colors w-fit">
            <Plus size={13} strokeWidth={2.5}/> Link Wallet
          </Link>
        </div>

        {/* TVL */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Total Value Locked</p>
          <p className="text-[26px] font-bold text-slate-900 leading-tight">{clientDashboardStats.totalValueLocked}</p>
        </div>

        {/* Active Projects */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Active Projects</p>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-[32px] font-bold text-slate-900 leading-tight">{clientDashboardStats.activeProjects}</span>
            <span className="text-[14px] font-bold text-indigo-600">+{clientDashboardStats.activeProjectsNew}</span>
          </div>
          {/* Stacked avatars */}
          <div className="flex items-center">
            {["#94a3b8","#64748b","#475569"].map((bg,i)=>(
              <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold -ml-1 first:ml-0" style={{background:bg,zIndex:3-i}}/>
            ))}
            <span className="ml-2 text-[12px] text-slate-400 font-medium">+21</span>
          </div>
        </div>

        {/* Action Required */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Action Required</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-[32px] font-bold text-slate-900 leading-tight">{clientDashboardStats.actionRequired}</span>
            <span className="text-[14px] font-bold text-amber-500">{clientDashboardStats.actionLabel}</span>
          </div>
          <p className="text-[12px] text-slate-400 flex items-center gap-1">
            <span className="text-amber-400">⚠</span> {clientDashboardStats.actionSub}
          </p>
        </div>
      </div>

      {/* Active Escrows table */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[18px] font-bold text-slate-900">Active Escrows</h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 hover:bg-slate-50 text-[13px] font-semibold text-slate-600 rounded-lg transition-colors">
            <SlidersHorizontal size={14} strokeWidth={1.8}/> Filter
          </button>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[2fr_3fr_2fr_1.5fr] gap-4 pb-3 border-b border-slate-100">
          {["Freelancer","Milestone Progress","Status","Total Amount"].map(h=>(
            <span key={h} className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{h}</span>
          ))}
        </div>

        {/* Rows */}
        {activeEscrows.map(esc=>(
          <div key={esc.id} className="grid grid-cols-[2fr_3fr_2fr_1.5fr] gap-4 items-center py-4 border-b border-slate-50 last:border-0">
            {/* Freelancer */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 text-[12px] font-bold flex-shrink-0" style={{background:esc.avatarBg}}>
                {esc.initials}
              </div>
              <span className="text-[14px] font-semibold text-slate-900">{esc.freelancer}</span>
            </div>
            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{width:`${esc.progressPct}%`,background:esc.progressColor}}/>
              </div>
              <span className="text-[13px] text-slate-500 font-medium w-10 text-right">{esc.progressPct}%</span>
            </div>
            {/* Status */}
            <div>
              <span className={`inline-flex px-3 py-1 rounded-full text-[11.5px] font-bold ${STATUS_STYLES[esc.status]}`}>
                {esc.status}
              </span>
            </div>
            {/* Amount */}
            <div className="text-right">
              <span className="text-[14px] font-bold text-slate-900">${esc.totalAmount.toLocaleString()}.00</span>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
          <span className="text-[12.5px] text-slate-400">Showing 3 of 24 projects</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[13px] text-slate-500 hover:bg-slate-50 transition-colors">Previous</button>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[13px] text-slate-600 font-semibold hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ClientDashboard() {
  // Toggle this to switch between empty and populated state
  const [hasData] = useState(true);
  return hasData ? <PopulatedDashboard /> : <EmptyState />;
}
