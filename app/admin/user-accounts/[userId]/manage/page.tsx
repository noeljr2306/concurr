"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import GlobalTopBar from "@/components/layout/GlobalTopBar";
import { mockUserAccounts } from "@/data/userData";

export default function ManageUserPage() {
  const params = useParams();
  const userId = params.userId as string;
  const user = mockUserAccounts.find((u) => u.id === userId);

  const [trustScore, setTrustScore] = useState(user?.trustScore ?? 84);
  const [adminNote, setAdminNote] = useState("");
  const [activeTab, setActiveTab] = useState<"Security" | "Financial History">("Security");
  const [frozen, setFrozen] = useState(false);

  if (!user) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-slate-500">User not found.</p>
      </div>
    );
  }

  return (
    <>
      <GlobalTopBar
        searchPlaceholder="Search users by name, email, or wallet address..."
        rightIcon="message"
      />

      <main className="flex-1 overflow-auto bg-slate-100 p-7">
        <div className="max-w-5xl mx-auto">

          {/* Page header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link
                href="/user-accounts"
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center transition-colors"
              >
                <ArrowLeft size={16} strokeWidth={2} className="text-slate-600" />
              </Link>
              <div>
                <h1 className="text-[22px] font-bold text-slate-900 tracking-tight">
                  Manage User: {user.name}
                </h1>
                <p className="text-[12.5px] text-slate-400 mt-0.5">
                  User ID: {user.userId ?? "—"} &nbsp;|&nbsp; Joined {user.joinedDate ?? "—"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href={`/user-accounts/${userId}/profile`}
                className="px-5 py-2.5 border border-slate-200 bg-white hover:bg-slate-50 text-[13px] font-semibold text-slate-700 rounded-lg transition-colors"
              >
                View Logs
              </Link>
              <button className="px-5 py-2.5 bg-indigo-800 hover:bg-indigo-900 text-white text-[13px] font-bold rounded-lg transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-slate-200">
            {(["Security", "Financial History"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-3 mr-4 text-[13.5px] font-semibold border-b-2 transition-all duration-150 ${
                  activeTab === tab
                    ? "border-indigo-700 text-indigo-700"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === "Security" && (
            <div className="grid grid-cols-2 gap-5">

              {/* Risk Management panel */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6">
                <h2 className="text-[15px] font-bold text-slate-900">Risk Management</h2>

                {/* Trust Score Adjustment */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[13.5px] font-semibold text-slate-800">Trust Score Adjustment</p>
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[12px] font-bold rounded-lg border border-indigo-200">
                      {trustScore} / 100
                    </span>
                  </div>

                  {/* Slider */}
                  <div className="relative mb-2">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={trustScore}
                      onChange={(e) => setTrustScore(Number(e.target.value))}
                      className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                      style={{
                        background: `linear-gradient(to right, #4f46e5 ${trustScore}%, #e2e8f0 ${trustScore}%)`,
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Critical</span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Trusted</span>
                  </div>
                </div>

                {/* Freeze Account */}
                <div className={`rounded-xl border-2 p-5 transition-colors ${frozen ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"}`}>
                  <p className="text-[14px] font-bold text-red-500 mb-1">
                    {frozen ? "Account Frozen" : "Freeze Account"}
                  </p>
                  <p className="text-[12.5px] text-slate-500 mb-4">
                    {frozen
                      ? "This account is currently frozen. All access and transactions are halted."
                      : "Immediately revoke all access and halt pending transactions."}
                  </p>
                  <button
                    onClick={() => setFrozen((f) => !f)}
                    className={`px-6 py-2.5 rounded-lg text-white text-[13px] font-bold transition-colors ${
                      frozen
                        ? "bg-slate-600 hover:bg-slate-700"
                        : "bg-red-500 hover:bg-red-600"
                    }`}
                  >
                    {frozen ? "Unfreeze Account" : "Freeze Account"}
                  </button>
                </div>
              </div>

              {/* Admin Notes panel */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
                <h2 className="text-[15px] font-bold text-slate-900">Admin Notes</h2>

                <textarea
                  value={adminNote}
                  onChange={(e) => setAdminNote(e.target.value)}
                  placeholder="Log internal notes about this user's account behavior or special requests..."
                  rows={8}
                  className="flex-1 w-full px-4 py-3 border border-slate-200 rounded-xl text-[13.5px] text-slate-700 bg-white placeholder:text-slate-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all leading-relaxed"
                />

                <div className="flex items-center justify-between pt-1">
                  <p className="text-[12px] text-slate-400">
                    Last updated: 2 days ago by Admin_04
                  </p>
                  <button className="text-[12.5px] font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
                    View History
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Financial History" && (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
              <p className="text-[14px] text-slate-400">Financial history for {user.name} coming soon.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
