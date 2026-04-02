"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2, Lock, Clock, Send, MoreHorizontal,
  ArrowRight, Copy, Info, X, LinkIcon, CreditCard
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
type MilestoneStatus = "paid" | "in_progress" | "locked";
interface Milestone {
  id: string; title: string; desc: string;
  amount: number; status: MilestoneStatus;
  deadline?: string; released?: string;
}
interface ChatMsg { id: string; sender: "alex"|"you"; text: string; time: string; }
interface TimelineEvent { id: string; label: string; date: string; active: boolean; }

// ── Mock data ─────────────────────────────────────────────────────────────────
const MILESTONES: Milestone[] = [
  { id:"1", title:"Project Discovery & UI Design", desc:"Complete Figma wireframes and high-fidelity mockups for all core screens.", amount:2400, status:"paid", released:"Released Mar 12, 2024" },
  { id:"2", title:"Frontend Implementation",       desc:"Development of React components, state management, and API integration for the shopping cart and checkout flow.", amount:4850, status:"in_progress", deadline:"7 days remaining" },
  { id:"3", title:"Backend API & Database Integration", desc:"Setting up Node.js environment, MongoDB schemas, and payment gateway webhooks.", amount:6200, status:"locked" },
];
const CHAT: ChatMsg[] = [
  { id:"1", sender:"alex", text:"Hi! I've just updated the staging branch with the new navigation fixes. Can you take a look?", time:"10:24 AM" },
  { id:"2", sender:"you",  text:"Looks great, Alex. The mobile menu is much smoother now. Checking the checkout flow next.", time:"10:31 AM" },
  { id:"3", sender:"alex", text:"Perfect. I'll start working on the payment gateway integration once Milestone 2 is", time:"10:45 AM" },
];
const TIMELINE: TimelineEvent[] = [
  { id:"1", label:"Milestone 2 Submitted",    date:"Today, 09:42 AM", active:true  },
  { id:"2", label:"Work Started on Milestone 2", date:"Mar 13, 2024", active:false },
  { id:"3", label:"Milestone 1 Paid ($2,400)", date:"Mar 12, 2024",   active:true  },
  { id:"4", label:"Funds Locked in Escrow",   date:"Mar 01, 2024",   active:false },
];

// ── Milestone card ────────────────────────────────────────────────────────────
function MilestoneCard({ m, onReview }: { m: Milestone; onReview: () => void }) {
  if (m.status === "paid") return (
    <div className="border border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-white">
      <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <CheckCircle2 size={18} strokeWidth={2} className="text-green-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[15px] font-bold text-slate-400 line-through">{m.title}</p>
          <span className="text-[12px] font-bold text-green-600 uppercase tracking-wider">PAID</span>
        </div>
        <p className="text-[13px] text-slate-400 mb-3">{m.desc}</p>
        <div className="flex items-center gap-2 text-[13px] text-slate-500">
          <span className="font-bold">${m.amount.toLocaleString()}.00</span>
          <span className="text-slate-300">•</span>
          <span>{m.released}</span>
        </div>
      </div>
    </div>
  );

  if (m.status === "in_progress") return (
    <div className="border-2 border-indigo-700 rounded-xl p-5 flex items-start gap-4 bg-white">
      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <MoreHorizontal size={16} strokeWidth={2} className="text-slate-500" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[15px] font-bold text-slate-900">{m.title}</p>
          <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-[11.5px] font-bold text-indigo-700 rounded-full uppercase tracking-wider">IN PROGRESS</span>
        </div>
        <p className="text-[13px] text-slate-500 mb-4">{m.desc}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Amount</p>
              <p className="text-[16px] font-bold text-slate-900">${m.amount.toLocaleString()}.00</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Deadline</p>
              <p className="text-[13.5px] font-bold text-orange-500 flex items-center gap-1">
                <Clock size={13} strokeWidth={2} /> {m.deadline}
              </p>
            </div>
          </div>
          <button
            onClick={onReview}
            className="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13.5px] font-bold rounded-xl transition-colors"
          >
            Review Deliverables
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="border border-dashed border-slate-200 rounded-xl p-5 flex items-start gap-4 bg-slate-50/50">
      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Lock size={15} strokeWidth={1.8} className="text-slate-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[15px] font-bold text-slate-400">{m.title}</p>
          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">LOCKED</span>
        </div>
        <p className="text-[13px] text-slate-400 mb-2">{m.desc}</p>
        <p className="text-[15px] font-bold text-slate-400">${m.amount.toLocaleString()}.00</p>
      </div>
    </div>
  );
}

// ── Invite Modal ──────────────────────────────────────────────────────────────
function InviteModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const link = "concurr.app/escrow/invite/0x8A...";

  function handleCopy() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="fixed inset-0 bg-slate-600/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-[22px] font-bold text-slate-900 mb-1.5">Invite Your Freelancer</h2>
        <p className="text-[13.5px] text-slate-400 mb-7">Funds are locked. Send this secure link to start the project.</p>

        <div className="mb-5">
          <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Email address</label>
          <input
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder="freelancer@example.com"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
          />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14.5px] font-bold rounded-xl transition-colors mb-5">
          Send Invite <Send size={15} strokeWidth={2} />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[11.5px] font-bold text-slate-400 uppercase tracking-widest">OR</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <div className="mb-5">
          <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Copy secure link</label>
          <div className="flex items-center gap-2 px-4 py-3 border border-slate-200 rounded-xl bg-slate-50">
            <span className="flex-1 text-[13.5px] text-slate-500 font-mono truncate">{link}</span>
            <button onClick={handleCopy} className="text-slate-400 hover:text-slate-600 transition-colors">
              <Copy size={16} strokeWidth={1.8} />
            </button>
          </div>
          {copied && <p className="text-[12px] text-green-600 mt-1 font-medium">Copied!</p>}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 mb-6">
          <Info size={16} strokeWidth={1.8} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <p className="text-[13px] text-blue-600 leading-relaxed">
            The freelancer will be able to review the milestones before accepting. Your funds remain safe.
          </p>
        </div>

        <div className="text-right">
          <button onClick={onClose} className="text-[13.5px] text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ── Fund Modal ────────────────────────────────────────────────────────────────
function FundModal({ amount, onClose, onConfirm }: { amount: number; onClose: () => void; onConfirm: () => void }) {
  const [method, setMethod] = useState<"wallet"|"card">("wallet");

  return (
    <div className="fixed inset-0 bg-slate-400/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-7">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[20px] font-bold text-slate-900">Fund Project: ${amount.toLocaleString()}</h2>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors">
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Connected wallet */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Connected Wallet</span>
            <button className="text-[13px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Disconnect</button>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <LinkIcon size={14} strokeWidth={1.8} className="text-slate-500" />
            <span className="text-[14px] font-mono font-semibold text-slate-700">0x8A...3F9C</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] text-slate-400 mb-0.5">Available Balance</p>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-bold text-slate-900">2,100 USDC</span>
                <CheckCircle2 size={16} strokeWidth={2} className="text-green-500" />
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.6">
                <rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Payment method */}
        <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Select Payment Method</p>
        <div className="space-y-3 mb-6">
          {/* Wallet option */}
          <button
            onClick={() => setMethod("wallet")}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${method === "wallet" ? "border-indigo-700 bg-white" : "border-slate-200 bg-white hover:border-slate-300"}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === "wallet" ? "border-indigo-700" : "border-slate-300"}`}>
                {method === "wallet" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />}
              </div>
              <div className="text-left">
                <p className="text-[13.5px] font-bold text-slate-900">Pay with Linked Wallet Balance</p>
                <p className="text-[12px] text-slate-400">Fast & secure USDC transaction</p>
              </div>
            </div>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.6">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
          </button>

          {/* Card option */}
          <button
            onClick={() => setMethod("card")}
            className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${method === "card" ? "border-indigo-700 bg-white" : "border-slate-200 bg-white hover:border-slate-300"}`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${method === "card" ? "border-indigo-700" : "border-slate-300"}`}>
                {method === "card" && <div className="w-2.5 h-2.5 rounded-full bg-indigo-700" />}
              </div>
              <div className="text-left">
                <p className="text-[13.5px] font-bold text-slate-900">Pay with Card (Fiat)</p>
                <p className="text-[12px] text-orange-400 flex items-center gap-1.5">
                  <span className="w-3 h-2 rounded-sm bg-green-500 inline-block" />
                  <span className="w-3 h-2 rounded-sm bg-orange-400 inline-block" />
                  Extra fees may apply
                </p>
              </div>
            </div>
            <CreditCard size={20} strokeWidth={1.6} className="text-slate-400" />
          </button>
        </div>

        <button
          onClick={onConfirm}
          className="w-full flex items-center justify-center gap-2.5 py-4 bg-indigo-700 hover:bg-indigo-800 text-white text-[15px] font-bold rounded-xl transition-colors mb-3"
        >
          <Lock size={16} strokeWidth={2} /> Sign & Lock Funds
        </button>
        <p className="text-center text-[12px] text-slate-400 leading-relaxed">
          By clicking "Sign & Lock Funds", you authorize the smart contract to hold ${amount.toLocaleString()} in escrow until project milestones are completed.
        </p>
      </div>
    </div>
  );
}

// ── Transaction Confirmed Modal ───────────────────────────────────────────────
function TxConfirmedModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-slate-100/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center" style={{boxShadow:"0 0 0 12px #e0e7ff, 0 0 0 24px #eef2ff"}}>
            <div className="w-14 h-14 rounded-full bg-indigo-700 flex items-center justify-center">
              <CheckCircle2 size={28} strokeWidth={2.5} className="text-white" />
            </div>
          </div>
        </div>

        <h2 className="text-[22px] font-bold text-slate-900 mb-2">Transaction Confirmed</h2>
        <p className="text-[13.5px] text-slate-400 mb-7">Your funds have been securely locked in escrow.</p>

        {/* Detail rows */}
        <div className="border border-slate-100 rounded-xl overflow-hidden mb-7 text-left">
          {[
            { label:"PROJECT",        value:"E-commerce App Development", valueClass:"font-bold text-slate-900"       },
            { label:"AMOUNT",         value:"$1,500.00 USDC",              valueClass:"font-bold text-indigo-700"      },
            { label:"TRANSACTION ID", value:"0x4f...a1b",                  valueClass:"font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg text-[13px]" },
          ].map((row, i) => (
            <div key={row.label} className={`flex items-center justify-between px-5 py-3.5 ${i < 2 ? "border-b border-slate-100" : ""}`}>
              <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">{row.label}</span>
              <span className={`text-[14px] ${row.valueClass}`}>{row.value}</span>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14.5px] font-bold rounded-xl transition-colors mb-4"
        >
          View Project Workspace <ArrowRight size={16} strokeWidth={2.5} />
        </button>

        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest flex items-center justify-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="9" height="9" rx="2"/><rect x="13" y="2" width="9" height="9" rx="2"/><rect x="2" y="13" width="9" height="9" rx="2"/><rect x="13" y="13" width="9" height="9" rx="2"/></svg>
          Powered by Concurr
        </p>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function ProjectWorkspacePage() {
  const [modal, setModal]   = useState<"none"|"invite"|"fund"|"confirmed">("none");
  const [message, setMsg]   = useState("");
  const [messages, setMsgs] = useState<ChatMsg[]>(CHAT);

  function sendMessage() {
    if (!message.trim()) return;
    setMsgs(m => [...m, { id: String(Date.now()), sender:"you", text:message.trim(), time:"Now" }]);
    setMsg("");
  }

  return (
    <div className="flex-1 bg-slate-50 overflow-auto">
      <div className="px-8 py-7">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[13px] text-slate-400 mb-3">
          <Link href="/client/projects" className="hover:text-slate-600 transition-colors uppercase tracking-wide text-[11px] font-bold">Projects</Link>
          <span>›</span>
          <span className="text-slate-600 font-semibold">#ESC-4829</span>
        </div>

        {/* Title row */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-[30px] font-bold text-slate-900 tracking-tight">E-commerce App Development</h1>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-[12px] font-bold rounded-full">Active Escrow</span>
              <span className="text-[13.5px] text-slate-500">Freelancer: Alex Rivera</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setModal("invite")} className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-600 text-[13px] font-semibold rounded-xl transition-colors">
              Invite Freelancer
            </button>
            <button onClick={() => setModal("fund")} className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white text-[13.5px] font-bold rounded-xl transition-colors">
              Raise Dispute
            </button>
          </div>
        </div>

        {/* 2-col layout */}
        <div className="grid gap-6 mt-7" style={{gridTemplateColumns:"1fr 340px"}}>
          {/* Left: milestone tracker */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[18px] font-bold text-slate-900">Milestone Tracker</h2>
              <span className="text-[13.5px] text-slate-400">2 of 5 completed</span>
            </div>
            <div className="space-y-4">
              {MILESTONES.map(m => (
                <MilestoneCard key={m.id} m={m} onReview={() => setModal("fund")} />
              ))}
            </div>
          </div>

          {/* Right: chat + timeline */}
          <div className="space-y-5">
            {/* Chat */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[14px] font-bold text-slate-900">Project Chat</span>
                </div>
                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                  <MoreHorizontal size={16} strokeWidth={1.8} />
                </button>
              </div>

              <div className="p-4 space-y-3 min-h-[180px] max-h-[240px] overflow-y-auto">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                      msg.sender === "you"
                        ? "bg-indigo-700 text-white rounded-br-sm"
                        : "bg-slate-100 text-slate-800 rounded-bl-sm"
                    }`}>
                      {msg.text}
                      <p className={`text-[10.5px] mt-1 ${msg.sender === "you" ? "text-indigo-300" : "text-slate-400"}`}>
                        {msg.sender === "alex" ? `Alex • ${msg.time}` : `You • ${msg.time}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100">
                <input
                  value={message}
                  onChange={e => setMsg(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 text-[13px] text-slate-700 placeholder:text-slate-300 focus:outline-none"
                />
                <button onClick={sendMessage} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Send size={16} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">Project Timeline</p>
              <div className="space-y-4">
                {TIMELINE.map(evt => (
                  <div key={evt.id} className="flex items-start gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${evt.active ? "bg-indigo-700" : "bg-slate-200"}`} />
                    <div>
                      <p className="text-[13.5px] font-semibold text-slate-800">{evt.label}</p>
                      <p className="text-[12px] text-slate-400">{evt.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modal === "invite"    && <InviteModal    onClose={() => setModal("none")} />}
      {modal === "fund"      && <FundModal      amount={1500} onClose={() => setModal("none")} onConfirm={() => setModal("confirmed")} />}
      {modal === "confirmed" && <TxConfirmedModal onClose={() => setModal("none")} />}
    </div>
  );
}
