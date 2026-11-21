import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PayrollDeductionArticle() {
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
          <span className="meta-tag">Salary · Deductions</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Payroll Deduction Calculator: Calculate Payroll Deductions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to payroll deductions
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Payroll deductions are amounts withheld from your paycheck for taxes,
            benefits, and other obligations. These include federal and state income
            taxes, Social Security, Medicare, health insurance premiums, retirement
            contributions, and other voluntary or mandatory deductions. Understanding
            these deductions helps you manage your take-home pay.
          </p>
          <p className="mb-5">
            A Payroll Deduction Calculator estimates the various deductions from your
            paycheck based on your earnings, filing status, and benefit elections.
            This tool is essential for employees to understand their net pay and
            for employers calculating payroll.
          </p>
          <p>
            Understanding payroll deductions helps you make informed decisions about
            tax withholding, benefit contributions, and overall compensation planning.
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
                q: "What are mandatory payroll deductions?",
                a: "Mandatory deductions include federal income tax, state income tax (where applicable), Social Security (6.2%), and Medicare (1.45%). These are required by law.",
              },
              {
                q: "What are voluntary payroll deductions?",
                a: "Voluntary deductions include health insurance premiums, 401(k) contributions, life insurance, flexible spending accounts, and other benefits you elect to participate in.",
              },
              {
                q: "How do I adjust my tax withholding?",
                a: "Submit a new W-4 form to your employer. You can adjust allowances, request additional withholding, or update your filing status to change tax deductions.",
              },
              {
                q: "Can I opt out of Social Security and Medicare?",
                a: "Generally no, these are mandatory for most employees. Some exceptions exist for certain religious groups or specific employment types, but they're rare.",
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
            Use the Payroll Deduction Calculator to understand your paycheck
            deductions and net pay. Understanding deductions helps you optimize
            your take-home pay and benefits.
          </p>
        </section>
      </div>
    </article>
  );
}
