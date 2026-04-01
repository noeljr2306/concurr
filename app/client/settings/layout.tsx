// Settings has its own sidebar — override the parent layout's bg and remove top nav
export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex-1 flex">{children}</div>;
}
