import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxDeductionArticle() {
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
          <span className="meta-tag">Tax · Deductions</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Deduction Calculator: Calculate Tax Deductions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax deduction calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax deductions reduce your taxable income, which can lower your tax liability.
            You can choose between the standard deduction ($14,600 single, $29,200 married
            for 2024) or itemizing specific deductions. Common itemized deductions include
            mortgage interest, state and local taxes (up to $10,000), charitable
            contributions, and medical expenses above a threshold.
          </p>
          <p className="mb-5">
            A Tax Deduction Calculator helps you determine whether to take the standard
            deduction or itemize, and calculates your total deduction amount. This tool
            is essential for maximizing your tax savings and optimizing your tax return.
          </p>
          <p>
            Choosing the right deduction strategy can significantly reduce your taxable
            income and tax liability.
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
                q: "Should I take the standard deduction or itemize?",
                a: "Take the standard deduction if it's larger than your itemized deductions. Itemize if your total itemized deductions (mortgage interest, SALT up to $10,000, charitable contributions, medical expenses above 7.5% AGI) exceed the standard deduction.",
              },
              {
                q: "What are the 2024 standard deduction amounts?",
                a: "For 2024: Single $14,600, Married Filing Jointly $29,200, Head of Household $21,900, Married Filing Separately $14,600. Additional amounts apply for those 65+ or blind.",
              },
              {
                q: "What expenses can I deduct if I itemize?",
                a: "Common itemized deductions include mortgage interest on up to $750,000 of debt, state and local taxes (capped at $10,000), charitable contributions, medical expenses exceeding 7.5% of AGI, and casualty losses in declared disaster areas.",
              },
              {
                q: "What is the SALT deduction cap?",
                a: "The SALT (State and Local Tax) deduction is capped at $10,000 total for state income tax, sales tax, and property tax combined. This cap applies to all taxpayers regardless of filing status.",
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
            Use the Tax Deduction Calculator to determine your optimal deduction
            strategy. Maximizing deductions can significantly reduce your taxable
            income and tax liability.
          </p>
        </section>
      </div>
    </article>
  );
}
