import { ReactNode } from "react";

interface DisputeStatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  variant?: "default" | "alert";
}

export default function DisputeStatCard({
  icon,
  label,
  value,
  variant = "default",
}: DisputeStatCardProps) {
  const isAlert = variant === "alert";

  return (
    <div
      className={`flex items-center gap-5 rounded-xl px-6 py-5 border ${
        isAlert
          ? "bg-red-50 border-red-200"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Icon box */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          isAlert ? "bg-red-100 text-red-500" : "bg-slate-100 text-slate-500"
        }`}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <p
          className={`text-[12px] font-semibold mb-1 ${
            isAlert ? "text-red-500" : "text-slate-400"
          }`}
        >
          {label}
        </p>
        <p
          className={`text-[28px] font-bold leading-none tracking-tight ${
            isAlert ? "text-red-600" : "text-slate-900"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
