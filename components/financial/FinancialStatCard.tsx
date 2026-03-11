import Sparkline from "./Sparkline";

interface FinancialStatCardProps {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  sparklineData: number[];
  sparklineColor?: string;
}

export default function FinancialStatCard({
  label,
  value,
  change,
  changePositive,
  sparklineData,
  sparklineColor = "#06b6d4",
}: FinancialStatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-5 flex flex-col">
      {/* Label + change */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
          {label}
        </span>
        <span
          className={`text-[11.5px] font-bold flex items-center gap-0.5 ${
            changePositive ? "text-green-500" : "text-red-500"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            {changePositive ? (
              <polyline points="1,9 6,3 11,9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <polyline points="1,3 6,9 11,3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
          {change}
        </span>
      </div>

      {/* Value */}
      <p className="text-[22px] font-bold text-slate-900 tracking-tight leading-none">
        {value}
      </p>

      {/* Sparkline */}
      <div className="mt-auto">
        <Sparkline data={sparklineData} color={sparklineColor} width={130} height={38} />
      </div>
    </div>
  );
}
