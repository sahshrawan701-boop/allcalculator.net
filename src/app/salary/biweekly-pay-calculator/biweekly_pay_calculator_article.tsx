import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BiweeklyPayArticle() {
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
          <span className="meta-tag">Salary · Pay Periods</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Biweekly Pay Calculator: Calculate Your Biweekly Paycheck
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to biweekly pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Biweekly pay means receiving a paycheck every two weeks, resulting in 26
            pay periods per year. This is one of the most common pay schedules in the
            United States. Understanding your biweekly pay helps with budgeting,
            bill timing, and financial planning.
          </p>
          <p className="mb-5">
            A Biweekly Pay Calculator converts your annual salary or hourly rate into
            biweekly paycheck amounts, accounting for taxes and deductions. This tool
            is essential for employees paid biweekly to understand their take-home pay
            and plan their expenses.
          </p>
          <p>
            Knowing your biweekly pay helps you align bill payments with your income
            schedule and manage cash flow effectively throughout the year.
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
                q: "How many biweekly paychecks in a year?",
                a: "There are 26 biweekly pay periods in a year. This means you'll receive 26 paychecks, which is equivalent to 13 months of pay over 12 months.",
              },
              {
                q: "What's the difference between biweekly and semimonthly?",
                a: "Biweekly means every two weeks (26 paychecks/year). Semimonthly means twice a month on specific dates (24 paychecks/year). Biweekly paychecks vary in date, semimonthly are fixed.",
              },
              {
                q: "How do I calculate biweekly pay from annual salary?",
                a: "Divide your annual salary by 26. For example, $52,000 annually ÷ 26 = $2,000 per biweekly paycheck before deductions.",
              },
              {
                q: "Why do some months have 3 biweekly paychecks?",
                a: "Since there are 26 biweekly periods in 52 weeks, some months will have 3 pay periods depending on how the calendar falls. This can be a budgeting opportunity.",
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
            Use the Biweekly Pay Calculator to understand your paycheck amount and
            plan your budget around your pay schedule. Understanding biweekly pay
            helps you manage cash flow effectively.
          </p>
        </section>
      </div>
    </article>
  );
}
