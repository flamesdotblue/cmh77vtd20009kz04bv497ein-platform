import { Shield, Settings, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-sm">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-semibold leading-tight">EduStack SMS</div>
            <div className="text-xs text-slate-500">Enterprise School Management</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#overview" className="hover:text-slate-900">Overview</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 hover:bg-slate-50">
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-rose-500 text-white text-[10px] px-1">3</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 hover:bg-slate-50 text-sm">
            <Settings className="h-4 w-4 text-slate-600" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}
