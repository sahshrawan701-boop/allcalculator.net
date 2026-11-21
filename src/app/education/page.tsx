import type { Metadata } from "next";
import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import { getCalculatorsByParentCategory } from "@/data/calculators";
import { generateCategoryMetadata } from "@/lib/seo/metadata";
import { generateWebPageSchema } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo";

export const metadata: Metadata = generateCategoryMetadata("education");

const FEATURED_LINKS = [
  {
    label: "GPA Calculator",
    href: "/education/gpa-calculator",
    icon: "fa-graduation-cap",
  },
  {
    label: "Grade Calculator",
    href: "/education/grade-calculator",
    icon: "fa-award",
  },
  {
    label: "Essay Word Counter",
    href: "/education/essay-word-counter",
    icon: "fa-file-alt",
  },
  {
    label: "Study Time Estimator",
    href: "/education/study-time-calculator",
    icon: "fa-clock",
  },
];

export const dynamic = "force-static";

export default function EducationCalculatorsPage() {
  const pageSchema = generateWebPageSchema({
    name: "Education Calculators",
    description:
      "GPA calculator, grade calculator, study time estimators, and tools for students and teachers.",
    url: "/education",
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
              className="fas fa-graduation-cap text-[24px] text-slate-900 dark:text-slate-100"
              aria-hidden="true"
            />
            Education Calculators
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-sm font-medium">
              <i className="fas fa-calculator text-xs" aria-hidden="true" />
              {getCalculatorsByParentCategory("education").length} calculators
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-400 leading-relaxed max-w-3xl">
            Education calculators: GPA calculator, grade calculator, study time
            estimators, and tools for students and teachers. Whether you&apos;re
            calculating your GPA, estimating final grades, or planning study
            schedules, get accurate results instantly.
          </p>
        </div>
      </section>

      {/* ——— CONTENT WRAPPER ——— */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-10">
          <div>
            <CategoryList parentCategoryId="education" />
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start space-y-6">
            {/* Featured from other categories */}
            <div className="mt-8 bg-slate-50 dark:bg-slate-900 border-[1px] border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-lg dark:shadow-none">
              <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-4">
                Also Popular
              </h3>
              <ul className="space-y-2.5">
                {FEATURED_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`animate-fade-in-up delay-${Math.min((i % 10) * 30, 300)} flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-950/50 shadow-sm hover:shadow-lg dark:shadow-none rounded-xl border-[1.5px] border-gray-200 dark:border-gray-700 text-slate-800 dark:text-slate-100 text-sm font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all duration-150 group`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
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
