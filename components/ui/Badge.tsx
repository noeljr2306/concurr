import { WalletStatus } from "@/types";

const statusConfig: Record<
  WalletStatus,
  { bg: string; text: string; dot: string }
> = {
  Active: {
    bg: "bg-green-50",
    text: "text-green-600",
    dot: "bg-green-500",
  },
  Locked: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    dot: "bg-amber-500",
  },
  Archived: {
    bg: "bg-slate-100",
    text: "text-slate-500",
    dot: "bg-slate-400",
  },
};

interface BadgeProps {
  status: WalletStatus;
}

export default function Badge({ status }: BadgeProps) {
  const { bg, text, dot } = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold ${bg} ${text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  );
}
