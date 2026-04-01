import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layout/Sidebar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Concurr Admin",
  description: "Concurr Admin Dashboard",
};

export default function AdminLayout({
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
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
