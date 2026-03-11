export type VerificationStatus = "Verified" | "Pending" | "Unverified";
export type UserRole = "Freelancer" | "Client" | "Admin";

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  verificationStatus: VerificationStatus;
  totalVolume: number | null;
  trustScore: number;
  avatarUrl?: string;
  avatarInitials: string;
  avatarBg: string;
}
