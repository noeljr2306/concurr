import { criticalAlerts } from "@/data/overviewData";
import { AlertTriangle, Clock } from "lucide-react";

export default function CriticalAlerts() {
  return (
    <div>
      <h2 className="text-[18px] font-bold text-slate-900 mb-4">Critical Alerts</h2>
      <div className="space-y-3">
        {criticalAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl border ${
              alert.actionVariant === "danger"
                ? "bg-red-50 border-red-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                alert.actionVariant === "danger"
                  ? "bg-red-100"
                  : "bg-blue-100"
              }`}
            >
              {alert.icon === "warning" ? (
                <AlertTriangle
                  size={18}
                  strokeWidth={2}
                  className="text-red-500"
                />
              ) : (
                <Clock
                  size={18}
                  strokeWidth={2}
                  className="text-blue-600"
                />
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <p
                className={`text-[14px] font-bold leading-snug ${
                  alert.actionVariant === "danger"
                    ? "text-red-700"
                    : "text-blue-700"
                }`}
              >
                {alert.title}
              </p>
              <p
                className={`text-[12.5px] mt-0.5 ${
                  alert.actionVariant === "danger"
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {alert.subtitle}
              </p>
            </div>

            {/* CTA */}
            <button
              className={`px-4 py-2 text-[13px] font-bold rounded-lg whitespace-nowrap flex-shrink-0 transition-colors ${
                alert.actionVariant === "danger"
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "border border-blue-300 bg-white hover:bg-blue-50 text-blue-700"
              }`}
            >
              {alert.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
