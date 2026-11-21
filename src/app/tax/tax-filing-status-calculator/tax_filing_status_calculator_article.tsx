import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxFilingStatusArticle() {
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
          <span className="meta-tag">Tax · Filing Status</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Filing Status Calculator: Determine Your Filing Status
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax filing status
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your tax filing status determines your tax rates, standard deduction,
            eligibility for certain credits, and other tax benefits. The five filing
            statuses are Single, Married Filing Jointly, Married Filing Separately,
            Head of Household, and Qualifying Surviving Spouse. Choosing the correct
            filing status is essential for accurate tax calculation and maximizing
            benefits.
          </p>
          <p className="mb-5">
            A Tax Filing Status Calculator helps you determine which filing status
            applies to your situation based on your marital status, dependents, and
            living arrangements. This tool ensures you choose the status that provides
            the most tax advantage.
          </p>
          <p>
            Some taxpayers may qualify for multiple filing statuses; choosing the
            one with the lowest tax liability is generally recommended.
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
                q: "What are the five filing statuses?",
                a: "The five filing statuses are: Single (unmarried), Married Filing Jointly (married couples filing together), Married Filing Separately (married couples filing separately), Head of Household (unmarried with dependents), and Qualifying Surviving Spouse (widowed with dependents).",
              },
              {
                q: "What is Head of Household status?",
                a: "Head of Household is for unmarried taxpayers who paid more than half the cost of maintaining a household and have a qualifying dependent. This status offers a higher standard deduction and more favorable tax brackets than Single.",
              },
              {
                q: "Should married couples file jointly or separately?",
                a: "Most married couples benefit from filing jointly due to lower tax rates and higher deductions. File separately only if it provides a tax benefit (rare) or for specific reasons like separating finances or liability concerns.",
              },
              {
                q: "What is Qualifying Surviving Spouse status?",
                a: "Qualifying Surviving Spouse allows widowed taxpayers to use the Married Filing Jointly rates and standard deduction for two years after their spouse's death, provided they have a dependent child and haven't remarried.",
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
            Use the Tax Filing Status Calculator to determine your optimal filing
            status. Choosing the correct status ensures accurate tax calculation
            and maximizes your tax benefits.
          </p>
        </section>
      </div>
    </article>
  );
}
