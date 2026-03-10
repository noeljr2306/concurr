"use client";

import { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Wallet } from "@/types";
import WalletRow from "@/components/ui/WalletRow";

interface WalletTableProps {
  wallets: Wallet[];
}

export default function WalletTable({ wallets }: WalletTableProps) {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const total = wallets.length;
  const totalPages = Math.ceil(total / perPage);
  const paged = wallets.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-[15px] font-semibold text-slate-800">
          Individual Wallets
        </h2>
        <button className="flex items-center gap-1.5 text-[13px] font-semibold text-sky-600 hover:text-sky-700 transition-colors">
          <Plus size={14} strokeWidth={2.5} />
          Connect New Wallet
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Wallet Address
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Type
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Balance
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th className="py-3 px-5" />
            </tr>
          </thead>
          <tbody>
            {paged.map((wallet) => (
              <WalletRow key={wallet.id} wallet={wallet} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
        <p className="text-[12.5px] text-slate-400">
          Showing {total} of {total} active wallets
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
            className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
