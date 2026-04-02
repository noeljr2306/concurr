"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lock, Clock, Send, MoreHorizontal, Copy, Info, X } from "lucide-react";

type MS = "paid"|"in_progress"|"locked";
const MILESTONES = [
  { id:"1", title:"Project Discovery & UI Design", desc:"Complete Figma wireframes and high-fidelity mockups for all core screens.", amount:2400, status:"paid" as MS, released:"Released Mar 12, 2024" },
  { id:"2", title:"Frontend Implementation", desc:"Development of React components, state management, and API integration for the shopping cart and checkout flow.", amount:4850, status:"in_progress" as MS, deadline:"7 days remaining" },
  { id:"3", title:"Backend API & Database Integration", desc:"Setting up Node.js environment, MongoDB schemas, and payment gateway webhooks.", amount:6200, status:"locked" as MS },
];
const CHAT = [
  { id:"1", sender:"client" as const, text:"Hi! I've just updated the staging branch with the new navigation fixes. Can you take a look?", time:"10:24 AM" },
  { id:"2", sender:"you"    as const, text:"Looks great. The mobile menu is much smoother now. Checking the checkout flow next.", time:"10:31 AM" },
];
const TIMELINE = [
  { id:"1", label:"Milestone 2 Submitted",     date:"Today, 09:42 AM", active:true  },
  { id:"2", label:"Work Started on Milestone 2", date:"Mar 13, 2024",  active:false },
  { id:"3", label:"Milestone 1 Paid ($2,400)",  date:"Mar 12, 2024",   active:true  },
  { id:"4", label:"Funds Locked in Escrow",     date:"Mar 01, 2024",   active:false },
];

function InviteClientModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  return (
    <div className="fixed inset-0 bg-slate-600/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-[22px] font-bold text-slate-900 mb-1.5">Invite Your Client</h2>
        <p className="text-[13.5px] text-slate-400 mb-7">Funds are locked. Send this secure link to start the project.</p>
        <div className="mb-5">
          <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Email address</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="freelancer@example.com"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14.5px] font-bold rounded-xl transition-colors mb-5">
          Send Invite <Send size={15} strokeWidth={2}/>
        </button>
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-200"/>
          <span className="text-[11.5px] font-bold text-slate-400 uppercase tracking-widest">OR</span>
          <div className="flex-1 h-px bg-slate-200"/>
        </div>
        <div className="mb-5">
          <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Copy secure link</label>
          <div className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50">
            <span className="flex-1 text-[13.5px] text-slate-500 font-mono truncate">concurr.app/escrow/invite/0x8A...</span>
            <button onClick={()=>{setCopied(true);setTimeout(()=>setCopied(false),2000)}} className="text-slate-400 hover:text-slate-600 transition-colors">
              <Copy size={16} strokeWidth={1.8}/>
            </button>
          </div>
          {copied && <p className="text-[12px] text-green-600 mt-1 font-medium">Copied!</p>}
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mb-6">
          <Info size={16} strokeWidth={1.8} className="text-blue-500 flex-shrink-0 mt-0.5"/>
          <p className="text-[13px] text-blue-600 leading-relaxed">The Client will be able to review the milestones before accepting. Your funds remain safe.</p>
        </div>
        <div className="text-right">
          <button onClick={onClose} className="text-[13.5px] text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default function FreelancerWorkspacePage() {
  const [showInvite, setShowInvite] = useState(false);
  const [msgs, setMsgs] = useState(CHAT);
  const [msg, setMsg]   = useState("");

  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      <div className="px-8 py-7">
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-3">
          <Link href="/freelancer/projects" className="hover:text-slate-600 transition-colors">Projects</Link>
          <span>›</span><span className="text-slate-600">#ESC-4829</span>
        </div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-[30px] font-bold text-slate-900 tracking-tight">E-commerce App Development</h1>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[12px] font-bold rounded-full">Active Escrow</span>
              <span className="text-[13.5px] text-slate-500">Client: Marcus Thorne</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={()=>setShowInvite(true)} className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-600 text-[13px] font-semibold rounded-xl transition-colors">Invite Client</button>
            <button className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-[13.5px] font-bold rounded-xl transition-colors">Raise Dispute</button>
          </div>
        </div>

        <div className="grid gap-6 mt-7" style={{gridTemplateColumns:"1fr 340px"}}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold text-slate-900">Milestone Tracker</h2>
              <span className="text-[13.5px] text-slate-400">2 of 5 completed</span>
            </div>
            <div className="space-y-4">
              {MILESTONES.map(m => {
                if (m.status === "paid") return (
                  <div key={m.id} className="border border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-white">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 size={18} strokeWidth={2} className="text-green-600"/></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-bold text-slate-400 line-through">{m.title}</p>
                        <span className="text-[12px] font-bold text-green-600 uppercase">PAID</span>
                      </div>
                      <p className="text-[13px] text-slate-400 mb-2">{m.desc}</p>
                      <p className="text-[13px] text-slate-500"><span className="font-bold">${m.amount.toLocaleString()}.00</span> • {m.released}</p>
                    </div>
                  </div>
                );
                if (m.status === "in_progress") return (
                  <div key={m.id} className="border-2 border-indigo-700 rounded-xl p-5 flex items-start gap-4 bg-white">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5"><MoreHorizontal size={16} strokeWidth={2} className="text-slate-500"/></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-bold text-slate-900">{m.title}</p>
                        <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-[11.5px] font-bold text-indigo-700 rounded-full uppercase">IN PROGRESS</span>
                      </div>
                      <p className="text-[13px] text-slate-500 mb-4">{m.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Amount</p><p className="text-[16px] font-bold text-slate-900">${m.amount.toLocaleString()}.00</p></div>
                          <div><p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Deadline</p><p className="text-[13.5px] font-bold text-orange-500 flex items-center gap-1"><Clock size={13} strokeWidth={2}/>{m.deadline}</p></div>
                        </div>
                        <button className="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13.5px] font-bold rounded-xl transition-colors">Submit Work</button>
                      </div>
                    </div>
                  </div>
                );
                return (
                  <div key={m.id} className="border border-dashed border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-slate-50/50">
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5"><Lock size={15} strokeWidth={1.8} className="text-slate-400"/></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[15px] font-bold text-slate-400">{m.title}</p>
                        <span className="text-[12px] font-bold text-slate-400 uppercase">LOCKED</span>
                      </div>
                      <p className="text-[13px] text-slate-400 mb-2">{m.desc}</p>
                      <p className="text-[15px] font-bold text-slate-400">${m.amount.toLocaleString()}.00</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"/><span className="text-[14px] font-bold text-slate-900">Project Chat</span></div>
                <button className="text-slate-400 hover:text-slate-600 transition-colors"><MoreHorizontal size={16} strokeWidth={1.8}/></button>
              </div>
              <div className="p-4 space-y-3 min-h-[180px] max-h-[240px] overflow-y-auto">
                {msgs.map(m => (
                  <div key={m.id} className={`flex ${m.sender==="you"?"justify-end":"justify-start"}`}>
                    <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${m.sender==="you"?"bg-indigo-700 text-white rounded-br-sm":"bg-slate-100 text-slate-800 rounded-bl-sm"}`}>
                      {m.text}
                      <p className={`text-[10.5px] mt-1 ${m.sender==="you"?"text-indigo-300":"text-slate-400"}`}>{m.sender==="client"?`Client • ${m.time}`:`You • ${m.time}`}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100">
                <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&msg.trim()){setMsgs(ms=>[...ms,{id:String(Date.now()),sender:"you",text:msg.trim(),time:"Now"}]);setMsg("");}}}
                  placeholder="Type a message..." className="flex-1 text-[13px] text-slate-700 placeholder:text-slate-300 focus:outline-none"/>
                <button onClick={()=>{if(msg.trim()){setMsgs(ms=>[...ms,{id:String(Date.now()),sender:"you",text:msg.trim(),time:"Now"}]);setMsg("");}}} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Send size={16} strokeWidth={2}/>
                </button>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Project Timeline</p>
              <div className="space-y-4">
                {TIMELINE.map(evt => (
                  <div key={evt.id} className="flex items-start gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${evt.active?"bg-indigo-700":"bg-slate-200"}`}/>
                    <div><p className="text-[13.5px] font-semibold text-slate-800">{evt.label}</p><p className="text-[12px] text-slate-400">{evt.date}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showInvite && <InviteClientModal onClose={()=>setShowInvite(false)}/>}
    </div>
  );
}
