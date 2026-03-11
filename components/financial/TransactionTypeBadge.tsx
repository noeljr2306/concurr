import { TransactionType } from "@/types/financial";

const config: Record<TransactionType, { bg: string; text: string }> = {
  FEE:     { bg: "bg-green-100",  text: "text-green-700"  },
  RELEASE: { bg: "bg-blue-100",   text: "text-blue-700"   },
  REFUND:  { bg: "bg-red-100",    text: "text-red-600"    },
};

export default function TransactionTypeBadge({ type }: { type: TransactionType }) {
  const { bg, text } = config[type];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded text-[11.5px] font-bold tracking-wide ${bg} ${text}`}>
      {type}
    </span>
  );
}
