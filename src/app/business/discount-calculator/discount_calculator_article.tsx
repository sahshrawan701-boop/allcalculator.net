import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DiscountCalculatorArticle() {
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
          <span className="meta-tag">Business · Pricing & Sales</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Discount Calculator: Calculate Sale Prices and Savings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for retailers and businesses
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You're running a 25% off sale on a product priced at $100. The discount amount is $25, and the sale price is $75. If you sell 100 units at the sale price instead of 50 at regular price, your total revenue increases from $5,000 to $7,500. The discount drives volume that more than compensates for the reduced margin.
          </p>
          <p className="mb-5">
            Discounts are a powerful sales tool that can move inventory, attract customers, and increase revenue. But they must be calculated carefully to ensure they achieve your business objectives without eroding profitability.
          </p>
          <p className="mb-5">
            However, not all discounts are created equal. Understanding the difference between percentage and fixed-amount discounts, calculating break-even points, and measuring promotional effectiveness is essential for successful discounting strategies.
          </p>
          <p>
            The discount calculator above helps you calculate sale prices, discount amounts, and understand the impact on your margins. Use it to plan promotions that drive sales while maintaining profitability.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Discount Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Discounts can be calculated as a percentage of the original price or as a fixed amount. Understanding both methods helps you choose the right approach for your promotions.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Percentage Discount Formula:
          </p>
          <div className="formula-block">
            <pre>Sale Price = Original Price × (1 - Discount Percentage)</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Fixed Amount Discount Formula:
          </p>
          <div className="formula-block">
            <pre>Sale Price = Original Price - Discount Amount</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Original Price", "$100"],
              ["Discount Percentage", "25%"],
              ["Discount Amount", "$100 × 0.25 = $25"],
              ["Sale Price", "$100 - $25 = $75"],
              ["Savings per Customer", "$25"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, customers save $25 per item. To maintain profitability, ensure your margin after discount still covers costs and generates profit. If your cost is $50, your margin drops from $50 to $25 — a 50% margin reduction that must be offset by increased volume.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── DISCOUNT TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Discounts
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different discount types serve different purposes. Understanding each type helps you choose the right approach for your promotional goals.
          </p>

          {[
            {
              heading: "Percentage Discount",
              rows: [
                ["Calculation", "Original Price × Discount %"],
                ["Best For", "High-ticket items, seasonal sales"],
                ["Advantage", "Easy to communicate, scales with price"],
              ],
              note: "Percentage discounts are the most common type. They're easy to understand and communicate. 20% off sounds appealing regardless of price point. Best for seasonal sales, clearance events, and high-ticket items.",
            },
            {
              heading: "Fixed Amount Discount",
              rows: [
                ["Calculation", "Original Price - Fixed Amount"],
                ["Best For", "Low to mid-price items, promotions"],
                ["Advantage", "Clear savings amount, simple pricing"],
              ],
              note: "Fixed amount discounts ($10 off, $20 off) provide clear savings that customers can easily calculate. They work well for lower-priced items where percentage discounts might seem insignificant.",
            },
            {
              heading: "Buy One Get One (BOGO)",
              rows: [
                ["Calculation", "Second item free or 50% off"],
                ["Best For", "Moving volume, clearing inventory"],
                ["Advantage", "Drives multiple unit purchases"],
              ],
              note: "BOGO promotions drive volume by incentivizing multiple purchases. Effective for clearing inventory and increasing average order value. Ensure margins can support the giveaway or discount.",
            },
          ].map((type: { heading: string; rows: string[][]; note: string }) => (
            <div key={type.heading} className="state-card">
              <h3>{type.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {type.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{type.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── BREAK-EVEN ANALYSIS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Discount Break-Even Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Discounts reduce margin, so you need increased volume to break even. Calculating the required volume increase ensures your promotion is profitable.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calculate margin reduction",
                body: "Determine how much margin you're giving up with the discount. If your original margin is 40% and you discount 25%, your new margin is 15%. The margin reduction is 25 percentage points.",
              },
              {
                n: "2",
                title: "Calculate required volume increase",
                body: "Required Volume Increase = Margin Reduction / New Margin. If margin reduction is 25% and new margin is 15%, you need 167% of original volume (25/15 = 1.67) to break even.",
              },
              {
                n: "3",
                title: "Assess feasibility",
                body: "Evaluate whether the required volume increase is realistic. If you need to sell 67% more units to break even, ensure your promotion and inventory can support that level. If not, adjust the discount.",
              },
              {
                n: "4",
                title: "Consider incremental costs",
                body: "Increased volume may incur additional costs — shipping, packaging, labor. Factor these into your break-even calculation. True break-even accounts for all incremental costs.",
              },
              {
                n: "5",
                title: "Set profit targets",
                body: "Don't just aim for break-even. Set a profit target for the promotion. Calculate the volume needed to achieve your target profit at the discounted price. This ensures promotions drive growth, not just maintain status quo.",
              },
              {
                n: "6",
                title: "Monitor actual performance",
                body: "Track actual sales during the promotion against your break-even projection. If performance is below target, consider extending the promotion or adjusting strategy. Real-time monitoring enables course correction.",
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

        {/* ── DISCOUNT STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Effective Discount Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Strategic discounting drives sales without permanently devaluing your brand. Here are proven approaches to effective discounting.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">When to Use</th>
                <th className="dark:text-slate-100">Key Consideration</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Seasonal Sales", "End of season/weather", "Clear inventory before new arrivals"],
                ["Flash Sales", "Limited time events", "Create urgency and scarcity"],
                ["Volume Discounts", "Bulk purchases", "Increase average order value"],
                ["First-Time Buyer", "New customer acquisition", "Convert prospects to customers"],
                ["Loyalty Discounts", "Repeat customers", "Reward and retain best customers"],
                ["Clearance", "Old or excess inventory", "Free up space and capital"],
              ].map(([strategy, when, consideration]) => (
                <tr key={strategy}>
                  <td className="dark:text-slate-100">{strategy}</td>
                  <td className="dark:text-slate-100">{when}</td>
                  <td className="dark:text-slate-100">{consideration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            The key to effective discounting is having a clear purpose — inventory clearance, customer acquisition, or volume building. Match the discount type and depth to your objective, and always calculate the break-even point before launching.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Discounting Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Poorly planned discounts can damage profitability and brand value. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Discounting without break-even analysis",
                body: "Offering discounts without calculating required volume increase is a recipe for losses. Always calculate break-even before launching promotions. If the required volume increase isn't feasible, adjust the discount.",
              },
              {
                n: "2",
                title: "Constant discounting",
                body: "Regular discounts train customers to wait for sales and erode perceived value. Use strategic, time-limited promotions rather than constant discounts. Maintain regular pricing integrity.",
              },
              {
                n: "3",
                title: "Ignoring customer segments",
                body: "Not all customers need the same discount. Target discounts strategically — new customer acquisition, loyalty rewards, or reactivation. Blanket discounts waste margin on customers who would buy anyway.",
              },
              {
                n: "4",
                title: "Deeper discounts than necessary",
                body: "Offering deeper discounts than needed to achieve objectives leaves money on the table. Test different discount levels to find the minimum needed to drive desired behavior.",
              },
              {
                n: "5",
                title: "Not communicating value",
                body: "Focus on the value proposition, not just the discount. Communicate why the product is worth it at the regular price, with the discount as an added incentive. Value-based positioning protects brand equity.",
              },
              {
                n: "6",
                title: "Forgetting post-promotion analysis",
                body: "Not analyzing promotion performance means missing learning opportunities. Track sales, margin, and customer acquisition costs. Use insights to optimize future promotions and pricing strategy.",
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
            Practical Tips for Discount Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate sale prices and margins</>],
              [<><strong>Calculate break-even</strong> — know required volume increase</>],
              [<><strong>Set clear objectives</strong> — define promotion goals</>],
              [<><strong>Use time limits</strong> — create urgency and scarcity</>],
              [<><strong>Target strategically</strong> — segment customer offers</>],
              [<><strong>Test discount levels</strong> — find minimum effective discount</>],
              [<><strong>Communicate value</strong> — maintain brand positioning</>],
              [<><strong>Analyze results</strong> — learn from each promotion</>],
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
                q: "How do I calculate discount percentage?",
                a: "Discount Percentage = (Discount Amount / Original Price) × 100. For example, if original price is $100 and sale price is $75, discount is $25, and discount percentage is ($25 / $100) × 100 = 25%.",
              },
              {
                q: "How do I calculate sale price?",
                a: "Sale Price = Original Price × (1 - Discount Percentage). For a 25% discount on $100: $100 × (1 - 0.25) = $75. The calculator above automates this calculation.",
              },
              {
                q: "What is the difference between percentage and fixed amount discounts?",
                a: "Percentage discounts reduce price by a percentage (20% off). Fixed amount discounts reduce price by a specific amount ($10 off). Percentage scales with price, while fixed amount provides consistent savings regardless of price.",
              },
              {
                q: "How do I calculate break-even for a discount?",
                a: "Required Volume Increase = Margin Reduction / New Margin. If original margin is 40% and discounted margin is 15%, margin reduction is 25%. Required increase = 25% / 15% = 167% of original volume.",
              },
              {
                q: "What is a good discount percentage?",
                a: "Good discounts vary by industry and margin structure. Retail typically uses 10-30%. Luxury brands use smaller discounts (5-15%). The key is ensuring the discount achieves objectives while maintaining profitability.",
              },
              {
                q: "When should I offer discounts?",
                a: "Offer discounts strategically: seasonal clearance, new customer acquisition, volume building, loyalty rewards, or inventory liquidation. Avoid constant discounting which trains customers to wait for sales.",
              },
              {
                q: "How do I avoid devaluing my brand with discounts?",
                a: "Use time-limited promotions, communicate value alongside discount, avoid constant discounting, and maintain regular pricing integrity. Position discounts as special opportunities rather than regular pricing.",
              },
              {
                q: "What is a BOGO promotion?",
                a: "BOGO (Buy One Get One) offers a second item free or at discount when purchasing one. It drives volume and increases average order value. Ensure margins can support the giveaway or discount.",
              },
              {
                q: "How do I measure discount effectiveness?",
                a: "Track sales volume, revenue, margin, customer acquisition cost, and repeat purchase rate. Compare promotion performance to baseline. Analyze whether the discount achieved its objectives profitably.",
              },
              {
                q: "Should I discount to clear inventory?",
                a: "Discounting to clear inventory can be effective if the cost of holding inventory exceeds the margin loss. Calculate the carrying cost of inventory versus discount margin impact. If holding costs are high, discounting may be optimal.",
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
            Discounts are a powerful sales tool when used strategically. Understanding discount calculations, break-even analysis, and promotional effectiveness ensures your discounts drive growth rather than erode profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate sale prices and understand margin impact. But the real value comes from strategic planning — setting clear objectives, calculating break-even, and measuring results.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're planning seasonal sales, customer acquisition campaigns, or inventory clearance, calculate carefully and execute strategically. Smart discounting drives sales while protecting brand value and profitability.
          </p>
          <div className="pull-quote mt-8">
            The best discount strategy balances sales volume with margin protection. Calculate precisely, plan strategically, and discount profitably.
          </div>
        </section>

      </div>
    </article>
  );
}
