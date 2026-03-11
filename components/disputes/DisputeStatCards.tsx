import { LayoutList, Clock, AlertCircle } from "lucide-react";

interface DisputeStatCardsProps {
  totalActiveDisputes: number;
  avgResolutionDays: number;
  highUrgencyCases: number;
}

export default function DisputeStatCards({
  totalActiveDisputes,
  avgResolutionDays,
  highUrgencyCases,
}: DisputeStatCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {/* Total Active Disputes */}
      <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 flex items-center gap-5">
        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
          <LayoutList size={20} className="text-slate-500" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-[12px] text-slate-400 font-medium mb-0.5">
            Total Active Disputes
          </p>
          <p className="text-[28px] font-bold text-slate-900 leading-none tracking-tight">
            {totalActiveDisputes.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Average Resolution Time */}
      <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 flex items-center gap-5">
        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
          <Clock size={20} className="text-slate-500" strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-[12px] text-slate-400 font-medium mb-0.5">
            Average Resolution Time
          </p>
          <p className="text-[28px] font-bold text-slate-900 leading-none tracking-tight">
            {avgResolutionDays} Days
          </p>
        </div>
      </div>

      {/* High Urgency Cases — alert variant */}
      <div className="bg-red-50 border border-red-200 rounded-xl px-6 py-5 flex items-center gap-5">
        <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertCircle size={20} className="text-red-500" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[12px] text-red-500 font-semibold mb-0.5">
            High Urgency Cases
          </p>
          <p className="text-[28px] font-bold text-red-600 leading-none tracking-tight">
            {highUrgencyCases}
          </p>
        </div>
      </div>
    </div>
  );
}
