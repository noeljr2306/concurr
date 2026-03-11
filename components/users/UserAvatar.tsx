interface UserAvatarProps {
  name: string;
  initials: string;
  bgColor: string;
  size?: number;
}

export default function UserAvatar({ name, initials, bgColor, size = 40 }: UserAvatarProps) {
  // Determine text color based on bg darkness
  const darkBgs = ["#1e293b", "#334155", "#b45309", "#0f172a"];
  const isDark = darkBgs.includes(bgColor);

  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-[13px] overflow-hidden"
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        color: isDark ? "#f8fafc" : "#334155",
      }}
      title={name}
    >
      {initials}
    </div>
  );
}
