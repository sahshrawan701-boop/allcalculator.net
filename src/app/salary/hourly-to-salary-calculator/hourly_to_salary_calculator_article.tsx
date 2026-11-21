import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function HourlyToSalaryArticle() {
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
          <span className="meta-tag">Salary · Hourly Conversion</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Hourly to Salary Calculator: Convert Hourly to Annual Salary
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to hourly to salary conversions
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Converting hourly pay to annual salary helps you understand your total
            earnings potential and compare job offers across different pay structures.
            Whether you're evaluating a new job offer, negotiating a raise, or planning
            your finances, knowing your equivalent annual salary provides valuable
            context for your compensation.
          </p>
          <p className="mb-5">
            An Hourly to Salary Calculator converts your hourly rate into annual,
            monthly, weekly, and biweekly equivalents based on standard full-time hours.
            This tool is essential for hourly employees comparing job offers or
            considering salary positions.
          </p>
          <p>
            Understanding the conversion helps you make informed career decisions and
            ensure you're being compensated fairly regardless of pay structure.
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
                q: "How do I convert hourly to annual salary?",
                a: "Multiply your hourly rate by 2,080 hours (40 hours × 52 weeks). For example, $25/hour × 2,080 = $52,000 annual salary. Adjust for different work hours.",
              },
              {
                q: "What is standard full-time hours?",
                a: "Standard full-time is 40 hours per week, or 2,080 hours annually. Some positions use 37.5 hours weekly (1,950 annually). Adjust calculations for your actual hours.",
              },
              {
                q: "Does hourly or salary pay more?",
                a: "Neither is inherently better. Salary provides stability and benefits but may include unpaid overtime. Hourly pays for all hours worked but may lack benefits. Compare total compensation.",
              },
              {
                q: "Should I include overtime in calculations?",
                a: "For accurate comparison, calculate base salary without overtime. Overtime varies by job and shouldn't be guaranteed. Use base rate for fair comparisons.",
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
            Use the Hourly to Salary Calculator to compare compensation across different
            pay structures. Understanding equivalent annual salary helps you make
            informed career decisions.
          </p>
        </section>
      </div>
    </article>
  );
}
