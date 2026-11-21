import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function PregnancyDueDateArticle() {
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
          <span className="meta-tag">Health · Pregnancy</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Pregnancy Due Date Calculator: Calculate Your Due Date
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for due date calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You've just found out you're pregnant, or you're planning for pregnancy, and you want to know when your baby is due. Calculating your due date helps you plan for prenatal care, prepare for baby's arrival, and track your pregnancy progress.
          </p>
          <p className="mb-5">
            The due date calculator uses Naegele's rule, the standard method for estimating delivery date. It calculates 280 days (40 weeks) from the first day of your last menstrual period, assuming a 28-day cycle with ovulation on day 14.
          </p>
          <p className="mb-5">
            Knowing your due date helps you schedule prenatal appointments, plan maternity leave, and prepare emotionally and logistically for your new family member.
          </p>
          <p>
            Use the due date calculator to determine your estimated delivery date, understand how due dates are calculated, and prepare for your pregnancy journey.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Due Date Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses Naegele's rule, developed in the 19th century and still used today. It assumes conception occurs approximately 14 days after the first day of the last menstrual period.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Naegele's Rule Formula:
          </p>
          <div className="formula-block">
            <pre>Due Date = First Day of Last Period + 280 Days (40 Weeks)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Alternative calculation methods:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Last Period Method", "LMP + 280 days"],
              ["Conception Date Method", "Conception + 266 days"],
              ["Ultrasound Method", "Based on fetal measurements"],
              ["IVF Transfer Date", "Transfer date + 266 days"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            Only about 5% of babies are born on their exact due date. Most births occur between 37 and 42 weeks. The due date is an estimate, not a guarantee. Your healthcare provider will monitor your progress throughout pregnancy.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIMELINE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Pregnancy Timeline from Due Date
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Working backward from your due date, you can identify key milestones throughout your pregnancy. These dates help you prepare for each stage.
          </p>

          {[
            {
              heading: "Conception Date",
              rows: [
                ["Calculation", "Due Date - 266 days"],
                ["Significance", "When pregnancy began"],
              ],
              note: "This is approximately when fertilization occurred. It's typically about 14 days after the first day of your last period if you have a 28-day cycle.",
            },
            {
              heading: "First Trimester End",
              rows: [
                ["Calculation", "Due Date - 196 days"],
                ["Significance", "Week 12 of pregnancy"],
              ],
              note: "The end of the first trimester. Risk of miscarriage decreases significantly after this point. Many women start feeling better as morning sickness subsides.",
            },
            {
              heading: "Second Trimester End",
              rows: [
                ["Calculation", "Due Date - 98 days"],
                ["Significance", "Week 26 of pregnancy"],
              ],
              note: "The end of the second trimester. Baby is viable if born prematurely, though would need significant medical support. You'll feel more movement as baby grows.",
            },
            {
              heading: "Full Term",
              rows: [
                ["Calculation", "Due Date - 21 days"],
                ["Significance", "Week 37 of pregnancy"],
              ],
              note: "Baby is considered full term and could be born safely. Most providers consider this the earliest safe delivery date for non-medical reasons.",
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

        {/* ── ACCURACY ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Due Date Accuracy Factors
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors can affect due date accuracy. Understanding these factors helps you interpret your due date appropriately.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Cycle regularity",
                body: "Regular cycles make due date calculation more accurate. Irregular cycles or uncertain last period date reduce accuracy. Ultrasound dating is more accurate in these cases.",
              },
              {
                n: "2",
                title: "Ultrasound timing",
                body: "Early ultrasounds (before 13 weeks) are most accurate for dating. Later ultrasounds are less accurate as babies grow at different rates.",
              },
              {
                n: "3",
                title: "First pregnancy",
                body: "First babies are more likely to be born after the due date. Subsequent pregnancies often deliver slightly earlier on average.",
              },
              {
                n: "4",
                title: "Individual factors",
                body: "Age, health history, and pregnancy complications can affect timing. Your healthcare provider will monitor and adjust expectations based on your individual situation.",
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

        {/* ── PREPARATION ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Preparing for Your Due Date
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Use your due date to plan and prepare for baby's arrival. Having a plan in place reduces stress and helps you feel ready when labor begins.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Timeline</th>
                <th className="dark:text-slate-100">Preparation Task</th>
                <th className="dark:text-slate-100">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["First Trimester", "Choose healthcare provider, start prenatal vitamins", "Early care is crucial"],
                ["Second Trimester", "Plan nursery, research pediatricians, childbirth classes", "Preparation takes time"],
                ["Third Trimester", "Pack hospital bag, install car seat, finalize birth plan", "Baby can come early"],
                ["Month Before Due", "Arrange help after birth, complete work projects", "Postpartum support essential"],
              ].map(([timeline, task, why]) => (
                <tr key={timeline}>
                  <td className="dark:text-slate-100">{timeline}</td>
                  <td className="dark:text-slate-100">{task}</td>
                  <td className="dark:text-slate-100">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Be flexible with your due date plans. Babies arrive on their own schedule. Having contingency plans for early or late delivery helps you adapt to whatever happens.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Due Date Planning
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your due date</>],
              [<><strong>Confirm with ultrasound</strong> — early dating is most accurate</>],
              [<><strong>Plan for flexibility</strong> — due dates are estimates</>],
              [<><strong>Track prenatal appointments</strong> — regular care is essential</>],
              [<><strong>Prepare early</strong> — baby can arrive before due date</>],
              [<><strong>Know the signs</strong> — recognize labor when it starts</>],
              [<><strong>Have a birth plan</strong> — communicate your preferences</>],
              [<><strong>Arrange support</strong> — postpartum help is invaluable</>],
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
                q: "How is the due date calculated?",
                a: "The due date is calculated using Naegele's rule: 280 days from the first day of your last menstrual period. This assumes a 28-day cycle with ovulation on day 14. Adjustments may be made based on ultrasound measurements.",
              },
              {
                q: "How accurate are due dates?",
                a: "Only about 5% of babies are born on their exact due date. The calculation is an estimate. Most births occur between 37 and 42 weeks. Early ultrasound measurements provide the most accurate dating.",
              },
              {
                q: "What if I don't know my last period date?",
                a: "If you're unsure of your last period, your healthcare provider will use ultrasound measurements to estimate gestational age. Early ultrasounds (before 13 weeks) are most accurate for dating pregnancy.",
              },
              {
                q: "Can the due date change?",
                a: "Yes. If early ultrasound measurements indicate a different gestational age than calculated by last period, your due date may be adjusted. This is common and ensures accurate tracking of baby's development.",
              },
              {
                q: "Is it safe to deliver before the due date?",
                a: "Babies born at 37 weeks are considered full term and generally safe. However, unless medically necessary, most providers prefer to wait until at least 39 weeks for non-medical deliveries to ensure full lung maturity.",
              },
              {
                q: "What happens if I go past my due date?",
                a: "Going past your due date is common. Most providers will monitor you closely after 40 weeks and may recommend induction around 41-42 weeks depending on your individual situation and baby's status.",
              },
              {
                q: "Does the due date affect pregnancy length?",
                a: "No. The due date is an estimate of when baby will be full term. It doesn't determine how long your pregnancy will actually last. Each pregnancy progresses according to its own timeline.",
              },
              {
                q: "Should I plan my delivery for the due date?",
                a: "No. Plan for a range of time around your due date. Most providers won't schedule inductions or cesareans for non-medical reasons until after 39 weeks. Be prepared for baby to arrive anytime from 37 weeks onward.",
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
            Your due date is a helpful milestone for planning and tracking your pregnancy. The calculator above provides an estimate based on standard calculations, but remember that babies arrive on their own schedule.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on staying healthy throughout pregnancy, attending prenatal appointments, and preparing for your new arrival. Your healthcare provider will monitor your progress and ensure both you and baby stay healthy.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Be flexible with your plans and trust your body. Whether baby comes early, on time, or late, the most important thing is that you and baby are healthy and safe.
          </p>
          <div className="pull-quote mt-8">
            Your due date is a guide, not a deadline. Trust your body's wisdom and prepare for the amazing journey of bringing new life into the world.
          </div>
        </section>

      </div>
    </article>
  );
}
