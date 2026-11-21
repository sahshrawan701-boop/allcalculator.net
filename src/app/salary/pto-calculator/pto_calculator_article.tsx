import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PTOArticle() {
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
          <span className="meta-tag">Salary · PTO</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            PTO Calculator: Calculate Paid Time Off
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to PTO and vacation time calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Paid Time Off (PTO) is a valuable employee benefit that provides paid leave
            for vacation, sick days, and personal time. PTO accrual rates vary by
            employer, tenure, and position. Understanding your PTO accrual helps you
            plan vacations, track your balance, and ensure you're using this benefit
            effectively.
          </p>
          <p className="mb-5">
            A PTO Calculator estimates your PTO accrual based on your employer's policy,
            hours worked, and tenure. This tool is essential for employees to track
            their vacation time and plan time off throughout the year.
          </p>
          <p>
            Understanding PTO policies helps you maximize this benefit and maintain
            a healthy work-life balance.
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
                q: "How is PTO typically accrued?",
                a: "PTO commonly accrues at a rate of hours worked per pay period. Typical rates range from 0.038-0.077 hours per hour worked (equivalent to 10-20 days annually).",
              },
              {
                q: "Does unused PTO roll over?",
                a: "This depends on employer policy. Some companies allow full rollover, some have caps, and others have use-it-or-lose-it policies. Check your employee handbook.",
              },
              {
                q: "Is PTO paid out when you leave?",
                a: "In many states, unused PTO must be paid out upon termination. However, this varies by state law and employer policy. Check your local regulations.",
              },
              {
                q: "What's the difference between PTO and vacation?",
                a: "PTO is a combined bucket for vacation, sick days, and personal time. Traditional policies separate vacation and sick time. PTO offers more flexibility but less dedicated sick leave.",
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
            Use the PTO Calculator to track your paid time off accrual and plan
            your vacations. Understanding PTO policies helps you maximize this
            valuable benefit.
          </p>
        </section>
      </div>
    </article>
  );
}
