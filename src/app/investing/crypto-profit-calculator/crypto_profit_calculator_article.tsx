import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CryptoProfitArticle() {
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
          <span className="meta-tag">Crypto · Trading Profitability</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Crypto Profit Calculator: Track Your Trading Gains
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for cryptocurrency traders
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Cryptocurrency trading can be highly profitable, but tracking your gains and losses accurately is essential for tax purposes and investment analysis. The Crypto Profit Calculator helps you calculate your trading profits, accounting for buy and sell prices, trading fees, and transaction costs.
          </p>
          <p className="mb-5">
            Whether you&apos;re a day trader or a long-term investor, understanding your actual returns after fees is crucial. Small trading fees can significantly impact your overall profitability, especially with frequent trading.
          </p>
          <p className="mb-5">
            The calculator provides a clear breakdown of your profit or loss, percentage return, and net profit after all fees, helping you make informed trading decisions.
          </p>
          <p>
            Use the Crypto Profit Calculator to evaluate your trades and optimize your trading strategy for maximum returns.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Crypto Profit Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates your profit by subtracting your total investment (including fees) from your total revenue (after sell fees). It provides both absolute profit and percentage return to help you evaluate your trading performance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Buy price", "Price at which you purchased the cryptocurrency"],
              ["Sell price", "Price at which you sold the cryptocurrency"],
              ["Investment amount", "Total amount invested in the trade"],
              ["Buy fee (%)", "Trading fee when buying"],
              ["Sell fee (%)", "Trading fee when selling"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your gross profit, net profit after fees, and percentage return on investment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Crypto Profit Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Calculating crypto profit requires accounting for both buy and sell fees to determine your actual returns.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Gross Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Gross_Profit = (Sell_Price - Buy_Price) × Investment_Amount / Buy_Price</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Net Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Net_Profit = Gross_Profit - Buy_Fee - Sell_Fee</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Percentage Return Formula:
          </p>
          <div className="formula-block">
            <pre>Return_Percentage = (Net_Profit / Investment_Amount) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Buy_Price", "Price at which you purchased the crypto"],
              ["Sell_Price", "Price at which you sold the crypto"],
              ["Investment_Amount", "Total amount invested"],
              ["Buy_Fee", "Trading fee when buying"],
              ["Sell_Fee", "Trading fee when selling"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Trading fees can significantly impact your profitability, especially for frequent traders. Always factor in both buy and sell fees when calculating your returns.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Crypto Trading Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors determine your actual trading profits. Understanding these variables helps you make better trading decisions.
          </p>

          {[
            {
              heading: "Trading Fees",
              rows: [
                ["Typical range", "0.1% - 0.5% per trade on centralized exchanges"],
                ["Impact", "Reduces profit on both buy and sell transactions"],
                ["Strategy", "Consider fee structures when choosing exchanges"],
              ],
              note: "Trading fees can eat into your profits significantly, especially for high-frequency trading strategies.",
            },
            {
              heading: "Price Volatility",
              rows: [
                ["Crypto characteristic", "Highly volatile markets"],
                ["Opportunity", "Large potential gains in short periods"],
                ["Risk", "Significant losses possible quickly"],
              ],
              note: "Crypto prices can move dramatically in hours. This volatility creates opportunities but also increases risk.",
            },
            {
              heading: "Market Timing",
              rows: [
                ["Buy timing", "Lower prices increase potential profit"],
                ["Sell timing", "Higher prices maximize returns"],
                ["Challenge", "Predicting price movements is difficult"],
              ],
              note: "Perfect market timing is nearly impossible. Focus on consistent strategies rather than trying to time the market perfectly.",
            },
            {
              heading: "Tax Implications",
              rows: [
                ["Capital gains", "Profits are taxable in most jurisdictions"],
                ["Short-term vs long-term", "Different tax rates may apply"],
                ["Reporting", "Keep detailed records of all trades"],
              ],
              note: "Crypto tax laws vary by country. Consult tax professionals to understand your obligations and optimize your tax strategy.",
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

        {/* ── STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Trading Strategies for Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different trading strategies offer varying risk-reward profiles. Choose a strategy that matches your risk tolerance and investment goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Day trading",
                body: "Frequent buying and selling within the same day to capitalize on short-term price movements. Requires constant monitoring and quick decision-making.",
              },
              {
                n: "2",
                title: "Swing trading",
                body: "Holding positions for days or weeks to profit from medium-term price trends. Less intensive than day trading but still requires active management.",
              },
              {
                n: "3",
                title: "HODLing",
                body: "Long-term strategy of holding cryptocurrencies regardless of short-term volatility. Based on belief in long-term value appreciation.",
              },
              {
                n: "4",
                title: "Dollar-cost averaging",
                body: "Investing fixed amounts at regular intervals regardless of price. Reduces the impact of volatility and removes timing decisions.",
              },
              {
                n: "5",
                title: "Arbitrage",
                body: "Profiting from price differences between exchanges. Requires quick execution and accounts for transfer times and fees.",
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
            Practical Tips for Crypto Traders
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Track all trades</strong> — maintain detailed records for tax purposes</>],
              [<><strong>Consider fees</strong> — factor in trading fees when calculating profits</>],
              [<><strong>Use stop-loss orders</strong> — limit potential losses on trades</>],
              [<><strong>Diversify holdings</strong> — don't put all your capital in one cryptocurrency</>],
              [<><strong>Stay informed</strong> — follow crypto news and market trends</>],
              [<><strong>Manage risk</strong> — only invest what you can afford to lose</>],
              [<><strong>Use the calculator</strong> — evaluate potential returns before trading</>],
              [<><strong>Learn from mistakes</strong> — review losing trades to improve strategy</>],
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
                q: "How do I calculate crypto profit?",
                a: "Crypto profit is calculated by subtracting your total investment (including buy fees) from your total revenue after selling (minus sell fees). The formula is: Net Profit = (Sell Price - Buy Price) × Amount - Buy Fee - Sell Fee.",
              },
              {
                q: "What are typical crypto trading fees?",
                a: "Trading fees vary by exchange but typically range from 0.1% to 0.5% per trade. Some exchanges offer lower fees for high-volume traders or for using their native tokens. Decentralized exchanges may have different fee structures including gas fees.",
              },
              {
                q: "How are crypto profits taxed?",
                a: "Crypto profits are generally taxed as capital gains in most jurisdictions. Short-term gains (held less than a year) are typically taxed at higher rates than long-term gains. Tax laws vary by country, so consult a tax professional for specific guidance.",
              },
              {
                q: "Should I day trade crypto?",
                a: "Day trading crypto can be profitable but requires significant time, skill, and risk tolerance. Most beginners are better off with longer-term strategies like HODLing or dollar-cost averaging. Only day trade with money you can afford to lose.",
              },
              {
                q: "What is dollar-cost averaging?",
                a: "Dollar-cost averaging (DCA) involves investing a fixed amount at regular intervals regardless of price. This strategy reduces the impact of volatility and removes the need to time the market perfectly.",
              },
              {
                q: "How do I minimize trading fees?",
                a: "Choose exchanges with competitive fee structures, use limit orders instead of market orders when possible, consider using exchange tokens for fee discounts, and consolidate trades to reduce the number of transactions.",
              },
              {
                q: "What is a good return on crypto investment?",
                a: "Good returns depend on your risk tolerance and investment timeline. While some traders aim for 50%+ annual returns, more conservative investors might be satisfied with 20-30%. Always compare returns to appropriate benchmarks and account for risk.",
              },
              {
                q: "Should I reinvest crypto profits?",
                a: "Reinvesting profits can compound returns but also increases risk. Consider taking some profits to secure gains while reinvesting the remainder. Your decision should depend on your financial goals, risk tolerance, and market conditions.",
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
            The Crypto Profit Calculator helps you accurately track your trading performance and make informed decisions. Understanding your actual returns after fees is essential for evaluating your trading strategy and meeting your tax obligations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that cryptocurrency trading involves significant risk. Prices are highly volatile, and losses can occur quickly. Only trade with money you can afford to lose, and consider diversifying your investment portfolio beyond cryptocurrency.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your performance, identify profitable strategies, and optimize your trading approach. Consistent evaluation and adjustment are key to long-term trading success.
          </p>
          <div className="pull-quote mt-8">
            &quot;Successful trading is not about predicting the future, but about managing risk and making informed decisions based on available information.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
