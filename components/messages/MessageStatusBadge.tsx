import { MessageStatus } from "@/types/message";

const config: Record<MessageStatus, { bg: string; text: string }> = {
  Unread:   { bg: "bg-blue-100",   text: "text-blue-600"   },
  Pending:  { bg: "bg-yellow-100", text: "text-yellow-700" },
  Replied:  { bg: "bg-green-100",  text: "text-green-700"  },
  Archived: { bg: "bg-slate-100",  text: "text-slate-500"  },
};

export default function MessageStatusBadge({ status }: { status: MessageStatus }) {
  const { bg, text } = config[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12.5px] font-semibold ${bg} ${text}`}>
      {status}
    </span>
  );
}
