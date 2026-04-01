"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MOCK_USERS, ROLE_HOME, setSessionCookies } from "@/lib/auth";

const ROLE_LABEL: Record<string, { label: string; color: string }> = {
  admin:      { label: "Admin Portal",      color: "text-indigo-700" },
  client:     { label: "Client Portal",     color: "text-blue-700"   },
  freelancer: { label: "Freelancer Portal", color: "text-teal-700"   },
};

const DEMO_CREDENTIALS = [
  { role: "admin",      email: "admin@concurr.io",      password: "admin123"      },
  { role: "client",     email: "client@concurr.io",     password: "client123"     },
  { role: "freelancer", email: "freelancer@concurr.io", password: "freelancer123" },
];

export default function LoginPage() {
  const router       = useRouter();
  const searchParams = useSearchParams();
  const next         = searchParams.get("next");

  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 400)); // simulate network

    const user = MOCK_USERS[email.toLowerCase().trim()];
    if (!user || user.password !== password) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    const { password: _, ...session } = user;
    setSessionCookies(session);

    // Go to intended destination or role home
    router.push(next ?? ROLE_HOME[session.role]);
  }

  function fillDemo(email: string, password: string) {
    setEmail(email);
    setPassword(password);
    setError("");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="9" height="9" rx="2" fill="white" />
              <rect x="13" y="2" width="9" height="9" rx="2" fill="white" opacity="0.5" />
              <rect x="2" y="13" width="9" height="9" rx="2" fill="white" opacity="0.5" />
              <rect x="13" y="13" width="9" height="9" rx="2" fill="white" />
            </svg>
          </div>
          <span className="text-[22px] font-bold text-slate-900 tracking-tight">Concurr</span>
        </div>

        {/* Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
          <h1 className="text-[22px] font-bold text-slate-900 mb-1 text-center">Welcome back</h1>
          <p className="text-[13.5px] text-slate-400 text-center mb-7">
            Sign in to your portal
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@concurr.io"
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[14px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-[14px] text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
              />
            </div>

            {error && (
              <p className="text-[13px] text-red-500 font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-700 hover:bg-indigo-800 disabled:opacity-60 text-white text-[14px] font-bold rounded-lg transition-colors mt-2"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-7 pt-6 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center mb-3">
              Demo Accounts
            </p>
            <div className="space-y-2">
              {DEMO_CREDENTIALS.map((cred) => {
                const meta = ROLE_LABEL[cred.role];
                return (
                  <button
                    key={cred.role}
                    onClick={() => fillDemo(cred.email, cred.password)}
                    className="w-full flex items-center justify-between px-4 py-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl text-left transition-all"
                  >
                    <div>
                      <p className={`text-[13px] font-bold ${meta.color}`}>
                        {meta.label}
                      </p>
                      <p className="text-[11.5px] text-slate-400">{cred.email}</p>
                    </div>
                    <span className="text-[11.5px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {cred.password}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p className="text-center text-[12px] text-slate-400 mt-6">
          © {new Date().getFullYear()} Concurr. All rights reserved.
        </p>
      </div>
    </div>
  );
}
