export interface OverviewStat {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  sparkline: number[];
}

export interface RecentDispute {
  id: string;
  txId: string;
  buyer: string;
  amount: number;
  badge: string;
  badgeVariant: "warning" | "danger" | "amber";
}

export interface SystemService {
  name: string;
  status: string;
  statusVariant: "green" | "blue" | "teal";
  icon: "api" | "db" | "engine";
}

export interface CriticalAlert {
  id: string;
  icon: "warning" | "info";
  title: string;
  subtitle: string;
  action: string;
  actionVariant: "danger" | "outline";
}

export const overviewStats: OverviewStat[] = [
  {
    label: "Total Platform TVL",
    value: "$42,840,120",
    change: "+5.2%",
    changePositive: true,
    sparkline: [30, 28, 32, 29, 35, 33, 38, 36, 34, 38, 40],
  },
  {
    label: "Active Escrows",
    value: "1,284",
    change: "+0.8%",
    changePositive: true,
    sparkline: [40, 42, 41, 43, 42, 44, 43, 45, 44, 43, 45],
  },
  {
    label: "Revenue (MTD)",
    value: "$124,500",
    change: "+14.3%",
    changePositive: true,
    sparkline: [20, 24, 22, 26, 25, 28, 27, 30, 32, 30, 34],
  },
  {
    label: "User Growth",
    value: "+12%",
    change: "+2.1%",
    changePositive: true,
    sparkline: [10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 16],
  },
];

export const platformActivityData = [
  { label: "NOV 01", volume: 18, escrow: 12 },
  { label: "",        volume: 20, escrow: 13 },
  { label: "",        volume: 22, escrow: 14 },
  { label: "",        volume: 21, escrow: 14 },
  { label: "",        volume: 23, escrow: 15 },
  { label: "",        volume: 24, escrow: 16 },
  { label: "NOV 07", volume: 26, escrow: 17 },
  { label: "",        volume: 29, escrow: 18 },
  { label: "",        volume: 35, escrow: 19 },
  { label: "",        volume: 42, escrow: 20 },
  { label: "",        volume: 50, escrow: 21 },
  { label: "",        volume: 58, escrow: 23 },
  { label: "",        volume: 65, escrow: 24 },
  { label: "NOV 14", volume: 72, escrow: 25 },
  { label: "",        volume: 76, escrow: 26 },
  { label: "",        volume: 80, escrow: 27 },
  { label: "",        volume: 82, escrow: 28 },
  { label: "",        volume: 78, escrow: 28 },
  { label: "",        volume: 70, escrow: 27 },
  { label: "",        volume: 60, escrow: 26 },
  { label: "NOV 21", volume: 50, escrow: 25 },
  { label: "",        volume: 42, escrow: 24 },
  { label: "",        volume: 36, escrow: 24 },
  { label: "",        volume: 30, escrow: 24 },
  { label: "",        volume: 26, escrow: 25 },
  { label: "",        volume: 28, escrow: 26 },
  { label: "",        volume: 34, escrow: 27 },
  { label: "",        volume: 42, escrow: 28 },
  { label: "",        volume: 52, escrow: 30 },
  { label: "NOV 30", volume: 64, escrow: 32 },
];

export const recentDisputes: RecentDispute[] = [
  {
    id: "1",
    txId: "TX-8821-XP",
    buyer: "Amazon Global",
    amount: 12400,
    badge: "Awaiting Seller",
    badgeVariant: "warning",
  },
  {
    id: "2",
    txId: "TX-9910-LA",
    buyer: "Meta Logistics",
    amount: 5200,
    badge: "High Urgency",
    badgeVariant: "danger",
  },
  {
    id: "3",
    txId: "TX-9923-ST",
    buyer: "Starlink Term.",
    amount: 84000,
    badge: "Arbitration",
    badgeVariant: "amber",
  },
];

export const systemServices: SystemService[] = [
  { name: "Core API",      status: "99.9%",       statusVariant: "green", icon: "api"    },
  { name: "Main Database", status: "OPERATIONAL", statusVariant: "green", icon: "db"     },
  { name: "Escrow Engine", status: "STABLE",      statusVariant: "teal",  icon: "engine" },
];

export const criticalAlerts: CriticalAlert[] = [
  {
    id: "1",
    icon: "warning",
    title: "3 New Disputes requiring triage",
    subtitle: "Large transaction disputes on accounts #8821, #9910, #9923",
    action: "Triage Now",
    actionVariant: "danger",
  },
  {
    id: "2",
    icon: "info",
    title: "System update scheduled",
    subtitle: "Version 4.2.0 deployment set for Sunday, 02:00 AM UTC",
    action: "View Details",
    actionVariant: "outline",
  },
];
