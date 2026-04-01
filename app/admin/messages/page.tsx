import MessagesTopBar from "@/components/messages/MessagesTopBar";
import MessagesTable from "@/components/messages/MessagesTable";
import { mockMessages, messageStats } from "@/data/messageData";

export default function MessagesPage() {
  return (
    <>
      <MessagesTopBar />
      <main className="flex-1 overflow-auto p-7">
        <MessagesTable messages={mockMessages} total={messageStats.total} />
      </main>
    </>
  );
}
