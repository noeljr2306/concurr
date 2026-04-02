import FreelancerTopNav from "@/components/freelancer/layout/FreelancerTopNav";

export default function FreelancerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <FreelancerTopNav />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
