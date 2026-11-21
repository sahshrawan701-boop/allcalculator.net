import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DCACalculatorArticle() {
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
          <span className="meta-tag">Investing · Dollar-Cost Averaging</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            DCA Calculator: Plan Your Dollar-Cost Averaging Strategy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for systematic investors
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Dollar-cost averaging (DCA) is a time-tested investment strategy that involves investing a fixed amount at regular intervals, regardless of market conditions. This approach removes the emotional element of trying to time the market and can help reduce the impact of volatility on your investments.
          </p>
          <p className="mb-5">
            The DCA Calculator helps you project your investment growth over time, showing how consistent investing can build wealth through the power of compounding. By investing regularly, you buy more shares when prices are low and fewer when prices are high, potentially lowering your average cost per share.
          </p>
          <p className="mb-5">
            This strategy is particularly valuable for long-term investors who want to build wealth steadily without the stress of market timing. Whether you are investing in stocks, ETFs, or cryptocurrencies, DCA provides a disciplined approach to growing your portfolio.
          </p>
          <p>
            Use the DCA Calculator to explore different investment scenarios and see how regular contributions can grow over time.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the DCA Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your investment growth by applying a fixed contribution at regular intervals over a specified time period. It accounts for your expected annual return to estimate your final portfolio value and total contributions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Initial investment", "Starting amount you invest today"],
              ["Regular contribution", "Amount you invest at each interval"],
              ["Contribution frequency", "How often you invest (weekly, monthly, etc.)"],
              ["Investment period", "Length of time you will invest"],
              ["Expected annual return", "Anticipated rate of return on your investment"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your total contributions, final portfolio value, and total profit or loss, helping you understand the potential outcomes of your DCA strategy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The DCA Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The future value of your DCA investment depends on your contributions, frequency, expected return, and time horizon.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula (for monthly contributions):
          </p>
          <div className="formula-block">
            <pre>FV = P × (((1 + r)^n - 1) / r) × (1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of your investment"],
              ["P", "Monthly contribution amount"],
              ["r", "Monthly interest rate (annual rate / 12)"],
              ["n", "Total number of contributions"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            This formula assumes contributions are made at the beginning of each period. For end-of-period contributions, omit the final (1 + r) factor.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Dollar-Cost Averaging
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            DCA offers several advantages for investors looking to build wealth systematically over time.
          </p>

          {[
            {
              heading: "Reduces Market Timing Risk",
              rows: [
                ["Eliminates timing", "No need to predict market tops and bottoms"],
                ["Consistent approach", "Removes emotional decision-making"],
                ["Automatic execution", "Invests regardless of market conditions"],
              ],
              note: "By investing regularly, you avoid the common mistake of trying to time the market, which even professionals struggle with consistently.",
            },
            {
              heading: "Lowers Average Cost",
              rows: [
                ["Buy low effect", "More shares purchased when prices drop"],
                ["Buy high effect", "Fewer shares purchased when prices rise"],
                ["Result", "Potentially lower average cost per share"],
              ],
              note: "This automatic adjustment can result in a lower average purchase price compared to lump-sum investing during volatile periods.",
            },
            {
              heading: "Builds Discipline",
              rows: [
                ["Habit formation", "Creates regular investing habit"],
                ["Automated savings", "Can be set up as automatic transfers"],
                ["Long-term focus", "Encourages thinking in decades, not days"],
              ],
              note: "The discipline of regular investing is often more important than the specific investments you choose.",
            },
            {
              heading: "Reduces Stress",
              rows: [
                ["Less anxiety", "No need to constantly watch the market"],
                ["Peace of mind", "Knowing you are investing consistently"],
                ["Simplified process", "One decision made and executed repeatedly"],
              ],
              note: "DCA can significantly reduce the emotional stress associated with investing, especially during market downturns.",
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
            Implementing Your DCA Strategy
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Successful implementation of DCA requires planning and consistency. Here is how to set up an effective strategy.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Determine your budget",
                body: "Calculate how much you can comfortably invest each month after covering expenses and maintaining an emergency fund. Start with an amount you can sustain long-term.",
              },
              {
                n: "2",
                title: "Choose your investments",
                body: "Select diversified investments like index funds or ETFs that align with your risk tolerance and time horizon. Avoid concentrating in single assets.",
              },
              {
                n: "3",
                title: "Set your frequency",
                body: "Monthly contributions work well for most investors, aligning with paycheck cycles. More frequent contributions can slightly improve returns but add complexity.",
              },
              {
                n: "4",
                title: "Automate the process",
                body: "Set up automatic transfers from your checking account to your investment account. Automation removes the need for willpower and ensures consistency.",
              },
              {
                n: "5",
                title: "Monitor and adjust",
                body: "Review your strategy annually and adjust contributions as your income grows or financial situation changes. Increase contributions when possible.",
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
            Practical Tips for DCA Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time in the market beats timing the market</>],
              [<><strong>Be consistent</strong> — stick to your schedule regardless of market conditions</>],
              [<><strong>Automate everything</strong> — remove human error and emotion from the process</>],
              [<><strong>Invest what you can</strong> — even small amounts add up over time</>],
              [<><strong>Choose low-cost funds</strong> — minimize fees to maximize returns</>],
              [<><strong>Stay diversified</strong> — do not concentrate in single assets or sectors</>],
              [<><strong>Increase over time</strong> — raise contributions as your income grows</>],
              [<><strong>Stay the course</strong> — do not stop investing during market downturns</>],
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
                q: "Is dollar-cost averaging better than lump-sum investing?",
                a: "Studies show lump-sum investing typically outperforms DCA about two-thirds of the time because money is invested earlier. However, DCA reduces regret and risk, making it psychologically easier for many investors. Choose based on your risk tolerance and comfort level.",
              },
              {
                q: "How often should I make DCA contributions?",
                a: "Monthly contributions are most common and practical for most investors, aligning with paycheck cycles. Weekly or bi-weekly contributions can slightly improve returns but add complexity. The key is consistency rather than frequency.",
              },
              {
                q: "Should I stop DCA during market downturns?",
                a: "No, continuing to invest during downturns is actually one of DCA&apos;s biggest advantages. You buy more shares at lower prices, which can enhance long-term returns. Stopping during downturns defeats the purpose of the strategy.",
              },
              {
                q: "What investments work best with DCA?",
                a: "DCA works well with any investment, but it is particularly effective with volatile assets like stocks and cryptocurrencies. For less volatile investments like bonds, the benefits are smaller but still present. Index funds and ETFs are popular DCA choices.",
              },
              {
                q: "How much should I contribute to DCA?",
                a: "Contribute an amount you can sustain long-term without financial stress. A common guideline is 10-20% of income, but start with whatever amount works for your budget and increase it over time as your income grows.",
              },
              {
                q: "Can I combine DCA with other strategies?",
                a: "Yes, DCA can be combined with other strategies like value averaging or tactical asset allocation. However, keep it simple initially. Master basic DCA before adding complexity to your investment approach.",
              },
              {
                q: "When should I stop DCA?",
                a: "You might stop DCA when you reach your financial goals, retire, or need to access your savings for major expenses. Some investors continue DCA into retirement for continued growth. There is no universal right answer.",
              },
              {
                q: "Does DCA guarantee profits?",
                a: "No, DCA does not guarantee profits. If your investment declines in value over your investment period, you will lose money regardless of your strategy. DCA is a risk management tool, not a guarantee of returns.",
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
            Dollar-cost averaging is a powerful strategy for building wealth over time through consistent, disciplined investing. By removing the emotional element of market timing, DCA helps investors stay the course through market ups and downs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The DCA Calculator helps you visualize the potential growth of your investments and plan your strategy accordingly. Remember that the key to success is consistency and time, not perfect timing or complex strategies.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Start with an amount you are comfortable with, automate your contributions, and increase them as your financial situation improves. The compound effect of regular investing over decades can build substantial wealth.
          </p>
          <div className="pull-quote mt-8">
            &quot;The best time to plant a tree was 20 years ago. The second best time is now. The same applies to investing.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
