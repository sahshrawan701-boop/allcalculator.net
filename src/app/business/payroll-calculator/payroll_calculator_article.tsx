import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PayrollCalculatorArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }
        .article-root h4 { font-family: var(--font-inter), sans-serif; }

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

        .formula-block {
          font-family: 'Courier New', monospace;
          background: #f8fafc;
          border-left: 3px solid var(--primary-dk);
          padding: 1.25rem 1.5rem;
          margin: 1.5rem 0;
          font-size: 1rem;
          color: #1e293b;
          overflow-x: auto;
        }
        .dark .formula-block {
          background: #1e293b;
          border-left-color: var(--primary);
          color: #e2e8f0;
        }
        .formula-block pre {
          margin: 0;
          font-family: inherit;
          white-space: pre-wrap;
        }

        .aside-callout {
          border-left: 3px solid var(--primary);
          padding: 1rem 1.25rem;
          background: #eef2ff;
          margin: 1.5rem 0;
          font-size: 0.95rem;
          font-style: italic;
          color: var(--primary-dk);
        }
        .dark .aside-callout {
          background: #312e81;
          color: #a5b4fc;
        }

        .state-card {
          border: 1px solid #e2e8f0;
          border-top: 3px solid var(--primary-dk);
          padding: 1.5rem;
          margin: 1.5rem 0;
          background: #f8fafc;
        }
        .dark .state-card {
          border-color: #475569;
          border-top-color: var(--primary);
          background: #1e293b;
        }
        .state-card h3 {
          font-size: 1.05rem !important;
          margin-bottom: 0.75rem !important;
          color: var(--primary-dk) !important;
          letter-spacing: 0.02em;
        }
        .dark .state-card h3 { color: #a5b4fc !important; }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          margin: 1rem 0;
        }
        .styled-table th {
          text-align: left;
          font-family: var(--font-inter), sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.5rem 0.75rem;
          border-bottom: 2px solid #cbd5e1;
          color: #475569;
        }
        .dark .styled-table th {
          border-bottom-color: #475569;
          color: #cbd5e1;
        }
        .styled-table td {
          padding: 0.5rem 0.75rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
        }
        .dark .styled-table td {
          border-bottom-color: #334155;
          color: #e2e8f0;
        }
        .styled-table tr:last-child td {
          border-bottom: none;
          font-weight: 600;
          color: var(--primary-dk);
          background: #e0e7ff;
        }
        .dark .styled-table tr:last-child td {
          color: #a5b4fc;
          background: #312e81;
        }

        .pull-quote {
          border-top: 1px solid #cbd5e1;
          border-bottom: 1px solid #cbd5e1;
          padding: 1.5rem 2rem;
          margin: 2.5rem 0;
          font-family: var(--font-inter), sans-serif;
          font-size: 1.4rem;
          font-style: italic;
          line-height: 1.5;
          color: #334155;
          text-align: center;
        }
        .dark .pull-quote {
          border-color: #475569;
          color: #cbd5e1;
        }

        .numbered-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          align-items: flex-start;
        }
        .numbered-section .num {
          font-family: var(--font-inter), sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #cbd5e1;
          line-height: 1;
          min-width: 2rem;
          padding-top: 0.1rem;
        }
        .dark .numbered-section .num { color: #475569; }

        .tip-list li {
          padding: 0.6rem 0;
          border-bottom: 1px solid #f1f5f9;
          padding-left: 1.25rem;
          position: relative;
        }
        .dark .tip-list li { border-bottom-color: #334155; }
        .tip-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-style: normal;
        }
        .dark .tip-list li::before { color: #818cf8; }

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

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Business · HR & Compensation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Payroll Calculator: Calculate Employee Payroll
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for employers and HR professionals
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have an employee with an annual salary of $60,000. They work 40 hours per week for 52 weeks, totaling 2,080 hours annually. Their hourly rate is $28.85 ($60,000 / 2,080). With federal tax at 22%, state tax at 5%, Social Security at 6.2%, and Medicare at 1.45%, their net pay is approximately $39,500 annually or $3,292 monthly. Employer contributions add another 7.65% for payroll taxes.
          </p>
          <p className="mb-5">
            Payroll calculation involves determining gross pay, calculating tax withholdings, deducting benefits contributions, and arriving at net pay. Accurate payroll ensures compliance with tax regulations and employee satisfaction.
          </p>
          <p className="mb-5">
            But payroll requirements vary by jurisdiction, employee classification, and benefits offerings. Understanding how to calculate gross pay, taxes, and deductions ensures accurate and compliant payroll processing.
          </p>
          <p>
            The payroll calculator above helps you calculate employee payroll, understand tax withholdings, and manage compensation effectively.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Payroll Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Payroll calculation starts with gross pay, subtracts pre-tax deductions, calculates tax withholdings, subtracts post-tax deductions, and arrives at net pay. Employer contributions are calculated separately.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Payroll Formula:
          </p>
          <div className="formula-block">
            <pre>Net Pay = Gross Pay - Pre-Tax Deductions - Taxes - Post-Tax Deductions</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Annual Salary", "$60,000"],
              ["Gross Monthly Pay", "$5,000"],
              ["Pre-Tax Deductions (401k)", "$500 (10%)"],
              ["Taxable Income", "$4,500"],
              ["Federal Tax (22%)", "$990"],
              ["State Tax (5%)", "$225"],
              ["Social Security (6.2%)", "$310"],
              ["Medicare (1.45%)", "$72.50"],
              ["Net Monthly Pay", "$2,902.50"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the employee takes home approximately 58% of gross pay after taxes and deductions. Employer contributions for Social Security and Medicare add an additional 7.65% cost on top of gross pay.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── GROSS PAY CALCULATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Gross Pay Calculation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Gross pay is the total compensation before any deductions. It varies based on pay type: salary, hourly, or commission. Understanding gross pay is the foundation for payroll calculation.
          </p>

          {[
            {
              heading: "Salaried Employees",
              rows: [
                ["Calculation", "Annual Salary / Pay Periods"],
                ["Monthly", "Annual / 12"],
                ["Bi-Weekly", "Annual / 26"],
                ["Weekly", "Annual / 52"],
              ],
              note: "Salaried employees receive fixed pay regardless of hours worked. Divide annual salary by number of pay periods. Overtime for salaried employees depends on exemption status under FLSA.",
            },
            {
              heading: "Hourly Employees",
              rows: [
                ["Calculation", "Hourly Rate × Hours Worked"],
                ["Regular", "Rate × 40 hours"],
                ["Overtime", "Rate × 1.5 × Overtime Hours"],
                ["Total", "Regular + Overtime"],
              ],
              note: "Hourly employees are paid for actual hours worked. Overtime (over 40 hours weekly) is typically paid at 1.5 times regular rate. Track hours accurately for payroll calculation.",
            },
            {
              heading: "Commission-Based",
              rows: [
                ["Calculation", "Base + Commission Rate × Sales"],
                ["Base Salary", "Fixed monthly amount"],
                ["Commission", "Percentage of sales revenue"],
                ["Total", "Base + Commission"],
              ],
              note: "Commission-based pay combines base salary with performance-based compensation. Calculate commission based on sales during the pay period. Ensure clear commission agreements.",
            },
          ].map((component: { heading: string; rows: string[][]; note: string }) => (
            <div key={component.heading} className="state-card">
              <h3>{component.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {component.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{component.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TAX WITHHOLDINGS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tax Withholdings
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Tax withholdings include federal, state, and local income taxes, plus FICA taxes (Social Security and Medicare). Accurate tax calculation is essential for compliance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Tax Type</th>
                <th className="dark:text-slate-100">Rate</th>
                <th className="dark:text-slate-100">Calculation</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Federal Income Tax", "Progressive (10-37%)", "Based on IRS tax brackets and W-4"],
                ["State Income Tax", "Varies (0-13.3%)", "Based on state tax tables"],
                ["Social Security", "6.2% (employee)", "6.2% of wages up to wage base"],
                ["Medicare", "1.45% (employee)", "1.45% of all wages"],
                ["Additional Medicare", "0.9%", "0.9% on wages over $200,000"],
              ].map(([type, rate, calculation]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{rate}</td>
                  <td className="dark:text-slate-100">{calculation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Federal tax rates are progressive based on income. State taxes vary significantly; some states have no income tax. Social Security has a wage base limit ($160,200 in 2023). Medicare applies to all wages with no limit.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── DEDUCTIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Payroll Deductions
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Deductions reduce gross pay to arrive at net pay. Pre-tax deductions reduce taxable income; post-tax deductions are taken after taxes. Understanding deduction types is critical for accurate payroll.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Pre-tax deductions",
                body: "401(k) contributions, health insurance premiums, HSA contributions, and FSA contributions reduce taxable income. These provide tax benefits and reduce overall tax liability. Calculate pre-tax deductions before taxes.",
              },
              {
                n: "2",
                title: "Post-tax deductions",
                body: "Roth 401(k) contributions, life insurance, disability insurance, and garnishments are taken after taxes. These don't reduce taxable income but reduce net pay. Calculate post-tax deductions after taxes.",
              },
              {
                n: "3",
                title: "Required deductions",
                body: "Court-ordered garnishments, tax levies, and child support payments are mandatory deductions. These must be processed according to court orders and federal regulations. Failure to comply results in legal liability.",
              },
              {
                n: "4",
                title: "Voluntary deductions",
                body: "Employee-elected benefits like additional life insurance, gym memberships, or charitable contributions. These require employee authorization and can be changed during open enrollment or qualifying events.",
              },
              {
                n: "5",
                title: "Employer contributions",
                body: "Employer-paid benefits like health insurance, 401(k) matching, and payroll taxes are not deducted from employee pay but represent additional employer cost. Track separately for total compensation analysis.",
              },
              {
                n: "6",
                title: "Deduction limits",
                body: "401(k) contributions have annual limits ($22,500 in 2023). HSAs have contribution limits based on coverage type. Ensure compliance with federal limits to avoid tax penalties.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Payroll Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Payroll errors lead to compliance issues, employee dissatisfaction, and penalties. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Misclassifying employees",
                body: "Incorrectly classifying employees as independent contractors violates labor laws and tax regulations. Use IRS guidelines for classification. Misclassification results in back taxes, penalties, and legal liability.",
              },
              {
                n: "2",
                title: "Incorrect tax calculations",
                body: "Using outdated tax tables or incorrect withholding rates leads to under/over-withholding. Update tax tables annually and when laws change. Use current IRS publications and state tax resources.",
              },
              {
                n: "3",
                title: "Not tracking overtime correctly",
                body: "Failing to pay required overtime violates FLSA. Track all hours worked and pay overtime at 1.5 times regular rate for hours over 40 weekly. Some states have daily overtime requirements.",
              },
              {
                n: "4",
                title: "Missing deduction limits",
                body: "Exceeding 401(k) or HSA contribution limits results in tax penalties. Track contributions against annual limits. Notify employees when limits are approached to avoid excess contributions.",
              },
              {
                n: "5",
                title: "Inconsistent pay periods",
                body: "Changing pay periods without proper notice causes confusion and compliance issues. Maintain consistent pay periods and provide advance notice of changes. Consistency ensures accurate tax withholding.",
              },
              {
                n: "6",
                title: "Not keeping adequate records",
                body: "Payroll records must be kept for at least 3 years per federal law. Inadequate recordkeeping complicates audits and compliance reviews. Maintain detailed records of all payroll transactions.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">{title}</p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Payroll Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate payroll accurately</>],
              [<><strong>Classify correctly</strong> — employee vs contractor</>],
              [<><strong>Update tax tables</strong> — annual updates required</>],
              [<><strong>Track hours</strong> — accurate overtime calculation</>],
              [<><strong>Monitor limits</strong> — 401(k), HSA contribution limits</>],
              [<><strong>Keep records</strong> — 3+ years retention</>],
              [<><strong>Use payroll software</strong> — automate calculations</>],
              [<><strong>Stay compliant</strong> — federal and state regulations</>],
            ].map((item, i) => (
              <li key={i}>{item[0]}</li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {[
              {
                q: "How do I calculate payroll?",
                a: "Payroll = Gross Pay - Pre-Tax Deductions - Taxes - Post-Tax Deductions. Calculate gross pay based on salary or hours worked, subtract pre-tax deductions, calculate tax withholdings using current tax tables, then subtract post-tax deductions.",
              },
              {
                q: "What is the difference between gross and net pay?",
                a: "Gross pay is total compensation before deductions. Net pay is take-home pay after all deductions and taxes. Net pay is what employees receive in their bank account. The difference is deductions and taxes.",
              },
              {
                q: "How do I calculate hourly rate from salary?",
                a: "Hourly Rate = Annual Salary / 2,080 (standard full-time hours). For a $60,000 salary: $60,000 / 2,080 = $28.85/hour. Use actual hours if not standard full-time.",
              },
              {
                q: "What taxes are withheld from payroll?",
                a: "Federal income tax, state income tax (if applicable), Social Security (6.2%), Medicare (1.45%), and additional Medicare (0.9% on high earners). Local taxes may apply in some jurisdictions.",
              },
              {
                q: "How is overtime calculated?",
                a: "Overtime = Regular Rate × 1.5 × Overtime Hours. Overtime applies to hours over 40 in a workweek under federal FLSA. Some states have daily overtime or different thresholds.",
              },
              {
                q: "What are pre-tax deductions?",
                a: "Pre-tax deductions reduce taxable income and include 401(k) contributions, health insurance premiums, HSA contributions, and FSA contributions. These provide tax benefits and lower overall tax liability.",
              },
              {
                q: "What is the employer payroll tax cost?",
                a: "Employers pay 6.2% for Social Security and 1.45% for Medicare, matching employee contributions. Additional costs include federal unemployment tax (FUTA) and state unemployment tax (SUTA).",
              },
              {
                q: "How often should I run payroll?",
                a: "Payroll frequency varies: weekly, bi-weekly, semi-monthly, or monthly. Bi-weekly is most common. Choose frequency based on business needs and cash flow. Consistency is important for tax withholding.",
              },
              {
                q: "What records must I keep for payroll?",
                a: "Keep payroll records for at least 3 years per federal law. Records include employee information, wages, tax withholdings, deductions, and dates of employment. Longer retention may be required for some documents.",
              },
              {
                q: "Should I use payroll software?",
                a: "Yes, payroll software automates calculations, ensures tax compliance, and handles filing. Manual payroll is error-prone and time-consuming. Software reduces errors and saves time, especially as you scale.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-400">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL THOUGHTS ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Accurate payroll calculation is essential for compliance, employee satisfaction, and business operations. Understanding gross pay, taxes, deductions, and net pay ensures accurate and compliant payroll processing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate payroll, understand tax withholdings, and manage compensation. But the real value comes from using this information to ensure compliance, optimize compensation, and support employee financial wellness.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a small business owner or HR professional, accurate payroll calculation is critical. Calculate precisely, stay compliant, and pay your team accurately and on time.
          </p>
          <div className="pull-quote mt-8">
            Accurate payroll is not just about math — it's about respecting your team and complying with the law. Calculate correctly, pay promptly, and build trust.
          </div>
        </section>

      </div>
    </article>
  );
}
