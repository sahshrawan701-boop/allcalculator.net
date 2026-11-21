import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GradeArticle() {
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
          <span className="meta-tag">Education · Grading & Assessment</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Grade Calculator: Calculate Final Course Grades
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating course grades and weighted averages
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Understanding how your final grade is calculated can be the difference
            between achieving your academic goals and falling short. Many students
            are surprised at the end of the semester when their final grade doesn't
            match their expectations, often because they didn't understand how
            different assignments, exams, and participation were weighted.
          </p>
          <p className="mb-5">
            A Grade Calculator eliminates the guesswork by allowing you to input
            all your graded components with their respective weights to see exactly
            where you stand and what you need to achieve on remaining assignments
            to reach your target grade.
          </p>
          <p>
            Whether you're calculating your current grade, planning what you need
            on the final exam, or verifying your instructor's calculations, this
            tool provides clarity and helps you make informed decisions about your
            academic strategy.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Grade Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator multiplies each component's grade by its weight percentage,
            sums these weighted values, and divides by 100 to get your overall grade.
            This weighted average ensures that more important components have
            proportionally more impact on your final grade.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Add Grade Components",
                "Enter each assignment, exam, or category with its grade and weight percentage.",
              ],
              [
                "Set Weights",
                "Assign the percentage each component counts toward your final grade.",
              ],
              [
                "Calculate Current Grade",
                "See your current standing based on completed work.",
              ],
              [
                "Plan for Remaining Work",
                "Determine what scores you need on remaining assignments to reach your goal.",
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
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Grade Calculation Formula
          </h2>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Weighted Grade Formula:
          </p>
          <div className="formula-block">
            <pre>{`Final Grade = Σ (Grade × Weight) / 100

Example:
Midterm: 85% × 30% = 25.5
Homework: 92% × 20% = 18.4
Final Exam: 88% × 50% = 44.0

Total = 25.5 + 18.4 + 44.0 = 87.9%`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            This formula ensures that components with higher weights have more
            influence on your final grade, reflecting their importance in the
            course structure.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── COMMON WEIGHTING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Common Grade Weighting Schemes
          </h2>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Component</th>
                <th className="dark:text-slate-100">Typical Weight</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Final Exam", "30-50%", "Often the largest single component"],
                ["Midterm Exam", "20-30%", "Significant but less than final"],
                ["Homework/Assignments", "15-25%", "Regular work throughout semester"],
                ["Quizzes", "10-20%", "Frequent assessments"],
                ["Participation/Attendance", "5-15%", "Engagement factor"],
                ["Projects/Papers", "15-25%", "Major assignments"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="dark:text-slate-100">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
                q: "How do I calculate what I need on my final exam?",
                a: "Use the grade calculator to input your current grades and weights, then set the final exam weight. The calculator will show you what score you need to achieve your target grade.",
              },
              {
                q: "What if my weights don't add up to 100%?",
                a: "The calculator will normalize weights automatically. However, it's best to verify with your instructor that you have the correct weighting scheme.",
              },
              {
                q: "Do dropped grades affect my calculation?",
                a: "If your instructor drops the lowest grade, exclude that component from your calculation. Only include grades that count toward your final score.",
              },
              {
                q: "How do extra credit assignments work?",
                a: "Extra credit typically adds points to your final grade. Add it as a component with its weight, or add the percentage directly to your calculated total.",
              },
              {
                q: "Can I calculate my grade if some components aren't graded yet?",
                a: "Yes, leave ungraded components empty or set them to 0 to see your current standing. You can then adjust hypothetical scores to see potential outcomes.",
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
            Understanding how your grades are calculated empowers you to take
            control of your academic performance. Regular grade calculation helps
            you identify areas needing improvement and plan your study strategy
            effectively.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Grade Calculator throughout the semester to track your progress,
            plan for upcoming assessments, and ensure you're on track to achieve
            your academic goals.
          </p>
        </section>
      </div>
    </article>
  );
}
