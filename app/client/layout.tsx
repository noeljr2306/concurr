import ClientTopNav from "@/components/client/layout/ClientTopNav";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <ClientTopNav />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
