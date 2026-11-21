import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function OvertimeArticle() {
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
          <span className="meta-tag">Salary · Overtime</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Overtime Calculator: Calculate Overtime Pay
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to overtime calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Overtime pay is additional compensation for hours worked beyond the standard
            workweek. Under federal law (FLSA), non-exempt employees must receive
            overtime pay at least 1.5 times their regular rate for hours over 40 in a
            workweek. Some states and jobs have additional overtime requirements.
          </p>
          <p className="mb-5">
            An Overtime Calculator calculates your total pay including overtime hours
            at premium rates. This tool is essential for hourly employees to understand
            their earnings when working extra hours and for employers calculating
            overtime costs.
          </p>
          <p>
            Understanding overtime rules and calculations helps ensure you're paid
            correctly for all hours worked and helps employers maintain compliance
            with labor laws.
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
                q: "What is the standard overtime rate?",
                a: "Federal law requires overtime at 1.5x (time-and-a-half) regular rate for hours over 40 in a workweek. Some states require double-time for certain conditions.",
              },
              {
                q: "Who is eligible for overtime?",
                a: "Non-exempt employees are eligible for overtime. Exempt employees (typically salaried professionals, managers, and administrative staff) are not eligible under federal law.",
              },
              {
                q: "How is overtime calculated?",
                a: "Overtime pay = (Regular hourly rate × 1.5) × Overtime hours. For example, $20/hour × 1.5 × 10 overtime hours = $300 overtime pay.",
              },
              {
                q: "Can overtime be mandatory?",
                a: "Yes, employers can generally require overtime, though some states have restrictions. Refusal may be grounds for discipline depending on company policy.",
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
            Use the Overtime Calculator to understand your total pay with overtime
            hours. Knowing overtime calculations ensures accurate compensation
            and compliance with labor laws.
          </p>
        </section>
      </div>
    </article>
  );
}
