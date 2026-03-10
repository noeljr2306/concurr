import TopBar from "@/components/layout/TopBar";
import WalletPerformance from "@/components/wallets/WalletPerformance";
import WalletTable from "@/components/wallets/WalletTable";
import {
  mockUser,
  mockWallets,
  totalBalance,
  availableFunds,
  lockedInEscrow,
} from "@/data/mockData";

interface PageProps {
  params: Promise<{ userId: string }>;
}

export default async function UserWalletsPage({ params }: PageProps) {
  const { userId } = await params;

  return (
    <>
      <TopBar userName={mockUser.name} userId={userId} />

      <main className="flex-1 overflow-auto p-8">
        {/* Page heading */}
        <div className="mb-7">
          <h1 className="text-[24px] font-bold text-slate-900 tracking-tight mb-1.5">
            Wallet Performance
          </h1>
          <p className="text-[13.5px] text-slate-500 leading-relaxed">
            High-level summary of {mockUser.name}&apos;s digital asset holdings
            across all connected networks and protocols.
          </p>
        </div>

        {/* Stats */}
        <WalletPerformance
          totalBalance={totalBalance}
          availableFunds={availableFunds}
          lockedInEscrow={lockedInEscrow}
        />

        {/* Table */}
        <WalletTable wallets={mockWallets} />
      </main>
    </>
  );
}
