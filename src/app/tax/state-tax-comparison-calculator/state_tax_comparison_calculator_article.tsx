import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StateTaxComparisonArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

        .dropcap::first-letter {
          font-family: var(--font-inter), sans-serif;
          font-size: 4.5rem;
          font-weight: 700;
          float: left;
          line-height: 0.8;
          margin-right: 0.12em;
          margin-top: 0.08em;
          color: var(--primary-dk);
        }
        .dark .dropcap::first-letter { color: var(--primary); }

        .rule-divider {
          border: none;
          border-top: 1px solid #cbd5e1;
          margin: 3rem 0;
        }
        .dark .rule-divider { border-top-color: #475569; }

        .faq-item {
          border-top: 1px solid #e2e8f0;
          padding: 1.25rem 0;
        }
        .dark .faq-item { border-top-color: #334155; }
        .faq-item h3 {
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
          color: #1e293b !important;
        }
        .dark .faq-item h3 { color: #e2e8f0 !important; }

        .meta-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-family: sans-serif;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary-dk);
          background: #e0e7ff;
          padding: 0.25rem 0.6rem;
          border-radius: 2px;
        }
        .dark .meta-tag {
          color: #a5b4fc;
          background: #312e81;
        }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        <header className="mb-12 text-center">
          <span className="meta-tag">Tax · State Comparison</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            State Tax Comparison Calculator: Compare State Taxes
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to state tax comparisons
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            State taxes vary significantly across the United States, affecting your total
            tax burden and take-home pay. Seven states have no income tax, while others
            have top rates exceeding 10%. Sales tax rates also vary widely, from 0% to
            over 10%. Property tax rates differ by county and state. Comparing state
            taxes is essential when considering relocation or comparing job offers.
          </p>
          <p className="mb-5">
            A State Tax Comparison Calculator compares total tax burdens across different
            states based on your income, spending, and property value. This tool helps
            you understand which states offer the most favorable tax environment for
            your specific situation.
          </p>
          <p>
            Consider all taxes (income, sales, property) when comparing states, not just
            income tax alone.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What states have no income tax?",
                a: "Seven states have no income tax: Alaska, Florida, Nevada, South Dakota, Texas, Washington, and Wyoming. New Hampshire and Tennessee tax only interest and dividends, not wages.",
              },
              {
                q: "What states have the highest total tax burden?",
                a: "States with high total tax burdens include New York, California, Connecticut, New Jersey, and Illinois. These states typically have high income taxes, property taxes, or both.",
              },
              {
                q: "How do I compare total tax burden between states?",
                a: "Consider income tax, sales tax, property tax, and other state-specific taxes. Calculate the total based on your income, spending habits, and property value to get an accurate comparison.",
              },
              {
                q: "Should I move to a no-income-tax state?",
                a: "Moving to a no-income-tax state can save money on income tax, but consider other factors like cost of living, property taxes, sales tax, and quality of life. The savings may be offset by higher costs in other areas.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the State Tax Comparison Calculator to compare tax burdens across
            states. Understanding state tax differences helps with relocation
            decisions and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
