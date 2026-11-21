import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ChurnRateArticle() {
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
          <span className="meta-tag">Business · Customer Metrics</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Churn Rate Calculator: Measure Customer Retention
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for subscription businesses and SaaS companies
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You start the month with 1,000 customers. During the month, 50 customers cancel. Your churn rate is 5%. At this rate, you'll lose 60% of your customers annually. If each customer pays $100 monthly, that's $600,000 in lost annual revenue. Reducing churn to 3% saves $240,000 annually without acquiring a single new customer.
          </p>
          <p className="mb-5">
            Churn rate is the percentage of customers who stop using your product or service over a given period. It's a critical metric for subscription businesses, SaaS companies, and any business with recurring revenue. Understanding churn is essential for sustainable growth.
          </p>
          <p className="mb-5">
            But churn isn't just a number — it's a signal of product-market fit, customer satisfaction, and competitive position. High churn indicates problems that need addressing, while low churn suggests strong product-market fit and customer loyalty.
          </p>
          <p>
            The churn rate calculator above helps you track customer retention, identify trends, and measure the impact of retention initiatives. Use it to understand your customer lifecycle and prioritize retention efforts.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Churn Rate Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Churn rate is calculated by dividing the number of customers lost during a period by the number of customers at the start of that period. It's typically expressed as a percentage and measured monthly or annually.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Churn Rate Formula:
          </p>
          <div className="formula-block">
            <pre>Churn Rate = (Customers Lost / Customers at Start) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Customers at Start", "1,000"],
              ["Customers Lost", "50"],
              ["Churn Rate", "(50 / 1,000) × 100 = 5%"],
              ["Annual Churn Projection", "5% × 12 = 60% annual churn"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, 5% monthly churn translates to 60% annual churn — meaning you lose most of your customers each year. This is unsustainable for most businesses. Reducing monthly churn to 3% drops annual churn to 33%, dramatically improving customer lifetime value and revenue stability.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CHURN BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Churn Rate Benchmarks by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Churn rates vary significantly by industry, business model, and customer type. Understanding benchmarks helps you assess whether your churn is healthy or needs improvement.
          </p>

          {[
            {
              heading: "SaaS B2B (Enterprise)",
              rows: [
                ["Monthly Churn", "1-2%"],
                ["Annual Churn", "10-20%"],
                ["Characteristics", "Long contracts, high switching costs"],
              ],
              note: "Enterprise SaaS typically has the lowest churn due to long contracts, implementation investment, and high switching costs. Churn below 1% monthly is excellent, while above 2% indicates problems.",
            },
            {
              heading: "SaaS B2B (SMB)",
              rows: [
                ["Monthly Churn", "3-5%"],
                ["Annual Churn", "30-50%"],
                ["Characteristics", "Shorter contracts, price-sensitive customers"],
              ],
              note: "SMB SaaS has higher churn due to shorter contracts, price sensitivity, and business failure rates. Churn below 3% monthly is good, while above 5% requires attention to onboarding and value realization.",
            },
            {
              heading: "SaaS B2C",
              rows: [
                ["Monthly Churn", "5-10%"],
                ["Annual Churn", "50-80%"],
                ["Characteristics", "Low commitment, high competition"],
              ],
              note: "B2C SaaS has the highest churn due to low commitment, free alternatives, and low switching costs. Churn below 5% monthly is excellent. Focus on engagement and habit formation to reduce churn.",
            },
          ].map((benchmark: { heading: string; rows: string[][]; note: string }) => (
            <div key={benchmark.heading} className="state-card">
              <h3>{benchmark.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {benchmark.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{benchmark.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING CHURN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Customer Churn
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing churn is one of the most effective ways to grow revenue. Retaining existing customers is far cheaper than acquiring new ones. Here are proven strategies to improve retention.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Improve onboarding",
                body: "Poor onboarding is a leading cause of early churn. Create guided onboarding that helps customers achieve quick wins. Monitor onboarding completion rates and intervene when customers stall. The faster customers realize value, the less likely they are to churn.",
              },
              {
                n: "2",
                title: "Focus on customer success",
                body: "Proactive customer success prevents churn before it happens. Regular check-ins, usage monitoring, and value realization discussions help customers succeed. Assign customer success managers to high-value accounts and create automated success programs for others.",
              },
              {
                n: "3",
                title: "Solicit and act on feedback",
                body: "Regularly collect customer feedback through surveys, interviews, and in-app prompts. More importantly, act on that feedback. Close the feedback loop by communicating changes. Customers who feel heard are less likely to leave.",
              },
              {
                n: "4",
                title: "Improve product fit",
                body: "Churn often indicates product-market fit issues. Analyze churn reasons to identify product gaps. Prioritize features that address top churn drivers. Continuously improve the product based on customer needs and usage patterns.",
              },
              {
                n: "5",
                title: "Create switching costs",
                body: "Make it harder for customers to leave through data integrations, workflow embedding, and community building. The more your product is integrated into their operations, the higher the switching cost and lower the churn.",
              },
              {
                n: "6",
                title: "Offer retention incentives",
                body: "Provide discounts, upgrades, or extended terms for customers considering cancellation. Win-back campaigns can recover 10-30% of at-risk customers. Analyze which incentives work best for different customer segments.",
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

        {/* ── CHURN ANALYSIS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Analyzing Churn Data
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding why customers churn is as important as measuring how many churn. Segment churn analysis reveals patterns and actionable insights for retention improvement.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Segment</th>
                <th className="dark:text-slate-100">What to Track</th>
                <th className="dark:text-slate-100">Actionable Insights</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Time to Churn", "When customers cancel (month 1, 6, 12)", "Identify onboarding issues vs long-term value gaps"],
                ["Churn Reason", "Why customers cancel (price, fit, support)", "Address top churn drivers systematically"],
                ["Customer Segment", "Churn by plan, industry, company size", "Identify high-risk segments for targeted intervention"],
                ["Usage Patterns", "Churn by feature usage, engagement level", "Identify under-engaged customers for outreach"],
                ["Acquisition Channel", "Churn by how customers were acquired", "Optimize acquisition for quality over quantity"],
              ].map(([segment, track, insights]) => (
                <tr key={segment}>
                  <td className="dark:text-slate-100">{segment}</td>
                  <td className="dark:text-slate-100">{track}</td>
                  <td className="dark:text-slate-100">{insights}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Don't just measure aggregate churn. Segment churn analysis reveals specific problems and opportunities. Focus retention efforts on high-value segments and address the most common churn reasons first for maximum impact.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Churn Management Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Even experienced teams make mistakes in churn analysis and retention efforts. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not measuring churn consistently",
                body: "Inconsistent measurement makes trends impossible to track. Define churn clearly (cancellation vs non-renewal vs downgrades) and measure consistently over time. Use the same methodology for accurate trend analysis.",
              },
              {
                n: "2",
                title: "Ignoring voluntary vs involuntary churn",
                body: "Voluntary churn (customer choice) and involuntary churn (payment failure) require different strategies. Track them separately. Involuntary churn is often fixable through payment optimization and dunning management.",
              },
              {
                n: "3",
                title: "Focusing only on acquisition",
                body: "Growth at all costs ignores retention economics. High acquisition with high churn is unsustainable. Balance acquisition and retention efforts. A 5% churn reduction can have the same revenue impact as significant acquisition increases.",
              },
              {
                n: "4",
                title: "Not acting on churn data",
                body: "Measuring churn without action is wasted effort. Create processes to act on churn signals — automated outreach for at-risk customers, product improvements for common churn reasons, and retention offers for cancellation requests.",
              },
              {
                n: "5",
                title: "Blaming customers instead of product",
                body: "High churn is a product problem, not a customer problem. Don't dismiss churn as bad-fit customers. Analyze why they didn't find value and improve the product to reduce future churn.",
              },
              {
                n: "6",
                title: "Waiting too long to intervene",
                body: "Churn prevention is more effective than churn recovery. Identify at-risk customers early through usage patterns and engagement metrics. Proactive outreach before cancellation is far more effective than win-back campaigns.",
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
            Practical Tips for Churn Reduction
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track churn rate consistently over time</>],
              [<><strong>Segment churn data</strong> — analyze by customer type and reason</>],
              [<><strong>Improve onboarding</strong> — help customers achieve quick wins</>],
              [<><strong>Invest in customer success</strong> — proactive support prevents churn</>],
              [<><strong>Collect feedback regularly</strong> — understand why customers leave</>],
              [<><strong>Monitor engagement metrics</strong> — identify at-risk customers early</>],
              [<><strong>Create switching costs</strong> — integrate into customer workflows</>],
              [<><strong>Offer retention incentives</strong> — recover at-risk customers</>],
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
                q: "How do I calculate churn rate?",
                a: "Churn Rate = (Customers Lost / Customers at Start) × 100. For example, if you start with 1,000 customers and lose 50, your churn rate is 5%. The calculator above automates this calculation and helps track churn over time.",
              },
              {
                q: "What is a good churn rate?",
                a: "Good churn varies by industry. Enterprise SaaS aims for 1-2% monthly churn. SMB SaaS targets 3-5%. B2C SaaS typically sees 5-10% monthly churn. Compare your churn to industry benchmarks, but focus on trends over time rather than absolute numbers.",
              },
              {
                q: "How does churn affect LTV?",
                a: "Churn directly reduces customer lifetime value. Higher churn means shorter customer lifespans and less revenue per customer. Reducing churn from 5% to 3% can increase LTV by 67% dramatically improving unit economics.",
              },
              {
                q: "What is the difference between voluntary and involuntary churn?",
                a: "Voluntary churn is when customers actively cancel or choose not to renew. Involuntary churn occurs due to payment failures, expired cards, or administrative errors. Track both separately as they require different strategies.",
              },
              {
                q: "How can I predict customer churn?",
                a: "Use engagement metrics like login frequency, feature usage, and support interactions to identify at-risk customers. Machine learning models can predict churn risk based on patterns. Early identification enables proactive retention efforts.",
              },
              {
                q: "Should I focus on acquisition or retention?",
                a: "Balance both, but prioritize retention if churn is high. Retention is typically more cost-effective than acquisition. A 5% churn reduction can have the same revenue impact as significant acquisition increases at lower cost.",
              },
              {
                q: "How do I reduce early churn?",
                a: "Early churn (first 30-90 days) is often due to onboarding issues. Improve onboarding with guided tours, quick wins, and proactive support. Monitor onboarding completion and intervene when customers stall.",
              },
              {
                q: "What is churn analysis?",
                a: "Churn analysis examines why and when customers leave. Segment churn by time, reason, customer type, and acquisition channel to identify patterns. This analysis reveals specific problems and opportunities for retention improvement.",
              },
              {
                q: "How often should I measure churn?",
                a: "Measure churn monthly for most subscription businesses. Weekly measurement may be appropriate for high-volume or fast-changing businesses. Regular tracking helps identify trends, catch issues early, and measure retention initiative impact.",
              },
              {
                q: "What is revenue churn vs customer churn?",
                a: "Customer churn measures the percentage of customers lost. Revenue churn measures the percentage of recurring revenue lost. Revenue churn accounts for plan differences — losing high-value customers impacts revenue more than customer count.",
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
            Churn rate is a fundamental metric for subscription businesses. It directly impacts revenue, growth, and unit economics. Understanding and reducing churn is essential for sustainable growth and profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you track churn and identify trends. But the real value comes from analyzing why customers leave and taking action to prevent it. Churn reduction is a continuous process of product improvement, customer success, and retention optimization.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're a SaaS company, subscription service, or any business with recurring revenue, focusing on retention pays dividends. Small churn improvements compound into significant revenue gains over time.
          </p>
          <div className="pull-quote mt-8">
            The best growth strategy combines smart acquisition with relentless retention. Keep the customers you have, and growth becomes much easier.
          </div>
        </section>

      </div>
    </article>
  );
}
