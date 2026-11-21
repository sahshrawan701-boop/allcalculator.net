import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function NightShiftPayArticle() {
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
            Night Shift Pay Calculator: Calculate Night Shift Differential
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to night shift pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Night shift differential is additional pay for working hours outside normal
            daytime hours, typically between 11 PM and 6 AM. Many employers offer
            premium pay rates for night shifts to compensate for the less desirable
            hours and potential health impacts of working overnight.
          </p>
          <p className="mb-5">
            A Night Shift Pay Calculator calculates your earnings including night
            shift differential premiums. This tool is essential for employees working
            night shifts to understand their total compensation and for employers
            calculating shift differential costs.
          </p>
          <p>
            Understanding night shift pay policies helps you make informed decisions
            about overnight work and maximize your earnings.
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
                q: "What is typical night shift differential?",
                a: "Common differentials range from 10-20% above base pay, though some jobs offer flat hourly premiums. Union contracts and industry standards often determine rates.",
              },
              {
                q: "What hours qualify for night shift pay?",
                a: "Definitions vary by employer. Common definitions include hours between 11 PM-6 AM, 10 PM-6 AM, or any hours outside 8 AM-5 PM. Check your employer's policy.",
              },
              {
                q: "Is night shift pay required by law?",
                a: "Federal law doesn't require night shift differential. Some states have requirements, but typically it's determined by employer policy or union contracts.",
              },
              {
                q: "Does night shift pay affect overtime?",
                a: "Night shift differential is typically included in the regular rate for calculating overtime. Overtime is then 1.5x the regular rate including differential.",
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
            Use the Night Shift Pay Calculator to understand your earnings with
            shift differential. Knowing night shift pay rates helps you make
            informed decisions about overnight work.
          </p>
        </section>
      </div>
    </article>
  );
}
