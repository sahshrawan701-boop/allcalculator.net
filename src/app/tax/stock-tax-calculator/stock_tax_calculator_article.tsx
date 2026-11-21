import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StockTaxArticle() {
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
          <span className="meta-tag">Tax · Stocks</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Stock Tax Calculator: Calculate Stock Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to stock tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Stock investments generate taxable events through capital gains (profits from
            selling stocks) and dividends. Capital gains are taxed at different rates
            depending on holding period (short-term vs long-term) and your income level.
            Qualified dividends receive preferential tax treatment similar to long-term
            capital gains. Understanding stock taxes helps optimize investment strategy.
          </p>
          <p className="mb-5">
            A Stock Tax Calculator calculates your tax liability on stock sales and
            dividend income. This tool is essential for investors to understand their
            after-tax returns and make informed investment decisions.
          </p>
          <p>
            Strategic tax planning can significantly improve your after-tax investment
            returns through timing of sales and tax-loss harvesting.
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
                q: "How are stock gains taxed?",
                a: "Short-term gains (held less than one year) are taxed at ordinary income rates (10-37%). Long-term gains (held more than one year) are taxed at preferential rates (0%, 15%, or 20%) based on income.",
              },
              {
                q: "What are qualified dividends?",
                a: "Qualified dividends meet IRS holding period requirements and are taxed at long-term capital gains rates (0%, 15%, 20%). Non-qualified dividends are taxed at ordinary income rates.",
              },
              {
                q: "What is tax-loss harvesting?",
                a: "Tax-loss harvesting involves selling losing investments to offset capital gains, reducing your tax liability. Losses can offset dollar-for-dollar with gains, and up to $3,000 of excess losses can offset ordinary income annually.",
              },
              {
                q: "How can I reduce taxes on stock investments?",
                a: "Strategies include holding stocks longer than one year for lower rates, tax-loss harvesting, holding stocks in tax-advantaged accounts (IRA, 401k), and donating appreciated stock to charity.",
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
            Use the Stock Tax Calculator to understand your tax liability on stock
            investments. Strategic tax planning can significantly improve your
            after-tax investment returns.
          </p>
        </section>
      </div>
    </article>
  );
}
