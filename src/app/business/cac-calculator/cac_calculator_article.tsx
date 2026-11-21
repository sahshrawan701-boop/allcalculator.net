import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CACArticle() {
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
          <span className="meta-tag">Business · Marketing Metrics</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            CAC Calculator: Measure Your Customer Acquisition Cost
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for marketers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You spend $10,000 on marketing and sales in a month. You acquire 100 new customers. Your Customer Acquisition Cost (CAC) is $100. If each customer generates $50 in monthly revenue, it takes 2 months to recover the acquisition cost. If they stay for 12 months, you generate $500 in revenue per customer — a 5x return on acquisition spend.
          </p>
          <p className="mb-5">
            CAC is the total cost to acquire a new customer, including all marketing and sales expenses. It's a critical metric for understanding marketing efficiency, pricing strategy, and unit economics. Knowing your CAC helps you optimize spending and ensure sustainable growth.
          </p>
          <p className="mb-5">
            But CAC doesn't exist in isolation. It must be analyzed alongside Customer Lifetime Value (LTV) to determine if acquisition costs are sustainable. The relationship between CAC and LTV determines whether your business model is viable or needs adjustment.
          </p>
          <p>
            The CAC calculator above helps you track acquisition costs, analyze channel efficiency, and optimize your marketing spend. Use it to make data-driven decisions about where to invest in customer acquisition.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How CAC Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            CAC is calculated by dividing total sales and marketing expenses by the number of new customers acquired. It includes all costs associated with acquiring customers — advertising, sales team salaries, software, and agency fees.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            CAC Formula:
          </p>
          <div className="formula-block">
            <pre>CAC = Total Sales & Marketing Expenses / Number of New Customers</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Marketing Spend", "$8,000"],
              ["Sales Team Costs", "$2,000"],
              ["Total Acquisition Costs", "$10,000"],
              ["New Customers Acquired", "100"],
              ["CAC", "$10,000 / 100 = $100 per customer"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, each new customer costs $100 to acquire. If your average customer generates $50 monthly revenue and stays for 12 months, LTV is $600. The LTV:CAC ratio is 6:1, indicating healthy unit economics. If LTV were only $150, the ratio would be 1.5:1, signaling unsustainable acquisition costs.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LTV TO CAC RATIO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The LTV:CAC Ratio
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The LTV:CAC ratio measures how much value each customer generates relative to acquisition cost. It's the most important metric for determining acquisition sustainability and marketing efficiency.
          </p>

          {[
            {
              heading: "Healthy Ratio (3:1 or higher)",
              rows: [
                ["LTV:CAC", "3:1 or higher"],
                ["Interpretation", "Sustainable acquisition costs"],
                ["Strategy", "Scale acquisition efforts"],
              ],
              note: "A 3:1 ratio means customers generate 3x their acquisition cost. This provides healthy margins for reinvestment and profit. Ratios above 3:1 indicate excellent unit economics and justify aggressive acquisition spending.",
            },
            {
              heading: "Marginal Ratio (2:1 to 3:1)",
              rows: [
                ["LTV:CAC", "2:1 to 3:1"],
                ["Interpretation", "Acceptable but needs optimization"],
                ["Strategy", "Improve retention or reduce acquisition costs"],
              ],
              note: "Ratios between 2:1 and 3:1 are workable but leave limited margin for error. Focus on improving customer retention to increase LTV, or optimize marketing to reduce CAC. This range requires careful monitoring.",
            },
            {
              heading: "Unhealthy Ratio (Below 2:1)",
              rows: [
                ["LTV:CAC", "Below 2:1"],
                ["Interpretation", "Unsustainable acquisition costs"],
                ["Strategy", "Immediate action required"],
              ],
              note: "Ratios below 2:1 indicate customers don't generate enough value to justify acquisition costs. This is unsustainable and will lead to cash flow problems. Immediately reduce acquisition spending or increase prices to improve unit economics.",
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

        {/* ── REDUCING CAC ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Customer Acquisition Cost
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Lowering CAC improves unit economics and increases profitability. Here are proven strategies to reduce acquisition costs without sacrificing growth.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Optimize marketing channels",
                body: "Track CAC by channel and focus spending on the most efficient. Pause underperforming channels and reallocate budget to top performers. Regular A/B testing improves conversion rates and reduces cost per acquisition.",
              },
              {
                n: "2",
                title: "Improve conversion rates",
                body: "Small conversion rate improvements significantly reduce CAC. Optimize landing pages, simplify signup processes, and improve call-to-action placement. A 20% conversion improvement reduces CAC by 17% at the same spend.",
              },
              {
                n: "3",
                title: "Leverage content marketing",
                body: "Content marketing builds organic traffic and reduces reliance on paid acquisition. Create valuable content that attracts and nurtures prospects. While content requires upfront investment, it provides long-term, low-cost acquisition.",
              },
              {
                n: "4",
                title: "Implement referral programs",
                body: "Referral programs leverage existing customers to acquire new ones at low cost. Incentivize referrals with discounts, credits, or rewards. Referred customers typically have higher LTV and lower CAC than other acquisition channels.",
              },
              {
                n: "5",
                title: "Focus on retention",
                body: "Higher retention increases LTV, improving the LTV:CAC ratio even if CAC stays constant. Invest in onboarding, customer success, and product improvements. Retention is often more cost-effective than acquisition.",
              },
              {
                n: "6",
                title: "Target high-value segments",
                body: "Focus acquisition on customer segments with higher lifetime value. Targeting based on demographics, behavior, or firmographics improves both CAC and LTV. Quality over quantity in acquisition improves unit economics.",
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

        {/* ── CAC BY CHANNEL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Measuring CAC by Channel
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different acquisition channels have vastly different CACs. Measuring CAC by channel helps you allocate budget efficiently and identify optimization opportunities.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Channel</th>
                <th className="dark:text-slate-100">Typical CAC Range</th>
                <th className="dark:text-slate-100">Characteristics</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Organic Search", "$50-$200", "Low ongoing cost, requires SEO investment"],
                ["Paid Search", "$100-$500", "Immediate traffic, scalable but expensive"],
                ["Social Media", "$50-$300", "Variable by platform and targeting"],
                ["Email Marketing", "$20-$100", "Low cost, requires existing list"],
                ["Referrals", "$10-$50", "Lowest cost, high quality customers"],
                ["Content Marketing", "$30-$150", "Long-term asset, delayed results"],
              ].map(([channel, range, characteristics]) => (
                <tr key={channel}>
                  <td className="dark:text-slate-100">{channel}</td>
                  <td className="dark:text-slate-100">{range}</td>
                  <td className="dark:text-slate-100">{characteristics}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Track CAC by channel to identify your most efficient acquisition sources. Don't just look at CAC — consider conversion rates, customer quality, and retention by channel. The cheapest channel may not bring the best customers.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common CAC Calculation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Inaccurate CAC calculations lead to poor decisions and wasted marketing spend. Here's what to avoid when measuring acquisition costs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not including all acquisition costs",
                body: "CAC should include all sales and marketing expenses — advertising, salaries, software, agency fees, and tools. Excluding costs understates CAC and leads to poor decisions. Be comprehensive in cost allocation.",
              },
              {
                n: "2",
                title: "Not tracking by channel",
                body: "Aggregate CAC hides channel performance differences. Track CAC by channel to identify what's working and what isn't. Channel-level tracking enables optimization and budget reallocation.",
              },
              {
                n: "3",
                title: "Ignoring attribution",
                body: "First-touch, last-touch, and multi-touch attribution give different CACs. Choose an attribution model that reflects your customer journey and use it consistently. Inconsistent attribution leads to misleading metrics.",
              },
              {
                n: "4",
                title: "Not considering time lag",
                body: "Marketing spend and customer acquisition don't always align in time. Account for lag between spend and acquisition, especially for content marketing or SEO. Monthly CAC may fluctuate due to timing.",
              },
              {
                n: "5",
                title: "Focusing only on CAC",
                body: "Low CAC doesn't matter if customers don't generate value. Always consider CAC alongside LTV, retention, and customer quality. The cheapest acquisition may bring the worst customers if they churn quickly.",
              },
              {
                n: "6",
                title: "Not calculating payback period",
                body: "CAC payback period — how long to recover acquisition costs — is critical for cash flow. Even with good LTV:CAC, long payback periods strain cash flow. Aim for payback within 12 months for most businesses.",
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
            Practical Tips for CAC Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track CAC by channel and campaign</>],
              [<><strong>Include all costs</strong> — marketing, sales, tools, and personnel</>],
              [<><strong>Track by channel</strong> — identify efficient and inefficient channels</>],
              [<><strong>Monitor LTV:CAC</strong> — ensure acquisition costs are sustainable</>],
              [<><strong>Improve conversion rates</strong> — small improvements significantly reduce CAC</>],
              [<><strong>Focus on retention</strong> — higher LTV improves unit economics</>],
              [<><strong>Test continuously</strong> — A/B test to optimize performance</>],
              [<><strong>Consider payback period</strong> — ensure cash flow sustainability</>],
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
                q: "How do I calculate CAC?",
                a: "CAC = Total Sales & Marketing Expenses / Number of New Customers Acquired. Include all acquisition costs: advertising, sales team salaries, software, agency fees, and tools. The calculator above automates this calculation and helps track CAC over time.",
              },
              {
                q: "What is a good CAC?",
                a: "Good CAC depends on your LTV and industry. The key metric is LTV:CAC ratio — aim for 3:1 or higher. A $100 CAC is good if LTV is $500 (5:1 ratio) but bad if LTV is $150 (1.5:1 ratio). Focus on the ratio rather than absolute CAC.",
              },
              {
                q: "What costs should I include in CAC?",
                a: "Include all sales and marketing expenses: advertising spend, marketing team salaries, sales commissions, marketing software and tools, agency fees, creative production costs, and any other expenses directly related to customer acquisition.",
              },
              {
                q: "How does CAC relate to LTV?",
                a: "CAC and LTV are analyzed together as the LTV:CAC ratio. This ratio determines if acquisition costs are sustainable. A 3:1 ratio means customers generate 3x their acquisition cost. Ratios below 2:1 indicate unsustainable unit economics.",
              },
              {
                q: "What is CAC payback period?",
                a: "CAC payback period is how long it takes to recover acquisition costs from customer revenue. Calculate it as CAC / (Average Revenue Per Customer × Gross Margin). Aim for payback within 12 months for most businesses to maintain healthy cash flow.",
              },
              {
                q: "How can I reduce my CAC?",
                a: "Optimize marketing channels, improve conversion rates, leverage content marketing, implement referral programs, focus on retention, and target high-value segments. Regular testing and optimization reduce CAC over time.",
              },
              {
                q: "Should I track CAC by channel?",
                a: "Yes, tracking CAC by channel is essential for optimization. Different channels have vastly different CACs. Channel-level tracking helps identify what's working, allocate budget efficiently, and improve overall acquisition efficiency.",
              },
              {
                q: "What is a good LTV:CAC ratio?",
                a: "A 3:1 LTV:CAC ratio is considered healthy. Ratios above 3:1 indicate excellent unit economics. Ratios between 2:1 and 3:1 are acceptable but need optimization. Ratios below 2:1 are unsustainable and require immediate action.",
              },
              {
                q: "How often should I calculate CAC?",
                a: "Calculate CAC monthly for most businesses. Weekly calculation may be appropriate for high-volume or fast-changing businesses. Regular tracking helps identify trends, catch issues early, and measure the impact of optimization efforts.",
              },
              {
                q: "Does CAC include retention costs?",
                a: "CAC typically includes only acquisition costs, not retention costs. Retention costs (customer success, support, engagement) are separate and should be analyzed alongside CAC to understand total customer economics.",
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
            CAC is a fundamental metric for understanding marketing efficiency and unit economics. Tracking CAC alongside LTV provides the complete picture of customer value and acquisition sustainability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you measure acquisition costs and analyze channel performance. But the real value comes from using this data to optimize spending, improve conversion rates, and build sustainable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're optimizing existing channels or testing new ones, understanding your CAC provides the clarity needed to make data-driven decisions. Focus on the LTV:CAC ratio, and let acquisition efficiency drive your growth strategy.
          </p>
          <div className="pull-quote mt-8">
            The best acquisition strategy balances cost, quality, and scale. Measure CAC relentlessly, optimize continuously, and grow sustainably.
          </div>
        </section>

      </div>
    </article>
  );
}
