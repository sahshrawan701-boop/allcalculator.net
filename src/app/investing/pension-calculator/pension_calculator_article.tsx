import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PensionCalculatorArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">

        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Investing · Pension Planning</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Pension Calculator: Plan Your Retirement Income
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide to pension planning
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Pension planning is essential for ensuring financial security in retirement. The Pension Calculator helps you estimate your future pension income based on your current salary, years of service, contribution rates, and expected growth. Understanding your pension projection is crucial for retirement planning.
          </p>
          <p className="mb-5">
            Whether you have a defined benefit pension, a defined contribution plan, or are planning for Social Security, this calculator helps you understand your expected retirement income and identify any gaps in your retirement savings.
          </p>
          <p className="mb-5">
            The calculator provides estimates for your annual pension income, total contributions, and the projected value of your pension at retirement, helping you make informed decisions about your retirement planning.
          </p>
          <p>
            Use the Pension Calculator to plan your retirement income and ensure you have sufficient resources for a comfortable retirement.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How the Pension Calculator Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator projects your pension income based on your salary history, years of service, contribution rates, and expected investment growth. For defined benefit plans, it uses the benefit formula. For defined contribution plans, it projects account value and converts to an annuity.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Here&apos;s what you&apos;ll typically need to input:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current salary", "Your current annual salary"],
              ["Years of service", "Total years worked or planned"],
              ["Contribution rate (%)", "Percentage contributed to pension"],
              ["Employer match (%)", "Employer contribution match"],
              ["Expected return (%)", "Anticipated investment growth"],
              ["Retirement age", "Age when you plan to retire"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then displays your projected annual pension income, total contributions, and pension value at retirement.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Pension Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Pension calculations vary by plan type. Defined benefit plans use a benefit formula, while defined contribution plans project account value.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Defined Benefit Formula:
          </p>
          <div className="formula-block">
            <pre>Annual_Pension = Final_Average_Salary × Years_of_Service × Benefit_Factor</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Defined Contribution Formula:
          </p>
          <div className="formula-block">
            <pre>Account_Value = PV × (1 + r)^(t) + PMT × ((1 + r)^(t) - 1) / r</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Where:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Final_Average_Salary", "Average of highest earning years"],
              ["Years_of_Service", "Total years worked at retirement"],
              ["Benefit_Factor", "Percentage per year of service (typically 1-2%)"],
              ["Account_Value", "Total value of contributions and growth"],
              ["PV", "Current account balance"],
              ["PMT", "Annual contribution"],
              ["r", "Annual return rate (decimal)"],
              ["t", "Years until retirement"],
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Defined benefit pensions provide guaranteed income but are becoming less common. Defined contribution plans like 401(k)s shift investment risk to employees but offer more portability and control.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Pension Income
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence your pension income. Understanding these variables helps you maximize your retirement benefits.
          </p>

          {[
            {
              heading: "Years of Service",
              rows: [
                ["Impact", "Longer service increases pension benefits"],
                ["Vesting", "Minimum years to qualify for benefits"],
                ["Early retirement", "May reduce benefits for early exit"],
              ],
              note: "Each additional year of service typically increases your pension benefit. Check your plan&apos;s vesting schedule to ensure you qualify for maximum benefits.",
            },
            {
              heading: "Salary History",
              rows: [
                ["Final average", "Based on highest earning years"],
                ["Career growth", "Higher salary increases pension"],
                ["Cost of living", "Some plans adjust for inflation"],
              ],
              note: "Your pension is often based on your highest earning years. Maximizing your salary in your final working years can significantly increase your pension benefits.",
            },
            {
              heading: "Contribution Rate",
              rows: [
                ["Employee contribution", "Percentage you contribute"],
                ["Employer match", "Free money from employer"],
                ["Total contribution", "Combined employee and employer"],
              ],
              note: "Always contribute enough to get the full employer match. This is essentially free money that significantly increases your retirement savings.",
            },
            {
              heading: "Investment Returns",
              rows: [
                ["Defined benefit", "Employer bears investment risk"],
                ["Defined contribution", "Employee bears investment risk"],
                ["Impact", "Returns affect account value and income"],
              ],
              note: "For defined contribution plans, investment returns significantly impact your final pension value. Choose an appropriate asset allocation based on your age and risk tolerance.",
            },
          ].map(({ heading, rows, note }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <table className="styled-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td className="dark:text-slate-100">{item}</td>
                      <td className="text-right dark:text-slate-100">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">{note}</p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── STRATEGY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Pension Maximization Strategies
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different strategies can help maximize your pension benefits. Choose approaches that align with your career plans and retirement goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Maximize employer match",
                body: "Always contribute enough to receive the full employer match. This is essentially free money that provides an immediate 100% return on your contribution.",
              },
              {
                n: "2",
                title: "Work until full vesting",
                body: "Ensure you work long enough to become fully vested in your pension benefits. Leaving before vesting can mean losing significant employer contributions.",
              },
              {
                n: "3",
                title: "Delay retirement",
                body: "Working longer increases your years of service and final average salary. This can significantly increase your defined benefit pension or allow more time for defined contribution growth.",
              },
              {
                n: "4",
                title: "Optimize asset allocation",
                body: "Choose an appropriate mix of investments based on your age and risk tolerance. Younger workers can be more aggressive, while those near retirement should be more conservative.",
              },
              {
                n: "5",
                title: "Consider pension options",
                body: "At retirement, you may have options like lump-sum payouts vs. annuities. Evaluate each option carefully based on your health, family situation, and other retirement income.",
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
            Practical Tips for Pension Planning
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Start early</strong> — longer service increases benefits</>],
              [<><strong>Know your plan</strong> — understand your pension details</>],
              [<><strong>Track vesting</strong> — monitor your vesting progress</>],
              [<><strong>Maximize contributions</strong> — contribute as much as possible</>],
              [<><strong>Review regularly</strong> — check your pension statements</>],
              [<><strong>Plan retirement age</strong> — consider impact on benefits</>],
              [<><strong>Diversify savings</strong> — do not rely solely on pension</>],
              [<><strong>Use the calculator</strong> — model different scenarios regularly</>],
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
                q: "What is the difference between defined benefit and defined contribution?",
                a: "Defined benefit plans guarantee a specific pension amount based on salary and years of service. Defined contribution plans specify contribution amounts but the final benefit depends on investment performance and contributions.",
              },
              {
                q: "How is my pension calculated?",
                a: "For defined benefit plans, your pension is typically calculated as a percentage of your final average salary multiplied by years of service. For defined contribution plans, your pension is based on your account value at retirement.",
              },
              {
                q: "What is vesting?",
                a: "Vesting is the process of earning the right to employer contributions. You typically become fully vested after a certain number of years of service. Leaving before vesting may mean forfeiting some employer contributions.",
              },
              {
                q: "Should I take a lump sum or annuity?",
                a: "This depends on your situation. A lump sum gives you control but requires investment management. An annuity provides guaranteed income but may not keep pace with inflation. Consider your health, other income, and risk tolerance.",
              },
              {
                q: "How much will my pension be worth?",
                a: "Use the calculator to estimate your pension based on your salary, years of service, and contribution rates. Contact your HR department for specific details about your pension plan and benefits.",
              },
              {
                q: "Can I collect my pension and Social Security?",
                a: "Yes, you can typically collect both your pension and Social Security. However, some pensions may reduce benefits if you also receive Social Security, depending on the plan rules and your work history.",
              },
              {
                q: "What happens to my pension if I change jobs?",
                a: "You may leave your pension with your former employer, roll it over to a new employer&apos;s plan, or roll it into an IRA. Defined benefit pensions typically provide a deferred benefit at retirement age.",
              },
              {
                q: "Is my pension adjusted for inflation?",
                a: "Some pensions include cost-of-living adjustments (COLA) to keep pace with inflation. Others do not. Check your specific plan details to understand whether your pension will be adjusted for inflation.",
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
            The Pension Calculator helps you understand your projected retirement income from your pension plan. Understanding your pension benefits is essential for comprehensive retirement planning and ensuring financial security in your later years.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that pensions are just one part of retirement income. Combine your pension with Social Security, personal savings, and other investments to create a diversified retirement income strategy. Do not rely solely on your pension for retirement security.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the calculator regularly to track your pension growth, model different retirement scenarios, and adjust your retirement planning as needed. A well-planned pension strategy can provide a solid foundation for a comfortable retirement.
          </p>
          <div className="pull-quote mt-8">
            &quot;Retirement is not the end of the road. It is the beginning of the open highway.&quot;
          </div>
        </section>

      </div>
    </article>
  );
}
