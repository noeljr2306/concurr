"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
export default function FreelancerProjectCompletePage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-slate-100 p-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 w-full max-w-[600px] px-12 py-12 text-center">
        <div className="flex justify-center mb-7">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 size={40} strokeWidth={2} className="text-green-500"/>
          </div>
        </div>
        <h1 className="text-[30px] font-bold text-slate-900 mb-3">Project Successfully Completed</h1>
        <p className="text-[15px] text-slate-400 leading-relaxed max-w-sm mx-auto mb-10">
          100% of funds have been released. The smart contract is now closed.
        </p>
        <Link href="/freelancer/projects" className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-700 hover:bg-indigo-800 text-white text-[15px] font-bold rounded-xl transition-colors mb-8">
          Close Project <ArrowRight size={18} strokeWidth={2.5}/>
        </Link>
        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"/>
            <span className="text-[13px] text-slate-500">Escrow ID: #CNR-89021-X</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[13px] font-semibold text-orange-500 hover:text-orange-600 transition-colors">View Receipt</button>
            <button className="text-[13px] font-semibold text-orange-500 hover:text-orange-600 transition-colors">Download Contract</button>
          </div>
        </div>
      </div>
    </div>
  );
}
