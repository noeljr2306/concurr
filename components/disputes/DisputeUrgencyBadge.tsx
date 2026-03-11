import { DisputeUrgency } from "@/types/dispute";

const config: Record<DisputeUrgency, { bg: string; text: string }> = {
  URGENT: { bg: "bg-red-100",    text: "text-red-600"     },
  HIGH:   { bg: "bg-indigo-100", text: "text-indigo-700"  },
  MEDIUM: { bg: "bg-orange-100", text: "text-orange-600"  },
  LOW:    { bg: "bg-slate-100",  text: "text-slate-600"   },
};

export default function DisputeUrgencyBadge({ status }: { status: DisputeUrgency }) {
  const { bg, text } = config[status];
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-[11.5px] font-bold tracking-wide ${bg} ${text}`}
    >
      {status}
    </span>
  );
}
