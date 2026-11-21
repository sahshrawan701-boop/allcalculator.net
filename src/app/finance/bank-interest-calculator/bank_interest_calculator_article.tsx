import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BankInterestArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Savings</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Bank Interest Calculator: Watch Your Savings Grow
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating compound interest on deposits
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Putting your money into a savings account, checking account, or Certificate of Deposit (CD) is one of the safest ways to ensure your wealth is protected. But a bank doesn't just hold your money—they pay you for the privilege of holding it. That payment is known as bank interest, and over time, it can add up to a significant sum.
          </p>
          <p className="mb-5">
            However, not all bank accounts are created equal. An account offering 0.01% APY will generate pennies on the dollar, while a High-Yield Savings Account (HYSA) offering 4.50% or 5.00% can generate thousands of dollars in passive income over a few years.
          </p>
          <p className="mb-5">
            A Bank Interest Calculator is a straightforward but powerful tool designed to project exactly how much your initial deposit, combined with regular monthly contributions, will grow over time thanks to the mathematical magic of compound interest.
          </p>
          <p>
            Whether you are building an emergency fund, saving for a down payment on a house, or simply trying to outpace inflation, understanding exactly how your money multiplies at the bank is the first step toward true financial optimization.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Bank Interest Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator works by simulating the growth of your account balance over a specified period. It takes your starting money, factors in any additional deposits you plan to make, and applies the bank's interest rate, typically compounding it monthly or annually.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To get an accurate forecast of your future savings, you'll need to supply a few basic numbers:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial Deposit", "The lump sum of money you are starting with today."],
              ["Interest Rate (APY)", "The Annual Percentage Yield your bank offers. Higher is better."],
              ["Monthly Contribution", "The amount you plan to deposit into the account every single month."],
              ["Time Period", "How long you plan to leave the money in the account, usually expressed in years."],
              ["Compounding Frequency", "How often the bank applies interest to your balance (usually daily or monthly)."]
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            Once you input these numbers, the calculator will spit out your total future balance, breaking it down into the amount you contributed out-of-pocket versus the free interest you earned from the bank.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Bank Interest Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To calculate future bank balances with regular monthly contributions, we actually need to combine two formulas: the standard Compound Interest Formula for the principal, and the Future Value of a Series Formula for the monthly deposits.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The Combined Compound Interest Formula:
          </p>
          <div className="formula-block">
            <pre>A = P(1 + r/n)^(nt) + PMT × {`[((1 + r/n)^(nt) - 1) / (r/n)]`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            What each variable represents:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["A", "The final accumulated amount (Future Value)."],
              ["P", "Your initial starting principal (Initial Deposit)."],
              ["r", "The annual interest rate expressed as a decimal (e.g., 5% = 0.05)."],
              ["n", "The number of times interest is compounded per year (12 for monthly, 365 for daily)."],
              ["t", "The total number of years the money is invested."],
              ["PMT", "Your regular monthly contribution amount."]
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-16 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            <strong>The magic of APY:</strong> When banks advertise an APY (Annual Percentage Yield), that number already accounts for the compounding frequency. If you are using APY instead of a simple nominal interest rate, the compounding effect is baked in!
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
                title: "Enter your initial deposit",
                content: "Type in the total amount of money you are opening the account with. If you are starting from zero, simply enter $0."
              },
              {
                step: "2",
                title: "Input the bank's APY",
                content: "Check your bank's website for their current Annual Percentage Yield and enter it. Make sure you use the rate for savings, not a checking account."
              },
              {
                step: "3",
                title: "Set your monthly contribution",
                content: "Enter the amount of cash you plan to realistically deposit into the account every single month from your paycheck or other income sources."
              },
              {
                step: "4",
                title: "Choose the timeframe",
                content: "Select how many years you intend to let the money sit and grow undisturbed. The longer you wait, the more pronounced the compound interest becomes."
              },
              {
                step: "5",
                title: "Calculate and Review",
                content: "Hit calculate to see your total balance. Pay special attention to the 'Total Interest Earned' figure—that is the free money generated entirely by the bank's APY."
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
            Real-World Bank Interest Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let's look at three common savings scenarios to demonstrate exactly how powerful compound interest is over different timeframes and interest rates.
          </p>

          {[
            {
              heading: "Scenario 1: The Traditional Bank (Low Yield)",
              rows: [
                ["Initial Deposit", "$10,000"],
                ["Monthly Contribution", "$200"],
                ["Bank APY", "0.01% (Standard Big Bank rate)"],
                ["Timeframe", "5 Years"],
                ["Total Contributions", "$22,000"],
                ["Total Interest Earned", "≈ $1.60"],
                ["Final Balance", "$22,001.60"],
              ],
              note: "By leaving your money in a traditional mega-bank checking or standard savings account, your wealth essentially stagnates. You earn practically nothing while inflation eats away your purchasing power.",
            },
            {
              heading: "Scenario 2: The High-Yield Emergency Fund",
              rows: [
                ["Initial Deposit", "$10,000"],
                ["Monthly Contribution", "$200"],
                ["Bank APY", "4.50% (High-Yield Savings)"],
                ["Timeframe", "5 Years"],
                ["Total Contributions", "$22,000"],
                ["Total Interest Earned", "≈ $3,330"],
                ["Final Balance", "$25,330.00"],
              ],
              note: "By simply moving the same money to a High-Yield Savings Account, the user earns over $3,300 in pure passive income over 5 years without lifting a finger.",
            },
            {
              heading: "Scenario 3: The Long-Term Aggressive Saver",
              rows: [
                ["Initial Deposit", "$0"],
                ["Monthly Contribution", "$1,000"],
                ["Bank APY", "5.00% (Certificate of Deposit or top HYSA)"],
                ["Timeframe", "10 Years"],
                ["Total Contributions", "$120,000"],
                ["Total Interest Earned", "≈ $35,280"],
                ["Final Balance", "$155,280.00"],
              ],
              note: "Starting from scratch but saving $1,000 a month at a strong 5% rate over a decade results in a massive $35,000+ payout in pure interest.",
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
            Interpreting Your Savings Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When you look at your final projected balance, pay close attention to the breakdown between your principal contributions and the interest earned. This ratio tells the true story of your wealth accumulation.
          </p>
          <ul className="space-y-4 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Low Interest Percentage:</strong> If interest makes up less than 5% of your final balance after several years, your APY is too low. You are essentially just stockpiling cash under a digital mattress. Look for a better bank.
            </li>
            <li>
              <strong>The Snowball Effect:</strong> Look at the interest earned in year 1 versus year 10. You will notice that the interest earned in later years is significantly higher than in earlier years. That is compounding at work—your interest is now earning its own interest.
            </li>
            <li>
              <strong>The Inflation Benchmark:</strong> If your bank's APY is lower than the current national inflation rate, you are technically losing purchasing power over time, even if your nominal dollar amount is going up.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── REFERENCE TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Cost of a Bad Bank: 0.01% vs. 4.50% APY
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This table perfectly illustrates why you should never leave significant cash in a standard big-bank checking or savings account. It assumes a starting balance of $10,000 with no additional monthly contributions.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Years Saved</th>
                <th className="dark:text-slate-100">Balance at 0.01% APY</th>
                <th className="dark:text-slate-100">Balance at 4.50% APY</th>
                <th className="dark:text-slate-100">Cash Left on the Table</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 Year", "$10,001", "$10,450", "$449"],
                ["5 Years", "$10,005", "$12,461", "$2,456"],
                ["10 Years", "$10,010", "$15,529", "$5,519"],
                ["20 Years", "$10,020", "$24,117", "$14,097"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">Leaving $10,000 in a 0.01% account for 20 years earns you $20. Moving it to a 4.5% account earns you over $14,000.</p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL WORLD APPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Applications for Bank Interest
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Calculating bank interest isn't just an academic exercise. It is a critical component of planning various life stages:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Building an Emergency Fund:</strong> You need your emergency cash to be highly liquid and zero-risk. Calculating interest helps you figure out how fast you can hit your 6-month living expense goal.</li>
            <li><strong>House Down Payments:</strong> When saving $50,000 to $100,000 for a down payment over 3 to 5 years, placing it in an HYSA ensures the cash is protected from stock market crashes while still growing significantly.</li>
            <li><strong>Certificate of Deposit (CD) Ladders:</strong> Investors calculate fixed interest across 1-year, 3-year, and 5-year CDs to create a predictable, guaranteed passive income stream without risking principal.</li>
            <li><strong>Corporate Treasury Management:</strong> Businesses use interest calculations to ensure their massive operational cash reserves are actively earning yield rather than sitting idle in zero-interest business checking accounts.</li>
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
              { title: "Accepting 0.01% APY", desc: "The biggest mistake is leaving tens of thousands of dollars in a standard brick-and-mortar savings account earning practically zero interest." },
              { title: "Forgetting About Taxes", desc: "Bank interest is considered taxable income. You must report it to the IRS, and you will owe income tax on your earnings, which reduces your net gain." },
              { title: "Ignoring Inflation", desc: "If you earn 4% interest but inflation is 5%, you are losing 1% of your purchasing power every year. Cash is not a good decades-long investment." },
              { title: "Chasing Teaser Rates", desc: "Some banks offer a massive 6% APY, but it only applies to the first $1,000, and drops to 0.5% after that. Always read the fine print." },
              { title: "Locking Money Up Without a Plan", desc: "Putting all your cash in a 5-year CD means you will face early withdrawal penalties if an emergency strikes in year 2." },
              { title: "Ignoring Monthly Maintenance Fees", desc: "Earning $10 a month in interest is pointless if the bank charges you a $15 monthly maintenance fee just to keep the account open." },
              { title: "Confusing APR and APY", desc: "APR is what you pay when borrowing. APY is what you earn when saving. APY includes the effect of compounding, making it the most accurate metric." },
              { title: "Underestimating Small Monthly Contributions", desc: "People often think saving $50 a month is pointless. Compounded over 20 years at a high yield, that $50 turns into tens of thousands of dollars." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-12 leading-snug">
            Advantages of High-Yield Savings Accounts
          </h2>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100 mb-10">
            <li>Generate risk-free, passive income without lifting a finger.</li>
            <li>FDIC insurance protects your deposits up to $250,000 per bank, ensuring you never lose your principal.</li>
            <li>Your money remains highly liquid, meaning you can withdraw it at any time for emergencies.</li>
            <li>Interest compounds, meaning your earnings accelerate the longer you leave the money untouched.</li>
            <li>Requires zero financial expertise, unlike investing in the stock market or real estate.</li>
            <li>Protects your cash from the immediate wealth-destroying effects of inflation better than checking accounts.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations of Bank Interest
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Variable Rates:</strong> Unless you use a CD, bank savings rates are variable. If the Federal Reserve cuts interest rates, your HYSA rate will drop immediately.</li>
            <li><strong>Tax Liability:</strong> 100% of the interest you earn is taxed at your ordinary income tax bracket.</li>
            <li><strong>Lower Returns Than Stocks:</strong> Over a 20-year period, the S&P 500 will almost certainly outperform any bank savings account.</li>
            <li><strong>Withdrawal Limits:</strong> Historically, federal law (Regulation D) limited savings account withdrawals to 6 per month. Though paused, some banks still enforce fees for excessive withdrawals.</li>
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
                q: "What is a High-Yield Savings Account (HYSA)?",
                a: "An HYSA is a type of savings account, usually offered by online-only banks, that pays an interest rate significantly higher than the national average. Because online banks lack the overhead of physical branches, they pass the savings to customers via higher APYs."
              },
              {
                q: "Do I have to pay taxes on bank interest?",
                a: "Yes. In the United States, bank interest is considered taxable income. If you earn more than $10 in interest during the year, your bank will send you a 1099-INT form at tax time."
              },
              {
                q: "Is it safe to put all my money in a high-yield savings account?",
                a: "Yes, as long as the bank is FDIC-insured (or NCUA-insured for credit unions). This insurance guarantees that even if the bank goes bankrupt, the federal government will protect your deposits up to $250,000 per depositor, per institution."
              },
              {
                q: "What is the difference between APR and APY?",
                a: "Annual Percentage Rate (APR) is the simple interest rate you pay on a loan. Annual Percentage Yield (APY) is the rate you earn on savings, which includes the compounding effect over a year. APY will always be slightly higher than the base interest rate."
              },
              {
                q: "Why do interest rates change?",
                a: "Savings account rates are largely dictated by the Federal Reserve's federal funds rate. When the Fed raises rates to combat inflation, banks raise savings rates to attract deposits. When the Fed cuts rates to stimulate the economy, savings rates drop."
              },
              {
                q: "How often does interest compound?",
                a: "Most high-yield savings accounts compound interest daily and credit it to your account monthly. Daily compounding makes your money grow slightly faster than monthly or annual compounding."
              },
              {
                q: "What is a Certificate of Deposit (CD)?",
                a: "A CD is a type of savings account where you agree to leave a lump sum of money untouched for a specific period (e.g., 6 months, 1 year, 5 years). In exchange for this commitment, the bank usually offers a higher, fixed interest rate."
              },
              {
                q: "Can I lose money in a savings account?",
                a: "Nominally, no. Your balance will never go down due to market fluctuations. However, realistically, if the inflation rate is higher than your bank's APY, you are losing purchasing power over time."
              },
              {
                q: "Are online banks safe?",
                a: "Yes, reputable online banks like Ally, Marcus by Goldman Sachs, and Discover are perfectly safe as long as they are FDIC-insured. Always verify a bank's FDIC status on the official FDIC website before depositing funds."
              },
              {
                q: "When is interest paid into my account?",
                a: "Most banks calculate your interest daily based on your current balance, but they only deposit the accumulated interest into your account once a month, usually on your statement closing date."
              },
              {
                q: "What is the Rule of 72?",
                a: "The Rule of 72 is a quick mental math shortcut used to estimate how long it takes an investment to double. Simply divide 72 by your APY. At a 4% APY, your money will double in 18 years (72 / 4 = 18)."
              },
              {
                q: "Should I invest in stocks or use a savings account?",
                a: "You should use both. A savings account is for short-term goals and emergency funds (money you need within 1-5 years). Stocks are for long-term wealth building (retirement, 10+ years away) because they carry more risk but offer higher returns."
              },
              {
                q: "Why do traditional banks pay such low interest?",
                a: "Banks like Chase, Bank of America, and Wells Fargo have thousands of physical branches, thousands of employees, and massive overhead. They also already have trillions in deposits, so they don't need to offer high rates to attract new customers."
              },
              {
                q: "Can the bank change my interest rate at any time?",
                a: "Yes. Unless you lock in a rate with a Certificate of Deposit (CD), savings account and checking account APYs are strictly variable and can be increased or decreased by the bank at any time without prior notice."
              },
              {
                q: "How do monthly contributions affect compound interest?",
                a: "Monthly contributions drastically accelerate the compounding process because you are constantly increasing the principal base that the interest is calculated upon, creating a massive snowball effect over time."
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
            Explore our other tools to fully optimize your savings and investing strategy.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "APY Calculator",
                desc: "Convert a standard nominal interest rate into an Annual Percentage Yield by factoring in different compounding frequencies."
              },
              {
                name: "Savings Goal Calculator",
                desc: "Work backward. Input a target dollar amount and timeline, and this calculator tells you exactly how much you need to save per month."
              },
              {
                name: "Emergency Fund Calculator",
                desc: "Calculate exactly how much cash you need to save to cover 3 to 6 months of living expenses based on your current budget."
              },
              {
                name: "Inflation Calculator",
                desc: "See how much purchasing power your cash will lose over time, highlighting the vital importance of earning high interest."
              },
              {
                name: "Compound Interest Calculator",
                desc: "A more advanced tool for modeling long-term investments in the stock market with variable annual return rates."
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
            Albert Einstein reportedly called compound interest the eighth wonder of the world, stating: "He who understands it, earns it; he who doesn't, pays it." When you utilize a bank interest calculator, you transition from the latter category to the former.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Securing a high APY and committing to consistent monthly deposits is the most reliable, zero-stress method of building wealth in existence. It requires no day trading, no real estate hunting, and no advanced financial degrees—just a good bank and patience.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Never settle for the 0.01% APY offered by traditional brick-and-mortar institutions. Find a secure High-Yield Savings Account, run your numbers through the calculator, and start watching your money work for you.
          </p>
        </section>

      </div>
    </article>
  );
}
