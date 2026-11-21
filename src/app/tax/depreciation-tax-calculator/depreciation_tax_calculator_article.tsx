import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DepreciationTaxArticle() {
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
          <span className="meta-tag">Tax · Depreciation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Depreciation Tax Calculator: Calculate Depreciation Deductions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to depreciation tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Depreciation is a tax deduction that allows businesses to recover the cost
            of certain assets over their useful life. Instead of deducting the full cost
            in the year of purchase, depreciation spreads the deduction over multiple
            years, reducing taxable income annually. Understanding depreciation methods
            helps maximize tax benefits for business assets.
          </p>
          <p className="mb-5">
            A Depreciation Tax Calculator calculates depreciation deductions using various
            methods including straight-line, declining balance, and MACRS. This tool is
            essential for business owners and real estate investors to understand their
            tax deductions and plan asset purchases strategically.
          </p>
          <p>
            Proper depreciation planning can significantly reduce your tax liability
            and improve cash flow by providing annual deductions for asset costs.
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
                q: "What are the main depreciation methods?",
                a: "Common methods include straight-line (equal annual deductions), declining balance (higher deductions early), and MACRS (IRS-required method for tax purposes). Section 179 and bonus depreciation allow accelerated deductions.",
              },
              {
                q: "What is MACRS depreciation?",
                a: "MACRS (Modified Accelerated Cost Recovery System) is the IRS-required depreciation method for most business assets. It assigns assets to specific recovery periods (3, 5, 7, 10, 15, or 20 years) based on asset type.",
              },
              {
                q: "What is Section 179 expensing?",
                a: "Section 179 allows businesses to deduct the full cost of qualifying equipment or software in the year purchased, up to an annual limit ($1.16 million for 2024). It's an alternative to depreciating over multiple years.",
              },
              {
                q: "Can I depreciate rental property?",
                a: "Yes, residential rental property is depreciated over 27.5 years using straight-line depreciation. Commercial property is depreciated over 39 years. Land itself cannot be depreciated.",
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
            Use the Depreciation Tax Calculator to maximize your depreciation deductions.
            Strategic depreciation planning can significantly reduce your tax liability
            and improve business cash flow.
          </p>
        </section>
      </div>
    </article>
  );
}
