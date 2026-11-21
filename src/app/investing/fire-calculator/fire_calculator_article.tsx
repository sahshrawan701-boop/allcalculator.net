import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FIRECalculatorArticle() {
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
          <span className="meta-tag">Investing · FIRE</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            FIRE Calculator: Plan Your Financial Independence, Retire Early
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to achieving early retirement
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            FIRE (Financial Independence, Retire Early) is a movement focused on aggressive saving and investing to achieve financial independence at a much younger age than traditional retirement. The FIRE Calculator helps you determine how much you need to save and invest to retire early based on your current situation and goals.
          </p>
          <p className="mb-5">
            Understanding your FIRE number is essential for planning an early retirement strategy. This calculator considers your current savings, expected returns, inflation, and desired retirement lifestyle to estimate when you can achieve financial independence and leave the workforce.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your FIRE number, the time required to reach it, and how different savings rates and investment returns affect your early retirement timeline.
          </p>
          <p>
            Use the FIRE Calculator to create a personalized plan for achieving financial independence and retiring early on your own terms.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the FIRE Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator determines your FIRE number based on your desired annual expenses in retirement and a safe withdrawal rate. It then projects how long it will take to reach that number based on your current savings, monthly contributions, and expected investment returns, adjusted for inflation.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current savings", "Total amount already saved and invested"],
              ["Monthly savings", "Amount you can save each month"],
              ["Annual expenses", "Expected annual spending in retirement"],
              ["Expected return (%)", "Anticipated annual investment return"],
              ["Withdrawal rate (%)", "Safe withdrawal rate (typically 4%)"],
              ["Inflation rate (%)", "Expected annual inflation rate"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your FIRE number, years to early retirement, and how different scenarios affect your timeline.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The FIRE Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The FIRE number is calculated based on your desired annual expenses and a safe withdrawal rate.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            FIRE Number Formula:
          </p>
          <div className="formula-block">
            <pre>FIRE_Number = Annual_Expenses / Withdrawal_Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Years to FIRE Formula (with monthly contributions):
          </p>
          <div className="formula-block">
            <pre>Years = ln((FIRE_Number × r + PMT) / (Current_Savings × r + PMT)) / ln(1 + r)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FIRE_Number", "Total portfolio needed for financial independence"],
              ["Withdrawal_Rate", "Annual withdrawal percentage (typically 4%)"],
              ["r", "Monthly return rate (annual rate / 12)"],
              ["PMT", "Monthly contribution amount"],
              ["Current_Savings", "Starting investment balance"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The 4% rule is a common guideline for safe withdrawal rates, suggesting you can withdraw 4% of your portfolio annually with a low risk of depletion over 30 years. Some FIRE advocates use more conservative rates like 3-3.5% for longer retirement periods.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Your FIRE Timeline
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how quickly you can achieve FIRE. Understanding these variables helps you optimize your strategy.
          </p>

          {[
            {
              heading: "Savings Rate",
              rows: [
                ["FIRE typical", "50% - 70% of income"],
                ["Impact", "Most significant factor in timeline"],
                ["Higher rate", "Dramatically accelerates timeline"],
              ],
              note: "FIRE requires significantly higher savings rates than traditional retirement planning. Increasing your savings rate from 50% to 65% can cut your time to FIRE by several years.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Conservative", "4% - 6% annual return"],
                ["Moderate", "7% - 9% annual return"],
                ["Aggressive", "10%+ annual return with higher risk"],
              ],
              note: "Higher returns accelerate your FIRE timeline but come with increased risk. Choose an asset allocation that matches your risk tolerance and time horizon.",
            },
            {
              heading: "Retirement Expenses",
              rows: [
                ["Lean FIRE", "$25,000 - $40,000 annually"],
                ["Standard FIRE", "$40,000 - $60,000 annually"],
                ["Fat FIRE", "$100,000+ annually"],
              ],
              note: "Your desired lifestyle in retirement directly impacts your FIRE number. Lean FIRE requires less savings but may involve significant lifestyle changes.",
            },
            {
              heading: "Time Horizon",
              rows: [
                ["Traditional", "65 years old"],
                ["Moderate FIRE", "40-50 years old"],
                ["Aggressive FIRE", "30s or early 40s"],
              ],
              note: "Earlier retirement requires a larger portfolio to sustain a longer withdrawal period. Consider healthcare costs and lifestyle changes over decades.",
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
            FIRE Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different FIRE approaches offer varying lifestyle trade-offs. Choose a strategy that aligns with your values and goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Lean FIRE",
                body: "Live frugally and aim for minimal expenses in retirement. Requires the smallest portfolio but involves significant lifestyle sacrifices. Suitable for those who value simplicity over luxury.",
              },
              {
                n: "2",
                title: "Standard FIRE",
                body: "Maintain a moderate lifestyle similar to middle-class living. Requires a balanced approach to saving and spending. Most common FIRE strategy for balanced lifestyle goals.",
              },
              {
                n: "3",
                title: "Fat FIRE",
                body: "Aim for a luxurious retirement with high spending. Requires the largest portfolio and highest savings rate. Suitable for high earners who want to maintain an affluent lifestyle.",
              },
              {
                n: "4",
                title: "Barista FIRE",
                body: "Retire from your main career but work part-time for benefits and extra income. Reduces the required portfolio size while providing structure and social connection.",
              },
              {
                n: "5",
                title: "Coast FIRE",
                body: "Save enough early in your career that compound growth alone will reach your FIRE number by traditional retirement age. Allows you to reduce savings intensity later.",
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
            Practical Tips for Achieving FIRE
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Maximize income</strong> — increase earnings through career advancement or side hustles</>],
              [<><strong>Minimize expenses</strong> — live below your means and avoid lifestyle inflation</>],
              [<><strong>Invest aggressively</strong> — allocate portfolio to growth assets while young</>],
              [<><strong>Automate savings</strong> — make saving automatic and consistent</>],
              [<><strong>Track progress</strong> — monitor your savings rate and portfolio growth</>],
              [<><strong>Optimize taxes</strong> — use tax-advantaged accounts effectively</>],
              [<><strong>Stay flexible</strong> — adjust your plan as life circumstances change</>],
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
                q: "How much do I need to retire early?",
                a: "The amount depends on your desired retirement expenses. Using the 4% rule, multiply your annual expenses by 25. For $50,000 in annual expenses, you would need $1.25 million to achieve FIRE.",
              },
              {
                q: "What is the difference between FIRE and traditional retirement?",
                a: "FIRE focuses on achieving financial independence much earlier, often in your 30s or 40s, rather than at traditional retirement age. This requires significantly higher savings rates and more aggressive investment strategies.",
              },
              {
                q: "How much should I save for FIRE?",
                a: "FIRE typically requires saving 50-70% of your income, compared to 10-20% for traditional retirement. The higher your savings rate, the faster you will achieve financial independence.",
              },
              {
                q: "Is FIRE realistic for most people?",
                a: "FIRE is achievable for those with high incomes, low expenses, or both. It requires significant discipline and sacrifice. For many, a modified approach like Coast FIRE or Barista FIRE may be more realistic.",
              },
              {
                q: "What about healthcare costs before Medicare?",
                a: "Healthcare is a major consideration for early retirees. You will need to budget for private insurance or find alternative coverage until Medicare eligibility at age 65. This can significantly impact your FIRE number.",
              },
              {
                q: "Should I pay off my mortgage before FIRE?",
                a: "This depends on your interest rate and investment returns. Low-rate mortgages can be paid alongside investing. Paying off high-interest debt before FIRE reduces your required portfolio size.",
              },
              {
                q: "What if I change my mind about retiring early?",
                a: "Many people achieve FIRE and choose to continue working in some capacity. Having financial independence gives you the freedom to work on your own terms, pursue passion projects, or change careers.",
              },
              {
                q: "How do I handle inflation in FIRE planning?",
                a: "Use conservative inflation assumptions (3-4%) in your planning. Your portfolio must also grow enough to outpace inflation. Some FIRE advocates build in a safety margin for unexpected costs.",
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
            The FIRE Calculator helps you create a roadmap to achieving financial independence and retiring early. Understanding your FIRE number and the factors that influence your timeline empowers you to make informed decisions about your financial future.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that FIRE is not about deprivation—it is about intentional living and prioritizing what matters most to you. The journey to financial independence requires discipline, but the freedom it provides is worth the effort.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your progress, model different scenarios, and adjust your strategy as needed. Whether you pursue Lean FIRE, Standard FIRE, or a modified approach, the principles of aggressive saving and wise investing can transform your financial future.
          </p>
          <div className="pull-quote mt-8">
            &quot;FIRE is not about retiring early to do nothing. It is about having the freedom to do what you want, when you want, without financial constraints.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
