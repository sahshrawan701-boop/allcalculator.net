import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LongTermCapitalGainsArticle() {
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
          <span className="meta-tag">Tax · Capital Gains</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Long-Term Capital Gains Calculator: Calculate Long-Term Capital Gains
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to long-term capital gains calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Long-term capital gains apply to assets held more than one year before sale.
            These gains are taxed at preferential rates: 0%, 15%, or 20% depending on
            your taxable income. The 0% rate applies to income up to $47,025 (single),
            15% up to $518,900, and 20% above that. Long-term rates are significantly
            lower than ordinary income rates, encouraging long-term investment.
          </p>
          <p className="mb-5">
            A Long-Term Capital Gains Calculator calculates your tax on assets held
            more than one year based on your taxable income. This tool helps investors
            understand the tax advantages of long-term holding and plan investment
            sales strategically.
          </p>
          <p>
            Holding investments longer than one year can significantly reduce your
            tax liability on gains.
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
                q: "What are the 2024 long-term capital gains rates?",
                a: "For 2024: 0% on income up to $47,025 (single) or $94,050 (married), 15% on income up to $518,900 (single) or $583,750 (married), and 20% on income above those thresholds. The 3.8% NIIT may also apply above $200,000/$250,000.",
              },
              {
                q: "How is the holding period determined?",
                a: "The holding period starts the day after you acquire the asset and ends the day you sell it. For long-term treatment, you must hold the asset more than one year (366 days for leap years). Short-term gains apply to assets held one year or less.",
              },
              {
                q: "What is the difference between short-term and long-term gains?",
                a: "Short-term gains (held one year or less) are taxed at ordinary income rates (10-37%). Long-term gains (held more than one year) are taxed at preferential rates (0%, 15%, 20%). The difference can be substantial for high earners.",
              },
              {
                q: "How can I minimize capital gains tax?",
                a: "Strategies include holding investments longer than one year, tax-loss harvesting to offset gains, using tax-advantaged accounts, donating appreciated assets to charity, and timing sales in low-income years.",
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
            Use the Long-Term Capital Gains Calculator to understand your tax on
            long-term investments. Holding assets longer than one year provides
            significant tax advantages.
          </p>
        </section>
      </div>
    </article>
  );
}
