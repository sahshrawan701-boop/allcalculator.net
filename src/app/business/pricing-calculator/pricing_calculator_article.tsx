import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PricingCalculatorArticle() {
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
          <span className="meta-tag">Business · Pricing & Profitability</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Pricing Calculator: Calculate Optimal Pricing
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for pricing strategy and profitability
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your product costs $40 to produce. You want a 50% margin, which means you need to sell at $80. However, market research shows competitors charge $70 for similar products. You decide to price at $75, which gives a 46.7% margin while remaining competitive. At this price, you need to sell 1,000 units to break even on $35,000 in fixed costs.
          </p>
          <p className="mb-5">
            Pricing strategy balances cost recovery, profit objectives, and market dynamics. The right price covers costs, achieves target margins, and remains competitive. Understanding pricing helps optimize profitability and market positioning.
          </p>
          <p className="mb-5">
            But optimal pricing varies by product lifecycle, competitive landscape, and customer value perception. Understanding different pricing strategies and their applications helps you choose the right approach for your business.
          </p>
          <p>
            The pricing calculator above helps you calculate optimal prices based on costs, margins, and market factors.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Pricing Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Pricing calculation involves determining the price that covers costs, achieves target margins, and aligns with market conditions. The formula varies based on pricing strategy: cost-based, value-based, or competition-based.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Cost-Based Pricing Formula:
          </p>
          <div className="formula-block">
            <pre>Price = Cost / (1 - Target Margin)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Cost", "$40"],
              ["Target Margin", "50%"],
              ["Calculated Price", "$40 / (1 - 0.50) = $80"],
              ["Competitor Price", "$70"],
              ["Adjusted Price", "$75"],
              ["Actual Margin", "($75 - $40) / $75 = 46.7%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, cost-based pricing suggests $80, but market conditions require adjustment to $75. This demonstrates the need to balance cost recovery with market competitiveness.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PRICING STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Pricing Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different pricing strategies serve different business objectives. Understanding each strategy helps you choose the right approach for your product and market.
          </p>

          {[
            {
              heading: "Cost-Based Pricing",
              rows: [
                ["Method", "Cost + Desired Margin"],
                ["Best For", "Manufacturing, retail"],
                ["Pros", "Simple, ensures profit"],
                ["Cons", "Ignores market, value"],
              ],
              note: "Cost-based pricing adds a margin to costs. Simple and ensures profit recovery, but may result in prices above or below market. Best for commodities where costs are the primary differentiator.",
            },
            {
              heading: "Value-Based Pricing",
              rows: [
                ["Method", "Based on customer value perception"],
                ["Best For", "Differentiated products, services"],
                ["Pros", "Captures value, higher margins"],
                ["Cons", "Requires market research"],
              ],
              note: "Value-based pricing sets prices based on what customers are willing to pay. Requires understanding customer value perception and benefits. Can command premium pricing for differentiated offerings.",
            },
            {
              heading: "Competition-Based Pricing",
              rows: [
                ["Method", "Based on competitor prices"],
                ["Best For", "Competitive markets, commodities"],
                ["Pros", "Market-aligned, competitive"],
                ["Cons", "Race to bottom, low margins"],
              ],
              note: "Competition-based pricing sets prices relative to competitors. Can match, undercut, or premium-price. Ensures competitiveness but may lead to price wars and compressed margins.",
            },
            {
              heading: "Dynamic Pricing",
              rows: [
                ["Method", "Adjusts based on demand, time, inventory"],
                ["Best For", "Airlines, hotels, e-commerce"],
                ["Pros", "Maximizes revenue, responsive"],
                ["Cons", "Complex, customer perception"],
              ],
              note: "Dynamic pricing adjusts based on real-time factors. Maximizes revenue but requires sophisticated systems. Can frustrate customers if not transparent. Common in travel and retail.",
            },
          ].map((strategy: { heading: string; rows: string[][]; note: string }) => (
            <div key={strategy.heading} className="state-card">
              <h3>{strategy.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {strategy.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{strategy.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── PRICING PSYCHOLOGY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Pricing Psychology
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Pricing psychology uses cognitive biases to influence purchase decisions. Understanding these principles helps optimize pricing for maximum effectiveness.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Charm pricing",
                body: "Prices ending in 9 or 99 ($19.99 vs $20) appear significantly lower due to left-digit bias. Consumers perceive $19.99 as much closer to $19 than $20. This is one of the most effective pricing tactics.",
              },
              {
                n: "2",
                title: "Anchoring",
                body: "Present a higher anchor price to make the actual price seem reasonable. Show original price crossed out next to sale price. The anchor sets expectations and makes the target price appear attractive.",
              },
              {
                n: "3",
                title: "Decoy effect",
                body: "Add a less attractive option to make the target option more appealing. Three tiers where the middle option is positioned as the best value. The decoy makes the target choice seem superior.",
              },
              {
                n: "4",
                title: "Bundle pricing",
                body: "Combine products at a perceived discount. Bundles increase perceived value and average order size. Customers feel they're getting a deal while you sell more units and increase revenue.",
              },
              {
                n: "5",
                title: "Premium pricing",
                body: "High prices signal quality and exclusivity. Luxury brands use premium pricing to position products as high-end. Price becomes a signal of quality rather than just cost recovery.",
              },
              {
                n: "6",
                title: "Free pricing",
                body: "Free is a powerful psychological trigger. Use free trials, freemium models, or buy-one-get-one offers. Free eliminates risk and triggers reciprocity, leading to higher conversion.",
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

        {/* ── PRICING TIERS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Designing Pricing Tiers
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Tiered pricing offers different packages at different price points. Effective tier design guides customers to your target tier while accommodating different needs and budgets.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Tier</th>
                <th className="dark:text-slate-100">Target</th>
                <th className="dark:text-slate-100">Strategy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Basic", "Price-sensitive customers", "Low price, limited features, entry point"],
                ["Standard", "Most customers", "Best value, popular features, anchor tier"],
                ["Premium", "High-value customers", "High price, all features, exclusivity"],
              ].map(([tier, target, strategy]) => (
                <tr key={tier}>
                  <td className="dark:text-slate-100">{tier}</td>
                  <td className="dark:text-slate-100">{target}</td>
                  <td className="dark:text-slate-100">{strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            The standard tier should be positioned as the best value. Use the decoy effect by making the basic tier seem limited and the premium tier seem expensive. Guide customers to your target tier.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Pricing Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Pricing errors lead to lost revenue, reduced profitability, or market position loss. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Pricing based only on costs",
                body: "Cost-based pricing ignores market conditions and customer value. You may price too high (no sales) or too low (leaving money on table). Always consider market and value in pricing decisions.",
              },
              {
                n: "2",
                title: "Not testing prices",
                body: "Assuming you know the optimal price without testing is risky. A/B test different prices, monitor conversion, and adjust. Small price changes can significantly impact revenue and profitability.",
              },
              {
                n: "3",
                title: "Underpricing to compete",
                body: "Competing on price alone leads to race-to-bottom dynamics. Differentiate on value, not just price. Underpricing devalues your brand and reduces margins that could be invested in improvement.",
              },
              {
                n: "4",
                title: "Ignoring customer segments",
                body: "Different customers have different willingness to pay. Use tiered pricing or segmentation to capture value from different segments. One-size-fits-all pricing leaves money on the table.",
              },
              {
                n: "5",
                title: "Not reviewing pricing regularly",
                body: "Market conditions, costs, and value perception change over time. Review pricing quarterly and adjust based on data. Static pricing becomes suboptimal as conditions evolve.",
              },
              {
                n: "6",
                title: "Complex pricing structures",
                body: "Overly complex pricing confuses customers and reduces conversion. Keep pricing simple and transparent. Complexity increases friction and decision paralysis. Simple pricing converts better.",
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
            Practical Tips for Pricing Strategy
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate optimal pricing</>],
              [<><strong>Know your costs</strong> — accurate cost accounting</>],
              [<><strong>Research competitors</strong> — market-aligned pricing</>],
              [<><strong>Understand value</strong> — customer perception</>],
              [<><strong>Test prices</strong> — A/B test and iterate</>],
              [<><strong>Use psychology</strong> — charm pricing, anchoring</>],
              [<><strong>Design tiers</strong> — guide to target tier</>],
              [<><strong>Review regularly</strong> — adjust based on data</>],
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
                q: "How do I calculate optimal price?",
                a: "Optimal Price = Cost / (1 - Target Margin) for cost-based pricing. For value-based pricing, research customer willingness to pay. Always validate with market testing. The calculator above helps with cost-based pricing.",
              },
              {
                q: "What is the difference between cost-based and value-based pricing?",
                a: "Cost-based pricing adds a margin to costs. Value-based pricing sets prices based on customer value perception. Cost-based ensures profit recovery; value-based captures maximum value. The best approach often combines both.",
              },
              {
                q: "How do I calculate margin from price?",
                a: "Margin = (Price - Cost) / Price. For a $75 price with $40 cost: ($75 - $40) / $75 = 46.7% margin. Always calculate margin to understand profitability at different price points.",
              },
              {
                q: "What is charm pricing?",
                a: "Charm pricing uses prices ending in 9 or 99 ($19.99 vs $20). Due to left-digit bias, consumers perceive $19.99 as much closer to $19 than $20. This is one of the most effective and widely used pricing tactics.",
              },
              {
                q: "How do I design effective pricing tiers?",
                a: "Create 3 tiers: basic (entry), standard (target), premium (high-end). Position standard as best value. Use decoy effect to make standard appealing. Ensure clear differentiation between tiers. Guide customers to target tier.",
              },
              {
                q: "Should I undercut competitors?",
                a: "Not necessarily. Competing on price alone leads to race-to-bottom dynamics. Differentiate on value, quality, or service. Underpricing devalues your brand. Price based on your value proposition, not just competitor prices.",
              },
              {
                q: "How often should I review my pricing?",
                a: "Review pricing quarterly for most businesses. Review monthly for volatile markets or new products. Review when costs change significantly, competitors change prices, or you launch new features. Regular review ensures optimal pricing.",
              },
              {
                q: "What is dynamic pricing?",
                a: "Dynamic pricing adjusts prices based on real-time factors like demand, time, inventory, or customer behavior. Common in airlines, hotels, and e-commerce. Maximizes revenue but requires sophisticated systems and transparency.",
              },
              {
                q: "How do I test pricing?",
                a: "A/B test different prices with similar customer segments. Monitor conversion rate, revenue, and profit. Run tests long enough for statistical significance. Test one variable at a time. Use data to optimize.",
              },
              {
                q: "What is the decoy effect in pricing?",
                a: "The decoy effect adds a less attractive option to make the target option more appealing. When presented with three options where one is clearly inferior, customers tend to choose the middle option as the best value.",
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
            Pricing is one of the most important business decisions. The right price balances cost recovery, profit objectives, and market dynamics. Understanding pricing strategies, psychology, and optimization helps maximize profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate prices based on costs and margins. But the real value comes from using this information as a foundation, then adjusting based on market research, customer value, and competitive positioning.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're launching a new product or optimizing existing pricing, strategic pricing drives revenue and profitability. Calculate precisely, test continuously, and price for value.
          </p>
          <div className="pull-quote mt-8">
            Price is not just a number — it's a statement of value. Price strategically, communicate value, and build a profitable business.
          </div>
        </section>

      </div>
    </article>
  );
}
