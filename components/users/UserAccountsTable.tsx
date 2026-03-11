"use client";

import { useState } from "react";
import Link from "next/link";
import { UserAccount } from "@/types/user";
import UserAvatar from "./UserAvatar";
import VerificationBadge from "./VerificationBadge";
import TrustScoreBar from "./TrustScoreBar";
import { formatCurrency } from "@/lib/utils";

interface UserAccountsTableProps {
  users: UserAccount[];
  totalCount: number;
}

const PER_PAGE = 4;

export default function UserAccountsTable({ users, totalCount }: UserAccountsTableProps) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalCount / PER_PAGE);
  const paged = users.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, users.length);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-4 pl-6 pr-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                User
              </th>
              <th className="text-left py-4 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                Role
              </th>
              <th className="text-left py-4 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                Verification<br />Status
              </th>
              <th className="text-left py-4 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                Total<br />Volume ($)
              </th>
              <th className="text-left py-4 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                Trust Score
              </th>
              <th className="text-right py-4 pl-4 pr-6 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paged.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors"
              >
                {/* User info */}
                <td className="py-4 pl-6 pr-4">
                  <div className="flex items-center gap-3">
                    <UserAvatar
                      name={user.name}
                      initials={user.avatarInitials}
                      bgColor={user.avatarBg}
                      size={40}
                    />
                    <div>
                      <p className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                        {user.name}
                      </p>
                      <p className="text-[12px] text-slate-400 leading-snug">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="py-4 px-4">
                  <span className="text-[13.5px] text-slate-600">{user.role}</span>
                </td>

                {/* Verification */}
                <td className="py-4 px-4">
                  <VerificationBadge status={user.verificationStatus} />
                </td>

                {/* Total Volume */}
                <td className="py-4 px-4">
                  <span className="text-[13.5px] font-semibold text-slate-800">
                    {user.totalVolume === null
                      ? "—"
                      : formatCurrency(user.totalVolume)}
                  </span>
                </td>

                {/* Trust Score */}
                <td className="py-4 px-4">
                  <TrustScoreBar score={user.trustScore} />
                </td>

                {/* Actions */}
                <td className="py-4 pl-4 pr-6 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      href={`/user-accounts/${user.id}/wallets`}
                      className="px-3 py-1.5 text-[12.5px] font-semibold text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                    >
                      View Profile
                    </Link>
                    <span className="text-slate-200 text-lg leading-none select-none">|</span>
                    <button className="px-3 py-1.5 text-[12.5px] font-semibold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                      Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer — Previous / Next style */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
        <p className="text-[13px] text-slate-400">
          Showing {start} to {end} of {totalCount.toLocaleString()} users
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-1.5 text-[13px] font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="px-4 py-1.5 text-[13px] font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
