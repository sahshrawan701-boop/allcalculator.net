import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function NetWorthArticle() {
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
          <span className="meta-tag">Personal Finance · Wealth</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Net Worth Calculator: Measure Your Financial Health
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for understanding net worth
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have $15,000 in cash, $50,000 in investments, a $300,000 home, and a $25,000 car. Your assets total $390,000. But you also have a $200,000 mortgage, $15,000 in loans, $5,000 in credit card debt, and $3,000 in other liabilities. Your liabilities total $223,000. Your net worth is $167,000. Is this good? Bad? It depends on your age, goals, and circumstances.
          </p>
          <p className="mb-5">
            Net worth is the most comprehensive measure of your financial health. It's what you own minus what you owe. A positive net worth means you have more assets than liabilities. A negative net worth means you owe more than you own. The net worth calculator above helps you track this critical metric over time.
          </p>
          <p className="mb-5">
            But understanding your net worth is just the first step. Knowing what counts as an asset, what counts as a liability, how to interpret your net worth, and how to improve it over time is what actually builds wealth and financial security.
          </p>
          <p>
            Net worth isn't just a number — it's a snapshot of your financial position at a specific point in time. Tracking it over time shows whether you're building wealth or drifting into debt. Let's break down exactly how to calculate, interpret, and improve your net worth.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS NET WORTH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Net Worth?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Net worth is the total value of your assets minus your total liabilities. It's the amount you would have if you sold everything you own and paid off all your debts. Net worth is the most comprehensive measure of your financial health because it accounts for everything you own and everything you owe.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Net Worth Formula:
          </p>
          <div className="formula-block">
            <pre>Net Worth = Total Assets – Total Liabilities</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Assets include cash, investments, real estate, vehicles, and other valuable possessions. Liabilities include mortgages, loans, credit card debt, and other obligations. The net worth calculator above helps you sum these categories to determine your financial position.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            A positive net worth means you have more assets than liabilities. A negative net worth means you owe more than you own. Neither is inherently good or bad — it depends on your age, circumstances, and goals. A negative net worth is common for young people with student loans or new homeowners with mortgages.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── ASSETS VS LIABILITIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Assets vs Liabilities: What Counts?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding what counts as an asset and what counts as a liability is essential for calculating net worth accurately. Here's a breakdown of each category.
          </p>

          {[
            {
              heading: "Assets (What You Own)",
              rows: [
                ["Cash & Bank Accounts", "Checking, savings, money market accounts, CDs"],
                ["Investments", "Stocks, bonds, mutual funds, ETFs, retirement accounts"],
                ["Real Estate", "Primary residence, rental properties, vacation homes"],
                ["Vehicles", "Cars, trucks, motorcycles, boats"],
                ["Other Assets", "Business interests, collectibles, jewelry, electronics"],
              ],
              note: "Assets should be valued at their current market value, not what you paid for them. For example, your home should be valued at its current selling price, not what you paid when you bought it. Investments should be valued at current market prices.",
            },
            {
              heading: "Liabilities (What You Owe)",
              rows: [
                ["Mortgage", "Primary mortgage, home equity loans, HELOCs"],
                ["Loans", "Auto loans, student loans, personal loans, business loans"],
                ["Credit Cards", "Credit card balances, store cards, charge cards"],
                ["Other Liabilities", "Medical bills, tax liens, alimony, child support"],
              ],
              note: "Liabilities should include all debts, regardless of whether they're secured or unsecured. Include the full balance owed, not just the monthly payment. For mortgages, include the outstanding principal balance, not the original loan amount.",
            },
          ].map((category: { heading: string; rows: string[][]; note: string }) => (
            <div key={category.heading} className="state-card">
              <h3>{category.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {category.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{category.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── INTERPRETING NET WORTH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Interpret Your Net Worth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Net worth varies widely by age, income, and circumstances. Understanding what's normal for your situation helps you assess your financial health and set realistic goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Age Group</th>
                <th className="dark:text-slate-100">Median Net Worth</th>
                <th className="dark:text-slate-100">What's Good</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Under 35", "$13,900", "Positive net worth, building savings"],
                ["35–44", "$91,100", "2–3x annual income, growing investments"],
                ["45–54", "$168,600", "3–5x annual income, significant retirement savings"],
                ["55–64", "$212,500", "5–8x annual income, approaching retirement goals"],
                ["65–74", "$266,400", "8–12x annual income, retirement ready"],
                ["75+", "$254,800", "Sufficient for retirement expenses"],
              ].map(([age, median, good]) => (
                <tr key={age}>
                  <td className="dark:text-slate-100">{age}</td>
                  <td className="dark:text-slate-100">{median}</td>
                  <td className="dark:text-slate-100">{good}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            These are general guidelines based on US median net worth data. Your target net worth depends on your goals, location, cost of living, and retirement plans. Focus on the trend — is your net worth increasing over time? — rather than comparing yourself to others.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING NET WORTH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Your Net Worth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Building net worth requires a two-pronged approach: increasing assets and decreasing liabilities. Here's how to systematically improve your financial position over time.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase your income",
                body: "Higher income provides more resources to save and invest. Negotiate raises, change jobs for higher pay, develop skills that increase your market value, or start a side business. Every dollar of additional income can accelerate net worth growth.",
              },
              {
                n: "2",
                title: "Save and invest consistently",
                body: "Automate savings and investments to ensure consistency. Aim to save at least 20% of your income, with 15% going to retirement accounts. The power of compound interest means consistent investing over time builds significant wealth.",
              },
              {
                n: "3",
                title: "Pay down high-interest debt",
                body: "High-interest debt like credit cards destroys net worth. Use the avalanche method (pay highest interest first) or snowball method (pay smallest balance first) to eliminate debt. Every dollar of debt paid off increases your net worth.",
              },
              {
                n: "4",
                title: "Invest in appreciating assets",
                body: "Focus on assets that grow in value over time: stocks, real estate, and businesses. Avoid depreciating assets like new cars or luxury goods unless you can afford them without impacting your financial goals.",
              },
              {
                n: "5",
                title: "Maximize retirement contributions",
                body: "Contribute enough to get full employer 401(k) matches, then max out tax-advantaged accounts like IRAs and HSAs. These accounts provide tax benefits that accelerate wealth building.",
              },
              {
                n: "6",
                title: "Review and optimize regularly",
                body: "Review your net worth quarterly or annually. Track the trend over time. Identify areas for improvement and adjust your strategy accordingly. Regular review ensures you stay on track toward your financial goals.",
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
            Common Net Worth Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially motivated people make mistakes when calculating and improving net worth. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Overvaluing assets",
                body: "Don't use purchase price or sentimental value. Use current market value. Your car is worth what someone would pay for it today, not what you paid or what it's worth to you emotionally. Overvaluing assets gives a false sense of financial security.",
              },
              {
                n: "2",
                title: "Undervaluing liabilities",
                body: "Include all debts, even small ones. Don't forget student loans, personal loans, or money owed to family. Understating liabilities gives an inaccurate picture of your financial health and can lead to poor decisions.",
              },
              {
                n: "3",
                title: "Focusing only on income",
                body: "High income doesn't guarantee high net worth. Many high earners have low or negative net worth due to lifestyle inflation and debt. Focus on building wealth, not just earning income. Net worth matters more than income for long-term financial security.",
              },
              {
                n: "4",
                title: "Ignoring retirement accounts",
                body: "Don't forget to include 401(k)s, IRAs, and other retirement accounts in your assets. These are often the largest asset for many people. Ignoring them significantly understates your true net worth.",
              },
              {
                n: "5",
                title: "Comparing yourself to others",
                body: "Net worth varies widely by age, location, and circumstances. Comparing yourself to others is rarely helpful. Focus on your own trend over time. Are you building wealth year over year? That's what matters.",
              },
              {
                n: "6",
                title: "Not tracking over time",
                body: "Net worth is most valuable when tracked over time. A single snapshot doesn't tell you much. Calculate your net worth quarterly or annually to see whether you're building wealth or drifting into debt.",
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
            Practical Tips for Building Net Worth
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate your net worth quarterly to track progress</>],
              [<><strong>Value assets at market price</strong> — not purchase price or sentimental value</>],
              [<><strong>Include all liabilities</strong> — even small debts and money owed to family</>],
              [<><strong>Focus on the trend</strong> — is your net worth increasing over time?</>],
              [<><strong>Automate savings and investments</strong> — consistency builds wealth over time</>],
              [<><strong>Pay down high-interest debt</strong> — every dollar paid off increases net worth</>],
              [<><strong>Invest in appreciating assets</strong> — stocks, real estate, and businesses grow in value</>],
              [<><strong>Maximize retirement contributions</strong> — tax-advantaged accounts accelerate wealth building</>],
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
                q: "How do I calculate my net worth?",
                a: "Net worth is calculated by subtracting your total liabilities from your total assets: Net Worth = Total Assets – Total Liabilities. Assets include cash, investments, real estate, vehicles, and other valuable possessions. Liabilities include mortgages, loans, credit card debt, and other obligations. The calculator above helps you sum these categories.",
              },
              {
                q: "What is a good net worth?",
                a: "A good net worth depends on your age, income, and goals. General guidelines: under 35, positive net worth is good; 35–44, 2–3x annual income; 45–54, 3–5x annual income; 55–64, 5–8x annual income; 65+, 8–12x annual income. Focus on the trend over time rather than comparing to others.",
              },
              {
                q: "Does my primary residence count as an asset?",
                a: "Yes, your primary residence counts as an asset at its current market value. However, you should also include your mortgage as a liability. The net effect might be smaller than you expect, especially if you have little equity. Some people calculate net worth both with and without their primary residence.",
              },
              {
                q: "Should I include my car in net worth?",
                a: "Yes, include your vehicle at its current market value (what you could sell it for today), not what you paid for it. Vehicles are depreciating assets, so their value decreases over time. Including them gives a more accurate picture of your net worth, even if the value is modest.",
              },
              {
                q: "How often should I calculate my net worth?",
                a: "Calculate your net worth quarterly or annually. More frequent calculation (monthly) can be useful when you're actively working on financial goals, but quarterly or annual tracking is sufficient for most people. The key is consistency — track it at the same interval over time to see trends.",
              },
              {
                q: "What if my net worth is negative?",
                a: "A negative net worth is common for young people with student loans, new homeowners with mortgages, or anyone who has experienced financial setbacks. It's not necessarily bad if you're young and building assets. Focus on the trend — is your net worth increasing over time? If yes, you're on the right track.",
              },
              {
                q: "Does income equal net worth?",
                a: "No, income and net worth are different. Income is what you earn annually. Net worth is what you own minus what you owe. High income doesn't guarantee high net worth — many high earners have low or negative net worth due to debt and lifestyle inflation. Net worth matters more for long-term financial security.",
              },
              {
                q: "Should I include retirement accounts in net worth?",
                a: "Yes, include all retirement accounts (401k, IRA, 403b, etc.) at their current balance. These are often the largest asset for many people. However, remember that retirement accounts may have tax implications when withdrawn, so some people calculate net worth both with and without retirement accounts.",
              },
              {
                q: "How can I increase my net worth quickly?",
                a: "The fastest ways to increase net worth are: pay down high-interest debt (every dollar paid off increases net worth), sell unused assets and apply proceeds to debt or savings, increase income through a raise or side hustle, and redirect windfalls (bonuses, tax refunds) to debt repayment or investing.",
              },
              {
                q: "What's the difference between net worth and liquid net worth?",
                a: "Net worth includes all assets and liabilities. Liquid net worth only includes liquid assets (cash, investments that can be quickly sold) minus all liabilities. Liquid net worth is a more conservative measure that shows what you could access quickly in an emergency. Both metrics are useful.",
              },
              {
                q: "Should I include business value in net worth?",
                a: "If you own a business, include its value in your net worth. For sole proprietorships, this is the business's assets minus liabilities. For incorporated businesses, it's your ownership stake times the business's valuation. Business valuation can be complex, so consider professional help for accurate assessment.",
              },
              {
                q: "How does net worth change with age?",
                a: "Net worth typically follows a lifecycle: low or negative in early adulthood due to student loans and early career, grows rapidly in middle age as income increases and debt decreases, peaks before retirement, and may decline in retirement as assets are drawn down. This pattern is normal and expected.",
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
            Net worth is the most comprehensive measure of your financial health. It accounts for everything you own and everything you owe. Tracking it over time shows whether you're building wealth or drifting into debt. The net worth calculator above helps you understand your financial position at a glance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            But calculating net worth is just the first step. The real work happens in the details: increasing assets through saving and investing, decreasing liabilities through debt repayment, and making consistent progress over time. These habits build wealth and financial security.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Net worth isn't about comparing yourself to others — it's about tracking your own progress. Focus on the trend over time rather than absolute numbers. If your net worth is increasing year over year, you're on the right track. Keep building, stay consistent, and watch your wealth grow.
          </p>
          <div className="pull-quote mt-8">
            The best net worth is the one that increases over time. The second best is the one you track.
          </div>
        </section>

      </div>
    </article>
  );
}
