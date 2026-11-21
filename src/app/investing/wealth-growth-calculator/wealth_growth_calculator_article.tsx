import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function WealthGrowthCalculatorArticle() {
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
          <span className="meta-tag">Investing · Wealth Building</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Wealth Growth Calculator: Project Your Wealth Accumulation
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to wealth growth planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Wealth growth is the process of accumulating assets and increasing your net worth over time through saving, investing, and compound growth. The Wealth Growth Calculator helps you project your wealth accumulation based on your current savings, contributions, expected returns, and time horizon.
          </p>
          <p className="mb-5">
            Understanding wealth growth is essential for achieving your financial goals and building long-term financial security. This calculator shows you how your wealth can grow over time through the power of compound interest and consistent investing.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your future wealth, total contributions, and investment earnings, helping you understand the impact of different savings rates and investment returns on your financial future.
          </p>
          <p>
            Use the Wealth Growth Calculator to plan your wealth accumulation and achieve your financial goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Wealth Growth Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your wealth growth using compound interest formulas that account for your current savings, regular contributions, expected returns, and time horizon. It shows how your wealth can grow over time through consistent investing and compound growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current savings", "Amount you have already saved"],
              ["Monthly contribution", "Amount you save each month"],
              ["Annual contribution increase", "Expected annual raise in contributions"],
              ["Expected return (%)", "Anticipated annual investment return"],
              ["Time period", "Number of years to grow wealth"],
              ["Inflation rate (%)", "Expected annual inflation"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future wealth, total contributions, investment earnings, and inflation-adjusted value.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Wealth Growth Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Wealth growth is calculated using compound interest formulas that account for regular contributions and increasing savings rates.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula:
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r)^(t) + PMT × ((1 + r)^(t) - 1) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Real Value Formula (inflation-adjusted):
          </p>
          <div className="formula-block">
            <pre>Real_Value = FV / (1 + i)^(t)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of wealth"],
              ["PV", "Present value (current savings)"],
              ["PMT", "Annual contribution"],
              ["r", "Annual return rate (decimal)"],
              ["t", "Number of years"],
              ["i", "Inflation rate (decimal)"],
              ["Real_Value", "Inflation-adjusted future value"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Compound growth is the most powerful force in wealth building. The longer your time horizon and the higher your savings rate, the more dramatic the wealth accumulation becomes over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Wealth Growth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your wealth growth. Understanding these variables helps you optimize your wealth-building strategy.
          </p>

          {[
            {
              heading: "Savings Rate",
              rows: [
                ["Conservative", "5% - 10% of income"],
                ["Moderate", "10% - 20% of income"],
                ["Aggressive", "20% - 40% of income"],
                ["Extreme", "40%+ of income"],
              ],
              note: "Higher savings rates dramatically accelerate wealth building. Increasing your savings rate from 10% to 20% can more than double your wealth over the same time period.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Conservative", "4% - 6% annually"],
                ["Moderate", "6% - 8% annually"],
                ["Aggressive", "8% - 10% annually"],
                ["Very aggressive", "10%+ annually"],
              ],
              note: "Higher returns accelerate wealth growth but come with increased risk. Choose an asset allocation that matches your risk tolerance and time horizon.",
            },
            {
              heading: "Time Horizon",
              rows: [
                ["Short-term", "1-5 years"],
                ["Medium-term", "5-15 years"],
                ["Long-term", "15-30 years"],
                ["Very long-term", "30+ years"],
              ],
              note: "Time is your most powerful ally in wealth building. Longer time horizons allow compound growth to work its magic and can compensate for lower savings rates.",
            },
            {
              heading: "Inflation",
              rows: [
                ["Low inflation", "1% - 2% annually"],
                ["Moderate inflation", "2% - 3% annually"],
                ["High inflation", "3% - 5% annually"],
                ["Very high inflation", "5%+ annually"],
              ],
              note: "Inflation erodes the purchasing power of your wealth over time. Use real returns (nominal returns minus inflation) to understand your true wealth growth in purchasing power terms.",
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
            Wealth Growth Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can accelerate your wealth growth. Choose approaches that align with your financial goals and risk tolerance.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Maximize savings rate",
                body: "Save as much as you can by increasing income and reducing expenses. Automate your savings to ensure consistency. Every percentage point increase in your savings rate significantly accelerates wealth building.",
              },
              {
                n: "2",
                title: "Invest for growth",
                body: "Allocate your investments to growth assets like stocks and equity funds to maximize returns. The power of compound growth works best with higher-return investments over long time horizons.",
              },
              {
                n: "3",
                title: "Start early",
                body: "Begin saving and investing as early as possible to maximize the benefit of compound growth. Even small amounts saved early can outpace larger amounts saved later due to the time factor.",
              },
              {
                n: "4",
                title: "Increase contributions over time",
                body: "Raise your savings rate as your income grows. This keeps your wealth building on track with your lifestyle and prevents lifestyle creep from consuming your increased income.",
              },
              {
                n: "5",
                title: "Diversify income sources",
                body: "Build multiple streams of income including your primary job, side hustles, investments, and passive income. Diversified income sources accelerate wealth growth and provide financial security.",
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
            Practical Tips for Wealth Growth
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time is your greatest asset</>],
              [<><strong>Save consistently</strong> — automate your savings</>],
              [<><strong>Invest wisely</strong> — choose appropriate asset allocation</>],
              [<><strong>Increase savings</strong> — raise rate as income grows</>],
              [<><strong>Minimize fees</strong> — reduce investment costs</>],
              [<><strong>Stay invested</strong> — avoid market timing</>],
              [<><strong>Diversify</strong> — spread risk across investments</>],
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
                q: "How fast can I build wealth?",
                a: "Wealth building speed depends on your savings rate, investment returns, and time horizon. Higher savings rates and returns accelerate wealth building, while longer time horizons allow compound growth to work more effectively.",
              },
              {
                q: "What is a good savings rate?",
                a: "A good savings rate is at least 10-20% of your income. Financial experts recommend 20% as a good target for building wealth. Higher savings rates dramatically accelerate wealth accumulation.",
              },
              {
                q: "How does compound growth work?",
                a: "Compound growth is the process of earning returns on your returns. Your investments generate earnings, which then generate their own earnings, creating exponential growth over time.",
              },
              {
                q: "Should I pay off debt or invest?",
                a: "Generally, pay off high-interest debt first before investing. For low-interest debt, you may choose to invest while making minimum payments. Compare the guaranteed return from debt payoff to expected investment returns.",
              },
              {
                q: "How much do I need to be wealthy?",
                a: "Wealth is relative to your lifestyle and goals. A common benchmark is 25 times your annual expenses for financial independence. Calculate your personal wealth goal based on your desired lifestyle.",
              },
              {
                q: "What is the rule of 72?",
                a: "The rule of 72 estimates how long it takes to double your money at a given return rate. Divide 72 by your annual return rate to get the approximate number of years to double your investment.",
              },
              {
                q: "How does inflation affect wealth?",
                a: "Inflation reduces the purchasing power of your wealth over time. To maintain your purchasing power, your investments must outpace inflation. Use real returns (nominal minus inflation) for accurate planning.",
              },
              {
                q: "Can I build wealth with a low income?",
                a: "Yes, you can build wealth with a low income by maximizing your savings rate, investing wisely, and being patient. Starting early and being consistent are more important than the absolute amount you save.",
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
            The Wealth Growth Calculator helps you understand how consistent saving and investing can build substantial wealth over time. The power of compound growth is the most important factor in wealth building.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that wealth building is a marathon, not a sprint. Consistency and patience are more important than timing the market or chasing high returns. Focus on saving consistently, investing wisely, and giving your wealth time to grow.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your strategy as needed. A disciplined approach to wealth building can help you achieve financial freedom and live life on your own terms.
          </p>
          <div className="pull-quote mt-8">
            &quot;Wealth is not the money you have in the bank, but the freedom it gives you to live life on your own terms.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
