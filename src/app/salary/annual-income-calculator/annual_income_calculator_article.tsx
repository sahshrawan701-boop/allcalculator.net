import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AnnualIncomeArticle() {
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
          <span className="meta-tag">Salary · Income Calculation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Annual Income Calculator: Calculate Your Yearly Earnings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to annual income calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Annual income is the total amount of money you earn in a year before taxes
            and deductions. Understanding your annual income is essential for budgeting,
            loan applications, tax planning, and evaluating job offers. It includes
            wages, salary, bonuses, commissions, and other compensation.
          </p>
          <p className="mb-5">
            An Annual Income Calculator helps you determine your total yearly earnings
            from various pay periods including hourly, weekly, biweekly, monthly, or
            annual rates. This tool is essential for employees, freelancers, and anyone
            planning their financial future.
          </p>
          <p>
            Knowing your annual income helps you make informed decisions about savings,
            investments, and major purchases while ensuring you meet your financial goals.
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
                q: "What's the difference between gross and net annual income?",
                a: "Gross annual income is your total earnings before taxes and deductions. Net annual income is what you take home after taxes, insurance, retirement contributions, and other deductions.",
              },
              {
                q: "How do I calculate annual income from hourly pay?",
                a: "Multiply your hourly rate by the number of hours worked per week, then multiply by 52 weeks. For example, $20/hour × 40 hours × 52 weeks = $41,600 annually.",
              },
              {
                q: "Does annual income include bonuses?",
                a: "Yes, annual income typically includes all compensation: salary, wages, bonuses, commissions, overtime pay, and other earnings. Base salary alone doesn't represent total annual income.",
              },
              {
                q: "Why is annual income important?",
                a: "Lenders use it for loan approvals, landlords for rental applications, and it's crucial for tax planning, budgeting, and negotiating salary in job offers.",
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
            Use the Annual Income Calculator to understand your total yearly earnings
            and plan your financial future. Accurate income calculation is essential
            for budgeting, loan applications, and tax planning.
          </p>
        </section>
      </div>
    </article>
  );
}
