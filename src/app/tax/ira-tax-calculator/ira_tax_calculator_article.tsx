import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function IRATaxArticle() {
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
          <span className="meta-tag">Tax · Retirement</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            IRA Tax Calculator: Calculate IRA Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to IRA tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Individual Retirement Accounts (IRAs) offer tax advantages for retirement
            savings. Traditional IRAs provide tax-deferred growth with tax-deductible
            contributions, while Roth IRAs offer tax-free growth and tax-free withdrawals
            in retirement. Understanding IRA tax rules helps optimize retirement savings
            and minimize tax liability.
          </p>
          <p className="mb-5">
            An IRA Tax Calculator estimates the tax implications of IRA contributions,
            conversions, and withdrawals. This tool helps you understand the tax benefits
            of different IRA strategies and plan for retirement tax efficiency.
          </p>
          <p>
            Strategic IRA planning can significantly reduce your lifetime tax burden
            and maximize retirement savings.
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
                q: "What's the difference between Traditional and Roth IRA?",
                a: "Traditional IRA contributions are tax-deductible, growth is tax-deferred, and withdrawals are taxed as income. Roth IRA contributions are after-tax, growth is tax-free, and qualified withdrawals are tax-free.",
              },
              {
                q: "What are the 2024 IRA contribution limits?",
                a: "For 2024, the limit is $7,000 ($8,000 if age 50+). Income limits apply to Roth IRA eligibility and Traditional IRA deductibility. Catch-up contributions are available for those 50 and older.",
              },
              {
                q: "When can I withdraw from an IRA penalty-free?",
                a: "Traditional IRA withdrawals before age 59½ generally incur a 10% penalty plus income tax, with exceptions for certain situations. Roth IRA contributions can be withdrawn anytime penalty-free.",
              },
              {
                q: "What is required minimum distribution (RMD)?",
                a: "RMDs are required from Traditional IRAs starting at age 73 (75 for those born after 1959). Roth IRAs have no RMDs during the owner's lifetime. Failure to take RMDs results in a 25% penalty.",
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
            Use the IRA Tax Calculator to understand the tax implications of IRA
            strategies. Proper IRA planning can maximize retirement savings and
            minimize lifetime tax liability.
          </p>
        </section>
      </div>
    </article>
  );
}
