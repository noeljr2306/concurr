import { Database, AlertTriangle, TrendingUp, Download, Plus } from "lucide-react";
import GlobalTopBar from "@/components/layout/GlobalTopBar";
import EscrowStatCard from "@/components/escrows/EscrowStatCard";
import EscrowTable from "@/components/escrows/EscrowTable";
import { mockEscrows, escrowStats } from "@/data/escrowData";
import { formatCurrency } from "@/lib/utils";

export default function EscrowsPage() {
  return (
    <>
      <GlobalTopBar />

      <main className="flex-1 overflow-auto p-8">
        {/* Page heading + actions */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 tracking-tight mb-1">
              Active Escrows
            </h1>
            <p className="text-[13.5px] text-slate-500">
              Real-time financial activity and dispute management.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-[13px] font-semibold rounded-lg transition-colors">
              <Download size={14} strokeWidth={2} />
              Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white text-[13px] font-semibold rounded-lg transition-colors">
              <Plus size={14} strokeWidth={2.5} />
              Create Escrow
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <EscrowStatCard
            label="System TVL"
            value={formatCurrency(escrowStats.systemTVL)}
            change={escrowStats.tvlChange}
            changePositive={true}
            subtitle="Total value locked across all active contracts"
            icon={<Database size={18} strokeWidth={1.8} />}
          />
          <EscrowStatCard
            label="Active Disputes"
            value={escrowStats.activeDisputes}
            badge={escrowStats.disputePriority}
            subtitle="Requires immediate administrative triage"
            icon={<AlertTriangle size={18} strokeWidth={1.8} />}
            variant="alert"
          />
          <EscrowStatCard
            label="24H Volume"
            value={formatCurrency(escrowStats.volume24h)}
            change={escrowStats.volumeChange}
            changePositive={true}
            subtitle="Settled transaction volume in the last 24 hours"
            icon={<TrendingUp size={18} strokeWidth={1.8} />}
          />
        </div>

        {/* Table */}
        <EscrowTable
          escrows={mockEscrows}
          total={escrowStats.totalTransactions}
        />
      </main>
    </>
  );
}
