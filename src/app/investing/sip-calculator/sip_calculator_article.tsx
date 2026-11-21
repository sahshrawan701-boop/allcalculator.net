import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SIPCalculatorArticle() {
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
          <span className="meta-tag">Investing · Systematic Investment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            SIP Calculator: Plan Your Systematic Investment Plan
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to SIP investing
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A Systematic Investment Plan (SIP) is an investment strategy that allows you to invest a fixed amount regularly in mutual funds or other investment vehicles. The SIP Calculator helps you project the growth of your investments through regular contributions, showing the power of rupee-cost averaging and compound growth.
          </p>
          <p className="mb-5">
            Understanding SIP benefits is essential for disciplined investing and wealth building. This calculator projects your investment value, total contributions, and returns over time, helping you understand how consistent investing can build substantial wealth.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your future investment value, total contributions, and total returns, helping you plan your systematic investment strategy and achieve your financial goals.
          </p>
          <p>
            Use the SIP Calculator to plan your regular investments and understand the benefits of systematic investing.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the SIP Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your SIP investment growth using compound interest formulas that account for regular contributions. It considers your monthly investment amount, expected returns, and investment duration to estimate your future value.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Monthly investment", "Amount you invest each month"],
              ["Expected return (%)", "Anticipated annual return"],
              ["Time period", "Number of years to invest"],
              ["Step-up option", "Annual increase in investment amount"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future value, total contributions, and returns over your investment period.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The SIP Investment Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            SIP growth is calculated using compound interest formulas that account for regular monthly contributions.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula:
          </p>
          <div className="formula-block">
            <pre>FV = PMT × ((1 + r)^(n) - 1) / r × (1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of SIP investment"],
              ["PMT", "Monthly investment amount"],
              ["r", "Monthly return rate (annual rate / 12)"],
              ["n", "Total number of months"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            SIP investments benefit from rupee-cost averaging, which reduces the impact of market volatility by buying more units when prices are low and fewer units when prices are high.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting SIP Returns
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your SIP investment returns. Understanding these variables helps you optimize your investment strategy.
          </p>

          {[
            {
              heading: "Investment Amount",
              rows: [
                ["Minimum SIP", "As low as $100 per month"],
                ["Typical SIP", "$500 - $2,000 per month"],
                ["Higher amounts", "Accelerates wealth building"],
              ],
              note: "Higher monthly investments significantly accelerate wealth building due to compound growth. Start with what you can afford and increase as your income grows.",
            },
            {
              heading: "Investment Duration",
              rows: [
                ["Short-term", "1-3 years"],
                ["Medium-term", "3-7 years"],
                ["Long-term", "7+ years"],
              ],
              note: "Longer investment durations dramatically increase returns due to compound growth. SIPs are most effective when maintained for the long term.",
            },
            {
              heading: "Expected Returns",
              rows: [
                ["Debt funds", "6% - 8% annually"],
                ["Balanced funds", "8% - 12% annually"],
                ["Equity funds", "12% - 15% annually"],
              ],
              note: "Higher returns accelerate growth but come with increased risk. Choose funds that match your risk tolerance and investment horizon.",
            },
            {
              heading: "Step-up SIP",
              rows: [
                ["Definition", "Annual increase in investment amount"],
                ["Typical increase", "5% - 10% annually"],
                ["Benefit", "Accelerates wealth as income grows"],
              ],
              note: "Step-up SIPs allow you to increase your investment amount annually as your income grows, accelerating wealth building and keeping pace with inflation.",
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
            SIP Investment Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different SIP strategies offer various benefits. Choose an approach that aligns with your financial goals and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Fixed SIP",
                body: "Invest a fixed amount every month regardless of market conditions. This simple approach builds discipline and benefits from rupee-cost averaging over time.",
              },
              {
                n: "2",
                title: "Step-up SIP",
                body: "Increase your investment amount annually by a fixed percentage. This allows you to accelerate wealth building as your income grows and keeps pace with inflation.",
              },
              {
                n: "3",
                title: "Flexible SIP",
                body: "Vary your investment amount based on market conditions or your financial situation. Invest more when markets are down and less when markets are up.",
              },
              {
                n: "4",
                title: "Goal-based SIP",
                body: "Align your SIP with specific financial goals like retirement or education. Calculate the required monthly amount to achieve your target within your timeframe.",
              },
              {
                n: "5",
                title: "Top-up SIP",
                body: "Make additional investments whenever you have surplus funds. This allows you to accelerate wealth building when you have extra money available.",
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
            Practical Tips for SIP Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — maximize the benefit of compounding</>],
              [<><strong>Be consistent</strong> — maintain regular investments</>],
              [<><strong>Choose wisely</strong> — select funds matching your goals</>],
              [<><strong>Review periodically</strong> — monitor fund performance</>],
              [<><strong>Use step-up</strong> — increase investments as income grows</>],
              [<><strong>Stay invested</strong> — avoid stopping during downturns</>],
              [<><strong>Diversify</strong> — spread across different fund types</>],
              [<><strong>Use the calculator</strong> — model different scenarios regularly</>],
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
                q: "What is SIP?",
                a: "SIP stands for Systematic Investment Plan. It is an investment strategy where you invest a fixed amount regularly in mutual funds or other investment vehicles. It promotes disciplined investing and benefits from rupee-cost averaging.",
              },
              {
                q: "How does SIP work?",
                a: "SIP works by investing a fixed amount at regular intervals (usually monthly). This allows you to buy more units when prices are low and fewer units when prices are high, reducing the average cost per unit over time.",
              },
              {
                q: "What is the minimum SIP amount?",
                a: "The minimum SIP amount varies by fund and platform but can be as low as $100 per month. Check with your fund provider for specific minimum investment requirements.",
              },
              {
                q: "Can I pause or stop my SIP?",
                a: "Yes, most SIP platforms allow you to pause or stop your SIP at any time without penalties. However, maintaining consistency is key to achieving your long-term financial goals.",
              },
              {
                q: "What is step-up SIP?",
                a: "Step-up SIP allows you to increase your investment amount annually by a fixed percentage. This helps you accelerate wealth building as your income grows and keeps pace with inflation.",
              },
              {
                q: "What is rupee-cost averaging?",
                a: "Rupee-cost averaging is the benefit of buying more units when prices are low and fewer units when prices are high through regular investing. This reduces the average cost per unit over time.",
              },
              {
                q: "Should I invest in equity or debt funds via SIP?",
                a: "The choice depends on your risk tolerance and investment horizon. Equity funds offer higher potential returns but with higher volatility, suitable for long-term goals. Debt funds offer stable returns for short-term goals.",
              },
              {
                q: "How much should I invest via SIP?",
                a: "The amount depends on your financial goals, timeline, and income. Aim to invest at least 10-20% of your income. Use the calculator to determine the required amount to achieve your specific goals.",
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
            The SIP Calculator helps you understand how regular investments can build substantial wealth over time through the power of compound growth and rupee-cost averaging. Consistent investing is one of the most effective ways to achieve your financial goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that SIP investing requires discipline and patience. The benefits of compounding and rupee-cost averaging work best over long time horizons. Stay invested through market fluctuations and maintain your SIP regardless of short-term volatility.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your investment strategy as needed. A well-planned SIP strategy can help you achieve your financial goals and build long-term wealth.
          </p>
          <div className="pull-quote mt-8">
            &quot;The journey of a thousand miles begins with a single step. Your SIP is that first step toward financial freedom.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
