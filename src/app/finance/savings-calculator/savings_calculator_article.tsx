import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SavingsArticle() {
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
          <span className="meta-tag">Personal Finance · Savings</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Savings Calculator: Build Your Financial Future
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding savings growth
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You start with $5,000 and save $500 monthly at 4.5% interest. After 10 years, you'll have $77,800. Of that, $65,000 came from your contributions and $12,800 from interest. But what if you increased your monthly savings to $750? You'd have $107,200 — $29,400 more. That's the power of consistent saving and compound interest.
          </p>
          <p className="mb-5">
            The savings calculator above helps you project how your savings will grow over time based on initial deposits, monthly contributions, interest rates, and time horizon. Understanding these projections helps you set realistic goals and stay motivated to save consistently.
          </p>
          <p className="mb-5">
            But calculating projections is just the first step. Understanding how compound interest works, how to maximize your savings rate, and what strategies accelerate wealth building is what actually helps you reach your financial goals.
          </p>
          <p>
            Savings aren't just about putting money aside — they're about building wealth systematically over time. The combination of consistent contributions and compound interest creates exponential growth that transforms small habits into significant wealth.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Savings Growth Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Savings growth is driven by two factors: your contributions and compound interest. Contributions are the money you add to your savings. Compound interest is the interest you earn on both your principal and accumulated interest, creating exponential growth over time.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula:
          </p>
          <div className="formula-block">
            <pre>FV = P × (1 + r)^n + PMT × [(1 + r)^n – 1] / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where FV = future value, P = initial deposit, r = monthly interest rate, n = number of months, PMT = monthly contribution
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Initial deposit (P)", "$5,000"],
              ["Monthly contribution (PMT)", "$500"],
              ["Annual interest rate", "4.5%"],
              ["Monthly interest rate (r)", "4.5% / 12 = 0.375%"],
              ["Time period", "10 years (120 months)"],
              ["Future value of initial", "$5,000 × (1.00375)^120 = $7,800"],
              ["Future value of contributions", "$500 × [(1.00375)^120 – 1] / 0.00375 = $70,000"],
              ["Total future value", "$7,800 + $70,000 = $77,800"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you contributed $65,000 total ($5,000 initial + $500 × 120 months) and earned $12,800 in interest. The interest represents 16.4% of your total balance — free money earned through compound interest over 10 years.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMPOUND INTEREST ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Power of Compound Interest
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Compound interest is the eighth wonder of the world. It's interest earned on interest, creating exponential growth that accelerates over time. The longer your money compounds, the more dramatic the growth becomes.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Years</th>
                <th className="dark:text-slate-100">Total Balance</th>
                <th className="dark:text-slate-100">Total Contributions</th>
                <th className="dark:text-slate-100">Total Interest</th>
                <th className="dark:text-slate-100">Interest as % of Balance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5", "$34,400", "$35,000", "-$600", "-1.7%"],
                ["10", "$77,800", "$65,000", "$12,800", "16.4%"],
                ["20", "$186,600", "$125,000", "$61,600", "33.0%"],
                ["30", "$374,200", "$185,000", "$189,200", "50.6%"],
                ["40", "$704,800", "$245,000", "$459,800", "65.3%"],
              ].map(([years, balance, contributions, interest, percent]) => (
                <tr key={years}>
                  <td className="dark:text-slate-100">{years}</td>
                  <td className="dark:text-slate-100">{balance}</td>
                  <td className="dark:text-slate-100">{contributions}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                  <td className="dark:text-slate-100">{percent}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            After 40 years, interest represents 65.3% of your total balance — $459,800 earned without any additional effort. This is why starting early is so important: time is the most powerful factor in compound interest growth.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MAXIMIZING SAVINGS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Maximize Your Savings Growth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Building wealth requires a systematic approach to saving. Here's how to maximize your savings growth and reach your financial goals faster.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Automate your savings",
                body: "Set up automatic transfers from checking to savings on payday. Treat savings like a non-negotiable expense. Automation removes willpower from the equation and ensures consistent contributions regardless of life's distractions.",
              },
              {
                n: "2",
                title: "Save at least 20% of your income",
                body: "Aim to save at least 20% of your gross income, with 15% going to retirement accounts and 5% to other savings. If 20% feels impossible, start with 10% and increase by 1% every 6 months until you reach 20%.",
              },
              {
                n: "3",
                title: "Maximize tax-advantaged accounts",
                body: "Contribute enough to get full employer 401(k) matches, then max out IRAs and HSAs. These accounts provide tax benefits that accelerate wealth building. Tax-free growth is more powerful than taxable growth.",
              },
              {
                n: "4",
                title: "Choose high-yield savings accounts",
                body: "Traditional savings accounts pay 0.01–0.05% APY. High-yield savings accounts pay 4–5% APY. On $50,000, that's the difference between $25 and $2,500 in annual interest. Always shop for the best rates.",
              },
              {
                n: "5",
                title: "Increase savings when income rises",
                body: "When you get a raise, bonus, or increase income, direct at least 50% to savings. Lifestyle creep is tempting, but directing income increases to savings accelerates wealth building without sacrificing current quality of life.",
              },
              {
                n: "6",
                title: "Start early, save consistently",
                body: "Time is the most powerful factor in compound interest. Starting 10 years earlier can double your final balance even with smaller contributions. Consistency matters more than amount — save something every month, no matter how small.",
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

        {/* ── SAVINGS GOALS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Setting and Achieving Savings Goals
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Having specific savings goals provides motivation and direction. Here's how to set realistic goals and achieve them systematically.
          </p>

          {[
            {
              heading: "Emergency Fund",
              rows: [
                ["Target", "3–6 months of expenses"],
                ["Priority", "Highest — build this first"],
                ["Strategy", "Save in high-yield savings account for accessibility"],
              ],
              note: "An emergency fund protects you from financial setbacks. Start with $1,000, then build to 3–6 months of expenses. Keep it in a high-yield savings account where it's accessible but earning interest.",
            },
            {
              heading: "Short-Term Goals (1–3 years)",
              rows: [
                ["Examples", "Vacation, wedding, down payment on car"],
                ["Priority", "High — after emergency fund"],
                ["Strategy", "Save in high-yield savings or CDs"],
              ],
              note: "Short-term goals require liquidity. Use high-yield savings accounts or CDs with terms matching your timeline. Avoid investing in stocks for money you need within 3 years.",
            },
            {
              heading: "Long-Term Goals (5+ years)",
              rows: [
                ["Examples", "Home down payment, retirement, children's education"],
                ["Priority", "Medium — after emergency fund and short-term goals"],
                ["Strategy", "Invest in diversified portfolio for higher returns"],
              ],
              note: "Long-term goals can tolerate volatility for higher returns. Invest in diversified portfolios of stocks and bonds. Use tax-advantaged accounts when possible to maximize growth.",
            },
          ].map((goal: { heading: string; rows: string[][]; note: string }) => (
            <div key={goal.heading} className="state-card">
              <h3>{goal.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {goal.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{goal.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Savings Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially motivated people make mistakes that slow their savings growth. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not saving consistently",
                body: "Saving sporadically when you \"have extra money\" rarely works. Automate savings to ensure consistency. Treat savings like a non-negotiable expense that happens automatically every payday.",
              },
              {
                n: "2",
                title: "Keeping savings in low-yield accounts",
                body: "Traditional savings accounts pay 0.01–0.05% APY. High-yield savings accounts pay 4–5% APY. On $50,000, that's $2,500 vs $25 in annual interest. Always shop for the best rates.",
              },
              {
                n: "3",
                title: "Starting too late",
                body: "Time is the most powerful factor in compound interest. Starting at 25 vs 35 can double your final balance even with smaller contributions. Start saving early, even if you can only save small amounts.",
              },
              {
                n: "4",
                title: "Not having an emergency fund",
                body: "Without an emergency fund, unexpected expenses force you to use credit cards or loans, undoing your progress. Build a 3–6 month emergency fund before focusing on other goals.",
              },
              {
                n: "5",
                title: "Lifestyle creep",
                body: "When income rises, it's tempting to increase spending. Direct at least 50% of income increases to savings. Lifestyle creep is the enemy of wealth building — resist the urge to upgrade everything.",
              },
              {
                n: "6",
                title: "Not maximizing employer matches",
                body: "Employer 401(k) matches are free money. Not contributing enough to get the full match is turning down a 100% return on investment. Always contribute enough to get the full match before other savings.",
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
            Practical Tips for Building Savings
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — project your savings growth to set realistic goals</>],
              [<><strong>Automate your savings</strong> — set up automatic transfers on payday</>],
              [<><strong>Save at least 20% of income</strong> — 15% to retirement, 5% to other savings</>],
              [<><strong>Maximize employer matches</strong> — free money you shouldn't leave on the table</>],
              [<><strong>Choose high-yield accounts</strong> — 4–5% APY vs 0.01% makes a huge difference</>],
              [<><strong>Build emergency fund first</strong> — 3–6 months of expenses before other goals</>],
              [<><strong>Increase savings when income rises</strong> — direct 50% of raises to savings</>],
              [<><strong>Start early, save consistently</strong> — time is the most powerful factor in growth</>],
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
                q: "How do I calculate my savings growth?",
                a: "Use the formula: FV = P × (1 + r)^n + PMT × [(1 + r)^n – 1] / r, where P is initial deposit, r is monthly interest rate, n is number of months, and PMT is monthly contribution. The calculator above does this automatically for you.",
              },
              {
                q: "What is compound interest?",
                a: "Compound interest is interest earned on both your principal and accumulated interest. Unlike simple interest, which only earns on the principal, compound interest earns on interest, creating exponential growth over time. The longer your money compounds, the more dramatic the growth.",
              },
              {
                q: "How much should I save each month?",
                a: "Aim to save at least 20% of your gross income, with 15% going to retirement accounts and 5% to other savings. If 20% feels impossible, start with 10% and increase by 1% every 6 months until you reach 20%. Consistency matters more than amount.",
              },
              {
                q: "What's the difference between APY and APR?",
                a: "APY (Annual Percentage Yield) accounts for compound interest and shows the actual annual return. APR (Annual Percentage Rate) doesn't account for compounding. For savings, always look at APY — it's the true measure of what you'll earn.",
              },
              {
                q: "Where should I keep my emergency fund?",
                a: "Keep your emergency fund in a high-yield savings account where it's accessible but earning interest. Avoid investing it in stocks or bonds where you might need to sell at a loss during an emergency. The goal is liquidity with reasonable returns.",
              },
              {
                q: "How much should I have in an emergency fund?",
                a: "Aim for 3–6 months of expenses in your emergency fund. If you're single or have variable income, aim for 6 months. If you're married with stable income, 3 months may be sufficient. Start with $1,000, then build to your target.",
              },
              {
                q: "Should I pay off debt or save?",
                a: "Generally, build a small emergency fund ($1,000) first, then prioritize high-interest debt (credit cards above 7–8%). Once high-interest debt is paid off, focus on building your emergency fund to 3–6 months, then balance debt repayment with saving.",
              },
              {
                q: "What are high-yield savings accounts?",
                a: "High-yield savings accounts pay 4–5% APY compared to 0.01–0.05% for traditional savings accounts. They're typically offered by online banks and have the same FDIC insurance as traditional accounts. They're the best place to keep emergency funds and short-term savings.",
              },
              {
                q: "How does inflation affect my savings?",
                a: "Inflation erodes the purchasing power of your savings over time. If inflation is 3% and your savings earn 4.5% APY, your real return is 1.5%. To beat inflation, your savings must earn more than the inflation rate. This is why investing is important for long-term goals.",
              },
              {
                q: "When should I save vs invest?",
                a: "Save for goals within 3–5 years in high-yield savings accounts or CDs. Invest for goals 5+ years away in diversified portfolios of stocks and bonds. Investing offers higher returns but with volatility that you shouldn't risk for short-term money.",
              },
              {
                q: "How do I stay motivated to save?",
                a: "Automate savings to remove willpower from the equation. Track your progress visually. Celebrate milestones. Remind yourself of your goals. Join savings challenges or communities for accountability. Remember that every dollar saved is buying your future freedom.",
              },
              {
                q: "What if I can't afford to save 20%?",
                a: "Start with whatever you can save, even if it's only 5% or $50/month. Consistency matters more than amount. Increase your savings rate by 1% every 6 months until you reach 20%. Small, consistent savings compound into significant wealth over time.",
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
            Savings are the foundation of financial security and wealth building. The combination of consistent contributions and compound interest transforms small habits into significant wealth over time. The savings calculator above helps you project your growth and set realistic goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            But calculating projections is just the first step. The real work happens in the details: automating savings, maximizing tax-advantaged accounts, choosing high-yield accounts, and staying consistent over decades. These habits build wealth systematically and reliably.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Savings aren't about depriving yourself — they're about buying your future freedom. Every dollar saved is a dollar that works for you instead of against you. Start today, save consistently, and watch your wealth grow. Your future self will thank you for the financial security you're building.
          </p>
          <div className="pull-quote mt-8">
            The best savings plan is the one you automate. The second best is the one you start today.
          </div>
        </section>

      </div>
    </article>
  );
}
