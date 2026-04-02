export const freelancerStats = {
  availableToWithdraw: 2450,
  lockedInEscrow: 4800,
  thirtyDayEarnings: 8200,
  earningsChange: "+14.2% from last month",
};

export type MilestoneStatus = "funded" | "in_review" | "settled";
export interface ActiveMilestone {
  id: string; title: string; client: string;
  status: MilestoneStatus; statusLabel: string;
  amount: number; icon: "puzzle" | "grid" | "doc";
  autoRelease?: string;
}

export const activeMilestones: ActiveMilestone[] = [
  { id:"1", title:"Flutter App UI Integration", client:"PayOff Inc.",   status:"funded",    statusLabel:"Funded: $1,500",              amount:1500, icon:"puzzle"           },
  { id:"2", title:"Next.js Admin Dashboard",    client:"NuraHealth",    status:"in_review", statusLabel:"In Review",                   amount:2000, icon:"grid",  autoRelease:"Auto-Releases in: 4 Days, 12 Hrs" },
  { id:"3", title:"Sui Smart Contract Audit",   client:"Mystic Labs",   status:"settled",   statusLabel:"Settled: $3,000",             amount:3000, icon:"doc"              },
];

export const paymentVelocityData = [22, 35, 28, 48, 42, 60, 55, 75];

export const freelancerProjects = [
  { id:"1", pid:"#8821", status:"ACTIVE"    as const, title:"E-commerce App Development",  milestonesCompleted:2, milestonesTotal:5, currentPhase:"UI Design Sprint",  totalFunded:12450, nextMilestone:"Oct 24, 2023", client:"Marcus Thorne",  clientInitials:"MT", clientBg:"#cbd5e1" },
  { id:"2", pid:"#9012", status:"IN REVIEW" as const, title:"AI Image Processor API",       milestonesCompleted:4, milestonesTotal:4, currentPhase:"Final Acceptance",  totalFunded:8200,  nextMilestone:"Completed",    client:"Sarah Jenkins",  clientInitials:"SJ", clientBg:"#94a3b8" },
  { id:"3", pid:"#7743", status:"DISPUTED"  as const, title:"CRM Dashboard Integration",   milestonesCompleted:1, milestonesTotal:3, currentPhase:"Mediation Pending", phaseHighlight:true, totalFunded:3500, nextMilestone:"Paused", client:"Kevin Owens", clientInitials:"KO", clientBg:"#64748b" },
];

export const freelancerTransactions = [
  { id:"1", date:"Oct 12, 2026", txId:"0x4f...a1b", type:"Deposit" as const,  counterparty:"Artemis Global Corp",     amount:12450, status:"Settled" as const },
  { id:"2", date:"Oct 11, 2026", txId:"0x9e...f2c", type:"Release" as const,  counterparty:"Alex Rivers (Freelancer)", amount:3200,  status:"Pending" as const },
  { id:"3", date:"Oct 10, 2026", txId:"0x2a...d8e", type:"Refund"  as const,  counterparty:"Eco-System UI Kit",        amount:450,   status:"Settled" as const },
  { id:"4", date:"Oct 10, 2026", txId:"0x7b...c4a", type:"Deposit" as const,  counterparty:"Horizon Ventures",         amount:50000, status:"Settled" as const },
  { id:"5", date:"Oct 09, 2026", txId:"0x1d...b6f", type:"Release" as const,  counterparty:"Sarah Chen Design",        amount:1850,  status:"Pending" as const },
];
