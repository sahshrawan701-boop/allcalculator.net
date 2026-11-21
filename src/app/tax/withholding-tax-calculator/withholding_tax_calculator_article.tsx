import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WithholdingTaxArticle() {
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
          <span className="meta-tag">Tax · Withholding</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Withholding Tax Calculator: Calculate Withholding Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to withholding tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Withholding tax is tax deducted at source from certain types of income,
            including dividends, interest, royalties, and payments to foreign entities.
            The purpose is to ensure tax collection from non-residents or on income that
            might otherwise go untaxed. Rates vary by country, type of income, and tax
            treaties. Understanding withholding tax is essential for international
            investors and businesses.
          </p>
          <p className="mb-5">
            A Withholding Tax Calculator estimates the withholding tax on various types
            of income based on the source country, recipient's tax status, and applicable
            tax treaties. This tool helps investors and businesses understand their
            tax obligations on cross-border income.
          </p>
          <p>
            Tax treaties can reduce or eliminate withholding tax between certain
            countries, making proper documentation essential.
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
                q: "What types of income are subject to withholding tax?",
                a: "Common types include dividends, interest, royalties, rent, payments for services, and capital gains on certain assets. The specific types subject to withholding vary by country.",
              },
              {
                q: "What are typical withholding tax rates?",
                a: "Rates vary widely by country and income type. Without treaty benefits, rates can be 15-30% on dividends and interest. Tax treaties often reduce these rates, sometimes to 0% for certain payments.",
              },
              {
                q: "How do tax treaties affect withholding tax?",
                a: "Tax treaties between countries can reduce or eliminate withholding tax. To claim treaty benefits, recipients typically need to provide documentation like Form W-8BEN for U.S. withholding.",
              },
              {
                q: "Can withholding tax be credited against domestic tax?",
                a: "Yes, in most cases, withholding tax paid to a foreign country can be credited against domestic tax liability on the same income, preventing double taxation. This is known as a foreign tax credit.",
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
            Use the Withholding Tax Calculator to understand tax obligations on
            cross-border income. Proper documentation and treaty planning can
            significantly reduce withholding tax.
          </p>
        </section>
      </div>
    </article>
  );
}
