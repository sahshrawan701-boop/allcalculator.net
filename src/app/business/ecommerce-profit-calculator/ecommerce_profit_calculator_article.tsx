import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EcommerceProfitCalculatorArticle() {
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
          <span className="meta-tag">Business · E-commerce</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            E-commerce Profit Calculator: Calculate Your Online Store Margins
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for e-commerce business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your online store sells a product for $100. The product costs you $40, shipping is $8, and you spend $15 on marketing per sale. Payment processing fees are $3. Your total cost is $66, leaving a $34 profit per sale. With 500 monthly sales, that's $17,000 in profit. But if you can reduce marketing cost to $10 per sale through better targeting, profit jumps to $39 per unit — adding $2,500 monthly profit.
          </p>
          <p className="mb-5">
            E-commerce profitability requires managing multiple cost components — product costs, shipping, marketing, payment processing, and operational overhead. Understanding your true profit per sale is essential for making informed pricing and marketing decisions.
          </p>
          <p className="mb-5">
            But e-commerce margins vary significantly by product category, business model, and scale. What constitutes healthy profitability depends on your industry, competitive position, and growth stage. Accurate profit calculation reveals optimization opportunities.
          </p>
          <p>
            The e-commerce profit calculator above helps you calculate profit margins, analyze cost structures, and understand the impact of changes on your bottom line.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How E-commerce Profit Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            E-commerce profit is calculated by subtracting all costs from revenue. These costs include product costs, shipping, marketing, payment processing, and operational expenses.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Profit = Revenue - (Product Cost + Shipping + Marketing + Fees + Operations)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Selling Price", "$100"],
              ["Product Cost", "$40"],
              ["Shipping Cost", "$8"],
              ["Marketing per Sale", "$15"],
              ["Payment Processing (3%)", "$3"],
              ["Total Costs", "$66"],
              ["Profit per Sale", "$34"],
              ["Profit Margin", "34%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 34% profit margin is healthy for e-commerce. If marketing costs increase to $20 per sale, profit drops to $29 (29% margin). Monitoring and optimizing marketing efficiency is critical for maintaining profitability.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COST STRUCTURES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            E-commerce Cost Structures
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            E-commerce businesses have multiple cost categories that must be tracked and optimized. Understanding each cost component helps identify improvement opportunities.
          </p>

          {[
            {
              heading: "Cost of Goods Sold (COGS)",
              rows: [
                ["Includes", "Product cost, packaging, inbound shipping"],
                ["Typical Range", "30-50% of revenue"],
                ["Optimization", "Volume discounts, supplier negotiation"],
              ],
              note: "COGS is typically the largest expense. Negotiating better rates with suppliers, optimizing packaging, and improving inventory management can significantly reduce costs. Volume discounts become available as you scale.",
            },
            {
              heading: "Marketing & Advertising",
              rows: [
                ["Includes", "Paid ads, influencer marketing, content"],
                ["Typical Range", "10-25% of revenue"],
                ["Optimization", "Improve ROAS, focus on organic channels"],
              ],
              note: "Marketing costs directly impact profitability. Focus on improving return on ad spend (ROAS), building organic traffic through SEO and content, and optimizing conversion rates to reduce customer acquisition costs.",
            },
            {
              heading: "Operations & Overhead",
              rows: [
                ["Includes", "Platform fees, software, labor, fulfillment"],
                ["Typical Range", "15-25% of revenue"],
                ["Optimization", "Automate processes, negotiate platform fees"],
              ],
              note: "Operational costs include e-commerce platform fees, payment processing, software subscriptions, and fulfillment labor. Automation and efficient processes reduce operational costs as you scale.",
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

        {/* ── PROFITABILITY BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            E-commerce Profitability Benchmarks
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Profit margins vary by e-commerce business model and product category. Understanding benchmarks helps assess your performance and set realistic goals.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Business Model</th>
                <th className="dark:text-slate-100">Typical Margin</th>
                <th className="dark:text-slate-100">Key Characteristics</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Private Label", "30-50%", "Brand-owned products, higher margins"],
                ["Dropshipping", "15-30%", "No inventory, lower margins"],
                ["Wholesale", "10-25%", "Volume-based, lower margins"],
                ["Digital Products", "70-90%", "Zero marginal cost, highest margins"],
                ["Subscription", "40-60%", "Recurring revenue, LTV focus"],
              ].map(([model, margin, characteristics]) => (
                <tr key={model}>
                  <td className="dark:text-slate-100">{model}</td>
                  <td className="dark:text-slate-100">{margin}</td>
                  <td className="dark:text-slate-100">{characteristics}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Private label and digital products typically offer the highest margins. Dropshipping and wholesale trade lower margins for lower risk and capital requirements. Choose your model based on capital, risk tolerance, and margin goals.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING PROFITABILITY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve E-commerce Profitability
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improving profitability requires optimizing both revenue and costs. Here are proven strategies to increase your e-commerce margins.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase average order value",
                body: "Higher AOV spreads fixed costs across more revenue. Implement product bundles, upsells, cross-sells, and free shipping thresholds. Every additional dollar per order directly improves margin percentage.",
              },
              {
                n: "2",
                title: "Improve conversion rates",
                body: "Better conversion reduces customer acquisition cost. Optimize product pages, checkout flow, and site speed. Small conversion improvements compound into significant revenue and profit gains.",
              },
              {
                n: "3",
                title: "Optimize marketing spend",
                body: "Focus on high-ROAS channels and campaigns. Improve ad creative, targeting, and landing pages. Build organic traffic through SEO and content to reduce paid acquisition dependency.",
              },
              {
                n: "4",
                title: "Reduce product costs",
                body: "Negotiate better supplier rates, optimize packaging, and reduce waste. Volume discounts become available as you scale. Every dollar saved in COGS directly increases profit.",
              },
              {
                n: "5",
                title: "Implement retention strategies",
                body: "Repeat customers have lower acquisition costs and higher LTV. Implement email marketing, loyalty programs, and subscription models. Retention is more profitable than acquisition.",
              },
              {
                n: "6",
                title: "Optimize operations",
                body: "Automate repetitive tasks, negotiate platform fees, and improve fulfillment efficiency. Operational costs scale with revenue but automation reduces the cost per transaction.",
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
            Common E-commerce Profitability Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many e-commerce businesses struggle with profitability due to common mistakes. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Underestimating total costs",
                body: "Focusing only on product cost ignores shipping, marketing, fees, and operations. Calculate total landed cost including all expenses. Underestimating costs leads to surprise losses.",
              },
              {
                n: "2",
                title: "Over-reliance on paid acquisition",
                body: "Depending entirely on paid ads makes profitability vulnerable to rising costs. Build organic traffic through SEO, content, and email marketing. Diversify acquisition channels.",
              },
              {
                n: "3",
                title: "Ignoring customer lifetime value",
                body: "Focusing only on first-sale profit misses the bigger picture. Calculate LTV and ensure acquisition costs are justified. Repeat purchases dramatically improve overall profitability.",
              },
              {
                n: "4",
                title: "Not tracking metrics",
                body: "Not measuring key metrics means flying blind. Track profit margin, AOV, conversion rate, ROAS, and LTV. Data-driven decisions improve profitability faster than intuition.",
              },
              {
                n: "5",
                title: "Competing on price alone",
                body: "Price competition leads to margin erosion. Focus on value, brand, and customer experience. Premium positioning with better margins is more sustainable than being the cheapest.",
              },
              {
                n: "6",
                title: "Neglecting retention",
                body: "Acquiring new customers is 5-25x more expensive than retaining existing ones. Implement email marketing, loyalty programs, and excellent customer service. Retention drives profitability.",
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
            Practical Tips for E-commerce Profitability
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track profit by product</>],
              [<><strong>Calculate total costs</strong> — include all expenses</>],
              [<><strong>Monitor key metrics</strong> — margin, AOV, conversion, ROAS</>],
              [<><strong>Increase AOV</strong> — bundles, upsells, cross-sells</>],
              [<><strong>Build organic traffic</strong> — SEO, content, email</>],
              [<><strong>Focus on retention</strong> — repeat customers are profitable</>],
              [<><strong>Optimize operations</strong> — automate and negotiate</>],
              [<><strong>Calculate LTV</strong> — understand true customer value</>],
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
                q: "How do I calculate e-commerce profit?",
                a: "Profit = Revenue - (COGS + Shipping + Marketing + Fees + Operations). Include all costs to get accurate profit. The calculator above automates this calculation and helps track profitability over time.",
              },
              {
                q: "What is a good profit margin for e-commerce?",
                a: "Healthy e-commerce margins vary by model: private label 30-50%, dropshipping 15-30%, digital products 70-90%. Aim for at least 20-30% margin for sustainable growth. Focus on value, not just volume.",
              },
              {
                q: "How do I calculate average order value?",
                a: "AOV = Total Revenue / Number of Orders. Increasing AOV through bundles, upsells, and cross-sells improves profitability by spreading fixed costs across more revenue per transaction.",
              },
              {
                q: "What is return on ad spend (ROAS)?",
                a: "ROAS = Revenue from Ads / Ad Spend. A 4:1 ROAS means $4 revenue for every $1 spent. Higher ROAS indicates more efficient advertising. Track ROAS by campaign to optimize marketing spend.",
              },
              {
                q: "How can I improve my e-commerce margins?",
                a: "Increase AOV through bundles and upsells, improve conversion rates, optimize marketing spend, reduce COGS through negotiation, implement retention strategies, and optimize operations. Focus on both revenue and cost optimization.",
              },
              {
                q: "What costs should I include in e-commerce profit calculation?",
                a: "Include product cost, shipping, marketing, payment processing fees (2.9-3.5%), platform fees, software subscriptions, labor, packaging, returns, and operational overhead. Comprehensive tracking ensures accurate profitability.",
              },
              {
                q: "How does customer lifetime value affect profitability?",
                a: "LTV represents total revenue from a customer over their relationship. High LTV justifies higher acquisition costs. Focus on retention strategies to increase LTV. Repeat customers dramatically improve overall profitability.",
              },
              {
                q: "Should I offer free shipping?",
                a: "Free shipping increases conversion rates but reduces margin. Build shipping cost into pricing or require a minimum order threshold. Calculate the impact on margin and conversion to determine if free shipping is profitable.",
              },
              {
                q: "How often should I review e-commerce profitability?",
                a: "Review profitability weekly for active campaigns and monthly for overall business health. Track profit by product, channel, and campaign. Regular review identifies issues quickly and optimization opportunities.",
              },
              {
                q: "What is the difference between gross and net profit?",
                a: "Gross profit = Revenue - COGS. Net profit = Revenue - All Costs (including marketing, operations, fees). Net profit is the true measure of business profitability. Track both to understand cost structure.",
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
            E-commerce profitability requires managing multiple cost components while driving revenue growth. Understanding your true profit per sale, tracking key metrics, and optimizing both costs and revenue is essential for sustainable success.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate profit margins and analyze cost structures. But the real value comes from continuous optimization — improving AOV, conversion rates, marketing efficiency, and customer retention.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're launching a new e-commerce store or scaling an existing one, accurate profit calculation provides the foundation for growth. Focus on value, optimize relentlessly, and build a profitable business.
          </p>
          <div className="pull-quote mt-8">
            E-commerce success isn't about traffic or revenue alone. It's about profitable growth — increasing revenue while maintaining or improving margins.
          </div>
        </section>

      </div>
    </article>
  );
}
