import type { Metadata } from "next";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import { getCalculatorsByParentCategory } from "@/data/calculators";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import { generateWebPageSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo";

const CONVERSION_CALCS = getCalculatorsByParentCategory("conversion").sort(
  (a, b) => a.name.localeCompare(b.name),
);

export const metadata: Metadata = generateCategoryMetadata("conversion");

const FEATURED_LINKS = [
  {
    label: "Unit Converter",
    href: "/conversion/unit-converter",
    icon: "fa-exchange-alt",
  },
  {
    label: "Currency Exchange Calculator",
    href: "/conversion/currency-exchange-calculator",
    icon: "fa-dollar-sign",
  },
  {
    label: "Temperature Converter",
    href: "/conversion/temperature-converter",
    icon: "fa-thermometer-half",
  },
  {
    label: "Percentage Calculator",
    href: "/math/percentage-calculator",
    icon: "fa-percentage",
  },
];

export const dynamic = "force-static";

export default function ConversionCalculatorPage() {
  const pageSchema = generateWebPageSchema({
    name: "Conversion Calculators",
    description:
      "Free unit converters for length, weight, temperature, volume, speed, area, and more. Fast and accurate conversions.",
    url: "/conversion",
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
          <h1
            id="hero-heading"
            className="text-[clamp(1.5rem,4vw,2rem)] font-[500] text-slate-900 dark:text-slate-100 leading-tight mb-3 flex items-center gap-3"
          >
            <i
              className="fas fa-exchange-alt text-[24px] text-slate-900 dark:text-slate-100"
              aria-hidden="true"
            />
            Conversion Calculators
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-medium">
              <i className="fas fa-calculator text-xs" aria-hidden="true" />
              {CONVERSION_CALCS.length} calculators
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            Convert between units of length, mass, temperature, volume, speed,
            and area. Our conversion tools are fast, accurate, and support
            hundreds of unit combinations.
          </p>
        </div>
      </section>

      {/* ——— CONTENT WRAPPER ——— */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-8 sm:gap-10">
          <div>
            <CategoryList parentCategoryId="conversion" />
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start space-y-4 sm:space-y-6">
            <div className="mt-6 sm:mt-8 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3.5 flex items-center gap-2">
                <i className="fas fa-fire text-amber-500 text-xs" aria-hidden="true" />
                Also Popular
              </h3>
              <ul className="space-y-2">
                {FEATURED_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between px-3.5 py-2.5 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 rounded-xl border border-slate-100/90 dark:border-slate-800/60 hover:border-indigo-200/80 dark:hover:border-indigo-800/60 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs sm:text-sm font-medium transition-all duration-150"
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <i
                          className={`fas ${link.icon} text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-xs flex-shrink-0 transition-colors`}
                          aria-hidden="true"
                        />
                        <span className="truncate">
                          {link.label}
                        </span>
                      </span>
                      <i
                        className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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
