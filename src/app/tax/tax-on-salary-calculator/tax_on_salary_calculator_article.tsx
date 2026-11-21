import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TaxOnSalaryArticle() {
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
          <span className="meta-tag">Tax · Salary</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Tax on Salary Calculator: Calculate Tax on Salary
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to salary tax calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Tax on salary includes federal income tax, state income tax (in most states),
            Social Security tax (6.2%), and Medicare tax (1.45%). Your employer withholds
            these taxes from each paycheck. Understanding how much tax is withheld from
            your salary helps with budgeting and financial planning. The total tax burden
            on salary varies based on income, filing status, and location.
          </p>
          <p className="mb-5">
            A Tax on Salary Calculator estimates the total tax withheld from your salary
            based on your gross pay, filing status, and state of residence. This tool
            helps you understand your take-home pay and verify that your employer is
            withholding the correct amount.
          </p>
          <p>
            Adjusting your W-4 can change your withholding and affect your take-home pay.
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
                q: "What taxes are withheld from my paycheck?",
                a: "Typical withholdings include federal income tax, state income tax (if applicable), Social Security tax (6.2% up to the wage base), Medicare tax (1.45% with no limit), and potentially local taxes. Your employer may also withhold for benefits like health insurance and 401(k) contributions.",
              },
              {
                q: "How is federal income tax on salary calculated?",
                a: "Federal income tax is calculated using progressive tax brackets based on your taxable income (gross pay minus pre-tax deductions and the standard deduction or itemized deductions). Only income within each bracket is taxed at that rate.",
              },
              {
                q: "What is the FICA tax rate?",
                a: "FICA tax consists of Social Security (6.2%) and Medicare (1.45%), totaling 7.65%. Your employer matches this amount, so the total FICA tax is 15.3% of your wages. Social Security tax applies only up to the wage base limit ($168,600 for 2024).",
              },
              {
                q: "How can I increase my take-home pay?",
                a: "Options include contributing less to pre-tax accounts (though this has tax consequences), adjusting your W-4 withholding, moving to a state with no income tax, or negotiating a higher salary. Consider the long-term tax implications of any changes.",
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
            Use the Tax on Salary Calculator to understand your take-home pay and
            tax withholdings. Proper understanding of salary taxes helps with
            budgeting and financial planning.
          </p>
        </section>
      </div>
    </article>
  );
}
