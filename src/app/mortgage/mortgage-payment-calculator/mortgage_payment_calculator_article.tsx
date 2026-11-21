import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MortgagePaymentArticle() {
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

        .formula-block {
          font-family: 'Courier New', monospace;
          background: #f8fafc;
          border-left: 3px solid var(--primary-dk);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 1rem;
          color: #1e293b;
          overflow-x: auto;
        }
        .dark .formula-block {
          background: #1e293b;
          border-left-color: var(--primary);
          color: #e2e8f0;
        }
        .formula-block pre {
          margin: 0;
          font-family: inherit;
          white-space: pre-wrap;
        }

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
          <span className="meta-tag">Mortgage · Monthly Payments</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Mortgage Payment Calculator: Estimate Your Monthly Payment
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to mortgage payments and PITI
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your monthly mortgage payment is more than just principal and interest—it
            also includes property taxes, homeowners insurance, and possibly mortgage
            insurance and HOA fees. Understanding your total monthly housing cost is
            essential for budgeting and determining affordability.
          </p>
          <p className="mb-5">
            A Mortgage Payment Calculator estimates your total monthly payment including
            principal, interest, taxes, and insurance (PITI). This tool is essential for
            homebuyers budgeting for a purchase and homeowners planning their monthly
            expenses.
          </p>
          <p>
            Understanding how loan amount, interest rate, term, and taxes affect your
            payment helps you make informed decisions about your home financing.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Monthly Payment Formula
          </h2>
          <div className="formula-block">
            <pre>{`M = P[r(1+r)^n]/[(1+r)^n-1]

Where:
M = Monthly payment
P = Principal loan amount
r = Monthly interest rate (annual rate / 12)
n = Total number of payments (years × 12)

Add to M:
- Property taxes (monthly)
- Homeowners insurance (monthly)
- PMI (if applicable)
- HOA fees (if applicable)`}</pre>
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is PITI?",
                a: "PITI stands for Principal, Interest, Taxes, and Insurance—the four components of your total monthly mortgage payment. This represents your complete housing cost.",
              },
              {
                q: "How much should my mortgage payment be?",
                a: "Financial experts recommend your housing payment not exceed 28-30% of your gross monthly income. Lenders typically use 28% as a qualification guideline.",
              },
              {
                q: "Are property taxes included in my payment?",
                a: "Most lenders collect property taxes monthly as part of your payment and hold them in escrow to pay the tax bill when due. This spreads the cost throughout the year.",
              },
              {
                q: "When does PMI go away?",
                a: "For conventional loans, PMI is automatically removed when you reach 22% equity based on the original payment schedule, or you can request removal at 20% equity.",
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
            Use the Mortgage Payment Calculator to estimate your total monthly housing
            cost. Understanding your complete payment helps you budget effectively and
            make informed home buying decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
