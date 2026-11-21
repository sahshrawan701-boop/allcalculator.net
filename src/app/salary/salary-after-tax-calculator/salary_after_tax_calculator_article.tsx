import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SalaryAfterTaxArticle() {
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
          <span className="meta-tag">Salary · After Tax</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Salary After Tax Calculator: Calculate Take-Home Salary
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to after-tax salary calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Salary after tax, also known as take-home pay or net salary, is the amount
            you actually receive after all taxes are deducted from your gross pay.
            This includes federal income tax, state income tax, Social Security, Medicare,
            and other required withholdings. Understanding your after-tax salary is
            essential for realistic budgeting.
          </p>
          <p className="mb-5">
            A Salary After Tax Calculator estimates your net pay based on your gross
            salary, filing status, and location. This tool is essential for employees
            to understand their disposable income and plan their finances accordingly.
          </p>
          <p>
            Knowing your after-tax salary helps you create accurate budgets and
            make informed financial decisions.
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
                q: "What taxes are deducted from salary?",
                a: "Common deductions include federal income tax, state income tax (where applicable), Social Security (6.2%), Medicare (1.45%), and local taxes in some areas.",
              },
              {
                q: "How much tax is taken from my paycheck?",
                a: "Total tax withholding varies by income, filing status, and location. It typically ranges from 20-35% for most employees, though higher earners pay more.",
              },
              {
                q: "How can I reduce my tax burden?",
                a: "Options include contributing to pre-tax retirement accounts (401k, IRA), using health savings accounts (HSA), and maximizing tax deductions. Consult a tax professional for personalized advice.",
              },
              {
                q: "Why is my after-tax pay different from expected?",
                a: "Differences can occur due to changes in tax brackets, additional withholding, benefit deductions, or errors in payroll processing. Review your pay stub for details.",
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
            Use the Salary After Tax Calculator to understand your take-home pay.
            Knowing your after-tax salary is essential for accurate budgeting
            and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
