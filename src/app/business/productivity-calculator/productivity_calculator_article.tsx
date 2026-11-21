import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ProductivityCalculatorArticle() {
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
          <span className="meta-tag">Business · Productivity & Efficiency</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Productivity Calculator: Calculate Productivity Metrics
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for measuring and improving productivity
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your team produced 500 units in 200 hours of work. Your labor productivity is 2.5 units per hour (500 / 200). If each unit sells for $100, your labor productivity in revenue terms is $250 per hour. Compared to last month&apos;s productivity of 2.0 units per hour, you&apos;ve improved by 25%. This improvement came from process optimization and reduced downtime.
          </p>
          <p className="mb-5">
            Productivity measures the efficiency of production, typically expressed as output per unit of input. It&apos;s a critical metric for assessing operational efficiency, identifying improvement opportunities, and benchmarking performance.
          </p>
          <p className="mb-5">
            But productivity varies by industry, process, and measurement method. Understanding how to calculate and interpret productivity metrics helps optimize operations and improve profitability.
          </p>
          <p>
            The productivity calculator above helps you calculate productivity metrics, track performance over time, and identify improvement opportunities.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Productivity Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Productivity is calculated by dividing output by input. Output can be units produced, revenue generated, or tasks completed. Input is typically labor hours, but can also include materials, capital, or energy.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Productivity Formula:
          </p>
          <div className="formula-block">
            <pre>Productivity = Output / Input</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Output (Units)", "500 units"],
              ["Input (Labor Hours)", "200 hours"],
              ["Labor Productivity", "500 / 200 = 2.5 units/hour"],
              ["Revenue per Unit", "$100"],
              ["Revenue Productivity", "$50,000 / 200 = $250/hour"],
              ["Previous Productivity", "2.0 units/hour"],
              ["Improvement", "(2.5 - 2.0) / 2.0 = 25%"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, productivity improved by 25% month-over-month. Tracking productivity trends helps identify what&apos;s working and what needs improvement. Consistent measurement drives continuous improvement.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── PRODUCTIVITY TYPES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Types of Productivity Metrics
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different productivity metrics measure different aspects of efficiency. Understanding each type helps you choose the right metric for your context.
          </p>

          {[
            {
              heading: "Labor Productivity",
              rows: [
                ["Formula", "Output / Labor Hours"],
                ["Measures", "Efficiency of workforce"],
                ["Best For", "Manufacturing, service industries"],
              ],
              note: "Labor productivity measures output per labor hour. It's the most common productivity metric. Use to assess workforce efficiency and identify training or process improvement opportunities.",
            },
            {
              heading: "Capital Productivity",
              rows: [
                ["Formula", "Output / Capital Investment"],
                ["Measures", "Efficiency of capital use"],
                ["Best For", "Capital-intensive industries"],
              ],
              note: "Capital productivity measures output per dollar of capital invested. Use to assess ROI on equipment and infrastructure. Helps make capital allocation decisions.",
            },
            {
              heading: "Material Productivity",
              rows: [
                ["Formula", "Output / Material Input"],
                ["Measures", "Efficiency of material use"],
                ["Best For", "Manufacturing, construction"],
              ],
              note: "Material productivity measures output per unit of material input. Use to identify waste and optimize material usage. Reduces costs and environmental impact.",
            },
            {
              heading: "Total Factor Productivity",
              rows: [
                ["Formula", "Output / (Labor + Capital + Materials)"],
                ["Measures", "Overall efficiency"],
                ["Best For", "Economic analysis, benchmarking"],
              ],
              note: "Total factor productivity measures output relative to all inputs. It's a comprehensive measure of overall efficiency. Used for economic analysis and high-level benchmarking.",
            },
          ].map((metric: { heading: string; rows: string[][]; note: string }) => (
            <div key={metric.heading} className="state-card">
              <h3>{metric.heading}</h3>
              <table className="styled-table">
                <tbody>
                  {metric.rows.map(([item, val]: string[]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{metric.note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING PRODUCTIVITY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Improve Productivity
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Productivity improvement requires identifying bottlenecks, optimizing processes, and investing in the right areas. Here are proven strategies to boost productivity.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Process optimization",
                body: "Analyze workflows to identify bottlenecks and waste. Implement lean principles to eliminate non-value-added activities. Streamline processes to reduce cycle time and increase throughput. Small process improvements compound significantly.",
              },
              {
                n: "2",
                title: "Technology investment",
                body: "Invest in automation, software, and equipment that reduce manual effort and increase output. Technology can dramatically improve productivity by reducing errors and speeding up processes. Calculate ROI before investing.",
              },
              {
                n: "3",
                title: "Employee training",
                body: "Well-trained employees work more efficiently and produce higher quality output. Invest in skills training and process knowledge. Training increases both speed and accuracy, improving overall productivity.",
              },
              {
                n: "4",
                title: "Work environment",
                body: "Optimize the physical and digital work environment. Reduce distractions, improve ergonomics, and provide necessary tools. A better environment reduces fatigue and increases focus and efficiency.",
              },
              {
                n: "5",
                title: "Standardization",
                body: "Standardize processes and best practices. Consistency reduces variability and improves efficiency. Document procedures and train employees on standard methods. Standardization enables continuous improvement.",
              },
              {
                n: "6",
                title: "Performance measurement",
                body: "Measure productivity regularly and provide feedback. Employees improve when they know how they're performing. Set productivity goals and track progress. Measurement drives improvement.",
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

        {/* ── PRODUCTIVITY BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Productivity Benchmarks
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Productivity varies significantly by industry. Understanding industry benchmarks helps assess your performance and identify improvement opportunities.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Industry</th>
                <th className="dark:text-slate-100">Typical Productivity</th>
                <th className="dark:text-slate-100">Measurement</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Manufacturing", "High", "Units per labor hour"],
                ["Software Development", "Variable", "Story points per sprint"],
                ["Retail", "Medium", "Revenue per labor hour"],
                ["Healthcare", "Medium", "Patients per provider"],
                ["Construction", "Medium", "Square feet per labor hour"],
                ["Services", "Variable", "Revenue per labor hour"],
              ].map(([industry, productivity, measurement]) => (
                <tr key={industry}>
                  <td className="dark:text-slate-100">{industry}</td>
                  <td className="dark:text-slate-100">{productivity}</td>
                  <td className="dark:text-slate-100">{measurement}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Manufacturing typically has the highest and most measurable productivity. Service industries have more variable productivity due to the nature of the work. Benchmark against your specific industry and track your own trends over time.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Productivity Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Many organizations measure productivity incorrectly or focus on the wrong metrics. Here&apos;s what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Focusing only on speed",
                body: "Productivity is output per input, not just speed. Focusing only on speed can compromise quality. Balance speed with quality. High productivity with poor quality is not true productivity.",
              },
              {
                n: "2",
                title: "Using wrong metrics",
                body: "Measuring the wrong thing leads to wrong behaviors. Choose metrics that align with business goals. Output should be meaningful, not just easy to measure. Metrics drive behavior.",
              },
              {
                n: "3",
                title: "Not accounting for quality",
                body: "Productivity should measure good output, not just any output. Include quality metrics in productivity assessment. High defect rates reduce effective productivity. Quality and productivity are linked.",
              },
              {
                n: "4",
                title: "Ignoring external factors",
                body: "Productivity is affected by external factors like demand, supply chain, and market conditions. Don't blame employees for factors outside their control. Context matters in productivity assessment.",
              },
              {
                n: "5",
                title: "Not tracking trends",
                body: "Single-point productivity measurements have limited value. Track trends over time to identify patterns and improvement opportunities. Trends reveal whether initiatives are working.",
              },
              {
                n: "6",
                title: "Over-optimizing one metric",
                body: "Optimizing one metric at the expense of others is counterproductive. Balance productivity with quality, safety, and employee satisfaction. Holistic optimization is better than single-metric optimization.",
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
            Practical Tips for Productivity Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate productivity accurately</>],
              [<><strong>Choose right metrics</strong> — align with business goals</>],
              [<><strong>Track trends</strong> — measure over time</>],
              [<><strong>Balance quality</strong> — speed with quality</>],
              [<><strong>Optimize processes</strong> — eliminate waste</>],
              [<><strong>Invest in training</strong> — skills improve efficiency</>],
              [<><strong>Provide feedback</strong> — performance visibility</>],
              [<><strong>Benchmark appropriately</strong> — industry and internal</>],
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
                q: "How do I calculate productivity?",
                a: "Productivity = Output / Input. Output can be units produced, revenue generated, or tasks completed. Input is typically labor hours but can include materials, capital, or energy. Choose output and input measures relevant to your context.",
              },
              {
                q: "What is labor productivity?",
                a: "Labor productivity = Output / Labor Hours. It measures output per hour of work. For example, 500 units produced in 200 hours = 2.5 units per hour. Labor productivity is the most common productivity metric.",
              },
              {
                q: "How do I measure productivity improvement?",
                a: "Productivity Improvement = (New Productivity - Old Productivity) / Old Productivity. For example, improving from 2.0 to 2.5 units/hour: (2.5 - 2.0) / 2.0 = 25% improvement.",
              },
              {
                q: "What is total factor productivity?",
                a: "Total factor productivity = Output / (Labor + Capital + Materials). It measures output relative to all inputs combined. It's a comprehensive measure of overall efficiency used in economic analysis.",
              },
              {
                q: "How can I improve productivity?",
                a: "Optimize processes to eliminate waste, invest in technology and automation, train employees to improve skills, optimize the work environment, standardize best practices, and measure performance to drive improvement.",
              },
              {
                q: "What is a good productivity metric?",
                a: "A good productivity metric aligns with business goals, is easy to measure, and drives the right behavior. Choose metrics that reflect meaningful output, not just activity. The right metric depends on your industry and context.",
              },
              {
                q: "How often should I measure productivity?",
                a: "Measure productivity monthly for most operations. Measure weekly for fast-changing environments. Measure daily for critical processes. Regular measurement enables trend tracking and timely intervention.",
              },
              {
                q: "What is the difference between efficiency and productivity?",
                a: "Efficiency is doing things right (minimizing waste). Productivity is doing the right things (output per input). Efficiency focuses on process; productivity focuses on results. Both are important for optimal performance.",
              },
              {
                q: "How do I benchmark productivity?",
                a: "Benchmark against industry averages, competitors, and your own historical performance. Industry benchmarks provide external context. Historical trends show your progress. Use both for comprehensive assessment.",
              },
              {
                q: "Should productivity be the only metric?",
                a: "No. Productivity should be balanced with quality, safety, customer satisfaction, and employee well-being. Optimizing productivity alone can lead to poor outcomes in other areas. Use a balanced scorecard approach.",
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
            Productivity measurement is essential for operational excellence. Understanding productivity metrics, tracking trends, and implementing improvement strategies drives efficiency and profitability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate productivity metrics and track performance. But the real value comes from using this information to identify improvement opportunities, optimize processes, and build a more efficient organization.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you&apos;re managing a manufacturing line, a software team, or a service organization, productivity measurement provides the foundation for continuous improvement. Measure precisely, improve continuously, and achieve operational excellence.
          </p>
          <div className="pull-quote mt-8">
            Productivity is not about working harder — it&apos;s about working smarter. Measure, optimize, and achieve more with the same or less input.
          </div>
        </section>

      </div>
    </article>
  );
}
