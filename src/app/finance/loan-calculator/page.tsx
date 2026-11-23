import type { Metadata } from "next";
import Link from "next/link";
import { getRelatedCalculators } from "@/data/calculators";
import LoanCalculatorPage from "./loan_calculatorClient";
import LoanCalculatorArticle from "./loan_calculator_article";
import { JsonLd } from "@/components/seo";

export const metadata: Metadata = {
  title: "Loan Calculator – Monthly Payment, APR & Amortization Schedule",
  description:
    "Calculate your monthly loan payment, total interest, and payoff date with our free US loan calculator. Includes full amortization schedule & extra payment savings.",
  alternates: {
    canonical: "/finance/loan-calculator",
  },
  openGraph: {
    title: "Loan Calculator – Monthly Payment, APR & Amortization Schedule",
    description:
      "Instant US loan calculator with real-time monthly payment, total interest breakdown, amortization tables, and extra payment payoff simulator.",
    url: "https://allcalculator.net/finance/loan-calculator",
    siteName: "AllCalculator.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator – Monthly Payment & Amortization Schedule",
    description:
      "Calculate monthly loan payments, interest costs, and payoff timelines with interactive amortization schedules.",
  },
};

/* ——— Structured Data Schemas ——— */
const LOAN_CALCULATOR_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://allcalculator.net/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Finance",
          item: "https://allcalculator.net/finance",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Loan Calculator",
          item: "https://allcalculator.net/finance/loan-calculator",
        },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": "https://allcalculator.net/finance/loan-calculator#app",
      name: "Loan Calculator",
      url: "https://allcalculator.net/finance/loan-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      description:
        "Free US loan calculator estimating monthly installment payments, total interest paid, amortization schedules, and accelerated extra payment savings.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "FinancialProduct",
      name: "Installment Loan Calculator",
      description:
        "Computational financial tool for fixed-rate installment loans, auto financing, personal loans, and debt consolidation.",
      category: "Personal Finance",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is an amortization schedule?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An amortization schedule is an itemized table listing every scheduled payment across the full term, showing the exact portion applied to principal versus interest.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pay off my personal loan early without penalty?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most leading US banks, credit unions, and reputable online lenders have zero prepayment penalties, allowing borrowers to pay extra principal anytime.",
          },
        },
        {
          "@type": "Question",
          name: "How does an extra payment affect my loan balance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Extra payments designated as principal-only directly reduce the outstanding balance, lowering compounding interest and shortening the repayment timeline.",
          },
        },
        {
          "@type": "Question",
          name: "What credit score is needed for a low-interest personal loan in the US?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Borrowers with a FICO score of 720 or higher qualify for the most competitive personal loan APRs, often between 7% and 11%.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const related = getRelatedCalculators("loan-calculator").slice(0, 8);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-16 sm:pb-24">
      {/* Schema Injection */}
      <JsonLd data={LOAN_CALCULATOR_SCHEMA} />

      <main>
        {/* Header Section */}
        <header className="relative rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 overflow-hidden shadow-xs">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-20 -left-10 w-72 h-72 rounded-full opacity-[0.08] dark:opacity-[0.04] blur-3xl"
              style={{ background: "radial-gradient(circle, #10b981 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.07] dark:opacity-[0.03] blur-3xl"
              style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/70 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>US Standard Loan Calculator · 100% Private</span>
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-3 flex items-center gap-3 flex-wrap">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center flex-shrink-0 text-emerald-600 dark:text-emerald-400">
                <i className="fas fa-hand-holding-usd text-lg sm:text-xl" aria-hidden="true" />
              </div>
              <span>
                Loan{" "}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 dark:from-emerald-400 dark:via-teal-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Calculator
                </span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              Calculate your exact monthly payments, total interest costs, and full amortization schedule.
              Adjust terms, compare bi-weekly vs. monthly payments, or simulate extra monthly payments to see
              how much you can save.
            </p>
          </div>
        </header>

        {/* Interactive Calculator Tool */}
        <section aria-label="Interactive Loan Calculator" className="mb-14 sm:mb-20">
          <LoanCalculatorPage />
        </section>

        {/* Authoritative SEO Article */}
        <section aria-label="Loan Information and Educational Guide" className="mb-16">
          <LoanCalculatorArticle />
        </section>

        {/* Related Calculators */}
        <section aria-labelledby="related-heading" className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-5">
            <h2 id="related-heading" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fas fa-layer-group text-emerald-600 dark:text-emerald-400 text-sm" aria-hidden="true" />
              Related Financial Calculators
            </h2>
            <Link
              href="/finance"
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              View all Finance tools →
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {related.map((calc) => (
              <li key={calc.href}>
                <Link
                  href={calc.href}
                  className="group flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700/60 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                      <i
                        className={`fas ${calc.icon || "fa-calculator"} text-slate-500 dark:text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-xs transition-colors`}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                      {calc.name}
                    </span>
                  </span>
                  <i
                    className="fas fa-arrow-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
