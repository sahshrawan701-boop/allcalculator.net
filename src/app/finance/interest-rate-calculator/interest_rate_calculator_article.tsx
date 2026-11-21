import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InterestRateArticle() {
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
            Interest Rate Calculator: Uncover the True Cost of Borrowing
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding interest rates
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're offered a loan: $10,000, $300/month for 36 months. Sounds reasonable — until you calculate the actual interest rate. It's not 10% or even 15%. It's 19.5%. That's nearly double what you might have assumed. The monthly payment looked affordable, but the interest rate was predatory.
          </p>
          <p className="mb-5">
            Interest rates are the price of money, but they're often hidden behind monthly payment amounts. A loan with a "low" monthly payment can have an astronomical interest rate, while a loan with a "high" monthly payment might actually be cheaper in the long run. The interest rate calculator above reveals the truth.
          </p>
          <p className="mb-5">
            Understanding interest rates is essential for making informed borrowing decisions. It affects everything from credit cards to mortgages, from car loans to personal loans. The difference between 5% and 15% interest on a $20,000 loan over 5 years is $5,700 — money that could be invested, saved, or spent elsewhere.
          </p>
          <p>
            Your financial future depends on understanding the cost of borrowing. Let's break down exactly how interest rates work, how to calculate them, and how to ensure you're not overpaying for credit.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS INTEREST RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Interest Rate?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An interest rate is the percentage charged on the principal amount you borrow or earn on the money you save. It's essentially the cost of borrowing money or the reward for lending it. Interest rates are expressed as an annual percentage rate (APR), which includes both the interest rate and any fees.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When you borrow money, the interest rate determines how much extra you'll pay beyond the principal. When you save or invest money, the interest rate determines how much your money will grow over time. Interest rates are set by lenders based on risk, market conditions, and the borrower's creditworthiness.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Interest rates can be fixed (stay the same throughout the loan term) or variable (change based on market conditions). Fixed rates provide predictability, while variable rates can be lower initially but may increase over time, potentially making your loan more expensive.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Interest Rates Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Interest rates work differently depending on whether you're borrowing or saving, and whether the interest is simple or compound. Understanding these differences is crucial for making informed financial decisions.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Simple Interest Formula:
          </p>
          <div className="formula-block">
            <pre>Interest = Principal × Rate × Time</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Compound Interest Formula:
          </p>
          <div className="formula-block">
            <pre>A = P(1 + r/n)^(nt)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where A = final amount, P = principal, r = annual interest rate, n = compounding frequency, t = time in years
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Principal", "$10,000"],
              ["Annual interest rate", "8%"],
              ["Time", "5 years"],
              ["Simple interest", "$10,000 × 0.08 × 5 = $4,000"],
              ["Compound interest (annual)", "$10,000 × (1.08)^5 = $14,693"],
              ["Difference", "$693 more with compound interest"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Compound interest is more powerful than simple interest because you earn interest on your interest. Over long periods, this compounding effect can dramatically increase returns — or costs, if you're the borrower. This is why understanding the difference between simple and compound interest is essential.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── APR VS APY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            APR vs APY: What's the Difference?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            APR (Annual Percentage Rate) and APY (Annual Percentage Yield) sound similar but measure different things. Understanding the difference helps you compare financial products accurately.
          </p>

          {[
            {
              heading: "APR (Annual Percentage Rate)",
              rows: [
                ["Definition", "The annual cost of borrowing, including interest and fees"],
                ["Used for", "Loans, credit cards, mortgages"],
                ["Calculation", "Simple interest rate plus fees, expressed annually"],
                ["Best for", "Comparing borrowing costs"],
              ],
              note: "APR is the rate lenders advertise for loans. It includes the interest rate plus any origination fees or other charges. APR doesn't account for compounding, so it's typically lower than APY for the same nominal rate.",
            },
            {
              heading: "APY (Annual Percentage Yield)",
              rows: [
                ["Definition", "The actual annual return, accounting for compounding"],
                ["Used for", "Savings accounts, CDs, investments"],
                ["Calculation", "Interest rate compounded over one year"],
                ["Best for", "Comparing investment returns"],
              ],
              note: "APY is the rate banks advertise for savings accounts. It accounts for compounding, so it's typically higher than the nominal interest rate. APY shows you exactly how much your money will grow in a year.",
            },
          ].map((rate: { heading: string; rows: string[][]; note: string }) => (
            <div key={rate.heading} className="state-card">
              <h3>{rate.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rate.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{rate.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS AFFECTING RATES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Interest Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Interest rates aren't random — they're determined by multiple factors. Understanding these factors helps you anticipate rate changes and take action to secure better rates.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Macro Factors (Economy-Wide)
          </h3>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Federal Reserve policy", "Fed raises rates to fight inflation, lowers to stimulate economy"],
                ["Inflation", "Higher inflation leads to higher interest rates"],
                ["Economic growth", "Strong growth typically leads to higher rates"],
                ["Supply and demand for credit", "High demand for loans pushes rates up"],
                ["Global economic conditions", "International events can affect domestic rates"],
              ].map(([factor, impact]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-8">
            Micro Factors (Individual)
          </h3>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Credit score", "Higher scores get lower rates, lower scores pay more"],
                ["Debt-to-income ratio", "Lower ratios indicate better ability to repay, lower rates"],
                ["Loan term", "Longer terms typically have higher rates"],
                ["Collateral", "Secured loans have lower rates than unsecured loans"],
                ["Loan amount", "Larger loans may have lower rates due to economies of scale"],
              ].map(([factor, impact]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            You can't control macro factors like Federal Reserve policy, but you can control micro factors like your credit score and debt-to-income ratio. Improving these individual factors is the most effective way to secure better interest rates on loans.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── GETTING BETTER RATES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Get Better Interest Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Better interest rates save you thousands over the life of a loan. Here's how to qualify for the best rates available.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve your credit score",
                body: "Credit scores are the biggest factor in determining interest rates. Pay bills on time, keep credit utilization below 30%, avoid opening too many accounts, and check your credit report for errors. A 100-point score improvement can save 1–2% on loan rates.",
              },
              {
                n: "2",
                title: "Reduce your debt-to-income ratio",
                body: "Lenders prefer DTI below 36%. Pay down existing debt, avoid taking on new debt before applying for a loan, and consider increasing your income. Lower DTI signals you can afford payments and qualifies you for better rates.",
              },
              {
                n: "3",
                title: "Shop around and compare",
                body: "Interest rates vary significantly between lenders. Get quotes from at least 3–5 lenders including banks, credit unions, and online lenders. Even a 0.5% difference in rate can save thousands on a large loan.",
              },
              {
                n: "4",
                title: "Choose shorter loan terms",
                body: "Shorter terms typically have lower interest rates. If you can afford higher monthly payments, choosing a 15-year mortgage instead of 30-year can save 0.5–1% in interest rate and massive amounts in total interest.",
              },
              {
                n: "5",
                title: "Consider secured loans",
                body: "Secured loans (backed by collateral like a car or home) have lower rates than unsecured loans. If you have assets to use as collateral, secured loans can save significant interest compared to unsecured personal loans.",
              },
              {
                n: "6",
                title: "Apply with a cosigner",
                body: "If your credit is less than perfect, applying with a cosigner who has excellent credit can help you qualify for better rates. The cosigner's credit strengthens the application, but they're also responsible for the loan if you default.",
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
            Common Interest Rate Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes with interest rates. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on monthly payment",
                body: "A low monthly payment can hide a high interest rate. Always calculate the APR and total cost before committing to a loan. Use the calculator above to uncover the true interest rate behind any monthly payment offer.",
              },
              {
                n: "2",
                title: "Confusing nominal rate with APR",
                body: "The nominal interest rate doesn't include fees. APR includes interest plus fees, giving you the true cost. Always compare APRs, not nominal rates, when shopping for loans.",
              },
              {
                n: "3",
                title: "Ignoring the impact of compounding",
                body: "Compound interest works against you when borrowing and for you when saving. Understand whether interest compounds daily, monthly, or annually — it makes a significant difference over time.",
              },
              {
                n: "4",
                title: "Not shopping around",
                body: "Interest rates vary significantly between lenders. Accepting the first offer without comparing can cost you thousands. Get quotes from multiple lenders before committing.",
              },
              {
                n: "5",
                title: "Choosing variable rates without understanding the risk",
                body: "Variable rates start lower than fixed rates but can increase significantly. If you can't afford higher payments, choose a fixed rate. Variable rates are only appropriate if you can handle rate increases.",
              },
              {
                n: "6",
                title: "Not understanding prepayment penalties",
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
            Practical Tips for Managing Interest Rates
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate the true interest rate behind any loan offer before accepting</>],
              [<><strong>Compare APRs, not monthly payments</strong> — APR includes fees and gives you the true cost</>],
              [<><strong>Improve your credit score</strong> — higher scores qualify for significantly lower rates</>],
              [<><strong>Shop around</strong> — get quotes from at least 3–5 lenders before committing</>],
              [<><strong>Choose fixed rates for predictability</strong> — unless you can handle potential rate increases</>],
              [<><strong>Consider shorter terms</strong> — shorter loans typically have lower interest rates</>],
              [<><strong>Avoid prepayment penalties</strong> — ensure you can pay off early without fees</>],
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
                q: "How do I calculate the interest rate from a monthly payment?",
                a: "Use the formula: Monthly Payment = P × [r(1+r)^n] / [(1+r)^n – 1], where P is principal, r is monthly interest rate, and n is number of payments. Solving for r requires numerical approximation. The calculator above does this automatically for you.",
              },
              {
                q: "What is the difference between APR and interest rate?",
                a: "Interest rate is the cost of borrowing expressed as a percentage. APR includes interest plus fees, giving you the true annual cost of borrowing. Always compare APRs when shopping for loans — a loan with a lower interest rate but high fees might have a higher APR.",
              },
              {
                q: "What is a good interest rate?",
                a: "Good interest rates depend on the type of loan and current market conditions. For mortgages, rates below 4% are excellent (as of 2024). For auto loans, rates below 5% for new cars and below 7% for used cars are good. For personal loans, rates below 10% are good for excellent credit.",
              },
              {
                q: "How does the Federal Reserve affect interest rates?",
                a: "The Federal Reserve sets the federal funds rate, which influences interest rates throughout the economy. When the Fed raises rates, borrowing becomes more expensive. When the Fed lowers rates, borrowing becomes cheaper. Fed policy affects mortgage rates, auto loan rates, and credit card rates.",
              },
              {
                q: "Should I choose a fixed or variable interest rate?",
                a: "Choose fixed rates if you want predictability and can't afford higher payments. Choose variable rates if you can handle potential increases and want to take advantage of potentially lower initial rates. Variable rates are riskier but can save money if rates stay low or decrease.",
              },
              {
                q: "How can I lower my credit card interest rate?",
                a: "Call your credit card issuer and ask for a rate reduction. If you have good payment history, they may lower your rate. If not, consider a balance transfer card with a 0% introductory APR or a personal loan with a lower rate to pay off the balance.",
              },
              {
                q: "What is compound interest?",
                a: "Compound interest is interest calculated on both the principal and accumulated interest. It's more powerful than simple interest because you earn (or pay) interest on your interest. Over long periods, compounding can dramatically increase returns — or costs, if you're borrowing.",
              },
              {
                q: "How does my credit score affect my interest rate?",
                a: "Credit scores are the biggest factor in determining interest rates. Higher scores indicate lower risk and qualify for lower rates. Lower scores indicate higher risk and result in higher rates. A 100-point score improvement can save 1–2% on loan rates, which equals thousands over the life of a loan.",
              },
              {
                q: "When should I refinance my loan?",
                a: "Consider refinancing if interest rates have dropped significantly (at least 1–2%), your credit score has improved, or your financial situation has changed. Calculate the total cost including refinancing fees to ensure it's worthwhile. Refinancing can save thousands if done at the right time.",
              },
              {
                q: "What is a prepayment penalty?",
                a: "A prepayment penalty is a fee charged by some lenders if you pay off your loan early. It's designed to compensate the lender for lost interest. Avoid loans with prepayment penalties if you plan to pay extra or refinance. The ability to pay off early without penalty can save significant interest.",
              },
              {
                q: "How do interest rates affect the economy?",
                a: "Interest rates are a primary tool of monetary policy. Low rates stimulate borrowing and spending, boosting economic growth. High rates slow borrowing and spending, cooling inflation. The Federal Reserve adjusts rates to maintain stable prices and maximum employment.",
              },
              {
                q: "What is the prime rate?",
                a: "The prime rate is the interest rate banks charge their most creditworthy customers. It's typically 3% above the federal funds rate. Many consumer loans, including credit cards and home equity lines, are priced as prime plus a margin. When the prime rate changes, these rates change too.",
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
            Interest rates are the hidden cost of borrowing — and the hidden reward of saving. They determine whether you build wealth or lose it over time. Understanding how they work, how to calculate them, and how to secure better rates is essential financial literacy.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page reveals the true interest rate behind any loan offer. But the real work happens before you borrow: improving your credit, shopping around, comparing APRs, and choosing terms that fit your budget. These steps ensure you're not overpaying for credit.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Interest rates aren't just numbers — they're the price of your financial future. Pay attention to them, understand them, and optimize them. Your future self will thank you for the thousands you'll save.
          </p>
          <div className="pull-quote mt-8">
            The best interest rate is the one you understand. The second best is the one you negotiate.
          </div>
        </section>

      </div>
    </article>
  );
}
