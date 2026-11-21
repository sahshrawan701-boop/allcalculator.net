import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SavingsGoalArticle() {
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
          <span className="meta-tag">Personal Finance · Goals</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Savings Goal Calculator: Plan Your Financial Targets
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for achieving savings goals
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to save $50,000 for a home down payment in 5 years. You already have $10,000 saved. At 4.5% interest, you need to save $635 monthly to reach your goal. That's $38,100 in contributions plus $1,900 in interest. But what if you extended the timeline to 10 years? You'd only need to save $265 monthly — much more manageable.
          </p>
          <p className="mb-5">
            The savings goal calculator above helps you determine exactly how much you need to save monthly to reach your financial targets by a specific date. Whether saving for a home, vacation, wedding, or emergency fund, knowing the required monthly savings makes your goal achievable.
          </p>
          <p className="mb-5">
            But calculating the required savings is just the first step. Understanding how to set realistic goals, adjust your timeline, and stay motivated to save consistently is what actually helps you achieve your financial targets.
          </p>
          <p>
            Savings goals aren't just about the destination — they're about the journey. Setting specific, measurable goals with clear timelines provides motivation and direction. The combination of consistent saving and compound interest transforms small monthly contributions into significant achievements.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Savings Goal Planning Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Savings goal planning calculates the monthly contribution needed to reach a target amount by a specific date, accounting for your current savings and expected interest rate. The calculator above uses the future value formula to determine the required monthly savings.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Monthly Savings Formula:
          </p>
          <div className="formula-block">
            <pre>PMT = (FV – PV × (1 + r)^n) × r / ((1 + r)^n – 1)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where PMT = monthly payment, FV = future value (goal), PV = present value (current savings), r = monthly interest rate, n = number of months
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Goal amount (FV)", "$50,000"],
              ["Current savings (PV)", "$10,000"],
              ["Annual interest rate", "4.5%"],
              ["Monthly interest rate (r)", "4.5% / 12 = 0.375%"],
              ["Time period", "5 years (60 months)"],
              ["Future value of current", "$10,000 × (1.00375)^60 = $12,500"],
              ["Remaining needed", "$50,000 – $12,500 = $37,500"],
              ["Monthly savings (PMT)", "$37,500 × 0.00375 / ((1.00375)^60 – 1) = $635"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you'll contribute $38,100 total ($10,000 initial + $635 × 60 months) and earn $1,900 in interest. The interest represents 3.8% of your goal — a small but meaningful boost from compound interest over 5 years.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIMELINE IMPACT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Timeline Affects Monthly Savings
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The timeline you choose dramatically affects the required monthly savings. Longer timelines require smaller monthly contributions but delay your goal. Shorter timelines require larger monthly payments but help you achieve your goal faster.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Timeline</th>
                <th className="dark:text-slate-100">Monthly Savings</th>
                <th className="dark:text-slate-100">Total Contributions</th>
                <th className="dark:text-slate-100">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["3 years", "$1,150", "$51,400", "-$1,400"],
                ["5 years", "$635", "$48,100", "$1,900"],
                ["10 years", "$265", "$41,800", "$8,200"],
                ["15 years", "$165", "$39,700", "$10,300"],
                ["20 years", "$115", "$37,600", "$12,400"],
              ].map(([timeline, monthly, contributions, interest]) => (
                <tr key={timeline}>
                  <td className="dark:text-slate-100">{timeline}</td>
                  <td className="dark:text-slate-100">{monthly}</td>
                  <td className="dark:text-slate-100">{contributions}</td>
                  <td className="dark:text-slate-100">{interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            For a $50,000 goal with $10,000 current savings at 4.5% interest, choosing a 20-year timeline instead of 3-year reduces monthly savings from $1,150 to $115 — a 90% reduction. However, you'll wait 17 years longer to achieve your goal. Choose the timeline that balances affordability with urgency.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── SETTING GOALS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Set Effective Savings Goals
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Effective savings goals are specific, measurable, achievable, relevant, and time-bound (SMART). Here's how to set goals that motivate you and are realistically achievable.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Be specific about the goal",
                body: "Instead of \"save for a house,\" specify \"save $50,000 for a down payment on a $250,000 home.\" Specificity makes the goal real and helps you calculate exactly what's needed.",
              },
              {
                n: "2",
                title: "Set a realistic timeline",
                body: "Choose a timeline that balances urgency with affordability. Use the calculator above to see how timeline affects monthly savings. If the required monthly savings feel impossible, extend the timeline.",
              },
              {
                n: "3",
                title: "Break large goals into milestones",
                body: "A $50,000 goal can feel overwhelming. Break it into $10,000 milestones. Celebrating each milestone provides motivation and makes the goal feel achievable.",
              },
              {
                n: "4",
                title: "Automate your savings",
                body: "Set up automatic transfers from checking to savings on payday. Treat savings like a non-negotiable expense. Automation removes willpower from the equation and ensures consistency.",
              },
              {
                n: "5",
                title: "Track your progress regularly",
                body: "Review your progress monthly or quarterly. Seeing your balance grow provides motivation and allows you to adjust if you're off track. Visual tracking makes the goal tangible.",
              },
              {
                n: "6",
                title: "Adjust as circumstances change",
                body: "Life changes — income, expenses, priorities. If your circumstances change, adjust your goal or timeline. Flexibility ensures your goals remain achievable and relevant.",
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

        {/* ── COMMON GOALS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Savings Goals and Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different goals require different strategies. Here's how to approach common savings goals effectively.
          </p>

          {[
            {
              heading: "Emergency Fund",
              rows: [
                ["Target", "3–6 months of expenses"],
                ["Timeline", "6–12 months (build quickly)"],
                ["Strategy", "High-yield savings account, automate savings"],
              ],
              note: "An emergency fund is your highest priority. Build it quickly by directing all available savings to it until you reach 3–6 months of expenses. Keep it in a high-yield savings account where it's accessible but earning interest.",
            },
            {
              heading: "Home Down Payment",
              rows: [
                ["Target", "10–20% of home price"],
                ["Timeline", "3–7 years"],
                ["Strategy", "High-yield savings or CDs, consider down payment assistance"],
              ],
              note: "Home down payments are large goals that require long-term planning. Use high-yield savings accounts or CDs with terms matching your timeline. Research down payment assistance programs that can reduce the amount you need to save.",
            },
            {
              heading: "Vacation",
              rows: [
                ["Target", "Specific trip cost"],
                ["Timeline", "6–18 months"],
                ["Strategy", "High-yield savings, separate account for each trip"],
              ],
              note: "Vacation goals are short-term and specific. Open a separate savings account for each trip to avoid dipping into funds for other purposes. Use high-yield savings to earn interest while keeping funds accessible.",
            },
            {
              heading: "Wedding",
              rows: [
                ["Target", "Specific wedding budget"],
                ["Timeline", "12–24 months"],
                ["Strategy", "High-yield savings, prioritize large expenses first"],
              ],
              note: "Weddings are expensive but have a fixed timeline. Save aggressively in the first year when venues and vendors require deposits. Use high-yield savings to maximize interest on your growing balance.",
            },
            {
              heading: "Car Purchase",
              rows: [
                ["Target", "Down payment or full purchase price"],
                ["Timeline", "1–3 years"],
                ["Strategy", "High-yield savings, consider financing vs paying cash"],
              ],
              note: "For car purchases, decide whether to save for a down payment or full purchase. If financing, save 20% down to avoid PMI. If paying cash, save for the full amount. High-yield savings accounts work well for both approaches.",
            },
          ].map((goal: { heading: string; rows: string[][]; note: string }) => (
            <div key={goal.heading} className="state-card">
              <h3>{goal.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {goal.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{goal.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── STAYING MOTIVATED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Stay Motivated to Save
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Saving consistently for years requires motivation. Here's how to stay on track and reach your goals even when motivation wanes.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Automate your savings",
                body: "Automation removes willpower from the equation. Set up automatic transfers on payday so you never see the money to spend it. Consistent automation beats sporadic motivation every time.",
              },
              {
                n: "2",
                title: "Visualize your goal",
                body: "Create a visual representation of your goal: a picture of your dream home, a vacation destination, or the car you're saving for. Place it where you'll see it daily to remind yourself why you're saving.",
              },
              {
                n: "3",
                title: "Track your progress visually",
                body: "Use a savings tracker app or spreadsheet to visualize your progress. Seeing your balance grow toward your goal provides motivation and a sense of accomplishment. Celebrate milestones along the way.",
              },
              {
                n: "4",
                title: "Join a savings challenge",
                body: "Participate in savings challenges like \"no-spend months\" or \"52-week savings challenge\" with friends or online communities. Accountability and competition provide external motivation when internal motivation wanes.",
              },
              {
                n: "5",
                title: "Remind yourself of the why",
                body: "Write down why your goal matters to you. Is it financial security? Freedom? Providing for your family? Re-read this reminder when motivation fades. The emotional connection to your goal is powerful.",
              },
              {
                n: "6",
                title: "Allow yourself small rewards",
                body: "Celebrate milestones with small, budgeted rewards. Completing a milestone deserves recognition, but keep rewards proportional to the achievement. This reinforces positive behavior without derailing your progress.",
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
            Common Savings Goal Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even financially motivated people make mistakes with savings goals that derail progress. Here's what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Setting unrealistic timelines",
                body: "Aggressive timelines require unsustainable monthly savings. If the required monthly savings feel impossible, extend the timeline. It's better to take longer to reach your goal than to abandon it entirely.",
              },
              {
                n: "2",
                title: "Not accounting for inflation",
                body: "For long-term goals (5+ years), inflation erodes purchasing power. A $50,000 goal today may need to be $55,000 in 5 years to have the same purchasing power. Adjust your goal for inflation if your timeline is long.",
              },
              {
                n: "3",
                title: "Dipping into savings for non-emergencies",
                body: "Once you start dipping into savings for non-emergencies, it becomes a habit. Keep your savings in a separate account that's not easily accessible for impulse spending. Only use it for the intended goal.",
              },
              {
                n: "4",
                title: "Not adjusting when circumstances change",
                body: "Income changes, expenses change, priorities change. If your circumstances change, adjust your goal or timeline. Rigidity leads to failure; flexibility ensures your goals remain achievable.",
              },
              {
                n: "5",
                title: "Focusing only on the goal amount",
                body: "The goal amount is the destination, but the habit of saving is the real achievement. Even if you don't reach your exact goal, building the savings habit is a win. Focus on the habit, not just the number.",
              },
              {
                n: "6",
                title: "Not celebrating milestones",
                body: "Large goals take years to achieve. Without celebrating milestones along the way, motivation fades. Celebrate reaching 25%, 50%, and 75% of your goal to maintain momentum and acknowledge progress.",
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
            Practical Tips for Achieving Savings Goals
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine monthly savings needed for your goal</>],
              [<><strong>Set SMART goals</strong> — specific, measurable, achievable, relevant, time-bound</>],
              [<><strong>Automate your savings</strong> — set up automatic transfers on payday</>],
              [<><strong>Break goals into milestones</strong> — celebrate progress to maintain motivation</>],
              [<><strong>Track your progress</strong> — visual tracking makes goals tangible</>],
              [<><strong>Keep savings separate</strong> — use dedicated accounts for each goal</>],
              [<><strong>Adjust as needed</strong> — flexibility ensures goals remain achievable</>],
              [<><strong>Focus on the habit</strong> — building the savings habit is the real achievement</>],
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
                q: "How do I calculate monthly savings for a goal?",
                a: "Use the formula: PMT = (FV – PV × (1 + r)^n) × r / ((1 + r)^n – 1), where FV is your goal, PV is current savings, r is monthly interest rate, and n is number of months. The calculator above does this automatically for you.",
              },
              {
                q: "How long should I give myself to reach my savings goal?",
                a: "Choose a timeline that balances urgency with affordability. Use the calculator to see how timeline affects monthly savings. If the required monthly savings feel impossible, extend the timeline. Most goals work well with 3–7 year timelines.",
              },
              {
                q: "Should I adjust my goal for inflation?",
                a: "For long-term goals (5+ years), yes. Inflation erodes purchasing power over time. A $50,000 goal today may need to be $55,000 in 5 years to have the same purchasing power. Adjust your goal by 2–3% annually for inflation if your timeline is long.",
              },
              {
                q: "What if I can't afford the required monthly savings?",
                a: "Extend your timeline. A longer timeline reduces the required monthly savings. Alternatively, reduce your goal amount or increase your income. The calculator above lets you experiment with different timelines to find an affordable monthly savings amount.",
              },
              {
                q: "Should I use high-yield savings accounts for goals?",
                a: "Yes, high-yield savings accounts pay 4–5% APY compared to 0.01–0.05% for traditional accounts. On $50,000, that's $2,500 vs $25 in annual interest. Always use high-yield accounts for goals to maximize growth.",
              },
              {
                q: "How do I stay motivated to save for long-term goals?",
                a: "Automate savings to remove willpower, visualize your goal, track progress visually, join savings challenges for accountability, remind yourself why the goal matters, and celebrate milestones. External accountability and visual tracking maintain motivation over long periods.",
              },
              {
                q: "Should I have separate accounts for different goals?",
                a: "Yes, separate accounts prevent you from dipping into savings for unintended purposes. Open dedicated accounts for each goal: emergency fund, home down payment, vacation, wedding, etc. This keeps goals organized and makes progress tracking easier.",
              },
              {
                q: "What if I have multiple savings goals?",
                a: "Prioritize goals by importance and timeline. Build your emergency fund first, then focus on the most urgent goal. Allocate savings percentages to each goal based on priority. The calculator can help you determine monthly savings for each goal individually.",
              },
              {
                q: "Should I invest money for short-term goals?",
                a: "No, for goals within 3–5 years, keep money in high-yield savings accounts or CDs. Investing in stocks or bonds carries volatility risk that you shouldn't take with money you need soon. Only invest for goals 5+ years away.",
              },
              {
                q: "How do I adjust my goal if my circumstances change?",
                a: "If your income decreases, extend your timeline or reduce your goal. If your income increases, consider shortening your timeline or increasing your goal. Flexibility ensures your goals remain achievable as life circumstances change.",
              },
              {
                q: "What if I reach my goal early?",
                a: "Congratulations! You can either start a new goal, increase your existing goal, or redirect the savings to other priorities like debt repayment or investing. Reaching goals early is a success — celebrate and redirect the momentum.",
              },
              {
                q: "Should I include interest in my goal amount?",
                a: "The calculator accounts for interest when calculating monthly savings. Your goal amount is the final balance you want, including interest. The required monthly savings is calculated to reach that final balance, accounting for interest earned along the way.",
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
            Savings goals transform abstract desires into concrete achievements. The savings goal calculator above helps you determine exactly how much you need to save monthly to reach your targets. But the real work happens in the details: setting SMART goals, automating savings, tracking progress, and staying motivated over time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The timeline you choose dramatically affects the required monthly savings. Longer timelines require smaller monthly payments but delay your goal. Shorter timelines require larger payments but help you achieve your goal faster. Choose the timeline that balances affordability with urgency.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Savings goals aren't just about the destination — they're about building the habit of consistent saving. Even if you don't reach your exact goal, developing the savings habit is a lifelong achievement that transforms your financial future. Start today, save consistently, and watch your dreams become reality.
          </p>
          <div className="pull-quote mt-8">
            The best savings goal is the one you automate. The second best is the one you start today.
          </div>
        </section>

      </div>
    </article>
  );
}
