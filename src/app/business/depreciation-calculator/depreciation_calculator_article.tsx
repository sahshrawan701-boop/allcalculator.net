import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function DepreciationCalculatorArticle() {
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
          <span className="meta-tag">Business · Accounting & Finance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Depreciation Calculator: Calculate Asset Depreciation
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for business owners and accountants
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You purchase equipment for $50,000 with a 5-year useful life and $5,000 salvage value. Using straight-line depreciation, you'll deduct $9,000 annually ($50,000 - $5,000 ÷ 5 years). This reduces your taxable income by $9,000 each year, providing tax savings while accurately reflecting the asset's declining value.
          </p>
          <p className="mb-5">
            Depreciation is the systematic allocation of an asset's cost over its useful life. It's an accounting concept that spreads the cost of tangible assets like equipment, vehicles, and buildings across the years they generate revenue.
          </p>
          <p className="mb-5">
            But depreciation isn't just about accounting — it has real tax implications and affects your business's financial health. Understanding different depreciation methods helps you choose the approach that best matches your asset usage and tax strategy.
          </p>
          <p>
            The depreciation calculator above helps you calculate depreciation using different methods, understand tax implications, and plan for asset replacement.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Depreciation Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Depreciation is calculated by allocating an asset's cost minus its salvage value over its useful life. Different methods allocate this cost differently — some evenly, some front-loaded, some based on usage.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Straight-Line Depreciation Formula:
          </p>
          <div className="formula-block">
            <pre>Annual Depreciation = (Cost - Salvage Value) / Useful Life</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Asset Cost", "$50,000"],
              ["Salvage Value", "$5,000"],
              ["Depreciable Amount", "$45,000"],
              ["Useful Life", "5 years"],
              ["Annual Depreciation", "$45,000 / 5 = $9,000 per year"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, you deduct $9,000 annually for 5 years, totaling $45,000 in depreciation. The remaining $5,000 salvage value represents the asset's expected worth at end of life. This method provides consistent, predictable deductions.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── DEPRECIATION METHODS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Depreciation Methods Compared
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different depreciation methods suit different situations. Understanding each method helps you choose the right approach for your assets and tax strategy.
          </p>

          {[
            {
              heading: "Straight-Line Depreciation",
              rows: [
                ["Calculation", "(Cost - Salvage) / Useful Life"],
                ["Pattern", "Equal annual depreciation"],
                ["Best For", "Assets with consistent utility"],
              ],
              note: "Straight-line is the simplest and most common method. It allocates equal depreciation each year. Best for assets that provide consistent value over their life, like buildings or office equipment.",
            },
            {
              heading: "Declining Balance Depreciation",
              rows: [
                ["Calculation", "Book Value × Depreciation Rate"],
                ["Pattern", "Higher depreciation in early years"],
                ["Best For", "Assets that lose value quickly"],
              ],
              note: "Declining balance front-loads depreciation, providing larger tax deductions early. Best for technology or equipment that rapidly becomes obsolete. Matches expense with higher early utility.",
            },
            {
              heading: "Units of Production Depreciation",
              rows: [
                ["Calculation", "(Cost - Salvage) / Total Units × Units Produced"],
                ["Pattern", "Based on actual usage"],
                ["Best For", "Production machinery, vehicles"],
              ],
              note: "Units of production ties depreciation to actual usage. Best for machinery or vehicles where wear correlates with production or miles driven. Matches expense with actual asset utilization.",
            },
          ].map((method: { heading: string; rows: string[][]; note: string }) => (
            <div key={method.heading} className="state-card">
              <h3>{method.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {method.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{method.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── TAX IMPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tax Implications of Depreciation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Depreciation is a tax-deductible expense that reduces taxable income. Understanding tax rules and Section 179 expensing can significantly impact your tax strategy.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Depreciation reduces taxable income",
                body: "Each depreciation deduction reduces your taxable income dollar-for-dollar. If you're in the 21% corporate tax bracket, $10,000 in depreciation saves $2,100 in taxes. This makes depreciation a valuable tax planning tool.",
              },
              {
                n: "2",
                title: "Section 179 expensing",
                body: "Section 179 allows immediate expensing of qualifying assets up to an annual limit ($1,160,000 for 2023). Instead of depreciating over years, deduct the full cost in year one. This provides significant upfront tax benefits.",
              },
              {
                n: "3",
                title: "Bonus depreciation",
                body: "Bonus depreciation allows additional first-year depreciation on qualifying assets. The Tax Cuts and Jobs Act set bonus depreciation at 100% through 2022, phasing down after. Combine with Section 179 for maximum first-year deductions.",
              },
              {
                n: "4",
                title: "MACRS depreciation",
                body: "Modified Accelerated Cost Recovery System (MACRS) is the IRS-required depreciation method for tax purposes. It specifies recovery periods and depreciation methods for different asset classes. Use MACRS for tax reporting.",
              },
              {
                n: "5",
                title: "Depreciation recapture",
                body: "When selling a depreciated asset for more than book value, the excess is taxed as ordinary income (depreciation recapture) up to the amount of depreciation taken. Plan for this tax impact when disposing of assets.",
              },
              {
                n: "6",
                title: "State tax considerations",
                body: "Some states don't conform to federal depreciation rules. You may need to calculate depreciation differently for state tax purposes. Check your state's conformity rules or consult a tax professional.",
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

        {/* ── USEFUL LIFE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Determining Useful Life
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Useful life is the period an asset is expected to generate economic benefits. IRS guidelines provide standard recovery periods for different asset classes.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Asset Class</th>
                <th className="dark:text-slate-100">MACRS Recovery Period</th>
                <th className="dark:text-slate-100">Examples</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Office Equipment", "5 years", "Computers, printers, office furniture"],
                ["Machinery & Equipment", "7 years", "Manufacturing equipment, heavy machinery"],
                ["Vehicles", "5 years", "Cars, trucks, delivery vehicles"],
                ["Nonresidential Real Property", "39 years", "Office buildings, warehouses"],
                ["Residential Rental Property", "27.5 years", "Rental houses, apartments"],
              ].map(([asset, period, examples]) => (
                <tr key={asset}>
                  <td className="dark:text-slate-100">{asset}</td>
                  <td className="dark:text-slate-100">{period}</td>
                  <td className="dark:text-slate-100">{examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Use IRS recovery periods for tax reporting, but you may use different useful life estimates for financial reporting. Financial reporting should reflect actual expected usage, while tax reporting follows prescribed recovery periods.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Depreciation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Improper depreciation can lead to tax issues and misstated financials. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Not depreciating eligible assets",
                body: "Failing to depreciate eligible assets means missing legitimate tax deductions. All business assets with useful lives beyond one year should be depreciated. Track all capital expenditures and ensure proper depreciation.",
              },
              {
                n: "2",
                title: "Using wrong recovery periods",
                body: "Using incorrect recovery periods triggers IRS scrutiny. Use MACRS recovery periods for tax reporting. Different asset classes have specific recovery periods prescribed by the IRS.",
              },
              {
                n: "3",
                title: "Ignoring salvage value incorrectly",
                body: "Some depreciation methods ignore salvage value (like MACRS), while others require it. Understand whether your chosen method uses salvage value and apply it correctly. Incorrect salvage value affects annual depreciation amounts.",
              },
              {
                n: "4",
                title: "Not tracking placed-in-service dates",
                body: "Depreciation begins when assets are placed in service, not necessarily when purchased. Track placed-in-service dates accurately. Mid-year conventions may apply depending on depreciation method.",
              },
              {
                n: "5",
                title: "Mixing book and tax depreciation",
                body: "Book depreciation (financial reporting) and tax depreciation (IRS) often differ. Maintain separate calculations. Don't use tax depreciation for financial statements or vice versa.",
              },
              {
                n: "6",
                title: "Forgetting depreciation recapture",
                body: "Selling depreciated assets triggers depreciation recapture tax. Plan for this when disposing of assets. The recapture amount equals the lesser of depreciation taken or gain on sale.",
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
            Practical Tips for Depreciation Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate depreciation by method</>],
              [<><strong>Track placed-in-service dates</strong> — accurate start dates matter</>],
              [<><strong>Use MACRS for tax</strong> — follow IRS recovery periods</>],
              [<><strong>Consider Section 179</strong> — immediate expensing for qualifying assets</>],
              [<><strong>Separate book and tax</strong> — maintain different calculations</>],
              [<><strong>Plan for recapture</strong> — consider tax impact when selling</>],
              [<><strong>Document asset details</strong> — cost, date, usage for records</>],
              [<><strong>Consult tax professional</strong> — complex situations need expert advice</>],
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
                q: "How do I calculate depreciation?",
                a: "Straight-line: (Cost - Salvage Value) / Useful Life. Declining balance: Book Value × Depreciation Rate. Units of production: (Cost - Salvage) / Total Units × Units Produced. The calculator above supports multiple methods.",
              },
              {
                q: "What is the difference between book and tax depreciation?",
                a: "Book depreciation is for financial reporting and reflects actual asset usage. Tax depreciation follows IRS rules (MACRS) and may differ significantly. Maintain separate calculations for each purpose.",
              },
              {
                q: "What is Section 179 expensing?",
                a: "Section 179 allows immediate deduction of qualifying asset costs up to an annual limit ($1,160,000 for 2023) instead of depreciating over years. It provides significant upfront tax benefits for qualifying business assets.",
              },
              {
                q: "What is MACRS depreciation?",
                a: "MACRS (Modified Accelerated Cost Recovery System) is the IRS-required depreciation method for tax purposes. It specifies recovery periods and depreciation methods for different asset classes. Use MACRS for tax reporting.",
              },
              {
                q: "What is salvage value?",
                a: "Salvage value is the estimated residual value of an asset at the end of its useful life. It's subtracted from cost to determine the depreciable amount. Some methods like MACRS assume zero salvage value.",
              },
              {
                q: "When does depreciation begin?",
                a: "Depreciation begins when the asset is placed in service — ready and available for use — not necessarily when purchased. Track placed-in-service dates accurately as they determine depreciation start dates.",
              },
              {
                q: "What is depreciation recapture?",
                a: "Depreciation recapture is tax on the portion of asset sale gain attributable to prior depreciation deductions. When selling for more than book value, the gain up to depreciation taken is taxed as ordinary income.",
              },
              {
                q: "What is bonus depreciation?",
                a: "Bonus depreciation allows additional first-year depreciation on qualifying assets. The Tax Cuts and Jobs Act set bonus depreciation at 100% through 2022, phasing down to 80% in 2023, 60% in 2024, 40% in 2025, and 20% in 2026.",
              },
              {
                q: "How do I choose a depreciation method?",
                a: "For tax reporting, use MACRS as required by the IRS. For financial reporting, choose a method that matches asset usage patterns: straight-line for consistent utility, declining balance for rapidly declining value, units of production for usage-based assets.",
              },
              {
                q: "What assets can be depreciated?",
                a: "Tangible business assets with useful lives beyond one year can be depreciated: equipment, machinery, vehicles, buildings, furniture, and improvements. Land cannot be depreciated as it doesn't wear out.",
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
            Depreciation is a fundamental accounting concept with significant tax implications. Understanding different methods, tax rules, and proper record-keeping ensures accurate financial reporting and optimal tax planning.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate depreciation using different methods and understand annual deductions. But the real value comes from integrating depreciation into your overall tax and financial strategy.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're purchasing equipment, vehicles, or real property, proper depreciation management provides tax benefits and accurate financial reporting. Consult a tax professional for complex situations to ensure compliance and optimization.
          </p>
          <div className="pull-quote mt-8">
            Depreciation is both an accounting necessity and a tax opportunity. Calculate accurately, plan strategically, and maximize the benefits.
          </div>
        </section>

      </div>
    </article>
  );
}
