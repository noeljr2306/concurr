import { ChartDataPoint, RevenueTransaction } from "@/types/financial";

export const chartData: ChartDataPoint[] = [
  { date: "2023-10-01", label: "OCT 01", grossVolume: 28000,  netRevenue: 8400  },
  { date: "2023-10-02", label: "",        grossVolume: 25000,  netRevenue: 7500  },
  { date: "2023-10-03", label: "",        grossVolume: 22000,  netRevenue: 6600  },
  { date: "2023-10-04", label: "",        grossVolume: 30000,  netRevenue: 9000  },
  { date: "2023-10-05", label: "",        grossVolume: 27000,  netRevenue: 8100  },
  { date: "2023-10-06", label: "",        grossVolume: 31000,  netRevenue: 9300  },
  { date: "2023-10-07", label: "OCT 07", grossVolume: 38000,  netRevenue: 11400 },
  { date: "2023-10-08", label: "",        grossVolume: 52000,  netRevenue: 15600 },
  { date: "2023-10-09", label: "",        grossVolume: 48000,  netRevenue: 14400 },
  { date: "2023-10-10", label: "",        grossVolume: 55000,  netRevenue: 16500 },
  { date: "2023-10-11", label: "",        grossVolume: 62000,  netRevenue: 18600 },
  { date: "2023-10-12", label: "",        grossVolume: 58000,  netRevenue: 17400 },
  { date: "2023-10-13", label: "",        grossVolume: 65000,  netRevenue: 19500 },
  { date: "2023-10-14", label: "OCT 14", grossVolume: 72000,  netRevenue: 21600 },
  { date: "2023-10-15", label: "",        grossVolume: 68000,  netRevenue: 20400 },
  { date: "2023-10-16", label: "",        grossVolume: 74000,  netRevenue: 22200 },
  { date: "2023-10-17", label: "",        grossVolume: 80000,  netRevenue: 24000 },
  { date: "2023-10-18", label: "",        grossVolume: 78000,  netRevenue: 23400 },
  { date: "2023-10-19", label: "",        grossVolume: 75000,  netRevenue: 22500 },
  { date: "2023-10-20", label: "",        grossVolume: 82000,  netRevenue: 24600 },
  { date: "2023-10-21", label: "OCT 21", grossVolume: 88000,  netRevenue: 26400 },
  { date: "2023-10-22", label: "",        grossVolume: 76000,  netRevenue: 22800 },
  { date: "2023-10-23", label: "",        grossVolume: 84000,  netRevenue: 25200 },
  { date: "2023-10-24", label: "",        grossVolume: 90000,  netRevenue: 27000 },
  { date: "2023-10-25", label: "",        grossVolume: 92000,  netRevenue: 27600 },
  { date: "2023-10-26", label: "",        grossVolume: 96000,  netRevenue: 28800 },
  { date: "2023-10-27", label: "",        grossVolume: 94000,  netRevenue: 28200 },
  { date: "2023-10-28", label: "OCT 28", grossVolume: 98000,  netRevenue: 29400 },
  { date: "2023-10-29", label: "",        grossVolume: 100000, netRevenue: 30000 },
  { date: "2023-10-30", label: "",        grossVolume: 102000, netRevenue: 30600 },
  { date: "2023-10-31", label: "OCT 31", grossVolume: 106000, netRevenue: 31800 },
];

export const sparklineData = {
  grossVolume:   [28, 22, 31, 38, 52, 62, 72, 75, 88, 96, 106],
  platformRev:   [8,  7,  9,  11, 16, 18, 22, 22, 26, 30, 32 ],
  activeEscrows: [14, 16, 15, 18, 20, 19, 22, 21, 23, 24, 24 ],
  avgTxSize:     [67, 66, 67, 67, 68, 67, 68, 67, 67, 68, 67 ],
};

export const recentTransactions: RevenueTransaction[] = [
  { id: "1", transactionId: "#TX-94821", type: "FEE",     sourceEscrow: "ESC-40219", amount: 4500,  platformFee: 45,  timestamp: "2023-10-24 14:32" },
  { id: "2", transactionId: "#TX-94818", type: "RELEASE", sourceEscrow: "ESC-39102", amount: 12400, platformFee: 124, timestamp: "2023-10-24 12:15" },
  { id: "3", transactionId: "#TX-94812", type: "REFUND",  sourceEscrow: "ESC-41105", amount: 1200,  platformFee: 12,  timestamp: "2023-10-24 09:44" },
  { id: "4", transactionId: "#TX-94805", type: "FEE",     sourceEscrow: "ESC-38822", amount: 890.5, platformFee: 8.9, timestamp: "2023-10-23 21:10" },
  { id: "5", transactionId: "#TX-94799", type: "FEE",     sourceEscrow: "ESC-42211", amount: 5000,  platformFee: 50,  timestamp: "2023-10-23 18:22" },
];

export const financialStats = {
  grossVolume:             1240500,
  grossVolumeChange:       "+12.5%",
  grossVolumePositive:     true,
  platformRevenue:         42305.50,
  platformRevenueChange:   "-2.3%",
  platformRevenuePositive: false,
  activeEscrows:           1842,
  activeEscrowsChange:     "+5.1%",
  activeEscrowsPositive:   true,
  avgTransSize:            673.45,
  avgTransSizeChange:      "+0.8%",
  avgTransSizePositive:    true,
};
