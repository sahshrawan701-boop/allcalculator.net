import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TakeHomePayArticle() {
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
          <span className="meta-tag">Salary · Take-Home Pay</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Take-Home Pay Calculator: Calculate Your Net Pay
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to take-home pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Take-home pay, also called net pay, is the amount you actually receive after
            all deductions are taken from your gross pay. This includes federal and state
            taxes, Social Security, Medicare, insurance premiums, retirement contributions,
            and other withholdings. Take-home pay is what you can actually spend and save.
          </p>
          <p className="mb-5">
            A Take-Home Pay Calculator estimates your net pay based on your gross earnings,
            filing status, location, and benefit elections. This tool is essential for
            budgeting, loan applications, and understanding your actual disposable income.
          </p>
          <p>
            Understanding your take-home pay helps you create realistic budgets and
            make informed financial decisions.
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
                q: "What deductions reduce take-home pay?",
                a: "Common deductions include federal income tax, state income tax, Social Security (6.2%), Medicare (1.45%), health insurance, retirement contributions, and other voluntary deductions.",
              },
              {
                q: "How can I increase my take-home pay?",
                a: "Options include adjusting tax withholding, reducing voluntary deductions, increasing gross pay through raises or additional income, or maximizing pre-tax benefits.",
              },
              {
                q: "Why is my take-home pay lower than expected?",
                a: "Take-home pay is typically 70-85% of gross pay. If it's lower, check for additional deductions, correct tax withholding, or benefit contributions you may have forgotten.",
              },
              {
                q: "Does take-home pay vary each paycheck?",
                a: "Yes, it can vary due to changes in hours worked, overtime, bonuses, changes in deductions, or adjustments in tax withholding throughout the year.",
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
            Use the Take-Home Pay Calculator to understand your net pay after all
            deductions. Knowing your take-home pay is essential for accurate budgeting
            and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
