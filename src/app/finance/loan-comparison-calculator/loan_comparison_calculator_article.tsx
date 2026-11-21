import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LoanComparisonArticle() {
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
            Loan Comparison Calculator: Choose the Best Loan for Your Needs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for comparing loan offers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're offered two loans for $25,000. Loan A: 7.5% interest for 60 months, $500/month. Loan B: 6.5% interest for 60 months, $489/month. The difference seems small — just $11/month. But over the life of the loan, Loan B saves you $660 in interest. That's money that could go toward savings, investments, or other goals.
          </p>
          <p className="mb-5">
            Loan comparison is essential for making smart borrowing decisions. Small differences in interest rates or terms can add up to thousands over the life of a loan. The loan comparison calculator above helps you compare multiple loan offers side-by-side to identify the best option.
          </p>
          <p className="mb-5">
            But comparing loans isn't just about the lowest interest rate. You need to consider monthly payment affordability, total cost, loan term, fees, and your specific financial situation. The cheapest loan on paper might not be the best loan for your needs.
          </p>
          <p>
            Understanding how to compare loans effectively ensures you don't overpay for credit and choose the option that fits your budget and goals. Let's break down exactly how to compare loans and what factors matter most.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY COMPARISON FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Factors to Compare When Choosing a Loan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            When comparing loans, multiple factors beyond the interest rate determine which offer is best. Understanding these factors helps you make an informed decision.
          </p>

          {[
            {
              heading: "Interest Rate (APR)",
              rows: [
                ["Definition", "Annual cost of borrowing including fees"],
                ["Importance", "Lower rates mean lower total cost"],
                ["Comparison", "Compare APRs, not just nominal rates"],
                ["Impact", "1% difference on $25,000 loan = significant savings"],
              ],
              note: "APR includes interest plus fees, giving you the true annual cost. Always compare APRs when shopping for loans. A loan with a lower interest rate but high fees might have a higher APR than a loan with a slightly higher rate but no fees.",
            },
            {
              heading: "Monthly Payment",
              rows: [
                ["Definition", "Amount you pay each month"],
                ["Importance", "Must fit within your budget"],
                ["Comparison", "Lower payments are easier to afford but may cost more overall"],
                ["Impact", "Higher payments = shorter term = less total interest"],
              ],
              note: "Monthly payment affordability is crucial. Choose a payment you can comfortably make even during financial setbacks. However, don't sacrifice total cost for a lower monthly payment if you can afford higher payments.",
            },
            {
              heading: "Loan Term",
              rows: [
                ["Definition", "Length of time to repay the loan"],
                ["Importance", "Affects both monthly payment and total cost"],
                ["Comparison", "Shorter terms have higher payments but lower total cost"],
                ["Impact", "60 vs 36 months on $25,000 = significant interest difference"],
              ],
              note: "Loan term is a trade-off between monthly payment and total cost. Shorter terms save interest but require higher monthly payments. Choose the shortest term you can afford to minimize total cost.",
            },
            {
              heading: "Total Cost",
              rows: [
                ["Definition", "Principal plus all interest and fees"],
                ["Importance", "True cost of borrowing over the loan's life"],
                ["Comparison", "Lower total cost = cheaper loan overall"],
                ["Impact", "Use the calculator above to compare total costs"],
              ],
              note: "Total cost is the most important metric for comparing loans. It includes principal, interest, and fees. The loan with the lowest total cost is the cheapest option, assuming you can afford the monthly payments.",
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

        {/* ── COMPARISON SCENARIOS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Loan Comparison Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the theory is one thing. Seeing how loan comparisons play out in real situations is another. Here are three scenarios that illustrate the impact of different loan terms.
          </p>

          {[
            {
              heading: "Scenario 1: Rate Difference",
              rows: [
                ["Loan amount", "$25,000"],
                ["Loan A rate", "7.5% APR, 60 months, $500/month, $30,000 total"],
                ["Loan B rate", "6.5% APR, 60 months, $489/month, $29,340 total"],
                ["Savings", "$11/month lower payment, $660 total savings"],
              ],
              note: "A 1% difference in interest rate saves $660 over 5 years. That's money that could be invested or used for other goals. Always compare rates across multiple lenders — even small differences add up.",
            },
            {
              heading: "Scenario 2: Term Difference",
              rows: [
                ["Loan amount", "$25,000 at 7% APR"],
                ["Loan A term", "36 months, $772/month, $27,792 total, $2,792 interest"],
                ["Loan B term", "60 months, $495/month, $29,700 total, $4,700 interest"],
                ["Savings", "$277/month savings vs $1,908 extra interest"],
              ],
              note: "The 60-month term offers a lower monthly payment ($277 less) but costs $1,908 more in interest. If you can afford the higher payment, the 36-month term saves significant money. Choose the shortest term you can afford.",
            },
            {
              heading: "Scenario 3: Rate + Term Difference",
              rows: [
                ["Loan amount", "$25,000"],
                ["Loan A", "8% APR, 60 months, $506/month, $30,360 total"],
                ["Loan B", "6% APR, 48 months, $586/month, $28,128 total"],
                ["Savings", "$80/month higher payment but $2,232 total savings"],
              ],
              note: "Loan B has a higher monthly payment ($80 more) but saves $2,232 total due to lower rate and shorter term. Don't let a lower monthly payment blind you to higher total cost. Compare total costs, not just monthly payments.",
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

        {/* ── HOW TO COMPARE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Effectively Compare Loan Offers
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Comparing loans requires a systematic approach. Here's how to ensure you're making an apples-to-apples comparison and choosing the best option.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Compare APRs, not just interest rates",
                body: "APR includes interest plus fees, giving you the true annual cost. Always compare APRs when shopping for loans. A loan with a lower interest rate but high fees might have a higher APR than a loan with a slightly higher rate but no fees.",
              },
              {
                n: "2",
                title: "Compare total costs, not just monthly payments",
                body: "A lower monthly payment often means a longer term and higher total interest. Use the calculator above to compare total costs across different terms. Don't let a lower monthly payment blind you to higher total cost.",
              },
              {
                n: "3",
                title: "Ensure loan amounts are equal",
                body: "Compare loans for the same amount. If one lender offers $25,000 and another offers $30,000, adjust the comparison to the same amount. Comparing different loan amounts is misleading.",
              },
              {
                n: "4",
                title: "Consider your budget constraints",
                body: "The cheapest loan isn't the best if you can't afford the payments. Choose a loan with monthly payments that fit comfortably within your budget, even during financial setbacks.",
              },
              {
                n: "5",
                title: "Check for prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early can save significant interest.",
              },
              {
                n: "6",
                title: "Read the fine print on fees",
                body: "Origination fees, application fees, late payment fees, and other charges can add up. Understand all fees before signing. A loan with no fees might be cheaper than one with a lower rate but high fees.",
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

        {/* ── SHOPPING AROUND ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Shop Around for the Best Loan
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Shopping around is the most effective way to get the best loan. Interest rates and terms vary significantly between lenders. Here's how to find the best deal.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Get quotes from multiple lenders",
                body: "Get quotes from at least 3–5 lenders including banks, credit unions, and online lenders. Each lender uses different criteria to set rates, so shopping around can reveal significant savings.",
              },
              {
                n: "2",
                title: "Compare within a short timeframe",
                body: "Get all quotes within 14–30 days. Multiple credit inquiries for the same type of loan within a short period count as a single inquiry on your credit report, minimizing impact on your score.",
              },
              {
                n: "3",
                title: "Check with your current bank first",
                body: "Your existing bank may offer better rates to existing customers. They already have your financial information and may be willing to offer preferential terms to keep your business.",
              },
              {
                n: "4",
                title: "Consider credit unions",
                body: "Credit unions are member-owned and often offer lower rates than banks. If you're eligible to join a credit union, check their rates — they're often significantly better than traditional banks.",
              },
              {
                n: "5",
                title: "Use online comparison tools",
                body: "Online loan comparison sites can help you quickly compare rates from multiple lenders. However, always verify the quotes directly with the lenders before making a decision.",
              },
              {
                n: "6",
                title: "Negotiate with lenders",
                body: "If you have a better offer from another lender, ask if your preferred lender can match or beat it. Lenders often have flexibility to offer better rates to competitive borrowers.",
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
            Common Loan Comparison Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially savvy people make mistakes when comparing loans. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on monthly payment",
                body: "A lower monthly payment often means a longer term and higher total interest. Always calculate the total cost before committing to a loan. Use the calculator above to compare total costs across different terms.",
              },
              {
                n: "2",
                title: "Ignoring fees",
                body: "Origination fees, application fees, and other charges can add hundreds or thousands to your loan cost. Always compare APRs, which include fees, not just interest rates.",
              },
              {
                n: "3",
                title: "Not shopping around",
                body: "Interest rates vary significantly between lenders. Accepting the first offer without comparing can cost you thousands. Get quotes from multiple lenders before committing.",
              },
              {
                n: "4",
                title: "Comparing different loan amounts",
                body: "Comparing a $25,000 loan to a $30,000 loan is misleading. Adjust comparisons to the same loan amount to ensure you're making an apples-to-apples comparison.",
              },
              {
                n: "5",
                title: "Ignoring prepayment penalties",
                body: "Some loans charge fees for paying off early. If you plan to pay extra or refinance, avoid loans with prepayment penalties. The ability to pay off early can save significant interest.",
              },
              {
                n: "6",
                title: "Choosing the lowest rate without considering terms",
                body: "The lowest rate might come with unfavorable terms like prepayment penalties, high fees, or strict repayment terms. Consider the complete loan package, not just the rate.",
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
            Practical Tips for Comparing Loans
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — compare total costs, monthly payments, and interest across multiple loan offers</>],
              [<><strong>Compare APRs, not interest rates</strong> — APR includes fees and gives you the true cost</>],
              [<><strong>Shop around</strong> — get quotes from at least 3–5 lenders before committing</>],
              [<><strong>Compare equal loan amounts</strong> — ensure you're making an apples-to-apples comparison</>],
              [<><strong>Consider your budget</strong> — choose payments you can afford even during financial setbacks</>],
              [<><strong>Check for prepayment penalties</strong> — ensure you can pay off early without fees</>],
              [<><strong>Read the fine print</strong> — understand all fees, terms, and conditions before signing</>],
              [<><strong>Negotiate</strong> — ask lenders to match or beat better offers from competitors</>],
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
                q: "How do I compare two loan offers?",
                a: "Compare APRs, monthly payments, total costs, loan terms, and fees. Use the calculator above to input the details of each loan and see a side-by-side comparison. Focus on total cost rather than just monthly payment or interest rate.",
              },
              {
                q: "What's the difference between interest rate and APR?",
                a: "Interest rate is the cost of borrowing expressed as a percentage. APR includes interest plus fees, giving you the true annual cost of borrowing. Always compare APRs when shopping for loans — a loan with a lower interest rate but high fees might have a higher APR.",
              },
              {
                q: "Should I choose the loan with the lowest monthly payment?",
                a: "Not necessarily. A lower monthly payment often means a longer term and higher total interest. Choose the shortest term you can afford to minimize total cost. Use the calculator to compare total costs across different terms.",
              },
              {
                q: "How many lenders should I get quotes from?",
                a: "Get quotes from at least 3–5 lenders including banks, credit unions, and online lenders. Each lender uses different criteria to set rates, so shopping around can reveal significant savings. More quotes increase your chances of finding the best deal.",
              },
              {
                q: "Does comparing loans hurt my credit score?",
                a: "Multiple credit inquiries for the same type of loan within a 14–30 day period count as a single inquiry on your credit report. This allows you to shop around without significantly impacting your score. Get all quotes within this timeframe.",
              },
              {
                q: "Should I choose a shorter or longer loan term?",
                a: "Choose the shortest term you can afford. Shorter terms have higher monthly payments but lower total interest. Longer terms have lower monthly payments but higher total interest. If you can afford higher payments, choose the shorter term to save money.",
              },
              {
                q: "What fees should I look for when comparing loans?",
                a: "Look for origination fees, application fees, processing fees, underwriting fees, and prepayment penalties. These fees can add hundreds or thousands to your loan cost. Always compare APRs, which include fees, to get the true cost.",
              },
              {
                q: "Can I negotiate loan terms?",
                a: "Yes, you can negotiate loan terms. If you have a better offer from another lender, ask your preferred lender to match or beat it. Lenders often have flexibility to offer better rates or terms to competitive borrowers.",
              },
              {
                q: "Should I use a loan broker?",
                a: "Loan brokers can help you find deals from multiple lenders, but they may charge fees or receive commissions that increase your cost. If you use a broker, understand how they're compensated and compare their offers to direct lender quotes.",
              },
              {
                q: "How do I know if a loan offer is too good to be true?",
                a: "Be suspicious of rates significantly lower than market averages, lenders who don't check your credit, or loans with hidden fees or unfavorable terms. Research the lender, read reviews, and verify all terms before signing. If it seems too good to be true, it probably is.",
              },
              {
                q: "Should I compare fixed vs variable rate loans?",
                a: "Yes, compare both types. Fixed rates offer predictability but may be higher. Variable rates start lower but can increase over time. Choose fixed rates if you need predictability and can't afford higher payments. Choose variable rates only if you can handle potential increases.",
              },
              {
                q: "What's the most important factor when comparing loans?",
                a: "Total cost is the most important factor — it's the true cost of borrowing over the loan's life. However, you must also ensure the monthly payment fits your budget. The best loan balances low total cost with affordable monthly payments.",
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
            Loan comparison is one of the most important financial skills you can develop. Small differences in interest rates or terms can add up to thousands over the life of a loan. Taking the time to compare loans ensures you don't overpay for credit.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you compare loan offers side-by-side. But the real work happens in the details: comparing APRs, understanding fees, shopping around, and choosing terms that fit your budget. These steps ensure you get the best loan for your needs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Your financial future depends on making smart borrowing decisions. Don't accept the first offer — compare, negotiate, and choose wisely. The money you save by choosing the right loan is money you can invest, save, or use to achieve your goals.
          </p>
          <div className="pull-quote mt-8">
            The best loan is the one you compare against others. The second best is the one you don't overpay for.
          </div>
        </section>

      </div>
    </article>
  );
}
