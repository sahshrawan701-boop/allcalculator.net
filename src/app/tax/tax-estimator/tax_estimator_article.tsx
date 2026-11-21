import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxEstimatorArticle() {
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
          <span className="meta-tag">Tax · Estimator</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Estimator: Estimate Your Tax Liability
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax estimation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A tax estimator provides an approximation of your tax liability based on
            your income, deductions, credits, and filing status. While not a substitute
            for professional tax preparation, tax estimators help you plan throughout
            the year by showing how financial decisions affect your taxes. Understanding
            your estimated tax liability helps with budgeting and withholding adjustments.
          </p>
          <p className="mb-5">
            A Tax Estimator calculates your federal and state tax liability based on
            your income, filing status, deductions, and credits. This tool helps you
            understand your tax obligations and plan for estimated payments or
            withholding adjustments.
          </p>
          <p>
            Regular tax estimation throughout the year helps avoid surprises and
            ensures you're on track for your tax goals.
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
                q: "How accurate are tax estimators?",
                a: "Tax estimators provide approximations based on current tax laws and the information you provide. They're generally accurate for planning purposes but may not account for every possible deduction or credit. Use them for planning, not as a substitute for professional tax advice.",
              },
              {
                q: "What information do I need for tax estimation?",
                a: "You'll need your total income (wages, interest, dividends, etc.), filing status, number of dependents, deductions (standard or itemized), and any eligible tax credits. More detailed information improves accuracy.",
              },
              {
                q: "When should I use a tax estimator?",
                a: "Use a tax estimator throughout the year for planning, before making major financial decisions (like selling investments), when changing jobs, or when adjusting your W-4 withholding. Regular estimation helps avoid underpayment penalties.",
              },
              {
                q: "What if my estimate differs from my actual tax return?",
                a: "Differences can occur due to changes in income, overlooked deductions or credits, tax law changes, or calculation differences. Review your actual return to understand the discrepancy and adjust your estimation for next year.",
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
            Use the Tax Estimator to understand your potential tax liability. Regular
            estimation helps with financial planning and ensures you're prepared for
            tax season.
          </p>
        </section>
      </div>
    </article>
  );
}
