import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SalesTaxArticle() {
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
          <span className="meta-tag">Tax · Sales</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Sales Tax Calculator: Calculate Sales Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to sales tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Sales tax is a consumption tax levied on the sale of goods and services. In
            the U.S., sales tax rates vary by state and locality, with some states having
            no sales tax and others having rates above 10%. Sales tax is typically added
            at the point of sale and collected by retailers on behalf of the government.
            Understanding sales tax helps with budgeting and price comparisons.
          </p>
          <p className="mb-5">
            A Sales Tax Calculator calculates the sales tax on purchases based on the
            price and applicable tax rate. This tool is essential for consumers to
            understand the total cost of purchases and for businesses to ensure proper
            tax collection.
          </p>
          <p>
            Sales tax rates can vary significantly by location, so knowing the local
            rate is important for accurate calculations.
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
                q: "What states have no sales tax?",
                a: "As of 2024, five states have no statewide sales tax: Alaska, Delaware, Montana, New Hampshire, and Oregon. However, some local jurisdictions in these states may impose local sales taxes.",
              },
              {
                q: "What is the highest sales tax rate in the U.S.?",
                a: "Combined state and local sales tax rates can exceed 10% in some areas. California has the highest state rate at 7.25%, but when combined with local taxes, some areas reach over 10%.",
              },
              {
                q: "Are online purchases subject to sales tax?",
                a: "Yes, following the 2018 South Dakota v. Wayfair Supreme Court decision, online retailers must collect sales tax in states where they have economic nexus, even if they have no physical presence.",
              },
              {
                q: "What items are exempt from sales tax?",
                a: "Common exemptions include groceries (in many states), prescription drugs, medical devices, and sometimes clothing. Exemptions vary significantly by state, so check local laws.",
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
            Use the Sales Tax Calculator to understand the tax component of your
            purchases. Knowing sales tax rates helps with budgeting and price
            comparisons across different locations.
          </p>
        </section>
      </div>
    </article>
  );
}
