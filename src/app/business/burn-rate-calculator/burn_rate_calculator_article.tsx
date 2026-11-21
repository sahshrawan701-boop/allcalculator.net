import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BurnRateArticle() {
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
          <span className="meta-tag">Business · Startup Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Burn Rate Calculator: Track Your Startup's Cash Flow
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for startups and growing businesses
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your startup has $500,000 in the bank. Monthly expenses total $50,000. At this burn rate, you have 10 months of runway — 10 months to achieve profitability, raise more funding, or face shutdown. Every dollar spent reduces your runway. Every dollar saved extends your survival time.
          </p>
          <p className="mb-5">
            Burn rate is the rate at which a company spends its cash reserves. It's a critical metric for startups and growing businesses, directly impacting runway, fundraising timing, and survival. Understanding and managing burn rate is essential for sustainable growth.
          </p>
          <p className="mb-5">
            But burn rate isn't just about survival — it's about strategic spending. A high burn rate might indicate aggressive growth investment, while a low burn rate might signal conservative operations. The key is understanding whether your burn rate aligns with your business strategy and runway goals.
          </p>
          <p>
            The burn rate calculator above helps you track monthly expenses, calculate runway, and plan for fundraising or profitability. It provides the clarity needed to make informed financial decisions and extend your startup's lifespan.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Burn Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Burn rate is calculated by dividing total monthly expenses by the number of months. It represents the average amount of cash your business spends each month. Runway is calculated by dividing your cash reserves by your burn rate.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Burn Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Burn Rate = Total Monthly Expenses</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">
            Runway Formula:
          </p>
          <div className="formula-block">
            <pre>Runway (months) = Cash Reserves / Burn Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Cash Reserves", "$500,000"],
              ["Monthly Expenses", "$50,000"],
              ["Burn Rate", "$50,000 per month"],
              ["Runway", "$500,000 / $50,000 = 10 months"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you have 10 months of runway. If you reduce monthly expenses to $40,000, runway extends to 12.5 months. If you increase to $60,000, runway drops to 8.3 months. Small changes in burn rate significantly impact survival time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TYPES OF BURN RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Gross Burn Rate vs Net Burn Rate
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding the difference between gross and net burn rate is essential for accurate financial planning. Each metric provides different insights into your financial health.
          </p>

          <table className="styled-table mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Metric</th>
                <th className="dark:text-slate-100">Definition</th>
                <th className="dark:text-slate-100">When to Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Gross Burn Rate", "Total monthly expenses including all costs", "Understanding total cash outflow regardless of revenue"],
                ["Net Burn Rate", "Monthly expenses minus monthly revenue", "Understanding actual cash depletion after accounting for income"],
              ].map(([metric, definition, when]) => (
                <tr key={metric}>
                  <td className="dark:text-slate-100">{metric}</td>
                  <td className="dark:text-slate-100">{definition}</td>
                  <td className="dark:text-slate-100">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Gross burn rate shows your total spending, which is useful for understanding operational scale. Net burn rate shows actual cash depletion, which is more relevant for runway calculation. Use both metrics for complete financial visibility.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MANAGING BURN RATE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Manage and Reduce Burn Rate
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Managing burn rate is about balancing growth investment with financial sustainability. Here's how to optimize your spending without stifling growth.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Audit all expenses regularly",
                body: "Review monthly expenses line by line. Identify non-essential spending, negotiate better rates with vendors, and eliminate redundant services. Regular audits prevent expense creep and ensure every dollar serves a purpose.",
              },
              {
                n: "2",
                title: "Prioritize revenue-generating activities",
                body: "Focus spending on activities that directly drive revenue — sales, marketing, product development. Cut or defer expenses that don't contribute to growth. This ensures your burn rate fuels progress, not just operations.",
              },
              {
                n: "3",
                title: "Optimize staffing costs",
                body: "Staffing is often the largest expense. Consider contractors instead of full-time hires for flexible needs. Implement performance-based compensation. Ensure each role directly contributes to business objectives.",
              },
              {
                n: "4",
                title: "Leverage technology and automation",
                body: "Invest in tools that automate repetitive tasks and improve efficiency. While this requires upfront spending, it reduces long-term labor costs and scales without proportional expense increases.",
              },
              {
                n: "5",
                title: "Negotiate with suppliers and vendors",
                body: "Regularly review contracts and negotiate better terms. Bulk purchasing, longer-term commitments, and competitive bidding can reduce costs. Small savings across multiple vendors add up significantly.",
              },
              {
                n: "6",
                title: "Implement spending controls",
                body: "Set approval thresholds for expenses, require justification for large purchases, and implement budget controls. These measures prevent unnecessary spending and ensure alignment with strategic priorities.",
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

        {/* ── RUNWAY PLANNING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Runway Planning and Fundraising
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Runway is the amount of time your business can operate before running out of cash. Planning runway effectively is critical for fundraising timing and business continuity.
          </p>

          {[
            {
              heading: "Healthy Runway (12+ months)",
              rows: [
                ["Status", "Comfortable"],
                ["Fundraising", "Can wait for optimal terms"],
                ["Strategy", "Focus on growth and optimization"],
              ],
              note: "With 12+ months of runway, you have time to improve metrics, build traction, and negotiate from strength. Use this time strategically to increase valuation before fundraising.",
            },
            {
              heading: "Moderate Runway (6-12 months)",
              rows: [
                ["Status", "Adequate but planning needed"],
                ["Fundraising", "Start preparation, begin outreach"],
                ["Strategy", "Balance growth with cost control"],
              ],
              note: "Six to twelve months provides enough runway to raise funding but requires active preparation. Start building investor relationships, refining your pitch, and preparing financial projections.",
            },
            {
              heading: "Critical Runway (3-6 months)",
              rows: [
                ["Status", "Urgent action required"],
                ["Fundraising", "Immediate priority"],
                ["Strategy", "Aggressive cost reduction, rapid fundraising"],
              ],
              note: "Less than six months is critical. Immediately cut non-essential spending, accelerate fundraising efforts, and prepare contingency plans. Investors may perceive urgency as weakness, affecting terms.",
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

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Burn Rate Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced founders make mistakes with burn rate management that jeopardize their startups. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Ignoring burn rate until it's too late",
                body: "Many startups don't track burn rate until cash runs low. Monitor burn rate monthly and project runway continuously. Early awareness allows proactive adjustment rather than crisis management.",
              },
              {
                n: "2",
                title: "Confusing growth with spending",
                body: "High burn rate doesn't guarantee growth. Ensure spending directly contributes to measurable progress. Track ROI on major expenses and cut spending that doesn't produce results.",
              },
              {
                n: "3",
                title: "Overestimating revenue projections",
                body: "Optimistic revenue forecasts lead to underestimated burn rate. Use conservative revenue projections and plan for delays. It's better to be pleasantly surprised than caught short.",
              },
              {
                n: "4",
                title: "Hiring too fast",
                body: "Rapid hiring accelerates burn rate significantly. Hire only when necessary and ensure each new hire has clear ROI. Consider contractors or part-time roles for flexibility.",
              },
              {
                n: "5",
                title: "Neglecting variable costs",
                body: "Fixed costs are easy to track, but variable costs scale with growth. Account for how costs will increase as you grow. Plan for scaling expenses in runway calculations.",
              },
              {
                n: "6",
                title: "Starting fundraising too late",
                body: "Fundraising takes longer than expected. Start when you have 9-12 months of runway, not 3-6. Rushed fundraising leads to poor terms and reduced valuation.",
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
            Practical Tips for Burn Rate Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track monthly burn rate and runway</>],
              [<><strong>Monitor both gross and net burn</strong> — understand total spending and cash depletion</>],
              [<><strong>Review expenses monthly</strong> — identify and eliminate unnecessary spending</>],
              [<><strong>Plan fundraising early</strong> — start when you have 9-12 months of runway</>],
              [<><strong>Build contingency reserves</strong> — maintain buffer for unexpected expenses</>],
              [<><strong>Track ROI on spending</strong> — ensure expenses drive measurable results</>],
              [<><strong>Optimize staffing costs</strong> — consider contractors and performance-based pay</>],
              [<><strong>Negotiate with vendors</strong> — regularly review and renegotiate contracts</>],
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
                q: "How do I calculate burn rate?",
                a: "Burn rate is your total monthly expenses. Simply sum all monthly costs including salaries, rent, marketing, software, and other operating expenses. The calculator above automates this calculation and shows your runway based on current cash reserves.",
              },
              {
                q: "What is the difference between gross and net burn rate?",
                a: "Gross burn rate is total monthly expenses. Net burn rate is monthly expenses minus monthly revenue. Gross burn shows total spending, while net burn shows actual cash depletion. Use net burn for runway calculation when you have revenue.",
              },
              {
                q: "How much runway should a startup have?",
                a: "Aim for 12-18 months of runway between funding rounds. This gives you time to improve metrics, build traction, and negotiate from strength. Less than 6 months is critical and requires immediate action.",
              },
              {
                q: "When should I start fundraising?",
                a: "Start fundraising when you have 9-12 months of runway. Fundraising typically takes 3-6 months, and you want to avoid raising from a position of weakness. Starting early gives you leverage and better terms.",
              },
              {
                q: "What is a healthy burn rate?",
                a: "There's no universal healthy burn rate — it depends on your stage, industry, and growth strategy. The key is ensuring your burn rate aligns with your runway goals and produces measurable progress toward profitability or next funding.",
              },
              {
                q: "How can I reduce my burn rate?",
                a: "Audit expenses regularly, cut non-essential spending, optimize staffing costs, negotiate with vendors, and leverage automation. Focus spending on revenue-generating activities and eliminate expenses that don't drive growth.",
              },
              {
                q: "Should I prioritize growth or low burn rate?",
                a: "This depends on your strategy and runway. With ample runway, prioritize growth investment. With limited runway, prioritize extending runway through cost control. The best approach balances both — growth that improves unit economics.",
              },
              {
                q: "How does burn rate affect valuation?",
                a: "Higher burn rates can reduce valuation if they don't produce proportional growth. Investors prefer efficient growth — high growth with moderate burn. Demonstrate that your spending produces measurable progress and improved metrics.",
              },
              {
                q: "What expenses should I include in burn rate?",
                a: "Include all operating expenses: salaries, rent, marketing, software, insurance, legal, accounting, and any other recurring costs. Exclude one-time expenses like equipment purchases unless they're recurring. Consistency is key for accurate tracking.",
              },
              {
                q: "How often should I calculate burn rate?",
                a: "Calculate burn rate monthly at minimum. For fast-growing startups, weekly or bi-weekly calculation provides better visibility. Regular tracking helps identify trends, catch expense creep, and adjust strategy before runway becomes critical.",
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
            Burn rate is one of the most critical metrics for startups and growing businesses. It directly impacts runway, fundraising timing, and survival. Understanding and managing burn rate is essential for sustainable growth and long-term success.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you track burn rate and calculate runway. But the real value comes from using this information to make strategic decisions — about spending, growth, and fundraising. Burn rate isn't just a number — it's a tool for financial discipline and strategic planning.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're pre-seed, seed-stage, or growing rapidly, knowing your burn rate provides clarity. It tells you how much time you have, what you can afford, and when you need to take action. Use this clarity to build a sustainable path to profitability.
          </p>
          <div className="pull-quote mt-8">
            The best burn rate is the one that aligns with your strategy and runway. Manage it deliberately, and it becomes a tool for growth rather than a countdown to shutdown.
          </div>
        </section>

      </div>
    </article>
  );
}
