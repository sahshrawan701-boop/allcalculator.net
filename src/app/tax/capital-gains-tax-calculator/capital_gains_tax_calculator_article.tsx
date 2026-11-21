import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CapitalGainsTaxArticle() {
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
          <span className="meta-tag">Tax · Investments</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Capital Gains Tax Calculator: Calculate Capital Gains Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to capital gains tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Capital gains tax is levied on the profit from the sale of capital assets
            such as stocks, bonds, real estate, and other investments. The tax rate
            depends on how long you held the asset (short-term vs long-term) and your
            income level. Understanding capital gains tax helps optimize investment
            decisions and minimize tax liability.
          </p>
          <p className="mb-5">
            A Capital Gains Tax Calculator calculates your tax liability based on
            sale price, purchase price, holding period, and your tax bracket. This tool
            is essential for investors planning to sell assets and understanding the
            tax implications of investment decisions.
          </p>
          <p>
            Strategic timing of asset sales and understanding capital gains rules can
            significantly reduce your tax burden and improve investment returns.
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
                q: "What's the difference between short-term and long-term capital gains?",
                a: "Short-term capital gains (assets held less than one year) are taxed at ordinary income rates (10-37%). Long-term gains (held more than one year) are taxed at preferential rates (0%, 15%, or 20%).",
              },
              {
                q: "What are the 2024 long-term capital gains tax rates?",
                a: "For 2024, long-term rates are 0% for income up to $44,625 (single), 15% for income up to $492,300, and 20% for income above that. Higher earners may also pay the 3.8% Net Investment Income Tax.",
              },
              {
                q: "How can I reduce capital gains tax?",
                a: "Strategies include holding assets longer than one year for lower rates, tax-loss harvesting to offset gains, donating appreciated assets to charity, and utilizing retirement accounts for tax-advantaged growth.",
              },
              {
                q: "Do I pay capital gains tax on my primary home?",
                a: "Up to $250,000 ($500,000 married) of capital gains on the sale of a primary residence is tax-exempt if you lived there for 2 of the last 5 years. Gains above this threshold are taxable.",
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
            Use the Capital Gains Tax Calculator to understand your tax liability on
            investment sales. Strategic planning can minimize taxes and maximize
            your investment returns.
          </p>
        </section>
      </div>
    </article>
  );
}
