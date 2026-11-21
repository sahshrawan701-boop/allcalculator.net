import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PaydayLoanArticle() {
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
          <span className="meta-tag">Personal Finance · Debt</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Payday Loan Calculator: Understand the True Cost
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding payday loans
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You need $500 for an emergency. A payday lender offers you the money for a $50 fee, due in 14 days. That sounds reasonable — just 10% of the loan amount. But when you calculate the annual percentage rate (APR), it's 260%. If you roll over the loan three times, you'll pay $200 in fees for a $500 loan. That's 40% of the original amount in interest alone.
          </p>
          <p className="mb-5">
            Payday loans are short-term, high-cost loans designed to bridge the gap between paychecks. They're easy to get but incredibly expensive. The payday loan calculator above reveals the true APR and total cost of these loans, helping you understand what you're really paying.
          </p>
          <p className="mb-5">
            But understanding the cost is just the first step. Knowing how payday loans work, the dangers of the debt cycle, and what alternatives exist is what actually protects you from financial ruin.
          </p>
          <p>
            Payday loans are rarely the right choice. They're a last resort that often leads to a cycle of debt that's difficult to escape. Let's break down exactly how payday loans work, why they're so dangerous, and what to do instead.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS PAYDAY LOAN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Payday Loan?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A payday loan is a short-term, high-interest loan typically due on your next payday. These loans are usually for small amounts ($100–$1,000) and require repayment in full within 2–4 weeks. Payday lenders don't check credit — they only require proof of income and a bank account.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Payday loans are marketed as emergency cash for unexpected expenses. In reality, they're debt traps that prey on people who are already financially vulnerable. The fees are structured to sound reasonable but translate to astronomical APRs when annualized.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The payday loan calculator above calculates the true APR based on the loan amount, fee, and term. This reveals the actual cost of borrowing and helps you compare payday loans to alternatives that are far cheaper.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Payday Loans Work
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Payday loans work differently than traditional loans. Instead of charging interest, lenders charge a flat fee. This fee sounds reasonable but translates to an extremely high APR when calculated over a year.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            APR Formula for Payday Loans:
          </p>
          <div className="formula-block">
            <pre>APR = (Fee / Loan Amount) × (365 / Loan Term in Days) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Loan Amount", "$500"],
              ["Fee", "$50"],
              ["Loan Term", "14 days"],
              ["Fee as percentage", "$50 / $500 = 10%"],
              ["APR", "(0.10 × (365 / 14)) × 100 = 260%"],
              ["Total Repayment", "$500 + $50 = $550"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A $50 fee on a $500 loan for 14 days sounds reasonable — just 10%. But the APR is 260%, which is 5–10 times higher than even the most expensive credit cards. This is why payday loans are so dangerous: the fees are structured to hide the true cost.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── THE DEBT CYCLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Payday Loan Debt Cycle
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The biggest danger of payday loans is the debt cycle. When you can't repay the loan on the due date, lenders offer to roll it over for another fee. This cycle continues, trapping borrowers in ever-increasing debt.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Rollover</th>
                <th className="dark:text-slate-100">Total Fees Paid</th>
                <th className="dark:text-slate-100">Total Repayment</th>
                <th className="dark:text-slate-100">Effective APR</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Original loan", "$50", "$550", "260%"],
                ["1 rollover", "$100", "$600", "260%"],
                ["2 rollovers", "$150", "$650", "260%"],
                ["3 rollovers", "$200", "$700", "260%"],
                ["4 rollovers", "$250", "$750", "260%"],
              ].map(([rollover, fees, repayment, apr]) => (
                <tr key={rollover}>
                  <td className="dark:text-slate-100">{rollover}</td>
                  <td className="dark:text-slate-100">{fees}</td>
                  <td className="dark:text-slate-100">{repayment}</td>
                  <td className="dark:text-slate-100">{apr}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            After just 4 rollovers (8 weeks), you've paid $250 in fees on a $500 loan — 50% of the original amount. Many borrowers roll over loans 10+ times, paying more in fees than the original loan amount. This is the debt cycle that destroys financial stability.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ALTERNATIVES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Payday Loan Alternatives
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Payday loans should be a last resort. There are almost always better alternatives that cost less and don't trap you in debt. Here are options to consider before turning to a payday lender.
          </p>

          {[
            {
              heading: "Credit Card Cash Advance",
              rows: [
                ["Cost", "Typically 3–5% fee + 25–30% APR"],
                ["Pros", "Lower APR than payday loans, longer repayment terms"],
                ["Cons", "Still expensive, can hurt credit if not repaid"],
              ],
              note: "Credit card cash advances are expensive but typically 5–10 times cheaper than payday loans. If you have a credit card, this is almost always a better option than a payday loan.",
            },
            {
              heading: "Personal Loan from Bank/Credit Union",
              rows: [
                ["Cost", "6–36% APR depending on credit"],
                ["Pros", "Much lower rates, longer repayment terms, builds credit"],
                ["Cons", "Requires credit check, may take longer to approve"],
              ],
              note: "Even if you have poor credit, personal loans from credit unions or online lenders typically have APRs below 36% — still high but 7–10 times cheaper than payday loans. Many credit unions offer payday loan alternatives with much lower rates.",
            },
            {
              heading: "Borrow from Family or Friends",
              rows: [
                ["Cost", "0% interest or low interest"],
                ["Pros", "Cheapest option, flexible repayment terms"],
                ["Cons", "Strains relationships, awkward to discuss"],
              ],
              note: "Borrowing from family or friends is the cheapest option if available. Be clear about repayment terms and put them in writing to avoid misunderstandings. Treat it as a formal loan to preserve the relationship.",
            },
            {
              heading: "Payment Plans with Creditors",
              rows: [
                ["Cost", "0% interest (no new debt)"],
                ["Pros", "No new debt, preserves credit, solves root problem"],
                ["Cons", "Requires negotiation, may not be available"],
              ],
              note: "If you need money for bills, call your creditors and ask for payment plans or extensions. Many utility companies, medical providers, and landlords offer payment arrangements that avoid new debt entirely.",
            },
            {
              heading: "Emergency Assistance Programs",
              rows: [
                ["Cost", "Free or low-cost"],
                ["Pros", "No debt, addresses root cause, community support"],
                ["Cons", "May have eligibility requirements, application process"],
              ],
              note: "Many communities have emergency assistance programs for utilities, rent, food, and medical expenses. Charities, religious organizations, and government agencies offer help that doesn't require repayment.",
            },
          ].map((alternative: { heading: string; rows: string[][]; note: string }) => (
            <div key={alternative.heading} className="state-card">
              <h3>{alternative.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {alternative.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{alternative.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── BREAKING THE CYCLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Break the Payday Loan Cycle
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            If you're already trapped in the payday loan cycle, breaking free requires a strategic approach. Here's how to escape the debt trap and rebuild financial stability.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Stop taking new payday loans",
                body: "The first step is to stop the bleeding. Commit to not taking any new payday loans, no matter how tempting. This requires cutting expenses or finding alternative income sources, but it's essential to breaking the cycle.",
              },
              {
                n: "2",
                title: "Prioritize payday loan repayment",
                body: "Pay off payday loans before any other debt except essential bills like rent and utilities. The high APR makes them the most expensive debt you have. Every day you delay costs you significant money.",
              },
              {
                n: "3",
                title: "Negotiate with the lender",
                body: "Some payday lenders offer extended payment plans (EPPs) that allow you to repay over several months without additional fees. Ask about this option before your due date. It won't reduce the total cost but will make payments manageable.",
              },
              {
                n: "4",
                title: "Consolidate with a cheaper loan",
                body: "If you have multiple payday loans, consolidate them with a personal loan from a credit union or online lender. Even at 30–36% APR, this is 7–10 times cheaper than payday loans and gives you a realistic repayment timeline.",
              },
              {
                n: "5",
                title: "Seek nonprofit credit counseling",
                body: "Nonprofit credit counseling agencies can help you create a debt management plan that consolidates payday loans with lower interest rates and affordable payments. They can also negotiate with lenders on your behalf.",
              },
              {
                n: "6",
                title: "Build an emergency fund",
                body: "Once you're out of payday loan debt, build a small emergency fund ($500–$1,000) to avoid future payday loans. Even saving $25–$50 per month adds up and provides a buffer against emergencies.",
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
            Common Payday Loan Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially desperate people make mistakes with payday loans that make their situation worse. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not calculating the true APR",
                body: "Payday lenders advertise fees, not APRs. A $15 fee on a $100 loan sounds like 15%, but the APR is 391%. Always calculate the APR using the calculator above to understand the true cost before borrowing.",
              },
              {
                n: "2",
                title: "Borrowing more than you can repay",
                body: "Only borrow what you can repay in full on the due date. Borrowing more than you can afford guarantees you'll need to roll over the loan, starting the debt cycle. Be realistic about your ability to repay.",
              },
              {
                n: "3",
                title: "Rolling over loans repeatedly",
                body: "Each rollover adds another fee and extends the debt cycle. After 3–4 rollovers, you've paid more in fees than the original loan amount. Avoid rollovers at all costs — they're the primary mechanism of the debt trap.",
              },
              {
                n: "4",
                title: "Not exploring alternatives first",
                body: "Payday loans should be a last resort. Exhaust all other options: credit cards, personal loans, borrowing from family, payment plans with creditors, and emergency assistance programs. Almost anything is better than a payday loan.",
              },
              {
                n: "5",
                title: "Using payday loans for non-emergencies",
                body: "Payday loans are designed for emergencies. Using them for discretionary spending like vacations, shopping, or entertainment is financial suicide. If you can't afford it without a payday loan, you can't afford it at all.",
              },
              {
                n: "6",
                title: "Ignoring the long-term impact",
                body: "Payday loans can damage your credit if they go to collections, and the debt cycle can prevent you from saving or building wealth. The short-term relief isn't worth the long-term financial damage.",
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
            Practical Tips for Avoiding Payday Loans
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate the true APR before borrowing to understand the cost</>],
              [<><strong>Exhaust all alternatives first</strong> — credit cards, personal loans, family, payment plans, assistance programs</>],
              [<><strong>Borrow only what you can repay</strong> — avoid rollovers and the debt cycle</>],
              [<><strong>Build an emergency fund</strong> — even $500 prevents future payday loans</>],
              [<><strong>Negotiate with creditors</strong> — payment plans avoid new debt entirely</>],
              [<><strong>Seek credit counseling</strong> — nonprofit agencies can help manage debt</>],
              [<><strong>Avoid rollovers at all costs</strong> — each rollover adds fees and extends the debt cycle</>],
              [<><strong>Consider credit union alternatives</strong> — many offer payday loan alternatives with much lower rates</>],
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
                q: "What is a payday loan?",
                a: "A payday loan is a short-term, high-interest loan typically due on your next payday. These loans are usually for small amounts ($100–$1,000) and require repayment in full within 2–4 weeks. Payday lenders charge a flat fee instead of interest, which translates to extremely high APRs (300–400% or more).",
              },
              {
                q: "How do I calculate payday loan APR?",
                a: "Use the formula: APR = (Fee / Loan Amount) × (365 / Loan Term in Days) × 100. For example, a $50 fee on a $500 loan for 14 days: (50/500) × (365/14) × 100 = 260% APR. The calculator above does this automatically for you.",
              },
              {
                q: "Why are payday loans so expensive?",
                a: "Payday loans are expensive because lenders charge high fees to compensate for the risk of lending to people with poor credit without collateral. The fees are structured to sound reasonable ($15 per $100 borrowed) but translate to APRs of 300–400% or more when annualized.",
              },
              {
                q: "What is a payday loan rollover?",
                a: "A rollover occurs when you can't repay the loan on the due date and the lender extends the loan for another term in exchange for an additional fee. Rollovers are the primary mechanism of the payday loan debt cycle. Each rollover adds another fee without reducing the principal, trapping borrowers in ever-increasing debt.",
              },
              {
                q: "Are payday loans legal?",
                a: "Payday loans are legal in most US states, but many states have restrictions on fees, loan amounts, and rollovers. Some states have banned payday loans entirely or capped APRs at 36%. Check your state's laws before borrowing, and be aware that online lenders may operate from states with laxer regulations.",
              },
              {
                q: "Do payday loans affect credit scores?",
                a: "Payday loans typically don't affect credit scores if repaid on time because most payday lenders don't report to credit bureaus. However, if you default and the debt goes to collections, it can severely damage your credit. Some payday lenders do report to credit bureaus, so check the lender's policy.",
              },
              {
                q: "What are alternatives to payday loans?",
                a: "Alternatives include credit card cash advances (lower APR), personal loans from banks or credit unions (much lower rates), borrowing from family or friends (0% interest), payment plans with creditors (no new debt), and emergency assistance programs (free or low-cost). Almost any alternative is better than a payday loan.",
              },
              {
                q: "How do I get out of payday loan debt?",
                a: "Stop taking new loans, prioritize payday loan repayment, negotiate extended payment plans with lenders, consolidate with cheaper personal loans, seek nonprofit credit counseling, and build an emergency fund to prevent future borrowing. Breaking the cycle requires stopping new loans and systematically paying off existing debt.",
              },
              {
                q: "Can I get a payday loan with bad credit?",
                a: "Yes, payday lenders don't check credit — they only require proof of income and a bank account. This makes them accessible to people with bad credit, but it's also what makes them dangerous. The lack of credit check means lenders charge extremely high fees to compensate for the risk.",
              },
              {
                q: "What is the maximum payday loan amount?",
                a: "Payday loan amounts vary by state but typically range from $100 to $1,000. Some states cap loan amounts at $500, while others allow up to $1,000 or more. Online lenders may offer different limits than storefront lenders. Check your state's laws for specific limits.",
              },
              {
                q: "How long do I have to repay a payday loan?",
                a: "Payday loans are typically due on your next payday, which is usually 2–4 weeks (14–30 days). Some lenders offer longer terms up to 60 days, but this is less common. The short repayment term is what makes payday loans difficult to repay and leads to rollovers.",
              },
              {
                q: "Are there payday loan alternatives with lower rates?",
                a: "Yes, many credit unions offer payday loan alternatives (PALs) with APRs capped at 28% and longer repayment terms. Some banks offer small-dollar loans with lower rates. Online lenders also offer personal loans for bad credit with APRs of 30–36%, which is still high but 7–10 times cheaper than payday loans.",
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
            Payday loans are a financial trap disguised as a helping hand. The fees sound reasonable but translate to APRs of 300–400% or more. The short repayment terms make it difficult to repay on time, leading to rollovers that trap borrowers in a cycle of debt that can last months or years.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page reveals the true cost of payday loans. But the real solution is avoiding them entirely. Exhaust all alternatives: credit cards, personal loans, borrowing from family, payment plans with creditors, and emergency assistance programs. Almost any option is better than a payday loan.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If you're already trapped in the payday loan cycle, break free by stopping new loans, prioritizing repayment, consolidating with cheaper loans, and seeking help from credit counseling agencies. The path out is difficult but worth it — financial freedom is worth the struggle.
          </p>
          <div className="pull-quote mt-8">
            The best payday loan is the one you never take. The second best is the one you pay off immediately.
          </div>
        </section>

      </div>
    </article>
  );
}
