import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SmallBusinessTaxArticle() {
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
          <span className="meta-tag">Tax · Small Business</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Small Business Tax Calculator: Calculate Small Business Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to small business tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Small business taxes include federal income tax, self-employment tax,
            payroll taxes (if you have employees), state income tax, and potentially
            state-specific business taxes. The tax burden depends on your business
            structure (sole proprietorship, LLC, S corp, C corp) and profitability.
            Understanding small business taxes is essential for financial planning.
          </p>
          <p className="mb-5">
            A Small Business Tax Calculator estimates your total tax liability based
            on business income, expenses, and entity type. This tool helps small
            business owners understand their tax obligations and plan for estimated
            payments.
          </p>
          <p>
            Choosing the right business structure and taking advantage of deductions
            can significantly reduce your small business tax liability.
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
                q: "What business structure is best for taxes?",
                a: "Sole proprietorships and partnerships offer pass-through taxation. LLCs provide flexibility in tax treatment. S corps can save on self-employment tax. C corps face double taxation but have lower corporate rates. The best choice depends on your specific situation.",
              },
              {
                q: "What deductions can small businesses claim?",
                a: "Common deductions include home office, equipment, software, marketing, travel, meals (50%), insurance, utilities, rent, and wages. Keep detailed records of all business expenses.",
              },
              {
                q: "What is the qualified business income (QBI) deduction?",
                a: "The QBI deduction allows eligible pass-through businesses to deduct up to 20% of qualified business income. It's subject to income limits and requirements based on the type of business.",
              },
              {
                q: "When are small business taxes due?",
                a: "Pass-through businesses file by April 15 (or the extended deadline). C corporations file by the 15th day of the 4th month after year-end. Estimated taxes are due quarterly regardless of business type.",
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
            Use the Small Business Tax Calculator to estimate your tax liability and
            plan accordingly. Proper tax planning is essential for small business
            success and compliance.
          </p>
        </section>
      </div>
    </article>
  );
}
