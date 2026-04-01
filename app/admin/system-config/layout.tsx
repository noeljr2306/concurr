import SystemConfigSidebar from "@/components/system-config/SystemConfigSidebar";
import SystemConfigTopBar from "@/components/system-config/SystemConfigTopBar";

export default function SystemConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <SystemConfigSidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <SystemConfigTopBar />
        {children}
      </div>
    </div>
  );
}
