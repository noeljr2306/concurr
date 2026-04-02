"use client";

import { useState } from "react";
import { Trash2, Plus, ShieldCheck, Layers } from "lucide-react";

interface Milestone { id:number; name:string; amount:string; }

export default function FreelancerNewProjectPage() {
  const [title, setTitle]         = useState("");
  const [client, setClient]       = useState("");
  const [milestones, setMs]       = useState<Milestone[]>([
    { id:1, name:"Wireframes & Discovery", amount:"1500" },
    { id:2, name:"UI Design Phase",        amount:"3000" },
  ]);

  const nextId = Math.max(...milestones.map(m => m.id), 0) + 1;
  const total  = milestones.reduce((s, m) => s + (parseFloat(m.amount) || 0), 0);

  return (
    <div className="min-h-full bg-slate-100 flex flex-col pb-10">
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-[600px] p-10">
          <h1 className="text-[28px] font-bold text-slate-900 mb-1.5">Define Your Milestones</h1>
          <p className="text-[14px] text-slate-400 mb-8">Set clear targets for your secure escrow agreement</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Project Title</label>
              <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Website Redesign"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
            </div>
            <div>
              <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Freelancer Address/Email</label>
              <input value={client} onChange={e=>setClient(e.target.value)} placeholder="name@example.com or wallet address"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="flex items-center gap-2 text-[16px] font-bold text-slate-900">
                <Layers size={16} strokeWidth={2} className="text-indigo-700"/> Milestone Breakdown
              </h2>
              <span className="px-3 py-1 border border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider rounded-full">Draft Mode</span>
            </div>
            <div className="space-y-3">
              {milestones.map((m, idx) => (
                <div key={m.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Milestone {String(idx+1).padStart(2,"0")}</p>
                  <div className="flex items-center gap-3">
                    <input value={m.name} onChange={e=>setMs(ms=>ms.map(x=>x.id===m.id?{...x,name:e.target.value}:x))}
                      placeholder="Milestone description"
                      className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-[13.5px] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all"/>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2 whitespace-nowrap">Amount ($)</p>
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2.5 w-[110px]">
                      <span className="text-slate-400 text-[13px]">$</span>
                      <input value={m.amount} onChange={e=>setMs(ms=>ms.map(x=>x.id===m.id?{...x,amount:e.target.value}:x))}
                        type="number" min="0" className="w-full bg-transparent text-[13.5px] text-slate-800 focus:outline-none"/>
                    </div>
                    <button onClick={()=>setMs(ms=>ms.filter(x=>x.id!==m.id))} className="text-slate-300 hover:text-red-400 transition-colors">
                      <Trash2 size={16} strokeWidth={1.8}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={()=>setMs(ms=>[...ms,{id:nextId,name:"",amount:""}])}
            className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 text-[13.5px] font-bold mb-6 transition-colors">
            <Plus size={16} strokeWidth={2.5} className="rounded-full border-2 border-indigo-700"/> Add Another Milestone
          </button>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-5 mb-6 flex items-center justify-between">
            <div>
              <p className="text-[12px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Total Commitment</p>
              <p className="text-[22px] font-bold text-indigo-800">Total to Fund: ${total.toLocaleString()}</p>
            </div>
            <div className="flex items-center gap-1.5 text-[13px] text-slate-500">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              Platform fee: $25.00
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-3 py-4 bg-indigo-800 hover:bg-indigo-900 text-white text-[16px] font-bold rounded-2xl transition-colors mb-3">
            Create Escrow and Invite Client
          </button>
          <p className="text-center text-[12px] text-slate-400 leading-relaxed">
            By proceeding, you agree to Concurr's Terms of Service and authorize the smart contract to hold funds until milestones are approved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 mt-8 text-[12.5px] text-slate-400">
          <span className="flex items-center gap-2"><ShieldCheck size={15} strokeWidth={1.8}/>256-bit SSL Secure</span>
          <span className="flex items-center gap-2"><Layers size={15} strokeWidth={1.8}/>Smart Contract Protected</span>
        </div>
        <p className="text-[12px] text-slate-400 mt-4">© 2024 Concurr Fintech Solutions. All rights reserved.</p>
      </main>
    </div>
  );
}
