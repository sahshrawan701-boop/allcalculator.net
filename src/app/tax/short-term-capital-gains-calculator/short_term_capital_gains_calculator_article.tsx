import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ShortTermCapitalGainsArticle() {
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
            Short-Term Capital Gains Calculator: Calculate Short-Term Capital Gains
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to short-term capital gains calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Short-term capital gains apply to assets held one year or less before sale.
            These gains are taxed at ordinary income tax rates (10% to 37%), which are
            significantly higher than long-term capital gains rates. Short-term gains
            don't receive preferential treatment, making short-term trading less
            tax-efficient than long-term investing.
          </p>
          <p className="mb-5">
            A Short-Term Capital Gains Calculator calculates your tax on assets held
            one year or less based on your ordinary income tax rate. This tool helps
            traders and active investors understand the tax impact of short-term trading.
          </p>
          <p>
            Holding investments longer than one year can significantly reduce your tax
            liability on gains.
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
                q: "What is the tax rate for short-term capital gains?",
                a: "Short-term capital gains are taxed at ordinary income tax rates: 10%, 12%, 22%, 24%, 32%, 35%, or 37% depending on your taxable income and filing status. These are the same rates that apply to wages and other ordinary income.",
              },
              {
                q: "How is the holding period determined?",
                a: "The holding period starts the day after you acquire the asset and ends the day you sell it. For short-term treatment, you must hold the asset one year or less (365 days or less). Holding one day longer qualifies for long-term treatment.",
              },
              {
                q: "What is the difference between short-term and long-term gains?",
                a: "Short-term gains (held one year or less) are taxed at ordinary income rates (10-37%). Long-term gains (held more than one year) are taxed at preferential rates (0%, 15%, 20%). The difference can be substantial for high earners.",
              },
              {
                q: "How can I reduce short-term capital gains tax?",
                a: "Strategies include holding investments longer than one year to qualify for long-term rates, tax-loss harvesting to offset gains, using tax-advantaged accounts for active trading, and timing sales in low-income years.",
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
            Use the Short-Term Capital Gains Calculator to understand your tax on
            short-term investments. Consider holding assets longer than one year to
            benefit from lower long-term capital gains rates.
          </p>
        </section>
      </div>
    </article>
  );
}
