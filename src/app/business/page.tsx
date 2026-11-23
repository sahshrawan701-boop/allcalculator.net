import type { Metadata } from "next";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import { getCalculatorsByParentCategory } from "@/data/calculators";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import { generateWebPageSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo";

export const metadata: Metadata = generateCategoryMetadata("business");

const FEATURED_LINKS = [
  {
    label: "Payroll Calculator",
    href: "/business/payroll-calculator",
    icon: "fa-calculator",
  },
  {
    label: "ROI Calculator",
    href: "/business/roi-calculator",
    icon: "fa-chart-line",
  },
  {
    label: "Break-even Calculator",
    href: "/business/break-even-calculator",
    icon: "fa-balance-scale",
  },
  {
    label: "Profit Calculator",
    href: "/business/profit-calculator",
    icon: "fa-store",
  },
];

export const dynamic = "force-static";

export default function BusinessCalculatorsPage() {
  const pageSchema = generateWebPageSchema({
    name: "Business Calculators",
    description:
      "Business calculators for payroll, ROI, break-even, loan amortization, and tax planning for small businesses.",
    url: "/business",
  });

  return (
    <div>
      {/* JSON-LD Schemas */}
      <JsonLd data={pageSchema} />

      {/* ——— HERO SECTION ——— */}
      <section
        aria-labelledby="hero-heading"
        className="relative max-w-[1400px] mx-auto px-4 sm:px-8 pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden rounded-2xl sm:rounded-3xl mb-8"
      >
        {/* Subtle mesh background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-[10%] sm:left-[20%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-3xl" />
          <div className="absolute bottom-0 right-[10%] sm:right-[15%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-violet-100/50 dark:bg-violet-900/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1
            id="hero-heading"
            className="text-[clamp(1.75rem,4vw,2rem)] font-[500] text-slate-900 dark:text-slate-100 leading-tight mb-3 flex items-center gap-3"
          >
            <i
              className="fas fa-briefcase text-[24px] text-slate-900 dark:text-slate-100"
              aria-hidden="true"
            />
            Business Calculators
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
              <i className="fas fa-calculator text-xs" aria-hidden="true" />
              {getCalculatorsByParentCategory("business").length} calculators
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 leading-relaxed max-w-3xl">
            Business calculators for payroll, ROI, break-even, loan
            amortization, and tax planning for small businesses. Whether
            you&apos;re calculating returns on investment, managing payroll, or
            planning business taxes, get accurate results instantly.
          </p>
        </div>
      </section>

      {/* ——— CONTENT WRAPPER ——— */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10">
          <div>
            <CategoryList parentCategoryId="business" />
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start space-y-6">
            {/* Featured from other categories */}
            <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3.5 flex items-center gap-2">
                <i
                  className="fas fa-fire text-amber-500 text-xs"
                  aria-hidden="true"
                />
                Also Popular
              </h3>
              <ul className="space-y-2">
                {FEATURED_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between px-3.5 py-2.5
    bg-[#F8FAFC] dark:bg-[#0F172A]/70
    hover:bg-[#F8FAFF] dark:hover:bg-[#172554]
    rounded-xl
    border border-[#E2E8F0] dark:border-[#1E293B]/60
    hover:border-[#CBD5E1] dark:hover:border-[#334155]
    text-[#0000FF] dark:text-[#93A8FF]
    hover:text-[#0000CC] dark:hover:text-[#B4C2FF]
    text-xs sm:text-sm font-medium
    transition-all duration-150"
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <i
                          className={`fas ${link.icon}
        text-[#0000FF] dark:text-[#93A8FF]
        group-hover:text-[#0000CC] dark:group-hover:text-[#B4C2FF]
        text-xs flex-shrink-0 transition-colors`}
                          aria-hidden="true"
                        />

                        <span className="truncate hover:underline">
                          {link.label}
                        </span>
                      </span>

                      <i
                        className="fas fa-arrow-right text-xs
      text-[#0000FF] dark:text-[#93A8FF]
      group-hover:text-[#0000CC] dark:group-hover:text-[#B4C2FF]
      group-hover:translate-x-0.5
      transition-all duration-150 flex-shrink-0 ml-2"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Back to home */}
            <Link
              href="/sitemap"
              className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-offset-slate-900 transition-all duration-200 no-underline text-sm"
            >
              <i className="fas fa-home text-sm" aria-hidden="true" />
              All Calculators
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
