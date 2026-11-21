import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DropshippingProfitCalculatorArticle() {
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
            Dropshipping Profit Calculator: Calculate Your Margins
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for dropshipping entrepreneurs
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You sell a product for $50. Your supplier charges $20 for the product, and shipping costs $5. You spend $10 on Facebook ads to acquire the customer. Your total costs are $35, leaving a $15 profit per sale. If you sell 100 units monthly, that's $1,500 in profit. But if you can reduce ad spend to $7 per sale through better targeting, your profit jumps to $18 per unit — a 20% increase.
          </p>
          <p className="mb-5">
            Dropshipping offers low startup costs but requires careful margin management. With thin margins common in the model, understanding your costs, pricing strategy, and profit per sale is essential for sustainable growth.
          </p>
          <p className="mb-5">
            But dropshipping profitability involves more than just product cost and selling price. You must account for advertising, payment processing fees, returns, and operational overhead. Accurate profit calculation prevents surprises and ensures your business is actually profitable.
          </p>
          <p>
            The dropshipping profit calculator above helps you calculate profit margins, break-even points, and understand the impact of costs on your profitability. Use it to make data-driven decisions about pricing and ad spend.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Dropshipping Profit Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Dropshipping profit is calculated by subtracting all costs from revenue. These costs include product cost, shipping, advertising, payment processing, and operational expenses.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Profit Formula:
          </p>
          <div className="formula-block">
            <pre>Profit = Selling Price - (Product Cost + Shipping + Ad Spend + Fees + Other Costs)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Selling Price", "$50"],
              ["Product Cost", "$20"],
              ["Shipping Cost", "$5"],
              ["Ad Spend per Sale", "$10"],
              ["Payment Processing (3%)", "$1.50"],
              ["Total Costs", "$36.50"],
              ["Profit per Sale", "$13.50"],
              ["Profit Margin", "27%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 27% profit margin is healthy for dropshipping. If ad spend increases to $15 per sale, profit drops to $8.50 (17% margin). Monitoring and optimizing ad spend is critical for maintaining profitability.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COST COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Dropshipping Cost Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Dropshipping has multiple cost components that must be tracked accurately. Understanding each cost category helps you identify optimization opportunities.
          </p>

          {[
            {
              heading: "Product Costs",
              rows: [
                ["Includes", "Wholesale price, packaging, supplier fees"],
                ["Typical Range", "30-50% of selling price"],
                ["Optimization", "Negotiate volume discounts, find suppliers"],
              ],
              note: "Product cost is typically the largest expense. Negotiating better rates with suppliers or finding alternative suppliers can significantly improve margins. Volume discounts become available as you scale.",
            },
            {
              heading: "Advertising Costs",
              rows: [
                ["Includes", "Facebook, Google, TikTok ads"],
                ["Typical Range", "15-30% of selling price"],
                ["Optimization", "Improve creatives, targeting, landing pages"],
              ],
              note: "Ad spend directly impacts profitability. Focus on improving click-through rates, conversion rates, and ad creative quality. Better performance reduces cost per acquisition and increases profit.",
            },
            {
              heading: "Shipping & Fulfillment",
              rows: [
                ["Includes", "Shipping fees, handling, customs"],
                ["Typical Range", "5-15% of selling price"],
                ["Optimization", "Offer free shipping strategically, negotiate rates"],
              ],
              note: "Shipping costs vary by supplier and destination. Some suppliers offer free shipping which can simplify pricing. Consider offering free shipping on orders above a threshold to increase average order value.",
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

        {/* ── PRICING STRATEGY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Dropshipping Pricing Strategy
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Pricing in dropshipping requires balancing competitiveness with profitability. Your pricing strategy must account for costs while remaining attractive to customers.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calculate target margin first",
                body: "Start with your desired profit margin (typically 20-30% for dropshipping). Work backwards to determine required selling price. This ensures profitability before setting prices competitively.",
              },
              {
                n: "2",
                title: "Research competitor pricing",
                body: "Understand what competitors charge for similar products. Position your pricing accordingly — slightly higher with better value, or competitive with thin margins. Don't price blindly.",
              },
              {
                n: "3",
                title: "Consider psychological pricing",
                body: "Prices ending in .99 or .95 perform better than round numbers. $49.99 feels significantly cheaper than $50 despite minimal difference. Use psychological pricing to your advantage.",
              },
              {
                n: "4",
                title: "Offer tiered pricing",
                body: "Create product bundles or quantity discounts to increase average order value. Higher order values spread fixed costs across more units, improving overall margin percentage.",
              },
              {
                n: "5",
                title: "Test price elasticity",
                body: "Test different price points to understand demand sensitivity. Some products can command premium pricing with proper positioning. A/B test to find the optimal balance of volume and margin.",
              },
              {
                n: "6",
                title: "Account for promotions",
                body: "If you plan to offer discounts or promotions, price with this in mind. Ensure your regular pricing provides enough margin to support promotional pricing while remaining profitable.",
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

        {/* ── BREAK-EVEN ANALYSIS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Dropshipping Break-Even Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding your break-even point helps you set sales targets and evaluate marketing spend. Calculate both per-unit break-even and monthly break-even.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Metric</th>
                <th className="dark:text-slate-100">Formula</th>
                <th className="dark:text-slate-100">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Per-Unit Break-Even", "Total Costs per Unit", "$36.50 (from example above)"],
                ["Monthly Fixed Costs", "Software, tools, overhead", "$500/month"],
                ["Monthly Break-Even Units", "Fixed Costs / Profit per Unit", "500 / $13.50 = 37 units"],
                ["Monthly Break-Even Revenue", "Break-Even Units × Selling Price", "37 × $50 = $1,850"],
              ].map(([metric, formula, example]) => (
                <tr key={metric}>
                  <td className="dark:text-slate-100">{metric}</td>
                  <td className="dark:text-slate-100">{formula}</td>
                  <td className="dark:text-slate-100">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            In this example, you need to sell 37 units monthly to cover fixed costs. Every unit beyond 37 contributes $13.50 in profit. Understanding break-even helps you set realistic sales targets and evaluate marketing ROI.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Dropshipping Profitability Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many dropshipping businesses fail due to poor cost management. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Underestimating advertising costs",
                body: "Assuming low ad spend leads to unprofitable campaigns. Calculate realistic customer acquisition costs based on industry benchmarks. Test thoroughly before scaling. Ad costs often increase as you scale.",
              },
              {
                n: "2",
                title: "Ignoring payment processing fees",
                body: "Payment processors charge 2.9-3.5% plus transaction fees. On a $50 sale, that's $1.50-$2.00. These fees add up and impact margin. Include them in profit calculations.",
              },
              {
                n: "3",
                title: "Not accounting for returns",
                body: "Returns happen in dropshipping. When a customer returns, you lose shipping costs and may pay return shipping. Factor a return rate (typically 5-15%) into your profit calculations.",
              },
              {
                n: "4",
                title: "Pricing too low",
                body: "Competing on price alone leads to race-to-the-bottom pricing. Focus on value, branding, and customer experience rather than being the cheapest. Low prices with thin margins are unsustainable.",
              },
              {
                n: "5",
                title: "Not tracking actual costs",
                body: "Using estimated costs instead of actuals leads to surprises. Track real costs for every expense category. Actual data reveals true profitability and optimization opportunities.",
              },
              {
                n: "6",
                title: "Forgetting about fixed costs",
                body: "Software subscriptions, tools, and overhead are fixed costs that must be covered. Calculate monthly break-even to ensure your volume covers these costs. Don't focus only on per-unit profit.",
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
            Practical Tips for Dropshipping Profitability
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — track profit by product</>],
              [<><strong>Calculate all costs</strong> — include fees, shipping, returns</>],
              [<><strong>Monitor ad spend</strong> — optimize for lower CPA</>],
              [<><strong>Negotiate with suppliers</strong> — better rates on volume</>],
              [<><strong>Focus on value</strong> — not just lowest price</>],
              [<><strong>Track actual data</strong> — use real costs, not estimates</>],
              [<><strong>Calculate break-even</strong> — know your sales targets</>],
              [<><strong>Increase AOV</strong> — bundles, upsells, cross-sells</>],
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
                q: "How do I calculate dropshipping profit?",
                a: "Profit = Selling Price - (Product Cost + Shipping + Ad Spend + Payment Fees + Other Costs). Include all costs to get accurate profit. The calculator above automates this calculation and helps track profitability over time.",
              },
              {
                q: "What is a good profit margin for dropshipping?",
                a: "Healthy dropshipping margins are typically 20-30%. Margins below 15% are risky as they leave little room for error. Premium products with strong branding can achieve 40%+ margins. Focus on value, not just volume.",
              },
              {
                q: "How much should I spend on ads for dropshipping?",
                a: "Ad spend should be 15-30% of selling price for healthy profitability. If ad spend exceeds 30%, margins become thin. Focus on improving ad performance through better creatives, targeting, and landing pages to reduce CPA.",
              },
              {
                q: "How do I calculate break-even for dropshipping?",
                a: "Monthly Break-Even Units = Fixed Costs / Profit per Unit. If fixed costs are $500 and profit per unit is $13.50, break-even is 37 units. Every unit beyond break-even contributes to net profit.",
              },
              {
                q: "What costs should I include in dropshipping profit calculation?",
                a: "Include product cost, shipping, advertising, payment processing fees (2.9-3.5%), software subscriptions, tools, returns, and any operational overhead. Comprehensive cost tracking ensures accurate profitability assessment.",
              },
              {
                q: "How do I improve dropshipping profit margins?",
                a: "Negotiate better supplier rates, optimize ad spend, increase average order value through bundles and upsells, reduce returns through better product quality and descriptions, and focus on premium positioning rather than price competition.",
              },
              {
                q: "Should I offer free shipping in dropshipping?",
                a: "Free shipping can increase conversion rates but reduces margin. If offering, either build shipping cost into pricing or require a minimum order threshold. Calculate the impact on margin before implementing free shipping.",
              },
              {
                q: "How do returns affect dropshipping profitability?",
                a: "Returns lose shipping costs and may incur return shipping fees. Factor a 5-15% return rate into profit calculations. Some suppliers charge restocking fees. Understand your supplier's return policy before selling.",
              },
              {
                q: "What is payment processing fee for dropshipping?",
                a: "Payment processors like Stripe and PayPal charge 2.9% + $0.30 per transaction. On a $50 sale, that's approximately $1.75. These fees add up and must be included in profit calculations.",
              },
              {
                q: "How often should I review dropshipping profitability?",
                a: "Review profitability weekly for active campaigns and monthly for overall business health. Track profit by product, ad campaign, and channel. Regular review identifies issues quickly and optimization opportunities.",
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
            Dropshipping profitability requires meticulous cost management and strategic pricing. Thin margins mean small cost increases can significantly impact profitability. Understanding your true costs and profit per sale is essential for sustainable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you track profit margins and understand cost impacts. But the real value comes from continuous optimization — negotiating better rates, improving ad performance, and increasing average order value.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're launching a new dropshipping store or optimizing an existing one, accurate profit calculation provides the foundation for growth. Focus on value, manage costs relentlessly, and build a sustainable business.
          </p>
          <div className="pull-quote mt-8">
            Dropshipping success isn't about finding the cheapest product. It's about building a brand, managing costs, and delivering value that justifies your margins.
          </div>
        </section>

      </div>
    </article>
  );
}
