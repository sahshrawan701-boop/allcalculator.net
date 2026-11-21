import type { Metadata } from "next";
import Link from "next/link";
import { getRelatedCalculators } from "@/data/calculators";
import CarTaxCalculatorClient from "./car_tax_calculatorClient";
import CarTaxCalculatorArticle from "./car_tax_calculator_article";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tax/car-tax-calculator",
  },
  title: "Car Tax Calculator | Auto Sales & Property Tax",
  description:
    "Calculate the sales tax, registration fees, and personal property taxes owed on a new vehicle purchase. Estimate your total car buying costs.",
};

const RELATED = getRelatedCalculators("car-tax-calculator").slice(0, 8);

export default function Page() {
  return (
    <div className="w-full mx-auto px-4 sm:px-8 pb-16">
      <main>
        <div className="relative max-w-[1400px] mx-auto pt-12 pb-8 mb-6">
          <div className="pointer-events-none absolute inset-0 -mx-4 sm:-mx-8 overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute top-0 left-[10%] sm:left-[20%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-3xl" />
            <div className="absolute bottom-0 right-[10%] sm:right-[15%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-violet-100/50 dark:bg-violet-900/15 blur-3xl" />
          </div>

          <header className="relative z-10 max-w-4xl">
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <i className="fas fa-car flex-shrink-0" aria-hidden="true" />
              Car Tax Calculator
            </h1>

            <p className="mt-3 text-slate-800 dark:text-slate-100 max-w-3xl">
              The Car Tax Calculator estimates taxes associated with vehicle purchases, registration, or ownership. Understand the total cost of buying a car, including applicable tax expenses.
            </p>
          </header>
        </div>

        <section>
          <CarTaxCalculatorClient />
        </section>

        <CarTaxCalculatorArticle />

        <section>
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Related Calculators
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RELATED.map((calc) => (
              <li key={calc.href}>
                <Link
                  href={calc.href}
                  className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border-[1.5px] border-gray-200 dark:border-gray-700 text-slate-800 dark:text-slate-100 text-sm font-medium hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:shadow-md transition-all duration-150"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <i
                      className={`fas ${calc.icon} text-emerald-500 text-xs flex-shrink-0`}
                      aria-hidden="true"
                    />

                    <span className="truncate">{calc.name}</span>
                  </span>

                  <i
                    className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-800"
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
