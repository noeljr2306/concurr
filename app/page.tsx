import Link from "next/link";

export default function PortalSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="#0ea5e9" />
                <rect
                  x="13"
                  y="2"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#0ea5e9"
                  opacity="0.45"
                />
                <rect
                  x="2"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#0ea5e9"
                  opacity="0.45"
                />
                <rect
                  x="13"
                  y="13"
                  width="9"
                  height="9"
                  rx="2"
                  fill="#0ea5e9"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Concurr
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose your portal to access the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Admin Portal */}
          <Link
            href="/admin"
            className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-sky-300 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-lg bg-sky-100 flex items-center justify-center mb-6 group-hover:bg-sky-200 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#0ea5e9"
                  />
                  <rect
                    x="13"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#0ea5e9"
                    opacity="0.45"
                  />
                  <rect
                    x="2"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#0ea5e9"
                    opacity="0.45"
                  />
                  <rect
                    x="13"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#0ea5e9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Admin Portal
              </h3>
              <p className="text-slate-600 mb-6">
                Manage users, monitor platform activity, and configure system
                settings
              </p>
              <span className="inline-flex items-center px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium">
                Access Admin Portal →
              </span>
            </div>
          </Link>

          {/* Client Portal */}
          <Link
            href="/client"
            className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#3b82f6"
                  />
                  <rect
                    x="13"
                    y="2"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#3b82f6"
                    opacity="0.45"
                  />
                  <rect
                    x="2"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#3b82f6"
                    opacity="0.45"
                  />
                  <rect
                    x="13"
                    y="13"
                    width="9"
                    height="9"
                    rx="2"
                    fill="#3b82f6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Client Portal
              </h3>
              <p className="text-slate-600 mb-6">
                Post projects, hire freelancers, and manage your escrow accounts
              </p>
              <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                Access Client Portal →
              </span>
            </div>
          </Link>

          {/* Freelancer Portal */}
          <Link
            href="/freelancer"
            className="group bg-white rounded-xl border border-slate-200 p-8 hover:border-green-300 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
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
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Freelancer Portal
              </h3>
              <p className="text-slate-600 mb-6">
                Find jobs, showcase your work, and manage your freelance
                business
              </p>
              <span className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                Access Freelancer Portal →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
