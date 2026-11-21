import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EthereumMiningCalculatorArticle() {
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
          <span className="meta-tag">Crypto · Ethereum Mining</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Ethereum Mining Calculator: Estimate Your Mining Profits
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for Ethereum miners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Ethereum mining has evolved significantly since the network&apos;s transition to proof-of-stake. While traditional GPU mining is no longer possible on the Ethereum mainnet, miners can still participate through staking or mining on Ethereum-compatible proof-of-work networks. The Ethereum Mining Calculator helps you estimate potential returns from staking or alternative mining options.
          </p>
          <p className="mb-5">
            Understanding your potential mining or staking returns is essential for making informed investment decisions in the Ethereum ecosystem. The calculator accounts for your hardware investment, electricity costs, and current market conditions to provide realistic profit estimates.
          </p>
          <p className="mb-5">
            The calculator provides estimates for daily, monthly, and yearly returns, helping you understand the cash flow potential and payback period for your mining or staking investment.
          </p>
          <p>
            Use the Ethereum Mining Calculator to evaluate different scenarios and determine whether Ethereum staking or alternative mining aligns with your investment goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Ethereum Mining Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator estimates your returns by applying current network rewards to your staked amount or mining hashrate, then subtracting electricity and other operating costs. For staking, it uses the current staking APR. For mining on alternative networks, it uses network-specific reward calculations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Staking amount or hashrate", "ETH to stake or mining power in MH/s"],
              ["Electricity cost", "Cost per kWh for mining operations"],
              ["Power consumption", "Hardware power usage in watts"],
              ["Hardware cost", "Initial investment in mining equipment"],
              ["Pool fee (%)", "Mining pool fee percentage"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your estimated daily, monthly, and yearly profits, along with your payback period and return on investment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Ethereum Staking Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Ethereum staking rewards are calculated based on the amount staked and the current network APR.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Daily Staking Reward Formula:
          </p>
          <div className="formula-block">
            <pre>Daily_Reward = (Staked_Amount × APR) / 365</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Net Profit Formula (for mining):
          </p>
          <div className="formula-block">
            <pre>Net_Profit = Daily_Reward - (Power_Consumption × Electricity_Cost / 1000 × 24)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Staked_Amount", "Total ETH staked"],
              ["APR", "Annual percentage rate for staking"],
              ["Power_Consumption", "Hardware power usage in watts"],
              ["Electricity_Cost", "Cost per kilowatt-hour"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Ethereum&apos;s transition to proof-of-stake in 2022 ended traditional mining on the mainnet. Miners can now stake ETH or mine on alternative proof-of-work networks like Ethereum Classic.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Ethereum Mining/Staking Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors determine your actual mining or staking returns. Understanding these variables helps you make better investment decisions.
          </p>

          {[
            {
              heading: "ETH Price",
              rows: [
                ["Volatility", "Highly volatile cryptocurrency"],
                ["Impact", "Directly affects revenue in fiat terms"],
                ["Strategy", "Consider holding vs. selling rewards"],
              ],
              note: "ETH price volatility can significantly impact your profitability in fiat terms. Consider your risk tolerance and whether you plan to hold or sell mining rewards.",
            },
            {
              heading: "Staking APR",
              rows: [
                ["Typical range", "3% - 6% annually for solo staking"],
                ["Pool staking", "Slightly lower due to pool fees"],
                ["Variation", "Changes based on total ETH staked"],
              ],
              note: "The staking APR decreases as more ETH is staked on the network. Current rates are typically lower than early staking periods.",
            },
            {
              heading: "Electricity Costs",
              rows: [
                ["Major expense", "Primary ongoing cost for mining"],
                ["Regional variation", "Costs vary significantly by location"],
                ["Impact", "Can determine profitability entirely"],
              ],
              note: "For GPU mining on alternative networks, electricity costs are critical. Low electricity rates are essential for profitable mining operations.",
            },
            {
              heading: "Hardware Efficiency",
              rows: [
                ["Hash rate per watt", "Key efficiency metric"],
                ["GPU selection", "Newer cards are more efficient"],
                ["Cooling costs", "Additional power consumption"],
              ],
              note: "Hardware efficiency directly impacts profitability. More efficient hardware generates more revenue per unit of electricity consumed.",
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
            Ethereum Mining/Staking Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies offer varying risk-reward profiles for Ethereum participants. Choose an approach that matches your technical expertise and investment goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Solo staking",
                body: "Run your own validator node with 32 ETH. Requires technical expertise but offers full control and maximum rewards. Best for experienced users with significant ETH holdings.",
              },
              {
                n: "2",
                title: "Pool staking",
                body: "Stake smaller amounts through staking pools. Lower technical barrier but shares rewards with the pool operator. Suitable for smaller investors who want to participate.",
              },
              {
                n: "3",
                title: "Exchange staking",
                body: "Stake through centralized exchanges. Easiest option but gives up control of your keys. Consider the trade-off between convenience and sovereignty.",
              },
              {
                n: "4",
                title: "Alternative PoW mining",
                body: "Mine Ethereum Classic or other PoW networks with GPUs. Less profitable than before but still possible. Requires low electricity costs to be viable.",
              },
              {
                n: "5",
                title: "Liquid staking",
                body: "Use liquid staking derivatives to maintain liquidity while staking. Provides staking rewards without locking up your ETH. Introduces smart contract risk.",
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
            Practical Tips for Ethereum Miners/Stakers
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Research thoroughly</strong> — understand the risks and requirements</>],
              [<><strong>Start small</strong> — test with smaller amounts before committing</>],
              [<><strong>Secure your keys</strong> — never share private keys or seed phrases</>],
              [<><strong>Monitor rewards</strong> — track your staking or mining performance</>],
              [<><strong>Diversify</strong> — do not put all your crypto in one basket</>],
              [<><strong>Stay informed</strong> — follow Ethereum network developments</>],
              [<><strong>Consider taxes</strong> — staking rewards are taxable income</>],
              [<><strong>Use the calculator</strong> — estimate returns before investing</>],
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
                q: "Can I still mine Ethereum?",
                a: "Traditional GPU mining on the Ethereum mainnet ended with the Merge in 2022. You can now stake ETH or mine on alternative proof-of-work networks like Ethereum Classic using your GPU hardware.",
              },
              {
                q: "How much can I make staking Ethereum?",
                a: "Current staking APR is typically 3-6% annually. With 32 ETH staked at 4% APR, you would earn approximately 1.28 ETH per year. Returns vary based on total ETH staked on the network.",
              },
              {
                q: "What is the minimum amount to stake Ethereum?",
                a: "Solo staking requires 32 ETH to run your own validator. Pool staking and exchange staking allow much smaller amounts, sometimes as little as 0.01 ETH depending on the platform.",
              },
              {
                q: "Is Ethereum staking safe?",
                a: "Staking carries risks including slashing penalties for validator misconduct, smart contract risks for pooled staking, and market risk from ETH price volatility. Only stake what you can afford to lock up.",
              },
              {
                q: "How long are staked ETH locked?",
                a: "Staked ETH cannot be withdrawn until Ethereum implements withdrawal functionality. Once enabled, there may be a queue for withdrawals. Consider the lock-up period before staking.",
              },
              {
                q: "Should I stake or sell my ETH?",
                a: "This depends on your investment goals and risk tolerance. Staking provides steady returns but locks up your ETH and exposes you to price risk. Selling provides liquidity but forfeits staking rewards.",
              },
              {
                q: "What happened to Ethereum miners after the Merge?",
                a: "Many Ethereum miners transitioned to staking, moved to alternative PoW networks, or sold their hardware. Some continue mining other cryptocurrencies that are still GPU-mineable.",
              },
              {
                q: "How do I choose a staking pool?",
                a: "Consider factors like fees, reputation, security track record, and user interface. Research multiple options and choose a reputable provider with transparent operations and reasonable fees.",
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
            The Ethereum Mining Calculator helps you estimate potential returns from staking or alternative mining options in the post-Merge Ethereum ecosystem. Understanding your potential returns is essential for making informed investment decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that cryptocurrency investments carry significant risk. ETH prices are highly volatile, and staking involves locking up your assets with limited withdrawal options. Only invest what you can afford to lose and consider diversifying your portfolio.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to monitor your staking or mining performance and adjust your strategy as market conditions change. Stay informed about Ethereum network developments that may affect staking rewards and profitability.
          </p>
          <div className="pull-quote mt-8">
            &quot;The transition to proof-of-stake represents a fundamental shift in Ethereum&apos;s consensus mechanism, offering new opportunities for participation through staking.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
