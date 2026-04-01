import { UserPlus } from "lucide-react";
import GlobalTopBar from "@/components/layout/GlobalTopBar";
import UserStatCard from "@/components/users/UserStatCard";
import UserAccountsTable from "@/components/users/UserAccountsTable";
import { mockUserAccounts, userStats } from "@/data/userData";

export default function UserAccountsPage() {
  return (
    <>
      <GlobalTopBar />

      <main className="flex-1 overflow-auto p-8">
        {/* Heading + action */}
        <div className="flex items-start justify-between mb-7">
          <div>
            <h1 className="text-[28px] font-bold text-slate-900 tracking-tight mb-1">
              User Accounts
            </h1>
            <p className="text-[13.5px] text-slate-500">
              Manage platform participants and permissions.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13px] font-bold rounded-lg transition-colors">
            <UserPlus size={15} strokeWidth={2.2} />
            Invite New User
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <UserStatCard
            label="Total Users"
            value={userStats.totalUsers}
            change={userStats.totalUsersChange}
            changePositive={userStats.totalUsersPositive}
          />
          <UserStatCard
            label="Verified Users"
            value={userStats.verifiedUsers}
            change={userStats.verifiedUsersChange}
            changePositive={userStats.verifiedUsersPositive}
          />
          <UserStatCard
            label="Active Dispute Participants"
            value={userStats.activeDisputeParticipants}
            change={userStats.disputeParticipantsChange}
            changePositive={userStats.disputeParticipantsPositive}
          />
        </div>

        {/* Table */}
        <UserAccountsTable
          users={mockUserAccounts}
          totalCount={userStats.totalCount}
        />
      </main>
    </>
  );
}
