import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PaycheckArticle() {
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
          <span className="meta-tag">Salary · Paycheck</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Paycheck Calculator: Calculate Your Take-Home Paycheck
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to paycheck calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your paycheck is the amount you actually receive after all deductions are
            taken from your gross pay. Understanding your paycheck breakdown helps you
            track where your money goes, plan your budget, and ensure you're being
            paid correctly. Paychecks vary based on pay period, tax withholding, and
            benefit elections.
          </p>
          <p className="mb-5">
            A Paycheck Calculator estimates your net pay based on your gross earnings,
            filing status, and deductions. This tool is essential for employees to
            understand their take-home pay and plan their finances accordingly.
          </p>
          <p>
            Understanding your paycheck helps you make informed decisions about
            tax withholding, benefit contributions, and overall financial planning.
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
                q: "What information is on a paycheck stub?",
                a: "Paycheck stubs show gross pay, net pay, tax withholdings (federal, state, local), Social Security, Medicare, benefit deductions, and year-to-date totals.",
              },
              {
                q: "How can I increase my net paycheck?",
                a: "Options include adjusting tax withholding, reducing voluntary deductions, or increasing gross pay. However, reducing pre-tax deductions may increase taxable income.",
              },
              {
                q: "Why does my paycheck vary?",
                a: "Paychecks vary due to hours worked (for hourly employees), overtime, bonuses, changes in deductions, or adjustments in tax withholding throughout the year.",
              },
              {
                q: "What if my paycheck is wrong?",
                a: "Review your paycheck stub carefully and contact payroll immediately if you find errors. Common issues include incorrect hours, wrong tax withholding, or missing deductions.",
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
            Use the Paycheck Calculator to understand your take-home pay and plan
            your budget. Knowing your paycheck details helps ensure accurate
            compensation and effective financial management.
          </p>
        </section>
      </div>
    </article>
  );
}
