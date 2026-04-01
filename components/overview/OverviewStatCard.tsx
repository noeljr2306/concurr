import { OverviewStat } from "@/data/overviewData";

function MiniSparkline({ data }: { data: number[] }) {
  const w = 140, h = 40, pad = 4;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = pad + ((max - v) / range) * (h - pad * 2);
    return `${x},${y}`;
  });

  // area fill path
  const first = pts[0].split(",");
  const last = pts[pts.length - 1].split(",");
  const area = `M ${pts.join(" L ")} L ${last[0]},${h} L ${first[0]},${h} Z`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" className="mt-3">
      <path d={area} fill="#1e3a8a" opacity="0.08" />
      <path
        d={`M ${pts.join(" L ")}`}
        stroke="#1e3a8a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function OverviewStatCard({ stat }: { stat: OverviewStat }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl px-5 py-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11.5px] font-semibold text-slate-400">
          {stat.label}
        </span>
        <span className={`text-[12px] font-bold ${stat.changePositive ? "text-green-500" : "text-red-500"}`}>
          {stat.change}
        </span>
      </div>
      <p className="text-[26px] font-bold text-slate-900 tracking-tight leading-none">
        {stat.value}
      </p>
      <MiniSparkline data={stat.sparkline} />
    </div>
  );
}
