import { ReactNode } from "react";
import { TrendingUp } from "lucide-react";

interface EscrowStatCardProps {
  label: string;
  value: string | number;
  subtitle: string;
  change?: string;
  changePositive?: boolean;
  icon: ReactNode;
  variant?: "default" | "alert";
  badge?: string;
}

export default function EscrowStatCard({
  label,
  value,
  subtitle,
  change,
  changePositive,
  icon,
  variant = "default",
  badge,
}: EscrowStatCardProps) {
  const isAlert = variant === "alert";

  return (
    <div
      className={`rounded-xl p-5 flex flex-col gap-3 border ${
        isAlert
          ? "bg-red-50 border-red-200"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[11px] font-bold uppercase tracking-widest ${
            isAlert ? "text-red-500" : "text-slate-400"
          }`}
        >
          {label}
        </span>
        <div className={isAlert ? "text-red-400" : "text-slate-400"}>
          {icon}
        </div>
      </div>

      <div className="flex items-end gap-3">
        <span
          className={`leading-none tracking-tight font-bold ${
            isAlert
              ? "text-[42px] text-red-600"
              : "text-[26px] text-slate-900"
          }`}
        >
          {value}
        </span>
        {badge && (
          <span className="text-[12px] font-bold text-red-600 mb-1">
            {badge}
          </span>
        )}
        {change && (
          <span
            className={`text-[12.5px] font-semibold mb-0.5 flex items-center gap-0.5 ${
              changePositive ? "text-green-500" : "text-red-500"
            }`}
          >
            <TrendingUp size={13} strokeWidth={2.5} />
            {change}
          </span>
        )}
      </div>

      <p
        className={`text-[12px] leading-none ${
          isAlert ? "text-red-400" : "text-slate-400"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
