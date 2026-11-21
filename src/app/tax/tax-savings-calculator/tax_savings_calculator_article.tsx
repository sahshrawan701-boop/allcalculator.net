import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxSavingsArticle() {
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
          <span className="meta-tag">Tax · Savings</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Savings Calculator: Calculate Tax Savings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to tax savings calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax savings strategies help reduce your tax liability legally and ethically.
            Common strategies include maximizing retirement contributions, utilizing
            tax-advantaged accounts, claiming all eligible deductions and credits,
            tax-loss harvesting, and strategic timing of income recognition. Understanding
            tax savings opportunities helps optimize your financial position.
          </p>
          <p className="mb-5">
            A Tax Savings Calculator estimates potential tax savings from various
            strategies based on your income, assets, and financial situation. This tool
            helps you identify the most effective tax-saving strategies for your
            specific circumstances.
          </p>
          <p>
            Always consult a tax professional before implementing complex tax-saving
            strategies to ensure compliance with tax laws.
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
                q: "What are the most effective tax-saving strategies?",
                a: "Effective strategies include maximizing 401(k) and IRA contributions, using HSAs for medical expenses, harvesting tax losses on investments, claiming all eligible credits, and timing income and deductions strategically.",
              },
              {
                q: "How much can I save with retirement contributions?",
                a: "For 2024, you can contribute up to $23,000 to a 401(k) ($30,500 if 50+). Contributions reduce taxable income dollar-for-dollar, saving taxes at your marginal rate. IRA contributions offer similar benefits with lower limits.",
              },
              {
                q: "What is tax-loss harvesting?",
                a: "Tax-loss harvesting involves selling investments at a loss to offset capital gains, reducing your tax liability. Losses can offset gains dollar-for-dollar, and up to $3,000 of excess losses can offset ordinary income annually.",
              },
              {
                q: "How can I maximize tax credits?",
                a: "Research all available credits you may qualify for (Child Tax Credit, Earned Income Credit, education credits, energy credits). Ensure you meet eligibility requirements and maintain proper documentation to support your claims.",
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
            Use the Tax Savings Calculator to identify opportunities to reduce your
            tax liability. Strategic tax planning can significantly improve your
            financial position.
          </p>
        </section>
      </div>
    </article>
  );
}
