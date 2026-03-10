import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  subtitle: string;
  icon: ReactNode;
}

export default function StatCard({
  label,
  value,
  change,
  changePositive,
  subtitle,
  icon,
}: StatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
          {label}
        </span>
        <div className="text-slate-400">{icon}</div>
      </div>

      <div className="flex items-end gap-2">
        <span className="text-[26px] font-bold text-slate-900 leading-none tracking-tight">
          {value}
        </span>
        <span
          className={`text-[12.5px] font-semibold mb-0.5 flex items-center gap-0.5 ${
            changePositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {changePositive ? (
            <TrendingUp size={13} strokeWidth={2.5} />
          ) : (
            <TrendingDown size={13} strokeWidth={2.5} />
          )}
          {change}
        </span>
      </div>

      <p className="text-[12px] text-slate-400 leading-none">{subtitle}</p>
    </div>
  );
}
