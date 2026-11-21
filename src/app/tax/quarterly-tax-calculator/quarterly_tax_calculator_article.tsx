import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function QuarterlyTaxArticle() {
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
          <span className="meta-tag">Tax · Quarterly</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Quarterly Tax Calculator: Calculate Estimated Tax Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to quarterly tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Quarterly estimated tax payments are required when you expect to owe $1,000
            or more in taxes for the year and your withholding doesn't cover your tax
            liability. This applies to self-employed individuals, freelancers,
            investors, and others with significant non-wage income. Payments are due
            April 15, June 15, September 15, and January 15.
          </p>
          <p className="mb-5">
            A Quarterly Tax Calculator estimates your required quarterly payments based
            on your expected annual income, deductions, and credits. This tool is
            essential for self-employed individuals and others with non-wage income to
            avoid underpayment penalties.
          </p>
          <p>
            Making accurate quarterly estimated payments helps avoid penalties and
            ensures you don't face a large tax bill at year-end.
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
                q: "Who must make quarterly estimated tax payments?",
                a: "You must make estimated payments if you expect to owe $1,000+ in taxes after subtracting withholding and credits, and your withholding is less than 90% of your current year tax liability or 100% of last year's tax (110% if AGI over $150,000).",
              },
              {
                q: "When are quarterly estimated taxes due?",
                a: "Estimated tax payments are due April 15 (Q1), June 15 (Q2), September 15 (Q3), and January 15 of the following year (Q4). If the due date falls on a weekend or holiday, the deadline is the next business day.",
              },
              {
                q: "How do I calculate quarterly estimated taxes?",
                a: "Estimate your total annual income, deductions, and credits. Calculate your expected tax liability and divide by 4. Alternatively, use the annualized income method if your income varies throughout the year.",
              },
              {
                q: "What if I underpay my estimated taxes?",
                a: "Underpayment can result in a penalty, typically calculated based on the amount underpaid and how long it was underpaid. The penalty rate is set quarterly by the IRS and is generally around 3-8% annually.",
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
            Use the Quarterly Tax Calculator to estimate your required quarterly
            payments. Accurate estimated tax payments help avoid penalties and
            manage cash flow throughout the year.
          </p>
        </section>
      </div>
    </article>
  );
}
