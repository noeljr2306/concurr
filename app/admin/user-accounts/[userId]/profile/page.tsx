import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Zap, FileText, CheckCircle2, Settings } from "lucide-react";
import GlobalTopBar from "@/components/layout/GlobalTopBar";
import { mockUserAccounts } from "@/data/userData";
import { formatCurrency } from "@/lib/utils";

interface PageProps {
  params: Promise<{ userId: string }>;
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default async function UserProfilePage({ params }: PageProps) {
  const { userId } = await params;
  const user = mockUserAccounts.find((u) => u.id === userId);
  if (!user) notFound();

  return (
    <>
      <GlobalTopBar
        searchPlaceholder="Search users by name, email, or wallet address..."
        rightIcon="message"
      />

      <main className="flex-1 overflow-auto bg-slate-100">
        {/* Profile card */}
        <div className="mx-auto max-w-5xl p-6">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

            {/* Hero section */}
            <div className="bg-slate-100 px-8 pt-8 pb-6 relative">
              <div className="flex items-end gap-6">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className="w-24 h-24 rounded-xl flex items-center justify-center text-[28px] font-bold border-4 border-white shadow-md"
                    style={{ backgroundColor: user.avatarBg, color: ["#1e293b","#334155","#b45309"].includes(user.avatarBg) ? "#f8fafc" : "#334155" }}
                  >
                    {user.avatarInitials}
                  </div>
                  {user.verificationStatus === "Verified" && (
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle2 size={14} strokeWidth={2.5} className="text-white" />
                    </div>
                  )}
                </div>

                {/* Name + title */}
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-[26px] font-bold text-slate-900 tracking-tight">{user.name}</h1>
                    {user.verificationStatus === "Verified" && (
                      <span className="px-2.5 py-1 bg-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-wider rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[13.5px] text-slate-500">{user.title ?? user.role}</p>
                </div>

                {/* Send message */}
                <Link
                  href={`/user-accounts/${userId}/manage`}
                  className="flex items-center gap-2 px-5 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white text-[13px] font-bold rounded-lg transition-colors mb-1"
                >
                  <Settings size={14} strokeWidth={2} />
                  Manage User
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-12 mt-6 pt-5 border-t border-slate-200">
                <div>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Earned</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[26px] font-bold text-slate-900 leading-none">
                      {user.totalVolume !== null ? formatCurrency(user.totalVolume) : "—"}
                    </span>
                    {user.volumeChange && (
                      <span className="text-[13px] font-bold text-green-500 flex items-center gap-0.5">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <polyline points="1,10 6.5,3 12,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {user.volumeChange}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-1">Trust Score</p>
                  <div className="flex items-center gap-3">
                    <span className="text-[26px] font-bold text-slate-900 leading-none">
                      {user.trustScore}
                      <span className="text-[16px] text-slate-400 font-semibold">/100</span>
                    </span>
                    <div className="w-32 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-700 rounded-full"
                        style={{ width: `${user.trustScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-1">Completed Projects</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[26px] font-bold text-slate-900 leading-none">{user.completedProjects ?? 0}</span>
                    {(user.completionRate ?? 0) > 0 && (
                      <span className="text-[13px] font-bold text-slate-400 flex items-center gap-1">
                        <CheckCircle2 size={14} className="text-slate-400" />
                        {user.completionRate}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 px-6">
              {["Overview", "Wallets"].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-2 py-3.5 mr-6 text-[13.5px] font-semibold border-b-2 ${
                    i === 0
                      ? "border-indigo-700 text-indigo-700"
                      : "border-transparent text-slate-400"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>

            {/* Body: bio + sidebar */}
            <div className="px-8 py-7 grid grid-cols-[1fr_280px] gap-8">
              {/* Left */}
              <div className="space-y-7">
                {/* Bio */}
                <div>
                  <h2 className="flex items-center gap-2 text-[15px] font-bold text-slate-900 mb-3">
                    <FileText size={16} strokeWidth={2} className="text-slate-600" />
                    Professional Bio
                  </h2>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed">
                    {user.bio ?? "No bio provided."}
                  </p>
                </div>

                {/* Skills */}
                {user.skills && user.skills.length > 0 && (
                  <div>
                    <h2 className="flex items-center gap-2 text-[15px] font-bold text-slate-900 mb-3">
                      <Zap size={16} strokeWidth={2} className="text-indigo-600" />
                      Expertise &amp; Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 border border-slate-200 rounded-lg text-[12.5px] font-medium text-slate-600 bg-white hover:bg-slate-50 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right sidebar */}
              <div className="space-y-5">
                {/* Linked accounts */}
                {user.linkedAccounts && user.linkedAccounts.length > 0 && (
                  <div>
                    <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Linked Accounts
                    </p>
                    <div className="space-y-2">
                      {user.linkedAccounts.map((acct) => (
                        <div key={acct.name} className="flex items-center justify-between px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
                              {acct.icon === "github" ? <GithubIcon /> : <LinkedInIcon />}
                            </div>
                            <span className="text-[13.5px] font-semibold text-slate-700">{acct.name}</span>
                          </div>
                          <ExternalLink size={14} className="text-slate-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="border border-slate-200 rounded-xl p-4">
                  <p className="text-[10.5px] font-bold text-slate-400 uppercase tracking-widest mb-3">Details</p>
                  <div className="space-y-3">
                    {[
                      { label: "Member Since", value: user.memberSince },
                      { label: "Avg. Response", value: user.avgResponse },
                      { label: "Location",      value: user.location },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-[12.5px] text-slate-400">{label}</span>
                        <span className="text-[13px] font-semibold text-slate-700">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 py-3.5 text-center">
              <p className="text-[12px] text-slate-400">
                Internal Administrator View &bull; Confirmed ID {user.userId ?? "—"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
