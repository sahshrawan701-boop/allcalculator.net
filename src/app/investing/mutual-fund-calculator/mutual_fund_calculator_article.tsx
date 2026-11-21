import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MutualFundCalculatorArticle() {
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
          <span className="meta-tag">Investing · Mutual Funds</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Mutual Fund Calculator: Project Your Fund Returns
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to mutual fund investing
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Mutual funds pool money from many investors to purchase a diversified portfolio of stocks, bonds, or other securities. The Mutual Fund Calculator helps you project the growth of your mutual fund investments based on your initial investment, regular contributions, expected returns, and expense ratios.
          </p>
          <p className="mb-5">
            Understanding how mutual funds grow over time is essential for retirement planning and wealth building. This calculator accounts for the impact of expense ratios, which reduce your net returns, and shows how different contribution amounts affect your investment growth.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your future value, total contributions, total earnings, and the impact of fees on your returns, helping you make informed investment decisions.
          </p>
          <p>
            Use the Mutual Fund Calculator to plan your investments and understand how mutual funds can help you achieve your financial goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Mutual Fund Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses compound interest formulas adjusted for expense ratios to project how your mutual fund investment will grow. It considers your initial investment, regular contributions, expected gross returns, and the fund&apos;s expense ratio to calculate your net returns.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial investment", "Starting amount you invest"],
              ["Regular contributions", "Amount you add periodically"],
              ["Contribution frequency", "How often you add contributions"],
              ["Expected return (%)", "Gross annual return before fees"],
              ["Expense ratio (%)", "Annual fund fee"],
              ["Time period", "Number of years to invest"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future value, total contributions, total earnings, and the impact of fees on your returns.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Mutual Fund Growth Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Mutual fund growth is calculated using compound interest formulas adjusted for expense ratios.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Net Return Formula:
          </p>
          <div className="formula-block">
            <pre>Net_Return = Gross_Return - Expense_Ratio</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Future Value Formula (with contributions):
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r)^(t) + PMT × ((1 + r)^(t) - 1) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of the investment"],
              ["PV", "Present value (initial investment)"],
              ["PMT", "Regular contribution amount"],
              ["r", "Net annual return rate (decimal)"],
              ["t", "Number of years"],
              ["Gross_Return", "Return before fees"],
              ["Expense_Ratio", "Annual fee percentage"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Expense ratios significantly impact long-term returns. A 1% difference in expense ratio can reduce your final portfolio value by 20% or more over 30 years. Always consider fees when selecting mutual funds.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Mutual Fund Returns
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your mutual fund investment returns. Understanding these variables helps you select better funds.
          </p>

          {[
            {
              heading: "Expense Ratio",
              rows: [
                ["Index funds", "0.03% - 0.20% annually"],
                ["Active funds", "0.50% - 1.50% annually"],
                ["Impact", "Directly reduces net returns"],
              ],
              note: "Lower expense ratios are critical for long-term performance. Even small differences compound significantly over time. Index funds typically offer lower fees than actively managed funds.",
            },
            {
              heading: "Fund Performance",
              rows: [
                ["Historical returns", "Past performance does not guarantee future results"],
                ["Benchmark comparison", "Compare against appropriate index"],
                ["Consistency", "Look for consistent performance over time"],
              ],
              note: "While past performance does not guarantee future results, consistent outperformance against benchmarks over multiple market cycles may indicate skilled management.",
            },
            {
              heading: "Fund Type",
              rows: [
                ["Equity funds", "Stock investments, higher growth potential"],
                ["Bond funds", "Fixed income, lower volatility"],
                ["Balanced funds", "Mix of stocks and bonds"],
                ["Target-date funds", "Automatically adjust allocation over time"],
              ],
              note: "Choose fund types that match your risk tolerance and investment timeline. Younger investors may prefer equity funds, while those nearing retirement may favor balanced funds.",
            },
            {
              heading: "Turnover Ratio",
              rows: [
                ["Definition", "Frequency of buying and selling securities"],
                ["Impact", "Higher turnover increases tax costs"],
                ["Typical range", "5% - 100%+ annually"],
              ],
              note: "High turnover funds generate more capital gains taxes, which reduce after-tax returns. Consider tax efficiency, especially in taxable accounts.",
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
            Mutual Fund Investment Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help maximize your mutual fund returns. Choose an approach that aligns with your goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Index fund investing",
                body: "Invest in low-cost index funds that track market benchmarks. This passive strategy has historically outperformed most actively managed funds after accounting for fees.",
              },
              {
                n: "2",
                title: "Asset allocation",
                body: "Distribute investments across different fund types based on your risk tolerance. Rebalance periodically to maintain your target allocation as markets fluctuate.",
              },
              {
                n: "3",
                title: "Dollar-cost averaging",
                body: "Invest fixed amounts regularly regardless of market conditions. This reduces timing risk and can lower your average cost per share over time.",
              },
              {
                n: "4",
                title: "Target-date funds",
                body: "Use funds that automatically adjust asset allocation based on your target retirement date. These funds simplify portfolio management for retirement savers.",
              },
              {
                n: "5",
                title: "Tax-efficient investing",
                body: "Prioritize tax-efficient funds in taxable accounts. Use tax-advantaged accounts for funds with higher turnover or distributions to minimize tax impact.",
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
            Practical Tips for Mutual Fund Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Compare expense ratios</strong> — lower fees improve long-term returns</>],
              [<><strong>Check fund performance</strong> — compare against appropriate benchmarks</>],
              [<><strong>Understand the strategy</strong> — know what you are investing in</>],
              [<><strong>Diversify across funds</strong> — do not concentrate in one fund</>],
              [<><strong>Consider tax efficiency</strong> — especially in taxable accounts</>],
              [<><strong>Review holdings regularly</strong> — ensure alignment with your goals</>],
              [<><strong>Reinvest distributions</strong> — maximize compound growth</>],
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
                q: "What is a mutual fund?",
                a: "A mutual fund is an investment vehicle that pools money from many investors to purchase a diversified portfolio of securities. Professional managers make investment decisions, and investors own shares of the fund.",
              },
              {
                q: "How is mutual fund return calculated?",
                a: "Mutual fund returns are calculated based on the change in net asset value (NAV) plus any distributions (dividends and capital gains). The calculator projects future returns using compound interest adjusted for expense ratios.",
              },
              {
                q: "What is an expense ratio?",
                a: "The expense ratio is the annual fee charged by the mutual fund, expressed as a percentage of assets. It covers management fees, administrative costs, and other operating expenses. Lower expense ratios are better for investors.",
              },
              {
                q: "What is the difference between index funds and active funds?",
                a: "Index funds passively track a market benchmark and have low expense ratios. Active funds attempt to outperform benchmarks through security selection and have higher expense ratios. Index funds typically outperform active funds after fees.",
              },
              {
                q: "How much should I invest in mutual funds?",
                a: "Aim to invest at least 10-20% of your income. The exact amount depends on your goals, timeline, and financial situation. Start with what you can afford and increase contributions as your income grows.",
              },
              {
                q: "Should I reinvest mutual fund distributions?",
                a: "Reinvesting distributions through dividend reinvestment plans (DRIPs) can significantly accelerate wealth building through compounding. This is especially beneficial for long-term investors.",
              },
              {
                q: "How do I choose a mutual fund?",
                a: "Consider factors such as expense ratio, historical performance relative to benchmarks, fund strategy, manager experience, and tax efficiency. Choose funds that align with your investment goals and risk tolerance.",
              },
              {
                q: "Are mutual funds safer than individual stocks?",
                a: "Mutual funds are generally safer than individual stocks because they provide instant diversification across many securities. However, they are still subject to market risk and can decline in value during market downturns.",
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
            The Mutual Fund Calculator helps you understand how your mutual fund investments can grow over time and the impact of fees on your returns. Visualizing potential outcomes helps you make informed investment decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that mutual fund returns are not guaranteed. Markets fluctuate, and past performance does not guarantee future results. Focus on low-cost index funds for most of your portfolio, and consider actively managed funds only if they have a compelling track record.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your investment strategy as needed. The combination of consistent investing, low fees, and time can build substantial wealth through mutual funds.
          </p>
          <div className="pull-quote mt-8">
            &quot;In investing, what is comfortable is rarely profitable.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
