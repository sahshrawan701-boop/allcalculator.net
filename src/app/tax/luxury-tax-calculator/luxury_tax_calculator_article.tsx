import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LuxuryTaxArticle() {
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
          <span className="meta-tag">Tax · Luxury</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Luxury Tax Calculator: Calculate Luxury Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to luxury tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Luxury tax is an excise tax on high-end goods and services considered
            non-essential or luxury items. Common examples include luxury cars, yachts,
            private jets, expensive jewelry, and high-end real estate. Luxury taxes are
            typically percentage-based and apply above certain price thresholds.
            Understanding luxury tax helps with budgeting for high-value purchases.
          </p>
          <p className="mb-5">
            A Luxury Tax Calculator estimates the luxury tax on high-value purchases
            based on the item type and price. This tool is essential for consumers
            planning luxury purchases to understand the total cost including taxes.
          </p>
          <p>
            Factoring in luxury tax helps avoid surprises when purchasing high-end
            goods and services.
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
                q: "What items are subject to luxury tax?",
                a: "Items subject to luxury tax vary by jurisdiction. Common examples include luxury cars over certain price thresholds, yachts, private aircraft, expensive jewelry, and high-end real estate. Check local tax laws for specific items.",
              },
              {
                q: "What are luxury tax rates?",
                a: "Luxury tax rates vary by jurisdiction and item type. For example, some states charge luxury tax on vehicles over $50,000 at rates of 5-10%. Federal luxury tax on certain items may also apply.",
              },
              {
                q: "Is luxury tax deductible?",
                a: "Luxury tax on business purchases may be deductible as a business expense. Personal luxury taxes are generally not deductible. Consult a tax professional for specific guidance.",
              },
              {
                q: "How can I avoid luxury tax?",
                a: "Options include purchasing items below luxury tax thresholds, buying used items (some jurisdictions exempt used goods), or purchasing in jurisdictions without luxury tax. However, always consider total cost including other taxes.",
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
            Use the Luxury Tax Calculator to estimate taxes on high-value purchases.
            Understanding luxury tax helps budget accurately for luxury goods and
            services.
          </p>
        </section>
      </div>
    </article>
  );
}
