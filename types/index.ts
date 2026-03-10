export type WalletStatus = "Active" | "Locked" | "Archived";

export type WalletType = "USDT (Ethereum)" | "USDC (Polygon)" | "ETH" | "LINK" | string;

export interface Wallet {
  id: string;
  address: string;
  type: WalletType;
  balance: number;
  status: WalletStatus;
  network: string;
  tokenSymbol: string;
  colorHex: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  wallets: Wallet[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  section: "main" | "system";
}
