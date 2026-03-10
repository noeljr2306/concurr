"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EscrowRecord, EscrowStatus } from "@/types/escrow";
import EscrowStatusBadge from "./EscrowStatusBadge";
import { formatCurrency } from "@/lib/utils";

interface EscrowTableProps {
  escrows: EscrowRecord[];
  total: number;
}

type FilterTab = "All" | "Pending" | "Disputed";

export default function EscrowTable({ escrows, total }: EscrowTableProps) {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = activeFilter === "All"
    ? escrows
    : escrows.filter((e) => e.status === activeFilter);

  const totalPages = Math.ceil(total / perPage);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <h2 className="text-[15px] font-semibold text-slate-800">
          Active Escrow &amp; Dispute Triage
        </h2>
        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
          {(["All", "Pending", "Disputed"] as FilterTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-md text-[12.5px] font-semibold transition-all duration-150 ${
                activeFilter === tab
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Escrow ID
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Client
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Freelancer
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Time in Escrow
              </th>
              <th className="text-left py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Amount
              </th>
              <th className="text-right py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((escrow) => {
              const isDisputed = escrow.status === "Disputed";
              return (
                <tr
                  key={escrow.id}
                  className={`border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors ${
                    isDisputed ? "relative" : ""
                  }`}
                >
                  {/* Red left border for disputed rows */}
                  {isDisputed && (
                    <td
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500 rounded-l"
                      aria-hidden="true"
                    />
                  )}

                  {/* Escrow ID */}
                  <td className={`py-4 ${isDisputed ? "pl-6" : "pl-5"} pr-5`}>
                    <span className="text-[13.5px] font-semibold text-blue-600 font-mono">
                      {escrow.escrowId}
                    </span>
                  </td>

                  {/* Client */}
                  <td className="py-4 px-5">
                    <span className="text-[13.5px] text-slate-700">
                      {escrow.client}
                    </span>
                  </td>

                  {/* Freelancer */}
                  <td className="py-4 px-5">
                    <span className="text-[13.5px] text-slate-600">
                      {escrow.freelancer}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5">
                    <EscrowStatusBadge status={escrow.status} />
                  </td>

                  {/* Time */}
                  <td className="py-4 px-5">
                    <span className="text-[13.5px] text-slate-600">
                      {escrow.timeInEscrow}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-5">
                    <span className="text-[13.5px] font-semibold text-slate-800">
                      {formatCurrency(escrow.amount)}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-5 text-right">
                    {isDisputed ? (
                      <button className="px-4 py-1.5 bg-slate-900 hover:bg-slate-700 text-white text-[12.5px] font-semibold rounded-lg transition-colors">
                        Triage
                      </button>
                    ) : (
                      <button className="px-4 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 text-[12.5px] font-semibold rounded-lg transition-colors">
                        View
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
        <p className="text-[12px] font-medium text-slate-400 uppercase tracking-wide">
          Showing 1-{filtered.length} of {total} active transactions
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
            disabled={page >= totalPages}
            className="w-7 h-7 rounded-md flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
