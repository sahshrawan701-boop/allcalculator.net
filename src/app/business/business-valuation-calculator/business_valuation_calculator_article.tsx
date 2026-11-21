import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BusinessValuationArticle() {
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
          <span className="meta-tag">Business · Valuation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Business Valuation Calculator: Determine Your Company's Worth
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for business owners and investors
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business generates $500,000 in annual profit. Using a 5x multiple, the valuation is $2.5 million. But if you can demonstrate consistent 20% growth and strong market position, that multiple might increase to 7x — valuing your business at $3.5 million. The difference of $1 million comes from understanding and presenting the right valuation factors.
          </p>
          <p className="mb-5">
            Business valuation is the process of determining the economic value of a business. Whether you're selling, buying, seeking investment, or planning succession, knowing your business's value is essential for informed decision-making.
          </p>
          <p className="mb-5">
            But valuation isn't a single number — it's a range based on different methodologies, market conditions, and business-specific factors. Understanding these approaches helps you defend your valuation and negotiate from a position of knowledge.
          </p>
          <p>
            The business valuation calculator above helps you estimate your business's worth using common valuation methods. Use it to understand your value drivers and prepare for transactions or strategic planning.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── VALUATION METHODS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Business Valuation Methods
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Different valuation methods produce different results. Understanding each approach helps you choose the right method for your situation and industry.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Method</th>
                <th className="dark:text-slate-100">Formula</th>
                <th className="dark:text-slate-100">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Income Approach (DCF)", "Present value of future cash flows", "Businesses with predictable cash flows"],
                ["Market Approach (Multiples)", "EBITDA × Industry Multiple", "Businesses with comparable transactions"],
                ["Asset Approach", "Fair market value of assets - liabilities", "Asset-heavy businesses, holding companies"],
              ].map(([method, formula, best]) => (
                <tr key={method}>
                  <td className="dark:text-slate-100">{method}</td>
                  <td className="dark:text-slate-100">{formula}</td>
                  <td className="dark:text-slate-100">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Most valuations use multiple methods and reconcile the results. The income approach is most common for operating businesses, while the asset approach works better for asset-heavy companies. The market approach provides reality checks based on actual transactions.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── EBITDA MULTIPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding EBITDA Multiples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) multiples are the most common valuation metric. The multiple depends on industry, growth, risk, and market conditions.
          </p>

          {[
            {
              heading: "Low Multiple (3-5x)",
              rows: [
                ["Characteristics", "Low growth, high risk, competitive markets"],
                ["Industries", "Retail, restaurants, traditional services"],
                ["Valuation Focus", "Asset value, cash flow stability"],
              ],
              note: "Low multiples apply to businesses in competitive industries with limited growth potential. Valuation focuses on tangible assets and current cash flow rather than future growth expectations.",
            },
            {
              heading: "Medium Multiple (5-8x)",
              rows: [
                ["Characteristics", "Moderate growth, established operations"],
                ["Industries", "Manufacturing, distribution, professional services"],
                ["Valuation Focus", "Cash flow, market position, customer base"],
              ],
              note: "Medium multiples apply to established businesses with solid operations and moderate growth. Valuation considers both current performance and growth potential, with emphasis on sustainable competitive advantages.",
            },
            {
              heading: "High Multiple (8-15x+)",
              rows: [
                ["Characteristics", "High growth, scalable models, strong moats"],
                ["Industries", "Technology, SaaS, healthcare services"],
                ["Valuation Focus", "Growth rate, recurring revenue, market opportunity"],
              ],
              note: "High multiples apply to businesses with scalable models and strong growth trajectories. Valuation emphasizes future potential over current earnings, particularly for subscription-based or technology-enabled businesses.",
            },
          ].map((scenario: { heading: string; rows: string[][]; note: string }) => (
            <div key={scenario.heading} className="state-card">
              <h3>{scenario.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {scenario.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{scenario.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── VALUE DRIVERS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Business Value Drivers
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Understanding what drives value helps you maximize your business's worth before selling or seeking investment. Focus on these factors to increase your valuation multiple.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Revenue growth rate",
                body: "Consistent revenue growth signals market demand and business momentum. Higher growth rates justify higher multiples. Demonstrate sustainable growth through customer acquisition, market expansion, or product innovation.",
              },
              {
                n: "2",
                title: "Profit margins",
                body: "Strong and improving profit margins indicate operational efficiency and pricing power. Higher margins provide more cash flow for debt service and reinvestment, reducing risk and increasing valuation.",
              },
              {
                n: "3",
                title: "Customer concentration",
                body: "Diversified customer bases reduce risk. If one customer represents more than 20% of revenue, buyers will discount valuation. Work to diversify your customer base and reduce dependency on any single customer.",
              },
              {
                n: "4",
                title: "Recurringrevenue",
                body: "Subscription or contract-based recurring revenue is highly valued. It provides predictable cash flow and reduces customer acquisition costs. The higher the percentage of recurring revenue, the higher the multiple.",
              },
              {
                n: "5",
                title: "Management team",
                body: "A strong, experienced management team that can operate without the founder increases value. Document processes, develop key employees, and create succession plans to show the business can continue without you.",
              },
              {
                n: "6",
                title: "Competitive advantages",
                body: "Sustainable competitive advantages — proprietary technology, strong brand, exclusive partnerships, or regulatory barriers — protect market share and justify higher valuations. Clearly articulate and defend your moat.",
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

        {/* ── PREPARING FOR VALUATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Prepare for a Business Valuation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Proper preparation can significantly impact your valuation. Organize your financials and operations to present your business in the best possible light.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Clean financial records",
                body: "Prepare 3-5 years of financial statements including income statements, balance sheets, and cash flow statements. Ensure they're accurate, consistent, and professionally prepared. Clean records build credibility and reduce due diligence friction.",
              },
              {
                n: "2",
                title: "Normalize earnings",
                body: "Adjust for owner compensation, one-time expenses, and non-operating items. Show what the business would earn under normal ownership. Normalized EBITDA provides a clearer picture of operating performance for valuation.",
              },
              {
                n: "3",
                title: "Document processes",
                body: "Create standard operating procedures for all critical functions. Documented processes show the business can operate without the founder and reduce operational risk. This increases transferability and valuation.",
              },
              {
                n: "4",
                title: "Organize legal documents",
                body: "Gather contracts, leases, licenses, patents, and other legal documents. Ensure they're current, transferable, and don't have hidden risks. Clean legal history reduces deal risk and supports higher valuation.",
              },
              {
                n: "5",
                title: "Identify growth opportunities",
                body: "Document untapped markets, product extensions, or operational improvements. Show a clear path for future growth. Buyers pay for future potential, not just past performance. Quantified opportunities justify higher multiples.",
              },
              {
                n: "6",
                title: "Address risks proactively",
                body: "Identify and mitigate business risks before valuation. Customer concentration, key person dependency, and market risks should be addressed. Proactive risk management reduces perceived risk and increases valuation.",
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
            Common Business Valuation Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Business owners often make mistakes that reduce their valuation or derail transactions. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Using only one valuation method",
                body: "Relying on a single method provides an incomplete picture. Use multiple methods and reconcile the results. Different methods highlight different aspects of value, and the range provides negotiation flexibility.",
              },
              {
                n: "2",
                title: "Overestimating synergies",
                body: "Assuming buyers will pay for synergies that may not materialize leads to unrealistic expectations. Focus on stand-alone value. Synergies are buyer-specific and may not be realized, so don't build them into your valuation.",
              },
              {
                n: "3",
                title: "Ignoring market conditions",
                body: "Valuation multiples fluctuate with market conditions, interest rates, and industry trends. Research current market transactions and adjust expectations accordingly. Market timing significantly affects achievable valuation.",
              },
              {
                n: "4",
                title: "Not preparing financials",
                body: "Disorganized or inaccurate financial records raise red flags and reduce credibility. Invest in professional accounting and clean financial statements before valuation. Poor records lead to lower multiples or deal failure.",
              },
              {
                n: "5",
                title: "Being the business",
                body: "If the business can't operate without you, valuation suffers. Build systems, develop key employees, and create succession plans. Businesses dependent on founders receive significant valuation discounts.",
              },
              {
                n: "6",
                title: "Rushing the process",
                body: "Valuation and transactions take time. Rushing leads to mistakes, missed opportunities, and suboptimal outcomes. Allow sufficient time for preparation, market research, and negotiation. Patience often leads to better results.",
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
            Practical Tips for Maximizing Business Value
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate valuation using multiple methods</>],
              [<><strong>Research industry multiples</strong> — understand typical multiples for your industry</>],
              [<><strong>Improve profit margins</strong> — operational efficiency increases valuation</>],
              [<><strong>Diversify customers</strong> — reduce concentration risk</>],
              [<><strong>Build recurring revenue</strong> — subscriptions and contracts increase value</>],
              [<><strong>Document processes</strong> — show the business can operate without you</>],
              [<><strong>Develop management team</strong> — reduce key person dependency</>],
              [<><strong>Plan ahead</strong> — start preparation 1-2 years before intended sale</>],
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
                q: "How do I calculate business valuation?",
                a: "Common methods include EBITDA multiples (EBITDA × industry multiple), discounted cash flow (present value of future cash flows), and asset-based (fair market value of assets minus liabilities). The calculator above uses the EBITDA multiple method, which is most common for operating businesses.",
              },
              {
                q: "What is a typical EBITDA multiple?",
                a: "EBITDA multiples vary by industry, growth rate, and business quality. Typical ranges are 3-5x for traditional businesses, 5-8x for established companies, and 8-15x+ for high-growth technology or subscription businesses. Research recent transactions in your industry for accurate benchmarks.",
              },
              {
                q: "How do I increase my business valuation?",
                a: "Focus on value drivers: increase revenue growth, improve profit margins, diversify customers, build recurring revenue, develop management team, document processes, and reduce risks. Addressing these factors systematically increases both performance and valuation multiple.",
              },
              {
                q: "When should I get a business valuation?",
                a: "Get a valuation when planning to sell, seeking investment, considering succession, or for strategic planning. Regular valuations every 1-2 years help track progress and identify improvement opportunities. Early preparation allows time to address value drivers.",
              },
              {
                q: "What is the difference between EBITDA and net income?",
                a: "EBITDA adds back interest, taxes, depreciation, and amortization to net income. It shows operating performance independent of capital structure and tax strategy. EBITDA is commonly used for valuation because it's comparable across different businesses and capital structures.",
              },
              {
                q: "How accurate are business valuations?",
                a: "Valuations are estimates based on available information and assumptions. Accuracy depends on data quality, method selection, and market conditions. Professional valuations provide defensible ranges but actual transaction prices may vary based on buyer motivation and negotiation.",
              },
              {
                q: "Should I use a professional business valuator?",
                a: "Professional valuation is recommended for significant transactions, legal requirements, or complex situations. Professionals provide defensible valuations, industry expertise, and credibility. For planning purposes, calculators and estimates provide useful guidance.",
              },
              {
                q: "How does business size affect valuation?",
                a: "Larger businesses typically command higher multiples due to reduced risk, greater resources, and market position. Smaller businesses often receive discounts due to key person dependency, limited resources, and customer concentration. Scale creates value through diversification and operational capability.",
              },
              {
                q: "What is normalized EBITDA?",
                a: "Normalized EBITDA adjusts reported earnings for owner compensation, one-time expenses, non-operating income/expenses, and other items that don't reflect ongoing operations. It shows what the business would earn under normal ownership and provides a clearer basis for valuation.",
              },
              {
                q: "How long does a business valuation take?",
                a: "Simple calculator-based valuations take minutes. Professional valuations typically take 2-6 weeks depending on complexity, data availability, and scope. Complex businesses with multiple locations or special circumstances may take longer. Start preparation well before needed.",
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
            Business valuation is both art and science. Understanding the methodologies, value drivers, and preparation requirements helps you maximize your business's worth and achieve successful transactions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page provides a starting point for understanding your business's value. But the real value comes from systematically improving your business fundamentals — growth, profitability, and risk management — over time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're planning to sell, seeking investment, or simply understanding your business's worth, proper valuation preparation pays dividends. Start early, focus on value drivers, and present your business in the best possible light.
          </p>
          <div className="pull-quote mt-8">
            The best valuation preparation happens years before the transaction. Build value continuously, and when the time comes, your business will speak for itself.
          </div>
        </section>

      </div>
    </article>
  );
}
