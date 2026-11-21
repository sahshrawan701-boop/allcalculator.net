import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FHALoanArticle() {
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
          <span className="meta-tag">Mortgage · FHA Loans</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            FHA Loan Calculator: Federal Housing Administration Loans
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to FHA loans and mortgage insurance
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            FHA loans are government-backed mortgages designed to make homeownership
            more accessible, especially for first-time buyers and those with lower
            credit scores or limited down payment funds. With lower down payment
            requirements and more flexible credit guidelines, FHA loans open doors
            for many who might not qualify for conventional financing.
          </p>
          <p className="mb-5">
            An FHA Loan Calculator helps estimate your monthly payments including
            FHA mortgage insurance premiums (MIP), which are required on all FHA loans.
            This tool is essential for anyone considering an FHA loan to understand
            the total cost including both upfront and annual mortgage insurance.
          </p>
          <p>
            Understanding FHA loan requirements, mortgage insurance costs, and how
            they compare to conventional loans helps you make the best financing
            decision for your situation.
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
                q: "What are FHA loan requirements?",
                a: "FHA loans require a minimum 580 credit score for 3.5% down payment, or 500-579 for 10% down. You must have a steady employment history and debt-to-income ratio below 43%.",
              },
              {
                q: "What is FHA mortgage insurance (MIP)?",
                a: "FHA loans require upfront MIP (1.75% of loan amount) and annual MIP (0.45-1.05% annually). Annual MIP is paid for the life of the loan in most cases.",
              },
              {
                q: "Can I remove FHA mortgage insurance?",
                a: "For FHA loans originated after 2013, MIP remains for the life of the loan if your down payment was less than 10%. With 10%+ down, MIP can be removed after 11 years.",
              },
              {
                q: "How do FHA loans compare to conventional loans?",
                a: "FHA loans have easier qualification but require mortgage insurance for longer. Conventional loans may offer lower rates for good credit and allow PMI removal with 20% equity.",
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
            Use the FHA Loan Calculator to understand your monthly payments including
            mortgage insurance. FHA loans provide an accessible path to homeownership
            for many borrowers who don't qualify for conventional financing.
          </p>
        </section>
      </div>
    </article>
  );
}
