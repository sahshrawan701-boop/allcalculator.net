import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RMDCalculatorArticle() {
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
          <span className="meta-tag">Investing · RMD Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            RMD Calculator: Calculate Required Minimum Distributions
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to RMD planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Required Minimum Distributions (RMDs) are mandatory withdrawals from tax-advantaged retirement accounts that you must take after reaching age 72. The RMD Calculator helps you calculate your required annual withdrawal based on your account balance and life expectancy factors.
          </p>
          <p className="mb-5">
            Understanding your RMD requirements is essential for retirement planning and avoiding IRS penalties. This calculator uses the IRS life expectancy tables to determine your RMD amount, helping you plan your withdrawals and manage your tax liability in retirement.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your annual RMD amount, the distribution period, and the total RMDs over time, helping you understand the impact on your retirement savings.
          </p>
          <p>
            Use the RMD Calculator to plan your required withdrawals and ensure compliance with IRS regulations.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the RMD Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator determines your RMD by dividing your account balance by the IRS life expectancy factor based on your age. The life expectancy factor is found in the IRS Uniform Lifetime Table, which assumes you have a beneficiary who is 10 years younger than you.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Account balance", "Total value of your retirement account"],
              ["Age", "Your current age"],
              ["Account type", "IRA, 401(k), or other retirement account"],
              ["Birth year", "Year of birth for precise calculation"],
              ["Spouse age", "If spouse is sole beneficiary and more than 10 years younger"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your RMD amount, distribution period, and projected RMDs for future years.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The RMD Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            RMD is calculated using IRS life expectancy factors from the Uniform Lifetime Table.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            RMD Formula:
          </p>
          <div className="formula-block">
            <pre>RMD = Account_Balance / Life_Expectancy_Factor</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["RMD", "Required minimum distribution amount"],
              ["Account_Balance", "Value of account as of December 31 previous year"],
              ["Life_Expectancy_Factor", "IRS factor based on age from Uniform Lifetime Table"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The SECURE Act 2.0 raised the RMD starting age from 72 to 73 for those turning 72 after December 31, 2022. The age increases to 75 for those turning 74 after December 31, 2032.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting RMD Calculations
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your RMD calculation. Understanding these variables helps you plan your withdrawals effectively.
          </p>

          {[
            {
              heading: "Age",
              rows: [
                ["Starting age", "72 (or 73 for those born after 1951)"],
                ["Life expectancy factor", "Decreases as you age"],
                ["Impact", "RMD percentage increases with age"],
              ],
              note: "As you age, the life expectancy factor decreases, meaning you must withdraw a larger percentage of your account each year. RMDs can become significant in later retirement years.",
            },
            {
              heading: "Account Balance",
              rows: [
                ["Higher balance", "Larger RMD amount"],
                ["Market performance", "Affects future RMDs"],
                ["Multiple accounts", "RMD calculated separately for each"],
              ],
              note: "Your RMD is directly proportional to your account balance. Strong market performance increases your RMD, while poor performance reduces it. Each IRA requires its own RMD calculation.",
            },
            {
              heading: "Beneficiary Status",
              rows: [
                ["Standard", "Uses Uniform Lifetime Table"],
                ["Spouse more than 10 years younger", "Uses Joint Life Table"],
                ["Non-spouse beneficiary", "Uses Single Life Table"],
              ],
              note: "If your spouse is the sole beneficiary and more than 10 years younger, you use the Joint Life and Last Survivor Expectancy Table, which may result in smaller RMDs.",
            },
            {
              heading: "Account Type",
              rows: [
                ["Traditional IRA", "Subject to RMD rules"],
                ["401(k)", "Subject to RMD rules"],
                ["Roth IRA", "No RMDs during owner&apos;s lifetime"],
                ["Inherited accounts", "Special RMD rules apply"],
              ],
              note: "Roth IRAs do not have RMD requirements during the original owner&apos;s lifetime, making them valuable for tax planning. Inherited accounts have different RMD rules depending on the beneficiary.",
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
            RMD Planning Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help manage RMDs and their tax impact. Choose approaches that align with your retirement goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Roth conversions",
                body: "Convert traditional IRA funds to Roth IRA before RMDs begin. This pays taxes now but eliminates future RMD requirements and tax on qualified withdrawals. Best done in low-income years.",
              },
              {
                n: "2",
                title: "Qualified Charitable Distributions (QCDs)",
                body: "Donate RMDs directly to charity to satisfy RMD requirements without including the distribution in taxable income. Available to those 70½ or older with IRAs.",
              },
              {
                n: "3",
                title: "Strategic withdrawals",
                body: "Take voluntary withdrawals before RMDs begin to reduce account balance and future RMDs. This can smooth out tax liability and reduce RMD amounts in later years.",
              },
              {
                n: "4",
                title: "Delay RMDs if still working",
                body: "If you have a 401(k) and are still working past age 72, you may delay RMDs from that plan until you retire. This does not apply to IRAs or plans from previous employers.",
              },
              {
                n: "5",
                title: "Consolidate accounts",
                body: "Consolidate multiple IRAs to simplify RMD management. While each IRA requires its own RMD calculation, you can withdraw the total from one account if you prefer.",
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
            Practical Tips for RMD Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — plan for RMDs before age 72</>],
              [<><strong>Calculate accurately</strong> — use IRS tables and correct balance</>],
              [<><strong>Take on time</strong> — deadline is December 31 each year</>],
              [<><strong>Consider taxes</strong> — RMDs are taxable as ordinary income</>],
              [<><strong>Use QCDs</strong> — donate to charity to reduce taxable income</>],
              [<><strong>Review annually</strong> — RMDs change as you age and balance changes</>],
              [<><strong>Plan for increases</strong> — RMD percentage grows over time</>],
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
                q: "What is an RMD?",
                a: "RMD stands for Required Minimum Distribution. It is the minimum amount you must withdraw from your tax-advantaged retirement accounts each year after reaching age 72 (or 73 for those born after 1951).",
              },
              {
                q: "At what age do RMDs start?",
                a: "RMDs start at age 72 for those who turned 72 before December 31, 2022. For those turning 72 after that date, the starting age is 73. The age will increase to 75 for those turning 74 after December 31, 2032.",
              },
              {
                q: "How is RMD calculated?",
                a: "RMD is calculated by dividing your account balance as of December 31 of the previous year by the IRS life expectancy factor from the Uniform Lifetime Table based on your age.",
              },
              {
                q: "Do Roth IRAs have RMDs?",
                a: "No, Roth IRAs do not have RMD requirements during the original owner&apos;s lifetime. This is one of the key advantages of Roth IRAs for retirement planning and tax management.",
              },
              {
                q: "What is the penalty for missing an RMD?",
                a: "The penalty for missing an RMD is 50% of the amount that should have been withdrawn. This is a substantial penalty, so it is important to calculate and take your RMDs on time each year.",
              },
              {
                q: "Can I withdraw more than the RMD?",
                a: "Yes, you can withdraw more than the RMD amount. However, only the RMD amount is required. Additional withdrawals are allowed but will increase your taxable income for the year.",
              },
              {
                q: "What if I have multiple IRAs?",
                a: "Each IRA has its own RMD calculation based on its balance. However, you can withdraw the total RMD amount from a single IRA if you prefer, as long as the total meets the combined requirement.",
              },
              {
                q: "Can I reinvest my RMD?",
                a: "You cannot reinvest RMDs back into the same tax-advantaged account. However, you can invest the withdrawn funds in other accounts such as taxable brokerage accounts, which may continue to grow.",
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
            The RMD Calculator helps you understand your required minimum distributions and plan your retirement withdrawals effectively. Understanding RMD rules is essential for avoiding IRS penalties and managing your tax liability in retirement.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that RMDs are mandatory and failure to take them results in severe penalties. Plan ahead by considering strategies like Roth conversions, QCDs, and strategic withdrawals to minimize the tax impact of RMDs.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your RMD requirements, model different scenarios, and adjust your retirement strategy as needed. Proper RMD planning can help you manage your tax burden and preserve more of your retirement savings.",
          </p>
          <div className="pull-quote mt-8">
            &quot;The goal of retirement planning is not just to accumulate wealth, but to manage it wisely to support your lifestyle throughout retirement.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
