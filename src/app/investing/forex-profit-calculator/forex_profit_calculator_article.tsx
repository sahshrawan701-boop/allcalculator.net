import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ForexProfitCalculatorArticle() {
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
          <span className="meta-tag">Investing · Forex Trading</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Forex Profit Calculator: Calculate Your Trading Profits
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for forex traders
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Forex trading involves buying and selling currency pairs to profit from exchange rate fluctuations. The Forex Profit Calculator helps you estimate potential profits or losses from your trades based on position size, entry and exit prices, and currency pair characteristics.
          </p>
          <p className="mb-5">
            Understanding your potential profit or loss before entering a trade is essential for risk management and position sizing. This calculator accounts for the bid-ask spread, leverage, and pip value to provide accurate profit estimates.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your profit or loss in both your account currency and the quote currency, helping you make informed trading decisions and manage your risk effectively.
          </p>
          <p>
            Use the Forex Profit Calculator to plan your trades, calculate position sizes, and understand the potential outcomes of your forex trading strategies.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Forex Profit Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates your profit or loss by determining the difference between your entry and exit prices, multiplied by your position size and the pip value of the currency pair. It accounts for leverage and the direction of your trade (long or short).
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Currency pair", "The forex pair you are trading (e.g., EUR/USD)"],
              ["Position size", "Number of lots or units traded"],
              ["Entry price", "Price at which you entered the trade"],
              ["Exit price", "Price at which you exited the trade"],
              ["Account currency", "Your trading account base currency"],
              ["Trade direction", "Long (buy) or short (sell)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your profit or loss in both pips and monetary value, along with the percentage return on your trade.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Forex Profit Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Forex profit is calculated based on the price difference in pips, position size, and pip value.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Profit/Loss Formula:
          </p>
          <div className="formula-block">
            <pre>Profit_Loss = (Exit_Price - Entry_Price) × Position_Size × Contract_Size</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Pip Value Formula:
          </p>
          <div className="formula-block">
            <pre>Pip_Value = (One_Pip / Exchange_Rate) × Position_Size × Contract_Size</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Exit_Price", "Price at which you close the trade"],
              ["Entry_Price", "Price at which you open the trade"],
              ["Position_Size", "Number of lots traded"],
              ["Contract_Size", "Standard lot size (typically 100,000 units)"],
              ["One_Pip", "0.0001 for most pairs, 0.01 for JPY pairs"],
              ["Exchange_Rate", "Current exchange rate for currency conversion"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            For JPY currency pairs, a pip is typically 0.01 rather than 0.0001. Always verify the pip definition for your specific currency pair and broker.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Forex Trading Profits
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your forex trading profitability. Understanding these variables helps you make better trading decisions.
          </p>

          {[
            {
              heading: "Pip Value",
              rows: [
                ["Definition", "Value of one pip movement in your account currency"],
                ["Variation", "Depends on currency pair and exchange rate"],
                ["Impact", "Determines profit per pip movement"],
              ],
              note: "Pip values vary by currency pair and can change with exchange rates. Understanding pip value is essential for accurate position sizing and risk management.",
            },
            {
              heading: "Spread",
              rows: [
                ["Definition", "Difference between bid and ask prices"],
                ["Cost", "Implicit cost of entering a trade"],
                ["Impact", "Reduces effective profit on trades"],
              ],
              note: "The spread represents the cost of trading. Tighter spreads are generally better for traders, especially scalpers and day traders who enter and exit positions frequently.",
            },
            {
              heading: "Leverage",
              rows: [
                ["Definition", "Ratio of borrowed funds to your margin"],
                ["Typical range", "1:30 to 1:500 for retail traders"],
                ["Impact", "Amplifies both profits and losses"],
              ],
              note: "Leverage magnifies your trading power but also increases risk. Higher leverage allows larger positions with less margin but can lead to significant losses.",
            },
            {
              heading: "Market Volatility",
              rows: [
                ["Measurement", "Standard deviation of price movements"],
                ["Effect", "Higher volatility means larger potential moves"],
                ["Risk", "Increases both profit potential and loss risk"],
              ],
              note: "Volatility creates trading opportunities but also increases risk. Adjust your position sizes and stop-loss levels according to current market conditions.",
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
            Forex Trading Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different trading strategies offer varying risk-reward profiles. Choose an approach that matches your personality, schedule, and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Scalping",
                body: "Open and close positions within seconds or minutes to capture small price movements. Requires intense focus and quick execution. Best for experienced traders with low spreads.",
              },
              {
                n: "2",
                title: "Day trading",
                body: "Hold positions for a single trading day, closing before the market closes. Allows for capturing intraday trends without overnight risk. Requires active monitoring during market hours.",
              },
              {
                n: "3",
                title: "Swing trading",
                body: "Hold positions for several days to weeks to capture medium-term price movements. Requires less time than day trading but more patience. Suitable for part-time traders.",
              },
              {
                n: "4",
                title: "Position trading",
                body: "Hold positions for weeks to months based on long-term trends. Requires significant patience and tolerance for short-term fluctuations. Lowest time commitment among strategies.",
              },
              {
                n: "5",
                title: "Carry trade",
                body: "Profit from the interest rate differential between two currencies. Buy high-yielding currencies while selling low-yielding ones. Consider both exchange rate and interest rate movements.",
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
            Practical Tips for Forex Traders
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use stop-losses</strong> — always define your maximum risk per trade</>],
              [<><strong>Calculate position size</strong> — base it on your risk tolerance</>],
              [<><strong>Keep a trading journal</strong> — track your trades and learn from mistakes</>],
              [<><strong>Follow economic news</strong> — understand market-moving events</>],
              [<><strong>Practice with demo accounts</strong> — test strategies before risking real money</>],
              [<><strong>Manage emotions</strong> — avoid trading when emotional or stressed</>],
              [<><strong>Diversify currency pairs</strong> — do not concentrate in one pair</>],
              [<><strong>Use the calculator</strong> — plan trades before entering positions</>],
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
                q: "How is forex profit calculated?",
                a: "Forex profit is calculated by multiplying the price difference in pips by your position size and the pip value. For a long position, profit equals (exit price minus entry price) times position size. For short positions, it is the reverse.",
              },
              {
                q: "What is a pip in forex?",
                a: "A pip (percentage in point) is the smallest price movement in forex, typically 0.0001 for most currency pairs. For JPY pairs, a pip is 0.01. Some brokers also use pipettes, which are one-tenth of a pip.",
              },
              {
                q: "How much is a lot in forex?",
                a: "A standard lot is 100,000 units of the base currency. A mini lot is 10,000 units, and a micro lot is 1,000 units. Some brokers also offer nano lots of 100 units for very small positions.",
              },
              {
                q: "What is leverage in forex?",
                a: "Leverage allows you to control larger positions with less capital. A 1:100 leverage means you can control $100,000 with $1,000 margin. Leverage amplifies both profits and losses, so use it carefully.",
              },
              {
                q: "How do I calculate position size?",
                a: "Calculate position size based on your risk per trade and stop-loss distance. Divide your risk amount by the stop-loss in pips and pip value to determine the appropriate lot size. Never risk more than 1-2% per trade.",
              },
              {
                q: "What is the spread in forex?",
                a: "The spread is the difference between the bid (sell) and ask (buy) prices. It represents the cost of trading and is how brokers make money. Tighter spreads reduce trading costs and improve profitability.",
              },
              {
                q: "When is the best time to trade forex?",
                a: "The best trading times are when major trading sessions overlap (London/New York overlap is most active). Higher volatility during these sessions provides more trading opportunities but also increases risk.",
              },
              {
                q: "Can I make a living trading forex?",
                a: "While possible, making a living from forex trading requires significant skill, discipline, and capital. Most successful traders start small and scale up gradually. Treat it as a business, not a get-rich-quick scheme.",
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
            The Forex Profit Calculator helps you plan your trades and understand potential outcomes before risking capital. Calculating your profit or loss in advance is essential for effective risk management and position sizing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that forex trading involves significant risk. The market is highly volatile, and leverage can amplify losses quickly. Only trade with money you can afford to lose and always use proper risk management techniques.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to plan your trades, calculate position sizes, and evaluate your trading performance. Consistent analysis and disciplined execution are key to long-term success in forex trading.
          </p>
          <div className="pull-quote mt-8">
            &quot;In forex trading, protecting your capital is more important than making profits. Survive to trade another day.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
