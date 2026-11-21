import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AfterTaxIncomeArticle() {
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
          <span className="meta-tag">Tax · After-Tax Income</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            After-Tax Income Calculator: Calculate After-Tax Income
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to after-tax income calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            After-tax income is the amount of money you have left after all taxes are
            deducted from your gross income. This includes federal income tax, state
            income tax, Social Security tax, Medicare tax, and any other applicable taxes.
            After-tax income is your actual take-home pay and what you have available
            for spending, saving, and investing.
          </p>
          <p className="mb-5">
            An After-Tax Income Calculator calculates your take-home pay based on your
            gross income, filing status, and location. This tool helps you understand
            your actual disposable income and plan your budget accordingly.
          </p>
          <p>
            Understanding your after-tax income is essential for realistic budgeting
            and financial planning.
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
                q: "What taxes are deducted from gross income?",
                a: "Common deductions include federal income tax, state income tax (if applicable), Social Security tax (6.2%), Medicare tax (1.45%), and potentially local taxes. Your employer may also deduct for benefits like health insurance and 401(k) contributions.",
              },
              {
                q: "How can I increase my after-tax income?",
                a: "Options include negotiating a higher salary, moving to a state with no income tax, contributing less to pre-tax accounts (though this has tax consequences), claiming all eligible tax credits, and maximizing deductions.",
              },
              {
                q: "What percentage of income is typically after-tax?",
                a: "After-tax income varies widely. Most Americans take home 60-80% of their gross income after federal, state, and FICA taxes. High-income earners in high-tax states may take home closer to 50-60%, while those in no-tax states may keep 75-85%.",
              },
              {
                q: "How does after-tax income differ from net pay?",
                a: "After-tax income refers specifically to income after taxes. Net pay includes after-tax income minus other deductions like health insurance premiums, 401(k) contributions, and other voluntary withholdings. Net pay is what actually hits your bank account.",
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
            Use the After-Tax Income Calculator to understand your take-home pay.
            Knowing your after-tax income is essential for realistic budgeting and
            financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
