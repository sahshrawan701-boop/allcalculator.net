import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RunwayCalculatorArticle() {
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
            Runway Calculator: Calculate Startup Runway
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for cash runway and survival planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your startup has $500,000 in cash reserves. Your monthly burn rate is $50,000. Your runway is 10 months ($$500,000 / $50,000). This means you have 10 months of cash remaining at current burn rate before running out of money. If you reduce burn to $40,000 through cost cuts, runway extends to 12.5 months. If you raise an additional $200,000, runway extends to 14 months ($700,000 / $50,000).
          </p>
          <p className="mb-5">
            Runway is the length of time a startup can survive before running out of cash. It's a critical metric for startups, determining how much time you have to achieve milestones, raise funding, or reach profitability. Understanding runway helps plan fundraising and manage cash flow.
          </p>
          <p className="mb-5">
            But runway varies by burn rate, revenue growth, and fundraising strategy. Understanding how to calculate runway, extend it through cost management or revenue growth, and plan fundraising helps ensure startup survival.
          </p>
          <p>
            The runway calculator above helps you calculate startup runway and plan cash management strategies.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Runway Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Runway is calculated by dividing cash reserves by monthly burn rate. Burn rate is the amount of money spent each month. For startups with revenue, net burn rate (burn minus revenue) is used instead of gross burn rate.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Runway Formula:
          </p>
          <div className="formula-block">
            <pre>Runway = Cash Reserves / Monthly Burn Rate</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Cash Reserves", "$500,000"],
              ["Monthly Burn", "$50,000"],
              ["Runway", "$500,000 / $50,000 = 10 months"],
              ["Reduced Burn", "$40,000"],
              ["Extended Runway", "$500,000 / $40,000 = 12.5 months"],
              ["With Additional Funding", "$700,000"],
              ["New Runway", "$700,000 / $50,000 = 14 months"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, reducing burn by 20% extends runway by 25%. This demonstrates the power of cost management. Small burn reductions significantly extend runway, providing more time to achieve milestones or raise funding.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BURN RATE TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Burn Rate Types
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different burn rate measures provide different insights into cash consumption. Understanding each type helps assess runway accurately.
          </p>

          {[
            {
              heading: "Gross Burn Rate",
              rows: [
                ["Formula", "Total Monthly Expenses"],
                ["Includes", "Salaries, rent, marketing, all costs"],
                ["Best For", "Pre-revenue startups"],
              ],
              note: "Gross burn rate is total monthly expenses regardless of revenue. Used for pre-revenue startups or when calculating total cash consumption. Gross burn overstates runway for revenue-generating companies.",
            },
            {
              heading: "Net Burn Rate",
              rows: [
                ["Formula", "Expenses - Revenue"],
                ["Includes", "Net cash outflow after revenue"],
                ["Best For", "Revenue-generating startups"],
              ],
              note: "Net burn rate accounts for revenue. It's the true measure of cash consumption for revenue-generating startups. Net burn provides accurate runway calculation. Use net burn when revenue is significant.",
            },
          ].map((burnType: { heading: string; rows: string[][]; note: string }) => (
            <div key={burnType.heading} className="state-card">
              <h3>{burnType.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {burnType.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{burnType.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── EXTENDING RUNWAY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Extend Runway
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Extending runway provides more time to achieve milestones and raise funding. Here are proven strategies to extend runway.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Reduce fixed costs",
                body: "Cut fixed expenses like office space, software subscriptions, and overhead. Negotiate better terms with vendors and landlords. Fixed cost reductions directly reduce burn rate and extend runway.",
              },
              {
                n: "2",
                title: "Optimize variable costs",
                body: "Reduce variable costs like marketing spend, customer acquisition costs, and production costs. Focus on high-ROI activities and eliminate low-performing channels. Variable cost optimization improves efficiency.",
              },
              {
                n: "3",
                title: "Increase revenue",
                body: "Revenue directly reduces net burn rate. Focus on revenue-generating activities: sales, marketing, and customer acquisition. Even small revenue increases significantly extend runway.",
              },
              {
                n: "4",
                title: "Improve pricing",
                body: "Increase prices or implement monetization strategies. Pricing improvements increase revenue without increasing costs. Better pricing directly extends runway through higher margins.",
              },
              {
                n: "5",
                title: "Reduce headcount strategically",
                body: "Headcount is often the largest expense. Reduce headcount strategically by eliminating non-essential roles or using contractors instead of full-time employees. Headcount reductions significantly impact burn.",
              },
              {
                n: "6",
                title: "Delay non-essential spending",
                body: "Postpone non-essential initiatives, hiring, and expansion. Focus spending on core activities that drive revenue or key milestones. Delaying spending preserves cash for runway.",
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

        {/* ── RUNWAY BY STAGE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Typical Runway by Startup Stage
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Expected runway varies by startup stage and business model. Understanding typical runway by stage helps assess whether your runway is adequate.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Stage</th>
                <th className="dark:text-slate-100">Typical Runway</th>
                <th className="dark:text-slate-100">Focus</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pre-Seed", "12-18 months", "Product development, validation"],
                ["Seed", "18-24 months", "Market traction, growth"],
                ["Series A", "18-24 months", "Scaling, expansion"],
                ["Series B+", "24+ months", "Market leadership, profitability"],
              ].map(([stage, runway, focus]) => (
                <tr key={stage}>
                  <td className="dark:text-slate-100">{stage}</td>
                  <td className="dark:text-slate-100">{runway}</td>
                  <td className="dark:text-slate-100">{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Early-stage startups typically need 12-18 months of runway to achieve milestones for next funding. Later-stage startups need longer runway to reach profitability or significant scale. Plan runway based on your stage and milestones.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FUNDRAISING TIMING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Fundraising Timing and Runway
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Timing fundraising correctly is critical for startup survival. Start fundraising before runway runs out to avoid desperation and unfavorable terms.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Start early",
                body: "Begin fundraising when you have 6-9 months of runway remaining. Fundraising takes 3-6 months on average. Starting early ensures you don't run out of cash during the process.",
              },
              {
                n: "2",
                title: "Plan milestones",
                body: "Raise enough capital to reach key milestones for the next round. Under-raising leads to premature fundraising. Plan funding to last 18-24 months to the next milestone.",
              },
              {
                n: "3",
                title: "Monitor burn changes",
                body: "Burn rate changes affect runway. Recalculate runway regularly and adjust fundraising timing accordingly. Increasing burn shortens runway and may require earlier fundraising.",
              },
              {
                n: "4",
                title: "Have backup plans",
                body: "Prepare contingency plans if fundraising takes longer than expected. Identify cost cuts or bridge financing options. Backup plans prevent running out of cash.",
              },
              {
                n: "5",
                title: "Track progress",
                body: "Demonstrate progress during fundraising. Investors fund traction and milestones. Strong progress improves fundraising success and may reduce dilution.",
              },
              {
                n: "6",
                title: "Consider bridge rounds",
                body: "If main fundraising is delayed, consider a bridge round or convertible note to extend runway. Bridge financing provides interim cash but should be used strategically.",
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
            Common Runway Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many startups mismanage runway or calculate it incorrectly. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Using gross burn with revenue",
                body: "For revenue-generating startups, use net burn (expenses minus revenue). Using gross burn overstates cash consumption and understates runway. Net burn provides accurate runway calculation.",
              },
              {
                n: "2",
                title: "Not forecasting burn changes",
                body: "Burn rate changes over time as you scale. Forecast future burn changes based on hiring plans, expansion, and revenue growth. Static burn calculation becomes inaccurate over time.",
              },
              {
                n: "3",
                title: "Starting fundraising too late",
                body: "Starting fundraising with insufficient runway leads to desperation and poor terms. Begin when you have 6-9 months remaining. Early fundraising provides leverage and options.",
              },
              {
                n: "4",
                title: "Ignoring seasonality",
                body: "Some businesses have seasonal revenue patterns. Account for seasonality in runway planning. Ensure runway covers low-revenue periods. Seasonal businesses need buffer runway.",
              },
              {
                n: "5",
                title: "Overestimating revenue",
                body: "Optimistic revenue projections overstate runway. Use conservative revenue estimates in runway planning. Underestimating revenue is safer than overestimating.",
              },
              {
                n: "6",
                title: "Not tracking runway regularly",
                body: "Runway changes as cash is spent and revenue is earned. Track runway monthly and recalculate based on actual burn and revenue. Regular tracking enables proactive cash management.",
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
            Practical Tips for Runway Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate runway accurately</>],
              [<><strong>Use net burn</strong> — with revenue</>],
              [<><strong>Track regularly</strong> — monthly updates</>],
              [<><strong>Forecast changes</strong> — plan for scaling</>],
              [<><strong>Start fundraising early</strong> — 6-9 months runway</>],
              [<><strong>Reduce costs</strong> — extend runway</>],
              [<><strong>Increase revenue</strong> — reduces net burn</>],
              [<><strong>Have contingency plans</strong> — backup options</>],
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
                q: "How do I calculate runway?",
                a: "Runway = Cash Reserves / Monthly Burn Rate. For revenue-generating startups, use net burn (expenses minus revenue). For example, $500,000 cash with $50,000 monthly burn: $500,000 / $50,000 = 10 months runway.",
              },
              {
                q: "What is the difference between gross and net burn?",
                a: "Gross burn is total monthly expenses. Net burn is expenses minus revenue. Use gross burn for pre-revenue startups. Use net burn for revenue-generating startups. Net burn provides accurate runway calculation.",
              },
              {
                q: "How much runway should I have?",
                a: "Aim for 12-18 months of runway for early-stage startups and 18-24 months for later-stage startups. Start fundraising when you have 6-9 months remaining. Plan runway based on your stage and milestones.",
              },
              {
                q: "How do I extend my runway?",
                a: "Reduce fixed and variable costs, increase revenue, improve pricing, reduce headcount strategically, and delay non-essential spending. Cost reductions and revenue increases directly extend runway.",
              },
              {
                q: "When should I start fundraising?",
                a: "Start fundraising when you have 6-9 months of runway remaining. Fundraising typically takes 3-6 months. Starting early ensures you don't run out of cash and provides leverage in negotiations.",
              },
              {
                q: "What if I run out of runway?",
                a: "Running out of runway is critical. Options include emergency cost cuts, bridge financing, or shutdown. Plan ahead to avoid this situation. Have contingency plans and monitor runway closely.",
              },
              {
                q: "How does revenue affect runway?",
                a: "Revenue reduces net burn rate, extending runway. For example, $50,000 expenses with $20,000 revenue = $30,000 net burn. Revenue directly improves cash position and extends runway.",
              },
              {
                q: "Should I cut costs to extend runway?",
                a: "Cost cutting is a valid runway extension strategy. Focus on non-essential costs first. Strategic cost reductions extend runway without harming core operations. Balance cost cuts with growth needs.",
              },
              {
                q: "What is a bridge round?",
                a: "A bridge round is interim financing to extend runway between major funding rounds. Typically smaller than main rounds, often as convertible notes. Use if main fundraising is delayed but be strategic about terms.",
              },
              {
                q: "How do I forecast future runway?",
                a: "Forecast future burn based on hiring plans, expansion, and revenue growth. Project cash inflows and outflows monthly. Update forecasts regularly based on actual performance. Forecasting enables proactive planning.",
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
            Runway is the lifeblood of startup survival. Understanding runway calculation, managing burn rate, and planning fundraising ensures you have enough time to achieve milestones and build a sustainable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate runway and plan cash management. But the real value comes from using this information to make strategic decisions about spending, revenue, and fundraising timing.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a pre-revenue startup or scaling company, accurate runway calculation provides the foundation for survival and growth. Calculate precisely, manage cash wisely, and build a sustainable business.
          </p>
          <div className="pull-quote mt-8">
            Runway is not just a number — it's your timeline for success. Manage it carefully, plan strategically, and ensure your startup survives to thrive.
          </div>
        </section>

      </div>
    </article>
  );
}
