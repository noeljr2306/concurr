"use client";
import { useState } from "react";
import { User, Bell, Save, ChevronDown, ArrowLeftRight, CheckCircle2 } from "lucide-react";

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={()=>setOn(!on)} className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${on?"bg-green-500":"bg-slate-200"}`}>
      <span className={`inline-block w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-200 absolute top-0.5 ${on?"translate-x-6":"translate-x-0.5"}`}/>
    </button>
  );
}

function FreelancerSettingsNav({ active, setActive }: { active: string; setActive: (v:string) => void }) {
  return (
    <aside className="w-[260px] min-w-[260px] bg-white border-r border-slate-200 min-h-full">
      <div className="px-6 pt-8 pb-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Settings</p>
        {[{id:"general",label:"General",icon:User},{id:"notifications",label:"Notifications",icon:Bell}].map(s => {
          const Icon = s.icon; const isActive = active===s.id;
          return (
            <button key={s.id} onClick={()=>setActive(s.id)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl mb-1 text-[13.5px] font-medium transition-all text-left ${isActive?"bg-slate-100 text-slate-900 font-semibold":"text-slate-500 hover:bg-slate-50 hover:text-slate-700"}`}>
              <Icon size={16} strokeWidth={isActive?2.2:1.8}/>{s.label}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

// Different top nav for settings (Image 7 style: Concurr logo + bell + Mordi C. dropdown)
function SettingsTopNav() {
  return (
    <header className="bg-white border-b border-slate-200 px-8 flex items-center justify-between h-[58px] flex-shrink-0">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-indigo-700 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="white"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="white"/></svg>
        </div>
        <span className="font-bold text-[16px] text-slate-900">Concurr</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"><Bell size={17} strokeWidth={1.8}/></button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center overflow-hidden">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          </div>
          <span className="text-[13.5px] font-semibold text-slate-700">Mordi C.</span>
          <ChevronDown size={14} className="text-slate-400"/>
        </button>
      </div>
    </header>
  );
}

export default function FreelancerSettingsPage() {
  const [active, setActive] = useState("general");
  const [name, setName]     = useState("Mordi Chukwuma");
  const [email, setEmail]   = useState("mordi.c@freelance.io");
  const [tz, setTz]         = useState("WAT (West Africa Time)");

  const TIMEZONES = ["WAT (West Africa Time)","UTC-8 Pacific Time","UTC-5 Eastern Time","UTC+0 GMT","UTC+1 CET","UTC+3 EAT","UTC+5:30 IST"];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50" style={{marginTop:"-58px"}}>
      <SettingsTopNav/>
      <div className="flex flex-1">
        <FreelancerSettingsNav active={active} setActive={setActive}/>
        <div className="flex-1 px-12 py-10 overflow-auto">

          {/* GENERAL */}
          {active === "general" && (
            <>
              <h1 className="text-[26px] font-bold text-slate-900 mb-1">General Account Settings</h1>
              <p className="text-[14px] text-slate-400 mb-10">Manage your personal details and default payout destination.</p>

              <section className="mb-10 max-w-2xl">
                <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Personal Details</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-[13.5px] text-slate-700 mb-2">Full Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
                  </div>
                  <div>
                    <label className="block text-[13.5px] text-slate-700 mb-2">Email Address</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
                    <p className="text-[12px] text-slate-400 mt-1">Where client invitations are sent</p>
                  </div>
                  <div>
                    <label className="block text-[13.5px] text-slate-700 mb-2">Timezone</label>
                    <div className="relative">
                      <select value={tz} onChange={e=>setTz(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-800 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all">
                        {TIMEZONES.map(t => <option key={t}>{t}</option>)}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"/>
                    </div>
                    <p className="text-[12px] text-slate-400 mt-1">Crucial for syncing the 7-day auto-release timer</p>
                  </div>
                </div>
              </section>

              <hr className="border-slate-200 mb-10 max-w-2xl"/>

              <section className="mb-10 max-w-2xl">
                <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-6">Default Payout Destination</p>
                <div className="border border-slate-200 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Auto-Route Payouts To:</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="1.6"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/><path d="M3 13h18"/></svg>
                      </div>
                      <span className="text-[15px] font-bold font-mono text-slate-800">0x8A...3F9C</span>
                      <span className="flex items-center gap-1 px-2.5 py-1 bg-green-50 text-green-700 text-[11.5px] font-bold rounded-full">
                        <CheckCircle2 size={12} strokeWidth={2.5}/> Verified
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 hover:bg-slate-50 text-[13px] font-semibold text-slate-700 rounded-xl transition-colors">
                    <ArrowLeftRight size={14} strokeWidth={2}/> Change Default Account
                  </button>
                </div>
              </section>

              <div className="max-w-2xl">
                <button className="flex items-center gap-2 px-6 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14px] font-bold rounded-xl transition-colors">
                  <Save size={16} strokeWidth={2}/> Save Changes
                </button>
              </div>
            </>
          )}

          {/* NOTIFICATIONS */}
          {active === "notifications" && (
            <>
              <h1 className="text-[26px] font-bold text-slate-900 mb-1">Alerts &amp; Notifications</h1>
              <p className="text-[14px] text-slate-400 mb-10">Never miss a contract update or payout.</p>

              {/* Contract & Funding */}
              <section className="mb-8 max-w-2xl">
                <h2 className="flex items-center gap-2 text-[16px] font-bold text-slate-900 mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 10h8M8 14h5"/><path d="M8 6h8"/></svg>
                  Contract &amp; Funding Alerts
                </h2>
                <div className="space-y-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                  {[
                    { title:"New Escrow Invitation",   desc:"Alert me when a client drafts a contract and invites me",                              defaultOn:true  },
                    { title:"Funds Locked On-Chain",   desc:"Get notified the moment the client successfully funds the milestone so you can start working", defaultOn:true, urgent:true },
                  ].map((item, i) => (
                    <div key={item.title} className={`flex items-start justify-between gap-8 p-5 bg-white ${i===0?"":"border-t border-slate-100"} ${item.urgent?"bg-slate-50":""}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-[14.5px] font-bold text-slate-900">{item.title}</p>
                          {item.urgent && <span className="px-2 py-0.5 bg-indigo-700 text-white text-[10.5px] font-bold rounded-full uppercase tracking-wide">Urgent</span>}
                        </div>
                        <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                      <Toggle defaultOn={item.defaultOn}/>
                    </div>
                  ))}
                </div>
              </section>

              {/* Review & Payout */}
              <section className="mb-10 max-w-2xl">
                <h2 className="flex items-center gap-2 text-[16px] font-bold text-slate-900 mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                  Review &amp; Payout Alerts
                </h2>
                <div className="space-y-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                  {[
                    { title:"Revision Requested", desc:"Alert me if the client pauses the 7-day timer to request changes", defaultOn:false },
                    { title:"Payout Released",    desc:"Receipts for when funds hit your wallet or bank account",          defaultOn:true  },
                  ].map((item, i) => (
                    <div key={item.title} className={`flex items-start justify-between gap-8 p-5 bg-white ${i===0?"":"border-t border-slate-100"}`}>
                      <div>
                        <p className="text-[14.5px] font-bold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                      <Toggle defaultOn={item.defaultOn}/>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex justify-end max-w-2xl">
                <button className="flex items-center gap-2 px-6 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14px] font-bold rounded-xl transition-colors">
                  <Save size={16} strokeWidth={2}/> Save Preferences
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
