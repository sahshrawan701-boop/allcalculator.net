import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HomeEquityLoanArticle() {
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
          <span className="meta-tag">Mortgage · Home Equity</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Home Equity Loan Calculator: Tap Your Home's Value
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to home equity loans and borrowing
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Home equity loans allow homeowners to borrow against the equity they've
            built in their property. As you pay down your mortgage and your home value
            increases, you accumulate equity that can be accessed for major expenses
            like home improvements, debt consolidation, or education costs.
          </p>
          <p className="mb-5">
            A Home Equity Loan Calculator helps estimate how much you can borrow based
            on your home's current value and outstanding mortgage balance. This tool is
            essential for homeowners considering tapping their home equity for major
            financial needs.
          </p>
          <p>
            Understanding loan-to-value ratios, interest rates, and the differences
            between home equity loans and HELOCs helps you make informed borrowing
            decisions.
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
                q: "What's the difference between a home equity loan and HELOC?",
                a: "A home equity loan is a lump-sum loan with fixed payments. A HELOC is a revolving credit line with variable payments, similar to a credit card secured by your home.",
              },
              {
                q: "How much can I borrow?",
                a: "Most lenders allow borrowing up to 80-85% of your home's value minus your mortgage balance. This is your available equity. Lenders also consider credit and income.",
              },
              {
                q: "Are home equity loans tax deductible?",
                a: "Interest may be deductible if the funds are used to buy, build, or substantially improve your home. Consult a tax advisor for your specific situation.",
              },
              {
                q: "What are the risks of home equity loans?",
                a: "Your home secures the loan, so default could lead to foreclosure. Also, declining home values could reduce your equity. Consider these risks before borrowing.",
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
            Use the Home Equity Loan Calculator to estimate your borrowing capacity
            and understand potential payments. Tapping home equity can be a smart
            financial strategy when used responsibly.
          </p>
        </section>
      </div>
    </article>
  );
}
