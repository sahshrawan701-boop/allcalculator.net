import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Calculator from "@/components/Calculator";
import { CALCULATORS } from "@/data/calculators";
import DollarIcon from "@/components/DollarIcon";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title:
    "alcalculator.net: Free Online Calculators – Finance, Health, Math, Science",
  description:
    "250+ free online calculators for finance, health, math, and science. Instant, accurate results for mortgage, BMI, scientific, GPA, and more.",
};

/* ——— Category configuration ——— */
const CATEGORY_CONFIG: Record<
  string,
  {
    label: string;
    href: string;
    icon: string;
  }
> = {
  Finance: {
    label: "Finance",
    href: "/finance",
    icon: "fa-dollar-sign",
  },
  Mortgage: {
    label: "Mortgage",
    href: "/mortgage",
    icon: "fa-home",
  },
  Investing: {
    label: "Investing",
    href: "/investing",
    icon: "fa-chart-pie",
  },
  Tax: {
    label: "Tax",
    href: "/tax",
    icon: "fa-file-invoice-dollar",
  },
  Salary: {
    label: "Salary",
    href: "/salary",
    icon: "fa-money-bill-wave",
  },
  Business: {
    label: "Business",
    href: "/business",
    icon: "fa-briefcase",
  },
  Health: {
    label: "Health & Fitness",
    href: "/health",
    icon: "fa-heartbeat",
  },
  Education: {
    label: "Education",
    href: "/education",
    icon: "fa-graduation-cap",
  },
  Math: {
    label: "Math",
    href: "/math",
    icon: "fa-calculator",
  },
  Technology: {
    label: "Technology",
    href: "/technology",
    icon: "fa-microchip",
  },
  Conversion: {
    label: "Conversion",
    href: "/conversion",
    icon: "fa-exchange-alt",
  },
  Lifestyle: {
    label: "Lifestyle",
    href: "/lifestyle",
    icon: "fa-spa",
  },
  Science: {
    label: "Science",
    href: "/science",
    icon: "fa-flask",
  },
  Other: {
    label: "Other",
    href: "/other",
    icon: "fa-th-large",
  },
};

/* ——— Generate categories from calculators data ——— */
const CATEGORIES = Object.entries(CATEGORY_CONFIG).map(([category, config]) => {
  const categoryCalcs = CALCULATORS.filter(
    (c) => c.parentCategoryId === category.toLowerCase(),
  );
  return {
    id: category.toLowerCase(),
    ...config,
    count: categoryCalcs.length,
    calcs: categoryCalcs.slice(0, 4),
  };
});

const FEATURED = [
  {
    label: "Scientific Calculator",
    href: "/math/scientific-calculator",
    icon: "fa-calculator",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/50",
  },
  {
    label: "BMI Calculator",
    href: "/health/bmi-calculator",
    icon: "fa-weight-scale",
    color: "text-green-500 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/50",
  },
  {
    label: "Mortgage Calculator",
    href: "/mortgage/mortgage-calculator",
    icon: "fa-home",
    color: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/50",
  },
  {
    label: "GPA Calculator",
    href: "/education/gpa-calculator",
    icon: "fa-graduation-cap",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    label: "Compound Interest",
    href: "/investing/compound-interest-calculator",
    icon: "fa-percentage",
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-950/50",
  },
  {
    label: "Calorie Calculator",
    href: "/health/calorie-calculator",
    icon: "fa-fire",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
  },
];

export default function HomePage() {
  return (
    /* FIX: safe horizontal padding that prevents edge-bleed on 320px devices,
       scales up gracefully through tablet and desktop */
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10 pb-16 sm:pb-20">
      {/* ——— HERO ——— */}
      <section
        aria-labelledby="hero-heading"
        /* FIX: stack on mobile/tablet (<lg), side-by-side only at lg+.
           Removed fixed gap-10 which was too large on small screens. */
        className="relative flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-14 py-6 sm:py-8 lg:py-10 pb-10 sm:pb-12 lg:pb-16 overflow-hidden"
      >
        {/* Ambient blobs — clipped so they don't cause horizontal scroll on mobile */}
        {/* <div
          className="pointer-events-none absolute -top-16 -left-8 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full opacity-[0.07] dark:opacity-[0.05] blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-8 -right-8 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full opacity-[0.06] dark:opacity-[0.04] blur-3xl"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
          aria-hidden="true"
        /> */}

        {/* Left: text + search + stats */}
        {/* FIX: w-full ensures it never overflows its flex column parent on mobile */}
        <div className="relative z-10 flex-1 min-w-0 w-full">
          {/* Headline */}
          {/* FIX: clamp floor raised to 1.75rem so it never gets tiny on 320px;
              line-height loosened slightly for wrapped lines on small screens */}
          <h1
            id="hero-heading"
            className="text-[clamp(1.75rem,5vw,3.25rem)] tracking-tight font-[500] text-slate-900 dark:text-white leading-[1.1] mb-4 sm:mb-5"
          >
            Calculate{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Anything
            </span>
            ,{" "}
            {/* FIX: only break at sm+ so the headline wraps naturally on 320px */}
            <br className="hidden sm:block" />
            Anywhere. For Free.
          </h1>

          {/* Subtitle */}
          {/* FIX: removed max-w constraint that caused narrow text columns on mobile */}
          <p className="text-[clamp(0.875rem,1.5vw,1.1rem)] text-slate-500 dark:text-slate-400 mb-6 sm:mb-7 max-w-full sm:max-w-[480px] leading-relaxed">
            Finance, health, math, science, and everyday life — instant,
            accurate results with zero cost, no sign-up required.
          </p>

          {/* Search */}
          {/* FIX: full width on mobile, capped at 560px on larger screens */}
          <div className="mb-6 sm:mb-8 w-full sm:max-w-[560px]">
            <SearchBar />
          </div>
        </div>

        {/* Right: calculator widget */}
        {/* FIX: on mobile shows first, full-width with sensible max-width.
            On lg+ shifts to the right and takes 46% of the row. */}
        <div className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] mx-auto lg:mx-0 lg:w-[46%] lg:min-w-[360px] lg:max-w-[500px] order-first lg:order-last">
          <div className="relative">
            <Calculator />
          </div>
        </div>
      </section>

      {/* ——— DIVIDER ——— */}
      <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        {/* FIX: tighter tracking on mobile so it doesn't overflow at 320px */}
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-widest uppercase text-slate-400 dark:text-slate-500 px-2 whitespace-nowrap">
          All Categories
        </span>
        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
      </div>

      {/* ——— CATEGORIES ——— */}
      <section
        aria-labelledby="categories-heading"
        className="mb-12 sm:mb-16 lg:mb-20"
      >
        {/* FIX: section header wraps gracefully; subtitle is full-width on mobile */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-3 mb-6 sm:mb-8 lg:mb-10">
          <div>
            <h2
              id="categories-heading"
              className="text-[clamp(1.2rem,2.5vw,1.75rem)] font-bold text-slate-900 dark:text-white mb-1"
            >
              Browse by Category
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {CATEGORIES.length} categories · {CALCULATORS.length}+ calculators
            </p>
          </div>
        </div>

        {/* FIX: 1-col on xs, 2-col on sm, 3-col on lg, 4-col on xl.
            Gap scales with viewport so cards don't feel cramped. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              aria-labelledby={`cat-${cat.id}`}
              className="group bg-[#F8F9FB] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-200"
            >
              {/* Header */}
              <header className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    {cat.icon === "fa-dollar-sign" ? (
                      <DollarIcon className="w-5 h-5 text-blue-500" />
                    ) : (
                      <i
                        className={`fas ${cat.icon} text-blue-500 text-sm`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3
                    id={`cat-${cat.id}`}
                    className="text-base font-semibold text-slate-800 dark:text-slate-100 truncate"
                  >
                    {cat.label}
                  </h3>
                </div>
              </header>

              {/* Calculator Links */}
              <ul className="space-y-2.5 mb-5">
                {cat.calcs.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-950/50 shadow-sm hover:shadow-lg dark:shadow-none rounded-xl border-[1px] border-gray-200 dark:border-gray-700 text-slate-800 dark:text-slate-100 text-sm font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all duration-150 group/link"
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <i
                          className={`fas ${c.icon} text-blue-500 text-xs flex-shrink-0`}
                          aria-hidden="true"
                        />
                        <span className="truncate">{c.name}</span>
                      </span>

                      <i
                        className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-600 group-hover/link:text-blue-500 group-hover/link:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Footer Link */}
              <Link
                href={cat.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                View all {cat.count} calculators
                <i
                  className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ——— MOST POPULAR ——— */}
      <section
        aria-labelledby="featured-heading"
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden mb-6"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
          aria-hidden="true"
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        {/* Orb */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[300px] opacity-30 dark:opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(255,255,255,0.3), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 p-7 sm:p-10 md:p-12">
          <div className="mb-7 sm:mb-9">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-white/90 dark:text-white/70 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
              <i
                className="fas fa-fire text-amber-300 dark:text-amber-400 text-[10px]"
                aria-hidden="true"
              />
              Most Popular
            </div>
            <h2
              id="featured-heading"
              className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-white mb-2"
            >
              Start with our most-used tools
            </h2>
            <p className="text-white/80 dark:text-slate-400 text-sm">
              Trusted by millions for quick, accurate answers every day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 md:gap-4">
            {FEATURED.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className="group relative bg-white/10 dark:bg-white/[0.06] hover:bg-white/20 dark:hover:bg-white/[0.11] border border-white/20 dark:border-white/10 hover:border-white/30 dark:hover:border-white/20 rounded-xl p-3.5 sm:p-4 md:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-indigo-400 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-2.5 sm:gap-3"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl ${f.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <i
                    className={`fas ${f.icon} ${f.color} text-sm sm:text-base`}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-white/90 dark:text-slate-300 group-hover:text-white transition-colors leading-snug">
                  {f.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
