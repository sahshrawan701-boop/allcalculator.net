import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BusinessTaxArticle() {
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
          <span className="meta-tag">Tax · Business</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Business Tax Calculator: Calculate Business Tax Liability
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to business tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Business taxes encompass federal income tax, state income tax, payroll taxes,
            and potentially other taxes depending on your business structure and location.
            Understanding your total business tax liability is essential for cash flow
            planning, pricing decisions, and overall business strategy.
          </p>
          <p className="mb-5">
            A Business Tax Calculator estimates your total tax liability based on
            business income, expenses, and entity type. This tool is essential for
            business owners, entrepreneurs, and anyone planning or operating a business
            to understand their tax obligations.
          </p>
          <p>
            Proper tax planning helps businesses optimize their tax position, ensure
            compliance, and avoid penalties for underpayment or late filing.
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
                q: "What taxes do businesses pay?",
                a: "Businesses typically pay federal and state income taxes, payroll taxes (Social Security, Medicare), unemployment taxes, and potentially sales tax, property tax, and industry-specific taxes.",
              },
              {
                q: "How does business structure affect taxes?",
                a: "Sole proprietorships report business income on personal tax returns. LLCs can be taxed as sole proprietorships, partnerships, or corporations. Corporations pay corporate tax (21%) plus potential dividends tax.",
              },
              {
                q: "What are quarterly estimated taxes?",
                a: "Businesses must pay estimated taxes quarterly (April, June, September, January) to cover income tax and self-employment tax. Underpayment can result in penalties.",
              },
              {
                q: "What business expenses are tax-deductible?",
                a: "Ordinary and necessary business expenses are deductible, including rent, utilities, supplies, equipment, marketing, travel, and employee wages. Personal expenses are not deductible.",
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
            Use the Business Tax Calculator to estimate your tax liability and plan
            for tax payments. Proper tax planning is essential for business success
            and compliance.
          </p>
        </section>
      </div>
    </article>
  );
}
