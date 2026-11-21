import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CreditCardPayoffArticle() {
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
        .dark .faq-item h3 { color: #e2e8f0 !(important); }

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
          <span className="meta-tag">Personal Finance · Debt Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Credit Card Payoff Calculator: Chart Your Path to Zero Debt
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to destroying high-interest revolving debt
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Credit card debt is one of the most destructive forces in personal finance. Because it relies on compound interest working against you, what begins as a manageable $5,000 balance can rapidly spiral into an inescapable financial burden.
          </p>
          <p className="mb-5">
            The banking industry intentionally sets minimum payment requirements extraordinarily low—often just 1% to 2% of the total balance. If you only pay the minimum, the bank maximizes its profit by keeping you in debt for decades, draining thousands of dollars in pure interest from your pocket.
          </p>
          <p className="mb-5">
            A Credit Card Payoff Calculator strips away the illusion of the "minimum payment due." It allows you to model exactly how long it will take to become debt-free by making fixed monthly payments, or conversely, how much money you need to pay each month to hit a specific debt-free deadline.
          </p>
          <p>
            Whether you are using the Debt Snowball method or the Debt Avalanche approach, using a payoff calculator is the critical first step to regaining control of your cash flow and financial future.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Credit Card Payoff Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses an amortization algorithm modified for revolving debt. It takes your current balance and interest rate, and models how your principal shrinks over time based on your payment amount.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To generate an accurate payoff timeline, you must input three primary pieces of data:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current Balance", "The total amount of money you owe on the credit card right now."],
              ["Interest Rate (APR)", "The Annual Percentage Rate charged by the bank (e.g., 22.99%)."],
              ["Monthly Payment Target", "The exact dollar amount you plan to send the bank every single month."]
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator will immediately output two crucial numbers: the total number of months it will take to hit $0, and the total amount of interest you will be forced to pay the bank over that time period.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Payoff Time Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Calculating how many months it takes to pay off a credit card requires using logarithms, because the amount of interest generated drops slightly every single month as the principal shrinks.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The NPER (Number of Periods) Formula:
          </p>
          <div className="formula-block">
            <pre>{`N = -log(1 - (B × r) / P) / log(1 + r)`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            What each variable means:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["N", "The total number of months to pay off the debt."],
              ["B (Balance)", "The starting principal balance owed."],
              ["r (Monthly Rate)", "Your APR divided by 12 (e.g., 24% APR = 2% monthly or 0.02)."],
              ["P (Payment)", "The fixed monthly payment you make."],
              ["log", "The mathematical logarithm function."]
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-36 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            <strong>The "Never Payoff" Scenario:</strong> If your Monthly Payment (P) is less than the monthly interest generated (B × r), the logarithm formula mathematically breaks. In real life, this means your balance is growing every month despite your payments.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Guide: How to Use the Calculator
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Locate your current balance",
                content: "Log into your banking app and find your exact 'Current Balance' (not your statement balance)."
              },
              {
                step: "2",
                title: "Find your APR",
                content: "Look at the bottom of your monthly PDF statement to find your exact Annual Percentage Rate for purchases. The average is currently over 22%."
              },
              {
                step: "3",
                title: "Input your target payment",
                content: "Enter the amount of money you can realistically afford to pay every month. Start with a number higher than the minimum payment."
              },
              {
                step: "4",
                title: "Analyze the total interest",
                content: "Look at the 'Total Interest Paid' result. This is the amount of extra money the debt is costing you on top of what you originally borrowed."
              },
              {
                step: "5",
                title: "Adjust and optimize",
                content: "Increase your monthly payment in the calculator by just $50 or $100 to see how drastically it reduces the payoff timeline and the interest charged."
              }
            ].map(({ step, title, content }) => (
              <div key={step} className="numbered-section">
                <span className="num">{step}</span>
                <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                    Step {step}: {title}
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WORKED EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Payoff Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let's look at what happens to a $10,000 credit card balance at 24% APR when the user chooses different payment strategies.
          </p>

          {[
            {
              heading: "Scenario 1: The Minimum Payment Trap",
              rows: [
                ["Starting Balance", "$10,000"],
                ["APR", "24%"],
                ["Monthly Payment", "$250 (Approx. 2.5% minimum)"],
                ["Time to Payoff", "8 Years and 4 Months (100 months)"],
                ["Total Interest Paid", "$14,978"],
              ],
              note: "By paying only the minimum, this user will pay the bank almost $15,000 in pure interest. The $10,000 debt will ultimately cost them nearly $25,000.",
            },
            {
              heading: "Scenario 2: The Aggressive Payoff",
              rows: [
                ["Starting Balance", "$10,000"],
                ["APR", "24%"],
                ["Monthly Payment", "$500"],
                ["Time to Payoff", "2 Years and 3 Months (27 months)"],
                ["Total Interest Paid", "$2,955"],
              ],
              note: "By doubling the payment to $500, the user escapes the debt 6 years faster and saves over $12,000 in interest. This highlights the power of aggressive principal payments.",
            },
            {
              heading: "Scenario 3: The 1-Year Goal",
              rows: [
                ["Starting Balance", "$10,000"],
                ["APR", "24%"],
                ["Goal Timeframe", "12 Months"],
                ["Required Monthly Payment", "$945"],
                ["Total Interest Paid", "$1,347"],
              ],
              note: "If the user is absolutely determined to be debt-free in exactly one year, they must come up with $945 every single month. This usually requires taking on a second job or side hustle.",
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
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── RESULT INTERPRETATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Interpreting Your Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you run the numbers on your specific debt, you must take action based on the reality of the timeline:
          </p>
          <ul className="space-y-4 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Total Interest Shock:</strong> If the calculator says you will pay $5,000 in interest, realize that you are throwing away $5,000 that could have funded a vacation or a Roth IRA. Use that anger to motivate you to cut expenses and pay more.
            </li>
            <li>
              <strong>The 3-Year Threshold:</strong> If your aggressive payoff plan still takes longer than 36 months, you may need to look into a Balance Transfer Card or a Personal Loan to lower the interest rate, as maintaining extreme frugality for 3+ years is psychologically difficult.
            </li>
            <li>
              <strong>Negative Progression:</strong> If you input a payment number and the calculator gives an error or infinite timeline, you are not even covering the monthly interest charges. You must immediately find a way to increase your payments to avoid default.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── REFERENCE TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Cost of Minimum Payments
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This table illustrates how long it takes to pay off a $5,000 balance at 22% APR based on different fixed monthly payments.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Monthly Payment</th>
                <th className="dark:text-slate-100">Time to $0 Balance</th>
                <th className="dark:text-slate-100">Total Interest Paid</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$100 (Minimum)", "10 Years, 6 Months", "$7,630"],
                ["$150", "4 Years, 5 Months", "$2,895"],
                ["$200", "3 Years", "$1,840"],
                ["$300", "1 Year, 8 Months", "$1,045"],
                ["$500", "11 Months", "$550"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">Adding just $50 to a $100 minimum payment cuts the payoff time by more than half and saves almost $5,000 in interest.</p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL WORLD APPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Debt Payoff Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you know your timeline, you must apply a psychological framework to actually execute the plan. The two most effective strategies are:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>The Debt Avalanche (Mathematically Optimal):</strong> You list all your debts from highest interest rate to lowest. You pay the minimums on everything, and throw every extra dollar at the card with the highest APR. This saves the absolute most money in interest.</li>
            <li><strong>The Debt Snowball (Psychologically Optimal):</strong> You list your debts from smallest balance to largest balance, ignoring interest rates. You aggressively pay off the smallest balance first for a quick psychological win, then roll that payment into the next smallest debt.</li>
            <li><strong>The "Snowflake" Method:</strong> In addition to your fixed monthly payment, you throw micro-payments at the debt. If you sell a shirt online for $15, or skip a $5 coffee, you instantly transfer that money to the credit card.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES & ADVANTAGES & LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Continuing to Use the Card", desc: "You cannot dig yourself out of a hole while you are still digging. You must completely stop charging new purchases to the card while you are trying to pay it off." },
              { title: "Paying Only the Minimum", desc: "The minimum payment is designed to maximize bank profits, not to get you out of debt. Always pay more." },
              { title: "Closing the Card After Payoff", desc: "Closing a credit card immediately after paying it off can lower your credit score by shrinking your available credit. Keep the card open, but cut up the physical plastic." },
              { title: "Emptying Your Savings", desc: "Do not drain your emergency fund down to $0 to pay off a credit card. If your car breaks down the next day, you will be forced to use the credit card again." },
              { title: "Ignoring Balance Transfers", desc: "If you have a 700+ credit score, moving a 25% APR balance to a 0% APR promo card can save thousands of dollars in interest." },
              { title: "Not Having a Written Budget", desc: "You cannot arbitrarily decide to pay an extra $300 a month if you don't actually know where that $300 is coming from in your monthly budget." },
              { title: "Paying Multiple Cards Evenly", desc: "Do not divide your extra cash evenly among five different cards. Pick one card (using Avalanche or Snowball) to attack aggressively while paying minimums on the rest." },
              { title: "Giving Up After a Setback", desc: "If you have an emergency and miss your aggressive payment goal one month, do not abandon the plan. Acknowledge it, pay what you can, and resume the plan next month." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-12 leading-snug">
            Advantages of Aggressive Payoff
          </h2>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100 mb-10">
            <li>Instantly guarantees a 20%+ return on your money (by avoiding the interest charge).</li>
            <li>Frees up hundreds of dollars in monthly cash flow once the debt is gone.</li>
            <li>Rapidly improves your credit score by lowering your credit utilization ratio.</li>
            <li>Eliminates the psychological stress and anxiety of owing money to a bank.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations to Keep in Mind
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Mathematical Reality:</strong> If your income is too low, no amount of calculator optimization will help. You may need to focus entirely on increasing your income.</li>
            <li><strong>Doesn't Account for Daily Interest:</strong> Credit cards accrue interest daily. The calculator provides a highly accurate monthly estimate, but the exact final payoff amount down to the penny may vary by a few dollars.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is the Debt Snowball method?",
                a: "A strategy where you list all your debts from smallest balance to largest. You pay minimums on everything except the smallest debt, which you attack with all your extra cash. Once paid off, you roll that payment into the next smallest debt."
              },
              {
                q: "What is the Debt Avalanche method?",
                a: "A mathematical strategy where you list all your debts from highest interest rate to lowest. You attack the highest interest rate first. This method guarantees you will pay the absolute least amount of money in interest."
              },
              {
                q: "Why does my balance never seem to go down?",
                a: "Because your monthly payment is mostly going toward the interest charges, not the principal balance. If you owe $10,000 at 24%, the card generates $200 in interest every month. If you pay $250, only $50 actually reduces your debt."
              },
              {
                q: "Does paying off my credit card improve my credit score?",
                a: "Yes, rapidly. 30% of your credit score is based on 'Credit Utilization' (how much debt you have compared to your credit limits). Lowering your balance immediately improves this ratio, driving your score up."
              },
              {
                q: "Should I close my credit card once it is paid off?",
                a: "Generally, no. Closing the card removes that credit limit from your overall credit profile, which can increase your utilization ratio and lower your score. It is better to leave it open with a $0 balance."
              },
              {
                q: "What is a balance transfer?",
                a: "A process where you open a new credit card that offers a 0% introductory interest rate (usually for 12 to 18 months), and transfer your high-interest debt onto it. This pauses interest charges, allowing 100% of your payments to attack the principal."
              },
              {
                q: "Are there fees for balance transfers?",
                a: "Yes. Most banks charge a 3% to 5% fee on the amount transferred. Moving $10,000 will cost you $300 to $500 upfront, but avoiding 24% interest for 15 months still saves you a massive amount of money overall."
              },
              {
                q: "Should I use my savings to pay off credit card debt?",
                a: "Only if you leave a starter emergency fund (e.g., $1,000) in savings. If you drain your savings to zero and get a flat tire, you will be forced to use the credit card again, restarting the cycle of debt."
              },
              {
                q: "Is it better to pay twice a month?",
                a: "Yes. Because credit card interest accrues daily based on your average daily balance, paying half your payment on the 15th and half on the 30th results in slightly less interest charged compared to one lump sum at the end of the month."
              },
              {
                q: "What is a hardship program?",
                a: "If you legitimately cannot make your minimum payments, you can call your bank and ask for a hardship plan. They may lower your interest rate and close the card, putting you on a 5-year fixed payoff plan. It will temporarily hurt your credit."
              },
              {
                q: "Should I take out a personal loan to pay off my credit cards?",
                a: "This is called debt consolidation. It is a great idea if you can get a personal loan at 10% to pay off cards at 25%. However, it only works if you stop using the credit cards. Many people consolidate, then run up the cards again, doubling their debt."
              },
              {
                q: "Can I negotiate my credit card interest rate?",
                a: "Yes, you can always call the number on the back of your card and ask for a lower rate. If you have a good payment history, they may drop it by a few percentage points just to keep your business."
              },
              {
                q: "What happens if I stop paying my credit cards entirely?",
                a: "Your credit score will be destroyed. After 180 days of non-payment, the bank will 'charge off' the debt and sell it to a collection agency. The agency will harass you for the money and may eventually sue you to garnish your wages."
              },
              {
                q: "Should I invest while paying off credit card debt?",
                a: "Financially, no. It is impossible to guarantee a 24% return in the stock market to beat the 24% interest the credit card is charging you. You should temporarily pause investing (except for an employer 401k match) to aggressively pay off the debt."
              },
              {
                q: "How does the calculator know when I will be debt free?",
                a: "It uses an amortization schedule. It takes your balance, adds one month of interest, subtracts your payment, and repeats that math loop until the balance hits exactly $0, then counts how many months it took."
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Related Financial Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Explore these other tools to accelerate your journey to becoming completely debt-free.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Balance Transfer Calculator",
                desc: "Run the math to see exactly how much money and time you will save by moving your debt to a 0% introductory APR credit card."
              },
              {
                name: "Budget Calculator",
                desc: "Find the extra money in your life. Use this tool to cut expenses so you can increase your monthly credit card payment."
              },
              {
                name: "Personal Loan Calculator",
                desc: "Considering debt consolidation? See what your monthly payment would be if you took out a fixed-rate loan to pay off your revolving credit cards."
              },
              {
                name: "Credit Utilization Calculator",
                desc: "See exactly how paying down your current balance will drastically improve your credit utilization ratio (and your credit score)."
              },
              {
                name: "Debt-to-Income Calculator",
                desc: "Calculate your overall debt burden, a crucial metric if you plan on applying for a mortgage or auto loan in the near future."
              }
            ].map((calc, i) => (
              <div key={i} className="bg-stone-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">{calc.name}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{calc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Credit card debt is designed to feel overwhelming. By focusing your attention on the low "minimum payment" box, banks hope you ignore the thousands of dollars in interest quietly compounding in the background.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Using a Credit Card Payoff Calculator turns the lights on. It forces you to confront the stark mathematical reality of your debt, but more importantly, it provides a clear, actionable roadmap out of it. You can visually see how adding just $100 to your monthly payment shaves years off your timeline.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Escaping high-interest debt requires temporary sacrifice and a strict budget. But once you make that final payment, the massive amount of cash flow you unlock will change your financial life forever. Let the calculator provide the math, and let the math provide the motivation.
          </p>
        </section>

      </div>
    </article>
  );
}
