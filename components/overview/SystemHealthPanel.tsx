import { systemServices } from "@/data/overviewData";
import { Settings, Database, Cpu } from "lucide-react";

const statusColors = {
  green: "text-green-600",
  blue:  "text-blue-600",
  teal:  "text-teal-600",
};

const dotColors = {
  green: "bg-green-500",
  blue:  "bg-blue-500",
  teal:  "bg-teal-500",
};

function ServiceIcon({ icon }: { icon: string }) {
  const cls = "text-slate-400";
  if (icon === "api")    return <Settings size={16} strokeWidth={1.8} className={cls} />;
  if (icon === "db")     return <Database size={16} strokeWidth={1.8} className={cls} />;
  return <Cpu size={16} strokeWidth={1.8} className={cls} />;
}

export default function SystemHealthPanel() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <h2 className="text-[15px] font-bold text-slate-900 mb-4">System Health</h2>

      <div className="space-y-3 mb-5">
        {systemServices.map((service) => (
          <div key={service.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ServiceIcon icon={service.icon} />
              <span className="text-[13.5px] text-slate-700 font-medium">{service.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[12.5px] font-bold uppercase tracking-wide ${statusColors[service.statusVariant]}`}>
                {service.status}
              </span>
              <span className={`w-2 h-2 rounded-full ${dotColors[service.statusVariant]}`} />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[13px] font-semibold rounded-lg transition-colors">
        Detailed Infrastructure Logs
      </button>
    </div>
  );
}
