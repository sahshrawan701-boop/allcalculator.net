import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MarkupCalculatorArticle() {
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
            Markup Calculator: Calculate Markup Percentage
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for pricing and cost management
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You acquire a product for $60 and want to apply a 50% markup. The markup amount is $30 ($60 × 0.50). Your selling price is $90 ($60 + $30). Your profit margin on this sale is 33.3% ($30 / $90). Markup is based on cost, while margin is based on selling price. Understanding this distinction is critical for accurate pricing.
          </p>
          <p className="mb-5">
            Markup is the amount added to cost to determine selling price, expressed as a percentage of cost. It's a common pricing method for cost-based pricing strategies. Markup ensures you cover costs and achieve desired profit on each sale.
          </p>
          <p className="mb-5">
            But markup varies significantly by industry, product type, and competitive environment. Understanding markup helps you set prices that cover costs, achieve profit targets, and remain competitive in the market.
          </p>
          <p>
            The markup calculator above helps you calculate markup percentage, selling price, and understand the relationship between markup and margin.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Markup Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Markup is calculated by dividing the difference between selling price and cost by the cost, then multiplying by 100. This gives the percentage added to cost to determine the selling price.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Markup Formula:
          </p>
          <div className="formula-block">
            <pre>Markup = ((Selling Price - Cost) / Cost) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Cost", "$60"],
              ["Desired Markup", "50%"],
              ["Markup Amount", "$60 × 0.50 = $30"],
              ["Selling Price", "$60 + $30 = $90"],
              ["Margin", "($30 / $90) × 100 = 33.3%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, a 50% markup results in a 33.3% margin. Always convert markup to margin to understand true profitability. A 50% markup does not mean a 50% margin.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MARKUP VS MARGIN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Markup vs Margin Comparison
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Markup and margin are related but measure different things. Understanding the conversion between them is essential for pricing decisions.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Markup</th>
                <th className="dark:text-slate-100">Margin</th>
                <th className="dark:text-slate-100">Relationship</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["25%", "20%", "Markup is higher than margin"],
                ["50%", "33.3%", "Significant difference"],
                ["100%", "50%", "Markup is double margin"],
                ["150%", "60%", "Markup significantly higher"],
                ["200%", "66.7%", "Markup is triple margin"],
              ].map(([markup, margin, relationship]) => (
                <tr key={markup}>
                  <td className="dark:text-slate-100">{markup}</td>
                  <td className="dark:text-slate-100">{margin}</td>
                  <td className="dark:text-slate-100">{relationship}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            As markup increases, the difference between markup and margin grows. At 100% markup, margin is only 50%. Always calculate margin to understand true profitability, not just markup percentage.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MARKUP BY INDUSTRY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Typical Markups by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Markup varies significantly by industry due to cost structures, competition, and pricing power. Understanding industry benchmarks helps assess your pricing strategy.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Typical Markup</th>
                <th className="dark:text-slate-100">Equivalent Margin</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Grocery", "15-25%", "13-20%"],
                ["Retail Clothing", "50-100%", "33-50%"],
                ["Electronics", "30-50%", "23-33%"],
                ["Furniture", "40-80%", "29-44%"],
                ["Jewelry", "100-300%", "50-75%"],
                ["Restaurants", "200-400%", "67-80%"],
              ].map(([industry, markup, margin]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{markup}</td>
                  <td className="dark:text-slate-100">{margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Restaurants have the highest markups (200-400%) due to low food costs and high labor/overhead. Grocery has the lowest due to high competition and volume. Know your industry to set appropriate markups.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PRICING STRATEGIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Markup-Based Pricing Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Markup is a foundation for cost-based pricing. Different strategies apply markup differently based on business goals and market conditions.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Cost-plus pricing",
                body: "Add a standard markup to cost. This is the simplest markup strategy. Apply consistent markup across products (e.g., 50% on all items). Simple, but may not reflect market conditions or value perception.",
              },
              {
                n: "2",
                title: "Tiered markup by cost",
                body: "Apply different markups based on cost tiers. Lower-cost items get higher markups; higher-cost items get lower markups. This balances absolute profit across products and remains competitive on expensive items.",
              },
              {
                n: "3",
                title: "Category-based markup",
                body: "Apply different markups by product category. High-demand or fast-turnover items get lower markups. Specialty or slow-moving items get higher markups. This optimizes inventory turnover and profitability.",
              },
              {
                n: "4",
                title: "Value-based markup",
                body: "Adjust markup based on perceived value. Premium or differentiated products get higher markups. Commodity items get lower markups. This captures value rather than just covering costs.",
              },
              {
                n: "5",
                title: "Competitive markup",
                body: "Set markup based on competitor pricing. Research market prices and work backward to determine required markup. This ensures competitiveness but may sacrifice margin if costs are high.",
              },
              {
                n: "6",
                title: "Dynamic markup",
                body: "Adjust markup based on demand, seasonality, or inventory levels. Increase markup during peak demand, decrease during slow periods. Dynamic pricing maximizes revenue but requires monitoring.",
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
            Common Markup Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses confuse markup with margin or apply markup incorrectly. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Confusing markup with margin",
                body: "A 50% markup is not a 50% margin. Always convert markup to margin for profitability assessment. Using markup when you mean margin leads to pricing errors and unprofitable decisions.",
              },
              {
                n: "2",
                title: "Applying uniform markup",
                body: "Uniform markup ignores market conditions and product differences. High-cost items may become uncompetitive; low-cost items may underprice value. Adjust markup by category and market position.",
              },
              {
                n: "3",
                title: "Not including all costs",
                body: "Markup should cover all variable costs: materials, labor, shipping, commissions. Missing costs means the markup is insufficient. Include all direct costs in your cost base.",
              },
              {
                n: "4",
                title: "Ignoring market prices",
                body: "Cost-based markup may result in prices above or below market. Research competitor prices and adjust markup accordingly. Market conditions should inform pricing decisions.",
              },
              {
                n: "5",
                title: "Not reviewing markup regularly",
                body: "Costs change over time due to inflation, supplier changes, and efficiency improvements. Review and adjust markups regularly to maintain profitability. Annual review is minimum.",
              },
              {
                n: "6",
                title: "Forgetting about discounts",
                body: "Discounts reduce effective markup. Calculate effective markup after discounts, not just list price. Track discount impact and ensure net markup meets profitability targets.",
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
            Practical Tips for Markup Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate markup accurately</>],
              [<><strong>Know the difference</strong> — markup vs margin</>],
              [<><strong>Include all costs</strong> — materials, labor, shipping</>],
              [<><strong>Research competitors</strong> — market-based pricing</>],
              [<><strong>Adjust by category</strong> — tiered markups</>],
              [<><strong>Review regularly</strong> — adjust for cost changes</>],
              [<><strong>Track discounts</strong> — effective markup</>],
              [<><strong>Consider value</strong> — value-based adjustments</>],
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
                q: "How do I calculate markup?",
                a: "Markup = ((Selling Price - Cost) / Cost) × 100. Subtract cost from selling price to get profit, divide by cost, then multiply by 100. The calculator above automates this calculation.",
              },
              {
                q: "What is the difference between markup and margin?",
                a: "Markup is profit as a percentage of cost. Margin is profit as a percentage of selling price. For a $100 item costing $60, markup is 66.7% ($40/$60) while margin is 40% ($40/$100). Always use margin for profitability.",
              },
              {
                q: "How do I convert markup to margin?",
                a: "Margin = Markup / (1 + Markup). For a 50% markup: 0.50 / (1 + 0.50) = 0.33 or 33% margin. To convert margin to markup: Markup = Margin / (1 - Margin).",
              },
              {
                q: "What is a typical markup?",
                a: "Typical markups vary: Grocery 15-25%, Retail 50-100%, Electronics 30-50%, Restaurants 200-400%. Compare to your industry benchmarks. Higher markups for specialty or low-volume items.",
              },
              {
                q: "How do I calculate selling price from markup?",
                a: "Selling Price = Cost × (1 + Markup). For a $60 cost with 50% markup: $60 × 1.50 = $90. The calculator above can calculate selling price from cost and markup.",
              },
              {
                q: "Should I use markup or margin for pricing?",
                a: "Use markup for cost-based pricing (adding to cost). Use margin for profitability assessment (measuring profit as percentage of revenue). Always convert markup to margin to understand true profitability.",
              },
              {
                q: "What costs should I include in markup calculation?",
                a: "Include all variable costs: materials, direct labor, shipping, commissions, and packaging. Do not include fixed costs in markup for gross margin. Fixed costs are considered in net margin.",
              },
              {
                q: "How can I increase my markup?",
                a: "Reduce costs through negotiation and efficiency, increase perceived value through differentiation and branding, apply premium pricing for unique products, and adjust by category based on demand and competition.",
              },
              {
                q: "Why is my markup lower than competitors?",
                a: "Possible causes: higher costs, lower pricing strategy, or different market position. Analyze your costs versus competitors. If costs are higher, reduce them or justify higher prices through value differentiation.",
              },
              {
                q: "How often should I review my markups?",
                a: "Review markups annually at minimum, quarterly for volatile cost environments. Review when costs change significantly or when market conditions shift. Regular review ensures profitability is maintained.",
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
            Markup is a fundamental pricing tool for cost-based businesses. Understanding markup, its relationship to margin, and how to apply it strategically ensures you cover costs and achieve profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate markup, selling price, and margin. But the real value comes from using this information to price strategically, control costs, and build a profitable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're pricing products, managing costs, or evaluating profitability, accurate markup calculation provides the foundation for sound pricing decisions. Calculate precisely, price strategically, and profit consistently.
          </p>
          <div className="pull-quote mt-8">
            Markup is what you add to cost. Margin is what you keep. Know the difference, price accordingly, and build a profitable business.
          </div>
        </section>

      </div>
    </article>
  );
}
