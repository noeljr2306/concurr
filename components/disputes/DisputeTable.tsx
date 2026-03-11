"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DisputeRecord } from "@/types/dispute";
import DisputeUrgencyBadge from "./DisputeUrgencyBadge";
import { formatCurrency } from "@/lib/utils";

interface DisputeTableProps {
  disputes: DisputeRecord[];
  totalResults: number;
}

export default function DisputeTable({ disputes, totalResults }: DisputeTableProps) {
  const [page, setPage] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(totalResults / perPage);
  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, totalResults);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest w-[120px]">
                Dispute ID
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Project Name
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Client
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Freelancer
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Amount
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Days Open
              </th>
              <th className="text-left py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Status
              </th>
              <th className="text-right py-3.5 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute, index) => {
              const hasRedBorder = index === 0;
              return (
                <tr
                  key={dispute.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors relative"
                >
                  {hasRedBorder && (
                    <td
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <td className={"py-5 pr-5 " + (hasRedBorder ? "pl-6" : "pl-5")}>
                    <span className="text-[13px] font-semibold text-slate-600 font-mono">
                      {dispute.disputeId}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <span className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                      {dispute.projectName}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <span className="text-[13.5px] text-slate-600 leading-snug">
                      {dispute.client}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <span className="text-[13.5px] text-slate-600 leading-snug">
                      {dispute.freelancer}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <span className="text-[13.5px] font-semibold text-slate-800">
                      {formatCurrency(dispute.amount)}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <span className="text-[13.5px] text-slate-600">
                      {dispute.daysOpen}
                    </span>
                  </td>

                  <td className="py-5 px-5">
                    <DisputeUrgencyBadge status={dispute.status} />
                  </td>

                  <td className="py-5 px-5 text-right">
                    <button className="px-5 py-2 bg-slate-900 hover:bg-slate-700 text-white text-[12px] font-bold rounded-lg tracking-wide transition-colors">
                      TRIAGE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
        <p className="text-[12.5px] text-slate-400">
          Showing {start} to {end} of {totalResults.toLocaleString()} results
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
