import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CostOfLivingArticle() {
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

        strong { font-weight: 600; }
        em { font-style: italic; }
      `}</style>

      <div className="article-root">
        {/* ── HEADER ── */}
        <header className="mb-12 text-center">
          <span className="meta-tag">Personal Finance · Relocation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Cost of Living Calculator: Compare Cities Before You Move
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to analyzing salary equivalence and relocation expenses
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            A $100,000 salary sounds incredible, but its actual value is entirely dependent on where you live. Earning six figures in a small midwestern town affords a vastly different lifestyle than earning the exact same amount in San Francisco or Manhattan.
          </p>
          <p className="mb-5">
            When considering a job offer in a new city or contemplating a cross-country move for a change of scenery, comparing the raw salary numbers is a dangerous trap. You must compare purchasing power. Rent, state income taxes, gasoline, groceries, and healthcare costs fluctuate wildly across different zip codes.
          </p>
          <p className="mb-5">
            A Cost of Living Calculator bridges this gap. It analyzes massive datasets of regional economic indexes to translate your current salary into an equivalent salary in your destination city. It answers the crucial question: "How much money do I need to make in City B to maintain the exact same standard of living I have in City A?"
          </p>
          <p>
            Whether you are negotiating a remote work adjustment, accepting a promotion requiring relocation, or simply daydreaming about moving to the beach, using a Cost of Living Calculator ensures you won't accidentally take a massive pay cut in disguise.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Cost of Living Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator relies on a Cost of Living Index (COLI), which is a statistical measure that compares the average cost of basic necessities across different geographical areas against a national baseline.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To generate an accurate salary comparison, the calculator requires three key inputs:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              ["Current Salary", "Your total gross annual income before taxes."],
              ["Current City", "The metropolitan area where you currently reside."],
              ["Destination City", "The metropolitan area where you are considering moving."]
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">◆</span>
                <span><strong>{label}</strong> – {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator compares the index score of your current city to the destination city, adjusts your salary proportionally, and outputs the precise dollar amount required to maintain your current lifestyle. It also provides a percentage difference, highlighting whether the new city is generally more or less expensive.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Salary Equivalence Formula Explained
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The math behind cost of living comparisons uses the index ratio between the two cities. The national average index is always set at exactly 100. If a city has an index of 150, it is 50% more expensive than the national average. If it has an index of 85, it is 15% cheaper.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The Equivalent Salary Formula:
          </p>
          <div className="formula-block">
            <pre>Equivalent Salary = Current Salary × (Destination Index / Current Index)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            What each variable means:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Current Salary", "The baseline income you are using for the comparison (e.g., $80,000)."],
              ["Current Index", "The overall cost of living score for your current city."],
              ["Destination Index", "The overall cost of living score for the city you are moving to."],
              ["Equivalent Salary", "The final adjusted income required to afford the same amount of goods and housing in the new city."]
            ].map(([sym, def]) => (
              <li key={sym} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-40 shrink-0">{sym}</span>
                <span>= {def}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            <strong>The Housing Weight Factor:</strong> The overall index is a weighted average of several categories. Housing is almost always the largest factor, often comprising 30% to 40% of the overall index score, followed by groceries, utilities, transportation, and healthcare.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── STEP BY STEP ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Step-by-Step Guide: How to Use the Calculator
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Enter your gross salary",
                content: "Input your total annual income before taxes. If you have a spouse and plan to combine incomes, enter your total household gross income."
              },
              {
                step: "2",
                title: "Select your current location",
                content: "Choose the city or metropolitan area where you currently live. If your exact suburb isn't listed, pick the closest major metropolitan anchor city."
              },
              {
                step: "3",
                title: "Select your destination",
                content: "Choose the city where the new job is located or where you are planning to relocate."
              },
              {
                step: "4",
                title: "Analyze the Equivalent Salary",
                content: "Look at the primary output. If the number is higher than your current salary, the new city is more expensive. If it is lower, the new city is cheaper."
              },
              {
                step: "5",
                title: "Review the Category Breakdown",
                content: "Examine the specific category differences. You might find that while groceries are cheaper in the new city, housing costs are significantly higher."
              }
            ].map(({ step, title, content }) => (
              <div key={step} className="numbered-section">
                <span className="num">{step}</span>
                <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                    Step {step}: {title}
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WORKED EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Relocation Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let's look at a few drastic relocation scenarios to illustrate how heavily geography impacts your purchasing power.
          </p>

          {[
            {
              heading: "Scenario 1: The Tech Relocation (Austin to San Francisco)",
              rows: [
                ["Current Salary", "$100,000"],
                ["Current City", "Austin, TX (Index: ~119)"],
                ["Destination City", "San Francisco, CA (Index: ~269)"],
                ["Cost of Living Difference", "+126% Higher"],
                ["Equivalent Salary Needed", "$226,050"],
              ],
              note: "A developer earning $100k in Austin who accepts a $150k offer in San Francisco is actually taking a massive pay cut in terms of purchasing power due to the Bay Area's exorbitant housing market.",
            },
            {
              heading: "Scenario 2: The Midwest Move (Chicago to Columbus)",
              rows: [
                ["Current Salary", "$85,000"],
                ["Current City", "Chicago, IL (Index: ~120)"],
                ["Destination City", "Columbus, OH (Index: ~91)"],
                ["Cost of Living Difference", "-24% Lower"],
                ["Equivalent Salary Needed", "$64,450"],
              ],
              note: "Moving away from a major coastal or tier-1 city to a mid-sized midwestern city drastically increases purchasing power. Even if this user took a $10,000 pay cut to move to Columbus, they would still feel wealthier.",
            },
            {
              heading: "Scenario 3: The Remote Worker Arbitrage (NYC to Tampa)",
              rows: [
                ["Current Salary", "$120,000 (Keeps NY salary)"],
                ["Current City", "New York, NY (Index: ~230)"],
                ["Destination City", "Tampa, FL (Index: ~105)"],
                ["Cost of Living Difference", "-54% Lower"],
                ["Equivalent Salary Needed", "$54,780"],
              ],
              note: "This is geographical arbitrage. By keeping a high-tier salary but moving to a low-cost city (with no state income tax), this remote worker's disposable income skyrockets.",
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

        {/* ── RESULT INTERPRETATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Interpreting Your Results
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The raw equivalent salary number is just the starting point. To make a smart financial decision, you must evaluate the results in the context of your specific career and lifestyle:
          </p>
          <ul className="space-y-4 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Negotiating Leverage:</strong> If the calculator says you need $130k in the new city to equal your current $90k lifestyle, but the company is only offering $110k, you use the calculator's data to negotiate a higher base salary or a substantial signing bonus.
            </li>
            <li>
              <strong>Identifying The "Housing Trap":</strong> Sometimes the overall index is only slightly higher, but the Housing index is 200% higher. If you are planning to buy a house, the move might be much harder than the overall equivalent salary suggests.
            </li>
            <li>
              <strong>The Taxation Variable:</strong> Cost of living indexes usually track the cost of goods and housing, but they do not always perfectly account for State Income Tax differences. Moving from zero-tax Texas to high-tax California carries a tax penalty on top of the higher cost of goods.
            </li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── REFERENCE TABLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Average Cost of Living Index by Major US City
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            This table provides a rough baseline comparison of major US metropolitan areas against the national average (which is strictly fixed at 100).
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Metropolitan Area</th>
                <th className="dark:text-slate-100">Overall Index</th>
                <th className="dark:text-slate-100">Housing Index</th>
                <th className="dark:text-slate-100">Compared to National Avg</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Manhattan, NY", "225+", "500+", "125% more expensive"],
                ["San Francisco, CA", "260+", "600+", "160% more expensive"],
                ["Seattle, WA", "150", "215", "50% more expensive"],
                ["Chicago, IL", "120", "155", "20% more expensive"],
                ["Atlanta, GA", "105", "110", "5% more expensive"],
                ["Charlotte, NC", "98", "95", "2% cheaper"],
                ["Houston, TX", "95", "90", "5% cheaper"],
                ["Omaha, NE", "89", "80", "11% cheaper"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j} className="dark:text-slate-100">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">Note: Indexes fluctuate annually based on inflation and housing market dynamics. Housing is typically the primary driver of high index scores.</p>
        </section>

        <hr className="rule-divider" />

        {/* ── REAL WORLD APPLICATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Applications for Relocation Data
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Cost of living data is utilized in several major life and corporate decisions:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Remote Work Geographic Arbitrage:</strong> Employees intentionally move to low-cost areas while retaining high-paying jobs headquartered in expensive cities, massively accelerating their ability to save and invest.</li>
            <li><strong>Corporate HR Salary Bands:</strong> Human Resource departments use these exact formulas to create tier-based salary bands, ensuring a software engineer in Iowa is paid less than an identically skilled engineer in Silicon Valley to maintain profit margins.</li>
            <li><strong>Retirement Planning:</strong> Retirees heavily rely on this data to determine where their fixed 401(k) withdrawals and Social Security checks will stretch the furthest, often driving migration to states like Florida, Texas, and Nevada.</li>
            <li><strong>College Selection:</strong> Students comparing universities must factor in the cost of off-campus housing and food in the college's city, as it drastically impacts total student loan debt.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON MISTAKES & ADVANTAGES & LIMITATIONS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Mistakes to Avoid When Relocating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: "Accepting a Flat Raise", desc: "Taking a $15k raise to move to a city that is 40% more expensive means you actually accepted a severe pay cut. Always run the equivalence math first." },
              { title: "Ignoring State Income Taxes", desc: "Moving from a state with no income tax (like Texas) to a state with high income tax (like California) immediately reduces your take-home pay before you even pay rent." },
              { title: "Forgetting Transportation Changes", desc: "Moving to a sprawling city might require you to buy a car, pay for insurance, and buy gas, entirely wiping out savings you gained from cheaper rent." },
              { title: "Assuming Suburbs are Cheap", desc: "While the anchor city might have a high index, specific commuter suburbs might be significantly cheaper—or paradoxically, much more expensive." },
              { title: "Overlooking Property Taxes", desc: "A state might have no income tax, but they make up for it with brutal property taxes. If you plan to buy a home, factor this into your monthly payment." },
              { title: "Ignoring Moving Costs", desc: "Hiring cross-country movers can cost $5,000 to $10,000. If your new company isn't providing a relocation package, that is a massive upfront expense." },
              { title: "Relying on Outdated Data", desc: "The housing market moves fast. A city that was 'cheap' five years ago might have experienced massive rent spikes recently. Ensure your calculator uses recent data." },
              { title: "Not Adjusting Your Lifestyle", desc: "Trying to maintain a 3-bedroom house lifestyle in Manhattan on a mid-level salary is impossible. You must adjust your expectations based on the city's norms." }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 mt-12 leading-snug">
            Advantages of Cost of Living Analysis
          </h2>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100 mb-10">
            <li>Prevents you from blindly accepting a job offer that will bankrupt you.</li>
            <li>Provides hard, objective data to use in salary negotiations with HR.</li>
            <li>Helps remote workers identify the most financially optimal places to live.</li>
            <li>Allows you to set realistic expectations for housing and budgeting before you arrive.</li>
            <li>Helps couples align on financial realities before committing to a stressful cross-country move.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Limitations to Keep in Mind
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-800 dark:text-slate-100">
            <li><strong>Averages Are Flawed:</strong> The index relies on the "average" cost of a home or apartment. If you require luxury housing or live a frugal lifestyle, your personal inflation rate will differ from the index.</li>
            <li><strong>Neighborhood Variances:</strong> The calculator treats an entire metropolitan area as one monolith. In reality, moving one zip code over can drastically change housing and grocery costs.</li>
            <li><strong>Quality of Life Isn't Measured:</strong> A city might be incredibly cheap, but it might lack good schools, cultural amenities, or have high crime rates. The calculator only measures dollars, not happiness.</li>
          </ul>
        </section>

        <hr className="rule-divider" />

        {/* ── FAQS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is a Cost of Living Index (COLI)?",
                a: "A COLI is a theoretical number used to compare expenses between locations. The national average is set at 100. A score of 120 means the city is 20% more expensive than average; a score of 85 means it is 15% cheaper."
              },
              {
                q: "What factors are included in the cost of living calculation?",
                a: "Most indexes weigh six primary categories: Housing (the largest factor), Groceries, Utilities, Transportation, Healthcare, and Miscellaneous Goods/Services."
              },
              {
                q: "Do cost of living calculators include taxes?",
                a: "Many calculators only track the cost of goods and housing, and do not perfectly account for complex state, local, and property tax burdens. Always research the specific tax laws of your destination state separately."
              },
              {
                q: "Is it always a bad idea to move to an expensive city?",
                a: "No. Expensive cities like New York and San Francisco often offer vastly superior career networking, higher career ceilings, and cultural amenities. Sometimes taking a temporary hit to your purchasing power is worth the long-term career growth."
              },
              {
                q: "How do I negotiate salary for a relocation?",
                a: "Use the equivalent salary generated by the calculator as your baseline. Say to HR: 'Based on cost of living data, $100k here equals $130k there. I need an offer closer to $135k to ensure I am advancing my career, not taking a pay cut.'"
              },
              {
                q: "What is geographical arbitrage?",
                a: "It is the financial strategy of earning money in a strong, high-paying economy (like a remote job based in San Francisco) while spending that money in a weak, low-cost economy (like a suburb in Ohio or a foreign country)."
              },
              {
                q: "Will my company lower my salary if I move to a cheaper city?",
                a: "Many tech companies and large corporations have implemented tiered salary bands. If you move from a Tier 1 city (expensive) to a Tier 3 city (cheap), they may adjust your salary downward to reflect the local market rate."
              },
              {
                q: "Why is housing weighted so heavily?",
                a: "Because for the vast majority of Americans, rent or a mortgage payment consumes 30% to 50% of their total monthly take-home pay. It is the single largest expense, making it the primary driver of cost of living differences."
              },
              {
                q: "How much should I ask for in a relocation package?",
                a: "A standard corporate relocation package ranges from $2,000 to $10,000 for renters, and can exceed $50,000 for homeowners (covering closing costs and realtor fees). You should ask them to cover full pack-and-move services, travel, and temporary housing."
              },
              {
                q: "What are the hidden costs of moving?",
                a: "Hidden costs include breaking a current lease, utility setup fees, buying new furniture to fit a different floor plan, restocking a pantry from scratch, and vehicle registration fees in a new state."
              },
              {
                q: "Should I buy a house immediately after relocating?",
                a: "Financial experts strongly advise renting for at least 6 to 12 months when moving to a new city. You need time to learn the traffic patterns, school districts, and neighborhood vibes before committing to a 30-year mortgage."
              },
              {
                q: "Why are coastal cities so much more expensive?",
                a: "Coastal cities have high demand (due to jobs, weather, and culture) but heavily constrained geography (they are bordered by oceans or mountains) and strict zoning laws, severely limiting the construction of new housing."
              },
              {
                q: "Do I have to pay taxes in two states if I move mid-year?",
                a: "Yes. You will likely have to file a part-year resident tax return for your old state and a part-year resident tax return for your new state, splitting your income based on the exact date you established residency."
              },
              {
                q: "How accurate are cost of living calculators?",
                a: "They are excellent for macro-level estimates, but they struggle with micro-level nuances. For example, if you cook 100% of your meals at home, a city's exorbitant restaurant prices won't affect you, making the city feel cheaper than the index suggests."
              },
              {
                q: "Which state has the lowest cost of living?",
                a: "Historically, states in the Deep South and the Midwest (such as Mississippi, Arkansas, Oklahoma, and Kansas) consistently rank at the bottom of the cost of living index, primarily due to extremely cheap housing."
              }
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── RELATED CALCULATORS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Related Financial Calculators
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            If you are planning a major life move, use these tools to ensure your budget is bulletproof.
          </p>
          <div className="space-y-4">
            {[
              {
                name: "Budget Calculator",
                desc: "Once you calculate your equivalent salary, build a hypothetical 50/30/20 budget for your new city to see if the math actually works."
              },
              {
                name: "Mortgage Calculator",
                desc: "If you plan to buy a home in your new city, calculate exactly what your monthly payment will be based on local interest rates and property taxes."
              },
              {
                name: "Emergency Fund Calculator",
                desc: "Determine how much cash you need to save before moving to ensure you can survive 3 to 6 months if the new job falls through."
              },
              {
                name: "Expense Tracker Calculator",
                desc: "Keep a strict log of all your moving expenses—from U-Haul rentals to utility deposits—so you don't overspend during the transition."
              },
              {
                name: "Debt-to-Income Calculator",
                desc: "Ensure that moving to a more expensive city won't push your debt-to-income ratio too high, which could prevent you from renting an apartment."
              }
            ].map((calc, i) => (
              <div key={i} className="bg-stone-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700 rounded-sm">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">{calc.name}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{calc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CONCLUSION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            A salary is just a number; purchasing power is what dictates your actual quality of life. Moving to a new city without consulting cost of living data is one of the easiest ways to accidentally sabotage your financial stability.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            By using a Cost of Living Calculator, you arm yourself with the objective data needed to negotiate a fair relocation package, or to walk away from an offer that is secretly a pay cut disguised as a promotion.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Whether you are chasing a better career in a sprawling metropolis or seeking a quieter, wealthier life through geographical arbitrage in the Midwest, understanding the economic realities of your destination ensures your move is a step forward, not backward.
          </p>
        </section>

      </div>
    </article>
  );
}
