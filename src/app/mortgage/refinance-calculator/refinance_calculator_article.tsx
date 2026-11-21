import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RefinanceArticle() {
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
          <span className="meta-tag">Mortgage · Refinancing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Refinance Calculator: Should You Refinance Your Mortgage?
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to mortgage refinancing and savings analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Refinancing your mortgage means replacing your existing loan with a new one,
            typically to secure a lower interest rate, change your loan term, or tap
            your home equity. While refinancing can save money over time, it involves
            closing costs that must be weighed against potential savings.
          </p>
          <p className="mb-5">
            A Refinance Calculator helps you determine if refinancing makes financial
            sense by comparing your current loan to potential new terms. This tool is
            essential for homeowners considering refinancing to lower payments, shorten
            their loan term, or access home equity.
          </p>
          <p>
            Understanding break-even points, closing costs, and when refinancing is
            beneficial helps you make informed decisions about your mortgage strategy.
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
                q: "What is the break-even point?",
                a: "The break-even point is when your monthly savings equal your closing costs. For example, if closing costs are $3,000 and you save $150/month, your break-even point is 20 months.",
              },
              {
                q: "How much does refinancing cost?",
                a: "Refinancing typically costs 2-5% of the loan amount in closing costs. This includes appraisal, title insurance, origination fees, and other lender charges.",
              },
              {
                q: "When should I refinance?",
                a: "Consider refinancing when rates drop at least 0.5-1% below your current rate, your credit has improved, or you want to change your loan term. Calculate the break-even point first.",
              },
              {
                q: "Can I refinance with no closing costs?",
                a: "Some lenders offer no-closing-cost refinancing, but they typically charge a higher interest rate to cover these costs. You pay the costs over time through higher payments.",
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
            Use the Refinance Calculator to determine if refinancing makes sense for
            your situation. Understanding the costs and benefits helps you make a
            confident decision about your mortgage.
          </p>
        </section>
      </div>
    </article>
  );
}
