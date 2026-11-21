import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InventoryCostCalculatorArticle() {
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
          <span className="meta-tag">Business · Inventory Management</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Inventory Cost Calculator: Calculate Holding and Ordering Costs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for inventory managers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You hold $100,000 of inventory in your warehouse. Annual holding costs include storage ($15,000), insurance ($2,000), obsolescence ($5,000), and capital costs ($8,000 at 8%). Total holding costs are $30,000 annually — 30% of inventory value. If you can reduce inventory levels by 20% through better management, holding costs drop to $24,000, saving $6,000 annually while maintaining service levels.
          </p>
          <p className="mb-5">
            Inventory costs extend beyond the purchase price. Holding costs include storage, insurance, obsolescence, and capital costs. Ordering costs include processing, receiving, and inspection. Understanding these costs helps optimize inventory levels and improve profitability.
          </p>
          <p className="mb-5">
            But inventory costs vary significantly by product type, storage requirements, and turnover rate. Calculating total inventory cost reveals the true cost of holding inventory and identifies optimization opportunities.
          </p>
          <p>
            The inventory cost calculator above helps you calculate holding costs, ordering costs, and total inventory cost to make informed inventory decisions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Inventory Cost Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Total inventory cost includes holding costs, ordering costs, and purchase costs. Holding costs are expressed as a percentage of inventory value and include storage, insurance, obsolescence, and capital costs.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Inventory Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Total Cost = Holding Cost + Ordering Cost + Purchase Cost</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Average Inventory Value", "$100,000"],
              ["Holding Cost Rate", "25% annually"],
              ["Annual Holding Cost", "$100,000 × 0.25 = $25,000"],
              ["Annual Orders", "20 orders"],
              ["Cost per Order", "$100"],
              ["Annual Ordering Cost", "20 × $100 = $2,000"],
              ["Annual Purchase Cost", "$500,000"],
              ["Total Annual Cost", "$527,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, holding costs are $25,000 annually. Reducing average inventory by 20% saves $5,000 in holding costs. Understanding these costs helps justify inventory optimization investments.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HOLDING COST COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Holding Cost Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Holding costs represent the cost of storing inventory over time. These costs are typically expressed as an annual percentage of inventory value and vary by product and storage requirements.
          </p>

          {[
            {
              heading: "Storage Costs",
              rows: [
                ["Includes", "Warehouse rent, utilities, equipment"],
                ["Typical Range", "3-10% of inventory value"],
                ["Variation", "Higher for climate-controlled storage"],
              ],
              note: "Storage costs include warehouse space, climate control, and equipment. Specialized storage (refrigerated, hazardous) costs significantly more. Optimize storage utilization to reduce per-unit costs.",
            },
            {
              heading: "Capital Costs",
              rows: [
                ["Includes", "Interest on capital tied in inventory"],
                ["Typical Range", "5-15% of inventory value"],
                ["Variation", "Based on cost of capital"],
              ],
              note: "Capital tied in inventory has opportunity cost. This is the return you could earn if that capital were invested elsewhere. Use your company's weighted average cost of capital (WACC) for accuracy.",
            },
            {
              heading: "Risk Costs",
              rows: [
                ["Includes", "Obsolescence, damage, theft, insurance"],
                ["Typical Range", "5-10% of inventory value"],
                ["Variation", "Higher for perishable or trendy items"],
              ],
              note: "Risk costs include obsolescence (especially for technology or fashion items), damage, theft, and insurance. Perishable goods have higher risk costs due to spoilage. Track these costs by product category.",
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

        {/* ── ORDERING COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Ordering Cost Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Ordering costs are incurred each time you place an order. These costs are fixed per order regardless of order size, creating a trade-off between ordering frequency and holding costs.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Cost Component</th>
                <th className="dark:text-slate-100">Typical Cost</th>
                <th className="dark:text-slate-100">Optimization Strategy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Order Processing", "$25-100 per order", "Automate ordering systems"],
                ["Receiving & Inspection", "$15-50 per order", "Streamline receiving processes"],
                ["Supplier Communication", "$10-30 per order", "Use electronic ordering"],
                ["Administrative Overhead", "$20-75 per order", "Standardize procedures"],
              ].map(([component, cost, strategy]) => (
                <tr key={component}>
                  <td className="dark:text-slate-100">{component}</td>
                  <td className="dark:text-slate-100">{cost}</td>
                  <td className="dark:text-slate-100">{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Total ordering costs typically range $50-250 per order. Reducing ordering costs through automation and process improvement allows more frequent, smaller orders without increasing total cost.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── REDUCING INVENTORY COSTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Reduce Inventory Costs
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Reducing inventory costs requires optimizing both holding costs and ordering costs. Here are proven strategies to lower total inventory costs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Optimize inventory levels",
                body: "Use EOQ to determine optimal order quantities. Implement just-in-time inventory where feasible. Reduce safety stock to minimum acceptable levels. Lower inventory directly reduces holding costs.",
              },
              {
                n: "2",
                title: "Improve demand forecasting",
                body: "Better forecasting reduces the need for safety stock. Use historical data, seasonality analysis, and market trends. Accurate forecasts prevent overstocking and stockouts.",
              },
              {
                n: "3",
                title: "Reduce lead times",
                body: "Shorter lead times reduce safety stock requirements. Work with suppliers to improve delivery times. Consider local suppliers for critical items. Reduced lead times lower inventory needs.",
              },
              {
                n: "4",
                title: "Implement ABC analysis",
                body: "Focus management on high-value items. A-items (high value) get tight control. C-items (low value) can have looser controls. Allocate management effort where it has the most impact.",
              },
              {
                n: "5",
                title: "Automate ordering",
                body: "Automated ordering reduces ordering costs and human error. Implement reorder point systems and automated purchase orders. Automation allows optimal ordering frequency without administrative burden.",
              },
              {
                n: "6",
                title: "Consolidate suppliers",
                body: "Fewer suppliers reduce ordering complexity and may qualify for volume discounts. Consolidate where quality and reliability allow. Balance supplier consolidation with risk management.",
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

        {/* ── COST BY INDUSTRY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Inventory Costs by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Inventory costs vary significantly by industry due to product characteristics, storage requirements, and turnover rates. Understanding industry benchmarks helps assess your performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Holding Cost Rate</th>
                <th className="dark:text-slate-100">Key Cost Drivers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Retail", "20-35%", "Storage, capital, obsolescence"],
                ["Manufacturing", "15-30%", "Storage, capital, handling"],
                ["Food & Beverage", "25-40%", "Spoilage, climate control, insurance"],
                ["Electronics", "25-45%", "Obsolescence, rapid depreciation"],
                ["Pharmaceuticals", "30-50%", "Climate control, expiration, regulation"],
                ["Apparel", "25-40%", "Seasonality, obsolescence, storage"],
              ].map(([industry, rate, drivers]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{rate}</td>
                  <td className="dark:text-slate-100">{drivers}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Industries with perishable or rapidly obsolescent products have higher holding costs. Electronics and fashion face high obsolescence costs. Food and pharmaceuticals require climate control and face spoilage risks.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Inventory Cost Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses underestimate inventory costs, leading to poor decisions. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Ignoring holding costs",
                body: "Focusing only on purchase price ignores significant holding costs. Holding costs typically range 20-35% annually. Include holding costs in all inventory decisions to make accurate comparisons.",
              },
              {
                n: "2",
                title: "Not calculating capital costs",
                body: "Capital tied in inventory has opportunity cost. Use your WACC to calculate capital costs. Not including capital costs underestimates true inventory cost.",
              },
              {
                n: "3",
                title: "Overestimating ordering costs",
                body: "Some businesses overestimate ordering costs to justify large orders. Calculate actual ordering costs accurately. Automation reduces ordering costs, allowing more frequent orders.",
              },
              {
                n: "4",
                title: "Ignoring obsolescence risk",
                body: "Obsolescence is a major cost for technology and fashion items. Factor obsolescence risk into holding costs. High obsolescence risk justifies lower inventory levels.",
              },
              {
                n: "5",
                title: "Not tracking costs by product",
                body: "Different products have different cost structures. Track holding and ordering costs by product category. Apply appropriate strategies based on cost characteristics.",
              },
              {
                n: "6",
                title: "Not reviewing costs annually",
                body: "Inventory costs change over time due to inflation, rate changes, and business growth. Review holding costs annually and adjust calculations accordingly.",
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
            Practical Tips for Inventory Cost Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate total inventory costs</>],
              [<><strong>Track all components</strong> — storage, capital, risk, ordering</>],
              [<><strong>Use EOQ</strong> — optimize order quantities</>],
              [<><strong>Improve forecasting</strong> — reduce safety stock needs</>],
              [<><strong>Reduce lead times</strong> — lower inventory requirements</>],
              [<><strong>Implement ABC analysis</strong> — prioritize management effort</>],
              [<><strong>Automate ordering</strong> — reduce ordering costs</>],
              [<><strong>Review annually</strong> — update for changes</>],
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
                q: "How do I calculate inventory holding cost?",
                a: "Holding Cost = Average Inventory Value × Holding Cost Rate. The holding cost rate typically ranges 20-35% annually and includes storage, capital, insurance, obsolescence, and risk costs. Calculate by component for accuracy.",
              },
              {
                q: "What is a typical holding cost percentage?",
                a: "Typical holding costs range 20-35% of inventory value annually. Retail averages 20-35%, manufacturing 15-30%, food and beverage 25-40%, and electronics 25-45% due to obsolescence risk.",
              },
              {
                q: "What is included in ordering costs?",
                a: "Ordering costs include order processing, receiving, inspection, supplier communication, and administrative overhead. These are fixed costs per order regardless of order size. Typical costs range $50-250 per order.",
              },
              {
                q: "How do I calculate cost of capital for inventory?",
                a: "Use your company's Weighted Average Cost of Capital (WACC). If WACC is 10%, capital cost is 10% of inventory value annually. This represents the opportunity cost of capital tied in inventory.",
              },
              {
                q: "What is economic order quantity (EOQ)?",
                a: "EOQ is the order quantity that minimizes total inventory costs. EOQ = Square root of (2 × Annual Demand × Order Cost / Holding Cost per Unit). EOQ balances ordering costs against holding costs.",
              },
              {
                q: "How can I reduce inventory holding costs?",
                a: "Reduce inventory levels through EOQ optimization, improve demand forecasting to reduce safety stock, implement just-in-time inventory, reduce lead times, and eliminate slow-moving or obsolete inventory.",
              },
              {
                q: "What is the difference between holding and ordering costs?",
                a: "Holding costs are ongoing costs of storing inventory (storage, capital, insurance). Ordering costs are one-time costs per order (processing, receiving). Holding costs increase with inventory; ordering costs decrease with larger orders.",
              },
              {
                q: "How do I calculate total inventory cost?",
                a: "Total Inventory Cost = Holding Cost + Ordering Cost + Purchase Cost. Holding cost is annual based on average inventory. Ordering cost is annual based on order frequency. Purchase cost is based on units purchased.",
              },
              {
                q: "What is ABC analysis in inventory?",
                a: "ABC analysis classifies inventory by value. A-items (10-20% of items, 70-80% of value) get tight control. B-items get moderate attention. C-items (low value) get minimal attention. Focus effort where it has most impact.",
              },
              {
                q: "How often should I review inventory costs?",
                a: "Review inventory costs annually to account for inflation, rate changes, and business growth. Review holding cost components quarterly if significant changes occur. Update calculations based on current data.",
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
            Inventory costs significantly impact profitability and cash flow. Understanding holding costs, ordering costs, and total inventory cost provides the foundation for inventory optimization decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate inventory costs and understand cost components. But the real value comes from using this information to optimize inventory levels, reduce costs, and improve profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're managing a small retail operation or a large warehouse, accurate cost calculation reveals optimization opportunities. Calculate precisely, optimize continuously, and improve your bottom line.
          </p>
          <div className="pull-quote mt-8">
            Inventory costs are often hidden but significant. Calculate accurately, optimize relentlessly, and turn inventory from cost center into competitive advantage.
          </div>
        </section>

      </div>
    </article>
  );
}
