import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MinimumWageArticle() {
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
          <span className="meta-tag">Salary · Minimum Wage</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Minimum Wage Calculator: Calculate Minimum Wage Earnings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to minimum wage calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Minimum wage is the lowest legal remuneration that employers can pay their
            workers. Rates vary by federal, state, and local jurisdictions, with many
            areas setting higher minimums than the federal baseline. Understanding
            minimum wage helps ensure fair compensation and compliance with labor laws.
          </p>
          <p className="mb-5">
            A Minimum Wage Calculator calculates earnings based on federal, state, or
            local minimum wage rates. This tool is essential for employees, employers,
            and anyone concerned with fair labor practices and wage compliance.
          </p>
          <p>
            Knowing minimum wage rates in your area helps ensure you're receiving
            fair pay and helps employers maintain compliance with labor regulations.
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
                q: "What is the current federal minimum wage?",
                a: "The federal minimum wage in the United States is $7.25 per hour as of 2024. It hasn't changed since 2009. Many states and cities have higher minimum wages.",
              },
              {
                q: "Which minimum wage applies to me?",
                a: "You're entitled to the highest minimum wage that applies: federal, state, or local. For example, if your state minimum is $15 and federal is $7.25, you get $15.",
              },
              {
                q: "Are there exceptions to minimum wage?",
                a: "Some exceptions exist for tipped workers (lower cash wage with tip credit), young workers, students, and certain small businesses. Rules vary by jurisdiction.",
              },
              {
                q: "How often does minimum wage change?",
                a: "Federal minimum wage requires congressional action to change. State and local minimum wages may change annually based on inflation or legislation.",
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
            Use the Minimum Wage Calculator to understand wage requirements and ensure
            fair compensation. Knowing applicable minimum wage rates is essential for
            both employees and employers.
          </p>
        </section>
      </div>
    </article>
  );
}
