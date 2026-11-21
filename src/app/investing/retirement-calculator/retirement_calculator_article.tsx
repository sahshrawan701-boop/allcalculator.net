import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RetirementCalculatorArticle() {
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
          <span className="meta-tag">Investing · Retirement Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Retirement Calculator: Plan Your Retirement Savings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to retirement planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Retirement planning is one of the most important financial goals you will ever undertake. The Retirement Calculator helps you estimate how much you need to save to achieve your desired retirement lifestyle, based on your current savings, expected returns, inflation, and retirement timeline.
          </p>
          <p className="mb-5">
            Understanding your retirement needs is essential for financial security in your later years. This calculator projects your retirement savings growth and estimates whether your current savings rate will be sufficient to support your desired retirement lifestyle.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your retirement savings at retirement age, annual withdrawal amount, and how long your savings will last, helping you identify any gaps in your retirement planning.
          </p>
          <p>
            Use the Retirement Calculator to create a comprehensive retirement plan and ensure you are on track for a comfortable retirement.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Retirement Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your retirement savings growth based on your current savings, annual contributions, expected returns, and time until retirement. It then estimates how long your savings will last based on your expected annual withdrawals in retirement.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current savings", "Total amount already saved for retirement"],
              ["Annual contributions", "Amount you save each year"],
              ["Expected return (%)", "Anticipated annual investment return"],
              ["Current age", "Your current age"],
              ["Retirement age", "Age when you plan to retire"],
              ["Annual expenses", "Expected annual spending in retirement"],
              ["Inflation rate (%)", "Expected annual inflation"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your retirement savings, annual withdrawal amount, and how many years your savings will last.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Retirement Savings Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Retirement savings growth is calculated using compound interest formulas adjusted for inflation.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula:
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r)^(t) + PMT × ((1 + r)^(t) - 1) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Years Savings Last Formula:
          </p>
          <div className="formula-block">
            <pre>Years = ln(FV / Annual_Withdrawal) / ln(1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value at retirement"],
              ["PV", "Present value (current savings)"],
              ["PMT", "Annual contribution"],
              ["r", "Real return rate (nominal return minus inflation)"],
              ["t", "Years until retirement"],
              ["Annual_Withdrawal", "Expected annual spending"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Using real returns (nominal return minus inflation) provides a more accurate picture of your purchasing power in retirement. A 7% nominal return with 3% inflation equals a 4% real return.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Retirement Readiness
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your retirement readiness. Understanding these variables helps you optimize your retirement strategy.
          </p>

          {[
            {
              heading: "Savings Rate",
              rows: [
                ["Conservative", "5% - 10% of income"],
                ["Moderate", "10% - 20% of income"],
                ["Aggressive", "20%+ of income"],
              ],
              note: "Higher savings rates significantly accelerate retirement readiness. Increasing your savings rate from 10% to 20% can cut your time to retirement by more than half.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Conservative", "4% - 6% annual return"],
                ["Moderate", "6% - 8% annual return"],
                ["Aggressive", "8% - 10% annual return"],
              ],
              note: "Higher returns accelerate savings growth but come with increased risk. Choose an asset allocation that matches your risk tolerance and time horizon.",
            },
            {
              heading: "Retirement Age",
              rows: [
                ["Early retirement", "55-60 years old"],
                ["Traditional", "62-67 years old"],
                ["Delayed", "67-70+ years old"],
              ],
              note: "Later retirement ages allow more time for savings growth and reduce the number of years your savings must support. Delaying retirement can significantly improve retirement security.",
            },
            {
              heading: "Retirement Expenses",
              rows: [
                ["Modest lifestyle", "$40,000 - $60,000 annually"],
                ["Comfortable", "$60,000 - $100,000 annually"],
                ["Luxury", "$100,000+ annually"],
              ],
              note: "Your retirement lifestyle directly impacts how much you need to save. Consider healthcare costs, which often increase in retirement, when estimating expenses.",
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
            Retirement Planning Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help you achieve retirement readiness. Choose approaches that align with your goals and timeline.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Start early",
                body: "Begin saving for retirement as early as possible to maximize compound growth. Even small amounts saved early can outpace larger amounts saved later due to the time factor.",
              },
              {
                n: "2",
                title: "Maximize tax-advantaged accounts",
                body: "Contribute to 401(k)s, IRAs, and other tax-advantaged accounts to maximize tax benefits. Employer matches provide free money that significantly boosts your savings.",
              },
              {
                n: "3",
                title: "Diversify investments",
                body: "Maintain a diversified portfolio across stocks, bonds, and other assets. Adjust your asset allocation as you age, becoming more conservative as retirement approaches.",
              },
              {
                n: "4",
                title: "Plan for healthcare",
                body: "Healthcare costs are a major retirement expense. Consider long-term care insurance and plan for Medicare premiums and out-of-pocket expenses in your budget.",
              },
              {
                n: "5",
                title: "Consider multiple income sources",
                body: "Diversify retirement income across Social Security, pensions, personal savings, and part-time work. Multiple income sources provide stability and flexibility.",
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
            Practical Tips for Retirement Planning
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Save consistently</strong> — automate your retirement savings</>],
              [<><strong>Take employer match</strong> — never leave free money on the table</>],
              [<><strong>Review annually</strong> — adjust your plan as circumstances change</>],
              [<><strong>Pay off debt</strong> — reduce financial obligations before retirement</>],
              [<><strong>Estimate expenses</strong> — be realistic about retirement costs</>],
              [<><strong>Consider inflation</strong> — account for rising costs over time</>],
              [<><strong>Delay Social Security</strong> — if possible, for higher benefits</>],
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
                q: "How much do I need to retire?",
                a: "A common rule of thumb is 25 times your annual expenses. If you need $60,000 annually, you would need $1.5 million. However, this varies based on your lifestyle, healthcare costs, and other factors.",
              },
              {
                q: "What is the 4% rule?",
                a: "The 4% rule suggests you can safely withdraw 4% of your retirement savings annually with a low risk of depletion over 30 years. It is based on historical market returns and provides a conservative guideline.",
              },
              {
                q: "When should I start saving for retirement?",
                a: "Start as early as possible. The power of compound growth means money saved in your 20s has decades to grow. Even if you start late, begin immediately and save as much as possible.",
              },
              {
                q: "How much should I save for retirement?",
                a: "Aim to save at least 10-20% of your income for retirement. Financial experts recommend 15% as a good target. The exact amount depends on your age, current savings, and retirement goals.",
              },
              {
                q: "Will Social Security be enough?",
                a: "Social Security typically replaces about 40% of pre-retirement income for average earners. It is rarely sufficient alone. You will need additional savings from pensions, 401(k)s, IRAs, and other investments.",
              },
              {
                q: "How does inflation affect retirement?",
                a: "Inflation reduces the purchasing power of your savings over time. Your investments must outpace inflation to maintain your lifestyle. Use real returns (nominal minus inflation) in your calculations.",
              },
              {
                q: "What if I cannot save enough?",
                a: "Consider delaying retirement, reducing expenses in retirement, working part-time in retirement, or downsizing your home. Small adjustments can significantly improve your retirement security.",
              },
              {
                q: "Should I pay off my mortgage before retiring?",
                a: "This depends on your interest rate and investment returns. Low-rate mortgages can be paid alongside investing. Paying off high-interest debt before retirement reduces your required income.",
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
            The Retirement Calculator helps you understand whether you are on track for a comfortable retirement. Planning early and saving consistently are the keys to achieving financial security in your later years.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that retirement planning is not a one-time calculation. Review your plan regularly, adjust your savings rate as your income changes, and rebalance your investments as you approach retirement. Flexibility and adaptation are essential.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different retirement scenarios, and adjust your strategy as needed. A well-planned retirement strategy can provide peace of mind and financial security for your golden years.
          </p>
          <div className="pull-quote mt-8">
            &quot;Retirement is not the end of the road. It is the beginning of the open highway.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
