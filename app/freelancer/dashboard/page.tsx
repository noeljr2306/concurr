"use client";

import Link from "next/link";
import { MoreHorizontal, Clock, CheckCircle2, Copy, TrendingUp } from "lucide-react";
import { freelancerStats, activeMilestones, paymentVelocityData } from "@/data/freelancer/freelancerData";

const ICON_BG: Record<string, string> = { puzzle:"#e0e7ff", grid:"#fef3c7", doc:"#e0f2fe" };
const ICON_COLOR: Record<string, string> = { puzzle:"#4f46e5", grid:"#d97706", doc:"#0369a1" };

function MilestoneIcon({ type }: { type: string }) {
  const bg = ICON_BG[type] ?? "#f1f5f9";
  const color = ICON_COLOR[type] ?? "#64748b";
  return (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
        {type === "puzzle" && <path d="M14 2a2 2 0 012 2v1h2a2 2 0 012 2v2h-1a2 2 0 000 4h1v2a2 2 0 01-2 2h-2v-1a2 2 0 00-4 0v1H8a2 2 0 01-2-2v-2H5a2 2 0 010-4H6V7a2 2 0 012-2h2V4a2 2 0 012-2z"/>}
        {type === "grid"   && <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>}
        {type === "doc"    && <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 10h8M8 14h5"/></>}
      </svg>
    </div>
  );
}

// Simple bar chart using SVG
function PaymentVelocityChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const w = 520, h = 160, barW = 48, gap = 18;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="xMidYMid meet">
      {data.map((v, i) => {
        const barH = Math.round((v / max) * (h - 20));
        const x = i * (barW + gap);
        const y = h - barH;
        const opacity = 0.3 + (i / (data.length - 1)) * 0.7;
        return (
          <rect key={i} x={x} y={y} width={barW} height={barH}
            fill="#1e3a8a" opacity={opacity} rx="6"/>
        );
      })}
    </svg>
  );
}

export default function FreelancerDashboard() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="p-7 space-y-5">
        {/* 3 Stat cards */}
        <div className="grid grid-cols-3 gap-5">
          {/* Available to Withdraw */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-[13px] text-slate-500 mb-2">Available to Withdraw</p>
            <p className="text-[32px] font-bold text-slate-900 mb-4">${freelancerStats.availableToWithdraw.toLocaleString()}.00</p>
            <button className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-[13px] font-semibold text-slate-700 rounded-lg transition-colors">
              Withdraw
            </button>
          </div>
          {/* Locked in Escrow */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-[13px] text-slate-500 mb-2">Locked in Escrow</p>
            <p className="text-[32px] font-bold text-slate-900 mb-4">${freelancerStats.lockedInEscrow.toLocaleString()}.00</p>
            <p className="flex items-center gap-1.5 text-[13px] text-teal-600 font-semibold">
              <CheckCircle2 size={14} strokeWidth={2}/> Secured on-chain
            </p>
          </div>
          {/* 30-Day Earnings */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-[13px] text-slate-500 mb-2">30-Day Earnings</p>
            <p className="text-[32px] font-bold text-slate-900 mb-4">${freelancerStats.thirtyDayEarnings.toLocaleString()}.00</p>
            <p className="flex items-center gap-1.5 text-[13px] text-green-600 font-semibold">
              <TrendingUp size={14} strokeWidth={2}/> {freelancerStats.earningsChange}
            </p>
          </div>
        </div>

        {/* Active Milestones */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h2 className="text-[17px] font-bold text-slate-900">Active Milestones</h2>
            <Link href="/freelancer/projects" className="text-[13px] text-slate-500 hover:text-slate-700 transition-colors">View all milestones</Link>
          </div>
          {activeMilestones.map((m, i) => (
            <div key={m.id} className={`flex items-center gap-4 px-6 py-4 ${i < activeMilestones.length - 1 ? "border-b border-slate-100" : ""}`}>
              <MilestoneIcon type={m.icon} />
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-bold text-slate-900">{m.title}</p>
                <p className="text-[12.5px] text-slate-400">{m.client}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  {m.status === "funded" && (
                    <span className="px-2.5 py-0.5 bg-teal-500 text-white text-[11.5px] font-bold rounded-full">{m.statusLabel}</span>
                  )}
                  {m.status === "in_review" && (
                    <>
                      <span className="px-2.5 py-0.5 bg-amber-400 text-white text-[11.5px] font-bold rounded-full">In Review</span>
                      {m.autoRelease && (
                        <span className="flex items-center gap-1 text-[12px] text-slate-400">
                          <Clock size={12} strokeWidth={1.8}/>{m.autoRelease}
                        </span>
                      )}
                    </>
                  )}
                  {m.status === "settled" && (
                    <span className="flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-500 text-[11.5px] font-semibold rounded-full">
                      <CheckCircle2 size={12} strokeWidth={2}/>{m.statusLabel}
                    </span>
                  )}
                </div>
              </div>
              <div>
                {m.status === "funded" && (
                  <button className="px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13px] font-bold rounded-xl transition-colors">
                    Submit Work
                  </button>
                )}
                {m.status === "in_review" && (
                  <button className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-[13px] font-semibold rounded-xl transition-colors">
                    View Workspace
                  </button>
                )}
                {m.status === "settled" && (
                  <button className="text-slate-300 hover:text-slate-500 transition-colors">
                    <MoreHorizontal size={18} strokeWidth={1.8}/>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: chart + referral */}
        <div className="grid grid-cols-[1fr_420px] gap-5">
          {/* Payment Velocity */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-5">Payment Velocity</p>
            <PaymentVelocityChart data={paymentVelocityData}/>
          </div>
          {/* Referral */}
          <div className="bg-indigo-700 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute right-4 bottom-4 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-white mb-2">Refer a client, earn 0.5%</h3>
              <p className="text-[13.5px] text-indigo-200 leading-relaxed">Reduce your platform fees by bringing your recurring clients to Concurr.</p>
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-indigo-700 text-[13.5px] font-bold rounded-xl transition-colors mt-6 w-fit">
              <Copy size={15} strokeWidth={2}/> Copy Invite Link
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-[12px] text-slate-400">
          <span>© 2024 Concurr Escrow Platform. All assets secured on-chain.</span>
          <div className="flex items-center gap-5">
            {["Terms of Service","Security Audit","Support"].map(t => (
              <button key={t} className="hover:text-slate-600 transition-colors">{t}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
