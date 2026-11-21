import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PositionSizeCalculatorArticle() {
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
          <span className="meta-tag">Investing · Position Sizing</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Position Size Calculator: Manage Your Trading Risk
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to position sizing
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Position sizing is one of the most critical aspects of risk management in trading. The Position Size Calculator helps you determine the appropriate position size based on your account balance, risk percentage, and stop-loss distance. Proper position sizing ensures you never risk more than you can afford on any single trade.
          </p>
          <p className="mb-5">
            Understanding how to size your positions correctly is essential for long-term trading success. This calculator helps you calculate position size in units, lots, or dollar amount based on your risk tolerance and the specific parameters of your trade.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your position size, risk amount in dollars, and the number of units or lots to trade, helping you manage your risk effectively and avoid overexposure.
          </p>
          <p>
            Use the Position Size Calculator to plan your trades and ensure you are taking appropriate risk on every position.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Position Size Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator determines your position size by dividing your risk amount by the risk per unit. Your risk amount is calculated as a percentage of your account balance, and risk per unit is determined by the distance between your entry price and stop-loss.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Account balance", "Total capital in your trading account"],
              ["Risk percentage (%)", "Percentage of account to risk per trade"],
              ["Entry price", "Price at which you enter the trade"],
              ["Stop-loss price", "Price at which you will exit if wrong"],
              ["Currency pair", "The instrument you are trading"],
              ["Account currency", "Your trading account base currency"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your position size in units, lots, and dollar value, along with your risk amount and potential loss.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Position Sizing Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Position size is calculated based on your risk tolerance and the specific parameters of your trade.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Risk Amount Formula:
          </p>
          <div className="formula-block">
            <pre>Risk_Amount = Account_Balance × Risk_Percentage</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Position Size Formula:
          </p>
          <div className="formula-block">
            <pre>Position_Size = Risk_Amount / (Entry_Price - Stop_Loss_Price)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Risk_Amount", "Dollar amount you are willing to risk"],
              ["Account_Balance", "Total capital in your account"],
              ["Risk_Percentage", "Percentage of account to risk (decimal)"],
              ["Position_Size", "Number of units to trade"],
              ["Entry_Price", "Price at which you enter the trade"],
              ["Stop_Loss_Price", "Price at which you exit if wrong"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A common rule is to risk no more than 1-2% of your account balance on any single trade. This ensures that a string of losses will not significantly impact your overall capital.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Position Size
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your optimal position size. Understanding these variables helps you manage risk effectively.
          </p>

          {[
            {
              heading: "Risk Percentage",
              rows: [
                ["Conservative", "0.5% - 1% per trade"],
                ["Moderate", "1% - 2% per trade"],
                ["Aggressive", "2% - 5% per trade"],
              ],
              note: "Lower risk percentages preserve capital during drawdowns but may limit profit potential. Higher risk percentages increase both profit potential and drawdown risk.",
            },
            {
              heading: "Stop-Loss Distance",
              rows: [
                ["Tight stops", "Smaller distance, larger position size"],
                ["Wide stops", "Larger distance, smaller position size"],
                ["Volatility impact", "Higher volatility requires wider stops"],
              ],
              note: "Stop-loss distance directly affects position size. Tighter stops allow larger positions but may be triggered by normal market noise. Wider stops require smaller positions.",
            },
            {
              heading: "Account Balance",
              rows: [
                ["Small accounts", "Limited position sizes due to minimums"],
                ["Large accounts", "More flexibility in position sizing"],
                ["Growth impact", "Account growth allows larger absolute positions"],
              ],
              note: "Account size affects both position size and risk management options. Smaller accounts may be limited by minimum position sizes and may need to use percentage-based risk.",
            },
            {
              heading: "Market Volatility",
              rows: [
                ["Low volatility", "Tighter stops possible, larger positions"],
                ["High volatility", "Wider stops needed, smaller positions"],
                ["Adjustment", "Position size should adapt to conditions"],
              ],
              note: "Market conditions should influence your position sizing. Reduce position sizes in volatile markets to manage risk effectively and avoid being stopped out by noise.",
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
            Position Sizing Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different position sizing strategies offer varying risk-reward profiles. Choose an approach that matches your trading style and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Fixed percentage risk",
                body: "Risk a fixed percentage of your account on each trade (typically 1-2%). This ensures consistent risk regardless of market conditions and prevents overexposure during losing streaks.",
              },
              {
                n: "2",
                title: "Volatility-adjusted sizing",
                body: "Adjust position size based on market volatility. Reduce position sizes in volatile markets and increase them in calm markets. This maintains consistent risk across different conditions.",
              },
              {
                n: "3",
                title: "Kelly criterion",
                body: "Use a mathematical formula to determine optimal position size based on win rate and reward-to-risk ratio. This can maximize growth but requires accurate statistics and can be aggressive.",
              },
              {
                n: "4",
                title: "Fixed dollar risk",
                body: "Risk a fixed dollar amount on each trade rather than a percentage. This is simpler but does not scale with account growth and may become too conservative or aggressive over time.",
              },
              {
                n: "5",
                title: "Pyramid sizing",
                body: "Increase position size only after adding to winning positions. This allows you to risk more on proven winners while maintaining strict risk on initial entries.",
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
            Practical Tips for Position Sizing
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Always use stop-losses</strong> — define risk before entering trades</>],
              [<><strong>Risk 1-2% maximum</strong> — preserve capital during drawdowns</>],
              [<><strong>Calculate before trading</strong> — know your position size in advance</>],
              [<><strong>Adjust for volatility</strong> — reduce size in volatile markets</>],
              [<><strong>Track your results</strong> — monitor win rate and risk-reward ratio</>],
              [<><strong>Stay consistent</strong> — maintain discipline in position sizing</>],
              [<><strong>Review regularly</strong> — adjust strategy as account grows</>],
              [<><strong>Use the calculator</strong> — calculate before every trade</>],
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
                q: "What is position sizing?",
                a: "Position sizing is determining how many units or lots to trade based on your risk tolerance and account size. It ensures you never risk more than a predetermined percentage of your capital on any single trade.",
              },
              {
                q: "How much should I risk per trade?",
                a: "A common guideline is to risk 1-2% of your account balance per trade. Conservative traders may risk 0.5-1%, while more aggressive traders may risk up to 2-3%. Never risk more than you can afford to lose.",
              },
              {
                q: "How is position size calculated?",
                a: "Position size is calculated by dividing your risk amount (account balance × risk percentage) by the risk per unit (entry price minus stop-loss price). This gives you the number of units to trade.",
              },
              {
                q: "What is the difference between units and lots?",
                a: "A unit is a single share or contract. A lot is a standardized quantity of units. In forex, a standard lot is 100,000 units. In stocks, a lot typically refers to 100 shares (a round lot).",
              },
              {
                q: "Should position size change with account balance?",
                a: "Yes, position size should scale with your account balance. As your account grows, you can take larger positions while maintaining the same risk percentage. Conversely, reduce position size during drawdowns.",
              },
              {
                q: "How does volatility affect position sizing?",
                a: "Higher volatility requires wider stop-losses, which means smaller position sizes to maintain the same risk amount. Adjust your position size based on current market conditions to manage risk effectively.",
              },
              {
                q: "What is the Kelly criterion?",
                a: "The Kelly criterion is a formula that calculates optimal position size based on your win rate and average reward-to-risk ratio. It can maximize growth but can be aggressive and requires accurate statistics.",
              },
              {
                q: "Can I use position sizing for any market?",
                a: "Yes, position sizing principles apply to all markets including stocks, forex, futures, and options. The specific calculations may vary by market, but the risk management principles remain the same.",
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
            The Position Size Calculator helps you manage risk by determining appropriate position sizes for your trades. Proper position sizing is essential for long-term trading success and capital preservation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that position sizing is not about predicting market direction—it is about controlling what you can lose. Even with a great strategy, poor position sizing can lead to ruin. Always calculate your position size before entering any trade.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator before every trade to ensure you are taking appropriate risk. Consistent application of proper position sizing, combined with a winning strategy, can lead to sustainable trading success over the long term.
          </p>
          <div className="pull-quote mt-8">
            &quot;It is not whether you are right or wrong that is important, but how much money you make when you are right and how much you lose when you are wrong.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
