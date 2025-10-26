export default function CallToAction() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-6">
      <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-200/40" />
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-200/40" />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Ready to streamline your school operations?</h2>
          <p className="mt-1 text-slate-600 text-sm">Sign in to access the admin dashboard or explore a guided demo with sample data.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white text-sm font-medium shadow hover:bg-indigo-700">Sign In</a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 text-sm font-medium hover:bg-slate-50">View Demo</a>
        </div>
      </div>
    </div>
  );
}
