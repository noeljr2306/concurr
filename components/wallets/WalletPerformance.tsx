import { TrendingUp, Wallet, Lock } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import { formatCurrency } from "@/lib/utils";

interface WalletPerformanceProps {
  totalBalance: number;
  availableFunds: number;
  lockedInEscrow: number;
}

export default function WalletPerformance({
  totalBalance,
  availableFunds,
  lockedInEscrow,
}: WalletPerformanceProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <StatCard
        label="Total Wallet Balance"
        value={formatCurrency(totalBalance)}
        change="+12.5%"
        changePositive={true}
        subtitle="Across 4 connected wallets"
        icon={<TrendingUp size={18} strokeWidth={1.8} />}
      />
      <StatCard
        label="Available Funds"
        value={formatCurrency(availableFunds)}
        change="+8.2%"
        changePositive={true}
        subtitle="Ready for withdrawal or transfer"
        icon={<Wallet size={18} strokeWidth={1.8} />}
      />
      <StatCard
        label="Locked in Escrow"
        value={formatCurrency(lockedInEscrow)}
        change="-2.1%"
        changePositive={false}
        subtitle="Pending active trade verification"
        icon={<Lock size={18} strokeWidth={1.8} />}
      />
    </div>
  );
}
