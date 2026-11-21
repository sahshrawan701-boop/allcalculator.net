import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EmergencyFundArticle() {
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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

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

        .section-label {
          display: block;
          font-family: sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }
        .dark .section-label { color: #64748b; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Savings</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Emergency Fund Calculator: Your Financial Safety Net
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for building financial resilience
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You lose your job on a Tuesday. No warning, no severance, just a meeting with HR and a box for your personal items. You
            have rent due in two weeks, a car payment, student loans, and credit card bills. How long can you survive before
            desperation sets in?
          </p>
          <p className="mb-5">
            This is the scenario emergency funds are designed for. Not for vacations or luxury purchases — for survival. The
            difference between having an emergency fund and not having one is the difference between a temporary setback and a
            financial catastrophe.
          </p>
          <p className="mb-5">
            The emergency fund calculator above helps you determine exactly how much you need to save based on your actual
            expenses and risk tolerance. But understanding why it matters, where to keep it, and how to build it is what actually
            protects you when life throws a curveball.
          </p>
          <p>
            An emergency fund isn&apos;t just savings — it&apos;s peace of mind. It&apos;s the freedom to make decisions from a place of
            strength rather than panic. Let&apos;s break down exactly how to build one that actually works.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS EMERGENCY FUND ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is an Emergency Fund?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            An emergency fund is a dedicated savings account set aside specifically for unexpected expenses or income loss. It&apos;s
            money you don&apos;t touch unless you genuinely need it — job loss, medical emergency, major car repair, or other
            unavoidable financial shocks.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Unlike regular savings, which might be for planned purchases or goals, emergency funds are strictly for survival.
            They&apos;re the buffer between you and financial disaster.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The key characteristic of an emergency fund is accessibility. It needs to be available quickly when you need it, but
            separate enough from your regular checking account that you don&apos;t accidentally spend it on non-emergencies.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW MUCH TO SAVE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Much Should You Save in an Emergency Fund?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The standard rule of thumb is 3 to 6 months of living expenses. But the right amount for you depends on your specific
            situation — job stability, income sources, family structure, and risk tolerance.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s how to think about it:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["3 months", "Minimum for stable jobs with steady income"],
              ["6 months", "Standard recommendation for most households"],
              ["9 months", "If you're self-employed or have variable income"],
              ["12 months", "If you're the sole earner or have dependents"],
              ["Custom", "Based on your actual monthly expenses and risk factors"],
            ].map(([months, description]) => (
              <li key={months} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{months}</strong> – {description}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator above uses your actual monthly expenses to calculate these targets. Focus on essential expenses —
            housing, food, transportation, utilities, insurance — not discretionary spending like dining out or entertainment.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Emergency Fund Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The calculation itself is straightforward. The complexity comes from accurately identifying your essential expenses and
            choosing the right coverage period for your situation.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Emergency Fund Formula:
          </p>
          <div className="formula-block">
            <pre>Emergency Fund = Monthly Essential Expenses × Number of Months to Cover</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Monthly rent/mortgage", "$2,000"],
              ["Utilities", "$300"],
              ["Groceries", "$600"],
              ["Transportation", "$400"],
              ["Insurance", "$200"],
              ["Other essentials", "$300"],
              ["Total monthly expenses", "$3,800"],
              ["6-month emergency fund", "$3,800 × 6 = $22,800"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            This example assumes a 6-month fund, which is the standard recommendation. If you have a stable job and no
            dependents, 3 months ($11,400) might suffice. If you're self-employed with variable income, 9 months ($34,200) might
            be more appropriate.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WHERE TO KEEP IT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Where Should You Keep Your Emergency Fund?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your emergency fund needs to balance three competing priorities: accessibility, safety, and growth. Here&apos;s how to
            find the right balance.
          </p>

          {[
            {
              heading: "High-Yield Savings Account (Best Option)",
              rows: [
                ["Accessibility", "Immediate — transfers in 1–3 days"],
                ["Safety", "FDIC insured up to $250,000"],
                ["Growth", "4–5% APY (varies with market rates)"],
                ["Risk", "None — principal protected"],
              ],
              note: "This is the gold standard. High-yield savings accounts offer competitive interest rates, full FDIC insurance, and quick access to your money when you need it. They're the ideal home for emergency funds.",
            },
            {
              heading: "Money Market Account",
              rows: [
                ["Accessibility", "Immediate — check-writing or debit card"],
                ["Safety", "FDIC insured up to $250,000"],
                ["Growth", "4–5% APY (similar to HYSA)"],
                ["Risk", "None — principal protected"],
              ],
              note: "Money market accounts function like savings accounts but may offer check-writing or debit card access. They're a good option if you want slightly faster access to your emergency fund.",
            },
            {
              heading: "Certificates of Deposit (CDs)",
              rows: [
                ["Accessibility", "Limited — early withdrawal penalties"],
                ["Safety", "FDIC insured up to $250,000"],
                ["Growth", "4–6% APY (higher for longer terms)"],
                ["Risk", "None — principal protected"],
              ],
              note: "CDs offer higher rates but lock your money away for a set term. Consider a CD ladder for a portion of your emergency fund, but keep some in a liquid account for immediate access.",
            },
            {
              heading: "Treasury Bills (T-Bills)",
              rows: [
                ["Accessibility", "Limited — must wait until maturity"],
                ["Safety", "Backed by US government"],
                ["Growth", "4–5% (state and local tax exempt)"],
                ["Risk", "None — guaranteed by US Treasury"],
              ],
              note: "T-Bills are ultra-safe and offer tax advantages, but they're not ideal for emergency funds due to limited liquidity. Consider them only for a portion of your fund if you're comfortable with the access restrictions.",
            },
          ].map((option: { heading: string; rows: string[][]; note: string }) => (
            <div key={option.heading} className="state-card">
              <h3>{option.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {option.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{option.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REAL LIFE EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-Life Emergency Fund Scenarios
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the theory is one thing. Seeing how emergency funds play out in real situations is another. Here are
            three scenarios that illustrate why having an emergency fund matters.
          </p>

          {[
            {
              heading: "Scenario 1: The Job Loss",
              rows: [
                ["Monthly expenses", "$4,500"],
                ["Emergency fund", "$27,000 (6 months)"],
                ["Job loss duration", "4 months"],
                ["Fund used", "$18,000"],
                ["Remaining", "$9,000"],
              ],
              note: "Sarah lost her job but had 6 months of expenses saved. She used $18,000 over 4 months while job hunting. The remaining $9,000 stayed in her fund, ready for the next emergency. No debt incurred, no panic.",
            },
            {
              heading: "Scenario 2: The Medical Emergency",
              rows: [
                ["Monthly expenses", "$3,200"],
                ["Emergency fund", "$9,600 (3 months)"],
                ["Medical bill after insurance", "$7,500"],
                ["Fund used", "$7,500"],
                ["Remaining", "$2,100"],
              ],
              note: "Marcus faced a $7,500 medical bill after insurance. His emergency fund covered it completely. He immediately began rebuilding the fund, but avoided going into medical debt or using high-interest credit cards.",
            },
            {
              heading: "Scenario 3: The Car Breakdown",
              rows: [
                ["Monthly expenses", "$5,000"],
                ["Emergency fund", "$0 (none saved)"],
                ["Car repair cost", "$3,200"],
                ["Payment method", "Credit card at 22% APR"],
                ["Additional cost", "$700+ in interest over 2 years"],
              ],
              note: "Priya had no emergency fund when her car needed major repairs. She put it on a credit card and paid minimums for two years, costing her over $700 in interest. An emergency fund would have saved her that money and the stress of carrying high-interest debt.",
            },
          ].map((scenario: { heading: string; rows: string[][]; note: string }) => (
            <div key={scenario.heading} className="state-card">
              <h3>{scenario.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {scenario.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{scenario.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Having an Emergency Fund
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            An emergency fund isn&apos;t just about money — it&apos;s about options, security, and peace of mind. Here&apos;s what having
            one actually gets you.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Protection against debt",
                body: "When emergencies hit, you either use savings or go into debt. Emergency funds prevent you from relying on high-interest credit cards or loans when you're most vulnerable.",
              },
              {
                n: "2",
                title: "Job search flexibility",
                body: "With an emergency fund, you can take time to find the right job rather than accepting the first offer out of desperation. You can negotiate from strength, not fear.",
              },
              {
                n: "3",
                title: "Reduced financial stress",
                body: "Knowing you have a cushion reduces anxiety about what-ifs. You sleep better, make better decisions, and don't live in constant fear of the next financial shock.",
              },
              {
                n: "4",
                title: "Avoidance of premature withdrawals",
                body: "Without an emergency fund, you might be forced to tap retirement accounts early, triggering taxes and penalties. Emergency funds protect your long-term savings.",
              },
              {
                n: "5",
                title: "Ability to handle unexpected opportunities",
                body: "Sometimes emergencies are opportunities in disguise — a chance to buy a home at a discount, invest in a business, or help a family member. Emergency funds give you the flexibility to say yes.",
              },
              {
                n: "6",
                title: "Better financial decision-making",
                body: "When you're not in crisis mode, you make better financial choices. Emergency funds prevent panic decisions that can have long-term negative consequences.",
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

        {/* ── HOW TO BUILD ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Build Your Emergency Fund
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Building an emergency fund takes time and discipline, but the process doesn't have to be painful. Here's a practical
            approach to reaching your goal.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Start small — aim for $1,000 first",
                body: "Before worrying about 3–6 months of expenses, save your first $1,000. This covers most common emergencies (car repair, minor medical issue, appliance replacement) and gives you a quick win to build momentum.",
              },
              {
                n: "2",
                title: "Automate your savings",
                body: "Set up an automatic transfer from checking to your emergency fund account every payday. Even $50–$100 per paycheck adds up over time. Automation removes the temptation to spend the money elsewhere.",
              },
              {
                n: "3",
                title: "Use windfalls strategically",
                body: "Tax refunds, bonuses, gifts, and inheritance money should go directly to your emergency fund until you reach your target. It's tempting to spend windfalls, but they're the fastest way to build your fund.",
              },
              {
                n: "4",
                title: "Reduce expenses temporarily",
                body: "Consider a temporary spending freeze on non-essentials while building your fund. Cut dining out, subscriptions, or entertainment for 3–6 months and redirect that money to savings.",
              },
              {
                n: "5",
                title: "Sell unused items",
                body: "Clothes, electronics, furniture — if you're not using it, sell it. The proceeds go directly to your emergency fund. It's fast money that accelerates your progress.",
              },
              {
                n: "6",
                title: "Increase income temporarily",
                body: "Side gigs, overtime, freelance work — any extra income should go to your emergency fund until it's fully funded. The temporary sacrifice pays long-term dividends.",
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
            Common Emergency Fund Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even well-intentioned people make mistakes with emergency funds. Here&apos;s what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Keeping it in your checking account",
                body: "If your emergency fund is mixed with your regular spending money, you'll accidentally spend it. Keep it in a separate account that's not connected to your debit card.",
              },
              {
                n: "2",
                title: "Investing it in stocks or crypto",
                body: "Emergency funds need to be safe and accessible. The stock market can drop 30% in a month — exactly when you might need your emergency fund. Don't gamble with money you might need tomorrow.",
              },
              {
                n: "3",
                title: "Underestimating monthly expenses",
                body: "Calculate your emergency fund based on actual spending, not what you think you spend. Track your expenses for a few months to get a realistic number.",
              },
              {
                n: "4",
                title: "Using it for non-emergencies",
                body: "A vacation, new phone, or wedding is not an emergency. Define what constitutes an emergency before you need one, and stick to that definition.",
              },
              {
                n: "5",
                title: "Not replenishing after use",
                body: "If you use your emergency fund, make replenishing it your top financial priority. Treat it like a loan you owe yourself — with interest.",
              },
              {
                n: "6",
                title: "Waiting until you're debt-free to start",
                body: "Don't let debt prevent you from building an emergency fund. Start with a small fund ($1,000) even while paying down debt. Without it, one emergency can derail your entire debt payoff plan.",
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
            Practical Tips for Emergency Fund Success
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use a separate bank</strong> — keeping your emergency fund at a different bank than your checking account adds friction to spending it impulsively</>],
              [<><strong>Set up automatic transfers</strong> — automate your savings so you don't have to think about it each month</>],
              [<><strong>Review annually</strong> — as your life changes, your emergency fund needs may change. Review and adjust your target yearly</>],
              [<><strong>Keep it liquid</strong> — avoid investments that charge penalties for early withdrawal or have volatile values</>],
              [<><strong>Track your progress</strong> — use the calculator above to monitor how close you are to your goal</>],
              [<><strong>Celebrate milestones</strong> — reaching your first $1,000, then halfway, then your full target — celebrate the progress to stay motivated</>],
              [<><strong>Protect your fund</strong> — don't lend it to friends or family, even in emergencies. That's not what it's for</>],
              [<><strong>Rebuild quickly after use</strong> — if you dip into your emergency fund, replenish it before resuming other financial goals</>],
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
                q: "How much should I have in my emergency fund?",
                a: "The standard recommendation is 3 to 6 months of essential living expenses. If you have a stable job, no dependents, and good benefits, 3 months may suffice. If you're self-employed, have variable income, or are the sole earner for a family, aim for 6 months or more.",
              },
              {
                q: "Where is the best place to keep an emergency fund?",
                a: "A high-yield savings account is the best option for most people. It offers FDIC insurance, competitive interest rates (4–5% APY as of 2024), and quick access to your money. Money market accounts are also good if you want check-writing access.",
              },
              {
                q: "Should I pay off debt or build an emergency fund first?",
                a: "Start with a small emergency fund of $1,000, then focus on high-interest debt. Once high-interest debt is gone, build your full emergency fund. The $1,000 cushion prevents you from going into more debt when minor emergencies hit.",
              },
              {
                q: "Can I use my emergency fund for a vacation?",
                a: "No — by definition, vacations are not emergencies. Your emergency fund is for genuine financial threats: job loss, medical emergencies, major car repairs, or essential home repairs. For planned expenses, save separately.",
              },
              {
                q: "How long does it take to build an emergency fund?",
                a: "It depends on your income, expenses, and saving rate. Saving $200 per month, a $10,000 emergency fund takes about 4 years. Saving $500 per month, it takes about 20 months. Automate your savings and use windfalls to accelerate the process.",
              },
              {
                q: "Should I invest my emergency fund in the stock market?",
                a: "No — emergency funds need to be safe and accessible. The stock market can drop significantly exactly when you need your emergency fund. Keep it in FDIC-insured accounts or government-backed securities where your principal is protected.",
              },
              {
                q: "What counts as an emergency?",
                a: "True emergencies are unexpected, necessary, and urgent: job loss, medical emergency, major car repair, essential home repair (like a broken water heater), or legal emergency. Non-emergencies include vacations, weddings, upgrades, or predictable expenses.",
              },
              {
                q: "Do I need an emergency fund if I have good credit?",
                a: "Yes — credit cards are not a substitute for emergency savings. Relying on credit for emergencies means paying interest and potentially damaging your credit score if you can't repay quickly. Emergency funds give you options without cost.",
              },
              {
                q: "Should I adjust my emergency fund after I reach my goal?",
                a: "Review your emergency fund annually or after major life changes: marriage, children, job change, move, or significant expense changes. Your target may need to increase as your expenses grow or decrease if your situation becomes more stable.",
              },
              {
                q: "What if I have to use my emergency fund?",
                a: "That's what it's for — don't feel guilty about using it for a genuine emergency. But make replenishing it your top financial priority. Treat it like a loan you owe yourself, and get back to your target as quickly as possible.",
              },
              {
                q: "Can I have too much in my emergency fund?",
                a: "It's possible — if you have significantly more than 6 months of expenses in low-yield savings, you're missing out on higher returns elsewhere. Once your emergency fund is fully funded, direct additional savings toward investments or other financial goals.",
              },
              {
                q: "How do I calculate my monthly expenses for the emergency fund?",
                a: "Track your spending for 2–3 months to get an accurate picture. Include only essential expenses: housing, utilities, food, transportation, insurance, minimum debt payments, and other non-negotiables. Exclude discretionary spending like dining out, entertainment, and subscriptions.",
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
            Building an emergency fund is one of the most important financial steps you can take. It&apos;s not the most exciting
            investment — it won't make you rich — but it might save you from becoming poor when life throws a curveball.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page gives you your target number in seconds. But the real value comes from
            consistently funding that account until you reach your goal. Start small, automate the process, and stay the course.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            When you have an emergency fund, you're not just saving money — you're buying peace of mind. You're buying the
            freedom to make decisions from a place of strength rather than panic. You're buying protection for yourself and the
            people who depend on you.
          </p>
          <div className="pull-quote mt-8">
            An emergency fund turns a crisis into a manageable problem. Without one, a manageable problem becomes a crisis. Build yours before you need it.
          </div>
        </section>

      </div>
    </article>
  );
}
