"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ArrowRight } from "lucide-react";

function WalletTopNav() {
  const links = [
    { label:"Dashboard", href:"/freelancer/dashboard" },
    { label:"Escrows",   href:"/freelancer/projects"  },
    { label:"Balances",  href:"/freelancer/wallets"   },
    { label:"Settings",  href:"/freelancer/settings"  },
  ];
  return (
    <header className="bg-white border-b border-slate-200 px-8 flex items-center justify-between h-[58px] flex-shrink-0">
      <div className="flex items-center gap-8">
        <Link href="/freelancer/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-700 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="white"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="white"/></svg>
          </div>
          <span className="font-bold text-[16px] text-slate-900">Concurr</span>
        </Link>
        <nav className="flex items-center gap-1">
          {links.map(l => {
            const active = l.href === "/freelancer/wallets";
            return (
              <Link key={l.href} href={l.href}
                className={`px-4 py-1.5 text-[13.5px] font-medium transition-colors border-b-2 ${active ? "text-indigo-700 font-bold border-indigo-700" : "text-slate-500 hover:text-slate-700 border-transparent"}`}>
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"><Bell size={17} strokeWidth={1.8}/></button>
        <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </div>
      </div>
    </header>
  );
}

export default function FreelancerWalletsPage() {
  const [dest, setDest] = useState<"web3"|"bank">("bank");

  return (
    <div className="min-h-screen flex flex-col bg-slate-100" style={{marginTop:"-58px"}}>
      <WalletTopNav/>
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-[620px] p-10">
          <h1 className="text-[26px] font-bold text-slate-900 mb-1.5">Balances &amp; Withdrawals</h1>
          <p className="text-[14px] text-slate-400 mb-8">Manage refunds and canceled escrow funds.</p>

          {/* Balance box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-2">Available to Withdraw</p>
            <div className="flex items-center gap-3">
              <span className="text-[36px] font-bold text-slate-900">$1,500.00</span>
              <span className="text-[18px] text-slate-500 font-medium">USDC</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-[12px] font-bold rounded-full">Ready</span>
            </div>
          </div>

          <h2 className="text-[18px] font-bold text-slate-900 mb-4">Select Destination</h2>

          <div className="space-y-3 mb-6">
            {/* Web3 */}
            <button onClick={()=>setDest("web3")} className={`w-full flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left ${dest==="web3"?"border-indigo-700":"border-slate-200 hover:border-slate-300"}`}>
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-bold text-slate-900">Connected Web3 Account</p>
                <p className="text-[13px] text-slate-400">Withdraw instantly to</p>
                <p className="text-[13px] font-mono text-slate-600">0x8A...3F9C</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${dest==="web3"?"border-indigo-700":"border-slate-300"}`}>
                {dest==="web3" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-700"/>}
              </div>
            </button>
            {/* Bank */}
            <button onClick={()=>setDest("bank")} className={`w-full flex items-start gap-4 p-5 rounded-xl border-2 transition-all text-left ${dest==="bank"?"border-indigo-700":"border-slate-200 hover:border-slate-300"}`}>
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.6"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/><path d="M3 13h18"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-bold text-slate-900">Bank Account</p>
                <p className="text-[13px] text-slate-400 leading-relaxed">Convert USDC and withdraw to your linked bank account.</p>
                <p className="text-[12px] text-slate-400 mt-1">Estimated processing time <span className="float-right font-semibold text-slate-600">1-2 business days</span></p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 ${dest==="bank"?"border-indigo-700":"border-slate-300"}`}>
                {dest==="bank" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-700"/>}
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between text-[13.5px] text-slate-500 mb-5">
            <span>Network Fee</span><span>~$0.01</span>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-700 hover:bg-indigo-800 text-white text-[15px] font-bold rounded-xl transition-colors mb-3">
            Withdraw $1,500.00 <ArrowRight size={16} strokeWidth={2.5}/>
          </button>
          <p className="text-center text-[12px] text-slate-400">Secure transaction powered by Concurr Escrow Infrastructure.</p>
        </div>

        <div className="flex items-center gap-5 mt-8 text-[12px] text-slate-400">
          {["Help Center","Legal & Privacy","Contact Support"].map(t => <button key={t} className="hover:text-slate-600 transition-colors">{t}</button>)}
        </div>
      </main>
    </div>
  );
}
