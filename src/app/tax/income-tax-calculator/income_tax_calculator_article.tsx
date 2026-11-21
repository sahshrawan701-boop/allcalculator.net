import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function IncomeTaxArticle() {
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
          <span className="meta-tag">Tax · Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Income Tax Calculator: Calculate Income Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to income tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Income tax is a tax levied by governments on income earned by individuals and
            businesses. In the U.S., income tax includes federal income tax, state income
            tax (in most states), and potentially local income tax. Understanding your
            total income tax liability is essential for financial planning and compliance.
          </p>
          <p className="mb-5">
            An Income Tax Calculator estimates your total tax liability including federal,
            state, and local income taxes based on your income, filing status, and
            deductions. This tool helps you understand your tax obligations and plan for
            estimated payments or withholding adjustments.
          </p>
          <p>
            Proper income tax planning ensures you pay the right amount throughout the
            year and avoid penalties for underpayment.
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
                q: "What types of income are taxable?",
                a: "Taxable income includes wages, salaries, tips, interest, dividends, capital gains, rental income, business income, retirement distributions, and unemployment benefits. Some income like gifts and life insurance proceeds are generally not taxable.",
              },
              {
                q: "How do I reduce my taxable income?",
                a: "Strategies include contributing to pre-tax retirement accounts (401k, IRA), claiming deductions (standard or itemized), utilizing tax credits, and using health savings accounts (HSA) or flexible spending accounts (FSA).",
              },
              {
                q: "What if I live in a state with no income tax?",
                a: "States with no income tax include Alaska, Florida, Nevada, South Dakota, Texas, Washington, and Wyoming (New Hampshire taxes only interest and dividends). You still owe federal income tax.",
              },
              {
                q: "When are income tax returns due?",
                a: "Federal tax returns are typically due April 15. State deadlines vary but often align with the federal deadline. Extensions can be filed but any taxes owed are still due by the original deadline.",
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
            Use the Income Tax Calculator to estimate your total tax liability.
            Understanding your income tax obligations helps ensure compliance and
            optimize your tax position.
          </p>
        </section>
      </div>
    </article>
  );
}
