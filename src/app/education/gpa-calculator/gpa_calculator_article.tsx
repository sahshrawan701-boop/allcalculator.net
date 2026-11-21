import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function GPAArticle() {
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
          <span className="meta-tag">Education · Academic Performance</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            GPA Calculator: Calculate Your Grade Point Average
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating and understanding your GPA
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Your Grade Point Average (GPA) is one of the most important metrics
            in academic life. It determines scholarship eligibility, graduate
            school admissions, job opportunities, and even your standing within
            your university. Understanding how to calculate your GPA accurately
            is essential for academic planning and goal setting.
          </p>
          <p className="mb-5">
            A GPA Calculator simplifies the process of converting letter grades
            into numerical values and weighting them by credit hours. Whether
            you're tracking your cumulative GPA, calculating semester performance,
            or planning future course loads, this tool provides instant, accurate
            results without manual calculations.
          </p>
          <p>
            Beyond simple calculation, understanding GPA scales, weighted vs.
            unweighted GPAs, and strategies for improvement can significantly impact
            your academic trajectory. This guide covers everything you need to know
            about GPA calculation and management.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the GPA Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator converts each letter grade to its numerical equivalent,
            multiplies by the course's credit hours, sums these values, and divides
            by total credit hours. This weighted average ensures that courses with
            more credits have proportionally more impact on your GPA.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Enter Course Name",
                "Add each course you want to include in the calculation.",
              ],
              [
                "Select Letter Grade",
                "Choose the letter grade you received for each course.",
              ],
              [
                "Enter Credit Hours",
                "Input the number of credit hours for each course.",
              ],
              [
                "View Calculated GPA",
                "See your semester and cumulative GPA instantly.",
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
            The calculator automatically handles the math, showing both semester
            GPA and cumulative GPA if you're tracking multiple terms.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The GPA Calculation Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Understanding the formula helps you appreciate how each course affects
            your overall GPA:
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic GPA Formula:
          </p>
          <div className="formula-block">
            <pre>{`GPA = Total Grade Points / Total Credit Hours

Where:
Grade Points = Letter Grade Value × Credit Hours

Example:
Course A: A (4.0) × 3 credits = 12 grade points
Course B: B (3.0) × 4 credits = 12 grade points
Course C: A (4.0) × 3 credits = 12 grade points

Total Grade Points = 36
Total Credit Hours = 10
GPA = 36 / 10 = 3.60`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            This formula applies to both semester and cumulative GPA calculations.
            For cumulative GPA, you sum all grade points and credit hours across
            all completed semesters.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── GRADE SCALE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Standard Grade Point Scale
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Most colleges use a 4.0 scale, though some use 5.0 scales for weighted
            courses. Here's the standard 4.0 scale:
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Letter Grade</th>
                <th className="dark:text-slate-100">Grade Points</th>
                <th className="dark:text-slate-100">Percentage Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["A", "4.0", "90-100%"],
                ["A-", "3.7", "87-89%"],
                ["B+", "3.3", "83-86%"],
                ["B", "3.0", "80-82%"],
                ["B-", "2.7", "77-79%"],
                ["C+", "2.3", "73-76%"],
                ["C", "2.0", "70-72%"],
                ["C-", "1.7", "67-69%"],
                ["D+", "1.3", "63-66%"],
                ["D", "1.0", "60-62%"],
                ["F", "0.0", "Below 60%"],
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
          <div className="aside-callout">
            <strong>Note:</strong> Some institutions use plus/minus grading
            differently, and some don't use plus/minus at all. Always check your
            school's specific grading scale.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── WEIGHTED VS UNWEIGHTED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Weighted vs. Unweighted GPA
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Understanding the difference between weighted and unweighted GPA is
            crucial for accurate calculation:
          </p>
          <ul className="space-y-3 text-slate-800 dark:text-slate-100 text-base">
            <li>
              <strong>Unweighted GPA:</strong> Uses a standard 4.0 scale where
              an A is always 4.0, regardless of course difficulty. All courses
              are treated equally.
            </li>
            <li>
              <strong>Weighted GPA:</strong> Gives extra points for honors, AP,
              IB, or college-level courses. An A in an AP course might be worth
              5.0 instead of 4.0, rewarding academic rigor.
            </li>
            <li>
              <strong>Which to Use:</strong> Check with your school and college
              admissions offices. Some require unweighted, others weighted, and
              many consider both.
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
                q: "What is a good GPA?",
                a: "A 'good' GPA depends on your goals. For college admissions, 3.0+ is generally competitive, while 3.5+ is strong. For graduate school, 3.5+ is often preferred. Always research specific requirements.",
              },
              {
                q: "How do I calculate my cumulative GPA?",
                a: "Add all grade points from all completed semesters and divide by total credit hours. Our calculator can track cumulative GPA across multiple semesters automatically.",
              },
              {
                q: "Do pass/fail courses affect GPA?",
                a: "Pass/fail courses typically don't affect GPA as long as you pass. However, failing a pass/fail course may result in an F that does impact your GPA. Check your school's policy.",
              },
              {
                q: "Can I raise my GPA significantly in one semester?",
                a: "It depends on how many credits you've completed. The more credits you have, the harder it is to change your GPA significantly. Early in college, one semester can have a major impact.",
              },
              {
                q: "How do retaken courses affect GPA?",
                a: "Policies vary by school. Some replace the old grade, others average both, and some count both. Check your institution's grade replacement policy before retaking courses.",
              },
              {
                q: "What is the difference between semester and cumulative GPA?",
                a: "Semester GPA only includes courses from one term. Cumulative GPA includes all courses from all completed semesters throughout your academic career.",
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
            Your GPA is a powerful tool for academic planning and goal setting.
            Regular calculation and monitoring help you stay on track for graduation
            requirements, scholarship eligibility, and future academic opportunities.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use the GPA Calculator above to track your academic progress accurately,
            and remember that while GPA is important, it's not the only factor in
            academic and professional success. Focus on learning, growth, and
            building skills alongside maintaining a strong GPA.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Calculate your GPA regularly, plan your course load strategically, and
            seek academic support when needed. With consistent effort and smart
              planning, you can achieve your academic goals.
          </p>
        </section>
      </div>
    </article>
  );
}
