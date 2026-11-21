import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function FreelanceRateCalculatorArticle() {
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
          <span className="meta-tag">Business · Freelancing & Consulting</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Freelance Rate Calculator: Calculate Your Ideal Hourly Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for freelancers and consultants
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to earn $80,000 annually from freelancing. After accounting for 4 weeks of vacation and 2 weeks of sick leave, you have 46 working weeks. With 20 billable hours per week (40 hours total with 50% billable ratio), you have 920 billable hours annually. Your target hourly rate is $87 ($80,000 ÷ 920). But you also need to account for self-employment taxes (15.3%), business expenses ($5,000), and overhead ($3,000), bringing your required rate to approximately $105 per hour.
          </p>
          <p className="mb-5">
            Setting freelance rates requires calculating your target income, billable hours, and business costs. Many freelancers underprice their services by not accounting for non-billable time, taxes, and business expenses.
          </p>
          <p className="mb-5">
            But freelance rates vary significantly by skill level, industry, location, and experience. Understanding how to calculate your rate ensures you earn a sustainable income while remaining competitive in the market.
          </p>
          <p>
            The freelance rate calculator above helps you calculate your ideal hourly rate based on your income goals, billable hours, and business expenses.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Freelance Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Freelance rate is calculated by dividing your target annual income by your billable hours, then adding business expenses and taxes. The formula accounts for non-billable time and overhead costs.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Hourly Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Hourly Rate = (Target Income + Expenses + Taxes) / Billable Hours</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Target Annual Income", "$80,000"],
              ["Business Expenses", "$5,000"],
              ["Self-Employment Tax (15.3%)", "$12,240"],
              ["Total Revenue Needed", "$97,240"],
              ["Working Weeks", "46 weeks"],
              ["Billable Hours/Week", "20 hours"],
              ["Total Billable Hours", "920 hours"],
              ["Hourly Rate", "$97,240 / 920 = $106/hour"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the required rate is $106/hour. This accounts for taxes, expenses, and non-billable time. Many freelancers underprice by not including these factors, leading to lower effective earnings.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BILLABLE HOURS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Billable Hours
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Not all working hours are billable. Understanding your billable ratio is essential for accurate rate calculation. Billable hours typically range from 50-70% of total working hours.
          </p>

          {[
            {
              heading: "Billable Activities",
              rows: [
                ["Includes", "Client work, project delivery, meetings"],
                ["Typical Ratio", "50-70% of total hours"],
                ["Impact", "Directly generates revenue"],
              ],
              note: "Billable hours are time spent directly on client work. This includes project execution, client meetings, and deliverable creation. Higher billable ratios increase effective earnings.",
            },
            {
              heading: "Non-Billable Activities",
              rows: [
                ["Includes", "Marketing, admin, learning, proposals"],
                ["Typical Ratio", "30-50% of total hours"],
                ["Impact", "Essential but doesn't generate revenue"],
              ],
              note: "Non-billable time includes business development, administrative tasks, professional development, and proposal writing. This time is necessary but must be factored into your rate.",
            },
            {
              heading: "Time Off",
              rows: [
                ["Includes", "Vacation, sick leave, holidays"],
                ["Typical Allowance", "4-6 weeks annually"],
                ["Impact", "Reduces available billable hours"],
              ],
              note: "Account for vacation, sick leave, and holidays when calculating billable hours. Most freelancers take 4-6 weeks off annually. This reduces available working weeks from 52 to 46-48.",
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

        {/* ── RATE FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Influence Freelance Rates
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Multiple factors influence what you can charge. Understanding these factors helps you position your rates competitively while earning what you're worth.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Impact on Rate</th>
                <th className="dark:text-slate-100">Considerations</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Experience Level", "High impact", "Senior rates 2-3x junior rates"],
                ["Specialization", "High impact", "Niche skills command premium"],
                ["Industry", "Medium impact", "Tech/finance pay higher rates"],
                ["Location", "Medium impact", "Cost of living affects rates"],
                ["Client Type", "Medium impact", "Enterprise pays more than SMB"],
                ["Project Complexity", "High impact", "Complex work justifies higher rates"],
              ].map(([factor, impact, considerations]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                  <td className="dark:text-slate-100">{considerations}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Experience and specialization have the highest impact on rates. As you gain experience and develop niche expertise, increase your rates accordingly. Don't underprice based on imposter syndrome.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PRICING STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Freelance Pricing Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different pricing models suit different situations. Understanding each model helps you choose the right approach for your services and clients.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Hourly pricing",
                body: "Charge by the hour for ongoing work. Simple to implement and understand. Best for consulting, support, and projects with undefined scope. Ensure your hourly rate accounts for all costs and non-billable time.",
              },
              {
                n: "2",
                title: "Project-based pricing",
                body: "Charge a fixed price for defined deliverables. Clients prefer predictable costs. Best for well-defined projects with clear scope. Build in buffer for scope creep and ensure profitability.",
              },
              {
                n: "3",
                title: "Retainer pricing",
                body: "Charge a monthly fee for ongoing services. Provides predictable income and client commitment. Best for ongoing marketing, design, or development work. Structure retainers clearly to avoid scope creep.",
              },
              {
                n: "4",
                title: "Value-based pricing",
                body: "Charge based on value delivered rather than time spent. Highest potential earnings but requires confidence and sales skills. Best for projects with clear ROI. Justify rates with expected outcomes.",
              },
              {
                n: "5",
                title: "Hybrid models",
                body: "Combine pricing models for flexibility. For example, project fee with hourly overage, or retainer with project add-ons. Hybrid models accommodate different client needs and project types.",
              },
              {
                n: "6",
                title: "Performance-based pricing",
                body: "Charge based on results achieved. Aligns incentives with client success. Best for marketing, sales, or revenue-generating work. Requires clear metrics and measurement systems.",
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
            Common Freelance Rate Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many freelancers underprice their services due to common mistakes. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not accounting for non-billable time",
                body: "Assuming 40 billable hours per week is unrealistic. Most freelancers have 50-70% billable ratios. Calculate your actual billable hours and set rates accordingly to earn your target income.",
              },
              {
                n: "2",
                title: "Forgetting self-employment taxes",
                body: "Self-employment tax is 15.3% (Social Security + Medicare). Employees pay half, employers pay half. As a freelancer, you pay both. Include this in your rate calculations.",
              },
              {
                n: "3",
                title: "Ignoring business expenses",
                body: "Software, equipment, insurance, and professional development are real costs. Include these in your rate calculations. Not accounting for expenses reduces your effective earnings.",
              },
              {
                n: "4",
                title: "Underpricing based on competition",
                body: "Competitor rates provide context but shouldn't determine your pricing. Your skills, experience, and value are unique. Price based on your value and costs, not market averages.",
              },
              {
                n: "5",
                title: "Not raising rates over time",
                body: "As you gain experience and skills, your value increases. Raise rates annually or when reaching milestones. Stagnant rates mean declining real earnings as inflation and experience grow.",
              },
              {
                n: "6",
                title: "Not having a minimum rate",
                body: "Accepting low-paying projects devalues your services and takes time from better opportunities. Establish a minimum rate and stick to it. Decline projects that don't meet your minimum.",
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
            Practical Tips for Freelance Rate Setting
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate your ideal rate</>],
              [<><strong>Track billable hours</strong> — know your actual ratio</>],
              [<><strong>Include all costs</strong> — taxes, expenses, overhead</>],
              [<><strong>Account for time off</strong> — vacation and sick leave</>],
              [<><strong>Research market rates</strong> — but price on value</>],
              [<><strong>Establish minimum rate</strong> — decline low-paying work</>],
              [<><strong>Raise rates annually</strong> — as experience grows</>],
              [<><strong>Test different models</strong> — hourly, project, retainer</>],
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
                q: "How do I calculate my freelance hourly rate?",
                a: "Hourly Rate = (Target Income + Expenses + Taxes) / Billable Hours. Calculate your target annual income, add business expenses and self-employment tax (15.3%), then divide by your annual billable hours. The calculator above automates this.",
              },
              {
                q: "What is a typical billable hours ratio?",
                a: "Typical billable ratios are 50-70% of total working hours. Junior freelancers often have lower ratios (50-60%) due to more time spent on business development. Experienced freelancers achieve higher ratios (60-70%) through efficiency and repeat clients.",
              },
              {
                q: "What is self-employment tax?",
                a: "Self-employment tax is 15.3% of net earnings (12.4% Social Security + 2.9% Medicare). Employees pay half, employers pay half. As a freelancer, you pay both. This is a significant cost that must be included in rate calculations.",
              },
              {
                q: "How much should I charge as a freelance beginner?",
                a: "Beginner rates vary by skill but typically range $25-50/hour. Focus on building portfolio and experience initially. As you gain skills and testimonials, increase rates. Don't underprice permanently — raise rates as you improve.",
              },
              {
                q: "How often should I raise my freelance rates?",
                a: "Raise rates annually or when reaching experience milestones (1 year, 3 years, 5 years). Also raise when demand exceeds capacity or when adding new skills. Regular rate increases maintain real earnings against inflation.",
              },
              {
                q: "Should I charge hourly or project-based?",
                a: "Hourly is best for ongoing work with undefined scope. Project-based is better for defined deliverables. Many freelancers use both — project pricing for clear scope, hourly for ongoing support. Choose based on project type.",
              },
              {
                q: "What business expenses should I include?",
                a: "Include software subscriptions, equipment, internet, phone, insurance, professional development, marketing, accounting, and any other business-related expenses. Track these annually and include in rate calculations.",
              },
              {
                q: "How do I calculate project-based pricing?",
                a: "Estimate hours × hourly rate × 1.2-1.5 buffer. The buffer accounts for scope creep and revisions. Alternatively, price based on value delivered if ROI is clear. Always define scope clearly in contracts.",
              },
              {
                q: "What is a good freelance rate for my industry?",
                a: "Rates vary significantly: design $50-150/hour, development $75-200/hour, writing $30-100/hour, marketing $75-175/hour. Research your specific niche and experience level. Senior specialists command the highest rates.",
              },
              {
                q: "How do I justify higher rates to clients?",
                a: "Focus on value, ROI, and expertise rather than hours. Show portfolio, testimonials, and case studies. Explain how your work solves their problems or generates revenue. Confidence in your value justifies premium rates.",
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
            Setting freelance rates requires calculating your costs, understanding billable hours, and knowing your market value. Underpricing leads to burnout and unsustainable earnings. Proper pricing ensures you earn a living while building a sustainable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate your ideal hourly rate based on your income goals and costs. But the real value comes from confidently charging what you're worth and continuously increasing your rates as your skills grow.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're just starting freelancing or looking to raise your rates, accurate calculation provides the foundation for sustainable income. Price based on value, not competition, and build a thriving freelance business.
          </p>
          <div className="pull-quote mt-8">
            Your rate reflects your value, not your hours. Calculate accurately, price confidently, and earn what you're worth.
          </div>
        </section>

      </div>
    </article>
  );
}
