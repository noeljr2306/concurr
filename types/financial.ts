export type TransactionType = "FEE" | "RELEASE" | "REFUND";

export interface RevenueTransaction {
  id: string;
  transactionId: string;
  type: TransactionType;
  sourceEscrow: string;
  amount: number;
  platformFee: number;
  timestamp: string;
}

export interface ChartDataPoint {
  date: string;
  label: string;
  grossVolume: number;
  netRevenue: number;
}
