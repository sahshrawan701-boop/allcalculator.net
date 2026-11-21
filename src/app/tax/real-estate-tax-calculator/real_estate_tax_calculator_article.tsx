import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RealEstateTaxArticle() {
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
          <span className="meta-tag">Tax · Real Estate</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Real Estate Tax Calculator: Calculate Real Estate Tax
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to real estate tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Real estate taxes include property tax, capital gains tax on property sales,
            and potentially other taxes depending on your real estate activities. Property
            tax is an annual tax based on assessed value, while capital gains tax applies
            when you sell property for a profit. Understanding real estate taxes helps
            investors and homeowners plan for tax obligations.
          </p>
          <p className="mb-5">
            A Real Estate Tax Calculator estimates your tax liability on real estate
            including annual property tax and capital gains tax on sales. This tool is
            essential for real estate investors and homeowners to understand their tax
            obligations and plan accordingly.
          </p>
          <p>
            Proper real estate tax planning can significantly reduce your tax liability
            through strategies like 1031 exchanges and primary residence exclusions.
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
                q: "What taxes apply to real estate?",
                a: "Real estate taxes include annual property tax, capital gains tax on sales, transfer tax (in some jurisdictions), and potentially rental income tax. Investment properties may also be subject to depreciation recapture tax.",
              },
              {
                q: "What is the capital gains exclusion on primary residence?",
                a: "You can exclude up to $250,000 ($500,000 married) of capital gains on the sale of your primary residence if you owned and lived in it for 2 of the last 5 years before the sale.",
              },
              {
                q: "What is a 1031 exchange?",
                a: "A 1031 exchange allows you to defer capital gains tax by reinvesting proceeds from a property sale into a like-kind property. This is a powerful tool for real estate investors to build wealth tax-deferred.",
              },
              {
                q: "How is rental income taxed?",
                a: "Rental income is taxed as ordinary income. You can deduct expenses like mortgage interest, property tax, operating expenses, and depreciation. Net rental income is subject to income tax and potentially the 3.8% Net Investment Income Tax.",
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
            Use the Real Estate Tax Calculator to understand your real estate tax
            obligations. Strategic planning can minimize real estate taxes and
            maximize investment returns.
          </p>
        </section>
      </div>
    </article>
  );
}
