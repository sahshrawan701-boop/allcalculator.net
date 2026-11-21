import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function EmployeeCostCalculatorArticle() {
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
          <span className="meta-tag">Business · HR & Payroll</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Employee Cost Calculator: Calculate Total Cost of Employment
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for business owners and HR professionals
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You offer an employee a $60,000 annual salary. But the true cost is significantly higher. With payroll taxes (7.65% FICA), workers' compensation insurance ($1,200 annually), health insurance ($6,000), 401(k) match ($3,000), and other benefits, the total cost is approximately $75,000 — 25% above the base salary. Understanding the full cost of employment is essential for accurate budgeting and hiring decisions.
          </p>
          <p className="mb-5">
            Employee cost extends far beyond base salary. It includes payroll taxes, benefits, insurance, retirement contributions, paid time off, and overhead. The total cost of employment typically ranges from 1.25 to 1.4 times the base salary.
          </p>
          <p className="mb-5">
            But employee costs vary by location, industry, and benefits package. Understanding the components of employee cost helps you budget accurately, make competitive offers, and optimize your compensation strategy.
          </p>
          <p>
            The employee cost calculator above helps you calculate the total cost of employment, understand cost components, and plan your hiring budget effectively.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Employee Cost Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Total employee cost is calculated by adding base salary to all mandatory and voluntary employer contributions. These include payroll taxes, benefits, insurance, and overhead costs.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Total Cost Formula:
          </p>
          <div className="formula-block">
            <pre>Total Cost = Base Salary + Payroll Taxes + Benefits + Insurance + Retirement + Overhead</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here's a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Base Salary", "$60,000"],
              ["FICA (7.65%)", "$4,590"],
              ["Workers' Comp", "$1,200"],
              ["Health Insurance", "$6,000"],
              ["401(k) Match (5%)", "$3,000"],
              ["PTO Value", "$2,300"],
              ["Overhead", "$1,500"],
              ["Total Cost", "$78,590"],
              ["Cost Multiplier", "1.31x salary"],
            ].map(([item, calc]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {calc}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            In this example, the total cost is 31% above base salary. This is typical for comprehensive benefits packages. Understanding the true cost helps you budget accurately and make informed hiring decisions.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── COST COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Employee Cost Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Employee costs consist of multiple components beyond salary. Understanding each component helps you budget accurately and design competitive compensation packages.
          </p>

          {[
            {
              heading: "Payroll Taxes",
              rows: [
                ["Includes", "Social Security (6.2%), Medicare (1.45%)"],
                ["Typical Cost", "7.65% of wages"],
                ["Mandatory", "Yes, federal requirement"],
              ],
              note: "FICA taxes are mandatory employer contributions. Social Security is 6.2% on wages up to the annual wage base limit ($160,200 for 2023). Medicare is 1.45% on all wages with no limit.",
            },
            {
              heading: "Benefits",
              rows: [
                ["Includes", "Health, dental, vision insurance"],
                ["Typical Cost", "10-20% of salary"],
                ["Optional", "Varies by employer"],
              ],
              note: "Health insurance is typically the largest benefit cost. Employer contribution averages 70-80% of premiums for employee coverage. Dental and vision add additional costs but improve recruitment and retention.",
            },
            {
              heading: "Retirement",
              rows: [
                ["Includes", "401(k) match, pension contributions"],
                ["Typical Cost", "3-6% of salary"],
                ["Optional", "Varies by employer"],
              ],
              note: "401(k) matching is common, typically 3-6% of salary. Some employers offer pension plans. Retirement benefits are valuable for attracting experienced talent and improving retention.",
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

        {/* ── COST MULTIPLIERS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Employee Cost Multipliers by Benefits Level
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The cost multiplier indicates how much total cost exceeds base salary. Multipliers vary by benefits package and industry standards.
          </p>

          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Benefits Level</th>
                <th className="dark:text-slate-100">Cost Multiplier</th>
                <th className="dark:text-slate-100">Typical Components</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Minimal", "1.15-1.20x", "Payroll taxes only"],
                ["Basic", "1.20-1.30x", "Taxes + basic insurance"],
                ["Standard", "1.25-1.35x", "Taxes + health + retirement"],
                ["Comprehensive", "1.30-1.40x", "Full benefits package"],
                ["Premium", "1.35-1.50x", "Generous benefits + perks"],
              ].map(([level, multiplier, components]) => (
                <tr key={level}>
                  <td className="dark:text-slate-100">{level}</td>
                  <td className="dark:text-slate-100">{multiplier}</td>
                  <td className="dark:text-slate-100">{components}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Most businesses fall in the 1.25-1.35x range for standard benefits. Premium packages for senior roles or competitive markets may reach 1.4-1.5x. Use the appropriate multiplier for your benefits level when budgeting.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── BUDGETING FOR HIRING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Budgeting for Employee Hiring
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Accurate hiring budgets require calculating total cost, not just salary. Here's how to budget effectively for new hires.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calculate total cost first",
                body: "Never budget based on salary alone. Calculate total cost including taxes, benefits, and overhead. Use a multiplier of 1.25-1.35x for standard benefits. This prevents budget shortfalls.",
              },
              {
                n: "2",
                title: "Include recruitment costs",
                body: "Recruiting involves job postings, recruiter fees, and interview time. These costs add up quickly. Include recruitment expenses in your hiring budget, especially for senior roles.",
              },
              {
                n: "3",
                title: "Plan for onboarding costs",
                body: "New employees require training, equipment, and onboarding time. Budget for laptops, software licenses, training materials, and the time cost of training existing staff.",
              },
              {
                n: "4",
                title: "Consider ramp-up period",
                body: "New employees aren't fully productive immediately. Budget for 3-6 months of reduced productivity during ramp-up. Factor this into ROI calculations for the hire.",
              },
              {
                n: "5",
                title: "Account for location differences",
                body: "Employee costs vary by location due to state taxes, insurance costs, and local market rates. Research location-specific costs when hiring in new markets or remote locations.",
              },
              {
                n: "6",
                title: "Review annually",
                body: "Employee costs change annually due to salary increases, benefit cost inflation, and tax changes. Review and update your cost calculations annually to maintain accurate budgets.",
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
            Common Employee Cost Mistakes
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Underestimating employee costs leads to budget shortfalls and financial strain. Here's what to avoid.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Budgeting only for salary",
                body: "Budgeting based on salary alone underestimates true cost by 25-40%. Always calculate total cost including taxes, benefits, and overhead. Use the calculator above for accurate calculations.",
              },
              {
                n: "2",
                title: "Ignoring payroll taxes",
                body: "FICA taxes are mandatory and significant. Forgetting the 7.65% employer contribution creates budget shortfalls. Include all mandatory payroll taxes in cost calculations.",
              },
              {
                n: "3",
                title: "Not tracking benefit costs",
                body: "Benefit costs increase annually due to inflation. Not tracking these increases leads to budget creep. Monitor benefit costs annually and adjust budgets accordingly.",
              },
              {
                n: "4",
                title: "Forgetting overtime costs",
                body: "Overtime is typically 1.5x regular rate. For hourly employees, overtime can significantly increase costs. Track overtime separately and budget for potential overtime needs.",
              },
              {
                n: "5",
                title: "Ignoring PTO costs",
                body: "Paid time off is a real cost. Calculate PTO value based on daily rate and days off. Include vacation, sick leave, and holidays in total cost calculations.",
              },
              {
                n: "6",
                title: "Not accounting for overhead",
                body: "Overhead includes equipment, software, office space, and administrative support. These costs add 10-20% to employee cost. Include overhead in total cost calculations.",
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
            Practical Tips for Employee Cost Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — calculate total cost accurately</>],
              [<><strong>Use cost multipliers</strong> — 1.25-1.35x for standard benefits</>],
              [<><strong>Track all costs</strong> — taxes, benefits, insurance, overhead</>],
              [<><strong>Budget for recruitment</strong> — include hiring costs</>],
              [<><strong>Plan for onboarding</strong> — equipment and training</>],
              [<><strong>Consider ramp-up</strong> — reduced productivity initially</>],
              [<><strong>Review annually</strong> — update for inflation and changes</>],
              [<><strong>Research location costs</strong> — vary by state and market</>],
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
                q: "How do I calculate total employee cost?",
                a: "Total Cost = Base Salary + Payroll Taxes + Benefits + Insurance + Retirement + Overhead. Include all mandatory and voluntary employer contributions. The calculator above automates this calculation.",
              },
              {
                q: "What is the typical employee cost multiplier?",
                a: "Typical cost multipliers are 1.25-1.35x base salary for standard benefits. Minimal benefits (taxes only) are 1.15-1.20x. Comprehensive benefits reach 1.30-1.40x. Premium packages may be 1.35-1.50x.",
              },
              {
                q: "What are FICA taxes?",
                a: "FICA includes Social Security (6.2%) and Medicare (1.45%) for a total of 7.65%. Social Security applies to wages up to the annual wage base limit ($160,200 for 2023). Medicare applies to all wages with no limit.",
              },
              {
                q: "What employee benefits should I include?",
                a: "Include health insurance, dental, vision, life insurance, disability insurance, retirement contributions (401(k) match), paid time off, and any other benefits you offer. Comprehensive benefits improve recruitment and retention.",
              },
              {
                q: "How do I calculate PTO cost?",
                a: "PTO Cost = (Annual Salary / Working Days) × PTO Days. For a $60,000 salary with 15 PTO days and 260 working days: ($60,000 / 260) × 15 = $3,461. Include vacation, sick leave, and holidays.",
              },
              {
                q: "What is workers' compensation insurance?",
                a: "Workers' comp is mandatory insurance covering work-related injuries and illnesses. Costs vary by industry and job classification, typically 0.5-3% of payroll. High-risk industries pay higher rates.",
              },
              {
                q: "How much should I budget for health insurance?",
                a: "Employer health insurance contributions average 70-80% of premiums. Total cost typically ranges 10-20% of salary. Costs vary by plan type, location, and employee age. Get quotes from multiple insurers.",
              },
              {
                q: "What is a typical 401(k) match?",
                a: "Typical 401(k) matches are 3-6% of salary, often with vesting schedules. Some employers match 50% up to 6% of employee contributions. Match amounts are tax-deductible and improve recruitment.",
              },
              {
                q: "How do employee costs vary by location?",
                a: "Costs vary by state taxes (some states have additional payroll taxes), insurance costs (higher in some states), and local market rates. Research location-specific costs when hiring in new markets.",
              },
              {
                q: "How often should I review employee costs?",
                a: "Review employee costs annually to account for salary increases, benefit cost inflation, tax changes, and new regulations. Annual reviews ensure budgets remain accurate and competitive.",
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
            Understanding the true cost of employment is essential for accurate budgeting, competitive compensation, and sustainable growth. Employee costs extend far beyond salary, and accurate calculation prevents financial surprises.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator at the top of this page helps you calculate total employee cost and understand cost components. But the real value comes from using this information to budget accurately, design competitive packages, and make informed hiring decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Whether you're hiring your first employee or scaling a large team, accurate cost calculation provides the foundation for sustainable growth. Budget comprehensively, compensate competitively, and build a thriving organization.
          </p>
          <div className="pull-quote mt-8">
            The true cost of employment is more than salary. Calculate accurately, budget comprehensively, and hire confidently.
          </div>
        </section>

      </div>
    </article>
  );
}
