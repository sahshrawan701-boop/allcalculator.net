import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LeverageCalculatorArticle() {
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
          <span className="meta-tag">Investing · Leverage</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Leverage Calculator: Understand Your Trading Leverage
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to leverage and margin trading
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Leverage allows traders to control larger positions with less capital by borrowing from their broker. The Leverage Calculator helps you understand your margin requirements, position sizes, and potential profits or losses when using leverage in trading.
          </p>
          <p className="mb-5">
            Understanding leverage is essential for risk management in trading. While leverage can amplify profits, it also amplifies losses proportionally. This calculator helps you calculate margin requirements and understand the implications of different leverage levels.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your required margin, position value, and potential profit or loss at different leverage ratios, helping you make informed trading decisions.
          </p>
          <p>
            Use the Leverage Calculator to plan your trades, manage your risk, and understand the impact of leverage on your trading positions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Leverage Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator determines your margin requirement by dividing your position size by the leverage ratio. It also calculates your potential profit or loss based on price movements and shows how leverage amplifies both gains and losses.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Position size", "Number of units or lots you want to trade"],
              ["Leverage ratio", "Amount of leverage (e.g., 1:10, 1:100)"],
              ["Entry price", "Price at which you enter the trade"],
              ["Exit price", "Price at which you exit the trade"],
              ["Account currency", "Your trading account base currency"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your required margin, position value, and potential profit or loss, along with the percentage return on your margin.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Leverage Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Leverage calculations determine how much margin is required and how profits and losses are amplified.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Margin Requirement Formula:
          </p>
          <div className="formula-block">
            <pre>Margin_Required = Position_Value / Leverage_Ratio</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Profit/Loss Formula:
          </p>
          <div className="formula-block">
            <pre>Profit_Loss = (Exit_Price - Entry_Price) × Position_Size</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Return on Margin Formula:
          </p>
          <div className="formula-block">
            <pre>Return_Percentage = (Profit_Loss / Margin_Required) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Position_Value", "Total value of your position"],
              ["Leverage_Ratio", "Amount of leverage (e.g., 10 for 1:10)"],
              ["Exit_Price", "Price at which you close the trade"],
              ["Entry_Price", "Price at which you open the trade"],
              ["Position_Size", "Number of units traded"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Higher leverage ratios require less margin but increase risk significantly. A 1% price movement with 1:100 leverage results in a 100% gain or loss on your margin.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Leverage Trading
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your leverage trading outcomes. Understanding these variables is critical for risk management.
          </p>

          {[
            {
              heading: "Leverage Ratio",
              rows: [
                ["Conservative", "1:2 to 1:10 for most traders"],
                ["Moderate", "1:10 to 1:50 for experienced traders"],
                ["High", "1:50 to 1:500 for aggressive traders"],
              ],
              note: "Higher leverage allows larger positions with less margin but dramatically increases risk. Most traders should use conservative leverage ratios to manage risk effectively.",
            },
            {
              heading: "Margin Requirements",
              rows: [
                ["Definition", "Amount required to open and maintain position"],
                ["Maintenance margin", "Minimum to keep position open"],
                ["Margin call", "Broker requirement to add funds"],
              ],
              note: "If your account equity falls below the maintenance margin, you will receive a margin call. Failure to meet it may result in automatic position closure.",
            },
            {
              heading: "Market Volatility",
              rows: [
                ["Impact", "Volatility amplifies leverage effects"],
                ["Risk", "Higher volatility increases liquidation risk"],
                ["Strategy", "Adjust leverage based on market conditions"],
              ],
              note: "Volatile markets can trigger margin calls quickly with high leverage. Reduce leverage during periods of high volatility to manage risk.",
            },
            {
              heading: "Position Size",
              rows: [
                ["Calculation", "Based on margin and leverage ratio"],
                ["Risk management", "Size positions based on risk tolerance"],
                ["Flexibility", "Can adjust leverage by changing position size"],
              ],
              note: "Proper position sizing is critical with leverage. Never risk more than 1-2% of your account on a single trade, regardless of leverage used.",
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
            Leverage Trading Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different leverage strategies offer varying risk-reward profiles. Choose an approach that matches your experience and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Conservative leverage",
                body: "Use low leverage ratios (1:2 to 1:10) to minimize risk while still gaining some amplification. Suitable for beginners and risk-averse traders. Focus on preserving capital.",
              },
              {
                n: "2",
                title: "Moderate leverage",
                body: "Use moderate leverage (1:10 to 1:50) for balanced risk and reward. Requires experience and solid risk management. Suitable for intermediate traders with proven strategies.",
              },
              {
                n: "3",
                title: "Scalping with leverage",
                body: "Use higher leverage for very short-term trades aiming for small price movements. Requires precise timing and quick execution. High risk but potential for frequent small profits.",
              },
              {
                n: "4",
                title: "Hedging strategies",
                body: "Use leverage to hedge existing positions or create market-neutral strategies. Requires advanced understanding of correlations and risk management. Can reduce overall portfolio risk.",
              },
              {
                n: "5",
                title: "Pyramid trading",
                body: "Add to winning positions using leverage while maintaining strict risk controls. Requires discipline and clear exit rules. Can amplify gains but also increases risk exposure.",
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
            Practical Tips for Leverage Trading
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use stop-losses</strong> — always define maximum risk per trade</>],
              [<><strong>Start small</strong> — begin with low leverage and increase gradually</>],
              [<><strong>Monitor margin</strong> — keep track of your margin level closely</>],
              [<><strong>Understand risks</strong> — know the implications of leverage before trading</>],
              [<><strong>Size positions</strong> — base position size on risk tolerance</>],
              [<><strong>Keep reserves</strong> — maintain extra margin for volatility</>],
              [<><strong>Avoid overtrading</strong> — do not overleverage your account</>],
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
                q: "What is leverage in trading?",
                a: "Leverage allows you to control larger positions with less capital by borrowing from your broker. For example, with 1:100 leverage, you can control $100,000 with only $1,000 of your own capital.",
              },
              {
                q: "How is margin calculated?",
                a: "Margin is calculated by dividing the position value by the leverage ratio. For a $100,000 position with 1:100 leverage, the required margin is $1,000.",
              },
              {
                q: "What is a margin call?",
                a: "A margin call occurs when your account equity falls below the required maintenance margin. Your broker will require you to deposit additional funds or close positions to meet the margin requirement.",
              },
              {
                q: "What leverage should I use?",
                a: "Beginners should use low leverage (1:2 to 1:10). Experienced traders may use moderate leverage (1:10 to 1:50). Higher leverage dramatically increases risk and should be avoided by most traders.",
              },
              {
                q: "How does leverage affect profits and losses?",
                a: "Leverage amplifies both profits and losses proportionally. With 1:100 leverage, a 1% price movement results in a 100% gain or loss on your margin. This magnification works both ways.",
              },
              {
                q: "What is the difference between leverage and margin?",
                a: "Leverage is the ratio of borrowed funds to your margin, while margin is the actual amount required to open and maintain a position. Leverage determines how much margin you need.",
              },
              {
                q: "Can I lose more than my investment with leverage?",
                a: "Yes, with leverage you can lose more than your initial margin. However, most brokers have mechanisms to prevent negative balances, such as automatic position closure at certain loss levels.",
              },
              {
                q: "How do I manage risk with leverage?",
                a: "Use stop-losses, limit position sizes to 1-2% of your account, maintain adequate margin reserves, and avoid overleveraging. Never risk money you cannot afford to lose.",
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
            The Leverage Calculator helps you understand the implications of using leverage in your trading. Calculating margin requirements and potential outcomes before entering trades is essential for effective risk management.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that leverage is a double-edged sword. While it can amplify profits, it also amplifies losses and can lead to rapid account depletion if not managed properly. Always use leverage cautiously and with proper risk controls.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to plan your trades, calculate margin requirements, and understand the potential outcomes of leveraged positions. Responsible use of leverage can be a powerful tool, but misuse can lead to significant losses.
          </p>
          <div className="pull-quote mt-8">
            &quot;Leverage is like fire: it can cook your food or burn your house down. Respect it, use it wisely, and never forget the risks.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
