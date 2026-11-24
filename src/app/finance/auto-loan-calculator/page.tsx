import type { Metadata } from "next";
import Link from "next/link";
import { getRelatedCalculators } from "@/data/calculators";
import AutoLoanPage from "./auto_loan_calculatorClient";
import AutoLoanArticle from "./auto_loan_calculator_article";

export const metadata: Metadata = {
  alternates: {
    canonical: "/finance/auto-loan-calculator",
  },
  title:
    "Auto Loan Calculator – Monthly Car Payment & Financing Estimator (2026)",
  description:
    "Free US auto loan calculator. Estimate monthly car payments, total interest, trade-in equity, dealer doc fees, and state-specific sales tax with full amortization schedule.",
  keywords:
    "auto loan calculator, car payment calculator, car loan calculator, auto financing calculator, vehicle payment estimator, car loan interest calculator, trade in tax credit, car amortization schedule",
  openGraph: {
    title: "Auto Loan Calculator – Monthly Car Payment Estimator",
    description:
      "Accurately calculate your monthly car payment, total interest, and out-the-door costs including down payment, trade-in equity, and sales tax.",
    url: "https://www.allcalculator.net/finance/auto-loan-calculator",
    siteName: "Allcalculator.net",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Loan Calculator – Monthly Car Payment Estimator",
    description:
      "Accurately calculate your monthly car payment, total interest, and out-the-door costs including down payment, trade-in equity, and sales tax.",
  },
};

const RELATED = getRelatedCalculators("auto-loan-calculator").slice(0, 8);

const AUTO_LOAN_FAQS = [
  {
    question: "How is an auto loan monthly payment calculated?",
    answer:
      "Monthly car payments are computed using standard amortization math: M = P * [r(1 + r)^n] / [(1 + r)^n - 1], where P is the amount financed (vehicle price minus down payment and trade-in, plus taxes and fees), r is the monthly interest rate (annual APR divided by 12), and n is the total number of monthly payments.",
  },
  {
    question: "What is the 20/4/10 rule for buying a car in the US?",
    answer:
      "The 20/4/10 rule recommends making at least a 20% cash down payment, financing the vehicle for no longer than 4 years (48 months), and keeping total monthly vehicle expenses (loan payment, insurance, gas/charging) below 10% of your gross monthly income.",
  },
  {
    question: "How does my trade-in reduce auto loan sales tax?",
    answer:
      "In 42 US states, trade-in value is deducted from the vehicle purchase price before state and local sales tax is calculated. For example, if you buy a $40,000 vehicle and trade in a car worth $15,000, you only pay sales tax on the $25,000 difference. However, states like California, Virginia, Maryland, Michigan, Hawaii, Kentucky, and DC do not provide this tax credit.",
  },
  {
    question:
      "What credit score do I need for the best auto loan interest rates?",
    answer:
      "Super-Prime borrowers with FICO credit scores of 781 to 850 receive the lowest auto loan APRs (typically 5.3% to 6.5% in 2026). Prime borrowers (661-780) average 6.9% to 8.5%, while subprime borrowers (below 600) often face APRs exceeding 14% to 20%.",
  },
  {
    question: "What happens if I have negative equity on my trade-in?",
    answer:
      "Negative equity (being 'upside down' or 'underwater') occurs when you owe more on your current vehicle than its trade-in value. If rolled into your new auto loan, the unpaid balance increases your total amount financed, raises your monthly payments, and leaves you immediately underwater on your new vehicle.",
  },
  {
    question: "What are typical dealer fees added to a car purchase?",
    answer:
      "Common dealership fees include documentation fees (Doc fees), state title and registration fees, and destination charges. While some states cap doc fees (e.g., California caps doc fees at $85), other states like Florida have no limit, where doc fees frequently exceed $999.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Auto Loan Calculator",
      operatingSystem: "All",
      applicationCategory: "FinanceApplication",
      url: "https://www.allcalculator.net/finance/auto-loan-calculator",
      description:
        "Comprehensive US auto loan calculator. Computes monthly payments, total loan interest, down payments, trade-in equity, dealer doc fees, and sales tax with full amortization schedules.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.allcalculator.net",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Finance",
          item: "https://www.allcalculator.net/finance",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Auto Loan Calculator",
          item: "https://www.allcalculator.net/finance/auto-loan-calculator",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: AUTO_LOAN_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <div className="w-full min-w-0 mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <main className="max-w-7xl w-full min-w-0 mx-auto space-y-8">
        {/* ——— HERO HEADER ——— */}
        <div className="relative pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center text-lg shadow-sm">
                <i className="fas fa-car" aria-hidden="true" />
              </span>
              Auto Loan Calculator
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
              Estimate your monthly car payments, total loan interest, and true
              out-the-door financing costs. Factor in down payments, trade-in
              value, dealer documentation fees, and state-specific sales tax
              rules to budget your next vehicle with confidence.
            </p>
          </div>
        </div>

        {/* ——— CALCULATOR TOOL ——— */}
        <section
          aria-label="Auto Loan Calculator Tool"
          className="w-full min-w-0"
        >
          <AutoLoanPage />
        </section>

        {/* ——— COMPREHENSIVE GUIDE & ARTICLE ——— */}
        <AutoLoanArticle />

        {/* ——— RELATED CALCULATORS ——— */}
        <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fas fa-calculator text-indigo-600 dark:text-indigo-400 text-sm" />
              Related Financial Calculators
            </h2>
            <Link
              href="/finance"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View all finance tools →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {RELATED.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group flex items-center justify-between p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-sm transition-all duration-150"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <i className={`fas ${calc.icon}`} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {calc.name}
                  </span>
                </div>
                <i className="fas fa-chevron-right text-[10px] text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
