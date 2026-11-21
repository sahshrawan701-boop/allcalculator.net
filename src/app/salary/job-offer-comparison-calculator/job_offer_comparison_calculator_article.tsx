import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function JobOfferComparisonArticle() {
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
          <span className="meta-tag">Salary · Job Offers</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Job Offer Comparison Calculator: Compare Job Offers
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to comparing job offers and total compensation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Comparing job offers requires looking beyond base salary to understand total
          compensation. Benefits, bonuses, retirement contributions, paid time off,
          and other perks significantly impact the true value of an offer. A comprehensive
          comparison ensures you make the best career decision.
          </p>
          <p className="mb-5">
            A Job Offer Comparison Calculator helps you compare multiple job offers
            by calculating total compensation including salary, bonuses, benefits,
          and other perks. This tool is essential for anyone evaluating multiple
          employment opportunities.
          </p>
          <p>
            Understanding total compensation helps you make informed decisions about
          which offer truly provides the best value for your career and lifestyle.
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
                q: "What should I compare in job offers?",
                a: "Compare base salary, bonuses, benefits (health, dental, vision), retirement matching, paid time off, stock options, remote work options, and growth opportunities.",
              },
              {
                q: "How do I calculate total compensation?",
                a: "Total compensation = Base salary + Bonus value + Employer benefits cost + 401(k) match + Stock options + Other perks. Calculate the annual value of each component.",
              },
              {
                q: "Is higher salary always better?",
                a: "Not necessarily. A lower salary with excellent benefits, remote work, or better work-life balance may provide more value than a higher salary with poor benefits.",
              },
              {
                q: "How do I value benefits?",
                a: "Research the cost to purchase equivalent benefits individually. Employer-paid health insurance might be worth $5,000-$15,000 annually in value.",
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
            Use the Job Offer Comparison Calculator to evaluate total compensation
            across multiple offers. Comprehensive comparison ensures you choose the
            best opportunity for your goals.
          </p>
        </section>
      </div>
    </article>
  );
}
