import { EscrowRecord } from "@/types/escrow";

export const mockEscrows: EscrowRecord[] = [
  { id: "1", escrowId: "#CN-4829", client: "Acme Corp",       freelancer: "John Doe",    status: "Disputed",     timeInEscrow: "4d 12h", amount: 12400  },
  { id: "2", escrowId: "#CN-4830", client: "Global Tech",     freelancer: "Sarah Smith", status: "In Progress",  timeInEscrow: "2d 06h", amount: 5200   },
  { id: "3", escrowId: "#CN-4831", client: "Stellar Inc",     freelancer: "Mike Ross",   status: "Completed",    timeInEscrow: "1d 18h", amount: 32000  },
  { id: "4", escrowId: "#CN-4832", client: "Fintech LLC",     freelancer: "Jane Foster", status: "Disputed",     timeInEscrow: "5d 02h", amount: 8900   },
  { id: "5", escrowId: "#CN-4833", client: "Cloud Nine",      freelancer: "Alex Ward",   status: "Pending",      timeInEscrow: "0d 05h", amount: 15750  },
  { id: "6", escrowId: "#CN-4834", client: "Data Flow",       freelancer: "Emily Blunt", status: "In Progress",  timeInEscrow: "3d 10h", amount: 2300   },
  { id: "7", escrowId: "#CN-4835", client: "Nexus Ltd",       freelancer: "Chris Evans", status: "Disputed",     timeInEscrow: "6d 14h", amount: 45000  },
  { id: "8", escrowId: "#CN-4836", client: "Vortex Co",       freelancer: "Tom Hardy",   status: "Completed",    timeInEscrow: "2d 22h", amount: 1100   },
  { id: "9", escrowId: "#CN-4837", client: "Zion Bank",       freelancer: "Leo Messi",   status: "In Progress",  timeInEscrow: "4d 08h", amount: 9500   },
  { id: "10",escrowId: "#CN-4838", client: "Apex Solutions",  freelancer: "Katy Perry",  status: "Disputed",     timeInEscrow: "1d 04h", amount: 2500   },
];

export const escrowStats = {
  systemTVL: 24842109,
  tvlChange: "+2.4%",
  activeDisputes: 12,
  disputePriority: "High Priority",
  volume24h: 1210500,
  volumeChange: "+12.2%",
  totalTransactions: 482,
};
