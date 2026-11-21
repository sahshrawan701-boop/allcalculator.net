import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ExciseTaxArticle() {
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
          <span className="meta-tag">Tax · Excise</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Excise Tax Calculator: Calculate Excise Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to excise tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Excise taxes are indirect taxes on specific goods, services, or activities,
            typically included in the price of the product. Common examples include taxes
            on gasoline, cigarettes, alcohol, airline tickets, and luxury goods. Excise
            taxes can be federal, state, or local, and understanding them helps consumers
            and businesses understand the true cost of products.
          </p>
          <p className="mb-5">
            An Excise Tax Calculator calculates the excise tax on various products based
            on quantity, type, and applicable rates. This tool is essential for consumers
            to understand the tax component of purchases and for businesses to ensure
            proper tax collection and compliance.
          </p>
          <p>
            Understanding excise taxes helps with budgeting, pricing decisions, and
            compliance with tax regulations for both consumers and businesses.
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
                q: "What items are subject to excise tax?",
                a: "Common items include gasoline, diesel, cigarettes, alcohol (beer, wine, spirits), airline tickets, firearms, ammunition, tires, and certain luxury goods. Some states also tax soda, sugary drinks, and marijuana.",
              },
              {
                q: "How is excise tax different from sales tax?",
                a: "Excise tax is a per-unit tax on specific goods, typically included in the price. Sales tax is a percentage applied to most retail purchases at the point of sale. Excise taxes are often hidden in the price.",
              },
              {
                q: "Who pays excise tax?",
                a: "Excise taxes are typically paid by the manufacturer or distributor, but the cost is passed to consumers through higher prices. Some excise taxes are paid directly by consumers at the point of sale.",
              },
              {
                q: "What are federal excise tax rates?",
                a: "Rates vary by product. For example, federal tax is $0.184 per gallon of gasoline, $1.01 per pack of cigarettes, and varies by alcohol type. Check IRS publications for current rates.",
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
            Use the Excise Tax Calculator to understand the tax component of
            specific goods. Understanding excise taxes helps with budgeting and
            compliance for both consumers and businesses.
          </p>
        </section>
      </div>
    </article>
  );
}
