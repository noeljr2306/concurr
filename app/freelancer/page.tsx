export default function FreelancerHome() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back!
        </h1>
        <p className="text-slate-600">
          Find new opportunities and manage your projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">Active Projects</h3>
          <p className="text-2xl font-bold text-green-600">5</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">
            Available Earnings
          </h3>
          <p className="text-2xl font-bold text-blue-600">$8,200</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-2">
            Completed Projects
          </h3>
          <p className="text-2xl font-bold text-purple-600">23</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Available Jobs
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <p className="font-medium text-slate-900">E-commerce Website</p>
                <p className="text-sm text-slate-600">$2,500 • 2 weeks</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                Apply
              </button>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <p className="font-medium text-slate-900">Mobile App UI/UX</p>
                <p className="text-sm text-slate-600">$1,800 • 1 week</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Current Projects
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <p className="font-medium text-slate-900">
                  Logo Design Project
                </p>
                <p className="text-sm text-slate-600">
                  Due in 3 days • 75% complete
                </p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                In Progress
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-slate-900">API Integration</p>
                <p className="text-sm text-slate-600">
                  Due in 1 week • 30% complete
                </p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
