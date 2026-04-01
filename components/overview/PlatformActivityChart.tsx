"use client";

import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { platformActivityData } from "@/data/overviewData";

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg px-3 py-2.5 text-[12px]">
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
          <span className="text-slate-600 capitalize">{entry.name}:</span>
          <span className="font-semibold text-slate-800">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function PlatformActivityChart() {
  const ticks = platformActivityData
    .map((d, i) => (d.label !== "" ? i : -1))
    .filter((i) => i >= 0);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-[16px] font-bold text-slate-900">Platform Activity</h2>
          <p className="text-[12.5px] text-slate-400 mt-0.5">
            Volume vs. Escrow Count (Last 30 Days)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-[13px] font-semibold text-slate-600 rounded-lg transition-colors">
            Download CSV
          </button>
          <button className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white text-[13px] font-bold rounded-lg transition-colors">
            Full Report
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={platformActivityData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="volumeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#1e3a8a" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#1e3a8a" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#f1f5f9" horizontal vertical={false} />
          <XAxis
            dataKey="label"
            ticks={ticks.map((i) => platformActivityData[i].label)}
            tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            dy={8}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="volume"
            name="Volume"
            stroke="#1e3a8a"
            strokeWidth={2.5}
            fill="url(#volumeGrad)"
            dot={false}
            activeDot={{ r: 4, fill: "#1e3a8a" }}
          />
          <Line
            type="monotone"
            dataKey="escrow"
            name="Escrow Count"
            stroke="#64748b"
            strokeWidth={2}
            strokeDasharray="6 4"
            dot={false}
            activeDot={{ r: 4, fill: "#64748b" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
