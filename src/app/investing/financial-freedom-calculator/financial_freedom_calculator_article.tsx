import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FinancialFreedomCalculatorArticle() {
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
          <span className="meta-tag">Investing · Financial Freedom</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Financial Freedom Calculator: Plan Your Path to Independence
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to achieving financial independence
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Financial freedom means having enough savings, investments, and cash to afford the lifestyle you desire for yourself and your family without being dependent on a paycheck. The Financial Freedom Calculator helps you determine how much you need to save and invest to achieve this goal.
          </p>
          <p className="mb-5">
            Understanding your financial freedom number is essential for planning your investment strategy and setting realistic savings goals. This calculator considers your current savings, expected returns, inflation, and desired annual income to estimate when you can achieve financial independence.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your financial freedom number, the time required to reach it, and how different savings rates and investment returns affect your timeline.
          </p>
          <p>
            Use the Financial Freedom Calculator to create a personalized plan for achieving financial independence and living life on your own terms.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Financial Freedom Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator determines your financial freedom number based on your desired annual income and expected withdrawal rate. It then projects how long it will take to reach that number based on your current savings, monthly contributions, and expected investment returns, adjusted for inflation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current savings", "Total amount already saved and invested"],
              ["Monthly savings", "Amount you can save each month"],
              ["Desired annual income", "Annual income needed in retirement"],
              ["Expected return (%)", "Anticipated annual investment return"],
              ["Withdrawal rate (%)", "Safe withdrawal rate (typically 4%)"],
              ["Inflation rate (%)", "Expected annual inflation rate"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your financial freedom number, years to reach it, and how different scenarios affect your timeline.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Financial Freedom Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The financial freedom number is calculated based on your desired annual income and a safe withdrawal rate.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Financial Freedom Number Formula:
          </p>
          <div className="formula-block">
            <pre>Freedom_Number = Desired_Annual_Income / Withdrawal_Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Years to Freedom Formula (with monthly contributions):
          </p>
          <div className="formula-block">
            <pre>Years = ln((Freedom_Number × r + PMT) / (Current_Savings × r + PMT)) / ln(1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Freedom_Number", "Total portfolio needed for financial independence"],
              ["Withdrawal_Rate", "Annual withdrawal percentage (typically 4%)"],
              ["r", "Monthly return rate (annual rate / 12)"],
              ["PMT", "Monthly contribution amount"],
              ["Current_Savings", "Starting investment balance"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The 4% rule is a common guideline for safe withdrawal rates, suggesting you can withdraw 4% of your portfolio annually with a low risk of depletion over 30 years. Adjust based on your situation and risk tolerance.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Your Financial Freedom Timeline
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how quickly you can achieve financial freedom. Understanding these variables helps you optimize your strategy.
          </p>

          {[
            {
              heading: "Savings Rate",
              rows: [
                ["Impact", "Most significant factor in timeline"],
                ["Typical range", "10% - 50% of income"],
                ["Higher rate", "Dramatically accelerates timeline"],
              ],
              note: "Increasing your savings rate from 10% to 30% can cut your time to financial freedom by more than half. Focus on increasing income and reducing expenses.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Conservative", "4% - 6% annual return"],
                ["Moderate", "7% - 9% annual return"],
                ["Aggressive", "10%+ annual return with higher risk"],
              ],
              note: "Higher returns accelerate your timeline but come with increased risk. Choose an asset allocation that matches your risk tolerance and time horizon.",
            },
            {
              heading: "Desired Lifestyle",
              rows: [
                ["Income needs", "Varies by location and lifestyle"],
                ["Flexibility", "Lower needs accelerate freedom"],
                ["Trade-offs", "Consider lifestyle vs. timeline balance"],
              ],
              note: "Your desired annual income directly impacts your financial freedom number. Consider whether a simpler lifestyle could allow you to reach freedom sooner.",
            },
            {
              heading: "Inflation",
              rows: [
                ["Historical average", "3% annually"],
                ["Impact", "Reduces purchasing power over time"],
                ["Planning", "Must account for inflation in projections"],
              ],
              note: "Inflation erodes the purchasing power of your savings. Your investments must outpace inflation to maintain your lifestyle in retirement.",
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

        {/* ── STRATEGY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Strategies to Accelerate Financial Freedom
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Multiple strategies can help you reach financial freedom faster. Combine several approaches for maximum impact.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Maximize savings rate",
                body: "Save as much as possible by increasing income and reducing expenses. Aim to save at least 20% of your income, with 30-50% being ideal for accelerated financial freedom.",
              },
              {
                n: "2",
                title: "Invest aggressively",
                body: "Allocate your portfolio to growth assets like stocks and real estate when young. Higher returns compound faster and significantly shorten your timeline.",
              },
              {
                n: "3",
                title: "Increase income",
                body: "Focus on career advancement, side hustles, or business ventures to increase your earning potential. Higher income allows for larger savings contributions.",
              },
              {
                n: "4",
                title: "Minimize lifestyle inflation",
                body: "Avoid increasing expenses as your income grows. Maintain a modest lifestyle and direct additional income toward savings and investments.",
              },
              {
                n: "5",
                title: "Optimize taxes",
                body: "Use tax-advantaged accounts like 401(k)s, IRAs, and HSAs to maximize tax efficiency. Tax savings effectively increase your investment returns.",
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
            Practical Tips for Achieving Financial Freedom
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time is your most powerful ally</>],
              [<><strong>Automate savings</strong> — make it automatic and consistent</>],
              [<><strong>Track progress</strong> — monitor your savings rate regularly</>],
              [<><strong>Stay flexible</strong> — adjust your plan as life changes</>],
              [<><strong>Invest wisely</strong> — choose appropriate asset allocation</>],
              [<><strong>Minimize fees</strong> — low-cost investments improve returns</>],
              [<><strong>Build emergency fund</strong> — protect your progress from setbacks</>],
              [<><strong>Use the calculator</strong> — model different scenarios regularly</>],
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
                q: "How much do I need for financial freedom?",
                a: "The amount depends on your desired lifestyle. A common rule of thumb is 25 times your annual expenses. If you need $50,000 annually, you would need $1.25 million invested using the 4% withdrawal rule.",
              },
              {
                q: "What is the 4% rule?",
                a: "The 4% rule suggests you can safely withdraw 4% of your portfolio annually in retirement with a low risk of depletion over 30 years. It is based on historical market returns and provides a conservative guideline for planning.",
              },
              {
                q: "How long does it take to achieve financial freedom?",
                a: "The timeline depends on your savings rate and investment returns. With a 20% savings rate and 7% returns, it typically takes about 35 years. With a 50% savings rate, it can take less than 15 years.",
              },
              {
                q: "What is a good savings rate?",
                a: "Aim to save at least 20% of your income. Financial freedom seekers often target 30-50% savings rates to accelerate their timeline. The higher your savings rate, the faster you will reach financial independence.",
              },
              {
                q: "Should I pay off debt before saving?",
                a: "Generally, pay off high-interest debt (above 7-8%) before investing. Low-interest debt like mortgages can be paid alongside saving. The calculator assumes you are managing debt appropriately.",
              },
              {
                q: "Can I achieve financial freedom with a modest income?",
                a: "Yes, financial freedom is possible at any income level. It may take longer with a lower income, but consistent saving and investing over time can build substantial wealth. Focus on maximizing your savings rate.",
              },
              {
                q: "What if market returns are lower than expected?",
                a: "Conservative planning assumes lower returns. If returns are lower than expected, you may need to save more, work longer, or adjust your lifestyle expectations. Regularly review and adjust your plan.",
              },
              {
                q: "Is financial freedom the same as retirement?",
                a: "Not necessarily. Financial freedom means having enough to live without working, but you may still choose to work. Retirement typically implies leaving the workforce entirely. Financial freedom gives you the choice.",
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
            The Financial Freedom Calculator helps you create a personalized roadmap to achieving financial independence. Understanding your financial freedom number and the factors that influence your timeline empowers you to make informed decisions about your financial future.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that financial freedom is a journey, not a destination. Start where you are, save consistently, invest wisely, and stay patient. The compound effect of time and consistent action can build remarkable wealth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your strategy as needed. Financial freedom is achievable with discipline, patience, and a well-executed plan.
          </p>
          <div className="pull-quote mt-8">
            &quot;Financial freedom is not about being rich. It is about having the freedom to choose how you spend your time.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
