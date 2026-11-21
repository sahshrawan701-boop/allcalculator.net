import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ForeignTaxCreditArticle() {
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
          <span className="meta-tag">Tax · Foreign Credit</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Foreign Tax Credit Calculator: Calculate Foreign Tax Credit
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to foreign tax credit calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The Foreign Tax Credit prevents double taxation on income earned abroad. If you
            paid foreign income taxes on the same income that's also subject to U.S. tax,
            you can claim a credit for those foreign taxes. The credit is limited to the
            amount of U.S. tax attributable to your foreign income. Understanding this
            credit is essential for investors and workers with international income.
          </p>
          <p className="mb-5">
            A Foreign Tax Credit Calculator estimates your credit based on foreign taxes
            paid and your foreign source income. This tool helps you understand how much
            foreign tax you can claim as a credit against your U.S. tax liability.
          </p>
          <p>
            You can choose to claim foreign taxes as a credit or deduction, but the
            credit is generally more beneficial.
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
                q: "What taxes qualify for the foreign tax credit?",
                a: "Qualifying taxes include income, war profits, and excess profits taxes paid to a foreign country or U.S. possession. The tax must be a legal and actual foreign tax liability, and you must have paid or accrued it.",
              },
              {
                q: "How is the foreign tax credit limit calculated?",
                a: "The credit limit is your U.S. tax liability multiplied by (foreign source taxable income / total taxable income). You cannot claim more credit than this limit, but excess credits can be carried back 1 year or forward 10 years.",
              },
              {
                q: "Should I take the credit or deduction?",
                a: "The foreign tax credit is generally more beneficial than deducting foreign taxes, as credits reduce tax liability dollar-for-dollar while deductions reduce taxable income. However, the credit is subject to limitations.",
              },
              {
                q: "How do I claim the foreign tax credit?",
                a: "Individuals claim the credit on Form 1116. If your foreign taxes are $300 or less ($600 married filing jointly), you can claim the credit directly on Form 1040 without filing Form 1116.",
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
            Use the Foreign Tax Credit Calculator to understand your credit for taxes
            paid abroad. The foreign tax credit prevents double taxation on
            international income.
          </p>
        </section>
      </div>
    </article>
  );
}
