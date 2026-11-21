import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HolidayPayArticle() {
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
          <span className="meta-tag">Salary · Holiday Pay</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Holiday Pay Calculator: Calculate Holiday Pay Rates
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to holiday pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Holiday pay refers to additional compensation for working on federal holidays
            or paid time off for holidays. Pay rates vary by employer, industry, and
            location, with some offering premium pay (time-and-a-half or double-time)
            for holiday work. Understanding holiday pay policies helps you plan
            your work schedule and earnings.
          </p>
          <p className="mb-5">
            A Holiday Pay Calculator calculates your earnings for holiday work based on
            your regular rate and the holiday premium. This tool is essential for
            employees who work holidays to understand their compensation and for
            employers calculating holiday payroll costs.
          </p>
          <p>
            Understanding holiday pay regulations and company policies helps you make
            informed decisions about working holidays and maximize your earnings.
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
                q: "Is holiday pay required by law?",
                a: "Federal law doesn't require holiday pay or paid holidays. However, some states have requirements. Most holiday pay is determined by employer policy or union contracts.",
              },
              {
                q: "What are common holiday pay rates?",
                a: "Common rates include time-and-a-half (1.5x), double-time (2x), or regular pay plus a bonus. Some employers offer paid time off instead of premium pay.",
              },
              {
                q: "Which holidays are typically recognized?",
                a: "Common federal holidays include New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. Employers may recognize additional holidays.",
              },
              {
                q: "Do part-time employees get holiday pay?",
                a: "This depends on employer policy. Some companies prorate holiday pay for part-time employees, while others only offer it to full-time staff.",
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
            Use the Holiday Pay Calculator to understand your earnings for holiday work.
            Knowing holiday pay rates helps you make informed decisions about working
            holidays.
          </p>
        </section>
      </div>
    </article>
  );
}
