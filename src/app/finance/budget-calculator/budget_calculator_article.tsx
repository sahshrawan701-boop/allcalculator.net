import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BudgetArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Budgeting</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Budget Calculator: Master Your Money and Save More
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to managing your monthly cash flow
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A high salary does not automatically equal high wealth. Many people
            earning six figures still find themselves living paycheck to
            paycheck simply because they have no system to track where their
            money is actually going. This is the phenomenon known as lifestyle
            creep, and a budget is the only reliable cure.
          </p>
          <p className="mb-5">
            Budgeting has a reputation for being restrictive and boring, but in
            reality, it is exactly the opposite. A well-constructed budget is a
            financial roadmap. It gives you permission to spend money on things
            you love completely guilt-free, because you already know your bills
            are paid and your savings goals are funded.
          </p>
          <p className="mb-5">
            A Budget Calculator automates the tedious math behind this process.
            It takes your total monthly income and subtracts your fixed
            expenses, variable spending, and debt payments to reveal your true
            bottom line. Most importantly, it helps you apply proven frameworks,
            like the 50/30/20 rule, to your unique financial situation.
          </p>
          <p>
            Whether you are trying to dig your way out of consumer debt, save up
            for a dream vacation, or finally build an emergency fund, using a
            calculator to structure your monthly cash flow is the crucial first
            step.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Budget Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The core function of the calculator is to compare your total income
            against your total outflow. By categorizing your expenses, the
            calculator provides a visual breakdown of your spending habits,
            exposing areas where you might be bleeding cash unnecessarily.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To generate a comprehensive budget overview, you will need to input
            your financial data across several categories:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Monthly Net Income",
                "Your take-home pay after taxes and employer deductions.",
              ],
              [
                "Fixed Expenses",
                "Bills that stay the same every month (e.g., rent, mortgage, car payment, insurance).",
              ],
              [
                "Variable Expenses",
                "Spending that fluctuates (e.g., groceries, dining out, entertainment, gas).",
              ],
              [
                "Debt Payments",
                "Minimum payments or aggressive payments toward credit cards, student loans, etc.",
              ],
              [
                "Savings & Investments",
                "Money explicitly set aside for emergency funds, retirement, or brokerage accounts.",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            After processing these inputs, the calculator outputs your remaining
            disposable income. If that number is negative, you are operating at
            a deficit and acquiring debt. If it's positive, you have a surplus
            to allocate toward your financial goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Budgeting Framework Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            While the basic math of budgeting is just subtraction, the most
            effective way to use the calculator is by applying the{" "}
            <strong>50/30/20 Budgeting Rule</strong>. This formula, popularized
            by Senator Elizabeth Warren, splits your after-tax income into three
            distinct buckets.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The Basic Cash Flow Formula:
          </p>
          <div className="formula-block">
            <pre>
              Surplus/Deficit = Net Income - (Fixed Expenses + Variable Expenses
              + Debt Payments)
            </pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-5">
            The 50/30/20 Target Formula:
          </p>
          <div className="formula-block">
            <pre>{`Needs (50%) = Net Income × 0.50
Wants (30%) = Net Income × 0.30
Savings/Debt (20%) = Net Income × 0.20`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            What these categories represent:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              [
                "Needs (50%)",
                "Absolute essentials for survival and employment: rent, utilities, basic groceries, minimum debt payments, and healthcare.",
              ],
              [
                "Wants (30%)",
                "Lifestyle choices and non-essentials: dining out, vacations, subscriptions, hobbies, and luxury clothing.",
              ],
              [
                "Savings (20%)",
                "Wealth-building and debt destruction: emergency fund contributions, retirement investing, and extra debt payments above the minimums.",
              ],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-36 shrink-0">
                  {sym}
                </span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            <strong>Zero-Based Budgeting:</strong> Another popular approach the
            calculator supports is zero-based budgeting, where your goal is to
            allocate every single dollar until your Income minus Expenses equals
            exactly zero. Every dollar is given a "job."
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Guide: How to Use the Calculator
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Calculate your Net Income",
                content:
                  "Look at your paystubs and enter your total take-home pay for the month. This is your income after taxes, 401(k) contributions, and health insurance premiums are deducted.",
              },
              {
                step: "2",
                title: "Input your Needs (Fixed)",
                content:
                  "Enter your essential, non-negotiable bills: rent/mortgage, utilities, car payments, insurance, and minimum debt payments. These should ideally total no more than 50% of your income.",
              },
              {
                step: "3",
                title: "Estimate your Wants (Variable)",
                content:
                  "Review last month's bank statements and estimate your spending on dining out, entertainment, subscriptions, and shopping. Be brutally honest here.",
              },
              {
                step: "4",
                title: "Input Savings and Extra Debt Payoff",
                content:
                  "Enter the amount of cash you are sending to your savings account, brokerage account, or any extra principal payments you are making toward credit card debt.",
              },
              {
                step: "5",
                title: "Analyze the Breakdown",
                content:
                  "Hit calculate. Look at the pie chart or percentages provided. Are your Needs consuming 70% of your income? Are you saving 0%? Use this data to adjust your lifestyle.",
              },
            ].map(({ step, title, content }) => (
              <div key={step} className="numbered-section">
                <span className="num">{step}</span>
                <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                    Step {step}: {title}
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WORKED EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Budgeting Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let's look at a few scenarios showing how different individuals
            allocate their income, highlighting both healthy and unhealthy cash
            flows.
          </p>

          {[
            {
              heading: "Scenario 1: The Perfect 50/30/20 Balance",
              rows: [
                ["Net Monthly Income", "$5,000"],
                ["Needs (Rent, Bills, Groceries)", "$2,500 (50%)"],
                ["Wants (Dining, Hobbies)", "$1,500 (30%)"],
                ["Savings/Debt Payoff", "$1,000 (20%)"],
                ["Net Cash Flow", "$0 (Zero-based perfect balance)"],
              ],
              note: "This user has a perfectly optimized budget. They enjoy $1,500 of guilt-free spending every month while simultaneously building wealth by saving $1,000.",
            },
            {
              heading: "Scenario 2: The 'House Poor' Budget",
              rows: [
                ["Net Monthly Income", "$6,000"],
                ["Needs (Expensive Mortgage, Cars)", "$4,500 (75%)"],
                ["Wants (Basic entertainment)", "$1,000 (16.6%)"],
                ["Savings/Debt Payoff", "$500 (8.4%)"],
                ["Net Cash Flow", "$0"],
              ],
              note: "Despite a strong income, this user is house poor. Because their fixed housing and auto expenses eat up 75% of their take-home pay, they have almost no room to save for emergencies or enjoy vacations.",
            },
            {
              heading: "Scenario 3: Operating at a Deficit",
              rows: [
                ["Net Monthly Income", "$4,000"],
                ["Needs (Rent, Bills)", "$2,200 (55%)"],
                ["Wants (Heavy Dining Out, Travel)", "$2,100 (52.5%)"],
                ["Savings/Debt Payoff", "$0 (0%)"],
                ["Net Cash Flow", "-$300 (Deficit)"],
              ],
              note: "This user is spending $300 more than they earn every single month. This $300 deficit is silently piling up on credit cards, generating high-interest debt that will eventually become unmanageable.",
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
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
                {note}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── RESULT INTERPRETATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Interpreting Your Budget Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you input your numbers, the calculator reveals the financial
            reality you are currently living in. Here is how to interpret those
            results to make actionable changes:
          </p>
          <ul className="space-y-4 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Negative Cash Flow:</strong> This is a financial
              emergency. You are living beyond your means and relying on debt to
              survive. You must immediately slash your "Wants" category, or
              aggressively seek to increase your income via a side hustle or
              raise.
            </li>
            <li>
              <strong>High "Needs" Percentage (&gt;60%):</strong> If your
              essential bills take up the vast majority of your paycheck, you
              are highly vulnerable to unexpected expenses. You may need to
              consider drastic measures, like downsizing your apartment or
              trading in a financed car for a cheaper used model.
            </li>
            <li>
              <strong>High "Wants", Low "Savings":</strong> This is the most
              common pitfall for high earners. If you are spending 45% of your
              income on lifestyle but only saving 5%, you are sacrificing your
              future retirement for present-day conveniences. Redirect funds
              from dining out into your investment accounts.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── REFERENCE TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The 50/30/20 Target by Income Level
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This table provides a quick reference for what a perfectly balanced
            50/30/20 budget looks like based on various monthly take-home pay
            levels.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Monthly Net Income</th>
                <th className="dark:text-slate-100">Needs Maximum (50%)</th>
                <th className="dark:text-slate-100">Wants Maximum (30%)</th>
                <th className="dark:text-slate-100">Savings Target (20%)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$3,000", "$1,500", "$900", "$600"],
                ["$4,000", "$2,000", "$1,200", "$800"],
                ["$6,000", "$3,000", "$1,800", "$1,200"],
                ["$8,000", "$4,000", "$2,400", "$1,600"],
                ["$10,000", "$5,000", "$3,000", "$2,000"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            If your income is lower, hitting the 20% savings target may be
            extremely difficult. Focus on keeping Needs as low as possible while
            working to increase top-line income.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL WORLD APPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Applications of a Budget
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A solid budget is the foundational tool for executing almost any
            major financial life goal:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>The Debt Snowball Strategy:</strong> A budget allows you
              to squeeze every extra dollar out of your "Wants" category to
              throw at your smallest debt, gaining momentum to become debt-free
              faster.
            </li>
            <li>
              <strong>Preparing for a Mortgage:</strong> Mortgage lenders look
              closely at your Debt-to-Income (DTI) ratio. A strict budget helps
              you aggressively pay down auto loans and credit cards to lower
              your DTI before applying for a home loan.
            </li>
            <li>
              <strong>Transitioning Careers:</strong> If you want to take a
              lower-paying job in a field you love, running a budget calculator
              beforehand will tell you exactly what lifestyle cuts are required
              to make the transition safely.
            </li>
            <li>
              <strong>Couples Finance:</strong> Combining finances can be highly
              stressful. Sitting down together with a budget calculator removes
              emotions from the discussion and relies on pure data to align both
              partners on shared goals.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES & ADVANTAGES & LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Using Gross Income",
                desc: "Always budget using your net income (take-home pay). Budgeting based on your pre-tax salary will result in massive overdrafts because you don't actually have that money.",
              },
              {
                title: "Forgetting Irregular Expenses",
                desc: "Annual car registrations, quarterly insurance premiums, and holiday gifts often break budgets. Divide these yearly costs by 12 and save for them monthly.",
              },
              {
                title: "Being Too Restrictive",
                desc: "Setting a $0 entertainment budget is like a crash diet—you will fail. You must allow yourself reasonable fun money to make the budget sustainable long-term.",
              },
              {
                title: "Not Tracking Actual Spending",
                desc: "Creating a budget on the 1st of the month is useless if you don't track your actual spending on the 30th to see if you stuck to the plan.",
              },
              {
                title: "Confusing Wants with Needs",
                desc: "Basic groceries are a need. Dining out at a steakhouse is a want. Basic internet is a need. Seven different streaming subscriptions are a want.",
              },
              {
                title: "Failing to Adjust",
                desc: "A budget is a living document. If your utility bill goes up or you get a raise, you must update the calculator to reflect your new reality.",
              },
              {
                title: "Ignoring the Emergency Fund",
                desc: "If you prioritize paying off low-interest debt over building an emergency fund, a single unexpected medical bill will force you right back into credit card debt.",
              },
              {
                title: "Giving Up After One Bad Month",
                desc: "Everyone overspends occasionally. If you blow the budget in July, don't abandon the system. Acknowledge it, adjust, and start fresh in August.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-sm"
              >
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-12 leading-snug">
            Advantages of Consistent Budgeting
          </h2>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100 mb-10">
            <li>
              Provides absolute clarity on where your hard-earned money is
              actually going.
            </li>
            <li>
              Eliminates the anxiety of wondering if you have enough money in
              your checking account to cover rent.
            </li>
            <li>
              Empowers you to spend guilt-free on your "Wants" because you know
              your savings goals are already met.
            </li>
            <li>
              Accelerates debt payoff by identifying wasted cash that can be
              redirected toward principal balances.
            </li>
            <li>
              Highlights subscription services or recurring expenses you forgot
              you were paying for.
            </li>
            <li>
              Aligns spouses and partners on a shared financial roadmap,
              reducing money-related arguments.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations to Keep in Mind
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Requires Discipline:</strong> A calculator only does the
              math; it cannot force you to stop swiping your credit card at the
              mall.
            </li>
            <li>
              <strong>Estimations Can Be Off:</strong> Variable expenses like
              gas and groceries fluctuate with inflation, meaning your budget
              needs constant tweaking.
            </li>
            <li>
              <strong>The 50/30/20 Rule Doesn't Fit All:</strong> If you live in
              an ultra-high-cost-of-living city like New York or San Francisco,
              keeping your housing/needs under 50% might be mathematically
              impossible.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is zero-based budgeting?",
                a: "Zero-based budgeting is a method where your Income minus your Expenses equals exactly zero. Every single dollar of your income is assigned a specific job before the month begins—whether that job is paying a bill, going into savings, or being spent on entertainment.",
              },
              {
                q: "Should I budget based on my gross pay or net pay?",
                a: "Always budget based on your net pay (take-home pay). Your gross pay includes taxes, Social Security, and other deductions that you never actually see in your bank account, so you cannot spend or save that money.",
              },
              {
                q: "What is the 50/30/20 rule?",
                a: "It is a budgeting framework that suggests allocating 50% of your take-home pay to Needs (rent, groceries, bills), 30% to Wants (dining, hobbies), and 20% to Savings and Debt Payoff (emergency fund, investing, extra debt payments).",
              },
              {
                q: "How do I budget for irregular expenses like car repairs or holidays?",
                a: "Create a 'sinking fund' category. Estimate the annual cost of the expense (e.g., $600 for Christmas gifts) and divide it by 12. Save that amount ($50) every single month so the money is waiting for you when the event arrives.",
              },
              {
                q: "What should I do if my expenses are higher than my income?",
                a: "You are operating at a deficit, which means you are accumulating debt. You must immediately pause all 'Wants' spending, cut non-essential subscriptions, and look for ways to increase your income (selling items, picking up a side hustle, or asking for a raise).",
              },
              {
                q: "Are minimum debt payments considered a Need or a Want?",
                a: "Minimum debt payments are absolutely a Need. If you fail to pay them, your credit score will tank and you will incur late fees. However, any extra money you throw at the debt to pay it off faster comes out of your 20% Savings/Debt Payoff category.",
              },
              {
                q: "How often should I review my budget?",
                a: "Beginners should review their budget weekly to ensure they are staying on track with variable spending like groceries. Once you are comfortable with the system, a monthly review on payday is usually sufficient.",
              },
              {
                q: "Is it okay to adjust the 50/30/20 rule?",
                a: "Absolutely. If you live in a very expensive city, your Needs might be 60%. If you are aggressively paying off debt, you might choose a 50/10/40 split. The rule is a starting template, not a strict law.",
              },
              {
                q: "What if I get a bonus or an unexpected tax refund?",
                a: "Do not treat it as free money for your 'Wants' category. The smartest move is to apply the 50/30/20 rule to the windfall, or, even better, allocate 100% of it toward your highest-interest debt or emergency fund.",
              },
              {
                q: "Does a budget mean I can't ever eat out or go on vacation?",
                a: "No! A budget actually gives you permission to do those things without guilt. By allocating 30% of your income to 'Wants', you can eat out and travel knowing that your bills are paid and your savings goals are fully funded.",
              },
              {
                q: "Should my 401(k) contributions be included in the 20% savings category?",
                a: "If the money is deducted from your paycheck before it hits your bank account (pre-tax), it is already accounted for. However, tracking it manually can be helpful to ensure you are hitting an overall 15-20% retirement savings rate.",
              },
              {
                q: "I tried budgeting and failed. What went wrong?",
                a: "Most people fail because they are too restrictive (giving themselves $0 for fun), they forget irregular annual expenses, or they don't actually track their spending throughout the month. Try again, but give yourself more grace and realistic numbers.",
              },
              {
                q: "How do I handle fluctuating income as a freelancer?",
                a: "Budgeting on variable income requires you to calculate your baseline 'Needs' and save a larger cash buffer. In high-earning months, aggressively fund the buffer. In low-earning months, pull from the buffer to cover the baseline.",
              },
              {
                q: "What is envelope budgeting?",
                a: "It is a physical budgeting system where you put cash for variable expenses (groceries, dining) into literal envelopes. When the cash in the envelope is gone, you stop spending in that category for the month. It physically prevents overspending.",
              },
              {
                q: "What is the very first thing I should fund in my budget?",
                a: "Before aggressively paying down debt or investing, your first priority should be funding a starter emergency fund of $1,000 to $2,000. This prevents you from relying on credit cards when the inevitable unexpected expense occurs.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Related Financial Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            A budget is just the foundation. Use these related tools to optimize
            the rest of your financial life.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Expense Tracker Calculator",
                desc: "A micro-level tool to help you categorize and add up every single receipt and transaction to see exactly what you spent this month.",
              },
              {
                name: "Debt-to-Income Calculator",
                desc: "Calculate the exact ratio of your fixed debt payments to your income, a critical metric for getting approved for a mortgage.",
              },
              {
                name: "Cost of Living Calculator",
                desc: "Thinking about moving? See how your 'Needs' category will have to adjust if you move to a more or less expensive city.",
              },
              {
                name: "Emergency Fund Calculator",
                desc: "Take the 'Needs' total from your budget and use this tool to calculate exactly how much cash you need to survive for 6 months.",
              },
              {
                name: "Savings Goal Calculator",
                desc: "Plug in the surplus cash identified by your budget to see exactly how many months it will take to reach your target savings goal.",
              },
            ].map((calc, i) => (
              <div
                key={i}
                className="bg-stone-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700 rounded-sm"
              >
                <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">
                  {calc.name}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {calc.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Financial success is rarely the result of a single massive windfall;
            it is built quietly in the margins of your monthly cash flow. If you
            do not tell your money where to go, you will always end the month
            wondering where it went.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Using a Budget Calculator removes the emotion and guesswork from
            managing your money. By forcing you to confront the hard data of
            your income versus your outflow, it empowers you to make intentional
            lifestyle choices. Frameworks like the 50/30/20 rule prove that you
            don't have to live a miserable, restrictive life to be financially
            responsible.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Take fifteen minutes today to gather your paystubs and bank
            statements. Plug your numbers into the calculator, identify your
            financial leaks, and start directing your hard-earned cash toward
            the goals that actually matter to you.
          </p>
        </section>
      </div>
    </article>
  );
}
