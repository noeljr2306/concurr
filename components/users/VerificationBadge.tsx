import { VerificationStatus } from "@/types/user";

const config: Record<VerificationStatus, { bg: string; text: string }> = {
  Verified:   { bg: "bg-green-100",  text: "text-green-700" },
  Pending:    { bg: "bg-yellow-100", text: "text-yellow-700" },
  Unverified: { bg: "bg-slate-100",  text: "text-slate-500" },
};

export default function VerificationBadge({ status }: { status: VerificationStatus }) {
  const { bg, text } = config[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12.5px] font-semibold ${bg} ${text}`}>
      {status}
    </span>
  );
}
