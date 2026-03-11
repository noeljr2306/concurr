import { DisputeRecord } from "@/types/dispute";

export const mockDisputes: DisputeRecord[] = [
  {
    id: "1",
    disputeId: "#DIS-9021",
    projectName: "Mobile App UI Redesign",
    client: "Global Tech Solutions",
    freelancer: "Sarah Jenkins",
    amount: 4500,
    daysOpen: 12,
    status: "URGENT",
  },
  {
    id: "2",
    disputeId: "#DIS-8842",
    projectName: "API Payment Gateway",
    client: "FinStream Corp",
    freelancer: "Mike Donahue",
    amount: 2200,
    daysOpen: 5,
    status: "MEDIUM",
  },
  {
    id: "3",
    disputeId: "#DIS-8655",
    projectName: "Brand Identity Overhaul",
    client: "SkyHigh Media",
    freelancer: "Tom Harrison",
    amount: 1200,
    daysOpen: 15,
    status: "URGENT",
  },
  {
    id: "4",
    disputeId: "#DIS-8710",
    projectName: "Cloud Migration Phase 1",
    client: "EcoSystems Inc",
    freelancer: "Elena Rodriguez",
    amount: 8900,
    daysOpen: 2,
    status: "LOW",
  },
  {
    id: "5",
    disputeId: "#DIS-8521",
    projectName: "Smart Contract Audit",
    client: "D-App Co.",
    freelancer: "Wei Li",
    amount: 6000,
    daysOpen: 8,
    status: "HIGH",
  },
];

export const disputeStats = {
  totalActiveDisputes: 1284,
  avgResolutionDays: 4.2,
  highUrgencyCases: 86,
  totalResults: 1284,
};
