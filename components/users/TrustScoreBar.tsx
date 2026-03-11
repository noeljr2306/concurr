interface TrustScoreBarProps {
  score: number;
}

function getBarColor(score: number): string {
  if (score >= 90) return "bg-indigo-600";
  if (score >= 70) return "bg-indigo-500";
  if (score >= 50) return "bg-indigo-400";
  return "bg-indigo-300";
}

export default function TrustScoreBar({ score }: TrustScoreBarProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Bar */}
      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden flex-shrink-0">
        <div
          className={`h-full rounded-full ${getBarColor(score)} transition-all`}
          style={{ width: `${score}%` }}
        />
      </div>
      {/* Number */}
      <span className="text-[13.5px] font-semibold text-slate-700 w-8 text-right">
        {score}
      </span>
    </div>
  );
}
