import OverviewTopBar from "@/components/overview/OverviewTopBar";
import OverviewStatCard from "@/components/overview/OverviewStatCard";
import PlatformActivityChart from "@/components/overview/PlatformActivityChart";
import RecentDisputesSidebar from "@/components/overview/RecentDisputesSidebar";
import SystemHealthPanel from "@/components/overview/SystemHealthPanel";
import CriticalAlerts from "@/components/overview/CriticalAlerts";
import { overviewStats } from "@/data/overviewData";

export default function OverviewPage() {
  return (
    <>
      <OverviewTopBar />

      <main className="flex-1 overflow-auto p-7 space-y-5">
        {/* 4 stat cards */}
        <div className="grid grid-cols-4 gap-4">
          {overviewStats.map((stat) => (
            <OverviewStatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Asymmetric 2-col layout */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "1fr 300px" }}>
          {/* Left column */}
          <div className="space-y-5">
            <PlatformActivityChart />
            <CriticalAlerts />
          </div>
          {/* Right sidebar */}
          <div className="space-y-5">
            <RecentDisputesSidebar />
            <SystemHealthPanel />
          </div>
        </div>
      </main>
    </>
  );
}
