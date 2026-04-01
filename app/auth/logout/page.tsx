"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearSessionCookies } from "@/lib/auth";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    clearSessionCookies();
    router.replace("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <p className="text-slate-400 text-[14px]">Signing out...</p>
    </div>
  );
}
