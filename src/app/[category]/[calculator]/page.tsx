import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CALCULATORS } from "@/data/calculators";
import { notFound } from "next/navigation";
import { generateCalculatorMetadata } from "@/lib/seo/metadata";
import {
  CalculatorSchema,
  FAQSection,
  RelatedCalculators,
} from "@/components/seo";
import { US_STATES } from "@/data/states";
import { STATE_CALCULATORS } from "@/data/stateCalculators";
import { parseStateSlug, generateStateMetadata, getStateCalculatorCategorySlug } from "@/lib/seo/state-seo";
import StateProgrammaticPage from "@/components/seo/StateProgrammaticPage";

interface Props {
  params: Promise<{ category: string; calculator: string }>;
}

export async function generateStaticParams() {
  const regularParams = CALCULATORS.map((c) => {
    const parts = c.href.split("/").filter(Boolean);
    return {
      category: parts[0],
      calculator: parts[1],
    };
  });

  const stateParams: { category: string; calculator: string }[] = [];
  for (const state of US_STATES) {
    for (const calc of STATE_CALCULATORS) {
      stateParams.push({
        category: calc.categorySlug,
        calculator: `${state.id}-${calc.id}`,
      });
    }
  }

  return [...regularParams, ...stateParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, calculator } = await params;
  const slug = calculator as string;

  // Check if it's a state programmatic page
  const stateMatch = parseStateSlug(slug);
  if (stateMatch) {
    return generateStateMetadata(stateMatch);
  }

  const calc = CALCULATORS.find((c) => c.href === `/${category}/${slug}`);
  if (!calc) return { title: "Calculator" };
  return generateCalculatorMetadata(calc);
}

const CATEGORY_COLORS: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  Financial: {
    bg: "from-emerald-400 to-emerald-600",
    border: "border-emerald-300 dark:border-emerald-700",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  "Health & Fitness": {
    bg: "from-blue-400 to-blue-600",
    border: "border-blue-300 dark:border-blue-700",
    text: "text-blue-600 dark:text-blue-400",
  },
  Math: {
    bg: "from-amber-400 to-amber-600",
    border: "border-amber-300 dark:border-amber-700",
    text: "text-amber-600 dark:text-amber-400",
  },
  Science: {
    bg: "from-violet-400 to-violet-600",
    border: "border-violet-300 dark:border-violet-700",
    text: "text-violet-600 dark:text-violet-400",
  },
  Mortgage: {
    bg: "from-sky-400 to-sky-600",
    border: "border-sky-300 dark:border-sky-700",
    text: "text-sky-600 dark:text-sky-400",
  },
  Finance: {
    bg: "from-emerald-400 to-emerald-600",
    border: "border-emerald-300 dark:border-emerald-700",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  Tax: {
    bg: "from-red-400 to-red-600",
    border: "border-red-300 dark:border-red-700",
    text: "text-red-600 dark:text-red-400",
  },
  Salary: {
    bg: "from-violet-400 to-violet-600",
    border: "border-violet-300 dark:border-violet-700",
    text: "text-violet-600 dark:text-violet-400",
  },
  Investing: {
    bg: "from-cyan-400 to-cyan-600",
    border: "border-cyan-300 dark:border-cyan-700",
    text: "text-cyan-600 dark:text-cyan-400",
  },
  Business: {
    bg: "from-yellow-400 to-yellow-600",
    border: "border-yellow-300 dark:border-yellow-700",
    text: "text-yellow-600 dark:text-yellow-400",
  },
  Health: {
    bg: "from-green-400 to-green-600",
    border: "border-green-300 dark:border-green-700",
    text: "text-green-600 dark:text-green-400",
  },
  Education: {
    bg: "from-blue-400 to-blue-600",
    border: "border-blue-300 dark:border-blue-700",
    text: "text-blue-600 dark:text-blue-400",
  },
  Technology: {
    bg: "from-indigo-400 to-indigo-600",
    border: "border-indigo-300 dark:border-indigo-700",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  Conversion: {
    bg: "from-purple-400 to-purple-600",
    border: "border-purple-300 dark:border-purple-700",
    text: "text-purple-600 dark:text-purple-400",
  },
  Lifestyle: {
    bg: "from-pink-400 to-pink-600",
    border: "border-pink-300 dark:border-pink-700",
    text: "text-pink-600 dark:text-pink-400",
  },
  Other: {
    bg: "from-pink-400 to-pink-600",
    border: "border-pink-300 dark:border-pink-700",
    text: "text-pink-600 dark:text-pink-400",
  },
};

export const dynamic = "force-static";

export default async function CalculatorPage({ params }: Props) {
  const { category, calculator } = await params;
  const slug = calculator as string;

  // Intercept state programmatic pages
  const stateMatch = parseStateSlug(slug);
  if (stateMatch) {
    const expectedCategory = getStateCalculatorCategorySlug(stateMatch);
    if (category !== expectedCategory) {
      redirect(`/${expectedCategory}/${slug}`);
    }
    return <StateProgrammaticPage match={stateMatch} />;
  }

  const calc = CALCULATORS.find((c) => c.href === `/${category}/${slug}`);
  if (!calc) notFound();

  const colors = CATEGORY_COLORS[calc.parentCategoryId] ?? CATEGORY_COLORS.Other;

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-8 py-10 pb-16">
      {/* JSON-LD Schemas (WebApplication + BreadcrumbList + FAQPage) */}
      <CalculatorSchema calculator={calc} />

      {/* Header card */}
      <div
        className={`bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 ${colors.border} shadow-xl mb-8`}
      >
        <div className="flex items-start gap-6 mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0`}
          >
            <i className={`fas ${calc.icon}`} aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
              {calc.name}
            </h1>
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 ${colors.text}`}
            >
              <i className="fas fa-tag text-[10px]" aria-hidden="true" />
              {calc.parentCategoryId}
            </span>
          </div>
        </div>

        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-base">
          {calc.description}
        </p>

        {/* "Coming Soon" notice */}
        <div className="flex flex-col items-center text-center py-12 bg-slate-50 dark:bg-slate-900/40 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-600">
          <div
            className={`w-14 h-14 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white text-2xl mb-4 shadow-md`}
          >
            <i className="fas fa-wrench" aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Full Calculator Coming Soon
          </h2>
          <p className="text-slate-400 dark:text-slate-400 text-sm max-w-xs">
            This calculator is being migrated to our new platform. The
            interactive tool will be available here shortly.
          </p>
        </div>
      </div>

      {/* FAQ Section with auto-generated content + FAQPage schema */}
      <FAQSection calculator={calc} />

      {/* Related Calculators (same-category + cross-category internal links) */}
      <RelatedCalculators calculator={calc} />

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          <i className="fas fa-arrow-left text-xs" /> All Calculators
        </Link>
      </div>
    </div>
  );
}
