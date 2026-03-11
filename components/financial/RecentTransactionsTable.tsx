import { RevenueTransaction } from "@/types/financial";
import TransactionTypeBadge from "./TransactionTypeBadge";
import { formatCurrency } from "@/lib/utils";

interface RecentTransactionsTableProps {
  transactions: RevenueTransaction[];
}

export default function RecentTransactionsTable({ transactions }: RecentTransactionsTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <h2 className="text-[15.5px] font-bold text-slate-900">Recent Revenue Transactions</h2>
        <button className="text-[13px] font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3.5 pl-6 pr-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Transaction ID</th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Source Escrow</th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Platform Fee ($)</th>
              <th className="text-left py-3.5 pl-4 pr-6 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors">
                <td className="py-4 pl-6 pr-4">
                  <span className="text-[13.5px] font-bold text-slate-800 font-mono">{tx.transactionId}</span>
                </td>
                <td className="py-4 px-4">
                  <TransactionTypeBadge type={tx.type} />
                </td>
                <td className="py-4 px-4">
                  <span className="text-[13.5px] text-slate-600">{tx.sourceEscrow}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-[13.5px] font-semibold text-slate-800">{formatCurrency(tx.amount)}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-[13.5px] font-bold text-cyan-600">{formatCurrency(tx.platformFee)}</span>
                </td>
                <td className="py-4 pl-4 pr-6">
                  <span className="text-[13px] text-slate-400 font-mono">{tx.timestamp}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
