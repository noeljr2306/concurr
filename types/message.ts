export type MessageStatus = "Unread" | "Pending" | "Replied" | "Archived";

export interface Message {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  avatarBg: string;
  lastMessage: string;
  dateTime: string;
  status: MessageStatus;
}
