import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BiweeklyMortgageArticle() {
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
          <span className="meta-tag">Mortgage · Payment Strategies</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Biweekly Mortgage Calculator: Pay Off Your Loan Faster
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to biweekly mortgage payments and savings
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Biweekly mortgage payments involve making half your monthly payment every two
            weeks instead of one full payment monthly. This results in 26 half-payments
            per year, equivalent to 13 full payments—one extra payment annually. This
            simple strategy can significantly shorten your loan term and reduce total interest.
          </p>
          <p className="mb-5">
            A Biweekly Mortgage Calculator shows how much you can save in interest and
            how much faster you can pay off your loan by switching to biweekly payments.
            This tool is essential for homeowners looking to build equity faster and save
            money on interest.
          </p>
          <p>
            Understanding biweekly payment benefits helps you make strategic decisions
            about accelerating your mortgage payoff without dramatically changing your
            monthly budget.
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
                q: "How much can I save with biweekly payments?",
                a: "Most homeowners save 3-5 years of payments and thousands in interest. Exact savings depend on your loan balance, rate, and remaining term.",
              },
              {
                q: "Do all lenders offer biweekly payment options?",
                a: "Not all lenders offer official biweekly programs. You can achieve the same effect by making extra principal payments equal to 1/12 of your monthly payment.",
              },
              {
                q: "Are there fees for biweekly payment programs?",
                a: "Some lenders charge setup fees for official biweekly programs. You can avoid fees by manually making extra principal payments instead.",
              },
              {
                q: "Can I switch back to monthly payments?",
                a: "If you're in an official biweekly program, check with your lender. If you're making extra payments manually, you can stop anytime without penalty.",
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
            Use the Biweekly Mortgage Calculator to see how much you can save by making
            biweekly payments. This simple strategy can help you pay off your mortgage
            faster and build equity sooner.
          </p>
        </section>
      </div>
    </article>
  );
}
