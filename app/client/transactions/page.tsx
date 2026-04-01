"use client";

import { useState } from "react";
import { Search, Download, ChevronDown, Calendar, ArrowDownCircle, ArrowUpCircle, RotateCcw, ExternalLink } from "lucide-react";
import { clientTransactions, type TxType, type TxStatus } from "@/data/client/clientData";

const TYPE_CONFIG: Record<TxType, { color: string; icon: typeof ArrowDownCircle }> = {
  Deposit: { color:"text-green-400", icon:ArrowDownCircle },
  Release: { color:"text-blue-400",  icon:ArrowUpCircle  },
  Refund:  { color:"text-red-400",   icon:RotateCcw      },
};

const STATUS_STYLES: Record<TxStatus, string> = {
  Settled: "bg-green-900/40 text-green-300 border border-green-700/40",
  Pending: "bg-amber-900/40 text-amber-300 border border-amber-700/40",
};

export default function TransactionsPage() {
  const [search, setSearch] = useState("");

  const filtered = clientTransactions.filter(t =>
    t.txId.toLowerCase().includes(search.toLowerCase()) ||
    t.counterparty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full bg-[#0f1423] flex flex-col px-8 py-8">
      {/* Page heading */}
      <div className="flex items-start justify-between mb-7">
        <div>
          <h1 className="text-[34px] font-bold text-indigo-400 tracking-tight">Transaction Ledger</h1>
          <p className="text-[14px] text-slate-400 mt-1">Real-time financial activity and fund tracking.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-600 bg-transparent hover:bg-slate-800 text-[13.5px] font-semibold text-slate-300 rounded-xl transition-colors">
          <Download size={15} strokeWidth={2}/>
          Download CSV
        </button>
      </div>

      {/* Filter bar */}
      <div className="bg-[#1a2236] border border-slate-700 rounded-2xl p-4 mb-5 flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1 bg-[#0f1423] border border-slate-700 rounded-xl px-4 py-2.5">
          <Search size={15} className="text-slate-500 flex-shrink-0"/>
          <input
            value={search}
            onChange={e=>setSearch(e.target.value)}
            placeholder="Search by Tx ID or Client..."
            className="flex-1 bg-transparent text-[13.5px] text-slate-300 placeholder:text-slate-600 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f1423] border border-slate-700 hover:border-slate-500 text-[13px] text-slate-300 rounded-xl transition-colors">
          All Types <ChevronDown size={14}/>
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f1423] border border-slate-700 hover:border-slate-500 text-[13px] text-slate-300 rounded-xl transition-colors">
          <Calendar size={14}/> Date Range <ChevronDown size={14}/>
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#1a2236] border border-slate-700 rounded-2xl overflow-hidden flex-1">
        {/* Header */}
        <div className="grid grid-cols-[1.2fr_1.8fr_1fr_2fr_1.2fr_1fr] gap-4 px-6 py-3.5 border-b border-slate-700">
          {["Date","Transaction ID","Type","Counterparty","Amount","Status"].map(h=>(
            <span key={h} className="text-[10.5px] font-bold text-slate-500 uppercase tracking-widest">{h}</span>
          ))}
        </div>

        {/* Rows */}
        {filtered.map(tx=>{
          const cfg  = TYPE_CONFIG[tx.type];
          const Icon = cfg.icon;
          return (
            <div key={tx.id} className="grid grid-cols-[1.2fr_1.8fr_1fr_2fr_1.2fr_1fr] gap-4 px-6 py-4 border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors">
              <span className="text-[13.5px] text-slate-300">{tx.date}</span>
              <span className="flex items-center gap-1.5 text-[13.5px] text-indigo-400 font-mono font-medium">
                {tx.txId}
                <ExternalLink size={12} className="text-slate-600 hover:text-slate-400 cursor-pointer transition-colors"/>
              </span>
              <span className={`flex items-center gap-1.5 text-[13.5px] font-semibold ${cfg.color}`}>
                <Icon size={14} strokeWidth={2}/>
                {tx.type}
              </span>
              <span className="text-[13.5px] text-slate-300">{tx.counterparty}</span>
              <span className="text-[13.5px] font-bold text-white">${tx.amount.toLocaleString()}.00</span>
              <span>
                <span className={`inline-flex px-2.5 py-1 rounded-full text-[11.5px] font-semibold ${STATUS_STYLES[tx.status]}`}>
                  {tx.status}
                </span>
              </span>
            </div>
          );
        })}

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-700">
          <span className="text-[12.5px] text-slate-500">Showing 1 to 5 of 124 results</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 border border-slate-700 rounded-lg text-[13px] text-slate-500 hover:border-slate-500 transition-colors">Previous</button>
            <button className="px-4 py-1.5 border border-slate-600 rounded-lg text-[13px] text-slate-300 font-semibold hover:border-slate-400 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
