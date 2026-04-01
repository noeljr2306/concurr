import { recentDisputes } from "@/data/overviewData";
import { formatCurrency } from "@/lib/utils";

const badgeStyles = {
  warning: "bg-amber-100 text-amber-700",
  danger:  "bg-red-100 text-red-600",
  amber:   "bg-orange-100 text-orange-700",
};

export default function RecentDisputesSidebar() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[15px] font-bold text-slate-900">Recent Disputes</h2>
        <button className="text-[12.5px] font-bold text-indigo-700 hover:text-indigo-900 uppercase tracking-wide transition-colors">
          VIEW ALL
        </button>
      </div>

      {/* Dispute list */}
      <div className="space-y-5">
        {recentDisputes.map((dispute) => (
          <div key={dispute.id} className="pb-5 border-b border-slate-100 last:border-0 last:pb-0">
            {/* Top row: ID + amount */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <p className="text-[13.5px] font-bold text-slate-900">{dispute.txId}</p>
                <p className="text-[12px] text-slate-400">Buyer: {dispute.buyer}</p>
              </div>
              <span className="text-[13.5px] font-bold text-slate-800 whitespace-nowrap">
                {formatCurrency(dispute.amount)}
              </span>
            </div>

            {/* Badge + Triage button */}
            <div className="flex items-center justify-between mt-2.5">
              <span className={`inline-flex px-2.5 py-1 rounded-full text-[11.5px] font-semibold ${badgeStyles[dispute.badgeVariant]}`}>
                {dispute.badge}
              </span>
              <button className="px-4 py-1.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[12.5px] font-bold rounded-lg transition-colors">
                Triage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
