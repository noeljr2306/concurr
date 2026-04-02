"use client";

import { useState } from "react";
import { Message, MessageStatus } from "@/types/message";
import MessageStatusBadge from "./MessageStatusBadge";
import UserAvatar from "@/components/users/UserAvatar";

interface MessagesTableProps {
  messages: Message[];
  total: number;
}

type FilterTab = "All Messages" | MessageStatus;
const TABS: FilterTab[] = ["All Messages", "Unread", "Pending", "Replied", "Archived"];
const PER_PAGE = 5;

export default function MessagesTable({ messages, total }: MessagesTableProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("All Messages");
  const [page, setPage] = useState(1);

  const filtered =
    activeTab === "All Messages"
      ? messages
      : messages.filter((m) => m.status === activeTab);

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const start = (page - 1) * PER_PAGE + 1;
  const end = Math.min(page * PER_PAGE, filtered.length);

  function handleTabChange(tab: FilterTab) {
    setActiveTab(tab);
    setPage(1);
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      {/* Tab filters */}
      <div className="flex items-center border-b border-slate-100 px-5 gap-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-4 text-[13.5px] font-semibold border-b-2 transition-all duration-150 whitespace-nowrap ${
              activeTab === tab
                ? "border-indigo-700 text-indigo-700"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="text-left py-3.5 pl-6 pr-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                User
              </th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                Last Message
              </th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest w-[120px]">
                Date/Time
              </th>
              <th className="text-left py-3.5 px-4 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest w-[110px]">
                Status
              </th>
              <th className="text-right py-3.5 pl-4 pr-6 text-[10.5px] font-bold text-slate-400 uppercase tracking-widest w-[80px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-[13.5px] text-slate-400">
                  No messages found.
                </td>
              </tr>
            ) : (
              paged.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors"
                >
                  {/* User */}
                  <td className="py-4 pl-6 pr-4">
                    <div className="flex items-center gap-3">
                      <UserAvatar
                        name={msg.userName}
                        initials={msg.userAvatar}
                        bgColor={msg.avatarBg}
                        size={40}
                      />
                      <div>
                        <p className="text-[13.5px] font-semibold text-slate-800 leading-snug">
                          {msg.userName}
                        </p>
                        <p className="text-[12px] text-slate-400 leading-snug">
                          ID: {msg.userId}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Last message */}
                  <td className="py-4 px-4 max-w-[340px]">
                    <span className="text-[13.5px] text-slate-500 truncate block">
                      {msg.lastMessage}
                    </span>
                  </td>

                  {/* Date/time */}
                  <td className="py-4 px-4">
                    <span className="text-[13.5px] text-slate-500 whitespace-nowrap">
                      {msg.dateTime}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <MessageStatusBadge status={msg.status} />
                  </td>

                  {/* Action */}
                  <td className="py-4 pl-4 pr-6 text-right">
                    <button className="text-[13.5px] font-bold text-indigo-700 hover:text-indigo-900 transition-colors">
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer — numbered pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
        <p className="text-[13px] text-slate-400">
          Showing {start}-{end} of {total} messages
        </p>

        <div className="flex items-center gap-1">
          {/* Previous */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-8 h-8 rounded-lg text-[13px] font-semibold transition-all duration-150 ${
                page === num
                  ? "bg-indigo-700 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              }`}
            >
              {num}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="px-3 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
