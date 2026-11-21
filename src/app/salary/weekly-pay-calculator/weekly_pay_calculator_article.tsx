import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WeeklyPayArticle() {
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
          <span className="meta-tag">Salary · Weekly Pay</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Weekly Pay Calculator: Calculate Weekly Earnings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to weekly pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Weekly pay is the amount you earn each week before deductions. It's a common
            pay period for hourly workers, temporary employees, and some contractors.
            Understanding your weekly pay helps with short-term budgeting, managing
            cash flow, and tracking earnings for irregular work schedules.
          </p>
          <p className="mb-5">
            A Weekly Pay Calculator converts hourly rates or annual salary into weekly
            earnings, accounting for hours worked and overtime. This tool is essential
            for hourly workers, freelancers, and anyone paid on a weekly basis.
          </p>
          <p>
            Knowing your weekly pay helps you manage day-to-day expenses and plan
            your budget around your income schedule.
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
                q: "How do I calculate weekly pay from hourly?",
                a: "Multiply your hourly rate by hours worked per week. For example, $20/hour × 40 hours = $800 weekly. Include overtime at 1.5x rate for hours over 40.",
              },
              {
                q: "How many weeks in a year for pay?",
                a: "There are 52 weeks in a year. Some years have 53 pay periods depending on how pay dates fall, but 52 is standard for calculations.",
              },
              {
                q: "Why does weekly pay vary?",
                a: "Weekly pay varies based on hours worked, overtime, bonuses, or changes in hourly rate. Salaried employees typically have consistent weekly pay.",
              },
              {
                q: "What's the difference between weekly and biweekly?",
                a: "Weekly pay is once per week (52 times/year). Biweekly is every two weeks (26 times/year). Biweekly paychecks are larger but less frequent.",
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
            Use the Weekly Pay Calculator to understand your weekly earnings and
            manage your cash flow. Weekly pay calculation is essential for
            short-term budgeting and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
