import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InstallmentLoanArticle() {
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
          <span className="meta-tag">Personal Finance · Loans</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Installment Loan Calculator: Master Your Debt Repayment
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding installment loans
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You need $15,000 for a home renovation. The bank offers a 5-year loan at 8% interest. The monthly payment is $304. That sounds manageable — until you realize you'll pay $3,240 in interest over the life of the loan. Is it worth it? The answer depends on what you're getting for that money.
          </p>
          <p className="mb-5">
            Installment loans are the most common type of consumer debt. Auto loans, personal loans, and mortgages all use this structure: you borrow a lump sum, repay it in fixed monthly installments, and pay interest on the declining balance. The predictability is appealing — but the cost can be significant.
          </p>
          <p className="mb-5">
            The installment loan calculator above helps you understand the true cost of borrowing. It shows you your monthly payment, total interest, and total cost based on loan amount, interest rate, and term. But understanding how these components interact and how to minimize your borrowing costs is what actually saves you money.
          </p>
          <p>
            Borrowing isn't inherently bad — it's a tool. Like any tool, it can build wealth or destroy it depending on how you use it. Let's break down exactly how installment loans work and how to use them wisely.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS INSTALLMENT LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Installment Loan?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An installment loan is a loan that you repay with fixed, regular payments over a set period. Unlike revolving credit (like credit cards), where you can borrow up to a limit and repay at your own pace, installment loans have a specific end date and predictable payment schedule.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Common types of installment loans include auto loans, personal loans, mortgages, and student loans. Each payment covers both principal (the amount you borrowed) and interest (the cost of borrowing). Over time, the portion of each payment that goes toward principal increases while the interest portion decreases.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Installment loans offer predictability — you know exactly how much you'll pay each month and when the loan will be paid off. This predictability makes them easier to budget for than revolving credit, but the fixed commitment also means less flexibility if your financial situation changes.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Installment Loans Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Installment loans use an amortization schedule that allocates each payment between principal and interest. Early in the loan term, most of your payment goes toward interest. As the principal balance declines, more of each payment goes toward principal.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Payment Formula:
          </p>
          <div className="formula-block">
            <pre>Monthly Payment = P × [r(1+r)^n] / [(1+r)^n – 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where P = principal, r = monthly interest rate, n = number of payments
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Loan amount", "$15,000"],
              ["Interest rate", "8% annually (0.67% monthly)"],
              ["Loan term", "60 months"],
              ["Monthly payment", "$304"],
              ["Total payments", "$304 × 60 = $18,240"],
              ["Total interest", "$18,240 - $15,000 = $3,240"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll pay $3,240 in interest over 5 years — about 22% of the original loan amount. The interest is front-loaded: in the first month, you might pay $100 in interest and only $204 toward principal. By the final month, you'll pay only $2 in interest and $302 toward principal.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LOAN TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Installment Loans
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Installment loans come in many forms, each with different terms, rates, and purposes. Understanding the differences helps you choose the right loan for your situation.
          </p>

          {[
            {
              heading: "Auto Loans",
              rows: [
                ["Typical amounts", "$5,000–$50,000"],
                ["Typical terms", "36–72 months"],
                ["Interest rates", "3–10% (new cars), 5–15% (used cars)"],
                ["Collateral", "The vehicle itself"],
                ["Best for", "Purchasing a vehicle"],
              ],
              note: "Auto loans are secured by the vehicle, which typically means lower interest rates than unsecured loans. New car loans generally have lower rates than used car loans. The vehicle can be repossessed if you default.",
            },
            {
              heading: "Personal Loans",
              rows: [
                ["Typical amounts", "$1,000–$50,000"],
                ["Typical terms", "12–84 months"],
                ["Interest rates", "6–36% (varies by credit score)"],
                ["Collateral", "None (unsecured) or secured"],
                ["Best for", "Debt consolidation, home improvements, major purchases"],
              ],
              note: "Personal loans can be unsecured (based on creditworthiness) or secured (backed by collateral like a car or savings account). Unsecured loans have higher rates but don't require collateral. They're flexible but can be expensive.",
            },
            {
              heading: "Mortgages",
              rows: [
                ["Typical amounts", "$100,000–$1,000,000+"],
                ["Typical terms", "15–30 years"],
                ["Interest rates", "3–8% (varies by market and credit)"],
                ["Collateral", "The property itself"],
                ["Best for", "Purchasing a home"],
              ],
              note: "Mortgages are the largest installment loans most people will ever take. They're secured by the property, which means foreclosure if you default. Interest rates can be fixed (constant) or adjustable (changes over time).",
            },
            {
              heading: "Student Loans",
              rows: [
                ["Typical amounts", "$5,000–$100,000+"],
                ["Typical terms", "10–25 years"],
                ["Interest rates", "3–8% (federal), 4–12% (private)"],
                ["Collateral", "None (federal), may require cosigner (private)"],
                ["Best for", "Education expenses"],
              ],
              note: "Federal student loans offer fixed rates, income-driven repayment plans, and forgiveness options. Private student loans have variable rates and fewer protections but may be necessary if federal loans don't cover costs.",
            },
          ].map((loan: { heading: string; rows: string[][]; note: string }) => (
            <div key={loan.heading} className="state-card">
              <h3>{loan.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {loan.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{loan.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Installment Loan Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the theory is one thing. Seeing how installment loans play out in real situations is another. Here are three scenarios that illustrate the impact of loan terms on total cost.
          </p>

          {[
            {
              heading: "Scenario 1: The Car Loan",
              rows: [
                ["Loan amount", "$25,000"],
                ["Interest rate", "7%"],
                ["Term option A (36 months)", "$772/month, $2,792 total interest"],
                ["Term option B (60 months)", "$495/month, $4,700 total interest"],
                ["Difference", "$277/month savings vs $1,908 extra interest"],
              ],
              note: "The 60-month term offers a lower monthly payment ($277 less) but costs $1,908 more in interest. If you can afford the higher payment, the 36-month term saves significant money. If cash flow is tight, the longer term may be worth the extra cost.",
            },
            {
              heading: "Scenario 2: The Debt Consolidation",
              rows: [
                ["Credit card debt", "$15,000 at 22% APR"],
                ["Minimum payments", "$450/month, 46 months to payoff, $8,500 interest"],
                ["Personal loan", "$15,000 at 12% APR, 48 months"],
                ["Loan payment", "$395/month, $3,960 total interest"],
                ["Savings", "$55/month, $4,540 less interest"],
              ],
              note: "Consolidating high-interest credit card debt into a lower-rate personal loan can save thousands in interest and reduce monthly payments. But this only works if you don't run up new credit card debt after consolidation.",
            },
            {
              heading: "Scenario 3: The Home Improvement",
              rows: [
                ["Project cost", "$20,000"],
                ["Option A (home equity loan)", "$20,000 at 8%, 120 months, $243/month"],
                ["Option B (personal loan)", "$20,000 at 15%, 60 months, $476/month"],
                ["Option C (credit card)", "$20,000 at 22%, minimum payments only"],
                ["Best choice", "Home equity loan if available — lowest rate, longest term"],
              ],
              note: "Home equity loans typically offer the lowest rates because they're secured by your home. Personal loans are faster and don't require home equity but have higher rates. Credit cards should be avoided for large purchases due to high rates.",
            },
          ].map((scenario: { heading: string; rows: string[][]; note: string }) => (
            <div key={scenario.heading} className="state-card">
              <h3>{scenario.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {scenario.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{scenario.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── CHOOSING A LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Choose the Right Installment Loan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Choosing the right loan requires balancing monthly payment affordability against total cost. Here's a systematic approach to making the best decision.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Check your credit score first",
                body: "Your credit score significantly affects the interest rate you'll qualify for. Check your score before applying so you know what rates to expect. If your score is low, consider improving it before applying to save thousands in interest.",
              },
              {
                n: "2",
                title: "Compare APR, not just interest rate",
                body: "APR includes interest plus fees, giving you the true cost of borrowing. A loan with a lower interest rate but high fees might have a higher APR than a loan with a slightly higher rate but no fees. Always compare APRs.",
              },
              {
                n: "3",
                title: "Consider the total cost, not just monthly payment",
                body: "Longer terms have lower monthly payments but higher total interest. Use the calculator above to compare total costs across different terms. Don't let a lower monthly payment blind you to the higher total cost.",
              },
              {
                n: "4",
                title: "Check for prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early without penalty can save you significant interest.",
              },
              {
                n: "5",
                title: "Read the fine print on fees",
                body: "Origination fees, application fees, late payment fees, and other charges can add up. Understand all fees before signing. A loan with no fees might be cheaper than one with a lower rate but high fees.",
              },
              {
                n: "6",
                title: "Verify the lender's reputation",
                body: "Check reviews with the Better Business Bureau and Consumer Financial Protection Bureau. Avoid predatory lenders with hidden terms, aggressive collection practices, or excessive fees. Reputable lenders are transparent about terms.",
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

        {/* ── REDUCING COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Your Loan Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Once you have a loan, there are strategies to reduce the total cost. Here's how to pay less interest and get out of debt faster.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Make extra principal payments",
                body: "Every extra dollar toward principal reduces future interest. Even small extra payments add up. Paying an extra $50/month on a $15,000 loan at 8% can save over $1,000 in interest and pay off the loan 8 months early.",
              },
              {
                n: "2",
                title: "Refinance if rates drop",
                body: "If interest rates fall significantly after you take your loan, refinancing can save money. Consider refinancing if you can reduce your rate by at least 1–2 percentage points. Factor in refinancing costs to ensure it's worthwhile.",
              },
              {
                n: "3",
                title: "Shorten the term when refinancing",
                body: "When refinancing, consider a shorter term if you can afford higher payments. A 15-year mortgage instead of 30-year saves massive interest. Use the calculator to compare total costs across different terms.",
              },
              {
                n: "4",
                title: "Biweekly payments instead of monthly",
                body: "Paying half your monthly payment every two weeks results in 26 half-payments (13 full payments) per year instead of 12. This extra payment per year can shave years off your loan and save significant interest.",
              },
              {
                n: "5",
                title: "Apply windfalls to principal",
                body: "Tax refunds, bonuses, gifts, and inheritance money should go directly to loan principal. Windfalls are the fastest way to reduce debt without affecting your monthly budget.",
              },
              {
                n: "6",
                title: "Round up your payments",
                body: "If your payment is $476, round up to $500. The extra $24/month adds up to $288/year and reduces principal faster. Small increases in payments compound into significant interest savings.",
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
            Common Installment Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with installment loans. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on monthly payment",
                body: "A lower monthly payment often means a longer term and higher total interest. Don't let an affordable monthly payment blind you to the total cost. Use the calculator to compare total costs across different terms.",
              },
              {
                n: "2",
                title: "Borrowing more than you need",
                body: "Just because you're approved for $20,000 doesn't mean you should borrow it all. Borrow only what you need. Every extra dollar borrowed costs interest and takes longer to repay.",
              },
              {
                n: "3",
                title: "Ignoring the total cost",
                body: "A $15,000 loan at 8% for 5 years costs $18,240 total — $3,240 in interest. That's 22% of the loan amount. Always calculate the total cost before borrowing to ensure it's worth it.",
              },
              {
                n: "4",
                title: "Not shopping around",
                body: "Interest rates vary significantly between lenders. Get quotes from multiple lenders including banks, credit unions, and online lenders. Even a 1% difference in rate can save thousands on a large loan.",
              },
              {
                n: "5",
                title: "Taking loans for depreciating assets",
                body: "Borrowing for cars, vacations, or consumables means paying interest on something that loses value. Only borrow for appreciating assets (like education or home improvements) or essential needs.",
              },
              {
                n: "6",
                title: "Missing the fine print on fees",
                body: "Origination fees, prepayment penalties, and late fees can add hundreds or thousands to your loan cost. Read all terms carefully and ask questions about anything you don't understand.",
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
            Practical Tips for Smart Borrowing
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — compare total costs across different terms and rates before choosing a loan</>],
              [<><strong>Improve your credit first</strong> — a better credit score can save thousands in interest over the life of a loan</>],
              [<><strong>Shop around</strong> — get quotes from at least 3 lenders before committing</>],
              [<><strong>Consider shorter terms</strong> — if you can afford higher payments, shorter terms save significant interest</>],
              [<><strong>Avoid prepayment penalties</strong> — ensure you can pay off early without fees</>],
              [<><strong>Make extra payments when possible</strong> — even small extra payments reduce total interest</>],
              [<><strong>Automate your payments</strong> — avoid late fees by setting up automatic payments</>],
              [<><strong>Read the fine print</strong> — understand all fees, terms, and conditions before signing</>],
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
                q: "What is the difference between APR and interest rate?",
                a: "Interest rate is the cost of borrowing expressed as a percentage. APR includes interest plus fees, giving you the true annual cost of borrowing. Always compare APRs when shopping for loans — a loan with a lower interest rate but high fees might have a higher APR.",
              },
              {
                q: "How do I calculate my monthly payment?",
                a: "Use the formula: Monthly Payment = P × [r(1+r)^n] / [(1+r)^n – 1], where P is principal, r is monthly interest rate, and n is number of payments. The calculator above does this automatically for you.",
              },
              {
                q: "Should I choose a shorter or longer loan term?",
                a: "Shorter terms have higher monthly payments but lower total interest. Longer terms have lower monthly payments but higher total interest. Choose the shortest term you can afford — the interest savings are usually worth the higher payment.",
              },
              {
                q: "What is a prepayment penalty?",
                a: "A prepayment penalty is a fee charged by some lenders if you pay off your loan early. It's designed to compensate the lender for lost interest. Avoid loans with prepayment penalties if you plan to pay extra or refinance.",
              },
              {
                q: "Can I pay off my loan early?",
                a: "Most loans allow early repayment, but some charge prepayment penalties. Check your loan terms before making extra payments. If there's no prepayment penalty, paying extra reduces your total interest and gets you debt-free faster.",
              },
              {
                q: "What affects my interest rate?",
                a: "Your credit score is the biggest factor — higher scores get lower rates. Other factors include income, debt-to-income ratio, loan amount, loan term, collateral, and current market conditions. Shopping around can also help you find better rates.",
              },
              {
                q: "Is an installment loan better than a credit card?",
                a: "For large purchases, installment loans typically have lower interest rates than credit cards. Credit cards offer flexibility but have higher rates. If you need to finance a large purchase, an installment loan is usually cheaper if you qualify.",
              },
              {
                q: "What is loan amortization?",
                a: "Amortization is the process of paying off a loan through regular payments over time. Each payment covers both principal and interest. Early in the loan, most of each payment goes toward interest. As the balance declines, more goes toward principal.",
              },
              {
                q: "How much should I borrow?",
                a: "Borrow only what you need and can afford to repay. A good rule of thumb: keep total debt payments (including mortgage, auto loans, and other debt) below 36% of your gross monthly income. Don't borrow more than necessary.",
              },
              {
                q: "What happens if I miss a payment?",
                a: "Missing a payment can trigger late fees, damage your credit score, and potentially lead to default. If you're struggling to make payments, contact your lender immediately — they may offer hardship options or payment plans to help you avoid default.",
              },
              {
                q: "Should I consolidate my debt?",
                a: "Debt consolidation can save money if you can get a lower interest rate than your current debts. It simplifies payments and can reduce total interest. But it only works if you don't run up new debt after consolidation. Use the calculator to compare costs.",
              },
              {
                q: "How do I qualify for an installment loan?",
                a: "Lenders consider credit score, income, debt-to-income ratio, employment history, and collateral (for secured loans). Higher credit scores and stable income improve your chances of approval and better rates. Shop around to find lenders that work with your credit profile.",
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
            Installment loans are powerful financial tools when used wisely. They can help you achieve important goals — buying a home, getting an education, starting a business — but they also come with costs that can't be ignored. The key is understanding the true cost and making informed decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page shows you the math. But the real work happens before you borrow: improving your credit, shopping around, comparing total costs, and choosing the shortest term you can afford. These steps save thousands in interest and get you debt-free faster.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Borrowing isn't inherently bad — it's a tool. Like any tool, it can build wealth or destroy it depending on how you use it. Use installment loans strategically, pay them off aggressively, and avoid borrowing for depreciating assets. Your future self will thank you.
          </p>
          <div className="pull-quote mt-8">
            The best loan is the one you don't have to take. The second best is the one you pay off early.
          </div>
        </section>

      </div>
    </article>
  );
}
