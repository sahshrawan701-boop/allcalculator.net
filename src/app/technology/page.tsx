import type { Metadata } from "next";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import { getCalculatorsByParentCategory } from "@/data/calculators";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import { generateWebPageSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo";

const TECH_CALCS = getCalculatorsByParentCategory("technology").sort((a, b) =>
  a.name.localeCompare(b.name),
);

export const metadata: Metadata = generateCategoryMetadata("technology");

const FEATURED_LINKS = [
  {
    label: "Kinetic Energy Calculator",
    href: "/science/kinetic-energy-calculator",
    icon: "fa-bolt",
  },
  {
    label: "Potential Energy Calculator",
    href: "/science/potential-energy-calculator",
    icon: "fa-arrow-up",
  },
  {
    label: "Momentum Calculator",
    href: "/science/momentum-calculator",
    icon: "fa-tachometer-alt",
  },
  {
    label: "Acceleration Calculator",
    href: "/science/acceleration-calculator",
    icon: "fa-rocket",
  },
];

export const dynamic = "force-static";

export default function TechnologyCalculatorsPage() {
  const pageSchema = generateWebPageSchema({
    name: "Technology Calculators",
    description:
      "Technology calculators for data storage, crypto mining, hash rate, and tech computations.",
    url: "/technology",
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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-[10%] sm:left-[20%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-3xl" />
          <div className="absolute bottom-0 right-[10%] sm:right-[15%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-violet-100/50 dark:bg-violet-900/15 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-[clamp(1.75rem,4vw,2rem)] font-[500] text-slate-900 dark:text-slate-100 leading-tight mb-3 flex items-center gap-3">
            <i
              className="fas fa-microchip text-[24px] text-slate-900 dark:text-slate-100"
              aria-hidden="true"
            />
            Technology Calculators
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
              <i className="fas fa-calculator text-xs" aria-hidden="true" />
              {TECH_CALCS.length} calculators
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 leading-relaxed max-w-3xl">
            Technology calculators for data storage, crypto mining, hash rate,
            and other tech-related computations. Whether you&apos;re calculating
            crypto profits, converting hash rates, or estimating data storage
            needs, get accurate results instantly.
          </p>
        </div>
      </section>

      {/* ——— CONTENT WRAPPER ——— */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8 sm:gap-10">
          <div>
            <CategoryList parentCategoryId="technology" />
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start space-y-4 sm:space-y-6">
            {/* Featured from other categories */}
            <div className="mt-6 sm:mt-8 bg-slate-50 dark:bg-slate-900 border-[1px] border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg dark:shadow-none">
              <h3 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4">
                Also Popular
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {FEATURED_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`animate-fade-in-up delay-${Math.min((i % 10) * 30, 300)} flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-slate-950/50 shadow-sm hover:shadow-lg dark:shadow-none rounded-xl border-[1.5px] border-gray-200 dark:border-gray-700 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all duration-150 group`}
                    >
                      <span className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                        <i
                          className={`fas ${link.icon} text-blue-500 text-xs flex-shrink-0`}
                          aria-hidden="true"
                        />
                        <span className="truncate text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-400">
                          {link.label}
                        </span>
                      </span>
                      <i
                        className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
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
              className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 px-4 sm:px-5 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-semibold rounded-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 no-underline text-xs sm:text-sm"
            >
              <i
                className="fas fa-home text-xs sm:text-sm"
                aria-hidden="true"
              />
              All Calculators
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
