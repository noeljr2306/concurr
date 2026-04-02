"use client";

import Link from "next/link";
import { SlidersHorizontal, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { freelancerProjects } from "@/data/freelancer/freelancerData";

type ProjectStatus = "ACTIVE" | "IN REVIEW" | "DISPUTED";
const STATUS_BADGE: Record<ProjectStatus, { bg:string; text:string; border:string }> = {
  "ACTIVE":    { bg:"bg-green-50",  text:"text-green-700",  border:"border-green-200"  },
  "IN REVIEW": { bg:"bg-blue-50",   text:"text-blue-700",   border:"border-blue-200"   },
  "DISPUTED":  { bg:"bg-red-50",    text:"text-red-600",    border:"border-red-200"    },
};
const PROGRESS_COLOR: Record<ProjectStatus, string> = {
  "ACTIVE":"#1e3a8a","IN REVIEW":"#1e3a8a","DISPUTED":"#ef4444",
};

export default function FreelancerProjectsPage() {
  return (
    <div className="min-h-full bg-slate-50 pb-16">
      <div className="px-10 pt-7">
        <div className="flex items-start justify-between mb-7">
          <div>
            <h1 className="text-[32px] font-bold text-slate-900 tracking-tight">Your Projects</h1>
            <p className="text-[14px] text-slate-500 mt-1">Manage your ongoing developments and milestones.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-[13.5px] font-semibold text-slate-700 rounded-xl transition-colors">
              <SlidersHorizontal size={14} strokeWidth={2}/> Filter
            </button>
            <Link href="/freelancer/projects/new" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13.5px] font-bold rounded-xl transition-colors">
              <Plus size={15} strokeWidth={2.5}/> New Project
            </Link>
          </div>
        </div>
      </div>

      <div className="px-10 space-y-4">
        {freelancerProjects.map(proj => {
          const status  = proj.status as ProjectStatus;
          const badge   = STATUS_BADGE[status];
          const pctW    = Math.round((proj.milestonesCompleted / proj.milestonesTotal) * 100);
          const barColor = PROGRESS_COLOR[status];
          return (
            <div key={proj.id} className="bg-white border border-slate-200 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase border ${badge.bg} ${badge.text} ${badge.border}`}>{proj.status}</span>
                <span className="text-[13px] text-slate-400">ID: {proj.pid}</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-[20px] font-bold text-slate-900">{proj.title}</h2>
                <Link href={`/freelancer/projects/${proj.id}`} className="flex-shrink-0 px-5 py-2.5 border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-[13.5px] font-semibold rounded-xl transition-colors">
                  View Workspace
                </Link>
              </div>
              <div className="mt-5 mb-1">
                <div className="flex items-center justify-between text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                  <span>Milestone Progress</span>
                  <span>{proj.milestonesCompleted} of {proj.milestonesTotal} Completed</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{width:`${pctW}%`,background:barColor}}/>
                </div>
                <p className="text-[12.5px] text-slate-400 mt-2">
                  Current Phase: <span className={`font-semibold ${"phaseHighlight" in proj && proj.phaseHighlight ? "text-red-500" : "text-slate-700"}`}>{proj.currentPhase}</span>
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-5 pt-5 border-t border-slate-100">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Funded</p>
                  <p className="text-[16px] font-bold text-slate-900">${proj.totalFunded.toLocaleString()}.00</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Milestone</p>
                  <p className="text-[16px] font-bold text-slate-900">{proj.nextMilestone}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Client</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{background:proj.clientBg}}>
                      {proj.clientInitials}
                    </div>
                    <span className="text-[14px] font-semibold text-slate-800">{proj.client}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-10">
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 hover:bg-slate-100 text-slate-400 transition-colors"><ChevronLeft size={15}/></button>
        {[1,2,3,"...",12].map((p,i) => (
          <button key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[13.5px] font-semibold transition-colors ${p===1?"bg-indigo-700 text-white":"border border-slate-200 text-slate-500 hover:bg-slate-100"}`}>{p}</button>
        ))}
        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 hover:bg-slate-100 text-slate-400 transition-colors"><ChevronRight size={15}/></button>
      </div>

      <div className="text-center mt-10 space-y-1">
        <p className="text-[10.5px] font-bold text-slate-300 uppercase tracking-widest flex items-center justify-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="2" width="9" height="9" rx="2"/><rect x="13" y="2" width="9" height="9" rx="2"/><rect x="2" y="13" width="9" height="9" rx="2"/><rect x="13" y="13" width="9" height="9" rx="2"/></svg>
          Concurr Dashboard
        </p>
        <p className="text-[12px] text-slate-300">© 2023 Concurr Technologies Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
