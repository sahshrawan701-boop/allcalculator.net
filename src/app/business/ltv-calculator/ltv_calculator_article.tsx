import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function LTVCalculatorArticle() {
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
            LTV Calculator: Calculate Customer Lifetime Value
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for marketers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your subscription business has an average customer value of $50 per month. Customers stay for an average of 24 months before churning. Your customer lifetime value is $1,200 ($50 × 24). If your customer acquisition cost is $200, your LTV to CAC ratio is 6:1, which is excellent. This means you earn $6 in lifetime revenue for every $1 spent acquiring customers.
          </p>
          <p className="mb-5">
            Customer Lifetime Value (LTV) measures the total revenue a business can expect from a single customer account. It considers average purchase value, purchase frequency, and customer lifespan. Understanding LTV helps determine how much you can spend on customer acquisition.
          </p>
          <p className="mb-5">
            But LTV varies significantly by business model, industry, and customer retention strategy. Subscription businesses typically have higher LTV due to recurring revenue. E-commerce businesses may have lower LTV but higher purchase frequency.
          </p>
          <p>
            The LTV calculator above helps you calculate customer lifetime value, understand the LTV to CAC ratio, and make informed decisions about customer acquisition and retention investments.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How LTV Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            LTV is calculated by multiplying average purchase value by purchase frequency, then multiplying by customer lifespan. This gives the total revenue expected from a customer over their relationship with your business.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            LTV Formula:
          </p>
          <div className="formula-block">
            <pre>LTV = Average Purchase Value × Purchase Frequency × Customer Lifespan</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Average Purchase Value", "$50"],
              ["Purchase Frequency", "12 times per year"],
              ["Annual Revenue per Customer", "$600"],
              ["Customer Lifespan", "3 years"],
              ["LTV", "$600 × 3 = $1,800"],
              ["CAC", "$300"],
              ["LTV:CAC Ratio", "6:1"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 6:1 LTV to CAC ratio is excellent. Healthy ratios are typically 3:1 or higher. Ratios below 3:1 indicate customer acquisition costs are too high relative to customer value.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── LTV COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            LTV Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            LTV consists of three key components. Understanding each component helps identify opportunities to increase customer lifetime value.
          </p>

          {[
            {
              heading: "Average Purchase Value",
              rows: [
                ["Calculation", "Total Revenue / Total Orders"],
                ["Impact", "Higher values increase LTV"],
                ["Optimization", "Upsells, cross-sells, premium pricing"],
              ],
              note: "Average purchase value is the average amount spent per transaction. Increase this through upselling, cross-selling, and premium pricing. Even small increases compound significantly over the customer lifetime.",
            },
            {
              heading: "Purchase Frequency",
              rows: [
                ["Calculation", "Total Orders / Total Customers"],
                ["Impact", "Higher frequency increases LTV"],
                ["Optimization", "Retention programs, subscriptions, reminders"],
              ],
              note: "Purchase frequency measures how often customers buy. Subscription models naturally increase frequency. For non-subscription businesses, use email marketing and loyalty programs to increase repeat purchases.",
            },
            {
              heading: "Customer Lifespan",
              rows: [
                ["Calculation", "Average time as customer (months/years)"],
                ["Impact", "Longer lifespan increases LTV"],
                ["Optimization", "Retention, customer success, onboarding"],
              ],
              note: "Customer lifespan is how long customers remain active. Retention is the primary driver. Focus on onboarding, customer success, and ongoing value delivery to extend customer relationships.",
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

        {/* ── LTV TO CAC RATIO ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            LTV to CAC Ratio
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The LTV to CAC ratio measures how much lifetime value you get for each dollar spent on acquisition. This ratio is critical for assessing acquisition efficiency and sustainability.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Ratio Range</th>
                <th className="dark:text-slate-100">Assessment</th>
                <th className="dark:text-slate-100">Implications</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Below 3:1", "Poor", "CAC too high relative to LTV"],
                ["3:1", "Good", "Healthy acquisition efficiency"],
                ["4:1", "Very Good", "Strong acquisition efficiency"],
                ["5:1+", "Excellent", "Outstanding acquisition efficiency"],
              ].map(([ratio, assessment, implications]) => (
                <tr key={ratio}>
                  <td className="dark:text-slate-100">{ratio}</td>
                  <td className="dark:text-slate-100">{assessment}</td>
                  <td className="dark:text-slate-100">{implications}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            A 3:1 LTV to CAC ratio is the minimum for sustainable growth. Ratios above 5:1 indicate excellent acquisition efficiency. If your ratio is below 3:1, focus on increasing LTV or reducing CAC.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── INCREASING LTV ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Increase Customer Lifetime Value
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Increasing LTV requires improving purchase value, frequency, or lifespan. Here are proven strategies to boost customer lifetime value.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase average order value",
                body: "Use upsells, cross-sells, and product bundles to increase purchase value. Premium pricing for enhanced versions or add-ons also increases AOV. Every dollar increase compounds over the customer lifetime.",
              },
              {
                n: "2",
                title: "Implement subscription models",
                body: "Subscriptions guarantee recurring revenue and increase purchase frequency. Even for non-subscription businesses, consider membership programs or recurring service options to create predictable revenue.",
              },
              {
                n: "3",
                title: "Improve customer retention",
                body: "Retention is the most powerful LTV driver. Focus on onboarding, customer success, and ongoing value delivery. Happy customers stay longer and spend more. Retention is cheaper than acquisition.",
              },
              {
                n: "4",
                title: "Implement loyalty programs",
                body: "Loyalty programs incentivize repeat purchases through points, tiers, and rewards. Structure programs to reward frequency and spend. Well-designed loyalty programs significantly increase purchase frequency.",
              },
              {
                n: "5",
                title: "Personalize customer experience",
                body: "Personalization increases engagement and spending. Use customer data to deliver relevant recommendations, content, and offers. Personalized experiences increase both purchase value and frequency.",
              },
              {
                n: "6",
                title: "Focus on customer success",
                body: "Help customers achieve their goals with your product. Customer success increases satisfaction, retention, and upsell opportunities. Successful customers become long-term, high-value customers.",
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

        {/* ── LTV BY BUSINESS MODEL ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            LTV by Business Model
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            LTV varies significantly by business model. Understanding typical LTV ranges for your model helps assess your performance and set realistic goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Business Model</th>
                <th className="dark:text-slate-100">Typical LTV Range</th>
                <th className="dark:text-slate-100">Key Characteristics</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Subscription SaaS", "$1,000-$10,000+", "Recurring revenue, high retention"],
                ["E-commerce", "$100-$1,000", "Transaction-based, variable frequency"],
                ["Marketplace", "$200-$2,000", "Commission-based, network effects"],
                ["Freemium SaaS", "$500-$5,000", "Free to paid conversion focus"],
                ["Service Business", "$500-$5,000", "Relationship-based, high touch"],
              ].map(([model, range, characteristics]) => (
                <tr key={model}>
                  <td className="dark:text-slate-100">{model}</td>
                  <td className="dark:text-slate-100">{range}</td>
                  <td className="dark:text-slate-100">{characteristics}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Subscription SaaS typically has the highest LTV due to recurring revenue and high retention. E-commerce has lower LTV but can compensate with higher volume. Focus on optimizing for your specific model characteristics.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common LTV Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses underestimate LTV or focus on acquisition over retention. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on acquisition",
                body: "Acquisition without retention is unsustainable. Retention is typically 5-25x cheaper than acquisition. Focus equally on keeping customers as acquiring new ones. Retention drives LTV more than acquisition.",
              },
              {
                n: "2",
                title: "Not tracking LTV by segment",
                body: "LTV varies by customer segment. Track LTV by acquisition channel, customer type, and behavior. High-value segments justify higher acquisition spend. Segment-specific LTV reveals optimization opportunities.",
              },
              {
                n: "3",
                title: "Using average purchase value only",
                body: "LTV requires all three components: value, frequency, and lifespan. Focusing only on purchase value misses the impact of frequency and retention. Calculate complete LTV for accurate assessment.",
              },
              {
                n: "4",
                title: "Ignoring churn in LTV calculation",
                body: "Churn directly impacts customer lifespan. Not accounting for churn overestimates LTV. Use actual churn data to calculate realistic customer lifespan. Churn reduction is a powerful LTV lever.",
              },
              {
                n: "5",
                title: "Not calculating LTV to CAC ratio",
                body: "LTV alone doesn't indicate acquisition efficiency. Calculate LTV to CAC ratio to assess whether acquisition spend is justified. This ratio is critical for sustainable growth decisions.",
              },
              {
                n: "6",
                title: "Assuming LTV is static",
                body: "LTV changes over time as you improve retention, pricing, and customer experience. Track LTV trends and measure the impact of initiatives. Continuous improvement drives continuous LTV growth.",
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
            Practical Tips for LTV Optimization
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate LTV accurately</>],
              [<><strong>Track by segment</strong> — channel, customer type, behavior</>],
              [<><strong>Focus on retention</strong> — cheaper than acquisition</>],
              [<><strong>Increase AOV</strong> — upsells, cross-sells, bundles</>],
              [<><strong>Implement subscriptions</strong> — recurring revenue</>],
              [<><strong>Calculate LTV:CAC</strong> — assess acquisition efficiency</>],
              [<><strong>Monitor churn</strong> — critical for LTV</>],
              [<><strong>Personalize experience</strong> — increase engagement</>],
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
                q: "How do I calculate customer lifetime value?",
                a: "LTV = Average Purchase Value × Purchase Frequency × Customer Lifespan. Calculate average purchase value from total revenue divided by total orders. Calculate frequency from total orders divided by customers. Use average customer lifespan in months or years.",
              },
              {
                q: "What is a good LTV to CAC ratio?",
                a: "A good LTV to CAC ratio is 3:1 or higher. This means you earn $3 in lifetime value for every $1 spent on acquisition. Ratios above 5:1 are excellent. Ratios below 3:1 indicate acquisition costs are too high relative to customer value.",
              },
              {
                q: "How do I calculate average purchase value?",
                a: "Average Purchase Value = Total Revenue / Total Orders. This gives the average amount spent per transaction. Increase this through upselling, cross-selling, premium pricing, and product bundles.",
              },
              {
                q: "What is customer churn rate?",
                a: "Churn Rate = Customers Lost / Total Customers. Churn rate measures the percentage of customers who stop doing business with you. Lower churn increases customer lifespan and LTV. Churn reduction is a powerful LTV driver.",
              },
              {
                q: "How does LTV vary by business model?",
                a: "Subscription SaaS typically has the highest LTV ($1,000-$10,000+) due to recurring revenue. E-commerce has lower LTV ($100-$1,000) but higher volume. Marketplaces and service businesses fall in between. Know your model benchmarks.",
              },
              {
                q: "How can I increase customer lifetime value?",
                a: "Increase average order value through upsells and bundles, increase purchase frequency through subscriptions and loyalty programs, extend customer lifespan through retention and customer success, and personalize the customer experience.",
              },
              {
                q: "Should I calculate LTV by customer segment?",
                a: "Yes, LTV varies significantly by segment. Track LTV by acquisition channel, customer type, and behavior. High-value segments justify higher acquisition spend. Segment-specific LTV reveals optimization opportunities.",
              },
              {
                q: "How often should I calculate LTV?",
                a: "Calculate LTV monthly for active businesses and quarterly for strategic planning. Track LTV trends over time to measure the impact of initiatives. Regular LTV calculation ensures you're making data-driven decisions.",
              },
              {
                q: "What is the difference between LTV and CLV?",
                a: "LTV and CLV (Customer Lifetime Value) are the same metric. Both measure the total revenue expected from a customer over their relationship. The terms are used interchangeably. Use whichever term your team prefers.",
              },
              {
                q: "How does customer acquisition cost affect LTV?",
                a: "CAC does not affect LTV directly, but the LTV to CAC ratio is critical. High CAC requires high LTV for sustainable growth. Calculate LTV to CAC ratio to assess whether acquisition spend is justified. Aim for 3:1 or higher.",
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
            Customer Lifetime Value is the most important metric for assessing customer relationship profitability. Understanding LTV, tracking it by segment, and optimizing it through retention and upselling drives sustainable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate LTV and the LTV to CAC ratio. But the real value comes from using this information to optimize acquisition spend, focus on retention, and increase customer value over time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're running a subscription business, e-commerce store, or service company, accurate LTV calculation provides the foundation for growth decisions. Calculate precisely, optimize continuously, and build valuable customer relationships.
          </p>
          <div className="pull-quote mt-8">
            The most profitable customer is the one who stays longest. Focus on lifetime value, not just first purchase, and build a sustainable business.
          </div>
        </section>

      </div>
    </article>
  );
}
