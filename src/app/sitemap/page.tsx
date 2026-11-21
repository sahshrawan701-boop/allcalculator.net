import type { Metadata } from "next";
import Link from "next/link";
import { CALCULATORS } from "@/data/calculators";
import { US_STATES } from "@/data/states";
import { STATE_CALCULATORS } from "@/data/stateCalculators";
import { getStateCalculatorUrl } from "@/lib/seo/state-seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/sitemap",
  },
  title: "Sitemap – All Calculators & Pages",
  description:
    "Complete sitemap of all 50+ calculators and pages at allcalculator.net. Browse by category: Financial, Health & Fitness, Math, Science, and more.",
};

const CATEGORY_CONFIG = [
  {
    key: "Finance",
    icon: "fa-chart-line",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/finance",
  },
  {
    key: "Mortgage",
    icon: "fa-home",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/mortgage",
  },
  {
    key: "Tax",
    icon: "fa-file-invoice-dollar",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/tax",
  },
  {
    key: "Salary",
    icon: "fa-money-bill-wave",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/salary",
  },
  {
    key: "Investing",
    icon: "fa-chart-pie",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/investing",
  },
  {
    key: "Business",
    icon: "fa-briefcase",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/business",
  },
  {
    key: "Health",
    icon: "fa-heartbeat",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/health",
  },
  {
    key: "Education",
    icon: "fa-graduation-cap",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/education",
  },
  {
    key: "Math",
    icon: "fa-calculator",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/math",
  },
  {
    key: "Technology",
    icon: "fa-laptop",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/technology",
  },
  {
    key: "Conversion",
    icon: "fa-exchange-alt",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/conversion",
  },
  {
    key: "Lifestyle",
    icon: "fa-coffee",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/lifestyle",
  },
  {
    key: "Science",
    icon: "fa-flask",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/science",
  },
  {
    key: "Other",
    icon: "fa-th",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-slate-200 dark:border-slate-800",
    href: "/other",
  },
] as const;

const STATIC_PAGES = [
  { href: "/", label: "Home", icon: "fa-home" },
  { href: "/about-us", label: "About Us", icon: "fa-info-circle" },
  { href: "/privacy-policy", label: "Privacy Policy", icon: "fa-shield-alt" },
  { href: "/terms-of-use", label: "Terms of Use", icon: "fa-gavel" },
  { href: "/sitemap", label: "Sitemap", icon: "fa-sitemap" },
  { href: "/sitemap.xml", label: "XML Sitemap", icon: "fa-code" },
];

export default function SitemapPage() {
  const total =
    CALCULATORS.length + US_STATES.length * STATE_CALCULATORS.length;

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-8 py-8 pb-16">
      {/* Hero */}
      <section className="rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-indigo-600 to-indigo-500 text-white py-8 px-5 sm:py-10 sm:px-8 relative">
        {/* Dotted background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />

        <div className="pointer-events-none absolute inset-0 bg-indigo-600/20" />

        <div className="relative z-10">
          <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold mb-2 tracking-tight">
            <i className="fas fa-sitemap mr-2 opacity-80" />
            Sitemap
          </h1>

          <p className="text-indigo-100 leading-relaxed">
            Browse all{" "}
            <strong className="text-white">{total}+ calculators</strong> and
            pages on allcalculator.net, organized by category.
          </p>
        </div>
      </section>

      {/* Category Calculator Grids */}
      <div className="space-y-8 mb-10">
        {CATEGORY_CONFIG.map((cat) => {
          const calcs = CALCULATORS.filter(
            (c) => c.parentCategoryId === cat.key.toLowerCase(),
          );

          return (
            <section
              key={cat.key}
              className={`rounded-2xl border ${cat.border} overflow-hidden bg-white dark:bg-slate-900`}
            >
              {/* Category header */}
              <div
                className={`${cat.bg} px-5 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0`}
              >
                <h2
                  className={`font-bold text-base sm:text-lg flex items-center gap-2 text-slate-900 dark:text-slate-100`}
                >
                  <i className={`fas ${cat.icon} ${cat.color}`} />
                  {cat.key} Calculators
                  <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                    ({calcs.length})
                  </span>
                </h2>

                <Link
                  href={cat.href}
                  className={`text-xs font-semibold ${cat.color} hover:opacity-80 transition-opacity flex items-center gap-1 self-start sm:self-auto`}
                >
                  View all
                  <i className="fas fa-arrow-right text-[10px]" />
                </Link>
              </div>

              {/* Calculator list */}
              <div className="bg-slate-200 dark:bg-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
                {calcs.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-slate-900 transition-colors group"
                  >
                    <div
                      className={`w-7 h-7 rounded-lg ${cat.bg} border ${cat.border} flex items-center justify-center flex-shrink-0`}
                    >
                      <i
                        className={`fas ${c.icon} text-xs text-blue-500 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-500`}
                      />
                    </div>

                    <span className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 hover:underline transition-colors font-medium">
                      {c.name}
                    </span>

                    <i className="fas fa-chevron-right text-[10px] text-blue-700 dark:text-blue-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* State-Based Calculator Pages */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 mb-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10 px-5 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-indigo-500 dark:text-indigo-400" />
            State-Based Calculators
            <span className="ml-1 text-xs font-normal text-slate-500 dark:text-slate-400">
              ({US_STATES.length * STATE_CALCULATORS.length})
            </span>
          </h2>
        </div>

        <div className="bg-slate-200 dark:bg-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {US_STATES.map((state) => (
            <div key={state.id} className="bg-white dark:bg-slate-900 p-4">
              <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <i className="fas fa-flag text-indigo-500 dark:text-indigo-400 text-xs" />
                {state.name}
              </h3>
              <div className="space-y-1">
                {STATE_CALCULATORS.map((calc) => {
                  const url = getStateCalculatorUrl({ state, template: calc });
                  // Convert absolute URL to relative path for the Link component
                  const path = new URL(url).pathname;
                  
                  return (
                    <Link
                      key={`${state.id}-${calc.id}`}
                      href={path}
                      className="block text-xs text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 hover:underline py-1"
                    >
                      {state.name} {calc.nameTemplate.replace("{state}", "")}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Static pages */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden mb-8">
        <div className="bg-slate-50 dark:bg-slate-900 px-5 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 text-base sm:text-lg">
            <i className="fas fa-file-alt text-slate-400" />
            Static Pages
          </h2>
        </div>

        <div className="bg-slate-200 dark:bg-slate-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {STATIC_PAGES.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center flex-shrink-0">
                <i className={`fas ${p.icon} text-xs text-slate-500`} />
              </div>

              <span className="text-sm text-slate-800 dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors font-medium">
                {p.label}
              </span>

              <i className="fas fa-chevron-right text-[10px] text-slate-400 dark:text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      {/* XML Sitemap notice */}
      <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
        <i className="fas fa-code text-indigo-600 dark:text-blue-400 text-xl flex-shrink-0 mt-0.5" />

        <div>
          <h3 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 mb-1">
            XML Sitemap for Search Engines
          </h3>

          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-400 mb-2 leading-relaxed">
            A machine-readable XML sitemap is available for search engine
            crawlers.
          </p>

          <Link
            href="/sitemap.xml"
            className="text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <i className="fas fa-external-link-alt" />
            /sitemap.xml
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-blue-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
