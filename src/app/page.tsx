import type { Metadata } from "next";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Calculator from "@/components/Calculator";
import { CALCULATORS } from "@/data/calculators";
import DollarIcon from "@/components/DollarIcon";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "AllCalculator.net: Free Online Calculators – Finance, Health, Math & Science",
  description:
    "Over 250+ free online calculators for finance, health, math, science, mortgage, and everyday calculations. Instant, accurate, and completely private results.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AllCalculator.net: Free Online Calculators",
    description:
      "Instant, accurate, and 100% free calculators for finance, fitness, mathematics, business, and science.",
    url: "https://allcalculator.net",
    siteName: "AllCalculator.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AllCalculator.net: Free Online Calculators",
    description:
      "250+ free calculators for finance, health, math, science, and everyday life.",
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AllCalculator.net",
  url: "https://allcalculator.net",
  description:
    "Free online calculators for finance, health, math, science, and everyday life.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://allcalculator.net/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

/* ——— Category configuration ——— */
const CATEGORY_CONFIG: Record<
  string,
  {
    label: string;
    href: string;
    icon: string;
    iconBg: string;
    iconColor: string;
  }
> = {
  Finance: {
    label: "Finance",
    href: "/finance",
    icon: "fa-dollar-sign",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  Mortgage: {
    label: "Mortgage",
    href: "/mortgage",
    icon: "fa-home",
    iconBg: "bg-sky-50 dark:bg-sky-950/50",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  Investing: {
    label: "Investing",
    href: "/investing",
    icon: "fa-chart-pie",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/50",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  Tax: {
    label: "Tax",
    href: "/tax",
    icon: "fa-file-invoice-dollar",
    iconBg: "bg-amber-50 dark:bg-amber-950/50",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  Salary: {
    label: "Salary",
    href: "/salary",
    icon: "fa-money-bill-wave",
    iconBg: "bg-teal-50 dark:bg-teal-950/50",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
  Business: {
    label: "Business",
    href: "/business",
    icon: "fa-briefcase",
    iconBg: "bg-violet-50 dark:bg-violet-950/50",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  Health: {
    label: "Health & Fitness",
    href: "/health",
    icon: "fa-heartbeat",
    iconBg: "bg-rose-50 dark:bg-rose-950/50",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  Education: {
    label: "Education",
    href: "/education",
    icon: "fa-graduation-cap",
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  Math: {
    label: "Math",
    href: "/math",
    icon: "fa-calculator",
    iconBg: "bg-orange-50 dark:bg-orange-950/50",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  Technology: {
    label: "Technology",
    href: "/technology",
    icon: "fa-microchip",
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  Conversion: {
    label: "Conversion",
    href: "/conversion",
    icon: "fa-exchange-alt",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/50",
    iconColor: "text-cyan-600 dark:text-cyan-400",
  },
  Lifestyle: {
    label: "Lifestyle",
    href: "/lifestyle",
    icon: "fa-spa",
    iconBg: "bg-pink-50 dark:bg-pink-950/50",
    iconColor: "text-pink-600 dark:text-pink-400",
  },
  Science: {
    label: "Science",
    href: "/science",
    icon: "fa-flask",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  Other: {
    label: "Other",
    href: "/other",
    icon: "fa-th-large",
    iconBg: "bg-slate-100 dark:bg-slate-800",
    iconColor: "text-slate-600 dark:text-slate-400",
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

/* ——— Featured Essentials ——— */
const FEATURED_CALCULATORS = [
  {
    label: "Scientific Calculator",
    category: "Math",
    description:
      "Trigonometry, logarithms, exponentials, and full expression parsing.",
    href: "/math/scientific-calculator",
    icon: "fa-calculator",
    color: "text-orange-500 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/50",
    badge: "Essential",
  },
  {
    label: "Mortgage Calculator",
    category: "Mortgage",
    description:
      "Monthly payments, property tax, PMI, home insurance, and amortization.",
    href: "/mortgage/mortgage-calculator",
    icon: "fa-home",
    color: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/50",
    badge: "Popular",
  },
  {
    label: "BMI Calculator",
    category: "Health",
    description:
      "Body Mass Index, healthy weight categories, and target ranges.",
    href: "/health/bmi-calculator",
    icon: "fa-weight-scale",
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    badge: "Health",
  },
  {
    label: "Compound Interest",
    category: "Investing",
    description:
      "Project wealth accumulation over time with recurring contributions.",
    href: "/investing/compound-interest-calculator",
    icon: "fa-percentage",
    color: "text-indigo-500 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
    badge: "Finance",
  },
  {
    label: "Break-Even Calculator",
    category: "Business",
    description:
      "Determine required unit sales and revenue to reach zero net loss.",
    href: "/business/break-even-calculator",
    icon: "fa-chart-line",
    color: "text-violet-500 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    badge: "Business",
  },
  {
    label: "Discount Calculator",
    category: "Shopping",
    description:
      "Calculate sales discounts, double promotions, and exact savings.",
    href: "/business/discount-calculator",
    icon: "fa-tag",
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    badge: "Shopping",
  },
  {
    label: "Calorie Calculator",
    category: "Fitness",
    description:
      "Estimate daily caloric needs for weight maintenance, loss, or gain.",
    href: "/health/calorie-calculator",
    icon: "fa-fire",
    color: "text-rose-500 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/50",
    badge: "Fitness",
  },
  {
    label: "GPA Calculator",
    category: "Education",
    description:
      "Calculate weighted and unweighted semester and cumulative GPA.",
    href: "/education/gpa-calculator",
    icon: "fa-graduation-cap",
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/50",
    badge: "Academic",
  },
];

/* ——— Platform Trust Highlights ——— */
const TRUST_HIGHLIGHTS = [
  {
    icon: "fa-bullseye",
    iconBg: "bg-indigo-50 dark:bg-indigo-950/60",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    title: "Engineered Precision",
    description:
      "All formulas are built adhering strictly to official financial equations, WHO health guidelines, and mathematical standards.",
  },
  {
    icon: "fa-shield-halved",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/60",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "100% Client-Side Privacy",
    description:
      "Computations execute in your browser. Your financial figures, private metrics, and inputs are never stored or sent across servers.",
  },
  {
    icon: "fa-bolt",
    iconBg: "bg-amber-50 dark:bg-amber-950/60",
    iconColor: "text-amber-600 dark:text-amber-400",
    title: "Instant Live Results",
    description:
      "Calculations update on every keystroke with zero delay, interactive breakdowns, charts, and clean exportable results.",
  },
  {
    icon: "fa-circle-check",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/60",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    title: "Always 100% Free",
    description:
      "No hidden fees, no subscriptions, and no registration walls. Pure utility accessible to students, professionals, and homeowners.",
  },
];

/* ——— Frequently Asked Questions ——— */
const HOMEPAGE_FAQS = [
  {
    question: "Are all calculators on AllCalculator.net free to use?",
    answer:
      "Yes. Every single calculator and tool across all categories is 100% free with no registration, no subscription tiers, and no trial limits.",
  },
  {
    question: "Is my personal, health, or financial data recorded?",
    answer:
      "No. Calculations operate entirely client-side inside your web browser. None of your entered values are tracked, recorded, or sent to a database.",
  },
  {
    question: "Can I use these calculators on mobile devices?",
    answer:
      "Yes. The entire platform is built with a responsive, mobile-first design, providing touch-friendly buttons, high accessibility, and instant results on smartphones and tablets.",
  },
  {
    question: "How accurate are the results and formulas?",
    answer:
      "Our tools are built against validated industry standards, including standard mortgage amortization algorithms, international WHO BMI classifications, and high-precision decimal arithmetic.",
  },
  {
    question: "How can I quickly find a specific calculator?",
    answer:
      "You can type your query in the instant search bar at the top, select from our popular tools showcase, or explore the category directory spanning 14 specialized domains.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={WEBSITE_SCHEMA} />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10 pb-16 sm:pb-24">
        {/* ——— HERO SECTION ——— */}
        <section
          aria-labelledby="hero-heading"
          className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14 py-6 sm:py-10 lg:py-12 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
        >
          {/* Subtle Ambient Glows */}
          <div
            className="pointer-events-none absolute -top-24 -left-12 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full opacity-[0.08] dark:opacity-[0.04] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-12 -right-12 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full opacity-[0.07] dark:opacity-[0.03] blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Left: text + search + stats */}
          <div className="relative z-10 flex-1 min-w-0 w-full">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100/90 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4 sm:mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Over 250+ Free Precision Calculators</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-[clamp(2.1rem,5.6vw,3.5rem)] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] mb-4 sm:mb-5"
            >
              Calculate{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
                Anything.
              </span>
              <br className="hidden sm:block" />
              Instantly. Completely Free.
            </h1>

            {/* Subtitle */}
            <p className="text-[clamp(0.925rem,1.6vw,1.125rem)] text-slate-600 dark:text-slate-300 mb-6 sm:mb-7 max-w-full sm:max-w-[540px] leading-relaxed">
              Finance, mortgages, health, math, and business — instant, verified
              formulas engineered for everyday decisions with zero sign-up and
              total privacy.
            </p>

            {/* Search Bar */}
            <div className="mb-3.5 sm:mb-4 w-full sm:max-w-[560px]">
              <SearchBar />
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full sm:max-w-[580px]">
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  250+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Free Calculators
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Client Privacy
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  0 ms
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Server Latency
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  14
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Specialized Domains
                </div>
              </div>
            </div>
          </div>

          {/* Right: calculator widget */}
          <div className="relative z-10 w-full max-w-[430px] sm:max-w-[480px] mx-auto lg:mx-0 lg:w-[46%] lg:min-w-[360px] lg:max-w-[500px] order-first lg:order-last">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 rounded-3xl blur-xl opacity-75 pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/40">
              <Calculator />
            </div>
          </div>
        </section>

        {/* ——— FEATURED ESSENTIALS GRID ——— */}
        <section
          aria-labelledby="featured-essentials-heading"
          className="mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/50 border border-amber-200/70 dark:border-amber-900/50 text-amber-700 dark:text-amber-400 text-xs font-semibold px-3 py-1 rounded-full mb-2.5">
                <i className="fas fa-star text-[10px]" aria-hidden="true" />
                Quick-Launch Essentials
              </div>
              <h2
                id="featured-essentials-heading"
                className="text-[clamp(1.4rem,2.8vw,2rem)] font-bold tracking-tight text-slate-900 dark:text-white"
              >
                Most Popular Calculators
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md sm:text-right">
              Handpicked tools used daily by millions for fast, verified
              calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
            {FEATURED_CALCULATORS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.45)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <i
                      className={`fas ${item.icon} text-base ${item.color}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.label}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <span>Open Tool</span>
                  <i
                    className="fas fa-arrow-right text-[10px] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ——— SECTION DIVIDER ——— */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.12em] sm:tracking-widest uppercase text-slate-400 dark:text-slate-500 px-2 whitespace-nowrap">
            Complete Directory
          </span>
          <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
        </div>

        {/* ——— CATEGORIES DIRECTORY ——— */}
        <section
          aria-labelledby="categories-heading"
          className="mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                <i className="fas fa-th-large text-[10px]" aria-hidden="true" />
                Category Directory
              </div>
              <h2
                id="categories-heading"
                className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900 dark:text-white mb-2"
              >
                Browse by Category
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Explore our curated library of {CALCULATORS.length}+ free
                calculators organized across {CATEGORIES.length} specialized
                domains.
              </p>
            </div>
            <Link
              href="/sitemap"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0000FF] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors self-start sm:self-end pb-1 group"
            >
              <span>View complete directory</span>
              <i
                className="fas fa-arrow-right text-[10px] transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                aria-labelledby={`cat-${cat.id}`}
                className="group relative bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08),0_4px_12px_-4px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.45)] hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  {/* Header */}
                  <header className="flex items-center justify-between mb-4">
                    <Link
                      href={cat.href}
                      className="group/title flex items-center gap-3 min-w-0"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${cat.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/title:scale-105`}
                      >
                        {cat.icon === "fa-dollar-sign" ? (
                          <DollarIcon className={`w-4 h-4 ${cat.iconColor}`} />
                        ) : (
                          <i
                            className={`fas ${cat.icon} text-sm ${cat.iconColor}`}
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <h3
                        id={`cat-${cat.id}`}
                        className="text-[15px] font-semibold text-slate-900 dark:text-slate-100 group-hover/title:text-[#0000FF] dark:group-hover/title:text-blue-400 transition-colors truncate"
                      >
                        {cat.label}
                      </h3>
                    </Link>
                  </header>

                  {/* Calculator Links */}
                  <ul className="space-y-1 mb-4">
                    {cat.calcs.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="group/link flex items-center justify-between px-2.5 py-2 rounded-xl
    text-[#0000FF] dark:text-[#93A8FF]
    hover:text-[#0000CC] dark:hover:text-[#B4C2FF]
    hover:bg-[#F8FAFF] dark:hover:bg-[#172554]
    transition-all duration-150 text-[14px] font-medium"
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <i
                              className={`fas ${c.icon} text-xs
        text-[#0000FF] dark:text-[#93A8FF]
        group-hover/link:text-[#0000CC] dark:group-hover/link:text-[#B4C2FF]
        transition-colors flex-shrink-0`}
                              aria-hidden="true"
                            />

                            <span className="truncate hover:underline">
                              {c.name}
                            </span>
                          </span>

                          <i
                            className="fas fa-chevron-right text-[10px]
      text-[#0000FF] dark:text-[#93A8FF]
      group-hover/link:text-[#0000CC] dark:group-hover/link:text-[#B4C2FF]
      group-hover/link:translate-x-0.5
      transition-all duration-150 flex-shrink-0 ml-1.5
      opacity-0 group-hover/link:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 mt-auto">
                  <Link
                    href={cat.href}
                    className="group/view inline-flex items-center gap-1.5 text-xs font-semibold text-[#0000FF] dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>Explore all {cat.count} calculators</span>
                    <i
                      className="fas fa-arrow-right text-[10px] text-[#0000FF] dark:text-blue-400 group-hover/view:text-blue-700 dark:group-hover/view:text-blue-300 group-hover/view:translate-x-1 transition-all duration-150"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ——— WHY ALLCALCULATOR SECTION ——— */}
        <section
          aria-labelledby="trust-heading"
          className="mb-14 sm:mb-20 lg:mb-24 rounded-3xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 lg:p-12"
        >
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-900/50 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <i
                className="fas fa-shield-halved text-[10px]"
                aria-hidden="true"
              />
              Engineered for Quality
            </div>
            <h2
              id="trust-heading"
              className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-tight text-slate-900 dark:text-white mb-2"
            >
              Why Rely on AllCalculator.net?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Designed from the core to offer immediate answers with
              mathematical rigor, zero bloat, and total privacy protection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {TRUST_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-xs"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 mb-4`}
                >
                  <i
                    className={`fas ${item.icon} text-lg ${item.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ——— FAQS ACCORDION SECTION ——— */}
        <section
          aria-labelledby="faq-section-heading"
          className="mb-14 sm:mb-20"
        >
          <FAQSection
            faqs={HOMEPAGE_FAQS}
            heading="Frequently Asked Questions"
          />
        </section>

        {/* ——— BOTTOM CTA BANNER ——— */}
        <section
          aria-labelledby="cta-heading"
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-indigo-500/10"
        >
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4"
            >
              Ready to Solve Your Next Problem?
            </h2>
            <p className="text-sm sm:text-base text-indigo-100 mb-6 sm:mb-8 leading-relaxed">
              Explore our full catalog of 250+ calculators across 14 categories,
              or jump straight to any state-specific tax and salary calculator.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/sitemap"
                className="px-6 py-3 rounded-xl bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-sm transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Browse Full Sitemap
              </Link>
              <Link
                href="#categories-heading"
                className="px-6 py-3 rounded-xl bg-indigo-500/30 hover:bg-indigo-500/40 border border-white/20 text-white font-semibold text-sm transition-all duration-150"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
