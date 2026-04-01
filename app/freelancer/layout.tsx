import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Concurr Freelancer",
  description: "Concurr Freelancer Portal",
};

export default function FreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-sans antialiased bg-slate-50`}
        suppressHydrationWarning
      >
        <div className="min-h-screen bg-slate-50">
          <header className="bg-white border-b border-slate-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#10b981"
                    />
                    <rect
                      x="13"
                      y="2"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#10b981"
                      opacity="0.45"
                    />
                    <rect
                      x="2"
                      y="13"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#10b981"
                      opacity="0.45"
                    />
                    <rect
                      x="13"
                      y="13"
                      width="9"
                      height="9"
                      rx="2"
                      fill="#10b981"
                    />
                  </svg>
                </div>
                <span className="font-bold text-[15px] text-slate-900 tracking-tight">
                  Concurr Freelancer
                </span>
              </div>
              <nav className="flex items-center gap-6">
                <a
                  href="/freelancer/dashboard"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Dashboard
                </a>
                <a
                  href="/freelancer/jobs"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Find Jobs
                </a>
                <a
                  href="/freelancer/portfolio"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Portfolio
                </a>
                <a
                  href="/freelancer/profile"
                  className="text-slate-600 hover:text-slate-900"
                >
                  Profile
                </a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
