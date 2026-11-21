import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxFreedomDayArticle() {
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
          <span className="meta-tag">Tax · Freedom Day</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax Freedom Day Calculator: Calculate Your Tax Freedom Day
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to Tax Freedom Day calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax Freedom Day is the day when the average American has earned enough money
            to pay all federal, state, and local taxes for the year. In 2024, Tax
            Freedom Day fell on April 16, meaning Americans worked 106 days just to pay
            taxes. The date varies by state due to differences in tax burdens and
            individual circumstances.
          </p>
          <p className="mb-5">
            A Tax Freedom Day Calculator estimates your personal Tax Freedom Day
            based on your income, tax burden, and location. This tool helps you
            understand what portion of your working year goes toward taxes and how
            your situation compares to national averages.
          </p>
          <p>
            Your personal Tax Freedom Day may differ significantly from the national
            average depending on your income level and state of residence.
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
                q: "How is Tax Freedom Day calculated?",
                a: "Tax Freedom Day is calculated by dividing total tax collections by total national income, then multiplying by 365. This gives the number of days worked to pay taxes. For individuals, it's calculated based on your personal tax burden as a percentage of income.",
              },
              {
                q: "What taxes are included in Tax Freedom Day?",
                a: "Tax Freedom Day includes all federal, state, and local taxes: income taxes, payroll taxes, sales taxes, property taxes, excise taxes, estate taxes, and other taxes. It represents your total tax burden.",
              },
              {
                q: "Which states have the earliest and latest Tax Freedom Days?",
                a: "States with no income tax like Alaska, Florida, and Tennessee typically have the earliest Tax Freedom Days (early April). High-tax states like New York, California, and Connecticut typically have the latest dates (late April or early May).",
              },
              {
                q: "How can I move my Tax Freedom Day earlier?",
                a: "Strategies include reducing taxable income through deductions, moving to a lower-tax state, investing in tax-advantaged accounts, maximizing tax credits, and optimizing your investment strategy for tax efficiency.",
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
            Use the Tax Freedom Day Calculator to understand your personal tax burden.
            Knowing your Tax Freedom Day provides perspective on the portion of
            your income that goes to taxes.
          </p>
        </section>
      </div>
    </article>
  );
}
