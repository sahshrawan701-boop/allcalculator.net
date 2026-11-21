import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ShiftDifferentialArticle() {
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
          <span className="meta-tag">Salary · Shift Differential</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Shift Differential Calculator: Calculate Shift Differential Pay
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to shift differential calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Shift differential is additional pay for working shifts outside normal
            daytime hours. This includes night shifts, weekend shifts, holiday shifts,
            and other non-standard schedules. Shift differentials compensate employees
            for working less desirable hours and help employers staff around-the-clock
            operations.
          </p>
          <p className="mb-5">
            A Shift Differential Calculator calculates your earnings including shift
            differential premiums for various shift types. This tool is essential for
            employees working non-standard shifts to understand their total compensation.
          </p>
          <p>
            Understanding shift differential policies helps you make informed decisions
            about shift work and maximize your earnings.
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
                q: "What are common shift differential rates?",
                a: "Common differentials include 10-20% for evening shifts, 15-25% for night shifts, and additional premiums for weekends and holidays. Rates vary by industry and employer.",
              },
              {
                q: "What shifts qualify for differential pay?",
                a: "Qualifying shifts typically include evening (after 6 PM), night (11 PM-6 AM), weekend, and holiday shifts. Definitions vary by employer policy.",
              },
              {
                q: "Is shift differential required by law?",
                a: "Federal law doesn't require shift differential. Some states have requirements for certain industries, but typically it's determined by employer policy or union contracts.",
              },
              {
                q: "How does shift differential affect overtime?",
                a: "Shift differential is typically included in the regular rate for calculating overtime. Overtime is then 1.5x the regular rate including differential.",
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
            Use the Shift Differential Calculator to understand your earnings with
            shift premiums. Knowing shift differential rates helps you make informed
            decisions about non-standard work schedules.
          </p>
        </section>
      </div>
    </article>
  );
}
