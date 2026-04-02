"use client";
import { useState } from "react";
import { Search, Download, ChevronDown, Calendar, ArrowDownCircle, ArrowUpCircle, RotateCcw, ExternalLink } from "lucide-react";
import { freelancerTransactions } from "@/data/freelancer/freelancerData";

type TxType = "Deposit"|"Release"|"Refund";
type TxStatus = "Settled"|"Pending";
const TYPE_CONFIG: Record<TxType, { color:string; icon:typeof ArrowDownCircle }> = {
  Deposit: { color:"text-green-600", icon:ArrowDownCircle },
  Release: { color:"text-blue-600",  icon:ArrowUpCircle  },
  Refund:  { color:"text-red-500",   icon:RotateCcw      },
};
const STATUS_STYLES: Record<TxStatus, string> = {
  Settled: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
};

export default function FreelancerTransactionsPage() {
  const [search, setSearch] = useState("");
  const filtered = freelancerTransactions.filter(t =>
    t.txId.toLowerCase().includes(search.toLowerCase()) ||
    t.counterparty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 bg-slate-50 px-8 py-8">
      <div className="flex items-start justify-between mb-7">
        <div>
          <h1 className="text-[34px] font-bold text-slate-900 tracking-tight">Transaction Ledger</h1>
          <p className="text-[14px] text-slate-500 mt-1">Real-time financial activity and fund tracking.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-[13.5px] font-semibold text-slate-600 rounded-xl transition-colors">
          <Download size={15} strokeWidth={2}/> Download CSV
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-5 flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
          <Search size={15} className="text-slate-400 flex-shrink-0"/>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by Tx ID or Client..."
            className="flex-1 bg-transparent text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none"/>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-[13px] text-slate-600 rounded-xl transition-colors">All Types <ChevronDown size={14}/></button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-[13px] text-slate-600 rounded-xl transition-colors"><Calendar size={14}/> Date Range <ChevronDown size={14}/></button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1.2fr_1.8fr_1fr_2fr_1.2fr_1fr] gap-4 px-6 py-3.5 border-b border-slate-100">
          {["Date","Transaction ID","Type","Counterparty","Amount","Status"].map(h => (
            <span key={h} className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">{h}</span>
          ))}
        </div>
        {filtered.map(tx => {
          const cfg  = TYPE_CONFIG[tx.type as TxType];
          const Icon = cfg.icon;
          return (
            <div key={tx.id} className="grid grid-cols-[1.2fr_1.8fr_1fr_2fr_1.2fr_1fr] gap-4 px-6 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <span className="text-[13.5px] text-slate-600">{tx.date}</span>
              <span className="flex items-center gap-1.5 text-[13.5px] text-indigo-600 font-mono font-medium">
                {tx.txId}<ExternalLink size={12} className="text-slate-400 hover:text-slate-600 cursor-pointer"/>
              </span>
              <span className={`flex items-center gap-1.5 text-[13.5px] font-semibold ${cfg.color}`}><Icon size={14} strokeWidth={2}/>{tx.type}</span>
              <span className="text-[13.5px] text-slate-700">{tx.counterparty}</span>
              <span className="text-[13.5px] font-bold text-slate-900">${tx.amount.toLocaleString()}.00</span>
              <span><span className={`inline-flex px-2.5 py-1 rounded-full text-[11.5px] font-semibold ${STATUS_STYLES[tx.status as TxStatus]}`}>{tx.status}</span></span>
            </div>
          );
        })}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
          <span className="text-[12.5px] text-slate-400">Showing 1 to 5 of 124 results</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[13px] text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[13px] text-slate-600 font-semibold hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
