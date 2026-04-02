"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const TIMEZONES = ["UTC-8 Pacific Time","UTC-7 Mountain Time","UTC-6 Central Time","UTC-5 Eastern Time","UTC+0 GMT","UTC+1 CET","UTC+3 EAT","UTC+5:30 IST","UTC+8 SGT","UTC+9 JST"];

export default function FreelancerOnboardingPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [tz, setTz]     = useState("");
  const [updates, setUpdates] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col" style={{fontFamily:"inherit"}}>
      <header className="px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-700 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" rx="1.5" fill="white"/><rect x="13" y="3" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="3" y="13" width="8" height="8" rx="1.5" fill="white" opacity="0.5"/><rect x="13" y="13" width="8" height="8" rx="1.5" fill="white"/></svg>
          </div>
          <span className="font-bold text-[16px] text-slate-900">Concurr</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-[420px] p-10">
          <h1 className="text-[26px] font-bold text-slate-900 mb-1.5">Complete your Profile</h1>
          <p className="text-[14px] text-slate-400 mb-8">Just a few details to get started</p>
          <form onSubmit={e => { e.preventDefault(); router.push("/freelancer/dashboard"); }} className="space-y-5">
            <div>
              <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Display Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Sarah Jenkins"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"/>
            </div>
            <div>
              <label className="block text-[13.5px] font-semibold text-slate-700 mb-2">Timezone</label>
              <div className="relative">
                <select value={tz} onChange={e => setTz(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-slate-500 bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all">
                  <option value="">Select your local timezone</option>
                  {TIMEZONES.map(t => <option key={t}>{t}</option>)}
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
            </div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={updates} onChange={e => setUpdates(e.target.checked)} className="w-4 h-4 rounded border-slate-300 text-indigo-600"/>
              <span className="text-[13.5px] text-slate-600">Send me updates about my transactions</span>
            </label>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[14.5px] font-bold rounded-xl transition-colors mt-2">
              Complete Setup & Enter Dashboard <ArrowRight size={16} strokeWidth={2.5}/>
            </button>
          </form>
          <p className="text-center text-[13px] text-slate-400 mt-5">
            Already have an account? <Link href="/auth/login" className="text-indigo-700 font-semibold hover:underline">Log in</Link>
          </p>
        </div>
        <div className="flex items-center gap-6 mt-6 text-[12px] text-slate-400 font-medium uppercase tracking-widest">
          {["Secure","Encrypted"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>{t}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
}
