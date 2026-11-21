import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function OvulationArticle() {
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
          <span className="meta-tag">Health · Women's Health</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Ovulation Calculator: Track Your Fertile Window
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for ovulation tracking
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Understanding your menstrual cycle and ovulation timing is essential whether you're trying to conceive, avoiding pregnancy, or simply tracking your reproductive health. The ovulation calculator above helps you identify your fertile window based on your cycle patterns.
          </p>
          <p className="mb-5">
            Ovulation typically occurs about 14 days before your period starts. The fertile window — the days when conception is most likely — includes the day of ovulation and the five days leading up to it. This window varies based on cycle length and individual factors.
          </p>
          <p className="mb-5">
            The calculator estimates your ovulation date and fertile window based on your cycle length and the first day of your last period. This provides a helpful guide, though individual cycles can vary month to month.
          </p>
          <p>
            Use the ovulation calculator to track your cycle, understand your fertile window, and plan accordingly for your reproductive goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Ovulation Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses the standard method of estimating ovulation based on cycle length. It assumes ovulation occurs approximately 14 days before the start of the next period, which is consistent for most women regardless of total cycle length.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Ovulation Calculation Formula:
          </p>
          <div className="formula-block">
            <pre>Ovulation Date = First Day of Last Period + (Cycle Length - 14) days</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Fertile Window:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Start", "Ovulation Date - 5 days"],
              ["Peak", "Ovulation Date"],
              ["End", "Ovulation Date + 1 day"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            This calculation is an estimate. Individual cycles can vary, and stress, illness, travel, and other factors can affect ovulation timing. For most accurate results, track multiple cycles and look for patterns.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── CYCLE PHASES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Menstrual Cycle Phases
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            The menstrual cycle consists of several phases, each with distinct hormonal changes. Understanding these phases helps you track your cycle and identify your fertile window.
          </p>

          {[
            {
              heading: "Menstrual Phase",
              rows: [
                ["Duration", "3-7 days"],
                ["What Happens", "Uterine lining sheds"],
                ["Fertility", "Low"],
              ],
              note: "This is when you have your period. The uterus sheds its lining, and hormone levels are low. Fertility is lowest during this phase.",
            },
            {
              heading: "Follicular Phase",
              rows: [
                ["Duration", "Variable (10-16 days)"],
                ["What Happens", "Eggs mature in ovaries"],
                ["Fertility", "Increasing"],
              ],
              note: "The body prepares for ovulation. Several eggs begin to mature, though typically only one will be released. Fertility increases as ovulation approaches.",
            },
            {
              heading: "Ovulation Phase",
              rows: [
                ["Duration", "12-24 hours"],
                ["What Happens", "Egg is released from ovary"],
                ["Fertility", "Peak"],
              ],
              note: "The mature egg is released from the ovary and travels down the fallopian tube. This is the peak fertility window. The egg survives for 12-24 hours if not fertilized.",
            },
            {
              heading: "Luteal Phase",
              rows: [
                ["Duration", "12-14 days"],
                ["What Happens", "Uterine lining thickens"],
                ["Fertility", "Decreasing"],
              ],
              note: "After ovulation, the empty follicle produces progesterone to prepare the uterus for possible pregnancy. If pregnancy doesn't occur, hormone levels drop and the cycle restarts.",
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

        {/* ── TRACKING METHODS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Methods for Tracking Ovulation
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several methods can help you track ovulation more accurately than calendar calculation alone. Combining methods provides the most reliable results.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Calendar method",
                body: "Tracking cycle length over several months to identify patterns. This is the method used by the calculator. It's simple but less accurate for women with irregular cycles.",
              },
              {
                n: "2",
                title: "Basal body temperature",
                body: "Body temperature rises slightly after ovulation. Tracking temperature daily can confirm ovulation occurred, though it predicts after the fact rather than before.",
              },
              {
                n: "3",
                title: "Cervical mucus monitoring",
                body: "Cervical mucus changes throughout the cycle, becoming clear and stretchy near ovulation. This provides real-time fertility indicators.",
              },
              {
                n: "4",
                title: "Ovulation predictor kits",
                body: "These tests detect luteinizing hormone (LH) surge, which occurs 24-36 hours before ovulation. They provide advance notice of ovulation.",
              },
              {
                n: "5",
                title: "Fertility apps",
                body: "Smartphone apps combine calendar tracking with other data like temperature and symptoms to predict ovulation. They can be helpful but aren't always accurate.",
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

        {/* ── FACTORS AFFECTING CYCLE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Your Cycle
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Various factors can affect cycle regularity and ovulation timing. Understanding these factors helps you interpret changes in your cycle.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Factor</th>
                <th className="dark:text-slate-100">Effect on Cycle</th>
                <th className="dark:text-slate-100">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Stress", "Can delay or skip ovulation", "High stress affects hormones"],
                ["Weight Changes", "Can disrupt cycle", "Both gain and loss have effects"],
                ["Sleep Patterns", "Affects hormone regulation", "Irregular sleep affects cycle"],
                ["Travel", "Can shift timing", "Time zone changes affect rhythm"],
                ["Illness", "Can delay ovulation", "Even minor illness may have impact"],
                ["Exercise", "Excessive can disrupt cycle", "Moderate exercise is beneficial"],
                ["Age", "Cycles become less regular", "Especially approaching menopause"],
              ].map(([factor, effect, notes]) => (
                <tr key={factor}>
                  <td className="dark:text-slate-100">{factor}</td>
                  <td className="dark:text-slate-100">{effect}</td>
                  <td className="dark:text-slate-100">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            If your cycles are consistently irregular (varying by more than 7-8 days), consult your healthcare provider. Irregular cycles can indicate underlying health conditions that may need attention.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Cycle Tracking
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate your fertile window</>],
              [<><strong>Track consistently</strong> — note cycle start dates</>],
              [<><strong>Use multiple methods</strong> — combine tracking approaches</>],
              [<><strong>Know your body</strong> — watch for physical signs</>],
              [<><strong>Be patient</strong> — cycles can vary naturally</>],
              [<><strong>Manage stress</strong> — stress affects ovulation</>],
              [<><strong>Stay healthy</strong> — diet and exercise matter</>],
              [<><strong>Consult professionals</strong> — for irregular cycles</>],
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
                q: "How is ovulation calculated?",
                a: "Ovulation is estimated by subtracting 14 days from your expected next period start date. This method assumes the luteal phase (after ovulation) is consistently 14 days, which is true for most women.",
              },
              {
                q: "How long is the fertile window?",
                a: "The fertile window is about 6 days — the day of ovulation and the 5 days before. Sperm can survive in the female reproductive tract for up to 5 days, while the egg survives for 12-24 hours after ovulation.",
              },
              {
                q: "Can I get pregnant outside the fertile window?",
                a: "It's unlikely but not impossible. The fertile window calculation is based on averages. Individual cycles can vary, and stress or other factors can cause unexpected ovulation.",
              },
              {
                q: "What if my cycles are irregular?",
                a: "Calendar-based calculations are less accurate for irregular cycles. Consider using ovulation predictor kits, tracking basal body temperature, or monitoring cervical mucus. Consult your healthcare provider if cycles are consistently irregular.",
              },
              {
                q: "How accurate are ovulation calculators?",
                a: "For women with regular cycles, ovulation calculators are reasonably accurate. However, they don't account for cycle variations. Using multiple tracking methods provides more accurate results.",
              },
              {
                q: "What are signs of ovulation?",
                a: "Common signs include mild pelvic pain, changes in cervical mucus (clear and stretchy), slight increase in basal body temperature, breast tenderness, and increased libido.",
              },
              {
                q: "Can stress affect ovulation?",
                a: "Yes. Stress can delay or prevent ovulation by affecting hormone production. High stress levels can disrupt the menstrual cycle and make ovulation timing unpredictable.",
              },
              {
                q: "When should I see a doctor about my cycle?",
                a: "Consult your healthcare provider if your cycles are consistently irregular, very short (less than 21 days), very long (more than 35 days), painful, or if you're trying to conceive without success.",
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
            Understanding your menstrual cycle and ovulation timing provides valuable insights into your reproductive health. The calculator above offers estimates based on your cycle patterns.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that cycle tracking is an estimate, not a guarantee. Individual cycles vary, and multiple factors can affect ovulation timing. Use the calculator as a guide, but pay attention to your body's signals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If you have concerns about your cycle regularity or are trying to conceive, consult your healthcare provider for personalized guidance and support.
          </p>
          <div className="pull-quote mt-8">
            Your cycle is a vital sign. Tracking it provides valuable insights into your overall health and well-being.
          </div>
        </section>

      </div>
    </article>
  );
}
