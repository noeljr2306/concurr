"use client";

import { useState } from "react";
import { Settings, Bell } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${on ? "bg-green-500" : "bg-slate-200"}`}
    >
      <span className={`inline-block w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 absolute top-0.5 ${on ? "translate-x-6" : "translate-x-0.5"}`}/>
    </button>
  );
}

const settingsSections = [
  { id:"general",       label:"General",                  icon:Settings },
  { id:"notifications", label:"Notifications and Security", icon:Bell    },
];

export default function ClientSettingsPage() {
  const [activeSection, setActiveSection] = useState("notifications");
  const [companyName, setCompanyName]     = useState("Acme Corporation");
  const [email, setEmail]                 = useState("billing@acme.com");

  return (
    <div className="min-h-full bg-slate-100 flex">
      {/* Settings sidebar */}
      <aside className="w-[280px] min-w-[280px] bg-white border-r border-slate-200 flex flex-col min-h-full">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-slate-100">
          <p className="text-[17px] font-bold text-indigo-700 tracking-tight">Concurr</p>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">B2B Escrow Utility</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4">
          {settingsSections.map(s=>{
            const active = activeSection===s.id;
            const Icon   = s.icon;
            return (
              <button
                key={s.id}
                onClick={()=>setActiveSection(s.id)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 text-[13.5px] font-medium transition-all text-left ${
                  active ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                }`}
              >
                <Icon size={16} strokeWidth={active ? 2.2 : 1.8}/>
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom user */}
        <div className="border-t border-slate-100 px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-700 flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">AC</div>
          <div>
            <p className="text-[13px] font-bold text-slate-900">Acme Corp</p>
            <p className="text-[11.5px] text-slate-400">Enterprise Plan</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 px-12 py-10 overflow-auto">
        {activeSection === "notifications" && (
          <>
            <h1 className="text-[26px] font-bold text-slate-900 mb-1">Notification &amp; Escrow Alerts</h1>
            <p className="text-[14px] text-slate-400 mb-10">Manage how you are notified about contract state changes.</p>

            {/* Critical Action Alerts */}
            <section className="mb-10">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Critical Action Alerts</p>
              <div className="space-y-8">
                {[
                  { title:"Work Submitted for Review",  desc:"URGENT: Alert me the moment a freelancer submits work and the 7-day auto-release timer begins", defaultOn:true  },
                  { title:"Contract Funded & Locked",   desc:"Receipts for when your funds are successfully deployed to the blockchain",                        defaultOn:true  },
                  { title:"Dispute & Support Updates",  desc:"Alert me when a multi-sig resolution is reached",                                                 defaultOn:false },
                ].map(item=>(
                  <div key={item.title} className="flex items-start justify-between gap-8">
                    <div>
                      <p className="text-[14.5px] font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-[13px] text-slate-500 leading-relaxed max-w-lg">{item.desc}</p>
                    </div>
                    <Toggle defaultOn={item.defaultOn}/>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-slate-200 mb-10"/>

            {/* Account Details */}
            <section className="mb-10">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Account Details</p>
              <div className="grid grid-cols-2 gap-5 max-w-2xl">
                <div>
                  <label className="block text-[13px] text-slate-600 mb-2">Full Name or Company Name</label>
                  <input
                    value={companyName}
                    onChange={e=>setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[13px] text-slate-600 mb-2">Primary Email Address</label>
                  <input
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  />
                </div>
              </div>
            </section>

            <hr className="border-slate-200 mb-10"/>

            {/* Security */}
            <section className="mb-12">
              <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Security</p>
              <div className="flex items-center justify-between max-w-2xl p-5 border border-slate-200 rounded-xl">
                <div>
                  <p className="text-[14.5px] font-bold text-slate-900 mb-0.5">Two-Factor Authentication (2FA)</p>
                  <p className="text-[13px] text-slate-400">Require 2FA before releasing escrow funds.</p>
                </div>
                <button className="px-5 py-2.5 border border-slate-300 hover:border-indigo-400 text-[13.5px] font-bold text-slate-700 hover:text-indigo-700 rounded-xl transition-colors">
                  Enable 2FA
                </button>
              </div>
            </section>

            {/* Save */}
            <div className="flex justify-end max-w-2xl">
              <button className="px-8 py-3.5 bg-indigo-800 hover:bg-indigo-900 text-white text-[14px] font-bold rounded-xl transition-colors">
                Save Account Settings
              </button>
            </div>
          </>
        )}

        {activeSection === "general" && (
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 mb-1">General Settings</h1>
            <p className="text-[14px] text-slate-400">Manage your general account preferences.</p>
          </div>
        )}
      </div>
    </div>
  );
}
