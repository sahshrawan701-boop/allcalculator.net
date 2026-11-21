import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GrossPayArticle() {
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
          <span className="meta-tag">Salary · Gross Pay</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Gross Pay Calculator: Calculate Your Gross Earnings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to gross pay calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Gross pay is your total earnings before any deductions such as taxes,
            insurance, retirement contributions, or other withholdings. It represents
            your full compensation for work performed, including regular pay, overtime,
            bonuses, and commissions. Understanding gross pay is fundamental to
            financial planning.
          </p>
          <p className="mb-5">
            A Gross Pay Calculator calculates your total earnings based on your pay
            rate, hours worked, and any additional compensation. This tool is essential
            for employees and employers to understand total compensation before
            deductions.
          </p>
          <p>
            Knowing your gross pay helps you understand your full earnings potential
            and provides the foundation for calculating net pay and planning your
            budget.
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
                q: "What's included in gross pay?",
                a: "Gross pay includes regular wages, overtime pay, bonuses, commissions, tips, and other compensation. It's your total earnings before any deductions.",
              },
              {
                q: "How do I calculate gross pay from hourly rate?",
                a: "Multiply your hourly rate by hours worked. Include overtime at 1.5x rate for hours over 40 in a week. Add any bonuses or commissions.",
              },
              {
                q: "Why is gross pay important?",
                a: "Gross pay determines tax brackets, loan eligibility, benefit calculations, and retirement contributions. It's the basis for all financial calculations.",
              },
              {
                q: "Does gross pay include employer benefits?",
                a: "No, gross pay is your cash earnings. Employer-paid benefits like health insurance, 401(k) matches, and paid time off have value but aren't included in gross pay.",
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
            Use the Gross Pay Calculator to understand your total earnings before
            deductions. Knowing your gross pay is essential for tax planning and
            financial management.
          </p>
        </section>
      </div>
    </article>
  );
}
