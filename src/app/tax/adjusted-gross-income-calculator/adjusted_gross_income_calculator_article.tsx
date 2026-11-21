import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AdjustedGrossIncomeArticle() {
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
          <span className="meta-tag">Tax · AGI</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Adjusted Gross Income Calculator: Calculate Your AGI
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to AGI calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Adjusted Gross Income (AGI) is your gross income minus specific adjustments
            (above-the-line deductions). AGI is used to determine eligibility for many
            tax deductions and credits, and it's the starting point for calculating your
            taxable income. Common adjustments include student loan interest, IRA
            contributions, HSA contributions, and educator expenses.
          </p>
          <p className="mb-5">
            An AGI Calculator calculates your adjusted gross income based on your gross
            income and eligible adjustments. This tool helps you understand how
            adjustments reduce your AGI and potentially increase your eligibility for
            tax benefits.
          </p>
          <p>
            Lowering your AGI through adjustments can increase eligibility for tax
            credits and deductions that phase out at higher income levels.
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
                q: "What are above-the-line deductions?",
                a: "Above-the-line deductions (adjustments) reduce your gross income to arrive at AGI. Examples include student loan interest (up to $2,500), traditional IRA contributions, HSA contributions, educator expenses ($300), and self-employment tax deduction.",
              },
              {
                q: "Why is AGI important?",
                a: "AGI determines eligibility for many tax credits and deductions, including the Child Tax Credit, education credits, medical expense deductions, and IRA deductibility. Many benefits phase out at higher AGI levels.",
              },
              {
                q: "How can I reduce my AGI?",
                a: "Strategies include maximizing traditional IRA and 401(k) contributions, contributing to HSAs, deducting student loan interest, claiming educator expenses, and using the self-employment tax deduction if applicable.",
              },
              {
                q: "What is the difference between AGI and taxable income?",
                a: "AGI is gross income minus above-the-line deductions. Taxable income is AGI minus the standard deduction or itemized deductions. Taxable income is the amount used to calculate your actual tax liability.",
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
            Use the AGI Calculator to understand your adjusted gross income. Maximizing
            above-the-line deductions can reduce your AGI and increase eligibility for
            tax benefits.
          </p>
        </section>
      </div>
    </article>
  );
}
