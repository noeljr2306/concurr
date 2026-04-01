// ── Dashboard stats ────────────────────────────────────────────────────────────
export const clientDashboardStats = {
  walletBalance: "$250,000 USDC",
  totalValueLocked: "$1,284,000 USDC",
  activeProjects: 24,
  activeProjectsNew: 2,
  actionRequired: 3,
  actionLabel: "Urgent",
  actionSub: "Awaiting milestone approval",
};

// ── Active escrows table ───────────────────────────────────────────────────────
export type EscrowStatus = "IN PROGRESS" | "COMPLETED" | "PENDING";
export interface ActiveEscrow {
  id: string;
  freelancer: string;
  initials: string;
  avatarBg: string;
  progressPct: number;
  progressColor: string;
  status: EscrowStatus;
  totalAmount: number;
}

export const activeEscrows: ActiveEscrow[] = [
  { id:"1", freelancer:"Alex Rivera",  initials:"AR", avatarBg:"#cbd5e1", progressPct:70,  progressColor:"#1e3a8a", status:"IN PROGRESS", totalAmount:4500  },
  { id:"2", freelancer:"Jordan Smith", initials:"JS", avatarBg:"#94a3b8", progressPct:100, progressColor:"#22c55e", status:"COMPLETED",   totalAmount:2200  },
  { id:"3", freelancer:"Morgan Lee",   initials:"ML", avatarBg:"#64748b", progressPct:25,  progressColor:"#f59e0b", status:"PENDING",     totalAmount:8900  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export type ProjectStatus = "ACTIVE" | "IN REVIEW" | "DISPUTED";
export interface Milestone { name: string; amount: number; }
export interface Project {
  id: string;
  pid: string;
  status: ProjectStatus;
  title: string;
  milestonesCompleted: number;
  milestonesTotal: number;
  currentPhase: string;
  phaseHighlight?: boolean;
  totalFunded: number;
  nextMilestone: string;
  freelancer: string;
  freelancerInitials: string;
  freelancerBg: string;
}

export const clientProjects: Project[] = [
  {
    id:"1", pid:"#8821", status:"ACTIVE",
    title:"E-commerce App Development",
    milestonesCompleted:2, milestonesTotal:5,
    currentPhase:"UI Design Sprint",
    totalFunded:12450, nextMilestone:"Oct 24, 2023",
    freelancer:"Marcus Thorne", freelancerInitials:"MT", freelancerBg:"#cbd5e1",
  },
  {
    id:"2", pid:"#9012", status:"IN REVIEW",
    title:"AI Image Processor API",
    milestonesCompleted:4, milestonesTotal:4,
    currentPhase:"Final Acceptance",
    totalFunded:8200, nextMilestone:"Completed",
    freelancer:"Sarah Jenkins", freelancerInitials:"SJ", freelancerBg:"#94a3b8",
  },
  {
    id:"3", pid:"#7743", status:"DISPUTED",
    title:"CRM Dashboard Integration",
    milestonesCompleted:1, milestonesTotal:3,
    currentPhase:"Mediation Pending", phaseHighlight:true,
    totalFunded:3500, nextMilestone:"Paused",
    freelancer:"Kevin Owens", freelancerInitials:"KO", freelancerBg:"#64748b",
  },
];

// ── Transactions ──────────────────────────────────────────────────────────────
export type TxType   = "Deposit" | "Release" | "Refund";
export type TxStatus = "Settled" | "Pending";
export interface Transaction {
  id: string; date: string; txId: string;
  type: TxType; counterparty: string;
  amount: number; status: TxStatus;
}

export const clientTransactions: Transaction[] = [
  { id:"1", date:"Oct 12, 2026", txId:"0x4f...a1b", type:"Deposit", counterparty:"Artemis Global Corp",     amount:12450, status:"Settled" },
  { id:"2", date:"Oct 11, 2026", txId:"0x9e...f2c", type:"Release", counterparty:"Alex Rivers (Freelancer)", amount:3200,  status:"Pending" },
  { id:"3", date:"Oct 10, 2026", txId:"0x2a...d8e", type:"Refund",  counterparty:"Eco-System UI Kit",        amount:450,   status:"Settled" },
  { id:"4", date:"Oct 10, 2026", txId:"0x7b...c4a", type:"Deposit", counterparty:"Horizon Ventures",         amount:50000, status:"Settled" },
  { id:"5", date:"Oct 09, 2026", txId:"0x1d...b6f", type:"Release", counterparty:"Sarah Chen Design",        amount:1850,  status:"Pending" },
];
