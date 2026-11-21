import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MeetingCostCalculatorArticle() {
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
          <span className="meta-tag">Business · Productivity & Efficiency</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Meeting Cost Calculator: Calculate Meeting Expenses
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for meeting efficiency and productivity
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You have a weekly team meeting with 8 attendees. Each attendee earns an average of $75 per hour. The meeting lasts one hour. The total cost is $600 ($75 × 8). Over 50 weeks, this recurring meeting costs $30,000 annually. If the meeting could be reduced to 30 minutes or eliminated, the savings would be significant.
          </p>
          <p className="mb-5">
            Meeting costs are often overlooked but represent a significant expense. The cost includes the hourly rate of all attendees multiplied by meeting duration. Understanding meeting costs helps evaluate whether meetings are worth the investment.
          </p>
          <p className="mb-5">
            But meeting value varies by purpose, participants, and outcomes. Some meetings are essential for collaboration and decision-making. Others are unproductive time sinks. Calculating meeting costs provides data to make informed decisions.
          </p>
          <p>
            The meeting cost calculator above helps you calculate meeting expenses, understand the cost of recurring meetings, and optimize meeting efficiency.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Meeting Cost Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Meeting cost is calculated by multiplying the number of attendees by their average hourly rate, then multiplying by meeting duration. For recurring meetings, multiply by frequency to get annual cost.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Meeting Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Meeting Cost = Attendees × Average Hourly Rate × Duration</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Attendees", "8 people"],
              ["Average Hourly Rate", "$75"],
              ["Duration", "1 hour"],
              ["Meeting Cost", "8 × $75 × 1 = $600"],
              ["Frequency", "Weekly (50 weeks)"],
              ["Annual Cost", "$600 × 50 = $30,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a one-hour weekly meeting costs $30,000 annually. This is the cost of a full-time employee. Understanding this cost helps evaluate whether the meeting delivers sufficient value.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COST COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Meeting Cost Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Meeting costs include more than just salaries. Understanding all cost components provides a complete picture of meeting expenses.
          </p>

          {[
            {
              heading: "Personnel Costs",
              rows: [
                ["Includes", "Salaries, benefits, overhead"],
                ["Calculation", "Hourly rate × attendees × duration"],
                ["Impact", "Primary cost component"],
              ],
              note: "Personnel costs are the largest meeting expense. Use fully loaded hourly rates including benefits and overhead. This provides accurate cost accounting for meeting decisions.",
            },
            {
              heading: "Opportunity Costs",
              rows: [
                ["Includes", "Value of alternative work"],
                ["Calculation", "Revenue or productivity lost"],
                ["Impact", "Often exceeds direct costs"],
              ],
              note: "Opportunity cost is the value of work not done during the meeting. For sales or revenue-generating roles, this can significantly exceed direct personnel costs. Consider opportunity cost in meeting decisions.",
            },
            {
              heading: "Preparation & Follow-up",
              rows: [
                ["Includes", "Meeting prep, notes, action items"],
                ["Calculation", "Additional time per attendee"],
                ["Impact", "Often overlooked but significant"],
              ],
              note: "Meetings require preparation and follow-up. Add 15-30 minutes per attendee for these activities. A one-hour meeting often consumes 90 minutes of actual time when including preparation and follow-up.",
            },
          ].map((component: { heading: string; rows: string[][]; note: string }) => (
            <div key={component.heading} className="state-card">
              <h3>{component.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {component.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{component.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── MEETING EFFICIENCY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Improving Meeting Efficiency
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing meeting costs requires improving efficiency or eliminating unnecessary meetings. Here are proven strategies to optimize meeting value.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Question meeting necessity",
                body: "Before scheduling, ask if the meeting is necessary. Can the goal be achieved via email, chat, or document collaboration? Cancel unnecessary meetings. Every meeting eliminated is direct cost savings.",
              },
              {
                n: "2",
                title: "Reduce attendee list",
                body: "Only invite essential participants. Each additional attendee increases cost. Use the principle of least necessary people. Send summaries to non-essential stakeholders instead of inviting them.",
              },
              {
                n: "3",
                title: "Shorten meeting duration",
                body: "Default to shorter meetings. Can a 60-minute meeting be 30 minutes? Can 30 minutes be 15? Shorter meetings force focus and reduce costs proportionally.",
              },
              {
                n: "4",
                title: "Use standing meetings strategically",
                body: "Standing meetings (recurring) accumulate significant costs. Review standing meetings quarterly. Cancel those that no longer provide value. Rotate attendees to reduce per-meeting costs.",
              },
              {
                n: "5",
                title: "Improve meeting structure",
                body: "Use agendas, time-box discussions, and clear objectives. Well-structured meetings are more efficient and productive. Start on time, end on time, and stay focused on the agenda.",
              },
              {
                n: "6",
                title: "Consider asynchronous alternatives",
                body: "Many meetings can be replaced with async communication. Use collaborative documents, recorded videos, or project management tools. Async communication reduces costs and increases flexibility.",
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

        {/* ── COST BY ROLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Meeting Cost by Role
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Meeting costs vary significantly by attendee role due to different compensation levels. Understanding cost by role helps optimize attendee selection.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Role Level</th>
                <th className="dark:text-slate-100">Typical Hourly Rate</th>
                <th className="dark:text-slate-100">1-Hour Meeting Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Entry Level", "$25-40", "$25-40"],
                ["Mid-Level", "$50-75", "$50-75"],
                ["Senior/Manager", "$75-125", "$75-125"],
                ["Director/VP", "$125-200", "$125-200"],
                ["Executive", "$200-400+", "$200-400+"],
              ].map(([role, rate, cost]) => (
                <tr key={role}>
                  <td className="dark:text-slate-100">{role}</td>
                  <td className="dark:text-slate-100">{rate}</td>
                  <td className="dark:text-slate-100">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Executive meetings are the most expensive. A one-hour meeting with 5 executives at $250/hour costs $1,250. Ensure executive meetings have clear purpose and essential attendees only.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Meeting Cost Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many organizations underestimate meeting costs or fail to optimize meeting efficiency. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not calculating meeting costs",
                body: "Most organizations don't track meeting costs. Without measurement, optimization is impossible. Calculate costs for recurring meetings to understand the true expense. Data drives improvement.",
              },
              {
                n: "2",
                title: "Over-inviting attendees",
                body: "Inviting too many people increases costs and reduces efficiency. Use the principle of least necessary people. Send summaries to stakeholders instead of inviting them to every meeting.",
              },
              {
                n: "3",
                title: "Defaulting to 60-minute meetings",
                body: "Calendar defaults to 60 minutes, but most meetings can be shorter. Default to 30 or 45 minutes. Shorter meetings force focus and reduce costs proportionally.",
              },
              {
                n: "4",
                title: "Not reviewing standing meetings",
                body: "Standing meetings accumulate costs on autopilot. Review quarterly and cancel those that no longer provide value. Even reducing frequency from weekly to biweekly saves 50%.",
              },
              {
                n: "5",
                title: "Ignoring opportunity cost",
                body: "The cost of meetings includes the value of work not done. For revenue-generating roles, opportunity cost can exceed direct costs. Consider what attendees could accomplish instead.",
              },
              {
                n: "6",
                title: "Lack of meeting discipline",
                body: "Late starts, lack of agendas, and unfocused discussions waste time. Implement meeting discipline: agendas, time-boxes, and clear objectives. Discipline improves efficiency and reduces costs.",
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
            Practical Tips for Meeting Cost Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate meeting costs</>],
              [<><strong>Question necessity</strong> — is this meeting needed?</>],
              [<><strong>Minimize attendees</strong> — essential people only</>],
              [<><strong>Shorten duration</strong> — default to 30 minutes</>],
              [<><strong>Review standing meetings</strong> — quarterly review</>],
              [<><strong>Use agendas</strong> — clear objectives and time-boxes</>],
              [<><strong>Consider async</strong> — alternatives to meetings</>],
              [<><strong>Track costs</strong> — measure to improve</>],
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
                q: "How do I calculate meeting cost?",
                a: "Meeting Cost = Attendees × Average Hourly Rate × Duration. Calculate the average hourly rate of attendees (including benefits and overhead), multiply by number of attendees, then multiply by meeting duration in hours.",
              },
              {
                q: "What is a typical meeting cost?",
                a: "A one-hour meeting with 8 mid-level employees earning $75/hour costs $600. With executives, costs can exceed $1,000 per hour. Calculate your specific costs using actual compensation data.",
              },
              {
                q: "How do I calculate hourly rate from salary?",
                a: "Hourly Rate = Annual Salary / (52 weeks × 40 hours). For a $100,000 salary: $100,000 / 2,080 = $48/hour. Add 25-30% for benefits and overhead to get fully loaded rate of $60-65/hour.",
              },
              {
                q: "What is the cost of recurring meetings?",
                a: "Annual Cost = Meeting Cost × Frequency. A $600 weekly meeting costs $600 × 50 = $30,000 annually. This is equivalent to a full-time employee's salary. Recurring meetings accumulate significant costs.",
              },
              {
                q: "How can I reduce meeting costs?",
                a: "Reduce attendee count, shorten duration, eliminate unnecessary meetings, use async alternatives, improve meeting discipline with agendas, and review standing meetings regularly. Small changes compound significantly.",
              },
              {
                q: "Should I include preparation time in meeting cost?",
                a: "Yes, preparation and follow-up time are real costs. Add 15-30 minutes per attendee for these activities. A one-hour meeting often consumes 90 minutes of actual time when including preparation and follow-up.",
              },
              {
                q: "What is opportunity cost of meetings?",
                a: "Opportunity cost is the value of work not done during the meeting. For sales or revenue-generating roles, this can exceed direct personnel costs. Consider what attendees could accomplish instead of attending.",
              },
              {
                q: "How many attendees should a meeting have?",
                a: "Follow Amazon's two-pizza rule: no more attendees than can be fed by two pizzas (6-8 people). Smaller meetings are more efficient and cost less. Only invite essential participants.",
              },
              {
                q: "How often should I review meeting costs?",
                a: "Review meeting costs quarterly for recurring meetings and monthly for high-cost executive meetings. Track trends and identify opportunities to reduce costs through optimization or elimination.",
              },
              {
                q: "What is the ROI of a meeting?",
                a: "Meeting ROI = (Value Delivered - Meeting Cost) / Meeting Cost. Calculate the value of decisions made, problems solved, or alignment achieved. If ROI is negative, consider alternatives to the meeting format.",
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
            Meeting costs represent a significant but often hidden expense. Calculating meeting costs provides the data needed to optimize meeting efficiency and eliminate unnecessary meetings.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate meeting costs and understand the expense of recurring meetings. But the real value comes from using this information to question meeting necessity, optimize efficiency, and reduce wasted time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're managing a small team or a large organization, meeting cost calculation reveals optimization opportunities. Calculate precisely, optimize continuously, and reclaim productive time.
          </p>
          <div className="pull-quote mt-8">
            Time is money, especially in meetings. Calculate the cost, question the value, and spend time where it matters most.
          </div>
        </section>

      </div>
    </article>
  );
}
