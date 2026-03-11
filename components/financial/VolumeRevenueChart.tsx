"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChartDataPoint } from "@/types/financial";

interface VolumeRevenueChartProps {
  data: ChartDataPoint[];
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg px-4 py-3 text-[12px]">
      <p className="font-semibold text-slate-600 mb-1.5">{label}</p>
      {payload.map((entry: any) => (
        <div key={entry.dataKey} className="flex items-center gap-2 mb-0.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-slate-500">{entry.name}:</span>
          <span className="font-semibold text-slate-800">
            ${entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function VolumeRevenueChart({ data }: VolumeRevenueChartProps) {
  const ticks = data.filter((d) => d.label !== "").map((d) => d.date);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[15.5px] font-bold text-slate-900 mb-0.5">
            Volume vs. Revenue
          </h2>
          <p className="text-[12.5px] text-slate-400">
            Historical performance data for October 2023
          </p>
        </div>
        {/* Legend */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
            <span className="text-[12.5px] text-slate-500 font-medium">Gross Volume</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: "#1e3a5f" }} />
            <span className="text-[12.5px] text-slate-500 font-medium">Net Revenue</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray=""
            stroke="#f1f5f9"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="date"
            ticks={ticks}
            tickFormatter={(val) => {
              const point = data.find((d) => d.date === val);
              return point?.label ?? "";
            }}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8", fontWeight: 500 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="grossVolume"
            name="Gross Volume"
            stroke="#22d3ee"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, fill: "#22d3ee" }}
          />
          <Line
            type="monotone"
            dataKey="netRevenue"
            name="Net Revenue"
            stroke="#1e3a5f"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#1e3a5f" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
