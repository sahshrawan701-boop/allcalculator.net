import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LoanEMIArticle() {
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
            Loan EMI Calculator: Master Your Monthly Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding EMI calculations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're considering a $100,000 home loan at 8.5% interest for 20 years. The monthly EMI is $868. Over 20 years, you'll pay $208,320 total — $108,320 in interest alone. That's more than the original loan amount. Is this affordable? Is it worth it? The answer depends on your income, expenses, and financial goals.
          </p>
          <p className="mb-5">
            EMI (Equated Monthly Installment) is the fixed amount you pay each month to repay a loan. It includes both principal and interest, calculated so that the loan is fully paid off by the end of the term. The EMI calculator above helps you understand your monthly commitment before you borrow.
          </p>
          <p className="mb-5">
            But understanding your EMI is just the first step. Knowing how EMI is calculated, how different terms affect your total cost, and how to choose the right loan structure is what actually saves you money and ensures you can afford your payments.
          </p>
          <p>
            EMI calculations are standard across most loans, but the impact on your budget varies significantly based on interest rate, loan term, and principal amount. Let's break down exactly how EMI works and how to use it to make smart borrowing decisions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS EMI ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is EMI?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            EMI stands for Equated Monthly Installment. It's a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The EMI remains constant throughout the loan term (for fixed-rate loans), but the proportion of principal and interest changes over time. In the early years, most of your EMI goes toward interest. As the loan matures, more of each payment goes toward principal.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            EMI is commonly used for home loans, car loans, personal loans, and education loans. The predictability of EMI makes it easier to budget for loan repayments, but the fixed commitment also means less flexibility if your financial situation changes.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── EMI FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Is EMI Calculated?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            EMI is calculated using a standard formula that accounts for the principal amount, interest rate, and loan term. Understanding this formula helps you see how different variables affect your monthly payment.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            EMI Formula:
          </p>
          <div className="formula-block">
            <pre>EMI = P × r × (1 + r)^n / [(1 + r)^n – 1]</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where P = principal, r = monthly interest rate, n = number of monthly installments
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Principal (P)", "$100,000"],
              ["Annual interest rate", "8.5%"],
              ["Monthly interest rate (r)", "8.5% / 12 = 0.708%"],
              ["Loan term", "20 years"],
              ["Number of installments (n)", "20 × 12 = 240"],
              ["EMI", "$868/month"],
              ["Total payment", "$868 × 240 = $208,320"],
              ["Total interest", "$208,320 - $100,000 = $108,320"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll pay $108,320 in interest over 20 years — more than the original loan amount. The interest is front-loaded: in the first month, you might pay $708 in interest and only $160 toward principal. By the final month, you'll pay only $6 in interest and $862 toward principal.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS AFFECTING EMI ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your EMI
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Three main factors determine your EMI: principal amount, interest rate, and loan term. Understanding how each affects your payment helps you make informed borrowing decisions.
          </p>

          {[
            {
              heading: "Principal Amount",
              rows: [
                ["Definition", "The amount you borrow"],
                ["Impact on EMI", "Higher principal = higher EMI"],
                ["Impact on total interest", "Higher principal = higher total interest"],
                ["Control", "Borrow only what you need"],
              ],
              note: "The principal is the base amount on which interest is calculated. Every extra dollar you borrow costs interest over the entire loan term. Borrow only what you need and can afford to repay.",
            },
            {
              heading: "Interest Rate",
              rows: [
                ["Definition", "Annual cost of borrowing as a percentage"],
                ["Impact on EMI", "Higher rate = higher EMI"],
                ["Impact on total interest", "Higher rate = significantly higher total interest"],
                ["Control", "Improve credit score, shop around for better rates"],
              ],
              note: "Interest rate is the most impactful factor on total cost. A 1% difference on a $100,000 loan over 20 years can save over $12,000 in interest. Always shop around for the best rate you qualify for.",
            },
            {
              heading: "Loan Term",
              rows: [
                ["Definition", "Length of time to repay the loan"],
                ["Impact on EMI", "Longer term = lower EMI"],
                ["Impact on total interest", "Longer term = higher total interest"],
                ["Control", "Choose the shortest term you can afford"],
              ],
              note: "Loan term is a trade-off between monthly payment and total cost. Shorter terms have higher EMIs but save significant interest. Longer terms have lower EMIs but cost much more overall. Choose the shortest term you can afford.",
            },
          ].map((factor: { heading: string; rows: string[][]; note: string }) => (
            <div key={factor.heading} className="state-card">
              <h3>{factor.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {factor.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{factor.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TERM COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Loan Term Affects EMI and Total Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Loan term has a dramatic impact on both your monthly payment and total cost. Here's how different terms compare for the same loan.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Loan Term</th>
                <th className="dark:text-slate-100">EMI</th>
                <th className="dark:text-slate-100">Total Interest</th>
                <th className="dark:text-slate-100">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10 years", "$1,239", "$48,680", "$148,680"],
                ["15 years", "$985", "$77,300", "$177,300"],
                ["20 years", "$868", "$108,320", "$208,320"],
                ["25 years", "$801", "$140,300", "$240,300"],
                ["30 years", "$768", "$176,480", "$276,480"],
              ].map(([term, emi, interest, total]) => (
                <tr key={term}>
                  <td className="dark:text-slate-100">{term}</td>
                  <td className="dark:text-slate-100">{emi}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                  <td className="dark:text-slate-100">{total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            For a $100,000 loan at 8.5% interest, choosing a 10-year term instead of 30-year saves $127,800 in interest but requires a $471 higher monthly payment. The 10-year term costs $148,680 total, while the 30-year term costs $276,480 — nearly double.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CHOOSING RIGHT TERM ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Choose the Right Loan Term
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Choosing the right loan term requires balancing monthly payment affordability against total cost. Here's a systematic approach to making the best decision.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calculate your budget",
                body: "Determine how much you can afford to pay monthly without straining your budget. A good rule of thumb: keep total debt payments (including mortgage, auto loans, and other debt) below 36% of your gross monthly income.",
              },
              {
                n: "2",
                title: "Compare total costs across terms",
                body: "Use the calculator above to compare total costs across different loan terms. Don't let a lower monthly payment blind you to higher total cost. The difference between 15-year and 30-year terms can be tens of thousands of dollars.",
              },
              {
                n: "3",
                title: "Consider your future plans",
                body: "If you plan to stay in your home for a long time, a shorter term makes sense. If you might move or refinance within 5–10 years, a longer term with the option to pay extra may be more flexible.",
              },
              {
                n: "4",
                title: "Factor in interest rate differences",
                body: "Shorter terms often have lower interest rates. A 15-year mortgage typically has a lower rate than a 30-year mortgage. This rate difference compounds the savings from the shorter term.",
              },
              {
                n: "5",
                title: "Consider prepayment flexibility",
                body: "If you choose a longer term for lower payments, make extra principal payments when possible. This reduces total interest without committing to higher mandatory payments.",
              },
              {
                n: "6",
                title: "Align with your financial goals",
                body: "If your goal is to minimize total cost and become debt-free quickly, choose the shortest term you can afford. If your goal is to maximize cash flow for other investments, a longer term may make sense.",
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

        {/* ── REDUCING EMI COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Your EMI Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Once you have a loan, there are strategies to reduce your total EMI costs. Here's how to pay less interest and get out of debt faster.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Make extra principal payments",
                body: "Every extra dollar toward principal reduces future interest. Even small extra payments add up. Paying an extra $100/month on a $100,000 loan at 8.5% can save over $30,000 in interest and pay off the loan 7 years early.",
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
                title: "Switch from monthly to biweekly payments",
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
                body: "If your EMI is $868, round up to $900. The extra $32/month adds up to $384/year and reduces principal faster. Small increases in payments compound into significant interest savings.",
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
            Common EMI Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with EMI calculations and loan decisions. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on monthly payment",
                body: "A lower EMI often means a longer term and higher total interest. Always calculate the total cost before committing to a loan. Use the calculator above to compare total costs across different terms.",
              },
              {
                n: "2",
                title: "Borrowing more than you need",
                body: "Just because you're approved for a higher amount doesn't mean you should borrow it all. Borrow only what you need. Every extra dollar borrowed costs interest over the entire loan term.",
              },
              {
                n: "3",
                title: "Ignoring the total cost",
                body: "A $100,000 loan at 8.5% for 20 years costs $208,320 total — $108,320 in interest. That's more than the original loan amount. Always calculate the total cost before borrowing.",
              },
              {
                n: "4",
                title: "Not shopping around for rates",
                body: "Interest rates vary significantly between lenders. Get quotes from multiple lenders before committing. Even a 0.5% difference in rate can save thousands on a large loan.",
              },
              {
                n: "5",
                title: "Choosing the longest term for lower payments",
                body: "Longer terms have lower EMIs but much higher total costs. If you can afford higher payments, choose a shorter term to save significant interest. The longest term is rarely the best choice.",
              },
              {
                n: "6",
                title: "Not considering prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early can save significant interest.",
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
            Practical Tips for Managing EMI
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate EMI and total costs before borrowing to ensure affordability</>],
              [<><strong>Choose the shortest term you can afford</strong> — shorter terms save significant interest</>],
              [<><strong>Shop around for rates</strong> — get quotes from multiple lenders before committing</>],
              [<><strong>Compare total costs, not just EMI</strong> — don't let lower payments blind you to higher total cost</>],
              [<><strong>Make extra payments when possible</strong> — even small extra payments reduce total interest</>],
              [<><strong>Avoid prepayment penalties</strong> — ensure you can pay off early without fees</>],
              [<><strong>Automate your EMI payments</strong> — avoid late fees by setting up automatic payments</>],
              [<><strong>Refinance when rates drop</strong> — refinancing can save thousands if rates fall significantly</>],
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
                q: "How do I calculate my EMI?",
                a: "Use the formula: EMI = P × r × (1 + r)^n / [(1 + r)^n – 1], where P is principal, r is monthly interest rate, and n is number of monthly installments. The calculator above does this automatically for you.",
              },
              {
                q: "What's the difference between EMI and monthly payment?",
                a: "EMI and monthly payment are essentially the same thing. EMI (Equated Monthly Installment) is the term commonly used in India and some other countries, while monthly payment is the term used in the US and other regions. Both refer to the fixed amount paid monthly to repay a loan.",
              },
              {
                q: "Should I choose a shorter or longer loan term?",
                a: "Choose the shortest term you can afford. Shorter terms have higher EMIs but lower total interest. Longer terms have lower EMIs but higher total interest. If you can afford higher payments, choose the shorter term to save money.",
              },
              {
                q: "How much of my EMI goes toward principal vs interest?",
                a: "In the early years of a loan, most of your EMI goes toward interest. As the loan matures, more goes toward principal. This is called amortization. For a $100,000 loan at 8.5% for 20 years, your first payment might be $708 interest and $160 principal, while your last payment might be $6 interest and $862 principal.",
              },
              {
                q: "Can I reduce my EMI after taking a loan?",
                a: "Yes, you can reduce your EMI by refinancing to a lower interest rate, extending the loan term, or making a lump-sum principal payment. However, extending the term increases total interest, while refinancing may have costs. Making extra principal payments reduces total interest without changing your EMI.",
              },
              {
                q: "What happens if I miss an EMI payment?",
                a: "Missing an EMI payment can trigger late fees, damage your credit score, and potentially lead to default. If you're struggling to make payments, contact your lender immediately — they may offer hardship options or payment plans to help you avoid default.",
              },
              {
                q: "How does prepayment affect my EMI?",
                a: "Prepayment (paying extra toward principal) doesn't change your EMI amount, but it reduces the outstanding balance faster, which reduces total interest and shortens the loan term. Some lenders offer the option to reduce your EMI instead of shortening the term when you make prepayments.",
              },
              {
                q: "What's the maximum EMI I can afford?",
                a: "A common rule of thumb is that total debt payments (including mortgage, auto loans, and other debt) should not exceed 36% of your gross monthly income. If you earn $5,000/month, that means $1,800/month in total debt payments. Your EMI should fit within this limit.",
              },
              {
                q: "Should I pay off my loan early if I can?",
                a: "Generally, yes. Paying off a loan early saves interest and frees up cash flow. However, check for prepayment penalties first. If there's no penalty, paying off early is almost always beneficial unless you have higher-interest debt or better investment opportunities.",
              },
              {
                q: "How does interest rate affect my EMI?",
                a: "Higher interest rates increase your EMI and total cost. A 1% increase in interest rate on a $100,000 loan over 20 years increases your EMI by approximately $70/month and total cost by over $16,000. Always shop around for the lowest rate you qualify for.",
              },
              {
                q: "What's the difference between fixed and floating EMI?",
                a: "Fixed EMI means your monthly payment stays the same throughout the loan term. Floating (or variable) EMI means your payment can change if interest rates change. Fixed EMI offers predictability, while floating EMI may start lower but can increase over time.",
              },
              {
                q: "How do I calculate the total cost of my loan?",
                a: "Total cost = EMI × number of payments. For example, if your EMI is $868 and you have 240 payments (20 years), total cost = $868 × 240 = $208,320. Total interest = total cost - principal. The calculator above shows these calculations automatically.",
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
            EMI is the price of borrowing money, but it's also a tool for achieving important goals like buying a home, funding education, or starting a business. Understanding how EMI works, how different terms affect your total cost, and how to optimize your payments is essential for smart borrowing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you understand your monthly commitment and total cost. But the real work happens before you borrow: choosing the right term, shopping for the best rate, and ensuring the EMI fits your budget. These steps ensure you don't overpay for credit.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            EMI isn't just a monthly payment — it's a financial commitment that affects your budget for years. Choose wisely, pay extra when possible, and become debt-free faster. Your future self will thank you for the thousands you'll save in interest.
          </p>
          <div className="pull-quote mt-8">
            The best EMI is the one you can afford without stress. The second best is the one you pay off early.
          </div>
        </section>

      </div>
    </article>
  );
}
