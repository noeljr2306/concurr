import FinancialTopBar from "@/components/financial/FinancialTopBar";
import FinancialStatCard from "@/components/financial/FinancialStatCard";
import VolumeRevenueChart from "@/components/financial/VolumeRevenueChart";
import RecentTransactionsTable from "@/components/financial/RecentTransactionsTable";
import {
  financialStats,
  sparklineData,
  chartData,
  recentTransactions,
} from "@/data/financialData";
import { formatCurrency } from "@/lib/utils";

export default function FinancialReportsPage() {
  return (
    <>
      <FinancialTopBar />
      <main className="flex-1 overflow-auto p-7 space-y-5">
        <div className="grid grid-cols-4 gap-4">
          <FinancialStatCard
            label="Gross Volume (TVL)"
            value={formatCurrency(financialStats.grossVolume)}
            change={financialStats.grossVolumeChange}
            changePositive={financialStats.grossVolumePositive}
            sparklineData={sparklineData.grossVolume}
            sparklineColor="#22d3ee"
          />
          <FinancialStatCard
            label="Platform Revenue"
            value={formatCurrency(financialStats.platformRevenue)}
            change={financialStats.platformRevenueChange}
            changePositive={financialStats.platformRevenuePositive}
            sparklineData={sparklineData.platformRev}
            sparklineColor="#6366f1"
          />
          <FinancialStatCard
            label="Active Escrows"
            value={financialStats.activeEscrows.toLocaleString()}
            change={financialStats.activeEscrowsChange}
            changePositive={financialStats.activeEscrowsPositive}
            sparklineData={sparklineData.activeEscrows}
            sparklineColor="#22d3ee"
          />
          <FinancialStatCard
            label="Avg. Trans. Size"
            value={formatCurrency(financialStats.avgTransSize)}
            change={financialStats.avgTransSizeChange}
            changePositive={financialStats.avgTransSizePositive}
            sparklineData={sparklineData.avgTxSize}
            sparklineColor="#1e3a5f"
          />
        </div>
        <VolumeRevenueChart data={chartData} />
        <RecentTransactionsTable transactions={recentTransactions} />
      </main>
    </>
  );
}
