import { EscrowStatus } from "@/types/escrow";

const config: Record<EscrowStatus, { bg: string; text: string }> = {
  Disputed:    { bg: "bg-red-100",    text: "text-red-600"    },
  "In Progress": { bg: "bg-blue-100",  text: "text-blue-600"  },
  Completed:   { bg: "bg-green-100",  text: "text-green-600" },
  Pending:     { bg: "bg-yellow-100", text: "text-yellow-700" },
};

export default function EscrowStatusBadge({ status }: { status: EscrowStatus }) {
  const { bg, text } = config[status];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold ${bg} ${text}`}>
      {status}
    </span>
  );
}
