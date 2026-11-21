import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InvestmentCalculatorArticle() {
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
          <span className="meta-tag">Investing · General Investment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Investment Calculator: Plan Your Financial Growth
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to investment planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Investing is one of the most effective ways to build wealth over time. The Investment Calculator helps you project how your investments can grow based on your initial contribution, regular additions, expected returns, and time horizon. Understanding these projections is essential for making informed financial decisions.
          </p>
          <p className="mb-5">
            Whether you are saving for retirement, a major purchase, or building long-term wealth, this calculator provides valuable insights into how different investment strategies can affect your financial future. It accounts for compound interest, which allows your money to grow exponentially over time.
          </p>
          <p className="mb-5">
            The calculator displays your projected future value, total contributions, and total earnings, helping you understand the power of consistent investing and compound growth.
          </p>
          <p>
            Use the Investment Calculator to explore different scenarios and create a personalized investment plan that aligns with your financial goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Investment Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses compound interest formulas to project how your investment will grow over time. It considers your initial investment, regular contributions, expected annual return, and investment duration to calculate your future value.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial investment", "Starting amount you invest"],
              ["Regular contributions", "Amount you add periodically"],
              ["Contribution frequency", "How often you add contributions"],
              ["Expected return (%)", "Anticipated annual rate of return"],
              ["Time period", "Number of years to invest"],
              ["Compound frequency", "How often interest compounds"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future value, total contributions, and total interest earned, along with year-by-year growth projections.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Investment Growth Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Investment growth is calculated using compound interest formulas that account for both your initial principal and regular contributions.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula (with contributions):
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r/n)^(n×t) + PMT × ((1 + r/n)^(n×t) - 1) / (r/n)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of the investment"],
              ["PV", "Present value (initial investment)"],
              ["PMT", "Regular contribution amount"],
              ["r", "Annual interest rate (decimal)"],
              ["n", "Number of compounding periods per year"],
              ["t", "Number of years"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Compound interest means you earn interest on both your initial investment and accumulated interest. This creates exponential growth that accelerates over time, especially with longer investment horizons.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Investment Growth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how your investments grow over time. Understanding these variables helps you make better investment decisions.
          </p>

          {[
            {
              heading: "Rate of Return",
              rows: [
                ["Conservative", "3% - 5% annually (bonds, savings)"],
                ["Moderate", "6% - 8% annually (balanced portfolio)"],
                ["Aggressive", "9% - 12% annually (stocks, real estate)"],
              ],
              note: "Higher returns accelerate growth but come with increased risk and volatility. Choose an expected return that matches your risk tolerance and investment timeline.",
            },
            {
              heading: "Time Horizon",
              rows: [
                ["Short-term", "1-3 years (lower risk, cash equivalents)"],
                ["Medium-term", "3-10 years (balanced approach)"],
                ["Long-term", "10+ years (growth-focused, higher risk)"],
              ],
              note: "Longer time horizons allow you to take more risk and benefit from compound interest. Time is your most powerful ally in building wealth through investing.",
            },
            {
              heading: "Contribution Amount",
              rows: [
                ["Consistency", "Regular contributions build wealth steadily"],
                ["Amount", "Higher contributions accelerate growth"],
                ["Flexibility", "Can adjust based on financial situation"],
              ],
              note: "Regular contributions are often more important than the initial amount. Consistent investing builds wealth through both contributions and compound growth on those contributions.",
            },
            {
              heading: "Investment Type",
              rows: [
                ["Stocks", "High growth potential, higher volatility"],
                ["Bonds", "Steady income, lower volatility"],
                ["Real estate", "Potential for appreciation and income"],
                ["Diversified", "Balances risk across asset classes"],
              ],
              note: "Diversification across different asset classes can reduce risk while maintaining growth potential. Consider your risk tolerance when selecting investment types.",
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
            Investment Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different investment strategies offer varying risk-reward profiles. Choose an approach that aligns with your goals, timeline, and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Buy and hold",
                body: "Purchase investments and hold them for the long term regardless of market fluctuations. This strategy minimizes trading costs and takes advantage of long-term market growth.",
              },
              {
                n: "2",
                title: "Dollar-cost averaging",
                body: "Invest a fixed amount regularly regardless of market conditions. This reduces the impact of market volatility and eliminates the need to time the market.",
              },
              {
                n: "3",
                title: "Index fund investing",
                body: "Invest in broad market index funds for diversified exposure at low cost. This passive strategy has historically outperformed most actively managed funds.",
              },
              {
                n: "4",
                title: "Dividend investing",
                body: "Focus on dividend-paying stocks for regular income and potential capital appreciation. Reinvesting dividends accelerates compound growth.",
              },
              {
                n: "5",
                title: "Asset allocation",
                body: "Distribute investments across different asset classes based on your risk tolerance and goals. Rebalance periodically to maintain your target allocation.",
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
            Practical Tips for Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time is your most powerful ally</>],
              [<><strong>Be consistent</strong> — regular investing beats timing the market</>],
              [<><strong>Diversify</strong> — spread risk across different investments</>],
              [<><strong>Minimize fees</strong> — low-cost investments preserve more returns</>],
              [<><strong>Stay invested</strong> — avoid emotional selling during downturns</>],
              [<><strong>Reinvest earnings</strong> — maximize compound growth</>],
              [<><strong>Review regularly</strong> — monitor progress and rebalance as needed</>],
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
                q: "How much should I invest?",
                a: "Aim to invest at least 10-20% of your income. The exact amount depends on your goals, timeline, and current financial situation. Start with what you can afford and increase contributions as your income grows.",
              },
              {
                q: "What is a good rate of return?",
                a: "Historical stock market returns average about 7-10% annually after inflation. Bonds typically return 3-5%. Your expected return should match your risk tolerance and investment timeline.",
              },
              {
                q: "How often should I contribute?",
                a: "Monthly contributions are most common and practical for most investors. More frequent contributions can slightly improve returns through dollar-cost averaging, but the difference is minimal.",
              },
              {
                q: "Should I invest a lump sum or gradually?",
                a: "If you have a lump sum, investing it immediately typically outperforms gradual investing over long periods. However, dollar-cost averaging can reduce emotional stress and timing risk.",
              },
              {
                q: "What is compound interest?",
                a: "Compound interest means you earn interest on both your initial principal and accumulated interest. This creates exponential growth that accelerates over time, making it a powerful wealth-building tool.",
              },
              {
                q: "How do I choose investments?",
                a: "Choose investments based on your risk tolerance, time horizon, and financial goals. Consider low-cost index funds for diversified exposure. Consult a financial advisor if you need personalized guidance.",
              },
              {
                q: "Should I pay off debt or invest?",
                a: "Generally, pay off high-interest debt (above 7-8%) before investing. Low-interest debt like mortgages can be paid alongside investing. Compare the guaranteed return of debt repayment to potential investment returns.",
              },
              {
                q: "What if I need to withdraw early?",
                a: "Early withdrawals may trigger taxes or penalties depending on the account type. Consider your liquidity needs before investing and maintain an emergency fund separate from your investments.",
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
            The Investment Calculator helps you understand how your investments can grow over time and plan your financial future. Visualizing potential outcomes motivates consistent saving and informed investment decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that investment returns are not guaranteed. Markets fluctuate, and past performance does not guarantee future results. Use conservative estimates when planning and maintain an appropriate emergency fund.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your investment strategy as needed. The combination of time, consistent contributions, and wise investment choices can help you achieve your financial goals.
          </p>
          <div className="pull-quote mt-8">
            &quot;The best time to plant a tree was 20 years ago. The second best time is now. The same applies to investing.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
