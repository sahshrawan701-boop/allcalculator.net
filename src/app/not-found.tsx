import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div
        className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-4xl mb-6 shadow-xl"
        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
      >
        <i className="fas fa-calculator" aria-hidden="true" />
      </div>
      <h1 className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-3">404</h1>
      <p className="text-xl text-slate-500 dark:text-slate-400 mb-2">Page Not Found</p>
      <p className="text-slate-400 dark:text-slate-400 text-sm mb-8 max-w-xs">
        The calculator or page you&apos;re looking for doesn&apos;t exist yet — or may have moved.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline text-sm"
        >
          <i className="fas fa-home text-sm" aria-hidden="true" /> Go to Home
        </Link>
        <Link
          href="/sitemap"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 font-semibold rounded-xl hover:-translate-y-0.5 hover:border-indigo-300 transition-all duration-200 no-underline text-sm"
        >
          <i className="fas fa-th-list text-sm" aria-hidden="true" /> Browse All Calculators
        </Link>
      </div>
    </div>
  );
}
