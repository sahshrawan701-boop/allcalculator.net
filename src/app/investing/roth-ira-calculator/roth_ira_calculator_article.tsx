import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RothIRACalculatorArticle() {
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
          <span className="meta-tag">Investing · Roth IRA</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Roth IRA Calculator: Plan Your Tax-Free Retirement
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to Roth IRA investing
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A Roth IRA is a retirement savings account that offers tax-free growth and tax-free withdrawals in retirement. The Roth IRA Calculator helps you project your Roth IRA growth based on your contributions, expected returns, and time horizon, showing the powerful benefits of tax-free compounding.
          </p>
          <p className="mb-5">
            Understanding Roth IRA benefits is essential for retirement tax planning. This calculator projects your account value, total contributions, and tax-free earnings, helping you compare Roth IRA with traditional retirement accounts and make informed decisions.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your future Roth IRA value, total tax-free earnings, and the tax advantage compared to a traditional account, helping you optimize your retirement savings strategy.
          </p>
          <p>
            Use the Roth IRA Calculator to plan your tax-free retirement savings and understand the long-term benefits of Roth investing.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Roth IRA Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your Roth IRA growth using compound interest formulas. It accounts for your annual contributions, expected returns, and time horizon to estimate your future account value and tax-free earnings.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current balance", "Amount already in your Roth IRA"],
              ["Annual contribution", "Amount you contribute each year"],
              ["Expected return (%)", "Anticipated annual investment return"],
              ["Current age", "Your current age"],
              ["Retirement age", "Age when you plan to retire"],
              ["Tax rate (%)", "Your current marginal tax rate"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your future value, total contributions, tax-free earnings, and tax advantage compared to a traditional IRA.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Roth IRA Growth Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Roth IRA growth is calculated using compound interest formulas, with all earnings growing tax-free.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Future Value Formula:
          </p>
          <div className="formula-block">
            <pre>FV = PV × (1 + r)^(t) + PMT × ((1 + r)^(t) - 1) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Tax Advantage Formula:
          </p>
          <div className="formula-block">
            <pre>Tax_Advantage = Earnings × Tax_Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["FV", "Future value of Roth IRA"],
              ["PV", "Present value (current balance)"],
              ["PMT", "Annual contribution"],
              ["r", "Annual return rate (decimal)"],
              ["t", "Number of years"],
              ["Earnings", "Total investment earnings"],
              ["Tax_Rate", "Marginal tax rate (decimal)"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Roth IRA contributions are made with after-tax dollars, but all earnings and withdrawals in retirement are tax-free. This is especially advantageous if you expect to be in a higher tax bracket in retirement.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Roth IRA Growth
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your Roth IRA growth. Understanding these variables helps you optimize your retirement savings.
          </p>

          {[
            {
              heading: "Contribution Limits",
              rows: [
                ["2024 limit", "$7,000 under age 50"],
                ["Catch-up", "$8,000 age 50 and over"],
                ["Income limits", "Phase-out begins at certain income levels"],
              ],
              note: "Contribution limits are adjusted periodically for inflation. Maximize your contributions each year to take full advantage of tax-free growth.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Conservative", "4% - 6% annual return"],
                ["Moderate", "6% - 8% annual return"],
                ["Aggressive", "8% - 10% annual return"],
              ],
              note: "Higher returns accelerate tax-free growth. Since Roth earnings are never taxed, the compounding effect is even more powerful than in taxable accounts.",
            },
            {
              heading: "Time Horizon",
              rows: [
                ["Longer time", "More years of tax-free compounding"],
                ["Early start", "Significant advantage due to time"],
                ["Late start", "Less time but still valuable"],
              ],
              note: "Starting early maximizes the benefit of tax-free compounding. Even if you start later, Roth IRAs still offer valuable tax advantages for retirement.",
            },
            {
              heading: "Tax Rate Considerations",
              rows: [
                ["Current rate", "Contributions taxed at current rate"],
                ["Future rate", "Withdrawals tax-free regardless of future rates"],
                ["Comparison", "Roth beneficial if future rate higher than current"],
              ],
              note: "Roth IRAs are most advantageous if you expect to be in a higher tax bracket in retirement. They also provide tax diversification alongside traditional retirement accounts.",
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
            Roth IRA Investment Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help maximize your Roth IRA benefits. Choose approaches that align with your financial situation and goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Maximize contributions",
                body: "Contribute the maximum allowed each year to take full advantage of tax-free growth. Set up automatic contributions to ensure consistency and avoid missing contribution opportunities.",
              },
              {
                n: "2",
                title: "Start early",
                body: "Begin Roth IRA contributions as early as possible to maximize the benefit of tax-free compounding. Even small contributions in your 20s can grow significantly by retirement.",
              },
              {
                n: "3",
                title: "Invest for growth",
                body: "Since Roth IRA earnings are tax-free, prioritize growth investments like stocks and equity funds. The tax-free nature of the account amplifies the benefit of higher-return investments.",
              },
              {
                n: "4",
                title: "Backdoor Roth strategy",
                body: "If your income exceeds Roth IRA limits, consider a backdoor Roth conversion. This involves contributing to a traditional IRA and converting to Roth, subject to certain rules.",
              },
              {
                n: "5",
                title: "Tax diversification",
                body: "Maintain both Roth and traditional retirement accounts for tax diversification. This gives you flexibility in retirement to manage your tax liability by choosing which accounts to withdraw from.",
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
            Practical Tips for Roth IRA Investors
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Check eligibility</strong> — verify income limits for contributions</>],
              [<><strong>Maximize contributions</strong> — contribute the full annual limit</>],
              [<><strong>Start early</strong> — time is your most powerful ally</>],
              [<><strong>Invest for growth</strong> — prioritize growth assets in Roth</>],
              [<><strong>Consider conversions</strong> — evaluate traditional to Roth conversions</>],
              [<><strong>Review annually</strong> — adjust strategy as circumstances change</>],
              [<><strong>Understand rules</strong> — know withdrawal rules and penalties</>],
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
                q: "What is a Roth IRA?",
                a: "A Roth IRA is a retirement savings account that offers tax-free growth and tax-free withdrawals in retirement. Contributions are made with after-tax dollars, but all earnings and qualified withdrawals are tax-free.",
              },
              {
                q: "What is the Roth IRA contribution limit?",
                a: "For 2024, the contribution limit is $7,000 for those under age 50 and $8,000 for those 50 and older. Limits are adjusted periodically for inflation.",
              },
              {
                q: "Who is eligible for a Roth IRA?",
                a: "Anyone with earned income can contribute to a Roth IRA, subject to income limits. For 2024, contributions phase out starting at $146,000 for single filers and $230,000 for married couples filing jointly.",
              },
              {
                q: "When can I withdraw from a Roth IRA?",
                a: "You can withdraw contributions at any time tax-free and penalty-free. Earnings can be withdrawn tax-free and penalty-free after age 59½, provided the account has been open for at least five years.",
              },
              {
                q: "Should I choose Roth or traditional IRA?",
                a: "Roth IRAs are generally better if you expect to be in a higher tax bracket in retirement or want tax-free withdrawals. Traditional IRAs may be better if you expect lower taxes in retirement or need an immediate tax deduction.",
              },
              {
                q: "What is a backdoor Roth IRA?",
                a: "A backdoor Roth is a strategy for high-income earners who cannot contribute directly to a Roth IRA. It involves making a non-deductible contribution to a traditional IRA and converting it to a Roth IRA.",
              },
              {
                q: "Do Roth IRAs have RMDs?",
                a: "No, Roth IRAs do not have required minimum distributions during the original owner&apos;s lifetime. This allows you to leave the money to grow tax-free for as long as you live.",
              },
              {
                q: "Can I have both Roth and traditional IRA?",
                a: "Yes, you can contribute to both types of IRAs, but your total contributions across all IRAs cannot exceed the annual limit. Having both provides tax diversification in retirement.",
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
            The Roth IRA Calculator helps you understand the powerful benefits of tax-free retirement savings. Tax-free compounding can significantly increase your retirement wealth compared to taxable accounts.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that Roth IRAs are most valuable when you have a long time horizon and expect to be in a higher tax bracket in retirement. The tax-free nature of withdrawals provides significant flexibility and tax savings in retirement.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your Roth IRA growth, model different contribution scenarios, and plan your retirement savings strategy. A well-planned Roth IRA strategy can provide substantial tax-free income in retirement.
          </p>
          <div className="pull-quote mt-8">
            &quot;The best time to plant a tree was 20 years ago. The second best time is now. The same applies to Roth IRA contributions.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
