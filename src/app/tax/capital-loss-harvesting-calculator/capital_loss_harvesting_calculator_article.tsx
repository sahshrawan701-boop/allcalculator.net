import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CapitalLossHarvestingArticle() {
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
          <span className="meta-tag">Tax · Loss Harvesting</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Capital Loss Harvesting Calculator: Calculate Tax Savings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to capital loss harvesting
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Capital loss harvesting involves selling investments at a loss to offset capital
            gains, reducing your tax liability. Losses can offset gains dollar-for-dollar,
            and up to $3,000 of excess losses can offset ordinary income annually.
            Remaining losses carry forward to future years. This strategy is a powerful
            tax planning tool for investors.
          </p>
          <p className="mb-5">
            A Capital Loss Harvesting Calculator estimates your tax savings from selling
            losing investments to offset gains. This tool helps investors understand the
            tax benefits of loss harvesting and plan strategic sales.
          </p>
          <p>
            Be aware of the wash-sale rule, which disallows loss harvesting if you
            repurchase the same security within 30 days.
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
                q: "How does capital loss harvesting work?",
                a: "Sell investments at a loss to offset capital gains. Losses first offset gains of the same type (short-term offsets short-term). Excess losses offset up to $3,000 of ordinary income annually. Remaining losses carry forward indefinitely.",
              },
              {
                q: "What is the wash-sale rule?",
                a: "The wash-sale rule disallows claiming a loss if you purchase a substantially identical security 30 days before or after the sale. This prevents harvesting losses while maintaining your market position. Wait 31 days to repurchase.",
              },
              {
                q: "How much can I save with loss harvesting?",
                a: "Savings depend on your tax rate. If you're in the 24% bracket and harvest $10,000 in losses to offset gains, you save $2,400 in taxes. If losses offset ordinary income, savings equal your marginal tax rate on the offset amount.",
              },
              {
                q: "Should I harvest losses every year?",
                a: "Loss harvesting is beneficial when you have gains to offset or want to reduce ordinary income. Consider transaction costs, your investment strategy, and whether the investments have long-term potential before selling solely for tax benefits.",
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
            Use the Capital Loss Harvesting Calculator to understand potential tax
            savings. Strategic loss harvesting can significantly reduce your tax
            liability while maintaining your investment strategy.
          </p>
        </section>
      </div>
    </article>
  );
}
