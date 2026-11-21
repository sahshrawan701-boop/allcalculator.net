import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SalesForecastCalculatorArticle() {
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
          <span className="meta-tag">Business · Sales Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Sales Forecast Calculator: Calculate Sales Forecast
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for sales projection and planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your business has 100 customers with an average purchase value of $500. You expect to add 20 new customers per month with a 5% monthly churn rate. Your forecasted revenue for next month is $51,250 (100 × $500 + 20 × $500 - 5 × $500). Over 12 months, you forecast $720,000 in revenue with 240 new customers and 60 churned customers. This forecast helps with inventory planning, budgeting, and resource allocation.
          </p>
          <p className="mb-5">
            Sales forecasting predicts future revenue based on historical data, market trends, and business assumptions. It's essential for budgeting, inventory management, and strategic planning. Understanding sales forecasting helps anticipate demand and allocate resources effectively.
          </p>
          <p className="mb-5">
            But forecasting accuracy varies by business model, market conditions, and data quality. Understanding different forecasting methods, key assumptions, and accuracy improvement strategies helps create reliable forecasts.
          </p>
          <p>
            The sales forecast calculator above helps you project future sales based on customer metrics and growth assumptions.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Sales Forecasting Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Sales forecasting projects future revenue by combining historical trends with growth assumptions. Key inputs include current customers, customer acquisition rate, churn rate, and average purchase value. Forecasts can be simple (linear growth) or complex (predictive models).
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Forecast Formula:
          </p>
          <div className="formula-block">
            <pre>Forecasted Revenue = (Current Customers + New Customers - Churned Customers) × Average Purchase Value</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Current Customers", "100"],
              ["New Customers/Month", "20"],
              ["Churn Rate/Month", "5%"],
              ["Avg Purchase Value", "$500"],
              ["Month 1 Revenue", "(100 + 20 - 5) × $500 = $57,500"],
              ["Month 12 Customers", "100 + (20 - 5) × 12 = 280"],
              ["Month 12 Revenue", "280 × $500 = $140,000"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, net customer growth is 15 per month (20 new - 5 churned). Over 12 months, customer base grows from 100 to 280, and monthly revenue grows from $50,000 to $140,000. This simple model provides a baseline forecast.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FORECASTING METHODS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Sales Forecasting Methods
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different forecasting methods provide different levels of accuracy and complexity. Understanding each method helps choose the right approach for your business.
          </p>

          {[
            {
              heading: "Historical Growth Rate",
              rows: [
                ["Method", "Apply historical growth rate"],
                ["Complexity", "Low"],
                ["Best For", "Stable businesses"],
              ],
              note: "Historical growth rate applies past growth to future periods. Simple but assumes past trends continue. Best for stable businesses with consistent growth patterns.",
            },
            {
              heading: "Pipeline-Based",
              rows: [
                ["Method", "Weight sales pipeline by probability"],
                ["Complexity", "Medium"],
                ["Best For", "B2B with defined pipeline"],
              ],
              note: "Pipeline-based forecasting weights opportunities by close probability. More accurate for B2B with defined sales processes. Requires good pipeline tracking and probability estimates.",
            },
            {
              heading: "Predictive Modeling",
              rows: [
                ["Method", "Statistical/Machine learning models"],
                ["Complexity", "High"],
                ["Best For", "Data-rich businesses"],
              ],
              note: "Predictive modeling uses statistical or ML algorithms to forecast based on multiple variables. Most accurate but requires significant data and expertise. Best for large, data-rich organizations.",
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

        {/* ── FORECASTING COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Key Forecasting Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Accurate forecasting requires understanding and tracking key components. Each component significantly impacts forecast accuracy.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Component</th>
                <th className="dark:text-slate-100">Impact</th>
                <th className="dark:text-slate-100">Tracking</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Customer Base", "Foundation for revenue", "Monthly active customers"],
                ["Acquisition Rate", "Growth driver", "New customers per period"],
                ["Churn Rate", "Retention impact", "Customers lost per period"],
                ["Purchase Frequency", "Revenue multiplier", "Purchases per customer"],
                ["Average Order Value", "Revenue per transaction", "Average purchase amount"],
                ["Seasonality", "Pattern adjustment", "Monthly/quarterly patterns"],
              ].map(([component, impact, tracking]) => (
                <tr key={component}>
                  <td className="dark:text-slate-100">{component}</td>
                  <td className="dark:text-slate-100">{impact}</td>
                  <td className="dark:text-slate-100">{tracking}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Track all components consistently. Small errors in assumptions compound over time. Regularly update forecasts with actual data to improve accuracy. Historical accuracy informs future forecasts.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING ACCURACY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Forecast Accuracy
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Forecast accuracy improves with better data, assumptions, and processes. Here are proven strategies to increase accuracy.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Use historical data",
                body: "Historical sales data provides the foundation for forecasting. Analyze historical patterns, seasonality, and growth trends. More historical data improves forecast accuracy.",
              },
              {
                n: "2",
                title: "Track pipeline accurately",
                body: "For B2B businesses, accurate pipeline tracking is essential. Update opportunity stages regularly. Use realistic close probabilities based on historical conversion rates.",
              },
              {
                n: "3",
                title: "Account for seasonality",
                body: "Many businesses have seasonal patterns. Identify seasonal patterns and adjust forecasts accordingly. Seasonal adjustments prevent over- or under-forecasting.",
              },
              {
                n: "4",
                title: "Validate assumptions",
                body: "Challenge and validate all assumptions. Are growth rates realistic? Is churn rate accurate? Regularly review and adjust assumptions based on actual performance.",
              },
              {
                n: "5",
                title: "Use multiple methods",
                body: "Combine different forecasting methods for cross-validation. If methods agree, confidence increases. If they diverge, investigate assumptions. Multiple methods improve reliability.",
              },
              {
                n: "6",
                title: "Track forecast accuracy",
                body: "Compare forecasts to actual results and track accuracy. Analyze forecast errors to identify patterns and improve assumptions. Continuous learning improves future forecasts.",
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
            Common Sales Forecasting Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many businesses forecast inaccurately due to common errors. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Overoptimistic assumptions",
                body: "Optimistic growth and low churn assumptions overstate forecasts. Use conservative assumptions based on historical data. It's better to under-forecast and exceed than over-forecast and miss.",
              },
              {
                n: "2",
                title: "Ignoring seasonality",
                body: "Failing to account for seasonal patterns leads to inaccurate forecasts. Identify and adjust for seasonality. Seasonal businesses must incorporate seasonal adjustments.",
              },
              {
                n: "3",
                title: "Not updating regularly",
                body: "Forecasts become stale quickly. Update forecasts monthly with actual data. Regular updates ensure forecasts reflect current business conditions and improve accuracy.",
              },
              {
                n: "4",
                title: "Single-point forecasts",
                body: "Single-point forecasts don't convey uncertainty. Provide forecast ranges (best case, worst case, most likely). Ranges communicate uncertainty and enable better planning.",
              },
              {
                n: "5",
                title: "Ignoring external factors",
                body: "Market conditions, competition, and economic factors impact sales. Incorporate external factors into forecasts. External awareness improves forecast realism.",
              },
              {
                n: "6",
                title: "Not tracking accuracy",
                body: "Without tracking accuracy, you can't improve. Compare forecasts to actuals, calculate error rates, and analyze patterns. Accuracy tracking enables continuous improvement.",
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
            Practical Tips for Sales Forecasting
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — create baseline forecasts</>],
              [<><strong>Track components</strong> — customers, acquisition, churn</>],
              [<><strong>Account for seasonality</strong> — adjust for patterns</>],
              [<><strong>Use conservative assumptions</strong> — realistic growth</>],
              [<><strong>Update regularly</strong> — monthly with actuals</>],
              [<><strong>Provide ranges</strong> — best, worst, most likely</>],
              [<><strong>Track accuracy</strong> — compare to actuals</>],
              [<><strong>Use multiple methods</strong> — cross-validate</>],
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
                q: "How do I calculate sales forecast?",
                a: "Sales Forecast = (Current Customers + New Customers - Churned Customers) × Average Purchase Value. For example, 100 customers + 20 new - 5 churned = 115 customers. At $500 average value: 115 × $500 = $57,500 forecast.",
              },
              {
                q: "What is the best forecasting method?",
                a: "The best method depends on your business. Historical growth rate works for stable businesses. Pipeline-based works for B2B. Predictive modeling works for data-rich organizations. Start simple and add complexity as needed.",
              },
              {
                q: "How do I account for seasonality?",
                a: "Identify seasonal patterns from historical data. Calculate seasonal indices for each period. Apply seasonal adjustments to base forecasts. For example, if December is 20% above average, multiply December forecast by 1.20.",
              },
              {
                q: "What is churn rate?",
                a: "Churn rate = Customers Lost / Total Customers × 100. For example, 5 lost out of 100 = 5% monthly churn. Churn reduces customer base and must be included in forecasts. Lower churn improves forecast accuracy.",
              },
              {
                q: "How accurate should my forecast be?",
                a: "Forecast accuracy varies by industry and business stability. Aim for within 10% for stable businesses. For volatile businesses, 20-30% may be acceptable. Focus on improving accuracy over time through better assumptions and data.",
              },
              {
                q: "How often should I update my forecast?",
                a: "Update forecasts monthly for most businesses. For fast-growing or volatile businesses, update weekly or bi-weekly. Regular updates ensure forecasts reflect current conditions and improve accuracy.",
              },
              {
                q: "Should I use ranges or single numbers?",
                a: "Use ranges to communicate uncertainty. Provide best case, worst case, and most likely scenarios. Ranges enable better planning for different outcomes. Single-point forecasts don't convey risk.",
              },
              {
                q: "How do I forecast for new products?",
                a: "New product forecasting is challenging. Use analogous products, market research, and pre-orders. Start conservative and adjust as data becomes available. New product forecasts have higher uncertainty.",
              },
              {
                q: "What is pipeline-based forecasting?",
                a: "Pipeline-based forecasting weights sales opportunities by close probability. Sum of (opportunity value × close probability) = forecast. More accurate for B2B with defined sales processes and good pipeline tracking.",
              },
              {
                q: "How do I improve forecast accuracy?",
                a: "Use historical data, track pipeline accurately, account for seasonality, validate assumptions, use multiple methods, and track accuracy. Continuous improvement comes from learning from forecast errors and refining assumptions.",
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
            Sales forecasting is essential for business planning and resource allocation. Understanding forecasting methods, tracking key components, and continuously improving accuracy enables better decision-making.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you create baseline sales forecasts. But the real value comes from using this information to plan inventory, budget resources, and make strategic business decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're planning for next month or next year, accurate sales forecasting provides the foundation for business success. Forecast precisely, plan effectively, and grow confidently.
          </p>
          <div className="pull-quote mt-8">
            Sales forecasting is not about predicting the future perfectly — it's about reducing uncertainty to make better decisions today.
          </div>
        </section>

      </div>
    </article>
  );
}
