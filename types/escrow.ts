export type EscrowStatus =
  | "Disputed"
  | "In Progress"
  | "Completed"
  | "Pending";

export interface EscrowRecord {
  id: string;
  escrowId: string;
  client: string;
  freelancer: string;
  status: EscrowStatus;
  timeInEscrow: string;
  amount: number;
}
