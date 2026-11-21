import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function UseTaxArticle() {
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
          <span className="meta-tag">Tax · Use Tax</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Use Tax Calculator: Calculate Use Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to use tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Use tax is a tax on goods purchased outside your state for use in your state,
            typically when sales tax wasn't collected at the time of purchase. This commonly
            applies to online purchases from out-of-state retailers, catalog purchases,
            or items bought in another state. Use tax ensures fairness by leveling the
            playing field between in-state and out-of-state retailers.
          </p>
          <p className="mb-5">
            A Use Tax Calculator calculates the use tax owed on purchases made outside
            your state where sales tax wasn't collected. This tool helps consumers
            understand their use tax obligations and comply with state tax laws.
          </p>
          <p>
            Most states require use tax to be reported and paid on annual income tax
            returns or through separate filings.
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
                q: "When do I owe use tax?",
                a: "You owe use tax when you purchase taxable items from out-of-state sellers who don't collect sales tax, and you use those items in your state. This includes online purchases, catalog orders, and items bought in other states.",
              },
              {
                q: "How do I calculate use tax?",
                a: "Use tax is calculated at your state's sales tax rate on the purchase price. For example, if your state sales tax is 6% and you bought a $1,000 item out-of-state with no tax, you owe $60 in use tax.",
              },
              {
                q: "How do I report and pay use tax?",
                a: "Most states allow you to report use tax on your state income tax return. Some states have separate use tax forms or online filing systems. Check your state's Department of Revenue for specific requirements.",
              },
              {
                q: "What are the use tax exemptions?",
                a: "Exemptions vary by state but typically include items that would be exempt from sales tax (prescription drugs, groceries in some states), purchases for resale, and items purchased for manufacturing or production.",
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
            Use the Use Tax Calculator to understand your use tax obligations on
            out-of-state purchases. Compliance with use tax laws ensures fairness
            and supports state revenue.
          </p>
        </section>
      </div>
    </article>
  );
}
