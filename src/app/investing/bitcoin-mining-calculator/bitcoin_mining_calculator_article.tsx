import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BitcoinMiningArticle() {
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
          <span className="meta-tag">Crypto · Mining Profitability</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Bitcoin Mining Calculator: Estimate BTC Profits
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for Bitcoin miners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Bitcoin mining has evolved from a hobbyist activity to a competitive industry. Whether you&apos;re considering mining as an investment or already running operations, understanding profitability is crucial. The Bitcoin Mining Calculator above helps you estimate potential profits based on your hardware, electricity costs, and current market conditions.
          </p>
          <p className="mb-5">
            Mining profitability depends on multiple factors: your hash rate, power consumption, electricity costs, mining difficulty, and Bitcoin price. Small changes in any of these variables can significantly impact your bottom line.
          </p>
          <p className="mb-5">
            The calculator provides real-time estimates based on current network difficulty and Bitcoin price, helping you make informed decisions about your mining operations.
          </p>
          <p>
            Use the Bitcoin Mining Calculator to evaluate different scenarios and determine whether mining is profitable for your specific situation.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Bitcoin Mining Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator estimates your mining revenue by calculating your share of the total network hash rate, then subtracting your electricity costs to determine profitability. It uses current network difficulty and Bitcoin price to provide accurate estimates.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Hash rate (TH/s)", "Your mining hardware's processing power"],
              ["Power consumption (W)", "Electricity used by your mining equipment"],
              ["Electricity cost ($/kWh)", "Your local electricity rate"],
              ["Mining pool fee (%)", "Fee charged by your mining pool"],
              ["Hardware cost", "Initial investment in mining equipment"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then estimates your daily, weekly, monthly, and yearly profits based on these inputs and current market conditions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Mining Profitability Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Mining revenue is calculated based on your share of the total network hash rate and the current block reward.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Daily Revenue Formula:
          </p>
          <div className="formula-block">
            <pre>Daily_Revenue = (Your_Hash_Rate / Network_Hash_Rate) × Daily_Block_Reward × BTC_Price</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Daily Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Daily_Profit = Daily_Revenue - (Power_Consumption × 24 × Electricity_Cost) - Pool_Fees</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Your_Hash_Rate", "Your mining hardware's hash rate in TH/s"],
              ["Network_Hash_Rate", "Total Bitcoin network hash rate"],
              ["Daily_Block_Reward", "Total BTC mined per day (6.25 BTC per block × 144 blocks)"],
              ["BTC_Price", "Current Bitcoin price in USD"],
              ["Power_Consumption", "Your hardware's power usage in watts"],
              ["Pool_Fees", "Mining pool fee percentage"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Mining difficulty adjusts every 2016 blocks (approximately every 2 weeks) to maintain a 10-minute block time. As more miners join the network, your share of rewards decreases unless you increase your hash rate.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Factors Affecting Mining Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors determine whether Bitcoin mining is profitable. Understanding these variables is essential for making informed decisions.
          </p>

          {[
            {
              heading: "Hash Rate",
              rows: [
                ["Definition", "Processing power of your mining hardware"],
                ["Impact", "Higher hash rate = more BTC rewards"],
                ["Trade-off", "Higher hash rate usually means higher power consumption"],
              ],
              note: "Your hash rate determines your share of network rewards. Modern ASIC miners range from 10 TH/s to over 100 TH/s.",
            },
            {
              heading: "Electricity Cost",
              rows: [
                ["Typical range", "$0.05 - $0.15 per kWh in most regions"],
                ["Break-even", "Mining is unprofitable above ~$0.12/kWh for most hardware"],
                ["Industrial rates", "Large operations may negotiate rates below $0.05/kWh"],
              ],
              note: "Electricity is often the largest ongoing cost for miners. Access to cheap electricity is critical for profitability.",
            },
            {
              heading: "Mining Difficulty",
              rows: [
                ["Adjustment", "Every 2016 blocks (~2 weeks)"],
                ["Trend", "Generally increases over time"],
                ["Impact", "Higher difficulty = lower rewards per hash rate"],
              ],
              note: "As more miners join the network, difficulty increases, reducing your share of rewards unless you scale up your operations.",
            },
            {
              heading: "Bitcoin Price",
              rows: [
                ["Volatility", "Highly volatile asset"],
                ["Impact", "Higher BTC price = higher USD revenue"],
                ["Risk", "Price drops can significantly impact profitability"],
              ],
              note: "Bitcoin price is the most significant variable affecting mining profitability. A 20% price drop can turn a profitable operation into an unprofitable one.",
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

        {/* ── HARDWARE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Mining Hardware Considerations
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Choosing the right mining hardware is critical for profitability. ASIC miners are the standard for Bitcoin mining, but not all ASICs are created equal.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Hash rate efficiency",
                body: "Look for hash rate per watt (TH/W). More efficient miners generate more BTC per unit of electricity, directly impacting profitability.",
              },
              {
                n: "2",
                title: "Initial cost vs. ROI",
                body: "More expensive miners often have better efficiency. Calculate payback period based on expected profits to determine if the premium is worth it.",
              },
              {
                n: "3",
                title: "Noise and heat",
                body: "ASIC miners are loud and generate significant heat. Consider cooling requirements and noise restrictions if mining at home.",
              },
              {
                n: "4",
                title: "Reliability and warranty",
                body: "Reputable brands with good warranties are worth the premium. Mining hardware runs 24/7, so reliability is crucial.",
              },
              {
                n: "5",
                title: "Resale value",
                body: "Mining hardware depreciates quickly. Consider potential resale value when calculating total cost of ownership.",
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
            Practical Tips for Bitcoin Miners
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator regularly</strong> — market conditions change frequently</>],
              [<><strong>Join a mining pool</strong> — solo mining is rarely profitable for small operators</>],
              [<><strong>Monitor electricity costs</strong> — even small increases can impact profitability</>],
              [<><strong>Consider mining farms</strong> — hosting services may offer better electricity rates</>],
              [<><strong>Diversify risk</strong> — don't invest more than you can afford to lose</>],
              [<><strong>Stay informed</strong> — follow Bitcoin news and network difficulty trends</>],
              [<><strong>Plan for halving events</strong> — block rewards halve every 4 years</>],
              [<><strong>Calculate ROI carefully</strong> — include hardware costs in your projections</>],
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
                q: "Is Bitcoin mining still profitable?",
                a: "Profitability depends on your electricity costs, hardware efficiency, and Bitcoin price. With cheap electricity and efficient hardware, mining can still be profitable. However, it's increasingly competitive and requires significant upfront investment.",
              },
              {
                q: "How much can I make mining Bitcoin?",
                a: "Earnings vary widely based on your setup. A single modern ASIC miner might earn $2-5 per day before electricity costs. After electricity, profit might be $0.50-2 per day. Large operations with many miners can earn significantly more.",
              },
              {
                q: "What is the best Bitcoin mining hardware?",
                a: "The best hardware balances hash rate, power efficiency, and cost. Popular options include Antminer S19 series, Whatsminer M30 series, and newer models from various manufacturers. Always calculate ROI before purchasing.",
              },
              {
                q: "Should I mine Bitcoin or buy it?",
                a: "Mining is only profitable if your electricity costs are low and you have efficient hardware. For most people, buying Bitcoin directly is simpler and often more profitable, especially when considering hardware costs and depreciation.",
              },
              {
                q: "What happens during Bitcoin halving?",
                a: "Every 4 years, the block reward halves (from 6.25 BTC to 3.125 BTC in 2024). This reduces mining revenue by 50%, making less efficient miners unprofitable. Miners must plan for halving events when calculating long-term profitability.",
              },
              {
                q: "Can I join a mining pool?",
                a: "Yes, joining a mining pool is recommended for most miners. Pools combine hash rate to find blocks more frequently, then distribute rewards proportionally. Pool fees typically range from 1-3% of earnings.",
              },
              {
                q: "How long does it take to mine 1 Bitcoin?",
                a: "With current difficulty, a single miner with 100 TH/s would take approximately 1,400 years to mine 1 BTC solo. This is why mining pools are essential — they allow miners to earn small fractions of BTC regularly rather than waiting years for a full block.",
              },
              {
                q: "What is mining difficulty?",
                a: "Mining difficulty measures how hard it is to find a new block. It adjusts every 2016 blocks to maintain a 10-minute block time. As more miners join, difficulty increases, reducing individual miner rewards.",
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
            Bitcoin mining can be profitable, but it requires careful planning, significant investment, and ongoing management. The Bitcoin Mining Calculator helps you estimate potential returns, but actual results may vary based on market conditions and operational factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Success in mining depends on access to cheap electricity, efficient hardware, and the ability to adapt to changing market conditions. Regularly recalculate profitability as Bitcoin price, network difficulty, and electricity costs change.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that mining is a competitive industry with significant risks. Only invest what you can afford to lose, and consider diversifying your cryptocurrency investment strategy beyond mining.
          </p>
          <div className="pull-quote mt-8">
            &quot;Mining is not a get-rich-quick scheme. It's a competitive business requiring careful planning and ongoing management.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
