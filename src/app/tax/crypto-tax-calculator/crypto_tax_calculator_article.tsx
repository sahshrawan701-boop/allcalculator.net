import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CryptoTaxArticle() {
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
          <span className="meta-tag">Tax · Cryptocurrency</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Crypto Tax Calculator: Calculate Cryptocurrency Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to cryptocurrency tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Cryptocurrency is treated as property by the IRS, meaning every sale, trade,
            or use of crypto to purchase goods is a taxable event. You owe capital gains
            tax on the difference between your purchase price (cost basis) and sale price.
            Understanding crypto tax implications is essential for compliance and avoiding
            penalties.
          </p>
          <p className="mb-5">
            A Crypto Tax Calculator calculates your tax liability on cryptocurrency
            transactions based on cost basis, sale price, and holding period. This tool
            is essential for crypto investors to track gains and losses and prepare
            accurate tax returns.
          </p>
          <p>
            Proper record-keeping and understanding crypto tax rules helps ensure
            compliance and optimize your tax position through strategies like tax-loss
            harvesting.
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
                q: "What crypto transactions are taxable?",
                a: "Selling crypto for fiat, trading one crypto for another, using crypto to purchase goods, and earning crypto as income are all taxable events. Holding crypto or transferring between your own wallets is not taxable.",
              },
              {
                q: "How is crypto taxed?",
                a: "Crypto is taxed as capital gains. Short-term gains (held less than one year) are taxed at ordinary income rates (10-37%). Long-term gains (held more than one year) are taxed at preferential rates (0%, 15%, or 20%).",
              },
              {
                q: "What if I don't report my crypto taxes?",
                a: "The IRS receives reports from major exchanges. Failure to report can result in penalties, interest, and potential criminal charges. The IRS considers crypto tax compliance a priority.",
              },
              {
                q: "How do I calculate cost basis for crypto?",
                a: "Cost basis is typically the price you paid plus fees. If you acquired crypto through mining, the cost basis is the fair market value at the time you received it. FIFO is the default method, but other methods may be available.",
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
            Use the Crypto Tax Calculator to track your crypto gains and losses.
            Proper tax reporting and planning are essential for crypto investors
            to ensure compliance and minimize tax liability.
          </p>
        </section>
      </div>
    </article>
  );
}
