import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RiskRewardCalculatorArticle() {
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
          <span className="meta-tag">Investing · Risk Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Risk Reward Calculator: Analyze Your Trading Risk
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to risk-reward analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Risk-reward analysis is a fundamental concept in trading and investing that helps you evaluate whether a trade is worth taking. The Risk Reward Calculator helps you calculate the potential risk and reward of a trade, allowing you to make informed decisions based on your risk tolerance and profit targets.
          </p>
          <p className="mb-5">
            Understanding the risk-reward ratio is essential for successful trading. This calculator shows you the relationship between your potential loss (risk) and potential gain (reward), helping you identify trades with favorable odds and avoid those with poor risk-reward profiles.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your risk-reward ratio, position size based on risk percentage, and the win rate required to break even, helping you manage your trading risk effectively.
          </p>
          <p>
            Use the Risk Reward Calculator to analyze your trades before entering and ensure you are taking only favorable risk-reward opportunities.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Risk Reward Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates your risk-reward ratio by dividing your potential profit by your potential loss. It also determines the required win rate to break even based on your risk-reward ratio and helps you size your positions based on your risk tolerance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Entry price", "Price at which you enter the trade"],
              ["Target price", "Price at which you take profit"],
              ["Stop-loss price", "Price at which you exit if wrong"],
              ["Account balance", "Total capital in your trading account"],
              ["Risk percentage (%)", "Percentage of account to risk"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your risk-reward ratio, potential profit and loss, position size, and required win rate.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Risk Reward Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Risk-reward ratio is calculated by comparing potential profit to potential loss.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Risk-Reward Ratio Formula:
          </p>
          <div className="formula-block">
            <pre>Risk_Reward_Ratio = (Target_Price - Entry_Price) / (Entry_Price - Stop_Loss_Price)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Required Win Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Required_Win_Rate = 1 / (1 + Risk_Reward_Ratio)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Risk_Reward_Ratio", "Ratio of potential profit to potential loss"],
              ["Target_Price", "Price at which you take profit"],
              ["Entry_Price", "Price at which you enter the trade"],
              ["Stop_Loss_Price", "Price at which you exit if wrong"],
              ["Required_Win_Rate", "Win rate needed to break even"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A 1:2 risk-reward ratio means you risk $1 to make $2. With this ratio, you need a 33% win rate to break even. Higher risk-reward ratios require lower win rates to be profitable.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Risk-Reward Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your risk-reward analysis. Understanding these variables helps you make better trading decisions.
          </p>

          {[
            {
              heading: "Risk-Reward Ratio",
              rows: [
                ["Conservative", "1:1 to 1:2 (lower risk, lower reward)"],
                ["Moderate", "1:2 to 1:3 (balanced approach)"],
                ["Aggressive", "1:3+ (higher risk, higher reward)"],
              ],
              note: "Higher risk-reward ratios allow for lower win rates but may be harder to achieve. Lower ratios require higher win rates but are easier to achieve. Choose based on your trading style.",
            },
            {
              heading: "Stop-Loss Placement",
              rows: [
                ["Technical levels", "Based on support/resistance"],
                ["Volatility-based", "Based on ATR or standard deviation"],
                ["Fixed percentage", "Fixed percentage from entry"],
              ],
              note: "Stop-loss placement affects both your risk and the likelihood of being stopped out. Technical stops are often more effective than arbitrary percentage stops.",
            },
            {
              heading: "Target Placement",
              rows: [
                ["Technical levels", "Based on resistance/support"],
                ["Risk-multiple", "Multiple of risk (e.g., 2R, 3R)"],
                ["Trailing targets", "Adjust as price moves favorably"],
              ],
              note: "Target placement should be based on logical price levels, not arbitrary goals. Using risk-multiple targets simplifies trade management and ensures consistent risk-reward ratios.",
            },
            {
              heading: "Win Rate",
              rows: [
                ["High win rate", "Can tolerate lower risk-reward ratios"],
                ["Low win rate", "Requires higher risk-reward ratios"],
                ["Breakeven calculation", "Win rate = 1 / (1 + R/R ratio)"],
              ],
              note: "Your historical win rate should inform your acceptable risk-reward ratios. If you have a 40% win rate, you need at least a 1:1.5 risk-reward ratio to be profitable.",
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
            Risk-Reward Trading Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies use risk-reward analysis in various ways. Choose an approach that matches your trading style and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Fixed risk-reward ratio",
                body: "Always use the same risk-reward ratio (e.g., 1:2) for all trades. This simplifies trade selection and ensures consistent risk management. Only take trades that meet your minimum ratio requirement.",
              },
              {
                n: "2",
                title: "Adaptive risk-reward",
                body: "Adjust your risk-reward ratio based on market conditions and trade setup quality. Use higher ratios for high-probability setups and lower ratios for lower-probability trades.",
              },
              {
                n: "3",
                title: "Pyramid scaling",
                body: "Add to winning positions while maintaining favorable risk-reward on new entries. This allows you to capitalize on strong trends while managing risk effectively.",
              },
              {
                n: "4",
                title: "Trailing stop strategy",
                body: "Use trailing stops to lock in profits while allowing room for the trade to develop. This can improve realized risk-reward ratios on winning trades.",
              },
              {
                n: "5",
                title: "Portfolio risk-reward",
                body: "Consider the risk-reward of your entire portfolio, not just individual trades. Diversify across uncorrelated trades to improve overall portfolio risk-reward profile.",
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
            Practical Tips for Risk-Reward Analysis
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              "<strong>Set minimum ratio</strong> - only take trades meeting your standard",
              "<strong>Use logical levels</strong> - base stops and targets on technical analysis",
              "<strong>Know your win rate</strong> - understand your historical performance",
              "<strong>Calculate before trading</strong> - know your risk-reward in advance",
              "<strong>Be realistic</strong> - use achievable targets, not optimistic ones",
              "<strong>Track results</strong> - monitor actual vs. expected risk-reward",
              "<strong>Adjust for volatility</strong> - widen stops in volatile markets",
              "<strong>Use the calculator</strong> - analyze every trade before entering",
            ].map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
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
                q: "What is risk-reward ratio?",
                a: "Risk-reward ratio compares the potential profit of a trade to its potential loss. A 1:2 ratio means you risk $1 to make $2. Higher ratios indicate more potential reward relative to risk.",
              },
              {
                q: "How is risk-reward calculated?",
                a: "Risk-reward is calculated by dividing the potential profit (target minus entry) by the potential loss (entry minus stop-loss). For example, if you risk $10 to make $20, your risk-reward ratio is 1:2.",
              },
              {
                q: "What is a good risk-reward ratio?",
                a: "A good risk-reward ratio depends on your trading style and win rate. Many traders aim for 1:2 or better. If you have a high win rate (60%+), you can use lower ratios. With lower win rates, you need higher ratios.",
              },
              {
                q: "How does win rate affect risk-reward?",
                a: "Higher win rates allow you to be profitable with lower risk-reward ratios. Lower win rates require higher risk-reward ratios to be profitable. The breakeven win rate is 1 / (1 + risk-reward ratio).",
              },
              {
                q: "Should I always use the same risk-reward ratio?",
                a: "Not necessarily. While consistency is good, you may adjust your ratio based on trade quality and market conditions. However, always have a minimum acceptable ratio and never take trades below it.",
              },
              {
                q: "How do I set my stop-loss and target?",
                a: "Set stop-losses at logical technical levels like support/resistance, not arbitrary percentages. Set targets at logical resistance levels or based on risk-multiples (e.g., 2R, 3R) of your stop distance.",
              },
              {
                q: "What is the Kelly criterion?",
                a: "The Kelly criterion is a formula that calculates optimal position size based on your win rate and risk-reward ratio. It can maximize growth but can be aggressive. Many traders use a fraction of Kelly for safety.",
              },
              {
                q: "Can I be profitable with a low risk-reward ratio?",
                a: "Yes, if your win rate is high enough. For example, with a 1:1 ratio, you need a 50% win rate to break even. With a 60% win rate, a 1:1 ratio is profitable. Focus on overall expectancy, not just ratio.",
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
            The Risk Reward Calculator helps you analyze your trades before entering, ensuring you only take favorable risk-reward opportunities. Understanding risk-reward ratios is essential for long-term trading success and capital preservation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that risk-reward analysis is not about predicting market direction-it is about ensuring that when you are right, you make enough to cover your losses when you are wrong. Consistent application of favorable risk-reward ratios can lead to profitability even with moderate win rates.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator before every trade to calculate your risk-reward ratio, position size, and required win rate. Combined with a solid trading strategy, proper risk-reward analysis can significantly improve your trading results.
          </p>
          <div className="pull-quote mt-8">
            &quot;The goal is not to predict the future, but to identify opportunities with favorable odds and manage risk accordingly.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
