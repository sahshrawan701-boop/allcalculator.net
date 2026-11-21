import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function NetInvestmentIncomeTaxArticle() {
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
          <span className="meta-tag">Tax · NIIT</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Net Investment Income Tax Calculator: Calculate NIIT
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to NIIT calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            The Net Investment Income Tax (NIIT) is a 3.8% tax on investment income for
            individuals with modified adjusted gross income above certain thresholds
            ($200,000 single, $250,000 married filing jointly). Investment income includes
            interest, dividends, capital gains, rental income, and passive business income.
            The NIIT helps fund the Affordable Care Act.
          </p>
          <p className="mb-5">
            A NIIT Calculator estimates your Net Investment Income Tax liability based
            on your investment income and MAGI. This tool helps high-income investors
            understand their total tax obligation and plan for this additional tax.
          </p>
          <p>
            The NIIT applies only to the lesser of your net investment income or the
            amount by which your MAGI exceeds the threshold.
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
                q: "What are the NIIT income thresholds?",
                a: "For 2024, NIIT applies if MAGI exceeds $200,000 (single, head of household), $250,000 (married filing jointly), or $125,000 (married filing separately). These thresholds are not indexed for inflation.",
              },
              {
                q: "What income is subject to NIIT?",
                a: "NIIT applies to net investment income including interest, dividends, capital gains, rental and royalty income, non-qualified annuities, and passive business income. It does not apply to wages, active business income, or tax-exempt interest.",
              },
              {
                q: "How is NIIT calculated?",
                a: "NIIT is 3.8% of the lesser of: (1) your net investment income, or (2) the amount by which your MAGI exceeds the threshold. For example, if MAGI is $250,000 and investment income is $30,000, NIIT is 3.8% of $30,000 = $1,140.",
              },
              {
                q: "Can I avoid NIIT?",
                a: "Strategies include investing in tax-exempt municipal bonds, using tax-advantaged accounts (IRA, 401k), timing capital gains, reducing MAGI through retirement contributions, and managing passive vs. active income classification.",
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
            Use the NIIT Calculator to understand your Net Investment Income Tax
            obligation. Strategic investment planning can help minimize NIIT liability.
          </p>
        </section>
      </div>
    </article>
  );
}
