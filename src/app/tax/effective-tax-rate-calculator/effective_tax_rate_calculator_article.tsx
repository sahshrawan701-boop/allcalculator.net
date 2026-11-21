import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EffectiveTaxRateArticle() {
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
          <span className="meta-tag">Tax · Effective Rate</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Effective Tax Rate Calculator: Calculate Your Effective Tax Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to effective tax rate calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your effective tax rate is the average rate you actually pay on your total
            income, calculated as total tax divided by total income. This rate accounts
            for progressive tax brackets, deductions, and credits. Your effective rate
            is always lower than your marginal rate (the rate on your last dollar).
            Understanding your effective rate helps with overall tax planning.
          </p>
          <p className="mb-5">
            An Effective Tax Rate Calculator calculates your average tax rate based on
            your total income and total tax liability. This tool helps you understand
            what percentage of your income goes to taxes in total.
          </p>
          <p>
            The effective tax rate provides a clearer picture of your overall tax burden
            than your marginal rate alone.
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
                q: "How is effective tax rate calculated?",
                a: "Effective tax rate = Total Tax Liability / Total Income × 100. For example, if you paid $15,000 in tax on $100,000 of income, your effective rate is 15%. This includes all taxes (federal, state, FICA) if calculating total effective rate.",
              },
              {
                q: "What is a typical effective tax rate?",
                a: "Effective rates vary widely based on income. Most Americans pay an effective federal rate between 10-20%. High earners may pay 25-30% effective federal rate. Including state taxes and FICA, total effective rates range from 20-40% for most taxpayers.",
              },
              {
                q: "Why is effective rate lower than marginal rate?",
                a: "Because of progressive tax brackets, only income above each threshold is taxed at that rate. Lower portions of your income are taxed at lower rates. Deductions and credits further reduce your effective rate compared to your marginal rate.",
              },
              {
                q: "How can I lower my effective tax rate?",
                a: "Strategies include maximizing deductions and credits, contributing to tax-advantaged accounts, using tax-loss harvesting, and timing income and deductions. These reduce your total tax liability relative to your income.",
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
            Use the Effective Tax Rate Calculator to understand your overall tax
            burden. Your effective rate provides a realistic view of what percentage
            of your income goes to taxes.
          </p>
        </section>
      </div>
    </article>
  );
}
