"use client";

import { useState } from "react";
import { User, Bell, Settings, Copy, Lock, ChevronDown, Pencil } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${on ? "bg-green-500" : "bg-slate-200"}`}
    >
      <span className={`inline-block w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 absolute top-0.5 ${on ? "translate-x-6" : "translate-x-0.5"}`} />
    </button>
  );
}

function Select({ options, defaultValue }: { options: string[]; defaultValue: string }) {
  const [val, setVal] = useState(defaultValue);
  return (
    <div className="relative">
      <select
        value={val}
        onChange={e => setVal(e.target.value)}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
      >
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
    </div>
  );
}

const SECTIONS = [
  { id: "general",       label: "General",                   icon: User },
  { id: "notifications", label: "Notifications and Security", icon: Bell },
];

export default function ClientSettingsPage() {
  const [active, setActive]   = useState("general");
  const [name, setName]       = useState("Acme Corporation");
  const [email]               = useState("billing@acme.com");
  const [copied, setCopied]   = useState(false);
  const accountId             = "0x8A...3F9C";

  function handleCopy() { setCopied(true); setTimeout(() => setCopied(false), 2000); }

  return (
    <div className="min-h-full bg-slate-50 flex">
      {/* Settings sidebar */}
      <aside className="w-[280px] min-w-[280px] bg-white border-r border-slate-200 flex flex-col min-h-full">
        <div className="px-6 py-6 border-b border-slate-100">
          <p className="text-[18px] font-bold text-indigo-700 tracking-tight">Concurr</p>
          <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Management Portal</p>
        </div>
        <nav className="flex-1 px-3 py-4">
          {SECTIONS.map(s => {
            const Icon   = s.icon;
            const active_ = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 text-[13.5px] font-medium transition-all text-left ${active_ ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"}`}
              >
                <Icon size={16} strokeWidth={active_ ? 2.2 : 1.8} />
                {s.label}
              </button>
            );
          })}
        </nav>
        {/* Bottom: workspace settings */}
        <div className="border-t border-slate-100 px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
            <Settings size={16} strokeWidth={1.8} className="text-slate-500" />
          </div>
          <div>
            <p className="text-[13px] font-bold text-slate-800">Workspace Settings</p>
            <p className="text-[11.5px] text-slate-400">v2.4.0-stable</p>
          </div>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 px-12 py-10 overflow-auto">

        {/* ── GENERAL ── */}
        {active === "general" && (
          <>
            <h1 className="text-[26px] font-bold text-slate-900 mb-1">General Settings</h1>
            <p className="text-[14px] text-slate-400 mb-10">Manage your professional profile and account identifiers.</p>

            {/* Profile Photo */}
            <section className="mb-10">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-5">Profile Photo</p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <svg width="52" height="52" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="20" r="12" fill="#fdba74"/>
                      <ellipse cx="30" cy="50" rx="20" ry="15" fill="#fdba74"/>
                    </svg>
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
                    <Pencil size={12} strokeWidth={2} className="text-slate-600" />
                  </button>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-900">{name}</p>
                  <p className="text-[13px] text-slate-400 mb-1.5">Update your organization's visual identity.</p>
                  <button className="text-[12px] font-bold text-indigo-700 hover:text-indigo-900 uppercase tracking-widest transition-colors">
                    Edit Avatar
                  </button>
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-10" />

            {/* Core Details */}
            <section className="mb-10 max-w-2xl">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Core Details</p>
              <div className="space-y-5">
                <div>
                  <label className="block text-[13.5px] text-slate-700 mb-2">Full Name</label>
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13.5px] text-slate-700 mb-2">Primary Email</label>
                  <div className="relative">
                    <input
                      readOnly value={email}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-400 bg-slate-50 focus:outline-none"
                    />
                    <Lock size={15} strokeWidth={1.8} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13.5px] text-slate-700 mb-2">Account ID</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-[14px] font-mono text-slate-600 bg-white">
                      {accountId}
                    </div>
                    <button onClick={handleCopy} className="w-12 h-12 border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors flex-shrink-0">
                      <Copy size={16} strokeWidth={1.8} />
                    </button>
                  </div>
                  {copied && <p className="text-[12px] text-green-600 mt-1 font-medium">Copied!</p>}
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-10" />

            {/* Preferences */}
            <section className="mb-12 max-w-2xl">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Preferences</p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13.5px] text-slate-700 mb-2">Display Currency</label>
                  <Select options={["USD - US Dollar","EUR - Euro","GBP - British Pound","USDC"]} defaultValue="USD - US Dollar" />
                </div>
                <div>
                  <label className="block text-[13.5px] text-slate-700 mb-2">Language</label>
                  <Select options={["English (US)","English (UK)","French","Spanish","German"]} defaultValue="English (US)" />
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-8" />
            <div className="flex justify-end max-w-2xl">
              <button className="px-8 py-3.5 bg-indigo-800 hover:bg-indigo-900 text-white text-[14px] font-bold rounded-xl transition-colors">
                Save Changes
              </button>
            </div>
          </>
        )}

        {/* ── NOTIFICATIONS ── */}
        {active === "notifications" && (
          <>
            <h1 className="text-[26px] font-bold text-slate-900 mb-1">Notification &amp; Escrow Alerts</h1>
            <p className="text-[14px] text-slate-400 mb-10">Manage how you are notified about contract state changes.</p>

            <section className="mb-10">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Critical Action Alerts</p>
              <div className="space-y-8 max-w-2xl">
                {[
                  { title:"Work Submitted for Review",  desc:"URGENT: Alert me the moment a freelancer submits work and the 7-day auto-release timer begins", defaultOn:true  },
                  { title:"Contract Funded & Locked",   desc:"Receipts for when your funds are successfully deployed to the blockchain",                        defaultOn:true  },
                  { title:"Dispute & Support Updates",  desc:"Alert me when a multi-sig resolution is reached",                                                 defaultOn:false },
                ].map(item => (
                  <div key={item.title} className="flex items-start justify-between gap-8">
                    <div>
                      <p className="text-[14.5px] font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <Toggle defaultOn={item.defaultOn} />
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-slate-200 mb-10" />

            <section className="mb-10 max-w-2xl">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Account Details</p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] text-slate-600 mb-2">Full Name or Company Name</label>
                  <input defaultValue="Acme Corporation" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all" />
                </div>
                <div>
                  <label className="block text-[13px] text-slate-600 mb-2">Primary Email Address</label>
                  <input defaultValue="billing@acme.com" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all" />
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-10" />

            <section className="mb-12 max-w-2xl">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Security</p>
              <div className="flex items-center justify-between p-5 border border-slate-200 rounded-xl">
                <div>
                  <p className="text-[14.5px] font-bold text-slate-900 mb-0.5">Two-Factor Authentication (2FA)</p>
                  <p className="text-[13px] text-slate-400">Require 2FA before releasing escrow funds.</p>
                </div>
                <button className="px-5 py-2.5 border border-slate-300 hover:border-indigo-400 text-[13.5px] font-bold text-slate-700 hover:text-indigo-700 rounded-xl transition-colors">
                  Enable 2FA
                </button>
              </div>
            </section>

            <div className="flex justify-end max-w-2xl">
              <button className="px-8 py-3.5 bg-indigo-800 hover:bg-indigo-900 text-white text-[14px] font-bold rounded-xl transition-colors">
                Save Account Settings
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
