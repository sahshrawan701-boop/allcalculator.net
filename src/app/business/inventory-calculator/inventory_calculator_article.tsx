import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function InventoryCalculatorArticle() {
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
            Inventory Calculator: Calculate Reorder Points and Stock Levels
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for inventory managers and business owners
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business sells 100 units per week of a product. It takes 2 weeks for new inventory to arrive from your supplier. To avoid stockouts, you need to reorder when inventory reaches 200 units (100 × 2). But to account for demand variability and supplier delays, you add a 50-unit safety stock. Your reorder point becomes 250 units. When inventory drops to 250 units, you place a new order. This ensures you never run out while minimizing excess inventory.
          </p>
          <p className="mb-5">
            Inventory management balances the risk of stockouts against the cost of holding excess inventory. Calculating reorder points, safety stock, and economic order quantities helps optimize inventory levels and cash flow.
          </p>
          <p className="mb-5">
            But optimal inventory levels vary by product, supplier reliability, and demand patterns. Understanding inventory calculations helps you make data-driven decisions about when and how much to reorder.
          </p>
          <p>
            The inventory calculator above helps you calculate reorder points, safety stock, and optimal order quantities to manage your inventory efficiently.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Inventory Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Inventory calculations determine when to reorder and how much to order. The reorder point triggers new orders, while safety stock buffers against variability, and economic order quantity minimizes total costs.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Reorder Point Formula:
          </p>
          <div className="formula-block">
            <pre>Reorder Point = (Daily Demand × Lead Time) + Safety Stock</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Daily Demand", "20 units"],
              ["Lead Time", "10 days"],
              ["Demand During Lead Time", "20 × 10 = 200 units"],
              ["Safety Stock", "50 units"],
              ["Reorder Point", "200 + 50 = 250 units"],
              ["Economic Order Quantity", "300 units"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, reorder when inventory reaches 250 units. Order 300 units at a time to minimize costs. This ensures you never stock out while avoiding excess inventory that ties up capital.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── KEY CONCEPTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Inventory Concepts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding key inventory concepts is essential for effective inventory management. Each concept addresses different aspects of inventory optimization.
          </p>

          {[
            {
              heading: "Reorder Point",
              rows: [
                ["Definition", "Inventory level that triggers reorder"],
                ["Purpose", "Prevent stockouts during lead time"],
                ["Calculation", "Daily Demand × Lead Time + Safety Stock"],
              ],
              note: "The reorder point is the inventory level at which you place a new order. It accounts for demand during lead time plus a safety buffer. Reorder at the right time to avoid stockouts without holding excess inventory.",
            },
            {
              heading: "Safety Stock",
              rows: [
                ["Definition", "Buffer inventory for variability"],
                ["Purpose", "Protect against demand spikes and delays"],
                ["Calculation", "Based on demand variability and service level"],
              ],
              note: "Safety stock protects against unexpected demand increases or supplier delays. Higher safety stock reduces stockout risk but increases holding costs. Calculate based on desired service level and historical variability.",
            },
            {
              heading: "Economic Order Quantity",
              rows: [
                ["Definition", "Optimal order size to minimize costs"],
                ["Purpose", "Balance ordering and holding costs"],
                ["Calculation", "Square root of (2 × Demand × Order Cost / Holding Cost)"],
              ],
              note: "EOQ balances ordering costs against holding costs. Order too frequently and ordering costs increase. Order too much and holding costs increase. EOQ finds the optimal balance.",
            },
          ].map((concept: { heading: string; rows: string[][]; note: string }) => (
            <div key={concept.heading} className="state-card">
              <h3>{concept.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {concept.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{concept.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── SAFETY STOCK CALCULATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Calculating Safety Stock
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Safety stock protects against variability in demand and lead time. The right safety stock level balances stockout risk against holding costs.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Analyze demand variability",
                body: "Calculate standard deviation of daily demand from historical data. Higher variability requires more safety stock. Track demand patterns by season and identify trends to improve accuracy.",
              },
              {
                n: "2",
                title: "Determine desired service level",
                body: "Service level is the probability of not stocking out. Common levels are 95% (5% stockout risk) or 99% (1% stockout risk). Higher service levels require more safety stock.",
              },
              {
                n: "3",
                title: "Account for lead time variability",
                body: "If supplier lead times vary, include this in safety stock calculation. Longer or more variable lead times require larger safety stock buffers.",
              },
              {
                n: "4",
                title: "Calculate safety stock",
                body: "Safety Stock = Z-score × Standard Deviation × Square Root of Lead Time. For a 95% service level, Z-score is 1.65. This formula accounts for demand variability over the lead time period.",
              },
              {
                n: "5",
                title: "Review and adjust regularly",
                body: "Demand patterns change over time. Review safety stock calculations quarterly or when significant changes occur. Adjust based on updated data and changing business conditions.",
              },
              {
                n: "6",
                title: "Consider ABC classification",
                body: "A-items (high value) may warrant higher safety stock to prevent stockouts. C-items (low value) may accept higher stockout risk to reduce holding costs. Classify and manage accordingly.",
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

        {/* ── EOQ CALCULATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Economic Order Quantity (EOQ)
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            EOQ determines the optimal order size that minimizes total inventory costs. It balances ordering costs against holding costs.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Cost Component</th>
                <th className="dark:text-slate-100">Impact of Order Size</th>
                <th className="dark:text-slate-100">Optimization Strategy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Ordering Costs", "Decreases with larger orders", "Order less frequently in larger quantities"],
                ["Holding Costs", "Increases with larger orders", "Order more frequently in smaller quantities"],
                ["EOQ Balance", "Minimizes total costs", "Find optimal order size"],
              ].map(([component, impact, strategy]) => (
                <tr key={component}>
                  <td className="dark:text-slate-100">{component}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                  <td className="dark:text-slate-100">{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            EOQ assumes constant demand and fixed costs. In practice, adjust EOQ for quantity discounts, minimum order quantities, and seasonal demand patterns. Use EOQ as a starting point, not a rigid rule.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Inventory Management Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Poor inventory management leads to stockouts, excess inventory, and cash flow problems. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not calculating reorder points",
                body: "Reordering based on intuition rather than calculation leads to stockouts or excess inventory. Calculate reorder points based on demand, lead time, and safety stock. Data-driven decisions outperform intuition.",
              },
              {
                n: "2",
                title: "Ignoring safety stock",
                body: "No safety stock means any demand spike or delay causes stockouts. Even small safety stock buffers prevent most stockouts. Calculate safety stock based on variability and desired service level.",
              },
              {
                n: "3",
                title: "Not tracking demand patterns",
                body: "Seasonal demand, trends, and promotions affect inventory needs. Track demand patterns and adjust inventory levels accordingly. Historical data improves forecasting accuracy.",
              },
              {
                n: "4",
                title: "Over-relying on a single supplier",
                body: "Single supplier dependency increases risk. Diversify suppliers where possible, especially for critical items. Maintain higher safety stock for single-source items.",
              },
              {
                n: "5",
                title: "Not reviewing inventory regularly",
                body: "Inventory needs change over time. Review inventory levels, turnover rates, and calculations quarterly. Adjust based on changing demand, costs, and business conditions.",
              },
              {
                n: "6",
                title: "Ignoring holding costs",
                body: "Holding inventory ties up capital and incurs costs (storage, insurance, obsolescence). Include holding costs in EOQ calculations and inventory decisions. Optimize to minimize total costs.",
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
            Practical Tips for Inventory Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate reorder points</>],
              [<><strong>Track demand patterns</strong> — historical data improves accuracy</>],
              [<><strong>Calculate safety stock</strong> — buffer against variability</>],
              [<><strong>Use EOQ</strong> — optimize order quantities</>],
              [<><strong>Review regularly</strong> — adjust for changes</>],
              [<><strong>Diversify suppliers</strong> — reduce dependency risk</>],
              [<><strong>Use ABC classification</strong> — prioritize management effort</>],
              [<><strong>Monitor turnover</strong> — identify slow-moving inventory</>],
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
                q: "How do I calculate reorder point?",
                a: "Reorder Point = (Daily Demand × Lead Time) + Safety Stock. Calculate daily demand from historical sales, multiply by lead time in days, then add safety stock. The calculator above automates this calculation.",
              },
              {
                q: "What is safety stock?",
                a: "Safety stock is buffer inventory that protects against demand variability and supplier delays. It ensures you can meet demand even if sales spike or shipments are delayed. Calculate based on desired service level and historical variability.",
              },
              {
                q: "What is economic order quantity (EOQ)?",
                a: "EOQ is the optimal order size that minimizes total inventory costs. It balances ordering costs against holding costs. EOQ = Square root of (2 × Annual Demand × Order Cost / Holding Cost per Unit).",
              },
              {
                q: "How much safety stock do I need?",
                a: "Safety stock depends on demand variability and desired service level. For 95% service level, use Z-score of 1.65. Safety Stock = Z-score × Standard Deviation × Square Root of Lead Time. Higher service levels require more safety stock.",
              },
              {
                q: "What is a good inventory turnover ratio?",
                a: "Good turnover varies by industry: retail 4-6x, manufacturing 8-12x, food 15-20x. Higher turnover indicates efficient inventory management. Low turnover suggests overstocking or slow-moving inventory.",
              },
              {
                q: "How do I calculate lead time demand?",
                a: "Lead Time Demand = Daily Demand × Lead Time. If you sell 20 units daily and lead time is 10 days, lead time demand is 200 units. This is the inventory needed to cover demand during the reorder period.",
              },
              {
                q: "What is ABC inventory classification?",
                a: "ABC classification prioritizes inventory by value. A-items (high value, 10-20% of items, 70-80% of value) get most management attention. B-items get moderate attention. C-items (low value) get minimal attention.",
              },
              {
                q: "How often should I review inventory levels?",
                a: "Review inventory levels monthly for A-items, quarterly for B-items, and annually for C-items. More frequent reviews for high-value items prevent stockouts and overstocking. Adjust based on demand volatility.",
              },
              {
                q: "What is the difference between lead time and reorder point?",
                a: "Lead time is the time between placing and receiving an order. Reorder point is the inventory level that triggers a new order. Reorder point accounts for demand during lead time plus safety stock.",
              },
              {
                q: "How do I reduce inventory holding costs?",
                a: "Optimize order quantities using EOQ, improve demand forecasting, reduce lead times, implement just-in-time inventory, and regularly review and eliminate slow-moving inventory. Lower inventory levels reduce holding costs.",
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
            Effective inventory management balances the risk of stockouts against the cost of holding inventory. Calculating reorder points, safety stock, and economic order quantities provides the data needed for optimal inventory decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate these key inventory metrics. But the real value comes from using these calculations to make data-driven decisions about when and how much to reorder.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're managing a small retail store or a large warehouse, accurate inventory calculations prevent stockouts, minimize costs, and improve cash flow. Calculate precisely, monitor regularly, and optimize continuously.
          </p>
          <div className="pull-quote mt-8">
            The best inventory strategy balances availability with efficiency. Calculate accurately, monitor consistently, and optimize relentlessly.
          </div>
        </section>

      </div>
    </article>
  );
}
