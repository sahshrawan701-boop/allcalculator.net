import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TradingFeeCalculatorArticle() {
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
          <span className="meta-tag">Investing · Trading Costs</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Trading Fee Calculator: Calculate Your Trading Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to trading fee analysis
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Trading fees can significantly impact your investment returns over time. The Trading Fee Calculator helps you calculate the total cost of your trades, including commissions, spreads, and other fees, allowing you to understand the true cost of your trading activities.
          </p>
          <p className="mb-5">
            Understanding trading costs is essential for evaluating your net returns and choosing the right broker or trading platform. This calculator shows you how fees add up over time and their impact on your investment performance.
          </p>
          <p className="mb-5">
            The calculator provides estimates for total trading fees, fee percentage, and the impact on your returns, helping you make informed decisions about your trading strategy and broker selection.
          </p>
          <p>
            Use the Trading Fee Calculator to understand your trading costs and optimize your investment strategy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Trading Fee Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator calculates total trading costs based on your trade size, commission structure, spread, and trading frequency. It shows you the cumulative impact of fees on your investment returns over time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Trade value", "Total value of each trade"],
              ["Commission", "Commission per trade or per share"],
              ["Spread (%)", "Bid-ask spread percentage"],
              ["Trading frequency", "Number of trades per period"],
              ["Account balance", "Total capital in your account"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays total fees, fee percentage, and the impact on your returns.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Trading Fee Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Trading fees are calculated by summing all costs associated with your trades.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Fee Formula:
          </p>
          <div className="formula-block">
            <pre>Total_Fee = Commission + (Trade_Value × Spread_Percentage) + Other_Fees</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Fee Percentage Formula:
          </p>
          <div className="formula-block">
            <pre>Fee_Percentage = (Total_Fee / Trade_Value) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Total_Fee", "Total cost of the trade"],
              ["Commission", "Broker commission per trade"],
              ["Trade_Value", "Total value of the trade"],
              ["Spread_Percentage", "Bid-ask spread as percentage"],
              ["Other_Fees", "Additional fees (regulatory, platform, etc.)"],
              ["Fee_Percentage", "Total fee as percentage of trade value"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Trading fees can significantly reduce your net returns, especially for high-frequency traders. Even small fees compound over time and can have a substantial impact on long-term investment performance.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Trading Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your trading costs. Understanding these variables helps you minimize fees and maximize returns.
          </p>

          {[
            {
              heading: "Commission Structure",
              rows: [
                ["Per trade", "Fixed fee per trade regardless of size"],
                ["Per share", "Fee based on number of shares traded"],
                ["Percentage", "Fee based on trade value"],
                ["Zero commission", "No direct commission but spreads apply"],
              ],
              note: "Different commission structures suit different trading styles. High-volume traders may prefer per-share pricing, while occasional traders may benefit from per-trade commissions.",
            },
            {
              heading: "Spread",
              rows: [
                ["Fixed spread", "Constant spread regardless of market"],
                ["Variable spread", "Spread changes with market conditions"],
                ["Tight spreads", "Lower cost for active traders"],
                ["Wide spreads", "Higher cost for all traders"],
              ],
              note: "Spreads are a hidden cost that can significantly impact your returns, especially for frequent traders. Tight spreads are particularly important for high-frequency trading strategies.",
            },
            {
              heading: "Trading Frequency",
              rows: [
                ["Low frequency", "Fees have minimal impact"],
                ["Medium frequency", "Fees become noticeable"],
                ["High frequency", "Fees significantly impact returns"],
                ["Day trading", "Fees are a major consideration"],
              ],
              note: "Trading frequency dramatically affects the cumulative impact of fees. High-frequency traders must pay special attention to fee structures to ensure profitability.",
            },
            {
              heading: "Trade Size",
              rows: [
                ["Small trades", "Higher percentage cost"],
                ["Medium trades", "Moderate percentage cost"],
                ["Large trades", "Lower percentage cost"],
                ["Institutional", "Negotiated rates may apply"],
              ],
              note: "Trade size affects the percentage cost of fees. Smaller trades have higher percentage costs due to fixed commissions, while larger trades benefit from economies of scale.",
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
            Trading Fee Reduction Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help you minimize trading costs. Choose approaches that align with your trading style and goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Choose the right broker",
                body: "Select a broker with a fee structure that matches your trading style. High-frequency traders should prioritize low per-share costs, while occasional traders may prefer zero-commission platforms.",
              },
              {
                n: "2",
                title: "Reduce trading frequency",
                body: "Trade less frequently to reduce cumulative fees. Focus on high-quality setups rather than overtrading. This not only reduces costs but often improves overall performance.",
              },
              {
                n: "3",
                title: "Consolidate trades",
                body: "Combine smaller trades into larger ones when possible. Larger trades benefit from lower percentage costs due to fixed commission structures and economies of scale.",
              },
              {
                n: "4",
                title: "Monitor all fees",
                body: "Be aware of all fees including commissions, spreads, regulatory fees, and platform fees. Hidden costs can add up and significantly impact your net returns.",
              },
              {
                n: "5",
                title: "Negotiate rates",
                body: "If you are an active trader or have a large account, you may be able to negotiate lower commission rates with your broker. Contact your broker to discuss rate reductions.",
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
            Practical Tips for Managing Trading Fees
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Compare brokers</strong> — shop around for best rates</>],
              [<><strong>Understand fee structures</strong> — know what you pay</>],
              [<><strong>Trade less</strong> — reduce frequency to cut costs</>],
              [<><strong>Use limit orders</strong> — avoid market order slippage</>],
              [<><strong>Watch spreads</strong> — trade during liquid hours</>],
              [<><strong>Calculate net returns</strong> — account for all fees</>],
              [<><strong>Review periodically</strong> — reassess broker choice</>],
              [<><strong>Use the calculator</strong> — model different scenarios</>],
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
                q: "What are trading fees?",
                a: "Trading fees are costs associated with buying and selling securities. They include commissions, spreads, regulatory fees, and platform fees. These costs reduce your net investment returns.",
              },
              {
                q: "How do commissions work?",
                a: "Commissions are fees charged by brokers for executing trades. They can be charged per trade, per share, or as a percentage of trade value. Commission structures vary significantly between brokers.",
              },
              {
                q: "What is the spread?",
                a: "The spread is the difference between the bid and ask price of a security. It represents the cost of trading and is particularly important for active traders. Tighter spreads result in lower trading costs.",
              },
              {
                q: "Are zero-commission brokers really free?",
                a: "Zero-commission brokers do not charge direct commissions but still make money through spreads, payment for order flow, and other fees. You still pay costs, just not as explicit commissions.",
              },
              {
                q: "How do trading fees affect returns?",
                a: "Trading fees reduce your net returns by eating into your profits. The impact is cumulative and can be significant over time, especially for high-frequency traders. Always calculate net returns after fees.",
              },
              {
                q: "What is the best fee structure?",
                a: "The best fee structure depends on your trading style. High-frequency traders benefit from low per-share costs, while occasional traders may prefer zero-commission platforms. Choose based on your specific needs.",
              },
              {
                q: "Can I negotiate trading fees?",
                a: "Yes, active traders and those with large accounts can often negotiate lower commission rates with their brokers. Contact your broker to discuss rate reductions based on your trading volume.",
              },
              {
                q: "How can I reduce trading costs?",
                a: "Reduce trading frequency, choose a broker with a suitable fee structure, consolidate trades, use limit orders to control execution costs, and monitor all fees including hidden costs like spreads.",
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
            The Trading Fee Calculator helps you understand the true cost of your trading activities. Trading fees can significantly impact your investment returns, especially over time and for frequent traders.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that minimizing fees is important, but not at the expense of execution quality or service. Choose a broker that offers the right balance of cost, service, and execution quality for your trading needs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your trading costs, compare broker options, and optimize your trading strategy. Understanding and managing your trading costs is essential for maximizing your investment returns.
          </p>
          <div className="pull-quote mt-8">
            &quot;The stock market is a device for transferring money from the impatient to the patient. Trading fees transfer money from traders to brokers.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
