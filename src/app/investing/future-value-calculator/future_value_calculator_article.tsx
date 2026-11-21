import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FutureValueCalculatorArticle() {
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
          <span className="meta-tag">Investing · Future Value</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Future Value Calculator: Project Your Investment Growth
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to calculating investment growth
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Future value is a fundamental concept in finance that calculates how much an investment will be worth at a specific point in the future, assuming a certain rate of return. The Future Value Calculator helps you project the growth of your investments over time, accounting for initial principal, regular contributions, and compound interest.
          </p>
          <p className="mb-5">
            Understanding future value is essential for financial planning, whether you are saving for retirement, a major purchase, or building wealth. This calculator shows how the power of compounding can significantly increase your wealth over time.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your investment&apos;s future value, total contributions, and total interest earned, helping you understand how different variables affect your investment growth.
          </p>
          <p>
            Use the Future Value Calculator to plan your savings strategy and visualize how your investments can grow over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Future Value Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the time value of money formula to project how your investment will grow over time. It accounts for compound interest, which means you earn interest on both your initial principal and accumulated interest.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial investment", "Starting amount you invest"],
              ["Regular contributions", "Amount you add periodically"],
              ["Contribution frequency", "How often you add contributions"],
              ["Interest rate (%)", "Annual rate of return"],
              ["Time period", "Number of years to grow"],
              ["Compound frequency", "How often interest is compounded"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future value, total contributions, and total interest earned, along with a breakdown of growth over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Future Value Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Future value is calculated using compound interest formulas that account for the time value of money.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula (lump sum):
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r/n)^(n×t)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Future Value Formula (with regular contributions):
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r/n)^(n×t) + PMT × ((1 + r/n)^(n×t) - 1) / (r/n)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of the investment"],
              ["PV", "Present value (initial investment)"],
              ["PMT", "Regular contribution amount"],
              ["r", "Annual interest rate (decimal)"],
              ["n", "Number of compounding periods per year"],
              ["t", "Number of years"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            More frequent compounding (higher n) results in higher future value due to the effect of compound interest. Daily compounding yields slightly more than monthly, which yields more than annual compounding.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Future Value
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how much your investment will grow over time. Understanding these variables helps you optimize your investment strategy.
          </p>

          {[
            {
              heading: "Interest Rate",
              rows: [
                ["Impact", "Higher rates accelerate growth exponentially"],
                ["Typical range", "1% - 10% annually depending on investment"],
                ["Risk trade-off", "Higher returns typically come with higher risk"],
              ],
              note: "Small differences in interest rates can have dramatic effects over long time horizons due to compounding. Even a 1% difference significantly impacts long-term results.",
            },
            {
              heading: "Time Horizon",
              rows: [
                ["Impact", "Longer time allows more compounding cycles"],
                ["Exponential growth", "Compounding accelerates over time"],
                ["Early start advantage", "Starting early maximizes time benefit"],
              ],
              note: "Time is your most powerful ally in investing. The longer your money has to compound, the more dramatic the growth. Starting early is more important than starting with a large amount.",
            },
            {
              heading: "Contribution Amount",
              rows: [
                ["Regular additions", "Accelerate growth through consistent saving"],
                ["Dollar-cost averaging", "Reduces timing risk of market entry"],
                ["Flexibility", "Can adjust based on financial situation"],
              ],
              note: "Regular contributions are often more important than the initial amount. Consistent investing builds wealth through both contributions and compound growth on those contributions.",
            },
            {
              heading: "Compounding Frequency",
              rows: [
                ["Annual", "Interest compounded once per year"],
                ["Monthly", "Interest compounded 12 times per year"],
                ["Daily", "Interest compounded 365 times per year"],
              ],
              note: "More frequent compounding yields slightly higher returns. The difference between monthly and daily compounding is relatively small, but both are significantly better than annual compounding.",
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
            Investment Growth Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help maximize your future value. Combine several approaches for optimal results.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Start early",
                body: "Begin investing as soon as possible to maximize the power of compound interest. Even small amounts invested early can outpace larger amounts invested later due to the time factor.",
              },
              {
                n: "2",
                title: "Invest consistently",
                body: "Make regular contributions through automatic investing. Dollar-cost averaging reduces market timing risk and ensures consistent investment regardless of market conditions.",
              },
              {
                n: "3",
                title: "Maximize returns",
                body: "Choose investments with appropriate risk-return profiles for your goals. Higher returns accelerate growth but come with increased volatility and risk.",
              },
              {
                n: "4",
                title: "Minimize fees",
                body: "Low-cost investments like index funds preserve more of your returns. Even small fee differences compound significantly over long time horizons.",
              },
              {
                n: "5",
                title: "Reinvest dividends",
                body: "Automatically reinvest dividends and interest to maximize compound growth. This ensures all earnings continue working for you rather than being spent.",
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
            Practical Tips for Maximizing Future Value
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start now</strong> — time is the most important factor</>],
              [<><strong>Be consistent</strong> — regular contributions build wealth steadily</>],
              [<><strong>Stay invested</strong> — avoid trying to time the market</>],
              [<><strong>Increase contributions</strong> — raise amounts as income grows</>],
              [<><strong>Choose wisely</strong> — select appropriate investments for your goals</>],
              [<><strong>Minimize taxes</strong> — use tax-advantaged accounts when possible</>],
              [<><strong>Monitor progress</strong> — review your investments regularly</>],
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
                q: "What is future value?",
                a: "Future value is the value of a current asset at a specified date in the future based on an assumed rate of growth. It calculates how much an investment made today will grow over time with compound interest.",
              },
              {
                q: "How does compound interest work?",
                a: "Compound interest means you earn interest on both your initial principal and the interest that accumulates. This creates exponential growth over time, as each period&apos;s interest earns additional interest in subsequent periods.",
              },
              {
                q: "What is the difference between present value and future value?",
                a: "Present value is what a future sum of money is worth today, discounted at a specific rate. Future value is what a current sum will be worth in the future, grown at a specific rate. They are inverse concepts.",
              },
              {
                q: "How often should I compound my investments?",
                a: "More frequent compounding yields higher returns. Daily compounding is best, followed by monthly, then quarterly, then annual. However, the difference between monthly and daily compounding is relatively small.",
              },
              {
                q: "What is a good interest rate for investments?",
                a: "Good returns depend on the investment type and risk level. Historically, stocks have returned 7-10% annually, bonds 3-5%, and savings accounts 1-3%. Higher returns typically require accepting higher risk.",
              },
              {
                q: "How much should I contribute monthly?",
                a: "Aim to save at least 10-20% of your income. The exact amount depends on your goals, timeline, and current financial situation. Use the calculator to model different contribution scenarios.",
              },
              {
                q: "Does inflation affect future value?",
                a: "Yes, inflation reduces purchasing power over time. To maintain real purchasing power, your investments must earn returns higher than the inflation rate. Consider inflation when setting investment goals.",
              },
              {
                q: "Can I calculate future value for irregular contributions?",
                a: "The standard formula assumes regular contributions. For irregular contributions, you would need to calculate the future value of each contribution separately and sum them, or use financial software with this capability.",
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
            The Future Value Calculator helps you understand how your investments can grow over time through the power of compound interest. Visualizing your potential wealth motivates consistent saving and informed investment decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that future value calculations are projections based on assumptions. Actual returns may vary due to market volatility, economic conditions, and other factors. Use conservative estimates when planning for important financial goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your investment strategy as needed. The combination of time, consistent contributions, and wise investment choices can build substantial wealth over the long term.
          </p>
          <div className="pull-quote mt-8">
            &quot;Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn&apos;t, pays it.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
