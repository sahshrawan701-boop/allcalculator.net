import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RoiCalculatorArticle() {
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
          <span className="meta-tag">Business · Financial Analysis</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            ROI Calculator: Calculate Return on Investment
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for investment analysis and decision-making
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You invested $50,000 in a new marketing campaign. The campaign generated $80,000 in additional revenue. Your net profit from the investment is $30,000 ($80,000 - $50,000). Your ROI is 60% (($30,000 / $50,000) × 100). This means for every dollar invested, you earned $0.60 in profit. Compared to your company's 15% hurdle rate, this investment exceeds expectations and is considered successful.
          </p>
          <p className="mb-5">
            ROI (Return on Investment) measures the profitability of an investment relative to its cost. It's a critical metric for evaluating investment opportunities, comparing alternatives, and making informed business decisions. Understanding ROI helps assess whether investments are generating adequate returns.
          </p>
          <p className="mb-5">
            But ROI varies by investment type, time horizon, and risk profile. Understanding how to calculate ROI, interpret it in context, and use it for decision-making helps optimize capital allocation.
          </p>
          <p>
            The ROI calculator above helps you calculate return on investment and evaluate investment opportunities.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How ROI Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            ROI is calculated by dividing net profit from an investment by the cost of the investment, then multiplying by 100 to get a percentage. Positive ROI indicates profit; negative ROI indicates loss.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            ROI Formula:
          </p>
          <div className="formula-block">
            <pre>ROI = ((Gain from Investment - Cost of Investment) / Cost of Investment) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Investment Cost", "$50,000"],
              ["Revenue Generated", "$80,000"],
              ["Net Profit", "$80,000 - $50,000 = $30,000"],
              ["ROI", "($30,000 / $50,000) × 100 = 60%"],
              ["Hurdle Rate", "15%"],
              ["Result", "Exceeds hurdle rate, successful"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the 60% ROI significantly exceeds the 15% hurdle rate, indicating a successful investment. Always compare ROI to your hurdle rate or cost of capital to determine if an investment meets your return requirements.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ROI TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of ROI
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different ROI measures provide different insights into investment performance. Understanding each type helps assess investments appropriately.
          </p>

          {[
            {
              heading: "Simple ROI",
              rows: [
                ["Formula", "(Net Profit / Cost) × 100"],
                ["Timeframe", "Single period"],
                ["Best For", "Short-term investments"],
              ],
              note: "Simple ROI measures return over a single period without considering time value of money. Useful for quick assessments but doesn't account for investment duration or timing of cash flows.",
            },
            {
              heading: "Annualized ROI",
              rows: [
                ["Formula", "ROI / Investment Period (years)"],
                ["Timeframe", "Per year"],
                ["Best For", "Comparing different durations"],
              ],
              note: "Annualized ROI converts ROI to an annual rate, enabling comparison across investments with different timeframes. Essential for comparing multi-year investments.",
            },
            {
              heading: "ROI with NPV",
              rows: [
                ["Formula", "NPV / Initial Investment × 100"],
                ["Timeframe", "Multi-period with discounting"],
                ["Best For", "Long-term, cash-flow investments"],
              ],
              note: "ROI with NPV accounts for time value of money by discounting future cash flows. More accurate for long-term investments with multiple cash flows over time.",
            },
          ].map((roiType: { heading: string; rows: string[][]; note: string }) => (
            <div key={roiType.heading} className="state-card">
              <h3>{roiType.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {roiType.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{roiType.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── ROI BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            ROI Benchmarks by Investment Type
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            ROI expectations vary significantly by investment type due to risk, time horizon, and industry factors. Understanding benchmarks helps assess performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Investment Type</th>
                <th className="dark:text-slate-100">Typical ROI</th>
                <th className="dark:text-slate-100">Timeframe</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Marketing Campaigns", "200-500%", "Short-term (months)"],
                ["Software/SaaS", "300-1000%", "Medium-term (1-3 years)"],
                ["Real Estate", "8-15%", "Long-term (5+ years)"],
                ["Stocks (Index)", "7-10%", "Long-term (5+ years)"],
                ["Equipment/Machinery", "15-25%", "Medium-term (3-7 years)"],
                ["R&D Projects", "50-200%", "Long-term (3-10 years)"],
              ].map(([type, roi, timeframe]) => (
                <tr key={type}>
                  <td className="dark:text-slate-100">{type}</td>
                  <td className="dark:text-slate-100">{roi}</td>
                  <td className="dark:text-slate-100">{timeframe}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Marketing campaigns have high ROI but short duration. Real estate has lower ROI but long-term appreciation. Compare ROI to investment type benchmarks, not absolute numbers. Consider timeframe when comparing.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HURDLE RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Hurdle Rate and Investment Decisions
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The hurdle rate is the minimum acceptable ROI for an investment. It's based on cost of capital, risk, and alternative opportunities. Investments exceeding the hurdle rate are acceptable.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Cost of capital",
                body: "The hurdle rate should at minimum equal your cost of capital. If you borrow at 10%, investments must return more than 10% to be profitable. Cost of capital is the floor for hurdle rates.",
              },
              {
                n: "2",
                title: "Risk adjustment",
                body: "Higher-risk investments require higher hurdle rates to compensate for risk. Adjust hurdle rate upward for risky projects and downward for safe, predictable investments.",
              },
              {
                n: "3",
                title: "Opportunity cost",
                body: "Consider alternative investments. If you can earn 15% elsewhere with similar risk, your hurdle rate should be at least 15%. Opportunity cost sets the minimum acceptable return.",
              },
              {
                n: "4",
                title: "Strategic value",
                body: "Some investments have strategic value beyond immediate ROI. Strategic investments may have lower hurdle rates if they provide competitive advantage, market entry, or other strategic benefits.",
              },
              {
                n: "5",
                title: "Time value of money",
                body: "Money today is worth more than money tomorrow. Longer-term investments should have higher hurdle rates to compensate for time value and uncertainty. Adjust for investment duration.",
              },
              {
                n: "6",
                title: "Inflation adjustment",
                body: "Nominal ROI should exceed inflation plus real return requirements. If inflation is 3% and you want 5% real return, your hurdle rate is 8%. Adjust for inflation.",
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

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common ROI Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses calculate or interpret ROI incorrectly. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not including all costs",
                body: "Failing to include all investment costs overstates ROI. Include direct costs, indirect costs, opportunity costs, and ongoing expenses. Accurate cost accounting is essential for true ROI.",
              },
              {
                n: "2",
                title: "Ignoring time value of money",
                body: "ROI doesn't account for time value of money. A 50% ROI over 5 years is worse than 20% over 1 year. Use annualized ROI or NPV for long-term investments.",
              },
              {
                n: "3",
                title: "Not considering risk",
                body: "High ROI often comes with high risk. Don't compare high-risk investments to low-risk investments without adjusting for risk. Risk-adjusted return is the true measure.",
              },
              {
                n: "4",
                title: "Using wrong timeframe",
                body: "ROI varies by measurement period. Compare investments over consistent timeframes. Annualize ROI for multi-period comparisons. Timeframe consistency is essential.",
              },
              {
                n: "5",
                title: "Ignoring intangible benefits",
                body: "Some investments have intangible benefits like brand building or learning. These may not show in ROI but provide value. Consider both tangible and intangible returns.",
              },
              {
                n: "6",
                title: "Not tracking actual vs projected",
                body: "Projected ROI often differs from actual ROI. Track actual returns and compare to projections. This improves future ROI estimation and accountability.",
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
            Practical Tips for ROI Analysis
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate ROI accurately</>],
              [<><strong>Include all costs</strong> — direct and indirect</>],
              [<><strong>Set hurdle rates</strong> — based on cost of capital</>],
              [<><strong>Annualize ROI</strong> — compare across timeframes</>],
              [<><strong>Consider risk</strong> — risk-adjusted returns</>],
              [<><strong>Track actual results</strong> — vs projections</>],
              [<><strong>Use appropriate benchmarks</strong> — by investment type</>],
              [<><strong>Consider intangibles</strong> — strategic value</>],
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
                q: "How do I calculate ROI?",
                a: "ROI = ((Gain from Investment - Cost of Investment) / Cost of Investment) × 100. For example, $30,000 profit on $50,000 investment: (($30,000 / $50,000) × 100 = 60%. The calculator above automates this calculation.",
              },
              {
                q: "What is a good ROI?",
                a: "Good ROI varies by investment type: Marketing 200-500%, SaaS 300-1000%, Real Estate 8-15%, Stocks 7-10%. The most important metric is whether ROI exceeds your hurdle rate based on cost of capital and risk.",
              },
              {
                q: "What is a hurdle rate?",
                a: "The hurdle rate is the minimum acceptable ROI for an investment. It's based on cost of capital, risk, and alternative opportunities. Investments exceeding the hurdle rate are acceptable; those below are rejected.",
              },
              {
                q: "How do I annualize ROI?",
                a: "Annualized ROI = ROI / Investment Period (years). For 60% ROI over 2 years: 60% / 2 = 30% annualized. Annualized ROI enables comparison across investments with different timeframes.",
              },
              {
                q: "What is the difference between ROI and ROAS?",
                a: "ROI measures profit return from total investment. ROAS measures revenue return from ad spend. ROI = (Profit - Investment) / Investment. ROAS = Revenue / Ad Spend. ROI is broader; ROAS is advertising-specific.",
              },
              {
                q: "Should I use ROI or NPV?",
                a: "Use both. ROI is simple and intuitive for quick decisions. NPV accounts for time value of money and is more accurate for long-term investments with multiple cash flows. Use NPV for major capital investments.",
              },
              {
                q: "How does risk affect ROI?",
                a: "Higher-risk investments should have higher expected ROI to compensate for risk. Adjust hurdle rates upward for risky investments. Compare risk-adjusted returns, not just nominal ROI.",
              },
              {
                q: "Why is my ROI different from projections?",
                a: "Projections are estimates based on assumptions. Actual results may differ due to market conditions, execution quality, or unforeseen factors. Track actual vs projected to improve future estimates.",
              },
              {
                q: "What is risk-adjusted ROI?",
                a: "Risk-adjusted ROI accounts for investment risk. Common measures include Sharpe Ratio (return per unit of risk) and comparing ROI to hurdle rates adjusted for risk. Risk-adjusted return is the true measure of performance.",
              },
              {
                q: "Should I invest if ROI is negative?",
                a: "Generally no, unless there are strategic benefits that outweigh financial loss. Strategic investments may be justified for market entry, competitive advantage, or learning. Consider both financial and strategic value.",
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
            ROI is a fundamental metric for investment evaluation and capital allocation. Understanding ROI calculation, setting appropriate hurdle rates, and considering risk and time value drives better investment decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate ROI and assess investment opportunities. But the real value comes from using this information to set hurdle rates, compare alternatives, and allocate capital to the highest-return opportunities.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're evaluating marketing campaigns, capital equipment, or strategic initiatives, accurate ROI calculation provides the foundation for informed investment decisions. Calculate precisely, invest wisely, and maximize returns.
          </p>
          <div className="pull-quote mt-8">
            ROI is not just a number — it's a decision tool. Calculate accurately, compare appropriately, and invest in opportunities that create lasting value.
          </div>
        </section>

      </div>
    </article>
  );
}
