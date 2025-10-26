import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import FeatureGrid from './components/FeatureGrid';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-800">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mt-8">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
            <h1 className="text-2xl font-semibold tracking-tight">School Management System</h1>
            <p className="mt-2 text-slate-600">A production-grade platform to manage academics, attendance, results, fees, and communications—built with scalability and security in mind.</p>
          </div>
        </section>
        <section className="mt-8">
          <StatsOverview />
        </section>
        <section className="mt-10">
          <FeatureGrid />
        </section>
        <section className="mt-12 mb-16">
          <CallToAction />
        </section>
      </main>
      <footer className="border-t border-slate-200 py-6 mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} EduStack Systems</span>
          <span>Secure • Scalable • Observable</span>
        </div>
      </footer>
    </div>
  );
}
