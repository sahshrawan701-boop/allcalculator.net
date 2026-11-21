import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FourZeroOneKArticle() {
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
          <span className="meta-tag">Investing · Retirement Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            401(k) Calculator: Maximize Your Employer Match
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for retirement savers
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your employer offers a 401(k) match. It&apos;s free money, essentially. But how much should you contribute? What happens if you increase your contribution by just 1%? The 401(k) calculator above helps you answer these questions by projecting your retirement savings growth over time.
          </p>
          <p className="mb-5">
            A 401(k) is one of the most powerful retirement savings tools available, especially when your employer matches your contributions. The calculator shows how your contributions, employer matches, and investment returns compound over decades to build substantial retirement wealth.
          </p>
          <p className="mb-5">
            Understanding the impact of contribution rates, employer matching formulas, and investment returns is crucial for making informed decisions about your retirement savings strategy.
          </p>
          <p>
            Use the 401(k) calculator to explore different scenarios and find the contribution strategy that works best for your financial goals and timeline.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the 401(k) Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator takes your current age, salary, contribution rate, employer match formula, expected annual return, and retirement age to project your 401(k) balance at retirement. It accounts for annual salary increases and the compounding effect of investment returns.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current age", "Your current age in years"],
              ["Annual salary", "Your current annual income"],
              ["Contribution rate", "Percentage of salary you contribute (e.g., 5%)"],
              ["Employer match", "Percentage your employer matches (e.g., 50% up to 6%)"],
              ["Expected return", "Annual investment return assumption (e.g., 7%)"],
              ["Salary increase", "Expected annual salary increase (e.g., 3%)"],
              ["Retirement age", "Age when you plan to retire"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then projects your annual contributions, employer matches, and investment growth year by year until your retirement age.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The 401(k) Growth Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The calculator uses compound interest to project your 401(k) balance, accounting for both employee contributions and employer matches.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Annual Balance Formula:
          </p>
          <div className="formula-block">
            <pre>Balance_Year_N = Balance_Year_(N-1) × (1 + r) + Employee_Contribution + Employer_Match</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["r", "Annual investment return rate"],
              ["Employee_Contribution", "Salary × Contribution Rate"],
              ["Employer_Match", "Employee_Contribution × Match Rate (up to match limit)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The power of the 401(k) comes from three factors: tax-deferred growth, employer matching, and compound interest over decades. Even small increases in contribution rates can significantly impact your final balance.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── EMPLOYER MATCH ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Employer Matching
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Employer matching is essentially free money. Understanding how your employer&apos;s match formula works is critical to maximizing this benefit.
          </p>

          {[
            {
              heading: "Common Match Formulas",
              rows: [
                ["50% match up to 6%", "Contribute 6%, employer adds 3%"],
                ["100% match up to 3%", "Contribute 3%, employer adds 3%"],
                ["50% match up to 5%", "Contribute 5%, employer adds 2.5%"],
                ["25% match up to 6%", "Contribute 6%, employer adds 1.5%"],
              ],
              note: "Always contribute at least enough to get the full employer match. Anything less is leaving free money on the table.",
            },
            {
              heading: "Vesting Schedules",
              rows: [
                ["Immediate vesting", "You own employer contributions immediately"],
                ["Cliff vesting (3 years)", "You own 100% after 3 years, 0% before"],
                ["Graded vesting (6 years)", "20% vests each year over 6 years"],
              ],
              note: "Check your vesting schedule. If you leave before being fully vested, you may forfeit some employer contributions.",
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

        {/* ── CONTRIBUTION STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Smart 401(k) Contribution Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            How much should you contribute? The answer depends on your age, income, and retirement goals. Here are proven strategies to maximize your 401(k).
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Get the full match first",
                body: "Contribute at least enough to capture your employer's full match. This is an instant 100% return on your money.",
              },
              {
                n: "2",
                title: "Increase by 1% annually",
                body: "Raise your contribution rate by 1% each year, especially when you get a raise. You won't miss the money, but it compounds significantly over time.",
              },
              {
                n: "3",
                title: "Aim for 10-15% total",
                body: "Financial experts recommend saving 10-15% of your income for retirement, including employer match. Start lower if needed and work up.",
              },
              {
                n: "4",
                title: "Max out if possible",
                body: "The 2024 401(k) contribution limit is $23,000 ($30,500 if age 50+). If you can max out, you'll maximize tax-deferred growth.",
              },
              {
                n: "5",
                title: "Consider Roth 401(k)",
                body: "If your employer offers a Roth option, consider it if you expect to be in a higher tax bracket in retirement or want tax-free withdrawals.",
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
            Practical Tips for 401(k) Success
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — time is your biggest ally in compounding</>],
              [<><strong>Automate increases</strong> — set up auto-escalation if available</>],
              [<><strong>Review investments annually</strong> — ensure appropriate asset allocation</>],
              [<><strong>Don't cash out</strong> — roll over to IRA when changing jobs</>],
              [<><strong>Take advantage of catch-up</strong> — contribute extra after age 50</>],
              [<><strong>Understand fees</strong> — low-cost index funds often outperform actively managed funds</>],
              [<><strong>Use the calculator</strong> — model different scenarios regularly</>],
              [<><strong>Coordinate with spouse</strong> — maximize both 401(k)s if married</>],
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
                q: "How much should I contribute to my 401(k)?",
                a: "At minimum, contribute enough to get your full employer match. Beyond that, aim for 10-15% of your income total (including employer match). Start where you can and increase over time.",
              },
              {
                q: "What happens if I don't contribute enough for the full match?",
                a: "You&apos;re leaving free money on the table. For example, if your employer matches 50% up to 6% and you only contribute 3%, you&apos;re missing out on 1.5% of your salary in free money annually.",
              },
              {
                q: "Should I choose traditional or Roth 401(k)?",
                a: "Traditional 401(k) gives you a tax break now but taxes withdrawals later. Roth 401(k) taxes contributions now but provides tax-free withdrawals. Choose Roth if you expect to be in a higher tax bracket in retirement.",
              },
              {
                q: "What is the 401(k) contribution limit?",
                a: "For 2024, the limit is $23,000 for those under 50, and $30,500 for those 50 and older (including $7,500 catch-up contribution). These limits adjust periodically for inflation.",
              },
              {
                q: "Can I contribute to both a 401(k) and an IRA?",
                a: "Yes, you can contribute to both, but there are income limits for deducting traditional IRA contributions if you also have a 401(k). Roth IRA contributions also have income limits.",
              },
              {
                q: "What happens to my 401(k) if I change jobs?",
                a: "You have several options: leave it with your former employer, roll it to your new employer&apos;s 401(k), roll it to an IRA, or cash out (not recommended due to taxes and penalties). Rolling to an IRA often provides more investment options.",
              },
              {
                q: "When can I withdraw from my 401(k) without penalty?",
                a: "Generally, you can withdraw penalty-free after age 59½. Some plans allow penalty-free withdrawals at age 55 if you leave your job after that age. There are exceptions for hardship withdrawals, but these come with taxes and penalties.",
              },
              {
                q: "What are required minimum distributions (RMDs)?",
                a: "You must start taking RMDs from your traditional 401(k) at age 73 (as of 2024). Roth 401(k)s also have RMDs, but you can roll them to a Roth IRA to avoid RMDs.",
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
            Your 401(k) is one of the most powerful tools for building retirement wealth. The combination of tax-deferred growth, employer matching, and compound interest over decades can turn modest contributions into substantial retirement savings.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The key is to start early, contribute consistently, and increase your contributions over time. Use the 401(k) calculator regularly to model different scenarios and track your progress toward your retirement goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember, the best 401(k) strategy is the one you can stick with consistently over the long term. Small, regular contributions compounded over decades are more powerful than trying to time the market or make up for lost time with large contributions later.
          </p>
          <div className="pull-quote mt-8">
            &quot;The best time to start saving for retirement was yesterday. The second best time is today.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
