import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function AgeArticle() {
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
          <span className="meta-tag">Lifestyle · Time & Age</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Age Calculator: Find Your Exact Age in Years, Months & Days
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating and understanding your age
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Knowing your exact age is more than just a fun fact—it's essential for
            everything from filling out official documents to planning milestone
            celebrations. While most people know their age in years, calculating
            your precise age down to months and days can be surprisingly complex,
            especially when accounting for leap years and varying month lengths.
          </p>
          <p className="mb-5">
            An Age Calculator simplifies this process by instantly computing your
            exact age based on your date of birth. Whether you need to know your
            age for a job application, insurance policy, or simply out of curiosity,
            this tool provides accurate results in seconds, eliminating the need
            for manual calculations.
          </p>
          <p>
            Beyond the basic calculation, understanding how age is calculated can
            help you appreciate the passage of time and plan better for life's
            important milestones. From tracking how many days until your next
            birthday to calculating your age in different time units, this guide
            covers everything you need to know.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Age Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses your date of birth and a target date (typically today)
            to compute the exact time difference between these two points. It accounts
            for the varying lengths of months and the occurrence of leap years to
            ensure precision.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To calculate your age, you need to provide:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Date of Birth",
                "Your complete birth date including day, month, and year.",
              ],
              [
                "Target Date",
                "The date you want to calculate your age as of (defaults to today's date).",
              ],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-500 mt-1">
                  ◆
                </span>
                <span>
                  <strong>{label}</strong> – {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mt-5">
            The calculator then computes the difference and presents it in a
            user-friendly format: years, months, and days. It also provides additional
            information like total days lived and days until your next birthday.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Age Calculation Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            While the calculator handles the complex math automatically, understanding
            the underlying formula can help you appreciate the calculation process.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Age Formula:
          </p>
          <div className="formula-block">
            <pre>{`Age = Current Date - Date of Birth

Years = Current Year - Birth Year
Months = Current Month - Birth Month
Days = Current Day - Birth Day`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            However, this basic formula requires adjustments when the current day is
            less than the birth day or when the current month is less than the birth
            month. The calculator automatically handles these adjustments by borrowing
            from the previous month or year as needed.
          </p>
          <div className="aside-callout">
            <strong>Leap Year Consideration:</strong> The calculator accounts for
            leap years (years divisible by 4, except century years not divisible by
            400) when calculating total days lived, ensuring maximum accuracy.
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
                title: "Enter Your Date of Birth",
                content:
                  "Select your complete birth date from the date picker. Ensure you have the correct day, month, and year.",
              },
              {
                step: "2",
                title: "Choose the Target Date",
                content:
                  "The calculator defaults to today's date, but you can select any past or future date to calculate your age as of that specific day.",
              },
              {
                step: "3",
                title: "Click Calculate",
                content:
                  "Press the calculate button to generate your exact age in years, months, and days.",
              },
              {
                step: "4",
                title: "Review the Results",
                content:
                  "The calculator displays your age breakdown, total days lived, and the number of days until your next birthday.",
              },
            ].map(({ step, title, content }) => (
              <div key={step} className="numbered-section">
                <span className="num">{step}</span>
                <div className="flex-1 bg-stone-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-sm">
                  <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm uppercase tracking-wide font-sans">
                    Step {step}: {title}
                  </p>
                  <p className="text-slate-800 dark:text-slate-100 text-sm mt-2">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WORKED EXAMPLES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Real-World Age Calculation Examples
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Let's look at a few examples to understand how age calculations work
            in different scenarios.
          </p>

          {[
            {
              heading: "Example 1: Standard Age Calculation",
              rows: [
                ["Date of Birth", "January 15, 1995"],
                ["Target Date", "June 28, 2026"],
                ["Calculated Age", "31 years, 5 months, 13 days"],
                ["Total Days Lived", "11,458 days"],
                ["Days to Next Birthday", "201 days"],
              ],
              note: "This example shows a standard age calculation with the target date being today. The person is 31 years old with 5 months and 13 days.",
            },
            {
              heading: "Example 2: Leap Year Birth",
              rows: [
                ["Date of Birth", "February 29, 2000"],
                ["Target Date", "June 28, 2026"],
                ["Calculated Age", "26 years, 3 months, 29 days"],
                ["Total Days Lived", "9,568 days"],
                ["Days to Next Birthday", "246 days"],
              ],
              note: "Born on a leap day, this person's birthday only occurs on actual leap years. The calculator handles this special case correctly.",
            },
            {
              heading: "Example 3: Age on a Past Date",
              rows: [
                ["Date of Birth", "March 10, 1990"],
                ["Target Date", "January 1, 2020"],
                ["Calculated Age", "29 years, 9 months, 22 days"],
                ["Total Days Lived", "10,892 days"],
                ["Note", "This calculates age as of a specific past date"],
              ],
              note: "This demonstrates how the calculator can determine your age as of any historical date, useful for documentation or legal purposes.",
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
              <p className="text-sm text-slate-800 dark:text-slate-400 mt-3 leading-relaxed italic">
                {note}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── USE CASES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Use Cases for Age Calculation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Age calculations are needed in various situations throughout life:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Legal Documentation:</strong> Many legal forms, applications,
              and government documents require your exact age in years, months, and days.
            </li>
            <li>
              <strong>Employment Verification:</strong> Job applications often require
              age verification to ensure compliance with labor laws and age restrictions.
            </li>
            <li>
              <strong>Insurance Policies:</strong> Insurance premiums and eligibility
              are frequently based on precise age calculations.
            </li>
            <li>
              <strong>Education Enrollment:</strong> Schools and universities use age
              to determine grade placement and eligibility for certain programs.
            </li>
            <li>
              <strong>Sports and Competitions:</strong> Age categories in sports,
              competitions, and academic contests are strictly enforced.
            </li>
            <li>
              <strong>Milestone Planning:</strong> Planning birthday celebrations,
              anniversaries, and other milestone events requires knowing exact ages.
            </li>
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
                q: "How accurate is the age calculator?",
                a: "The calculator is extremely accurate, accounting for leap years and the varying lengths of months. It provides exact calculations down to the day.",
              },
              {
                q: "Can I calculate my age as of a future date?",
                a: "Yes, you can select any future date as the target date to see how old you will be on that specific day.",
              },
              {
                q: "How are leap years handled in age calculation?",
                a: "The calculator automatically accounts for leap years when calculating total days lived, ensuring accurate results regardless of birth year.",
              },
              {
                q: "What if I was born on February 29th?",
                a: "The calculator handles leap day birthdays correctly. In non-leap years, your birthday is typically celebrated on February 28th or March 1st.",
              },
              {
                q: "Why do I need to know my age in months and days?",
                a: "Many official documents and applications require precise age breakdowns. It's also useful for tracking developmental milestones and planning celebrations.",
              },
              {
                q: "Can this calculator be used for pets or other purposes?",
                a: "Absolutely! You can use this calculator to determine the age of pets, anniversaries, project durations, or any other scenario where you need to calculate a time difference.",
              },
              {
                q: "What is the difference between chronological age and biological age?",
                a: "Chronological age is the actual time elapsed since birth (what this calculator measures). Biological age refers to how your body functions relative to your chronological age based on health markers.",
              },
              {
                q: "How do I calculate age in different time units?",
                a: "The calculator provides your age in years, months, and days. To convert to other units, you can use the total days figure: divide by 7 for weeks, by 365.25 for years, or by 8,760 for hours.",
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <h3>{faq.q}</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {faq.a}
                </p>
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
            Whether you need your exact age for official documentation, are planning
            a milestone celebration, or simply curious about how many days you've been
            alive, an Age Calculator provides quick, accurate results without the
            complexity of manual calculations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Understanding your age in precise terms helps you appreciate the passage
            of time and plan better for life's important moments. From tracking days
            until your next birthday to calculating age for legal purposes, this tool
            serves as a reliable companion for all age-related calculations.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the calculator above to discover your exact age today, and bookmark
            this page for future reference whenever you need precise age calculations.
          </p>
        </section>
      </div>
    </article>
  );
}
