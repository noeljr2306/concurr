export type DisputeUrgency = "URGENT" | "HIGH" | "MEDIUM" | "LOW";

export interface DisputeRecord {
  id: string;
  disputeId: string;
  projectName: string;
  client: string;
  freelancer: string;
  amount: number;
  daysOpen: number;
  status: DisputeUrgency;
}
