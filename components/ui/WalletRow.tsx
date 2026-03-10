"use client";

import { MoreVertical } from "lucide-react";
import { Wallet } from "@/types";
import Badge from "./Badge";
import { formatCurrency } from "@/lib/utils";

interface WalletRowProps {
  wallet: Wallet;
}

function QRIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-400">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="5" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="16" y="5" width="3" height="3" rx="0.5" fill="currentColor" />
      <rect x="5" y="16" width="3" height="3" rx="0.5" fill="currentColor" />
      <circle cx="17" cy="17" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
      <circle cx="20" cy="14" r="1" fill="currentColor" />
      <circle cx="20" cy="20" r="1" fill="currentColor" />
      <circle cx="14" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

export default function WalletRow({ wallet }: WalletRowProps) {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors group">
      {/* Address */}
      <td className="py-4 px-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            <QRIcon />
          </div>
          <span className="text-[13.5px] font-mono text-slate-600 font-medium">
            {wallet.address}
          </span>
        </div>
      </td>

      {/* Type */}
      <td className="py-4 px-5">
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[11px] font-bold"
            style={{ backgroundColor: wallet.colorHex }}
          >
            {wallet.tokenSymbol}
          </div>
          <span className="text-[13.5px] text-slate-700">{wallet.type}</span>
        </div>
      </td>

      {/* Balance */}
      <td className="py-4 px-5">
        <span className="text-[13.5px] font-semibold text-slate-800">
          {formatCurrency(wallet.balance)}
        </span>
      </td>

      {/* Status */}
      <td className="py-4 px-5">
        <Badge status={wallet.status} />
      </td>

      {/* Actions */}
      <td className="py-4 px-5">
        <button className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100">
          <MoreVertical size={15} />
        </button>
      </td>
    </tr>
  );
}
