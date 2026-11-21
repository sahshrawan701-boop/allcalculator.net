import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StudentLoanArticle() {
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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

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

        .styled-table-plain tr:last-child td {
          font-weight: inherit;
          color: inherit;
          background: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .styled-table-plain tr:last-child td {
          border-bottom-color: #334155;
        }
        .styled-table-plain th { background: #f1f5f9; }
        .dark .styled-table-plain th { background: #334155; }

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

        .section-label {
          display: block;
          font-family: sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }
        .dark .section-label { color: #64748b; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Education</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Student Loan Calculator: Plan Your Education Debt
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding student loans
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You graduate with $30,000 in student loans at 6.8% interest. Your standard 10-year repayment plan requires $345 monthly payments. Over 10 years, you'll pay $41,400 total — $11,400 in interest. But what if you could afford $500 monthly? You'd pay off the loan in 6.8 years and save $4,200 in interest.
          </p>
          <p className="mb-5">
            Student loans are a necessary evil for many students, but they don't have to be a lifelong burden. The student loan calculator above helps you understand your monthly payments, total interest, and how extra payments can accelerate your payoff timeline.
          </p>
          <p className="mb-5">
            But understanding the numbers is just the first step. Knowing how student loans work, what repayment options exist, and how to minimize interest costs is what actually helps you manage your education debt effectively.
          </p>
          <p>
            Student loans aren't one-size-fits-all. Federal loans offer income-driven repayment plans and forgiveness options. Private loans have fewer protections but may offer lower rates. Understanding your options and choosing the right strategy can save thousands in interest.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Student Loans Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Student loans are installment loans designed to finance education. You borrow a lump sum to pay for tuition, fees, and living expenses, then repay with interest over a set term. Federal loans offer more protections and repayment options, while private loans may have lower rates but fewer benefits.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Payment Formula:
          </p>
          <div className="formula-block">
            <pre>M = P × r × (1 + r)^n / [(1 + r)^n – 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where M = monthly payment, P = principal, r = monthly interest rate, n = number of payments
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Principal (P)", "$30,000"],
              ["Annual interest rate", "6.8%"],
              ["Monthly interest rate (r)", "6.8% / 12 = 0.567%"],
              ["Loan term", "10 years (120 months)"],
              ["Monthly payment (M)", "$345"],
              ["Total payment", "$345 × 120 = $41,400"],
              ["Total interest", "$41,400 - $30,000 = $11,400"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll pay $11,400 in interest over 10 years — 38% of the original loan amount. This is typical for student loans, which often have higher rates than mortgages but lower than credit cards. Extra payments can significantly reduce this interest cost.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FEDERAL VS PRIVATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Federal vs Private Student Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the differences between federal and private loans is essential for choosing the right borrowing strategy and repayment plan.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Feature</th>
                <th className="dark:text-slate-100">Federal Loans</th>
                <th className="dark:text-slate-100">Private Loans</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Interest rates", "Fixed, set by government", "Fixed or variable, set by lender"],
                ["Credit check", "None for most federal loans", "Required, affects rate and approval"],
                ["Repayment plans", "Income-driven, standard, graduated", "Typically standard only"],
                ["Forgiveness options", "Public Service, income-driven", "Rare, case-by-case"],
                ["Deferment/forbearance", "Available for hardship", "Varies by lender"],
                ["Death/discharge", "Loans discharged", "Varies by lender"],
                ["Cosigner required", "No", "Often required for students"],
              ].map(([feature, federal, priv]) => (
                <tr key={feature}>
                  <td className="dark:text-slate-100">{feature}</td>
                  <td className="dark:text-slate-100">{federal}</td>
                  <td className="dark:text-slate-100">{priv}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Federal loans generally offer more protections and flexibility, making them the better first choice. Private loans may offer lower rates for borrowers with excellent credit but lack the repayment options and forgiveness programs of federal loans.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REPAYMENT OPTIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Student Loan Repayment Options
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Federal loans offer multiple repayment plans to fit different financial situations. Choosing the right plan can make your payments manageable and help you avoid default.
          </p>

          {[
            {
              heading: "Standard Repayment",
              rows: [
                ["Term", "10 years"],
                ["Monthly payment", "Fixed, pays off in full"],
                ["Best for", "Those who can afford standard payments"],
              ],
              note: "Standard repayment is the default plan and typically costs the least in total interest. Choose this if you can afford the payments — it's the fastest and cheapest way to pay off your loans.",
            },
            {
              heading: "Graduated Repayment",
              rows: [
                ["Term", "10 years"],
                ["Monthly payment", "Starts low, increases every 2 years"],
                ["Best for", "Those expecting income increases"],
              ],
              note: "Graduated repayment starts with lower payments that increase over time. This works well if you expect your income to rise steadily. However, you'll pay more in total interest than with standard repayment.",
            },
            {
              heading: "Income-Driven Repayment",
              rows: [
                ["Term", "20–25 years"],
                ["Monthly payment", "10–20% of discretionary income"],
                ["Best for", "Those with low income relative to debt"],
              ],
              note: "Income-driven plans cap payments at 10–20% of discretionary income and forgive remaining balance after 20–25 years. These plans provide relief but can significantly increase total interest paid.",
            },
            {
              heading: "Extended Repayment",
              rows: [
                ["Term", "25 years"],
                ["Monthly payment", "Fixed or graduated"],
                ["Best for", "Those with high loan balances"],
              ],
              note: "Extended repayment is available for loans over $30,000 and extends the term to 25 years. This reduces monthly payments but significantly increases total interest. Use only if necessary.",
            },
          ].map((plan: { heading: string; rows: string[][]; note: string }) => (
            <div key={plan.heading} className="state-card">
              <h3>{plan.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {plan.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{plan.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING INTEREST ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Student Loan Interest
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Interest is the hidden cost of student loans. Here's how to minimize what you pay and become debt-free faster.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Make extra payments toward principal",
                body: "Every extra dollar toward principal reduces future interest and shortens your loan term. Even small extra payments add up. Paying an extra $100/month on a $30,000 loan can save over $3,000 in interest and pay off the loan 3 years early.",
              },
              {
                n: "2",
                title: "Refinance to a lower rate",
                body: "If you have good credit, refinancing federal or private loans can lower your rate. Consider refinancing if you can reduce your rate by at least 1–2 percentage points. However, refinancing federal loans loses their protections and forgiveness options.",
              },
              {
                n: "3",
                title: "Pay interest during school",
                body: "Many loans accrue interest while you're in school. Paying this interest before it capitalizes (gets added to principal) prevents interest-on-interest growth. Even small payments during school can save thousands over the life of the loan.",
              },
              {
                n: "4",
                title: "Sign up for autopay discounts",
                body: "Many lenders offer 0.25–0.5% interest rate discounts for automatic payments. This small discount can save hundreds over the life of the loan. Autopay also ensures you never miss a payment, protecting your credit.",
              },
              {
                n: "5",
                title: "Apply windfalls to principal",
                body: "Tax refunds, bonuses, gifts, and inheritance money should go directly to loan principal. Windfalls are the fastest way to reduce your loan term without affecting your monthly budget.",
              },
              {
                n: "6",
                title: "Choose the shortest affordable term",
                body: "Shorter terms have higher monthly payments but lower total interest. If you can afford higher payments, choose a 5-year term instead of 10-year to save significant interest.",
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

        {/* ── FORGIVENESS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Student Loan Forgiveness Programs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Federal loans offer forgiveness programs that can cancel remaining balances after meeting certain requirements. These programs can provide significant relief for eligible borrowers.
          </p>

          {[
            {
              heading: "Public Service Loan Forgiveness (PSLF)",
              rows: [
                ["Eligibility", "Government or non-profit employees"],
                ["Requirement", "120 qualifying payments (10 years)"],
                ["Forgiveness", "Remaining balance forgiven tax-free"],
              ],
              note: "PSLF forgives remaining federal loan balances after 120 qualifying payments while working full-time for government or non-profit organizations. This is the most generous forgiveness program but requires strict adherence to requirements.",
            },
            {
              heading: "Income-Driven Repayment Forgiveness",
              rows: [
                ["Eligibility", "Any federal loan borrower on income-driven plan"],
                ["Requirement", "20–25 years of payments"],
                ["Forgiveness", "Remaining balance forgiven (taxable)"],
              ],
              note: "Income-driven repayment plans forgive remaining balances after 20–25 years of payments. However, the forgiven amount is taxable as income. This provides relief but can create a large tax bill in the forgiveness year.",
            },
            {
              heading: "Teacher Loan Forgiveness",
              rows: [
                ["Eligibility", "Teachers in low-income schools"],
                ["Requirement", "5 consecutive years of teaching"],
                ["Forgiveness", "Up to $17,500 forgiven"],
              ],
              note: "Teacher Loan Forgiveness provides up to $17,500 in forgiveness for teachers who work 5 consecutive years in low-income schools. This is a targeted program for educators and doesn't require the long-term commitment of PSLF.",
            },
          ].map((program: { heading: string; rows: string[][]; note: string }) => (
            <div key={program.heading} className="state-card">
              <h3>{program.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {program.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{program.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Student Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy students make mistakes with student loans that cost thousands in unnecessary interest. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not understanding the total cost",
                body: "A $30,000 loan at 6.8% for 10 years costs $41,400 total — $11,400 in interest. Always calculate the total cost before borrowing. Understanding the full cost helps you borrow only what you need.",
              },
              {
                n: "2",
                title: "Borrowing more than necessary",
                body: "Only borrow what you need for tuition, fees, and essential living expenses. Every extra dollar borrowed costs interest over the entire loan term. Living like a student while in school prevents lifestyle inflation that increases debt.",
              },
              {
                n: "3",
                title: "Ignoring interest during school",
                body: "Unsubsidized loans accrue interest while you're in school. Paying this interest before it capitalizes prevents interest-on-interest growth. Even small payments during school can save thousands.",
              },
              {
                n: "4",
                title: "Choosing the longest term for lower payments",
                body: "Longer terms have lower payments but much higher total costs. If you can afford higher payments, choose a shorter term to save significant interest. The longest term is rarely the best choice.",
              },
              {
                n: "5",
                title: "Not exploring income-driven options",
                body: "If you're struggling to make payments, income-driven repayment plans can cap payments at 10–20% of discretionary income. Not exploring these options can lead to default, which has severe consequences.",
              },
              {
                n: "6",
                title: "Refinancing federal loans without understanding consequences",
                body: "Refinancing federal loans to private loans loses protections like income-driven repayment and forgiveness. Only refinance if you're certain you won't need these protections and the rate reduction is significant.",
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
            Practical Tips for Managing Student Loans
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate monthly payments and total cost before borrowing</>],
              [<><strong>Borrow only what you need</strong> — every extra dollar costs interest over the loan term</>],
              [<><strong>Pay interest during school</strong> — prevents capitalization and interest-on-interest growth</>],
              [<><strong>Choose federal loans first</strong> — they offer more protections and repayment options</>],
              [<><strong>Make extra payments when possible</strong> — every extra dollar reduces principal and interest</>],
              [<><strong>Sign up for autopay discounts</strong> — 0.25–0.5% rate discounts save hundreds over time</>],
              [<><strong>Explore income-driven options</strong> — if struggling, these plans cap payments at affordable levels</>],
              [<><strong>Understand forgiveness programs</strong> — PSLF and other programs can cancel remaining balances</>],
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
                q: "How do I calculate my student loan payment?",
                a: "Use the formula: M = P × r × (1 + r)^n / [(1 + r)^n – 1], where P is principal, r is monthly interest rate, n is number of payments, and M is monthly payment. The calculator above does this automatically for you.",
              },
              {
                q: "What's the difference between subsidized and unsubsidized loans?",
                a: "Subsidized loans don't accrue interest while you're in school (the government pays it). Unsubsidized loans accrue interest from disbursement, which capitalizes (gets added to principal) if not paid. Subsidized loans are need-based and cheaper over time.",
              },
              {
                q: "Should I refinance my student loans?",
                a: "Consider refinancing if you can reduce your rate by at least 1–2 percentage points. However, refinancing federal loans to private loans loses protections like income-driven repayment and forgiveness. Only refinance federal loans if you're certain you won't need these protections.",
              },
              {
                q: "What is Public Service Loan Forgiveness (PSLF)?",
                a: "PSLF forgives remaining federal loan balances after 120 qualifying payments (10 years) while working full-time for government or non-profit organizations. The forgiven amount is tax-free. This is the most generous forgiveness program but requires strict adherence to requirements.",
              },
              {
                q: "How do income-driven repayment plans work?",
                a: "Income-driven plans cap payments at 10–20% of discretionary income and forgive remaining balances after 20–25 years. Payments adjust annually based on income and family size. These plans provide relief but can significantly increase total interest paid.",
              },
              {
                q: "Can I pay off my student loans early?",
                a: "Yes, federal and most private loans allow early repayment without penalties. Making extra payments toward principal reduces total interest and shortens your loan term. Every extra dollar toward principal saves future interest.",
              },
              {
                q: "What happens if I can't afford my student loan payments?",
                a: "Contact your loan servicer immediately. Options include income-driven repayment plans, deferment, forbearance, or loan consolidation. Ignoring payments leads to default, which has severe consequences including wage garnishment and credit damage.",
              },
              {
                q: "Should I pay interest while in school?",
                a: "Yes, paying interest on unsubsidized loans while in school prevents capitalization (interest being added to principal). This prevents interest-on-interest growth and can save thousands over the life of the loan. Even small payments help.",
              },
              {
                q: "How long does it take to pay off student loans?",
                a: "Standard repayment is 10 years, but terms vary from 5–25 years depending on the plan. Income-driven plans extend to 20–25 years. Making extra payments can significantly shorten the term. The calculator above shows how extra payments affect your timeline.",
              },
              {
                q: "What's the average student loan interest rate?",
                a: "Federal undergraduate loans currently have fixed rates around 5.5%. Graduate loans are around 7.1%. Private loan rates vary by credit score, typically ranging from 4–12%. Federal rates are set by Congress and change annually.",
              },
              {
                q: "Can student loans be discharged in bankruptcy?",
                a: "Student loans are rarely discharged in bankruptcy. You must prove undue hardship, which is an extremely high legal standard. This requires showing that you can't maintain a minimal standard of living, that this situation will persist, and that you've made good faith repayment efforts.",
              },
              {
                q: "How do I choose the right repayment plan?",
                a: "Choose standard repayment if you can afford it — it's the fastest and cheapest option. Choose income-driven if your payments are unaffordable relative to your income. Choose graduated if you expect steady income increases. Use the calculator to compare total costs across plans.",
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
            Student loans are a powerful tool for financing education, but they're also a significant financial commitment. Understanding how they work, choosing the right repayment plan, and minimizing interest costs is essential for managing your education debt effectively.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you understand your monthly payments and total cost. But the real work happens in the details: borrowing only what you need, paying interest during school, making extra payments when possible, and exploring forgiveness programs if eligible.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Student loans don't have to be a lifelong burden. With the right strategy, you can minimize interest, pay off your loans faster, and achieve financial freedom. Your education is an investment — make sure the debt doesn't outweigh the benefits.
          </p>
          <div className="pull-quote mt-8">
            The best student loan strategy is the one you can afford without stress. The second best is the one you pay off early.
          </div>
        </section>

      </div>
    </article>
  );
}
