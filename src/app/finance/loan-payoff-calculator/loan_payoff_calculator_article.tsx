import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LoanPayoffArticle() {
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
            Loan Payoff Calculator: Accelerate Your Debt Freedom
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for paying off loans early
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have a $20,000 loan at 7.5% interest with a $400 monthly payment. At this rate, you'll pay it off in 60 months and pay $4,000 in interest. But what if you add just $100 extra each month? You'll pay off the loan in 48 months and save $1,200 in interest. That's 12 months of freedom and $1,200 back in your pocket.
          </p>
          <p className="mb-5">
            Paying off loans early is one of the most powerful financial moves you can make. Every extra dollar toward principal reduces future interest and shortens your loan term. The loan payoff calculator above shows you exactly how extra payments can accelerate your debt freedom.
          </p>
          <p className="mb-5">
            But understanding the math is just the first step. Knowing which loans to pay off first, how to find extra money in your budget, and which payoff strategy works best for your situation is what actually gets you debt-free faster.
          </p>
          <p>
            Loan payoff isn't just about making extra payments — it's about strategy. Different loans, interest rates, and financial situations require different approaches. Let's break down exactly how to pay off your loans efficiently and become debt-free sooner.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Loan Payoff Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Loan payoff is the process of repaying your loan balance to zero. When you make extra payments toward principal, you reduce the outstanding balance faster, which reduces the interest charged in future payments. This creates a snowball effect that accelerates your payoff.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The loan payoff calculator above compares your normal payoff schedule with an accelerated schedule based on extra payments. It shows you exactly how much time and interest you'll save by paying extra each month.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Extra payments can be made in various ways: a fixed amount each month, one-time lump sums when you have extra money, or a combination of both. The key is consistency — even small extra payments add up to significant savings over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── PAYOFF STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Loan Payoff Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            There are two main strategies for paying off multiple loans: avalanche and snowball. Each has advantages depending on your personality and financial situation.
          </p>

          {[
            {
              heading: "Avalanche Method",
              rows: [
                ["Approach", "Pay minimum on all loans, put extra toward highest interest rate"],
                ["Best for", "Minimizing total interest paid"],
                ["Psychological impact", "Less immediate gratification, but mathematically optimal"],
                ["Time to debt-free", "Fastest (mathematically)"],
              ],
              note: "The avalanche method saves the most money because you eliminate the most expensive debt first. However, it can feel slow if your highest-interest loan has a large balance. This method is best for disciplined, analytical types who want to minimize total cost.",
            },
            {
              heading: "Snowball Method",
              rows: [
                ["Approach", "Pay minimum on all loans, put extra toward smallest balance"],
                ["Best for", "Building momentum and motivation"],
                ["Psychological impact", "Quick wins provide motivation to continue"],
                ["Time to debt-free", "Slightly longer than avalanche"],
              ],
              note: "The snowball method provides psychological wins by eliminating small debts quickly. This builds momentum and motivation to tackle larger debts. While it may cost slightly more in interest than avalanche, the behavioral benefits often make it more effective for many people.",
            },
          ].map((strategy: { heading: string; rows: string[][]; note: string }) => (
            <div key={strategy.heading} className="state-card">
              <h3>{strategy.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {strategy.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{strategy.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Payoff Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the theory is one thing. Seeing how payoff strategies play out in real situations is another. Here are three scenarios that illustrate the impact of extra payments.
          </p>

          {[
            {
              heading: "Scenario 1: Small Extra Payment",
              rows: [
                ["Loan", "$20,000 at 7.5%, $400/month, 60 months"],
                ["Normal payoff", "60 months, $4,000 interest"],
                ["With $100 extra/month", "48 months, $2,800 interest"],
                ["Savings", "12 months, $1,200 interest"],
              ],
              note: "Adding just $100/month (25% of your payment) saves 12 months and $1,200 in interest. That's $1,200 that could be invested, saved, or used for other goals. Small extra payments compound into significant savings.",
            },
            {
              heading: "Scenario 2: Large Extra Payment",
              rows: [
                ["Loan", "$20,000 at 7.5%, $400/month, 60 months"],
                ["Normal payoff", "60 months, $4,000 interest"],
                ["With $300 extra/month", "33 months, $1,600 interest"],
                ["Savings", "27 months, $2,400 interest"],
              ],
              note: "Adding $300/month (75% of your payment) nearly cuts the loan term in half and saves $2,400 in interest. If you can afford larger extra payments, the savings are dramatic. This is the power of aggressive debt payoff.",
            },
            {
              heading: "Scenario 3: Lump Sum Payment",
              rows: [
                ["Loan", "$20,000 at 7.5%, $400/month, 60 months"],
                ["Normal payoff", "60 months, $4,000 interest"],
                ["With $5,000 lump sum at month 12", "45 months, $2,900 interest"],
                ["Savings", "15 months, $1,100 interest"],
              ],
              note: "A one-time $5,000 payment after one year saves 15 months and $1,100 in interest. Windfalls like tax refunds, bonuses, or gifts are perfect for lump-sum principal payments that accelerate payoff without affecting your monthly budget.",
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

        {/* ── FINDING EXTRA MONEY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Find Extra Money for Loan Payoff
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Finding extra money to put toward loans requires creativity and discipline. Here are practical ways to free up cash for accelerated debt payoff.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Audit your subscriptions and recurring expenses",
                body: "Review all subscriptions, streaming services, gym memberships, and recurring charges. Cancel anything you don't use or can live without. This can easily free up $50–$100/month for debt payoff.",
              },
              {
                n: "2",
                title: "Reduce discretionary spending",
                body: "Cut back on dining out, entertainment, and non-essential purchases for a few months. The temporary sacrifice accelerates your payoff and frees up cash flow permanently once debts are gone.",
              },
              {
                n: "3",
                title: "Sell unused items",
                body: "Sell clothes, electronics, furniture, and other items you no longer need. Use marketplaces, consignment shops, or garage sales. Apply 100% of proceeds to loan principal.",
              },
              {
                n: "4",
                title: "Take on a side hustle",
                body: "Freelancing, consulting, tutoring, or gig work can generate extra income specifically for debt payoff. Even an extra $200/month makes a significant difference in payoff time.",
              },
              {
                n: "5",
                title: "Use windfalls strategically",
                body: "Tax refunds, bonuses, gifts, and inheritance money should go directly to loan principal. Windfalls are the fastest way to reduce debt without affecting your monthly budget.",
              },
              {
                n: "6",
                title: "Negotiate recurring bills",
                body: "Call your internet, cable, insurance, and phone providers to negotiate better rates. Switch to cheaper providers if necessary. Apply savings directly to loan payoff.",
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
            Common Loan Payoff Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially motivated people make mistakes when paying off loans. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Paying off low-interest debt before high-interest debt",
                body: "Unless you're using the snowball method for psychological reasons, always prioritize high-interest debt. Paying off a 3% student loan before a 18% credit card costs you significant money in interest.",
              },
              {
                n: "2",
                title: "Not building an emergency fund first",
                body: "Before aggressively paying off debt, build a small emergency fund ($1,000–$2,000). Without it, unexpected expenses will force you to use credit cards, undoing your progress.",
              },
              {
                n: "3",
                title: "Depleting all savings to pay off debt",
                body: "Don't drain your emergency fund or retirement accounts to pay off debt. Keep 3–6 months of expenses in emergency savings and continue retirement contributions while paying off debt.",
              },
              {
                n: "4",
                title: "Ignoring prepayment penalties",
                body: "Some loans charge fees for paying off early. Check your loan terms before making extra payments. If there's a prepayment penalty, calculate whether the interest savings outweigh the fee.",
              },
              {
                n: "5",
                title: "Starting too aggressively and burning out",
                body: "Aggressive debt payoff is great, but unsustainable. Start with extra payments you can maintain consistently. It's better to pay $50 extra consistently than $500 extra for one month then quit.",
              },
              {
                n: "6",
                title: "Not celebrating milestones",
                body: "Debt payoff is a marathon, not a sprint. Celebrate milestones like paying off a loan or reaching a specific balance. This maintains motivation and acknowledges your progress.",
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
            Practical Tips for Paying Off Loans Early
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — see how extra payments affect your payoff time and interest savings</>],
              [<><strong>Choose a payoff strategy</strong> — avalanche for minimum interest, snowball for motivation</>],
              [<><strong>Start small and consistent</strong> — even $25–$50 extra monthly makes a difference</>],
              [<><strong>Automate extra payments</strong> — set up automatic transfers to avoid temptation to spend</>],
              [<><strong>Apply windfalls to principal</strong> — tax refunds, bonuses, and gifts go directly to debt</>],
              [<><strong>Track your progress</strong> — watch your balance decline to stay motivated</>],
              [<><strong>Celebrate milestones</strong> — acknowledge progress to maintain momentum</>],
              [<><strong>Stay the course</strong> — debt payoff takes time, but the freedom is worth it</>],
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
                q: "How do I calculate how long it will take to pay off my loan?",
                a: "Use the formula: n = -log(1 - (r × P) / M) / log(1 + r), where P is principal, r is monthly interest rate, M is monthly payment, and n is number of payments. The calculator above does this automatically and shows you both normal and accelerated payoff timelines.",
              },
              {
                q: "Should I pay off my loan early?",
                a: "Generally, yes. Paying off a loan early saves interest and frees up cash flow. However, consider whether you have an adequate emergency fund, whether the loan has a prepayment penalty, and whether you have higher-interest debt. If the loan has no prepayment penalty and you have emergency savings, paying off early is usually beneficial.",
              },
              {
                q: "What's the avalanche method?",
                a: "The avalanche method involves paying minimums on all loans and putting extra money toward the loan with the highest interest rate. This method minimizes total interest paid and is mathematically optimal, but it can feel slow if your highest-interest loan has a large balance.",
              },
              {
                q: "What's the snowball method?",
                a: "The snowball method involves paying minimums on all loans and putting extra money toward the loan with the smallest balance. This method provides psychological wins by eliminating small debts quickly, building momentum to tackle larger debts. It may cost slightly more in interest but is often more effective behaviorally.",
              },
              {
                q: "How much should I pay extra each month?",
                a: "Start with an amount you can comfortably afford — even $25–$50 extra monthly makes a difference. As your budget allows, increase the extra payment. The key is consistency over time rather than large sporadic payments.",
              },
              {
                q: "Should I use a lump sum to pay off debt?",
                a: "Yes, if you have adequate emergency savings. Windfalls like tax refunds, bonuses, and gifts are perfect for lump-sum principal payments. Apply 100% of windfalls to debt for maximum impact. This accelerates payoff without affecting your monthly budget.",
              },
              {
                q: "What is a prepayment penalty?",
                a: "A prepayment penalty is a fee charged by some lenders if you pay off your loan early. It's designed to compensate the lender for lost interest. Check your loan terms before making extra payments. If there's a prepayment penalty, calculate whether the interest savings outweigh the fee.",
              },
              {
                q: "Should I pay off low-interest debt?",
                a: "It depends on your goals. If you're debt-averse and want to be debt-free regardless of interest rate, pay it off. If you're mathematically focused, you might earn more by investing the money instead if the loan rate is lower than your expected investment return.",
              },
              {
                q: "How does paying extra affect my credit score?",
                a: "Paying off loans early generally helps your credit score by reducing your debt-to-income ratio and showing responsible credit management. However, closing a loan account can slightly reduce your credit age, which may have a small temporary impact. The long-term benefits usually outweigh this minor effect.",
              },
              {
                q: "Should I build an emergency fund before paying off debt?",
                a: "Yes, build a small emergency fund ($1,000–$2,000) before aggressively paying off debt. Without it, unexpected expenses will force you to use credit cards, undoing your progress. Once you have a small emergency fund, balance debt payoff with building a larger emergency fund.",
              },
              {
                q: "Can I pay off my loan with a credit card?",
                a: "Technically yes, but it's rarely a good idea. Credit cards typically have much higher interest rates than loans. Transferring a loan to a credit card usually increases your interest costs unless you have a 0% balance transfer offer with a plan to pay it off before the promotional rate expires.",
              },
              {
                q: "How do I stay motivated during debt payoff?",
                a: "Track your progress visually, celebrate milestones, remind yourself of the freedom you'll gain, and consider the snowball method for psychological wins. Join debt-free communities for support and accountability. Remember that every extra payment brings you closer to financial freedom.",
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
            Paying off loans early is one of the most powerful financial moves you can make. Every extra dollar toward principal reduces future interest and shortens your loan term. The loan payoff calculator above shows you exactly how extra payments can accelerate your debt freedom.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The real work happens in the details: choosing a payoff strategy that works for you, finding extra money in your budget, and staying consistent over time. Small, consistent extra payments compound into significant savings and years of freedom.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Debt freedom isn't just about money — it's about freedom. Freedom from monthly payments, freedom from stress, freedom to pursue your goals without debt holding you back. Stay the course, celebrate your progress, and enjoy the journey to becoming debt-free.
          </p>
          <div className="pull-quote mt-8">
            The best loan payoff is the one you complete. The second best is the one you start today.
          </div>
        </section>

      </div>
    </article>
  );
}
