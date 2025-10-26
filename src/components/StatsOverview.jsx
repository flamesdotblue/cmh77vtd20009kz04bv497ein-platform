import { Users, BookOpen, Calendar, DollarSign } from 'lucide-react';

const cards = [
  {
    title: 'Active Students',
    value: '1,240',
    change: '+3.2%',
    icon: Users,
    color: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Teachers',
    value: '88',
    change: '+1.1%',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: "Today's Classes",
    value: '156',
    change: '-0.6%',
    icon: Calendar,
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Fees Collected (M)',
    value: '$0.84',
    change: '+5.4%',
    icon: DollarSign,
    color: 'from-amber-500 to-orange-600',
  },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <StatCard key={c.title} {...c} />
      ))}
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-10`} />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-slate-500">{title}</div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
          <div className="mt-1 text-xs text-emerald-600 font-medium">{change} vs last week</div>
        </div>
        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow`} >
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
