import TopBar from "@/components/layout/TopBar";

interface PageProps {
  params: Promise<{ userId: string }>;
}

export default async function SecurityPage({ params }: PageProps) {
  const { userId } = await params;
  return (
    <>
      <TopBar userName="Sarah Johnson" userId={userId} />
      <main className="flex-1 overflow-auto p-8">
        <h1 className="text-2xl font-bold text-slate-900">Security</h1>
        <p className="text-slate-500 mt-2">Security settings coming soon.</p>
      </main>
    </>
  );
}
