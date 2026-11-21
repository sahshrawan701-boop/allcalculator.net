import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BreakEvenArticle() {
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

        .ornament {
          display: block;
          text-align: center;
          color: #94a3b8;
          letter-spacing: 0.5em;
          font-size: 0.75rem;
          margin: 2.5rem 0;
        }
        .dark .ornament { color: #64748b; }

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

        .styled-table-plain tr:last-child td {
          font-weight: inherit;
          color: inherit;
          background: none;
          border-bottom: 1px solid #e2e8f0;
        }
        .dark .styled-table-plain tr:last-child td {
          border-bottom-color: #334155;
        }
        .styled-table-plain th { background: #f1f5f9; }
        .dark .styled-table-plain th { background: #334155; }

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

        .section-label {
          display: block;
          font-family: sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }
        .dark .section-label { color: #64748b; }

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Business · Financial Planning</span>
          <h2 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Break-Even Calculator: Know When Your Business Turns Profitable
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for business owners and entrepreneurs
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── WHAT IS A BREAK-EVEN POINT? ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            What Is a Break-Even Point?
          </h2>
          <p className="dropcap text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The break-even point is the moment when your total revenue exactly equals your total costs. At this threshold, your business is neither making a profit nor suffering a loss — every dollar earned goes toward covering the expenses you&apos;ve already incurred. Understanding where this point falls is one of the most important steps in running a viable business.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Think of it as a financial finish line for covering costs. Before you reach break-even, each sale chips away at accumulated expenses. Once you cross that line, every additional unit sold directly contributes to profit. This concept applies universally — whether you sell cupcakes, software subscriptions, or consulting hours.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            A break-even analysis combines your fixed costs (rent, salaries, insurance), variable costs (materials, shipping, direct labor), and selling price to calculate the exact sales volume or revenue required. It helps founders set realistic goals, established businesses evaluate new product lines, and investors assess risk before committing capital.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── BREAK-EVEN POINT FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Break-Even Point Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The break-even formula expresses exactly how many units you need to sell — or how much revenue you need to generate — before your business starts earning a profit. There are two primary versions of the formula, plus supporting definitions.
          </p>

          <span className="section-label">Units Formula</span>
          <div className="formula-block">
            <pre>Break-Even Point (Units) = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit)</pre>
          </div>

          <span className="section-label">Revenue Formula</span>
          <div className="formula-block">
            <pre>Break-Even Point (Revenue) = Fixed Costs ÷ Contribution Margin Ratio</pre>
          </div>

          <span className="section-label">Supporting Formulas</span>
          <div className="formula-block">
            <pre>Contribution Margin = Selling Price per Unit − Variable Cost per Unit</pre>
          </div>
          <div className="formula-block">
            <pre>Contribution Margin Ratio = Contribution Margin ÷ Selling Price per Unit</pre>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4 mb-2">
            Here&apos;s what each variable means:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base mb-4">
            <li><strong>Fixed Costs</strong> — Expenses that stay the same regardless of how many units you produce, such as rent, salaries, insurance, and equipment leases.</li>
            <li><strong>Variable Cost per Unit</strong> — Expenses that change in direct proportion to production volume, like raw materials, packaging, and shipping per item.</li>
            <li><strong>Selling Price per Unit</strong> — The price at which you sell each unit to customers.</li>
            <li><strong>Contribution Margin</strong> — The amount each unit contributes toward covering fixed costs after variable costs are subtracted.</li>
            <li><strong>Contribution Margin Ratio</strong> — The contribution margin expressed as a percentage of the selling price, useful for calculating break-even in revenue terms.</li>
          </ul>
          <div className="aside-callout">
            The higher your contribution margin, the fewer units you need to sell to break even. If your contribution margin is zero or negative — meaning variable costs equal or exceed the selling price — you cannot break even regardless of sales volume.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW TO USE THIS BREAK-EVEN CALCULATOR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Use This Break-Even Calculator
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The calculator above handles all the math for you. Follow these steps to get your results in seconds.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Enter your total fixed costs",
                body: "Include all costs that remain constant each month: rent, salaries, insurance premiums, loan payments, and equipment leases. Sum them into a single monthly figure.",
              },
              {
                n: "2",
                title: "Enter variable cost per unit",
                body: "This is the cost directly tied to producing or delivering one unit — raw materials, packaging, shipping, and direct labor per item.",
              },
              {
                n: "3",
                title: "Enter selling price per unit",
                body: "The price a customer pays for one unit of your product or service. Make sure this is higher than the variable cost per unit, or break-even is impossible.",
              },
              {
                n: "4",
                title: "Enter target profit (optional)",
                body: "If you want to know how many units you need to sell to hit a specific profit goal, enter that amount. The calculator adjusts the required units accordingly.",
              },
              {
                n: "5",
                title: "Enter planned sales quantity (optional)",
                body: "Enter the number of units you expect to sell. The calculator will show whether that volume puts you in profit or loss territory and by how much.",
              },
              {
                n: "6",
                title: "Review your results",
                body: "The calculator displays your break-even point in units and revenue, contribution margin, contribution margin ratio, and — if you entered a sales quantity — your projected profit or loss.",
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

        {/* ── BREAK-EVEN CALCULATION EXAMPLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Break-Even Calculation Example
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Let&apos;s walk through a realistic break-even analysis for a small bakery that sells cupcakes. This example illustrates exactly how each number feeds into the formula.
          </p>

          <div className="aside-callout">
            <strong>Scenario:</strong> Emma runs a cupcake bakery. Her monthly fixed costs are $3,000 (rent, utilities, insurance). Each cupcake costs $2.50 to make (ingredients, packaging) and sells for $5.00.
          </div>

          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">Step-by-step calculation:</p>

          <table className="styled-table mb-4">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Step</th>
                <th className="dark:text-slate-100">Calculation</th>
                <th className="dark:text-slate-100">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="dark:text-slate-100">Fixed Costs</td>
                <td className="dark:text-slate-100">Rent + Utilities + Insurance</td>
                <td className="dark:text-slate-100">$3,000 / month</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Variable Cost per Unit</td>
                <td className="dark:text-slate-100">Ingredients + Packaging</td>
                <td className="dark:text-slate-100">$2.50 / cupcake</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Selling Price per Unit</td>
                <td className="dark:text-slate-100">—</td>
                <td className="dark:text-slate-100">$5.00 / cupcake</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Contribution Margin</td>
                <td className="dark:text-slate-100">$5.00 − $2.50</td>
                <td className="dark:text-slate-100">$2.50 / cupcake</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Contribution Margin Ratio</td>
                <td className="dark:text-slate-100">$2.50 ÷ $5.00</td>
                <td className="dark:text-slate-100">50%</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Break-Even (Units)</td>
                <td className="dark:text-slate-100">$3,000 ÷ $2.50</td>
                <td className="dark:text-slate-100">1,200 cupcakes</td>
              </tr>
              <tr>
                <td className="dark:text-slate-100">Break-Even (Revenue)</td>
                <td className="dark:text-slate-100">1,200 × $5.00</td>
                <td className="dark:text-slate-100">$6,000</td>
              </tr>
            </tbody>
          </table>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Emma needs to sell 1,200 cupcakes per month — or generate $6,000 in revenue — to break even. That works out to roughly 40 cupcakes per day. Every cupcake beyond 1,200 adds $2.50 in pure profit. If she sells 1,500 cupcakes in a month, her profit is 300 × $2.50 = $750.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── UNDERSTANDING YOUR BREAK-EVEN ANALYSIS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Your Break-Even Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your break-even analysis results fall into one of three scenarios. Understanding where you stand — and what drives movement between these zones — is key to smart decision-making.
          </p>

          <div className="state-card">
            <h3>Below Break-Even — Operating at a Loss</h3>
            <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100 mb-3">
              When your sales volume is below the break-even point, total revenue is insufficient to cover both fixed and variable costs. The gap between what you earn and what you owe is your loss. For example, if your break-even is 1,200 units and you sell only 900, you&apos;re short by 300 units × the contribution margin — a loss of $750 in the bakery example above.
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed italic">
              Action: Reduce fixed costs, lower variable costs per unit, raise selling price, or increase sales volume to move toward break-even.
            </p>
          </div>

          <div className="state-card">
            <h3>At Break-Even — Zero Profit</h3>
            <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100 mb-3">
              At break-even, every dollar of revenue is absorbed by costs. You&apos;re not losing money, but you&apos;re not earning any either. This is a critical threshold — it proves the business model can sustain itself, but leaves no room for growth, investment, or unexpected expenses.
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed italic">
              Hitting break-even validates viability, but operating here long-term is unsustainable. Plan to exceed it consistently.
            </p>
          </div>

          <div className="state-card">
            <h3>Above Break-Even — Generating Profit</h3>
            <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100 mb-3">
              Once you surpass break-even, each additional unit sold generates profit equal to the contribution margin. Fixed costs are already covered, so the only costs on incremental units are variable costs. This is where leverage appears — and why scaling past break-even can rapidly improve profitability.
            </p>
            <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed italic">
              At 1,500 cupcakes sold (300 above break-even), Emma earns $750 in profit. At 2,000, she earns $2,000. The further above break-even, the stronger the returns.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-4">
            Three variables control movement between these zones: <strong>fixed costs</strong> determine how much revenue you need before any profit appears, <strong>variable costs</strong> determine how much of each sale is consumed by production, and <strong>selling price</strong> determines how much contribution margin each sale generates. Adjusting any one of these shifts your break-even point.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS THAT AFFECT YOUR BREAK-EVEN POINT ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Break-Even Point
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several real-world factors influence where your break-even point falls. Understanding them helps you make proactive adjustments rather than reacting to surprises.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Pricing Strategy",
                body: "Higher prices increase your contribution margin, lowering the number of units needed to break even. However, higher prices may reduce demand. Test multiple price points in the calculator to find the optimal balance between margin and volume.",
              },
              {
                n: "2",
                title: "Operating Expenses (Fixed Costs)",
                body: "Rent, salaries, insurance, and other fixed costs form the base that revenue must cover. Reducing fixed costs — through renegotiating leases, outsourcing, or downsizing — directly lowers your break-even point.",
              },
              {
                n: "3",
                title: "Production and Material Costs (Variable Costs)",
                body: "The cost of raw materials, direct labor, packaging, and shipping per unit determines your variable cost. Sourcing cheaper materials, improving manufacturing efficiency, or negotiating supplier discounts shrinks variable costs and boosts contribution margin.",
              },
              {
                n: "4",
                title: "Sales Volume and Capacity",
                body: "Your maximum production or service capacity sets an upper bound on revenue. If your break-even point exceeds your capacity, the business model doesn't work at current cost and pricing levels — something must change.",
              },
              {
                n: "5",
                title: "Business Model",
                body: "Subscription businesses, one-time sales, and service firms each have different cost structures. A SaaS company might have high fixed costs (development, servers) but nearly zero variable costs, creating a very different break-even dynamic than a manufacturing business.",
              },
              {
                n: "6",
                title: "Market Conditions",
                body: "Inflation raises costs, recessions suppress demand, and competitive pressure squeezes prices. External market shifts can move your break-even point without you changing anything internally. Recalculate regularly to stay current.",
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

        {/* ── WHY IS BREAK-EVEN ANALYSIS IMPORTANT FOR BUSINESSES? ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Why Is Break-Even Analysis Important for Businesses?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Break-even analysis is relevant across virtually every type of business. Here&apos;s how different business types put it to work.
          </p>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            <li><strong>Startups</strong> — Use break-even analysis to validate your business model before running out of runway. Knowing how many customers you need helps secure funding and set realistic milestones for investors.</li>
            <li><strong>Small businesses</strong> — Evaluate whether a new product line, location expansion, or equipment purchase will pay for itself. Break-even analysis turns gut feelings into data-driven decisions.</li>
            <li><strong>Retail</strong> — Determine how many units of each product category must sell to cover store overhead. Use it during seasonal planning to set inventory levels and promotional targets.</li>
            <li><strong>Manufacturing</strong> — Calculate the minimum production run that justifies setup costs and raw material purchases. Break-even analysis helps decide between in-house production and outsourcing.</li>
            <li><strong>Freelancers and service providers</strong> — Figure out how many billable hours or clients per month cover your operating costs (software, workspace, taxes). Set hourly rates and project minimums with confidence.</li>
            <li><strong>E-commerce</strong> — Factor in platform fees, advertising spend, packaging, and shipping as variable costs. Break-even analysis reveals whether your margins survive after marketplace commissions and fulfillment costs.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── LIMITATIONS OF BREAK-EVEN ANALYSIS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations of Break-Even Analysis
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Break-even analysis is a powerful starting point, but it relies on simplifying assumptions. Keep these limitations in mind when using it to guide decisions.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Assumes linear cost and revenue relationships",
                body: "The model treats variable costs and revenue as perfectly linear — each unit costs and earns the same amount. In reality, bulk discounts lower per-unit costs at higher volumes, and demand may require price reductions to move more inventory.",
              },
              {
                n: "2",
                title: "Ignores the time value of money",
                body: "Break-even analysis doesn't discount future cash flows. A business that breaks even in month 18 looks the same as one that breaks even in month 3, even though the capital tied up over those extra 15 months has real opportunity cost.",
              },
              {
                n: "3",
                title: "Typically assumes a single product",
                body: "The basic formula works cleanly for one product at one price. Businesses selling multiple products at different margins need weighted-average contribution margin calculations, which add complexity.",
              },
              {
                n: "4",
                title: "Treats costs as static",
                body: "Fixed costs can change — landlords raise rent, salaries increase, insurance premiums shift. Variable costs fluctuate with supplier pricing and market conditions. Your break-even point is only as accurate as the cost inputs you use.",
              },
              {
                n: "5",
                title: "Doesn't account for market dynamics",
                body: "The analysis assumes you can sell as many units as needed at the stated price. It doesn't model competitor responses, demand elasticity, seasonal variation, or shifts in consumer behavior that affect real-world sales.",
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

        {/* ── RELATED BUSINESS CALCULATORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Related Business Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you know your break-even point, these calculators help you dig deeper into your business finances.
          </p>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong><Link href="/business/profit-margin-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Profit Margin Calculator</Link></strong> — After finding your break-even point, calculate your profit margins at different sales volumes to see how efficiently your business converts revenue into profit.
            </li>
            <li>
              <strong><Link href="/business/markup-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Markup Calculator</Link></strong> — Determine the right markup percentage to apply on top of your costs. Pair it with break-even analysis to ensure your markup covers fixed costs at realistic sales volumes.
            </li>
            <li>
              <strong><Link href="/business/revenue-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Revenue Calculator</Link></strong> — Project your total revenue at various sales volumes and price points. Useful for forecasting how far above break-even you can realistically reach.
            </li>
            <li>
              <strong><Link href="/business/profit-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Profit Calculator</Link></strong> — Calculate your net profit after all expenses. Use alongside break-even analysis to model profitability scenarios at different operating levels.
            </li>
            <li>
              <strong><Link href="/business/margin-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Margin Calculator</Link></strong> — Understand the relationship between cost, revenue, and margin. Helpful when evaluating whether pricing changes improve or erode your contribution margin.
            </li>
            <li>
              <strong><Link href="/business/pricing-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Pricing Calculator</Link></strong> — Optimize your pricing strategy by modeling how different prices affect demand, margin, and overall profitability relative to break-even.
            </li>
            <li>
              <strong><Link href="/business/discount-calculator" className="text-indigo-600 dark:text-indigo-400 underline">Discount Calculator</Link></strong> — See how discounts affect your margins and break-even point. Even small discounts can significantly increase the number of units needed to break even.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {[
              {
                q: "What is a break-even point?",
                a: "The break-even point is the sales volume at which total revenue exactly equals total costs, resulting in zero profit and zero loss. It represents the minimum number of units a business must sell — or the minimum revenue it must generate — to cover all fixed and variable expenses.",
              },
              {
                q: "How do you calculate the break-even point?",
                a: "Divide your total fixed costs by the contribution margin per unit (selling price minus variable cost per unit). The result is the number of units you need to sell to break even. For revenue-based break-even, divide fixed costs by the contribution margin ratio instead.",
              },
              {
                q: "What is the break-even formula?",
                a: "The primary formula is: Break-Even Units = Fixed Costs ÷ (Selling Price per Unit − Variable Cost per Unit). An alternative revenue-based formula is: Break-Even Revenue = Fixed Costs ÷ Contribution Margin Ratio. Both yield the same break-even threshold expressed differently.",
              },
              {
                q: "What is the difference between break-even units and break-even revenue?",
                a: "Break-even units is the number of individual products or services you must sell, while break-even revenue is the total dollar amount of sales required. They represent the same point expressed in different terms. Break-even revenue equals break-even units multiplied by the selling price per unit.",
              },
              {
                q: "Can the break-even point be negative?",
                a: "No. A negative result from the formula means the contribution margin is negative — your variable cost per unit exceeds the selling price. In that case, every sale increases your losses and break-even is mathematically impossible without changing your cost structure or pricing.",
              },
              {
                q: "What happens if selling price equals variable cost?",
                a: "If selling price equals variable cost, the contribution margin is zero. Division by zero means there is no finite break-even point. Every unit sold covers its own variable cost but contributes nothing toward fixed costs, so fixed costs are never recovered regardless of sales volume.",
              },
              {
                q: "How can a business lower its break-even point?",
                a: "There are three levers: reduce fixed costs (renegotiate rent, cut overhead), lower variable costs per unit (find cheaper suppliers, improve efficiency), or increase the selling price. Any combination of these raises the contribution margin or reduces the numerator, lowering the break-even threshold.",
              },
              {
                q: "Is a lower break-even point better?",
                a: "Generally, yes. A lower break-even point means you need fewer sales to start generating profit, which reduces risk and shortens the path to profitability. However, some businesses intentionally accept a higher break-even in exchange for greater long-term scale or market share.",
              },
              {
                q: "What is the difference between break-even analysis and profit analysis?",
                a: "Break-even analysis identifies the point of zero profit — the minimum viable performance. Profit analysis goes further by modeling how much profit you earn at various sales levels above break-even. Break-even answers \"can I survive?\" while profit analysis answers \"how well can I thrive?\"",
              },
              {
                q: "Can startups use break-even analysis?",
                a: "Absolutely. Break-even analysis is especially valuable for startups because it validates whether the business model can sustain itself at achievable sales volumes. It also helps founders communicate financial viability to investors and set fundraising targets tied to reaching break-even.",
              },
              {
                q: "How do fixed costs affect the break-even point?",
                a: "Fixed costs are the numerator in the break-even formula, so higher fixed costs directly increase the break-even point. If you double your fixed costs while keeping prices and variable costs the same, you need to sell twice as many units to break even.",
              },
              {
                q: "What is contribution margin and why does it matter?",
                a: "Contribution margin is the difference between selling price and variable cost per unit. It represents the portion of each sale that goes toward covering fixed costs and, once those are covered, toward profit. A higher contribution margin means each sale does more financial work for your business.",
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

        {/* ── METHODOLOGY & EDITORIAL DISCLOSURE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Methodology &amp; Calculation Assumptions
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This Break-Even Calculator operates on classic Cost-Volume-Profit (CVP) analysis principles established in managerial accounting. The calculations rely on the following standard assumptions:
          </p>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base mb-6">
            <li><strong>Cost Segregation</strong> — Total expenses are strictly divided into fixed costs (which do not vary with output) and variable costs (which vary in direct linear proportion to output). Mixed costs must be separated into fixed and variable components prior to calculation.</li>
            <li><strong>Constant Unit Selling Price</strong> — The selling price per unit remains constant across all sales volumes without discounting or dynamic pricing adjustments.</li>
            <li><strong>Inventory Balance</strong> — All units produced during the measured period are assumed to be sold, with no accumulation of unsold inventory.</li>
            <li><strong>Estimates vs. Actual Performance</strong> — Outputs generated by this calculator are mathematical models intended for budgeting, scenario planning, and financial goal-setting. They do not constitute formal accounting or tax advice.</li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
            <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">
              Editorial Review &amp; Trust
            </p>
            <p className="leading-relaxed">
              Maintained and regularly reviewed by the <strong>AllCalculator.net Business &amp; Finance Editorial Team</strong>. Financial calculation logic is verified against standard managerial accounting formulas. Last reviewed: November 2026.
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}
