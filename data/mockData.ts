import { User, Wallet } from "@/types";

export const mockWallets: Wallet[] = [
  {
    id: "w1",
    address: "0x71C...39A2",
    type: "USDT (Ethereum)",
    balance: 45200,
    status: "Active",
    network: "Ethereum",
    tokenSymbol: "T",
    colorHex: "#22c55e",
  },
  {
    id: "w2",
    address: "0x3B2...88E1",
    type: "USDC (Polygon)",
    balance: 12450,
    status: "Active",
    network: "Polygon",
    tokenSymbol: "S",
    colorHex: "#3b82f6",
  },
  {
    id: "w3",
    address: "0x9F4...22C1",
    type: "ETH",
    balance: 68300,
    status: "Locked",
    network: "Ethereum",
    tokenSymbol: "N",
    colorHex: "#1e293b",
  },
  {
    id: "w4",
    address: "0xA1B...F663",
    type: "LINK",
    balance: 2500,
    status: "Archived",
    network: "Ethereum",
    tokenSymbol: "L",
    colorHex: "#6366f1",
  },
];

export const mockUser: User = {
  id: "user-sarah",
  name: "Sarah Johnson",
  email: "sarah.johnson@example.com",
  wallets: mockWallets,
};

export const totalBalance = mockWallets.reduce((sum, w) => sum + w.balance, 0);
export const availableFunds = mockWallets
  .filter((w) => w.status === "Active")
  .reduce((sum, w) => sum + w.balance, 0);
export const lockedInEscrow = mockWallets
  .filter((w) => w.status === "Locked")
  .reduce((sum, w) => sum + w.balance, 0);
