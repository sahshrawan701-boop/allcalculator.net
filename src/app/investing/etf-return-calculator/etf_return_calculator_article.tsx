import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ETFReturnCalculatorArticle() {
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
          <span className="meta-tag">Investing · ETF Returns</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            ETF Return Calculator: Track Your Investment Performance
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for ETF investors
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Exchange-traded funds (ETFs) have become increasingly popular for their low costs, diversification benefits, and ease of trading. The ETF Return Calculator helps you track the performance of your ETF investments, accounting for initial investment, contributions, dividends, and capital appreciation.
          </p>
          <p className="mb-5">
            Understanding your ETF returns is essential for evaluating investment performance and making informed decisions about your portfolio. ETFs offer exposure to various asset classes, sectors, and investment strategies, making them versatile tools for building a diversified portfolio.
          </p>
          <p className="mb-5">
            The calculator provides a comprehensive breakdown of your investment performance, including total return, annualized return, and the contribution of dividends versus capital appreciation to your overall returns.
          </p>
          <p>
            Use the ETF Return Calculator to analyze your ETF investments and optimize your portfolio strategy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the ETF Return Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates your total return by comparing your current investment value to your total invested capital, including any additional contributions and reinvested dividends. It provides both absolute returns and annualized returns for meaningful performance comparison.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial investment", "Amount invested when you first purchased the ETF"],
              ["Additional contributions", "Total amount added to the investment over time"],
              ["Current value", "Current market value of your ETF holdings"],
              ["Dividends received", "Total dividends paid during the investment period"],
              ["Investment period", "Length of time you have held the investment"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your total return, annualized return, and breaks down the sources of your returns between capital appreciation and dividend income.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The ETF Return Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Calculating ETF returns involves determining the percentage change in your investment value, accounting for contributions and dividends.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Return Formula:
          </p>
          <div className="formula-block">
            <pre>Total_Return = ((Current_Value + Dividends - Total_Invested) / Total_Invested) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Annualized Return Formula:
          </p>
          <div className="formula-block">
            <pre>Annualized_Return = ((Final_Value / Initial_Value)^(1/Years) - 1) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Current_Value", "Current market value of your ETF holdings"],
              ["Dividends", "Total dividends received (reinvested or taken as cash)"],
              ["Total_Invested", "Initial investment plus all additional contributions"],
              ["Initial_Value", "Starting value before any contributions"],
              ["Years", "Number of years held"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Annualized return allows for meaningful comparison between investments held for different time periods. It represents the equivalent annual return that would produce the same final value if compounded annually.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting ETF Returns
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your ETF investment returns. Understanding these variables helps you make better investment decisions and set realistic expectations.
          </p>

          {[
            {
              heading: "Expense Ratio",
              rows: [
                ["Typical range", "0.03% - 0.75% annually"],
                ["Impact", "Reduces net returns over time"],
		["Low-cost advantage", "Passive index ETFs typically have lower fees"],
              ],
              note: "Even small differences in expense ratios can significantly impact long-term returns due to the compounding effect.",
            },
            {
              heading: "Dividend Yield",
              rows: [
                ["Income component", "Provides regular cash flow"],
                ["Reinvestment effect", "Compounds when reinvested"],
                ["Yield variation", "Depends on underlying assets and sector"],
              ],
              note: "Dividend-paying ETFs can provide steady income, but high yields may come with trade-offs in capital appreciation potential.",
            },
            {
              heading: "Market Performance",
              rows: [
                ["Primary driver", "Underlying asset price changes"],
                ["Volatility", "Varies by asset class and strategy"],
                ["Correlation", "Different ETFs respond differently to market conditions"],
              ],
              note: "ETF returns are primarily driven by the performance of the underlying assets they track. Market conditions significantly impact results.",
            },
            {
              heading: "Tracking Error",
              rows: [
                ["Definition", "Difference between ETF and benchmark performance"],
                ["Causes", "Fees, trading costs, sampling methodology"],
                ["Ideal range", "Close to zero, typically under 0.1%"],
              ],
              note: "Low tracking error indicates the ETF is effectively replicating its benchmark. High tracking error may indicate management or structural issues.",
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
            ETF Investment Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different ETF investment strategies offer varying risk-reward profiles. Choose a strategy that matches your investment goals and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Broad market index ETFs",
                body: "Invest in ETFs tracking major indices like the S&amp;P 500 or total market. Provides diversified exposure to the overall market with low fees. Suitable for core portfolio holdings.",
              },
              {
                n: "2",
                title: "Sector-specific ETFs",
                body: "Target specific sectors like technology, healthcare, or energy. Offers concentrated exposure to industry trends. Higher risk but potential for higher returns in favorable conditions.",
              },
              {
                n: "3",
                title: "International ETFs",
                body: "Gain exposure to foreign markets and currencies. Provides geographic diversification and access to growth opportunities outside domestic markets. Currency risk is a consideration.",
              },
              {
                n: "4",
                title: "Bond ETFs",
                body: "Invest in fixed income securities for income and stability. Lower volatility than stock ETFs but sensitive to interest rate changes. Suitable for income generation and capital preservation.",
              },
              {
                n: "5",
                title: "Factor-based ETFs",
                body: "Target specific factors like value, momentum, or low volatility. Attempts to outperform market-cap weighted indices through systematic factor exposure. Higher fees and complexity.",
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
            Practical Tips for ETF Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Compare expense ratios</strong> — lower fees improve long-term returns</>],
              [<><strong>Understand the underlying index</strong> — know what you are investing in</>],
              [<><strong>Check liquidity</strong> — ensure adequate trading volume</>],
              [<><strong>Consider tax efficiency</strong> — some ETFs are more tax-efficient than others</>],
              [<><strong>Diversify across asset classes</strong> — do not concentrate in one type of ETF</>],
              [<><strong>Monitor tracking error</strong> — ensure ETF performs as expected</>],
              [<><strong>Use limit orders</strong> — avoid paying more than necessary</>],
              [<><strong>Review holdings regularly</strong> — ensure alignment with your goals</>],
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
                q: "How do ETF returns compare to mutual funds?",
                a: "ETFs typically have lower expense ratios than mutual funds, which can lead to higher net returns over time. ETFs also trade throughout the day like stocks, while mutual funds price only once daily. Tax efficiency can vary depending on the fund structure and turnover.",
              },
              {
                q: "What is a good ETF return?",
                a: "Good returns depend on the asset class and market conditions. Stock ETFs might target 8-10% annual returns historically, while bond ETFs might target 3-5%. Compare returns to appropriate benchmarks and account for your investment timeline and risk tolerance.",
              },
              {
                q: "How often should I check my ETF returns?",
                a: "Review your ETF returns quarterly or semi-annually for routine monitoring. Avoid checking too frequently, as short-term volatility can be misleading. Focus on long-term performance relative to benchmarks rather than daily fluctuations.",
              },
              {
                q: "Should I reinvest ETF dividends?",
                a: "Reinvesting dividends through DRIPs can accelerate wealth building through compounding. This is particularly beneficial for long-term investors. If you need current income, taking dividends as cash may be more appropriate.",
              },
              {
                q: "What is tracking error?",
                a: "Tracking error measures how closely an ETF follows its benchmark index. It is the standard deviation of the difference between ETF returns and benchmark returns. Lower tracking error indicates better replication of the benchmark.",
              },
              {
                q: "Are ETFs safer than individual stocks?",
                a: "ETFs are generally safer than individual stocks because they provide instant diversification across many holdings. However, they are still subject to market risk and can decline in value. Safety depends on the underlying assets and diversification level.",
              },
              {
                q: "How do I calculate ETF total return?",
                a: "Total return includes both capital appreciation and dividends. Calculate it by adding the current value and dividends received, subtracting the total invested, and dividing by the total invested. Multiply by 100 to express as a percentage.",
              },
              {
                q: "What is the difference between price return and total return?",
                a: "Price return only considers the change in the ETF share price. Total return includes both price change and dividends reinvested or received. Total return provides a more complete picture of investment performance.",
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
            The ETF Return Calculator helps you track and analyze the performance of your ETF investments, providing insights into how your portfolio is growing over time. Understanding your returns is essential for evaluating investment decisions and ensuring your strategy aligns with your financial goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that past performance does not guarantee future results. ETF returns are subject to market volatility, and different asset classes will perform differently under various economic conditions. Maintain a diversified portfolio aligned with your risk tolerance and investment timeline.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to monitor your ETF performance, compare against benchmarks, and make informed decisions about rebalancing or adjusting your portfolio strategy. Consistent evaluation helps ensure your investments remain on track to meet your financial objectives.
          </p>
          <div className="pull-quote mt-8">
            &quot;The goal of investing is not to beat the market, but to achieve your financial goals. ETFs provide an efficient path to get there.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
