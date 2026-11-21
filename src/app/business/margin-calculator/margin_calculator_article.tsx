import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MarginCalculatorArticle() {
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
            Margin Calculator: Calculate Profit Margin
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for pricing and profitability
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You sell a product for $100. The cost to produce or acquire the product is $60. Your gross profit is $40 ($100 - $60). Your profit margin is 40% ($40 / $100). This means for every dollar of revenue, you keep 40 cents as profit after accounting for the cost of goods sold.
          </p>
          <p className="mb-5">
            Profit margin measures the percentage of revenue that becomes profit after accounting for costs. It's a critical metric for assessing pricing efficiency, profitability, and business health. Higher margins indicate better pricing power and cost control.
          </p>
          <p className="mb-5">
            But margin varies significantly by industry, business model, and competitive positioning. Understanding margin helps you set profitable prices, evaluate performance, and make strategic decisions about product mix and cost management.
          </p>
          <p>
            The margin calculator above helps you calculate profit margin, understand the relationship between margin and markup, and optimize your pricing strategy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Margin Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Profit margin is calculated by dividing gross profit by revenue, then multiplying by 100 to get a percentage. Gross profit is revenue minus cost of goods sold.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Margin Formula:
          </p>
          <div className="formula-block">
            <pre>Margin = ((Revenue - Cost) / Revenue) × 100</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Selling Price", "$100"],
              ["Cost", "$60"],
              ["Gross Profit", "$100 - $60 = $40"],
              ["Margin", "($40 / $100) × 100 = 40%"],
              ["Markup", "($40 / $60) × 100 = 66.7%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, margin is 40% while markup is 66.7%. Margin is based on selling price, while markup is based on cost. Understanding this distinction is critical for accurate pricing decisions.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── MARGIN VS MARKUP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Margin vs Markup
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Margin and markup are often confused but measure different things. Margin is profit as a percentage of selling price, while markup is profit as a percentage of cost. Understanding the difference is essential for pricing.
          </p>

          {[
            {
              heading: "Margin",
              rows: [
                ["Base", "Selling price"],
                ["Formula", "(Profit / Revenue) × 100"],
                ["Use Case", "Assessing profitability"],
                ["Example", "$40 profit on $100 price = 40%"],
              ],
              note: "Margin measures how much of each sales dollar is profit. It's the preferred metric for assessing overall profitability. Higher margins indicate better pricing and cost control.",
            },
            {
              heading: "Markup",
              rows: [
                ["Base", "Cost of goods sold"],
                ["Formula", "(Profit / Cost) × 100"],
                ["Use Case", "Setting prices from cost"],
                ["Example", "$40 profit on $60 cost = 66.7%"],
              ],
              note: "Markup measures how much you add to cost to set price. It's useful for cost-based pricing but doesn't directly indicate profitability. Always convert markup to margin for profitability assessment.",
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

        {/* ── MARGIN BY INDUSTRY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Typical Margins by Industry
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Profit margins vary significantly by industry due to cost structures, competition, and pricing power. Understanding industry benchmarks helps assess your performance.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Typical Gross Margin</th>
                <th className="dark:text-slate-100">Key Factors</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Software/SaaS", "70-90%", "Low marginal cost, high scalability"],
                ["Retail", "25-35%", "Inventory costs, competition"],
                ["Manufacturing", "30-45%", "Material and labor costs"],
                ["Food & Beverage", "60-70%", "Low food cost, high labor"],
                ["Professional Services", "50-70%", "Time-based, low material cost"],
                ["E-commerce", "20-40%", "Shipping, competition, marketing"],
              ].map(([industry, margin, factors]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{margin}</td>
                  <td className="dark:text-slate-100">{factors}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Software and SaaS businesses typically have the highest margins due to low marginal costs. Retail and e-commerce have lower margins due to inventory and shipping costs. Know your industry benchmarks to assess performance.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING MARGIN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Profit Margin
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improving margin requires either increasing prices, reducing costs, or both. Here are proven strategies to boost your profit margins.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Increase prices strategically",
                body: "Small price increases significantly impact margin. Test price elasticity and increase prices where demand is inelastic. Premium pricing for differentiated products also improves margin. Never underprice based on competition alone.",
              },
              {
                n: "2",
                title: "Reduce cost of goods sold",
                body: "Negotiate better supplier terms, optimize production processes, and reduce waste. Even small cost reductions directly improve margin. Focus on high-volume items where cost savings compound.",
              },
              {
                n: "3",
                title: "Focus on high-margin products",
                body: "Analyze margin by product and prioritize high-margin items. Allocate marketing and sales resources to products with the best margins. Consider discontinuing low-margin products that don't drive volume.",
              },
              {
                n: "4",
                title: "Reduce returns and defects",
                body: "Returns and defects directly erode margin. Improve quality control, provide accurate product descriptions, and optimize packaging. Fewer returns mean higher effective margins.",
              },
              {
                n: "5",
                title: "Optimize product mix",
                body: "Bundle high-margin items with popular products to increase average margin. Cross-sell complementary products with good margins. Product mix optimization can significantly improve overall margin.",
              },
              {
                n: "6",
                title: "Increase operational efficiency",
                body: "Improve labor productivity, reduce overhead, and optimize logistics. Operational efficiency reduces costs and improves margin. Continuous improvement compounds over time.",
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
            Common Margin Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses confuse margin with markup or fail to track margin accurately. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Confusing margin with markup",
                body: "Margin is based on selling price, markup on cost. A 50% markup is not a 50% margin. Always calculate margin for profitability assessment. Using markup when you mean margin leads to pricing errors.",
              },
              {
                n: "2",
                title: "Not tracking margin by product",
                body: "Margin varies significantly by product. Track margin at the product level, not just overall. Low-margin products can drag down overall profitability. Product-level margin analysis reveals optimization opportunities.",
              },
              {
                n: "3",
                title: "Ignoring variable costs",
                body: "Include all variable costs in margin calculation: materials, labor, shipping, commissions. Missing costs overestimates margin. Accurate cost allocation is essential for true margin assessment.",
              },
              {
                n: "4",
                title: "Not accounting for discounts",
                body: "Discounts reduce effective margin. Calculate margin after discounts, not just list price. Track discount impact by product and customer. Excessive discounts erode profitability.",
              },
              {
                n: "5",
                title: "Focusing only on revenue",
                body: "High revenue with low margins is not sustainable. Focus on margin, not just revenue growth. Profitable growth requires healthy margins. Revenue without profit is just busy work.",
              },
              {
                n: "6",
                title: "Not reviewing margins regularly",
                body: "Margins change over time due to cost inflation, pricing changes, and mix shifts. Review margins monthly and investigate significant changes. Regular margin tracking enables proactive management.",
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
            Practical Tips for Margin Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate margin accurately</>],
              [<><strong>Know the difference</strong> — margin vs markup</>],
              [<><strong>Track by product</strong> — identify high/low margin items</>],
              [<><strong>Include all costs</strong> — materials, labor, shipping</>],
              [<><strong>Price strategically</strong> — don't underprice</>],
              [<><strong>Reduce costs</strong> — negotiate, optimize, eliminate waste</>],
              [<><strong>Monitor discounts</strong> — track impact on margin</>],
              [<><strong>Review regularly</strong> — monthly margin analysis</>],
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
                q: "How do I calculate profit margin?",
                a: "Margin = ((Revenue - Cost) / Revenue) × 100. Subtract cost from revenue to get profit, divide by revenue, then multiply by 100. The calculator above automates this calculation.",
              },
              {
                q: "What is the difference between margin and markup?",
                a: "Margin is profit as a percentage of selling price. Markup is profit as a percentage of cost. For a $100 item costing $60, margin is 40% ($40/$100) while markup is 66.7% ($40/$60). Always use margin for profitability assessment.",
              },
              {
                q: "What is a good profit margin?",
                a: "Good margins vary by industry: Software 70-90%, Retail 25-35%, Manufacturing 30-45%, Food 60-70%. Compare to industry benchmarks. Generally, margins above 20% are considered healthy for most businesses.",
              },
              {
                q: "How do I convert markup to margin?",
                a: "Margin = Markup / (1 + Markup). For a 50% markup: 0.50 / (1 + 0.50) = 0.33 or 33% margin. To convert margin to markup: Markup = Margin / (1 - Margin). The calculator above handles both conversions.",
              },
              {
                q: "What costs should I include in margin calculation?",
                a: "Include all variable costs directly tied to the product: materials, direct labor, shipping, commissions, and packaging. Do not include fixed costs like rent or salaries in gross margin calculation. Those are considered in net margin.",
              },
              {
                q: "How can I increase my profit margin?",
                a: "Increase prices strategically, reduce cost of goods sold through negotiation and efficiency, focus on high-margin products, reduce returns and defects, optimize product mix, and improve operational efficiency. Small improvements compound significantly.",
              },
              {
                q: "Why is my margin lower than industry average?",
                a: "Possible causes: higher costs, lower prices, inefficient operations, or unfavorable product mix. Analyze each component: compare costs to competitors, review pricing strategy, evaluate operational efficiency, and assess product mix.",
              },
              {
                q: "Should I use margin or markup for pricing?",
                a: "Use margin for profitability assessment and markup for cost-based pricing. When setting prices from cost, markup is convenient. But always convert to margin to understand true profitability. Margin is the better metric for business decisions.",
              },
              {
                q: "How often should I review my margins?",
                a: "Review margins monthly for active businesses and quarterly for strategic planning. Track margin trends over time and investigate significant changes. Regular margin review enables proactive cost and pricing management.",
              },
              {
                q: "What is gross margin vs net margin?",
                a: "Gross margin considers only cost of goods sold. Net margin considers all expenses including operating costs, interest, and taxes. Gross margin assesses product profitability; net margin assesses overall business profitability.",
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
            Profit margin is the most important metric for assessing pricing efficiency and business profitability. Understanding margin, tracking it by product, and optimizing it through pricing and cost management drives sustainable growth.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate margin and understand the relationship between margin and markup. But the real value comes from using this information to price strategically, control costs, and build a profitable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're pricing products, evaluating profitability, or optimizing costs, accurate margin calculation provides the foundation for sound business decisions. Calculate precisely, price strategically, and profit consistently.
          </p>
          <div className="pull-quote mt-8">
            Margin measures what you keep. Focus on margin, not just revenue, and build a business that profits on every sale.
          </div>
        </section>

      </div>
    </article>
  );
}
