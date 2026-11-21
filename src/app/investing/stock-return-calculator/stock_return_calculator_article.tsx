import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function StockReturnCalculatorArticle() {
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
          <span className="meta-tag">Investing · Stock Analysis</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Stock Return Calculator: Analyze Your Investment Returns
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to stock return analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Stock return analysis is essential for evaluating the performance of your investments and making informed decisions. The Stock Return Calculator helps you calculate various return metrics including total return, annualized return, and dividend-adjusted returns, providing a comprehensive view of your investment performance.
          </p>
          <p className="mb-5">
            Understanding your stock returns is crucial for portfolio management and investment strategy evaluation. This calculator shows you the true performance of your investments, accounting for price changes, dividends, and time held.
          </p>
          <p className="mb-5">
            The calculator provides estimates for total return, annualized return, dividend yield, and compound annual growth rate (CAGR), helping you compare different investments and assess your portfolio performance.
          </p>
          <p>
            Use the Stock Return Calculator to analyze your investment returns and make data-driven investment decisions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Stock Return Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates various return metrics based on your purchase and sale prices, dividends received, and holding period. It provides both simple and annualized returns to give you a complete picture of your investment performance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Purchase price", "Price at which you bought the stock"],
              ["Sale price", "Price at which you sold the stock"],
              ["Dividends received", "Total dividends received during holding"],
              ["Holding period", "Number of years held"],
              ["Shares owned", "Number of shares purchased"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays total return, annualized return, dividend yield, and CAGR.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Stock Return Formulas
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Stock returns are calculated using various formulas depending on the metric you want to measure.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Return Formula:
          </p>
          <div className="formula-block">
            <pre>Total_Return = ((Sale_Price + Dividends) - Purchase_Price) / Purchase_Price × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CAGR Formula:
          </p>
          <div className="formula-block">
            <pre>CAGR = (Ending_Value / Beginning_Value)^(1 / Years) - 1</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Total_Return", "Overall percentage return including dividends"],
              ["Sale_Price", "Price at which stock was sold"],
              ["Purchase_Price", "Price at which stock was bought"],
              ["Dividends", "Total dividends received"],
              ["CAGR", "Compound annual growth rate"],
              ["Ending_Value", "Final value of investment"],
              ["Beginning_Value", "Initial investment value"],
              ["Years", "Number of years held"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Total return includes both price appreciation and dividends, providing a complete picture of investment performance. CAGR accounts for the time value of money and is useful for comparing investments held for different periods.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Stock Returns
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your stock investment returns. Understanding these variables helps you evaluate performance accurately.
          </p>

          {[
            {
              heading: "Price Appreciation",
              rows: [
                ["Bull markets", "Higher potential returns"],
                ["Bear markets", "Negative returns possible"],
                ["Volatility", "Affects short-term returns"],
              ],
              note: "Price appreciation is the primary driver of stock returns. Market conditions significantly impact price movements, with bull markets generally providing positive returns and bear markets causing losses.",
            },
            {
              heading: "Dividends",
              rows: [
                ["Dividend yield", "Annual dividend / stock price"],
                ["Growth stocks", "Typically low or no dividends"],
                ["Value stocks", "Often higher dividend yields"],
              ],
              note: "Dividends provide regular income and contribute to total return. Dividend-paying stocks can provide stable returns even during periods of price stagnation.",
            },
            {
              heading: "Holding Period",
              rows: [
                ["Short-term", "More volatile returns"],
                ["Long-term", "Smoothing of volatility"],
                ["Tax implications", "Different rates for different periods"],
              ],
              note: "Longer holding periods tend to smooth out volatility and historically have provided better returns. Long-term holdings also benefit from lower capital gains tax rates.",
            },
            {
              heading: "Transaction Costs",
              rows: [
                ["Commissions", "Reduce net returns"],
                ["Bid-ask spread", "Impact on small trades"],
                ["Taxes", "Significant impact on after-tax returns"],
              ],
              note: "Transaction costs can significantly reduce your net returns, especially for frequent traders. Consider all costs when evaluating investment performance.",
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
            Stock Return Analysis Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help you analyze and optimize your stock returns. Choose approaches that align with your investment goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Total return analysis",
                body: "Evaluate investments based on total return including both price appreciation and dividends. This provides a complete picture of performance and is essential for comparing different investments.",
              },
              {
                n: "2",
                title: "Benchmark comparison",
                body: "Compare your stock returns against relevant benchmarks like the S&P 500 or sector indices. This helps you determine if your investments are outperforming or underperforming the market.",
              },
              {
                n: "3",
                title: "Risk-adjusted returns",
                body: "Consider risk when evaluating returns. Use metrics like Sharpe ratio to compare returns relative to risk taken. Higher returns with lower risk are preferable.",
              },
              {
                n: "4",
                title: "After-tax returns",
                body: "Calculate returns after accounting for taxes. Long-term capital gains are taxed at lower rates than short-term gains. Tax-efficient investing can significantly improve after-tax returns.",
              },
              {
                n: "5",
                title: "Time-weighted returns",
                body: "Use time-weighted returns for performance evaluation, especially if you make additional contributions or withdrawals. This isolates the investment performance from cash flow timing.",
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
            Practical Tips for Stock Return Analysis
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Track all costs</strong> — include commissions and fees</>],
              [<><strong>Account for dividends</strong> — include in total return</>],
              [<><strong>Use CAGR</strong> — for multi-year comparisons</>],
              [<><strong>Compare to benchmarks</strong> — evaluate relative performance</>],
              [<><strong>Consider taxes</strong> — calculate after-tax returns</>],
              [<><strong>Review regularly</strong> — monitor portfolio performance</>],
              [<><strong>Be realistic</strong> — understand market cycles</>],
              [<><strong>Use the calculator</strong> — analyze each investment</>],
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
                q: "What is total return?",
                a: "Total return is the overall return on an investment including both price appreciation and dividends received. It provides a complete picture of investment performance and is expressed as a percentage.",
              },
              {
                q: "How is CAGR calculated?",
                a: "CAGR (Compound Annual Growth Rate) is calculated as (Ending Value / Beginning Value)^(1 / Years) - 1. It represents the annualized growth rate of an investment over a specific period.",
              },
              {
                q: "What is the difference between total return and price return?",
                a: "Price return only considers the change in stock price, while total return includes both price appreciation and dividends. Total return provides a more complete picture of investment performance.",
              },
              {
                q: "How do dividends affect stock returns?",
                a: "Dividends contribute to total return by providing regular income. Reinvested dividends can significantly enhance returns through compound growth, especially over long periods.",
              },
              {
                q: "What is a good stock return?",
                a: "A good stock return depends on your investment goals and time horizon. Historically, the stock market has returned about 10% annually before inflation. Returns above this are considered good.",
              },
              {
                q: "How do I calculate annualized return?",
                a: "Annualized return accounts for the time value of money and is calculated using the CAGR formula. It allows you to compare investments held for different periods on an equal basis.",
              },
              {
                q: "Should I include transaction costs in return calculations?",
                a: "Yes, transaction costs reduce your net returns and should be included for accurate performance evaluation. This is especially important for frequent traders where costs can significantly impact returns.",
              },
              {
                q: "How does holding period affect returns?",
                a: "Longer holding periods tend to smooth out volatility and historically have provided better returns. Long-term holdings also benefit from lower capital gains tax rates and reduced transaction costs.",
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
            The Stock Return Calculator helps you analyze your investment performance accurately, making data-driven decisions about your portfolio. Understanding your returns is essential for evaluating investment strategies and making informed decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that past returns do not guarantee future results. Focus on understanding the drivers of your returns and use this knowledge to refine your investment strategy. Consider both absolute returns and risk-adjusted returns when evaluating performance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your investment performance, compare against benchmarks, and make informed decisions about buying, holding, or selling stocks. Consistent analysis leads to better investment outcomes.
          </p>
          <div className="pull-quote mt-8">
            &quot;In investing, what is comfortable is rarely profitable.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
