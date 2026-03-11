import { SlidersHorizontal, Download } from "lucide-react";
import GlobalTopBar from "@/components/layout/GlobalTopBar";
import DisputeStatCards from "@/components/disputes/DisputeStatCards";
import DisputeTable from "@/components/disputes/DisputeTable";
import { mockDisputes, disputeStats } from "@/data/disputeData";

export default function DisputesPage() {
  return (
    <>
      <GlobalTopBar />

      <main className="flex-1 overflow-auto p-8">
        {/* Page heading + actions */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 tracking-tight mb-1">
              Dispute Triage Queue
            </h1>
            <p className="text-[13.5px] text-slate-500">
              Managing active arbitration cases and escrow releases.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[13px] font-semibold rounded-lg transition-colors">
              <SlidersHorizontal size={14} strokeWidth={2} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-slate-900 hover:bg-slate-700 text-white text-[13px] font-semibold rounded-lg transition-colors">
              <Download size={14} strokeWidth={2} />
              Export Queue
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <DisputeStatCards
          totalActiveDisputes={disputeStats.totalActiveDisputes}
          avgResolutionDays={disputeStats.avgResolutionDays}
          highUrgencyCases={disputeStats.highUrgencyCases}
        />

        {/* Table */}
        <DisputeTable
          disputes={mockDisputes}
          totalResults={disputeStats.totalResults}
        />
      </main>
    </>
  );
}
