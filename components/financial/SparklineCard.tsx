"use client";

interface SparklineCardProps {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  data: number[];
  color?: string;
}

function MiniSparkline({ data, color = "#06b6d4" }: { data: number[]; color?: string }) {
  const width = 120;
  const height = 36;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 4) - 2;
    return `${x},${y}`;
  });

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <polyline
        points={points.join(" ")}
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function SparklineCard({
  label,
  value,
  change,
  changePositive,
  data,
  color = "#06b6d4",
}: SparklineCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between min-h-[140px]">
      {/* Top: label + change */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest leading-snug">
          {label}
        </span>
        <span
          className={`text-[11.5px] font-bold whitespace-nowrap ${
            changePositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {changePositive ? "↗" : "↘"}{change}
        </span>
      </div>

      {/* Value */}
      <p className="text-[22px] font-bold text-slate-900 tracking-tight leading-none mb-3">
        {value}
      </p>

      {/* Sparkline */}
      <div className="flex justify-start">
        <MiniSparkline data={data} color={color} />
      </div>
    </div>
  );
}
