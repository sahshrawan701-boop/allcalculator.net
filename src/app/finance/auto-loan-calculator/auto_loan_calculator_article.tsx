export default function AutoLoanArticle() {
  return (
    <article
      className="w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100"
    >
      <style>{`
        .article-root { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .display-font { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h2 { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h3 { font-family: var(--font-poppins), 'Poppins', sans-serif; }
        .article-root h4 { font-family: var(--font-poppins), 'Poppins', sans-serif; }

        .dropcap::first-letter {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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

        .styled-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 1rem 0; }
        .styled-table th {
          text-align: left;
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.5rem 0.75rem;
          border-bottom: 2px solid #cbd5e1;
          color: #475569;
        }
        .dark .styled-table th { border-bottom-color: #475569; color: #cbd5e1; }
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-style: italic;
          line-height: 1.5;
          color: #334155;
          text-align: center;
        }
        .dark .pull-quote { border-color: #475569; color: #cbd5e1; }

        .numbered-section { display: flex; gap: 1rem; margin-bottom: 1.5rem; align-items: flex-start; }
        .numbered-section .num {
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          font-family: var(--font-poppins), 'Poppins', sans-serif;
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
          <span className="meta-tag">Auto Finance · Personal Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Auto Loan Calculator: Know Your Real Monthly Payment Before You Step
            Into the Dealership
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for US car buyers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You&apos;re sitting across from the finance manager at the
            dealership. The car you want is $34,500. He slides a worksheet
            across the desk showing a monthly payment of $589. That seems
            manageable — about $100 less than your rent. So you sign. Three
            years later you realize you paid over $42,000 for a car that&apos;s
            now worth $18,000.
          </p>
          <p className="mb-5">
            This scenario plays out in dealership finance offices across America
            every single day. Not because buyers are careless — but because the
            monthly payment number is designed to feel like the whole story. It
            isn&apos;t. The loan term, the interest rate, the fees rolled into
            the balance, the add-ons slipped in at signing — the monthly payment
            hides all of it.
          </p>
          <p className="mb-5">
            An auto loan calculator gives you the full picture before you walk
            in. You can work out exactly what a $34,500 car costs at 7.9% APR
            over 72 months versus 48 months, see how a $3,000 down payment
            changes your exposure, and model what happens if you make one extra
            payment per year. That knowledge is worth real money.
          </p>
          <p>
            Let&apos;s break down how auto loan math actually works — and how to
            use it to your advantage.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS IT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Auto Loan Calculator?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An auto loan calculator is a tool that computes your estimated
            monthly car payment, total interest paid, and total loan cost based
            on your loan amount, interest rate, and loan term. The good ones
            also let you factor in a down payment, trade-in value, and sales tax
            to give you a realistic out-the-door financing picture.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            It&apos;s different from a dealer&apos;s payment quote because it
            has no incentive to obscure anything. Plug in the numbers, get the
            truth. You can compare a 48-month loan versus a 72-month loan, see
            what a half-percent difference in APR costs you over the life of the
            loan, and figure out the down payment needed to hit a target monthly
            payment.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Most importantly, it reframes the conversation. Dealerships want you
            focused on the monthly payment. The calculator shifts your focus to
            where it belongs: the total cost.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does an Auto Loan Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator applies the standard amortization formula to your
            loan details. Every monthly payment covers two things: interest
            charged on the current balance, and principal reduction that chips
            away at what you owe. Early in the loan, most of your payment is
            interest. By the final months, it&apos;s almost entirely principal.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what most auto loan calculators take as inputs:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-5">
            {[
              ["Vehicle price", "The sticker price or agreed sale price"],
              [
                "Down payment",
                "Cash you pay upfront — reduces the amount financed",
              ],
              [
                "Trade-in value",
                "Your old car's value applied toward the purchase",
              ],
              [
                "Loan amount",
                "Vehicle price − down payment − trade-in + fees/taxes",
              ],
              [
                "Interest rate (APR)",
                "The annual cost of borrowing, including fees",
              ],
              ["Loan term", "Usually 24–84 months; 60 and 72 are most common"],
              [
                "Sales tax",
                "Varies by state; typically 4%–10% of vehicle price",
              ],
              [
                "Fees",
                "Registration, documentation, title — add to financed amount",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The output is your fixed monthly payment, total amount paid over the
            loan term, and total interest cost — the number dealers prefer you
            not think about too hard.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Auto Loan Payment Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Auto loans use the same fixed-rate amortization formula as mortgages
            — just over a much shorter term. Here it is:
          </p>

          <div className="formula-block">
            <pre>{`M = P × [r(1 + r)^n] / [(1 + r)^n − 1]

Where:
  M = Monthly payment
  P = Principal (amount financed)
  r = Monthly interest rate (APR ÷ 12)
  n = Number of monthly payments (loan term in months)`}</pre>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-2">
            And for total interest paid:
          </p>
          <div className="formula-block">
            <pre>{`Total Interest = (M × n) − P`}</pre>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            The math is front-loaded, meaning your early payments are mostly
            interest. On a $28,000 loan at 7% APR, your very first payment of
            ~$550 includes roughly $163 in interest and only $387 toward
            principal. By month 60, it flips — the same $550 payment is mostly
            principal reduction.
          </p>
          <div className="aside-callout">
            This is why extra payments made early in an auto loan have an
            outsized impact. Every dollar of extra principal you pay in month 2
            eliminates the interest that would have compounded on that dollar
            for the remaining 58 months.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Auto Loan Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let&apos;s walk through a real scenario. Priya is buying a 2022
            Honda CR-V in Dallas, Texas. Negotiated price: $32,000. She&apos;s
            putting $4,000 down, trading in her old car for $6,000. The dealer
            quotes 6.9% APR on a 60-month loan. Texas has 6.25% sales tax.
          </p>

          {[
            {
              step: "1",
              title: "Calculate the amount financed",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`Vehicle price:           $32,000
+ Sales tax (6.25%):     + $2,000
+ Documentation fee:     +   $200
− Down payment:          − $4,000
− Trade-in value:        − $6,000
= Amount financed (P):   $24,200`}</pre>
                </div>
              ),
            },
            {
              step: "2",
              title: "Convert APR to monthly rate",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`APR: 6.9%
Monthly rate (r): 6.9% ÷ 12 = 0.575% = 0.00575`}</pre>
                </div>
              ),
            },
            {
              step: "3",
              title: "Apply the payment formula",
              content: (
                <div className="formula-block mt-2 text-sm">
                  <pre>{`M = 24,200 × [0.00575 × (1.00575)^60] / [(1.00575)^60 − 1]
M = 24,200 × [0.00575 × 1.4063] / [1.4063 − 1]
M = 24,200 × 0.008086 / 0.4063
M ≈ $481.23/month`}</pre>
                </div>
              ),
            },
            {
              step: "4",
              title: "Calculate total cost and total interest",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>
                    Monthly payment: <strong>$481.23</strong>
                  </li>
                  <li>
                    Total paid (60 payments): $481.23 × 60 ={" "}
                    <strong>$28,873.80</strong>
                  </li>
                  <li>Amount financed: $24,200</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">
                    Total interest paid: $4,673.80
                  </li>
                </ul>
              ),
            },
            {
              step: "5",
              title: "See the full out-of-pocket picture",
              content: (
                <ul className="text-slate-800 dark:text-slate-100 space-y-1 text-sm mt-2">
                  <li>Down payment: $4,000</li>
                  <li>Trade-in credited: $6,000</li>
                  <li>Loan payments: $28,873.80</li>
                  <li className="font-bold text-indigo-700 dark:text-indigo-400 pt-1">
                    True out-of-pocket cost: $38,873.80 (vs. $32,000 sticker)
                  </li>
                </ul>
              ),
            },
          ].map(({ step, title, content }) => (
            <div key={step} className="numbered-section">
              <span className="num">{step}</span>
              <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                  Step {step}: {title}
                </p>
                {content}
              </div>
            </div>
          ))}

          <div className="aside-callout">
            Priya ends up paying about $6,873 more than the car&apos;s sticker
            price once you add tax, fees, and interest — even with a solid down
            payment and a competitive rate. This is completely normal and worth
            knowing upfront rather than at loan payoff.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LOAN TERM COMPARISON ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Loan Term Comparison: How Length Dramatically Changes Total Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            This is the table most car buyers never see until it&apos;s too
            late. Using the same $28,000 loan at 7.5% APR, here&apos;s what
            different loan terms actually cost:
          </p>
          <div className="overflow-x-auto">
            <table className="styled-table styled-table-plain">
              <thead>
                <tr>
                  {[
                    "Term",
                    "Monthly Payment",
                    "Total Paid",
                    "Total Interest",
                    "Interest % of Loan",
                  ].map((h) => (
                    <th key={h} className="dark:text-slate-100">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["36 months", "$870", "$31,320", "$3,320", "11.9%"],
                  ["48 months", "$676", "$32,448", "$4,448", "15.9%"],
                  ["60 months", "$561", "$33,660", "$5,660", "20.2%"],
                  ["72 months", "$483", "$34,776", "$6,776", "24.2%"],
                  ["84 months", "$426", "$35,784", "$7,784", "27.8%"],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="dark:text-slate-100">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The 84-month payment looks like a bargain at $426/month. But you end
            up paying $7,784 in interest — more than $4,400 extra versus the
            36-month loan — and your car is worth far less than you owe for the
            first several years. That&apos;s the 84-month trap.
          </p>
          <div className="pull-quote">
            The dealership wants you thinking about what fits your monthly
            budget. You should be thinking about what the loan costs you over
            its entire life.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Auto Loan Examples by State and Buyer Profile
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            State taxes, registration fees, and typical dealer fees all affect
            the total amount financed. Here are four realistic scenarios drawn
            from major US states.
          </p>

          {[
            {
              heading:
                "California — 2023 Toyota RAV4, $36,500, 720 Credit Score, 60 Months",
              rows: [
                ["Vehicle price", "$36,500"],
                ["CA sales tax (7.25%)", "$2,644"],
                ["Registration / DMV fees", "~$850"],
                ["Down payment", "$5,000"],
                ["Amount financed", "$34,994"],
                ["APR (good credit)", "6.4%"],
                ["Monthly payment", "~$683"],
                ["Total interest", "~$5,994"],
              ],
              note: "California's 7.25% base sales tax (higher in some counties — LA County is 10.25%) adds significantly to the financed amount. DMV registration fees in CA are also among the nation's highest, especially on newer, higher-value vehicles. Pricy, but manageable with a good down payment.",
            },
            {
              heading:
                "Texas — 2021 Ford F-150, $42,000, 680 Credit Score, 72 Months",
              rows: [
                ["Vehicle price", "$42,000"],
                ["TX sales tax (6.25%)", "$2,625"],
                ["Title / doc fees", "$~350"],
                ["Down payment", "$3,000"],
                ["Trade-in", "$8,000"],
                ["Amount financed", "$33,975"],
                ["APR (average credit)", "8.9%"],
                ["Monthly payment", "~$603"],
                ["Total interest", "~$9,420"],
              ],
              note: "Texas is a major truck market, and F-150s hold value well — but a 72-month loan at 8.9% on a used truck is expensive. The buyer with 680 credit is paying nearly $9,400 in interest. Improving their score to 720+ before applying could have dropped the rate to ~6.9%, saving close to $3,000 over the loan.",
            },
            {
              heading:
                "Florida — 2020 Honda Accord, $24,000, 580 Credit Score, 60 Months",
              rows: [
                ["Vehicle price", "$24,000"],
                ["FL sales tax (6%)", "$1,440"],
                ["Title / doc fees", "$~400"],
                ["Down payment", "$2,000"],
                ["Amount financed", "$23,840"],
                ["APR (subprime credit)", "14.5%"],
                ["Monthly payment", "~$558"],
                ["Total interest", "~$9,641"],
              ],
              note: "A 580 credit score puts this buyer in subprime territory — 14.5% APR is realistic from most traditional lenders at this score. Total interest on a $24,000 car is nearly $9,600, bringing the true cost close to $34,000. A credit union or buy-here-pay-here lender might offer different terms, but rates stay high. This buyer should seriously consider a cheaper car or a co-signer.",
            },
            {
              heading:
                "New York — 2024 Tesla Model 3, $44,000, 780 Credit Score, 48 Months",
              rows: [
                ["Vehicle price", "$44,000"],
                ["Federal EV tax credit", "−$7,500"],
                ["NY sales tax (8.875%)", "$3,237"],
                ["Registration / fees", "$~600"],
                ["Down payment", "$8,000"],
                ["Amount financed", "$32,337"],
                ["APR (excellent credit)", "5.4%"],
                ["Monthly payment", "~$745"],
                ["Total interest", "~$3,424"],
              ],
              note: "The federal EV tax credit (available as a point-of-sale reduction for qualifying buyers in 2024) dramatically changes the math here. Without it, the financed amount would be $7,500 higher and the total interest over $600 more. NYC's 8.875% sales tax is painful, but the excellent credit score and shorter 48-month term keep total interest under $3,500 — the best interest outcome in this comparison.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
                {note}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Auto Loan Payment
          </h2>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Credit Score Impact
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your credit score is the single biggest variable in the APR
            you&apos;re offered. On the same $30,000 car loan, the spread
            between excellent and poor credit can mean paying $8,000–$12,000
            more in interest over the loan term. Here&apos;s what that looks
            like on a 60-month loan:
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Credit Score</th>
                <th className="dark:text-slate-100">Typical APR (New Car)</th>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Total Interest (60 mo.)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["781–850 (Super prime)", "5.2%", "$570", "$4,200"],
                ["661–780 (Prime)", "6.9%", "$592", "$5,520"],
                ["601–660 (Near prime)", "9.6%", "$633", "$7,980"],
                ["501–600 (Subprime)", "13.1%", "$686", "$11,160"],
                ["300–500 (Deep sub)", "15.7%+", "$720+", "$13,200+"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-400 dark:text-slate-400 italic mb-5">
            Approximate averages based on 2024 Experian State of the Automotive
            Finance Market data. Rates vary by lender and loan term.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            New vs. Used Car Financing
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            New cars typically carry lower APRs than used cars — sometimes
            significantly. Lenders view used vehicles as higher collateral risk
            because they depreciate faster and have more unknown maintenance
            history. Used car loan rates typically run 1.5%–3% higher than new
            car rates for the same credit profile.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Vehicle Age</th>
                <th className="dark:text-slate-100">
                  Typical APR (Good Credit)
                </th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "New (current year)",
                  "5.0%–7.5%",
                  "Best rates; manufacturer incentives possible",
                ],
                [
                  "1–2 years old (CPO)",
                  "5.5%–8.0%",
                  "Certified pre-owned often gets near-new rates",
                ],
                [
                  "3–5 years old",
                  "7.0%–10.5%",
                  "Standard used; lender varies widely",
                ],
                [
                  "6–10 years old",
                  "9.0%–14%",
                  "Higher risk; shorter max terms",
                ],
                [
                  "10+ years / high miles",
                  "12%–20%+",
                  "Harder to finance; specialty lenders",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Down Payment and Trade-In
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your down payment directly reduces the amount financed — and
            therefore the total interest you pay. As a general rule, aim for at
            least 10% down on a used car and 20% on a new car. Why? New cars
            lose 15%–25% of value in the first year. If you put nothing down,
            you&apos;re immediately underwater — owing more than the car is
            worth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Trade-ins work the same way — but be careful. Dealers frequently
            offer to &quot;roll&quot; negative equity from your trade-in into
            the new loan, which means you start the new loan already underwater.
            Never agree to roll negative equity without fully understanding
            exactly how much it&apos;s adding to your new balance.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Dealer Financing vs. Bank vs. Credit Union
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Dealers don&apos;t lend money — they arrange financing through banks
            and captive finance companies (like Toyota Financial Services or GM
            Financial). Dealer finance offices earn a markup — called the
            &quot;dealer reserve&quot; — by inflating the rate above what the
            lender actually approved. On a $30,000 loan, a 1.5% dealer markup
            can cost $1,200–$2,400 over the loan term.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Lender Type</th>
                <th className="dark:text-slate-100">Typical Rate Advantage</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Manufacturer/Captive (good credit)",
                  "Sometimes 0%–2.9% promo",
                  "Best deals when credit qualifies; may waive rebate",
                ],
                [
                  "Credit union",
                  "0.5%–2.0% below bank avg",
                  "Best non-promo rates; membership required",
                ],
                [
                  "Community / regional bank",
                  "Competitive, varies",
                  "Good alternative; pre-approval gives leverage",
                ],
                [
                  "Online lenders (LightStream, etc.)",
                  "Very competitive",
                  "Fast pre-approval; no dealer markup",
                ],
                [
                  "Dealer finance (no pre-approval)",
                  "Often +1%–3% markup",
                  "Convenient but expensive without leverage",
                ],
                [
                  "Buy-here-pay-here lots",
                  "15%–29%+",
                  "Last resort; predatory for most buyers",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Getting pre-approved from your credit union or bank before going to
            the dealership is one of the most powerful moves a car buyer can
            make. You walk in knowing your rate ceiling. If the dealer can beat
            it, great — but you&apos;re negotiating from strength, not
            desperation.
          </div>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
            Extra Payments: The Fastest Way to Save on Interest
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Making even one extra payment per year — or rounding up your monthly
            payment — can save hundreds in interest and shave months off your
            loan. Here&apos;s the math on a $28,000 loan at 7.5% APR over 60
            months ($562/month standard payment):
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">Payoff Time</th>
                <th className="dark:text-slate-100">Total Interest</th>
                <th className="dark:text-slate-100">Savings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard $562/month", "60 months", "$5,720", "—"],
                ["Round up to $600/month", "56 months", "$5,230", "$490"],
                ["+$100/month extra", "53 months", "$4,780", "$940"],
                ["One extra payment per year", "56 months", "$5,180", "$540"],
                ["+$200/month extra", "47 months", "$4,060", "$1,660"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <hr className="rule-divider" />

        {/* ── USA SPECIFIC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            US Auto Financing: What Every Buyer Should Know
          </h2>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Sales Tax Varies Widely by State
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Sales tax on a vehicle purchase is calculated differently by state —
            and it adds meaningfully to the total cost. In states where you can
            choose to finance the tax, it becomes part of your loan balance and
            accrues interest.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">State</th>
                <th className="dark:text-slate-100">State Sales Tax</th>
                <th className="dark:text-slate-100">Tax on $30,000 Car</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Oregon", "0%", "$0", "No sales tax"],
                ["Montana", "0%", "$0", "No sales tax"],
                ["North Carolina", "3%", "$900", "Capped at 3%"],
                ["Texas", "6.25%", "$1,875", "Standard rate"],
                ["California", "7.25%+", "$2,175+", "County additions apply"],
                ["Tennessee", "7%", "$2,100", "Plus local rates"],
                ["New York", "4%+", "$1,200+", "NYC adds up to 4.875%"],
                ["Illinois", "6.25%", "$1,875", "Plus local tax"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Leasing vs. Financing: The Core Trade-Off
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Leasing offers lower monthly payments but you build zero equity. At
            the end of the lease, you either buy the car at the residual value
            or start over. Financing costs more per month but you own the car at
            payoff — a real asset with resale value.
          </p>
          <table className="styled-table styled-table-plain mb-5">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Leasing</th>
                <th className="dark:text-slate-100">Financing</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly cost", "Lower", "Higher"],
                ["Ownership at end", "No (unless buyout)", "Yes"],
                ["Mileage limit", "Typically 10–15K/yr", "None"],
                ["Customization", "Very limited", "Unlimited"],
                [
                  "Insurance required",
                  "Full coverage",
                  "Full coverage (financed)",
                ],
                ["Best for", "New car every 3 yrs", "Long-term ownership"],
                ["Equity built", "None", "Yes — grows each payment"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Refinancing an Auto Loan
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your credit score has improved since you bought your car, or
            interest rates have dropped, refinancing can meaningfully cut your
            monthly payment and total interest. Auto refinancing is generally
            simpler than mortgage refinancing — no appraisal, minimal fees, and
            many lenders can approve in under 24 hours.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The break-even math is simple: if refinancing saves you $80/month
            and the new loan costs $150 in fees, you break even in under 2
            months. The catch: don&apos;t extend your loan term just to lower
            the payment — you&apos;ll pay more in interest even at a lower rate.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
            Negative Equity and Gap Insurance
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Negative equity — owing more on your loan than the car is worth — is
            extraordinarily common with long loan terms on new vehicles. A
            $40,000 new car financed with nothing down on a 72-month loan can
            easily be worth $27,000 after two years while you still owe $33,000.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            If the car is totaled, your insurance pays its actual cash value —
            that $27,000. Your lender still wants the $33,000 you owe. Gap
            insurance covers the $6,000 difference. It typically costs
            $20–$40/year added to your auto insurance policy. It&apos;s worth it
            on any new or nearly-new vehicle financed with a small down payment.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-5">
            Co-Signer Loans
          </h3>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your credit score isn&apos;t strong enough for a competitive
            rate, a co-signer with good credit can qualify you for significantly
            better terms — sometimes dropping the rate by 4%–8%. The co-signer
            is equally liable for the loan, meaning missed payments hurt their
            credit too. This is a real commitment to ask of someone, and both
            parties should understand the stakes.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── DEALERSHIP TRICKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Dealership Financing Tactics to Watch Out For
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Finance offices at dealerships are profit centers. They&apos;re
            staffed by professionals trained to maximize revenue from every
            deal. Here are the most common tactics buyers encounter — and how to
            handle them.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "The monthly payment focus",
                body: 'Dealers want the conversation to be about monthly payment, not price or total cost. "What payment are you looking for?" is a setup. Once you anchor to a number, they can stretch the loan term or inflate the price to hit it. Negotiate the car price first. Then negotiate the financing separately.',
              },
              {
                n: "2",
                title: "Payment packing",
                body: "The finance manager quotes a monthly payment that includes add-ons — extended warranties, GAP, credit insurance, paint protection — without disclosing they're included. The car costs the negotiated price; everything else is extra. Ask for an itemized breakdown of every charge before you sign.",
              },
              {
                n: "3",
                title: "The dealer rate markup",
                body: "If the lender approved you at 6.5%, the dealer might quote 8.5% and pocket the 2% spread as dealer reserve. This is legal in most states. Counter it by getting pre-approved from your bank or credit union before arriving. Tell the finance manager you have financing at X% — can they beat it?",
              },
              {
                n: "4",
                title: "Spot delivery / yo-yo financing",
                body: "The dealer lets you take the car home before financing is finalized. Days later, they call saying the deal fell through and you need to return or sign at a higher rate. This is sometimes a pressure tactic. Don't drive the car until you have a finalized, signed contract.",
              },
              {
                n: "5",
                title: "Rolling negative equity without clarity",
                body: "\"We'll take care of your trade no matter what you owe\" sounds great until you realize they've added $6,000 of negative equity to your new loan balance. Always get the payoff figure on your current loan before going to the dealer and calculate the equity or deficit explicitly.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {title}
                  </p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Using an Auto Loan Calculator
          </h2>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Know your real number before you negotiate",
                body: "Arriving at a dealership having already calculated your expected payment for several scenarios puts you in a completely different negotiating position than a buyer who's relying on the finance manager's worksheet.",
              },
              {
                n: "2",
                title: "Compare loan terms with eyes open",
                body: "The difference between 60 months and 72 months isn't just $80 less per month — it's potentially $1,500 more in interest and two additional years of depreciation risk. The calculator makes this concrete.",
              },
              {
                n: "3",
                title: "Model down payment trade-offs",
                body: "Is it better to put $5,000 down on the car or keep that cash in a high-yield savings account earning 5% APY? The calculator gives you the interest cost of borrowing those $5,000 — then you can decide.",
              },
              {
                n: "4",
                title: "Evaluate refinancing opportunities",
                body: "If your score has gone up 60 points since you bought, the calculator instantly shows what refinancing at a lower rate would save monthly and over the remaining term.",
              },
              {
                n: "5",
                title: "Plan extra payments strategically",
                body: "Seeing exactly how much a $100/month extra payment saves in interest — and how many months it removes from your loan — makes the behavior feel worth doing. It's not abstract; it's $900 and 7 months.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="numbered-section">
                <span className="num">{n}</span>
                <div className="flex-1">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {title}
                  </p>
                  <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Proven Ways to Lower Your Auto Loan Payment and Total Cost
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                <>
                  <strong>Get pre-approved before you shop</strong> — a
                  pre-approval from your credit union or bank is leverage; no
                  dealer can mark up below your pre-approved rate
                </>,
              ],
              [
                <>
                  <strong>
                    Choose the shortest term you can realistically afford
                  </strong>{" "}
                  — every 12 months you add to the loan typically costs
                  $800–$1,500 more in interest on a mid-size vehicle
                </>,
              ],
              [
                <>
                  <strong>Improve your credit score before applying</strong> —
                  even 30–40 extra points can drop your APR by 1%–2%, saving
                  $1,500–$3,000 on a typical 60-month loan
                </>,
              ],
              [
                <>
                  <strong>Put at least 10%–20% down</strong> — eliminates or
                  reduces negative equity risk, lowers the financed amount, and
                  often qualifies you for better rates
                </>,
              ],
              [
                <>
                  <strong>
                    Shop the vehicle price separately from financing
                  </strong>{" "}
                  — agree on the out-the-door price, then discuss financing;
                  never let the two negotiations mix
                </>,
              ],
              [
                <>
                  <strong>
                    Compare dealer financing to your pre-approval side by side
                  </strong>{" "}
                  — if the dealer can beat your rate by at least 0.5%, it might
                  be worth using their financing; otherwise stick with yours
                </>,
              ],
              [
                <>
                  <strong>Make one extra payment per year</strong> — even just
                  rounding your payment up to the next $50 reduces total
                  interest meaningfully over a 60-month term
                </>,
              ],
              [
                <>
                  <strong>Avoid add-ons in the finance office</strong> —
                  extended warranties, GAP, credit insurance, and protection
                  packages are almost always negotiable and almost always
                  cheaper elsewhere
                </>,
              ],
              [
                <>
                  <strong>Consider a used CPO vehicle over new</strong> —
                  certified pre-owned cars depreciate less in the first year and
                  often carry near-new loan rates while costing $5,000–$15,000
                  less
                </>,
              ],
              [
                <>
                  <strong>Refinance if your situation improves</strong> — credit
                  score improvement, rate drops, or a better lender relationship
                  can all justify refinancing after 6–12 months
                </>,
              ],
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
                q: "What is a good interest rate on an auto loan right now?",
                a: "As of 2024, a good auto loan rate for new vehicles with excellent credit (750+) is roughly 5.0%–7.0%. For used vehicles with good credit, 7.0%–9.5% is competitive. Credit unions typically offer the best non-promotional rates. Manufacturer-captive financing occasionally offers 0%–2.9% APR for highly qualified buyers, but these promotions often require forgoing cash rebates — run the math to see which is actually better.",
              },
              {
                q: "How much car can I actually afford?",
                a: "A useful rule of thumb: your total monthly vehicle costs (loan payment + insurance + gas + maintenance) should stay under 15%–20% of your take-home pay. On a $5,000/month take-home, that's roughly $750–$1,000/month total. If your loan payment alone hits $700, you're stretched before insurance and gas. Many financial advisors recommend keeping the vehicle purchase price below 50% of your annual gross income.",
              },
              {
                q: "What loan term is best for a car?",
                a: "Most financial experts recommend 48–60 months as the sweet spot. Shorter terms (36 months) save the most interest but have higher monthly payments. Longer terms (72–84 months) create negative equity risk and cost significantly more in interest. 84-month loans in particular are financially risky for most buyers — the interest cost is high and your car will likely be worth far less than you owe for most of the loan.",
              },
              {
                q: "Is dealer financing always more expensive than a bank?",
                a: "Not always. When manufacturers offer promotional financing (0%–2.9% APR), it's usually genuinely cheaper than bank rates — but you typically must forfeit the cash rebate. In those cases, calculate both options: sometimes taking the $3,000 rebate and financing at 6.5% through your credit union is actually cheaper than 0% financing on the full sticker price. The auto loan calculator makes this comparison easy.",
              },
              {
                q: "How does my credit score affect my car loan?",
                a: "Your credit score is the primary driver of the APR you'll be offered. The difference between super-prime (750+) and subprime (below 600) credit on a $30,000 loan can be $7,000–$10,000 in additional interest over a 60-month term. Even a 50-point improvement — achievable by paying down credit card balances and disputing errors — can save $2,000–$4,000 on a typical auto loan.",
              },
              {
                q: "What is negative equity on a car loan?",
                a: "Negative equity (also called being 'underwater' or 'upside down') means you owe more on the loan than the car is currently worth. This happens most frequently when you put little or no money down on a new vehicle that depreciates quickly. It becomes a problem if you try to sell, trade in, or total the car — you'll owe the lender the difference. Gap insurance covers that difference in the event of a total loss.",
              },
              {
                q: "Should I put a large down payment on a car?",
                a: "Generally yes — the more you put down, the less you finance, the less interest you pay, and the less negative equity risk you carry. Aim for 20% on new vehicles and 10% on used. That said, if you could put $5,000 down on a car or keep it in a 5% APY savings account, compare the interest you'd pay on that $5,000 borrowed vs. the interest you'd earn. At loan rates of 7%+ vs. savings yields of 5%, borrowing costs more — so the down payment typically wins.",
              },
              {
                q: "When does it make sense to refinance an auto loan?",
                a: "Refinancing makes sense when: your credit score has improved significantly since the original loan (50+ points), market interest rates have dropped, you originally financed through a dealer at a marked-up rate, or you need to lower your monthly payment for cash flow reasons. It usually doesn't make sense if you're more than halfway through the loan term, or if extending the term to lower payments will cost more in total interest than you save.",
              },
              {
                q: "What's the difference between APR and interest rate on a car loan?",
                a: "The interest rate is the base annual cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus most fees — origination fees, dealer fees, and other charges spread across the loan term. For auto loans, the gap between interest rate and APR is usually small (less than 0.5%), unlike mortgages where the spread can be significant. Always compare APRs when evaluating loan offers from different lenders.",
              },
              {
                q: "How do extra payments work on an auto loan?",
                a: "Any payment above your required monthly amount — if applied correctly to principal — directly reduces your loan balance and therefore the interest calculated on future payments. Call or verify with your lender that extra payments are applied to principal, not held as a 'prepaid future payment' (which doesn't reduce interest). On most modern auto loans, extra principal payments are applied immediately and reduce both total interest and payoff timeline.",
              },
              {
                q: "Is it better to lease or buy a car?",
                a: "Leasing offers lower monthly payments and the ability to drive a new car every 2–3 years, but you build zero equity and face mileage penalties if you drive more than the allowance. Buying costs more per month but you own the vehicle at payoff, can sell or trade it, and aren't restricted on mileage or modifications. Leasing can make sense for high earners who deduct business use, people who always want the newest technology, and drivers who stay well under mileage limits. For most Americans, financing and keeping the car for 8–10 years is the most cost-effective option.",
              },
              {
                q: "What fees should I expect when buying a car?",
                a: "Beyond the vehicle price and sales tax, common fees include: documentation fee ($50–$700, varies by state and dealer), title and registration fees ($50–$250+, varies by state), dealer prep/destination charge (for new cars, $900–$1,500), and optional add-ons. Some states cap documentation fees; others don't. In California, the doc fee is capped at $85. In Florida, dealers can charge whatever they want. Always ask for a complete itemized list before signing.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p className="text-base leading-relaxed text-slate-800 dark:text-slate-400">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FINAL ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Final Thoughts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Buying a car is the second-largest purchase most Americans make —
            and it&apos;s one of the few major financial decisions people
            routinely make on the spot, under time pressure, in a room designed
            to minimize their negotiating power.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Using an auto loan calculator before you shop changes the dynamic
            completely. You show up knowing what a fair payment looks like at
            current rates, what loan terms actually cost you in dollars, and
            exactly what levers — down payment, term, rate, extra payments —
            move the number in your favor.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Run the numbers at the top of this page before your next car
            purchase or refinance. Adjust the inputs until you find a
            combination that works for your budget without stretching into a
            term so long your car is worth $8,000 while you still owe $19,000.
          </p>
          <div className="pull-quote mt-8">
            The best auto loan isn&apos;t the one with the lowest monthly
            payment. It&apos;s the one with the lowest total cost that you can
            actually afford each month.
          </div>
        </section>
      </div>
    </article>
  );
}
