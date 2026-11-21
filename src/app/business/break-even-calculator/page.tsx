import type { Metadata } from "next";
import Link from "next/link";
import { getRelatedCalculators, getCalculatorBySlug } from "@/data/calculators";
import BreakEvenCalculatorPage from "./break_even_calculatorClient";
import BreakEvenArticle from "./break_even_calculator_article";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_ROBOTS,
  DEFAULT_AUTHORS,
  METADATA_BASE,
} from "@/lib/seo/seo.config";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generateWebApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  type FAQItem,
} from "@/lib/seo/schemas";

const CANONICAL_URL = `${SITE_URL}/business/break-even-calculator`;

export const metadata: Metadata = {
  metadataBase: METADATA_BASE,
  title: "Break-Even Calculator — Find Break-Even Point & Sales",
  description:
    "Calculate your break-even point in units and sales revenue with our free break-even calculator. Determine contribution margin and profit targets instantly.",
  keywords: [
    "break even calculator",
    "break even point calculator",
    "break even analysis calculator",
    "break even formula",
    "calculate break even point",
    "break even sales calculator",
    "business break even calculator",
    "break even units calculator",
    "break even revenue calculator",
    "contribution margin calculator",
    "fixed costs and variable costs calculator",
  ],
  authors: DEFAULT_AUTHORS,
  robots: DEFAULT_ROBOTS,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    type: "website",
    url: CANONICAL_URL,
    title: "Break-Even Calculator — Find Break-Even Point & Sales",
    description:
      "Calculate your break-even point in units and sales revenue with our free break-even calculator. Determine contribution margin and profit targets instantly.",
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Break-Even Calculator — allcalculator.net",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Break-Even Calculator — Find Break-Even Point & Sales",
    description:
      "Calculate your break-even point in units and sales revenue with our free break-even calculator. Determine contribution margin and profit targets instantly.",
    images: [DEFAULT_OG_IMAGE],
  },
};

const CALC_DATA = getCalculatorBySlug("break-even-calculator");
const RELATED = getRelatedCalculators("break-even-calculator", 8);

const BREADCRUMB_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Business Calculators", href: "/business" },
  { name: "Break-Even Calculator", href: "/business/break-even-calculator" },
];

const FAQS: FAQItem[] = [
  {
    question: "What is a break-even point?",
    answer:
      "The break-even point is the sales volume at which total revenue exactly equals total costs, resulting in zero profit and zero loss. It represents the minimum number of units a business must sell — or the minimum revenue it must generate — to cover all fixed and variable expenses.",
  },
  {
    question: "How do you calculate the break-even point?",
    answer:
      "Divide your total fixed costs by the contribution margin per unit (selling price minus variable cost per unit). The result is the number of units you need to sell to break even. For revenue-based break-even, divide fixed costs by the contribution margin ratio instead.",
  },
  {
    question: "What is the break-even formula?",
    answer:
      "The primary formula is: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit). An alternative revenue-based formula is: Break-Even Revenue = Fixed Costs ÷ Contribution Margin Ratio. Both yield the same break-even threshold expressed differently.",
  },
  {
    question: "What is the difference between break-even units and break-even revenue?",
    answer:
      "Break-even units is the number of individual products or services you must sell, while break-even revenue is the total dollar amount of sales required. They represent the same point expressed in different terms. Break-even revenue equals break-even units multiplied by the selling price per unit.",
  },
  {
    question: "Can the break-even point be negative?",
    answer:
      "No. A negative result from the formula means the contribution margin is negative — your variable cost per unit exceeds the selling price. In that case, every sale increases your losses and break-even is mathematically impossible without changing your cost structure or pricing.",
  },
  {
    question: "What happens if selling price equals variable cost?",
    answer:
      "If selling price equals variable cost, the contribution margin is zero. Division by zero means there is no finite break-even point. Every unit sold covers its own variable cost but contributes nothing toward fixed costs, so fixed costs are never recovered regardless of sales volume.",
  },
  {
    question: "How can a business lower its break-even point?",
    answer:
      "There are three levers: reduce fixed costs (renegotiate rent, cut overhead), lower variable costs per unit (find cheaper suppliers, improve efficiency), or increase the selling price. Any combination of these raises the contribution margin or reduces the numerator, lowering the break-even threshold.",
  },
  {
    question: "Is a lower break-even point better?",
    answer:
      "Generally, yes. A lower break-even point means you need fewer sales to start generating profit, which reduces risk and shortens the path to profitability. However, some businesses intentionally accept a higher break-even in exchange for greater long-term scale or market share.",
  },
  {
    question: "What is the difference between break-even analysis and profit analysis?",
    answer:
      'Break-even analysis identifies the point of zero profit — the minimum viable performance. Profit analysis goes further by modeling how much profit you earn at various sales levels above break-even. Break-even answers "can I survive?" while profit analysis answers "how well can I thrive?"',
  },
  {
    question: "Can startups use break-even analysis?",
    answer:
      "Absolutely. Break-even analysis is especially valuable for startups because it validates whether the business model can sustain itself at achievable sales volumes. It also helps founders communicate financial viability to investors and set fundraising targets tied to reaching break-even.",
  },
  {
    question: "How do fixed costs affect the break-even point?",
    answer:
      "Fixed costs are the numerator in the break-even formula, so higher fixed costs directly increase the break-even point. If you double your fixed costs while keeping prices and variable costs the same, you need to sell twice as many units to break even.",
  },
  {
    question: "What is contribution margin and why does it matter?",
    answer:
      "Contribution margin is the difference between selling price and variable cost per unit. It represents the portion of each sale that goes toward covering fixed costs and, once those are covered, toward profit. A higher contribution margin means each sale does more financial work for your business.",
  },
];

export default function Page() {
  const webAppSchema = CALC_DATA ? generateWebApplicationSchema(CALC_DATA) : null;
  const breadcrumbSchema = generateBreadcrumbSchema(BREADCRUMB_ITEMS);
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <div className="w-full mx-auto px-4 sm:px-8 pb-16">
      {webAppSchema && <JsonLd data={webAppSchema} />}
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <main>
        <div className="relative max-w-[1400px] mx-auto pt-12 pb-8 mb-6">
          <div className="pointer-events-none absolute inset-0 -mx-4 sm:-mx-8 overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute top-0 left-[10%] sm:left-[20%] w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-indigo-100/60 dark:bg-indigo-900/20 blur-3xl" />
            <div className="absolute bottom-0 right-[10%] sm:right-[15%] w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-violet-100/50 dark:bg-violet-900/15 blur-3xl" />
          </div>

          <header className="relative z-10 max-w-4xl">
            <h1 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <i className="fas fa-balance-scale flex-shrink-0" aria-hidden="true" />
              Break-Even Calculator
            </h1>

            <p className="mt-3 text-slate-800 dark:text-slate-100 max-w-3xl leading-relaxed">
              Use this free Break-Even Calculator to determine the exact point where total revenue equals total costs. Calculate your break-even point in units and sales revenue, analyze contribution margin, and simulate profit or loss across different sales quantities.
            </p>
          </header>
        </div>

        <section aria-label="Interactive Break-Even Calculator">
          <BreakEvenCalculatorPage />
        </section>

        <BreakEvenArticle />

        {RELATED.length > 0 && (
          <section className="mt-12 max-w-[1400px] mx-auto" aria-labelledby="related-calculators-heading">
            <h2
              id="related-calculators-heading"
              className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            >
              Related Business Calculators
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
                      className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-600"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
