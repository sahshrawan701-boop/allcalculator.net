import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ExpenseTrackerArticle() {
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
          <span className="meta-tag">Personal Finance · Budgeting</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Expense Tracker Calculator: Take Control of Your Spending
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for smarter budgeting
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You earn $5,000 a month. You know you should be saving more, but every time you check your bank account, the balance
            is lower than you expected. Where is the money going? The answer is in the details — the daily coffee, the
            subscription you forgot about, the impulse purchases that add up faster than you realize.
          </p>
          <p className="mb-5">
            Expense tracking is the foundation of financial awareness. You can&apos;t optimize what you don&apos;t measure. The expense
            tracker calculator above gives you a clear picture of where your money goes each month, broken down by category.
            But understanding the patterns behind the numbers is what actually helps you change your spending behavior.
          </p>
          <p className="mb-5">
            Most people underestimate their spending by 20–30%. They think they&apos;re frugal, but the data tells a different story.
            Expense tracking reveals the truth — and the truth is the first step toward financial freedom.
          </p>
          <p>
            Your spending habits aren&apos't a mystery — they're a pattern. Once you see the pattern, you can change it. Let&apos;s break
            down exactly how to track expenses effectively and what to do with the information once you have it.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHAT IS EXPENSE TRACKING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is Expense Tracking?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Expense tracking is the systematic recording of every dollar you spend. It&apos;s not about budgeting — that comes later.
            It&apos;s about awareness. Knowing exactly where your money goes is the prerequisite for making informed decisions
            about how to use it differently.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Effective expense tracking captures not just how much you spend, but what you spend it on and when. This data reveals
            patterns: the $200 you spend on dining out each month, the $50 in subscription services you barely use, the
            seasonal spikes in spending that catch you off guard every year.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            The expense tracker calculator above simplifies this process by categorizing your spending into common buckets:
            housing, utilities, food, transportation, entertainment, shopping, healthcare, and other. These categories align
            with standard budgeting frameworks, making it easy to translate tracking data into actionable budgets.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── WHY IT MATTERS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Why Expense Tracking Matters
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Most people track expenses because they want to save money. But the benefits go far beyond that. Expense tracking
            changes your relationship with money in fundamental ways.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what expense tracking actually does for you:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Reveals spending patterns", "You discover where your money actually goes, not where you think it goes"],
              ["Identifies waste", "Subscriptions, duplicate services, and unnecessary purchases become obvious"],
              ["Enables realistic budgeting", "Budgets based on actual spending data are achievable, not aspirational"],
              ["Supports goal achievement", "You can redirect spending from low-value areas to high-priority goals"],
              ["Reduces financial stress", "Knowing where you stand eliminates anxiety about money"],
              ["Improves decision-making", "Every spending decision becomes intentional rather than automatic"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW TO TRACK ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Track Expenses Effectively
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            There&apos;s no single right way to track expenses, but there are wrong ways. The key is consistency and completeness.
            Here&apos;s a practical approach that works for most people.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Choose your method",
                body: "Apps, spreadsheets, or pen and paper — pick what you'll actually use consistently. The best expense tracking system is the one you stick with. Apps automate data collection but cost money. Spreadsheets are free but require manual entry. Pen and paper is simple but harder to analyze.",
              },
              {
                n: "2",
                title: "Capture every expense",
                body: "Every dollar counts. The $3 coffee, the $12 parking fee, the $0.99 app purchase — these small expenses add up to hundreds or thousands annually. Missing them distorts your picture and defeats the purpose of tracking.",
              },
              {
                n: "3",
                title: "Categorize consistently",
                body: "Use the same categories every month so you can compare trends over time. The calculator above uses standard categories that align with common budgeting frameworks. Stick to these or create your own, but be consistent.",
              },
              {
                n: "4",
                title: "Track daily or weekly",
                body: "The longer you wait to record expenses, the more you'll forget. Daily is ideal, weekly is acceptable. Monthly is too infrequent — you'll miss too much and the data won't be accurate enough to be useful.",
              },
              {
                n: "5",
                title: "Review monthly",
                body: "At the end of each month, review your totals by category. Look for surprises, trends, and opportunities. Compare this month to last month. Are you spending more in some areas? Less in others? Why?",
              },
              {
                n: "6",
                title: "Adjust your behavior",
                body: "Tracking without action is pointless. Use the insights to make changes. Cancel unused subscriptions. Reduce dining out. Shop smarter. The goal isn't to track — it's to improve.",
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

        {/* ── SPENDING CATEGORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Expense Categories
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The expense tracker calculator uses eight standard categories. Understanding what belongs in each category — and what
            doesn't — is essential for accurate tracking.
          </p>

          {[
            {
              heading: "Housing",
              rows: [
                ["Includes", "Rent/mortgage, property taxes, HOA fees, home insurance"],
                ["Typical range", "25–35% of income"],
                ["Tips", "If over 30%, consider downsizing or getting a roommate"],
              ],
              note: "Housing is typically your largest expense. The 30% rule is a common guideline — spend no more than 30% of gross income on housing. In high-cost areas, this may not be realistic, but it's still a useful benchmark.",
            },
            {
              heading: "Utilities",
              rows: [
                ["Includes", "Electricity, gas, water, internet, phone"],
                ["Typical range", "5–10% of income"],
                ["Tips", "Compare rates annually and negotiate when possible"],
              ],
              note: "Utilities are relatively fixed but not entirely. You can reduce electricity usage, negotiate internet rates, and switch phone plans. Small savings here add up over time.",
            },
            {
              heading: "Food",
              rows: [
                ["Includes", "Groceries, dining out, food delivery"],
                ["Typical range", "10–15% of income"],
                ["Tips", "Cook at home more, meal prep, limit dining out"],
              ],
              note: "Food is one of the most flexible categories. Dining out is typically 2–3x more expensive than cooking at home. Tracking this category often reveals the biggest opportunity for savings.",
            },
            {
              heading: "Transportation",
              rows: [
                ["Includes", "Car payment, gas, insurance, maintenance, parking, public transit"],
                ["Typical range", "10–15% of income"],
                ["Tips", "Consider carpooling, public transit, or a more fuel-efficient vehicle"],
              ],
              note: "Transportation costs can vary dramatically based on where you live and how you commute. If you're spending more than 15% of income here, explore alternatives like carpooling or public transit.",
            },
            {
              heading: "Entertainment",
              rows: [
                ["Includes", "Streaming services, movies, concerts, hobbies, games"],
                ["Typical range", "5–10% of income"],
                ["Tips", "Audit subscriptions regularly, look for free alternatives"],
              ],
              note: "Entertainment is pure discretionary spending. It's the first place to look when cutting expenses, but also important for quality of life. The goal is optimization, not elimination.",
            },
            {
              heading: "Shopping",
              rows: [
                ["Includes", "Clothing, electronics, home goods, personal care"],
                ["Typical range", "5–10% of income"],
                ["Tips", "Implement a 24-hour rule before purchases, buy secondhand when possible"],
              ],
              note: "Shopping includes both necessities and luxuries. The key is distinguishing between the two. Track this category separately to see how much is essential versus discretionary.",
            },
            {
              heading: "Healthcare",
              rows: [
                ["Includes", "Insurance premiums, copays, prescriptions, out-of-pocket costs"],
                ["Typical range", "5–10% of income"],
                ["Tips", "Use in-network providers, compare prescription prices, use HSAs if available"],
              ],
              note: "Healthcare costs are largely fixed but not entirely. You can reduce costs by using generic medications, staying in-network, and taking advantage of preventive care that's often covered at 100%.",
            },
            {
              heading: "Other",
              rows: [
                ["Includes", "Childcare, education, gifts, charitable giving, miscellaneous"],
                ["Typical range", "5–15% of income"],
                ["Tips", "Review this category monthly to ensure nothing is being miscategorized"],
              ],
              note: "The 'other' category is a catch-all for expenses that don't fit elsewhere. It's important to review this regularly — if it's growing too large, you may need to create additional categories.",
            },
          ].map((category: { heading: string; rows: string[][]; note: string }) => (
            <div key={category.heading} className="state-card">
              <h3>{category.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {category.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{category.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── SPENDING RULES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Budgeting Rules of Thumb
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            While everyone's situation is different, there are some widely accepted guidelines for healthy spending. Use these
            as benchmarks, not rigid rules — adjust based on your income, location, and priorities.
          </p>

          {[
            {
              heading: "The 50/30/20 Rule",
              rows: [
                ["Needs (50%)", "Housing, utilities, food, transportation, insurance, minimum debt payments"],
                ["Wants (30%)", "Dining out, entertainment, shopping, hobbies, travel"],
                ["Savings (20%)", "Emergency fund, retirement, debt repayment above minimums, investments"],
              ],
              note: "The 50/30/20 rule is the most popular budgeting framework. It's simple to understand and implement. If your spending doesn't align with these percentages, use it as a target to work toward gradually.",
            },
            {
              heading: "The 30% Housing Rule",
              rows: [
                ["Guideline", "Spend no more than 30% of gross income on housing"],
                ["Includes", "Rent/mortgage, property taxes, insurance, HOA fees"],
                ["Reality check", "In high-cost cities, many people exceed this — but aim to stay under 35%"],
              ],
              note: "Housing is typically the largest expense, so keeping it under control is crucial. If you're spending more than 30% on housing, you'll need to cut back in other areas or increase your income to maintain financial stability.",
            },
            {
              heading: "The 10% Savings Rule",
              rows: [
                ["Minimum", "Save at least 10% of gross income"],
                ["Ideal", "Save 20% or more if possible"],
                ["Priority", "Build emergency fund first, then focus on retirement"],
              ],
              note: "Saving 10% is the minimum for long-term financial health. If you're not saving anything, start with 5% and work up. If you can save 20% or more, you'll reach financial independence significantly faster.",
            },
          ].map((rule: { heading: string; rows: string[][]; note: string }) => (
            <div key={rule.heading} className="state-card">
              <h3>{rule.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rule.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{rule.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── BENEFITS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Benefits of Expense Tracking
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Expense tracking isn't just about saving money — it's about gaining control, reducing stress, and building a life
            aligned with your values. Here's what consistent tracking actually delivers.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increased savings",
                body: "When you see where your money goes, you naturally spend less on low-value items. Most people save 10–20% more simply by tracking expenses, without feeling deprived.",
              },
              {
                n: "2",
                title: "Reduced financial stress",
                body: "Not knowing where your money goes creates anxiety. Tracking eliminates the mystery and gives you confidence in your financial decisions. You stop wondering and start planning.",
              },
              {
                n: "3",
                title: "Faster goal achievement",
                body: "Whether you're saving for a down payment, building an emergency fund, or planning retirement, expense tracking shows you exactly how to redirect money toward your goals.",
              },
              {
                n: "4",
                title: "Better spending alignment",
                body: "Tracking reveals whether your spending matches your values. You might discover you're spending hundreds on things that don't actually make you happy — and redirect that money to what does.",
              },
              {
                n: "5",
                title: "Early problem detection",
                body: "Small spending problems compound into big financial issues. Tracking catches problems early — a creeping subscription habit, rising dining out costs, or category creep before it becomes serious.",
              },
              {
                n: "6",
                title: "Informed decision-making",
                body: "Every spending decision becomes intentional when you know the impact. Should you buy that $200 jacket? Tracking tells you it's 40% of your monthly entertainment budget — and helps you decide if it's worth it.",
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
            Common Expense Tracking Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even well-intentioned people make mistakes with expense tracking. Here&apos;s what to watch out for.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Tracking only big expenses",
                body: "Small expenses add up. The $3 coffee, $5 parking fee, and $12 lunch might seem insignificant individually, but they can total hundreds monthly. Track everything, no matter how small.",
              },
              {
                n: "2",
                title: "Inconsistent categorization",
                body: "If you categorize dining out as 'food' one month and 'entertainment' the next, you can't compare trends. Use consistent categories and make decisions about where borderline items belong.",
              },
              {
                n: "3",
                title: "Forgetting cash expenses",
                body: "Cash spending is easy to forget because there's no digital record. Keep receipts or record cash spending immediately. Even small cash purchases add up over time.",
              },
              {
                n: "4",
                title: "Tracking but not acting",
                body: "Data without action is useless. Review your spending monthly and make at least one change based on what you find. Cancel one subscription, reduce one category, or redirect money to savings.",
              },
              {
                n: "5",
                title: "Making it too complicated",
                body: "If your tracking system is too complex, you won't stick with it. Start simple. You can always add complexity later. The perfect system is one you actually use consistently.",
              },
              {
                n: "6",
                title: "Giving up after a bad month",
                body: "Everyone has months where spending is higher than expected — holidays, vacations, emergencies. Don't abandon tracking because of one bad month. Use it as data to plan better next time.",
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
            Practical Tips for Successful Expense Tracking
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Track daily, review weekly</strong> — recording expenses daily prevents forgetting, weekly reviews keep you accountable</>],
              [<><strong>Use the calculator above monthly</strong> — input your actual spending to see your breakdown and identify trends</>],
              [<><strong>Automate where possible</strong> — bank feeds and expense apps can reduce manual entry, but verify accuracy</>],
              [<><strong>Set category limits</strong> — once you know your typical spending, set targets for each category to stay on track</>],
              [<><strong>Review subscriptions quarterly</strong> — unused subscriptions are silent budget killers, audit them regularly</>],
              [<><strong>Implement a waiting period</strong> — wait 24–48 hours before non-essential purchases over $50 to reduce impulse spending</>],
              [<><strong>Track with a partner</strong> — if you share finances, track together for accountability and shared goals</>],
              [<><strong>Celebrate progress</strong> — when you reduce spending in a category or hit a savings goal, acknowledge the win</>],
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
                q: "How often should I track my expenses?",
                a: "Daily recording is ideal to prevent forgetting expenses. Weekly reviews help you stay on track. Monthly analysis reveals trends and patterns. The more frequently you engage with your spending data, the more useful it becomes.",
              },
              {
                q: "What's the best way to track expenses?",
                a: "The best method is the one you'll actually use consistently. Apps like Mint, YNAB, or PocketGuard automate tracking but cost money. Spreadsheets are free but require manual entry. Pen and paper is simple but harder to analyze. Start with whatever feels sustainable.",
              },
              {
                q: "Should I track every single expense?",
                a: "Yes — small expenses add up. The $3 coffee, $5 parking fee, and $12 lunch might seem insignificant individually, but they can total hundreds monthly. Tracking everything gives you an accurate picture and prevents surprises.",
              },
              {
                q: "How much should I spend on each category?",
                a: "The 50/30/20 rule is a good starting point: 50% for needs, 30% for wants, 20% for savings. Housing should ideally be under 30% of income. But these are guidelines, not rules — adjust based on your location, income, and priorities.",
              },
              {
                q: "What if my spending doesn't match budgeting rules?",
                a: "Budgeting rules are guidelines, not laws. If you live in a high-cost city, housing might naturally exceed 30%. If you have a long commute, transportation might be higher. Use rules as targets to work toward, but don't feel guilty if your reality differs.",
              },
              {
                q: "How long does it take to see results from expense tracking?",
                a: "Most people see immediate awareness benefits within the first week. Savings typically increase 10–20% within the first month as you naturally cut low-value spending. Significant financial changes compound over 3–6 months of consistent tracking.",
              },
              {
                q: "Should I include credit card payments in expense tracking?",
                a: "Track the actual purchases, not the credit card payment. If you buy groceries on a credit card, track it as a food expense. The credit card payment itself is just transferring money, not a new expense. This prevents double-counting.",
              },
              {
                q: "How do I handle irregular expenses?",
                a: "Average them over time. If you spend $600 annually on car insurance, divide by 12 and budget $50/month. This smooths irregular expenses and prevents them from derailing your budget when they occur.",
              },
              {
                q: "What if I share expenses with a partner?",
                a: "Track shared expenses together or agree on a system that works for both. Some couples track everything jointly, others track individually and split certain categories. The key is transparency and agreement on the approach.",
              },
              {
                q: "How do I reduce spending in high categories?",
                a: "Start with awareness — knowing you spend $500/month on dining out is the first step. Then look for alternatives: cook at home more, limit dining out to special occasions, find cheaper restaurants. Small changes add up over time.",
              },
              {
                q: "Should I track savings as an expense?",
                a: "No — savings is what's left after expenses. Track your spending, then compare it to your income. The difference is what you're saving (or not saving). This approach makes savings the priority rather than an afterthought.",
              },
              {
                q: "What if I stop tracking for a while?",
                a: "Don't abandon tracking because of a lapse. Just start again. The data from partial tracking is still useful. Consistency matters more than perfection. Even tracking 80% of expenses is better than tracking none.",
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
            Expense tracking is the foundation of financial health. You can&apos;t optimize what you don&apos;t measure, and you can&apos;t
            improve what you don&apos;t understand. The simple act of recording your spending changes your relationship with money.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page gives you a clear picture of where your money goes. But the real value comes
            from what you do with that information. Use it to identify waste, set realistic goals, and make intentional
            decisions about every dollar you spend.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Start today. Track every expense for one month. Review the data. Make one change. Then repeat. Small, consistent
            actions compound into significant results over time. Your future self will thank you for the awareness you build today.
          </p>
          <div className="pull-quote mt-8">
            You don't need to earn more to build wealth — you need to spend smarter. Expense tracking shows you how.
          </div>
        </section>

      </div>
    </article>
  );
}
