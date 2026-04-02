"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShieldCheck, Plus } from "lucide-react";
import { clearSessionCookies, getSessionFromCookie } from "@/lib/auth";

const navLinks = [
  { label: "Dashboard",    href: "/freelancer/dashboard"    },
  { label: "Projects",     href: "/freelancer/projects"     },
  { label: "Transactions", href: "/freelancer/transactions" },
  { label: "Wallets",      href: "/freelancer/wallets"      },
];

export default function FreelancerTopNav() {
  const pathname = usePathname();
  const router   = useRouter();
  const session  = getSessionFromCookie();

  function handleLogout() {
    clearSessionCookies();
    router.push("/auth/login");
  }

  return (
    <header className="bg-[#0f1f3d] text-white px-8 flex items-center justify-between h-[58px] flex-shrink-0">
      <div className="flex items-center gap-8">
        <Link href="/freelancer/dashboard" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <ShieldCheck size={16} strokeWidth={2} className="text-white" />
          </div>
          <span className="font-bold text-[16px] text-white tracking-tight">Escrow</span>
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-[13.5px] font-medium transition-colors ${active ? "text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/freelancer/projects/new"
          className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-[13.5px] font-bold rounded-full transition-colors">
          <Plus size={15} strokeWidth={2.5} /> Fund New Project
        </Link>
        <div className="w-px h-6 bg-slate-700" />
        <button onClick={handleLogout} title="Sign out"
          className="w-9 h-9 rounded-full bg-orange-200 hover:bg-orange-300 flex items-center justify-center overflow-hidden transition-colors">
          <span className="text-[12px] font-bold text-orange-700">{session?.avatarInitials ?? "??"}</span>
        </button>
      </div>
    </header>
  );
}
