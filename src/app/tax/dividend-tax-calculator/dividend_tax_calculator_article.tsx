import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DividendTaxArticle() {
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
          <span className="meta-tag">Tax · Dividends</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Dividend Tax Calculator: Calculate Tax on Dividends
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to dividend tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Dividends are taxed differently depending on whether they're qualified or
            non-qualified. Qualified dividends are taxed at the preferential long-term
            capital gains rates (0%, 15%, or 20%), while non-qualified dividends are
            taxed at ordinary income rates. Understanding the difference helps investors
            optimize their tax strategy and after-tax returns.
          </p>
          <p className="mb-5">
            A Dividend Tax Calculator calculates your tax liability on dividend income
            based on dividend type and your tax bracket. This tool is essential for
            dividend investors to understand their after-tax returns and make informed
            investment decisions.
          </p>
          <p>
            Holding dividend-paying stocks in tax-advantaged accounts can minimize
            dividend taxes and improve overall investment returns.
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
                q: "What's the difference between qualified and non-qualified dividends?",
                a: "Qualified dividends meet IRS holding period requirements and are taxed at capital gains rates (0%, 15%, 20%). Non-qualified dividends don't meet these requirements and are taxed at ordinary income rates (10-37%).",
              },
              {
                q: "How do I know if my dividends are qualified?",
                a: "Dividends are generally qualified if you've held the stock for more than 60 days (90 days for preferred stock) before the ex-dividend date. Your broker will typically identify qualified dividends on Form 1099-DIV.",
              },
              {
                q: "What are the 2024 qualified dividend tax rates?",
                a: "For 2024, qualified dividends are taxed at 0% for income up to $44,625 (single), 15% for income up to $492,300, and 20% for income above that. Higher earners may also pay the 3.8% Net Investment Income Tax.",
              },
              {
                q: "How can I reduce taxes on dividends?",
                a: "Strategies include holding dividend stocks in tax-advantaged accounts (IRA, 401k), focusing on qualified dividends, and tax-loss harvesting to offset dividend income with capital losses.",
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
            Use the Dividend Tax Calculator to understand your tax liability on
            dividend income. Strategic planning can minimize dividend taxes and
            maximize your after-tax investment returns.
          </p>
        </section>
      </div>
    </article>
  );
}
