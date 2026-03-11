interface UserStatCardProps {
  label: string;
  value: string | number;
  change: string;
  changePositive: boolean;
}

export default function UserStatCard({
  label,
  value,
  change,
  changePositive,
}: UserStatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-6 py-5">
      <p className="text-[12.5px] font-semibold text-slate-400 mb-3">{label}</p>
      <div className="flex items-center gap-3">
        <span className="text-[32px] font-bold text-slate-900 leading-none tracking-tight">
          {typeof value === "number" ? value.toLocaleString() : value}
        </span>
        <span
          className={`text-[13px] font-bold flex items-center gap-0.5 ${
            changePositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {/* Inline mini arrow */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            {changePositive ? (
              <polyline points="2,10 7,4 12,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <polyline points="2,4 7,10 12,4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
          {change}
        </span>
      </div>
    </div>
  );
}
