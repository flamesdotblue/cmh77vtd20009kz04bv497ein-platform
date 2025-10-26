import { Calendar, FileText, DollarSign, Users, Mail, Shield } from 'lucide-react';

const features = [
  {
    title: 'Attendance & Timetables',
    description: 'Mark daily/class attendance, manage schedules, and sync across terms.',
    icon: Calendar,
    accent: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  },
  {
    title: 'Exams & Results',
    description: 'Define exams, grade submissions, and publish report cards securely.',
    icon: FileText,
    accent: 'bg-violet-50 text-violet-600 border-violet-200',
  },
  {
    title: 'Fees & Invoices',
    description: 'Create fee plans, track invoices, and record payments with audit trails.',
    icon: DollarSign,
    accent: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    title: 'User & Role Management',
    description: 'Granular RBAC for admins, teachers, students, and guardians.',
    icon: Users,
    accent: 'bg-emerald-50 text-emerald-600 border-emerald-200',
  },
  {
    title: 'Notifications',
    description: 'Send announcements via email/SMS with delivery tracking.',
    icon: Mail,
    accent: 'bg-sky-50 text-sky-600 border-sky-200',
  },
  {
    title: 'Security & Compliance',
    description: 'Encrypted auth, audited changes, and environment-based access control.',
    icon: Shield,
    accent: 'bg-slate-50 text-slate-700 border-slate-200',
  },
];

export default function FeatureGrid() {
  return (
    <div id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map((f) => (
        <FeatureCard key={f.title} {...f} />
      ))}
    </div>
  );
}

function FeatureCard({ title, description, icon: Icon, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accent}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Learn more →</a>
      </div>
    </div>
  );
}
