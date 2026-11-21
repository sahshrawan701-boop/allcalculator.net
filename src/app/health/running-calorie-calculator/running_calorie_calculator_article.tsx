import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RunningCalorieArticle() {
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
          <span className="meta-tag">Health · Running & Fitness</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Running Calorie Calculator: Track Your Burn
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for running calorie calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Running is one of the most effective ways to burn calories and improve fitness. But how many calories do you actually burn during your runs? The answer depends on your weight, pace, distance, and individual factors.
          </p>
          <p className="mb-5">
            Calorie burn during running varies significantly based on these factors. Heavier runners burn more calories at the same pace, while faster running increases calorie burn per mile. Understanding your calorie burn helps you plan your nutrition and training.
          </p>
          <p className="mb-5">
            The running calorie calculator above estimates calories burned based on your weight, distance, and pace. It provides personalized estimates to help you track your energy expenditure.
          </p>
          <p>
            Use the running calorie calculator to understand your calorie burn, plan your nutrition around training, and track your progress toward fitness goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Running Calorie Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses established formulas that account for body weight, distance, and pace to estimate calorie burn. Running burns approximately 0.75-1.0 calories per kg of body weight per kilometer, depending on pace.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Calorie Burn Formula:
          </p>
          <div className="formula-block">
            <pre>Calories Burned = MET × Weight (kg) × Time (hours)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            MET values for running:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Slow Jog (4 mph)", "6.0 MET"],
              ["Running (5 mph)", "8.3 MET"],
              ["Fast Running (6 mph)", "10.0 MET"],
              ["Very Fast (7+ mph)", "11.5+ MET"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            MET (Metabolic Equivalent of Task) represents the energy cost of physical activities. One MET equals the energy expenditure at rest. Higher MET values indicate more intense activities that burn more calories.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── FACTORS AFFECTING BURN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors Affecting Calorie Burn
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Several factors influence how many calories you burn while running. Understanding these factors helps you interpret your calorie burn estimates.
          </p>

          {[
            {
              heading: "Body Weight",
              rows: [
                ["Effect", "Heavier runners burn more calories"],
                ["Reason", "More mass requires more energy to move"],
              ],
              note: "A 200-pound runner burns significantly more calories than a 120-pound runner at the same pace. This is why personalized calculations based on weight are important.",
            },
            {
              heading: "Running Pace",
              rows: [
                ["Effect", "Faster pace increases calorie burn"],
                ["Reason", "Higher intensity requires more energy"],
              ],
              note: "Running faster burns more calories per minute and per mile. However, the difference isn't linear — doubling pace more than doubles calorie burn due to increased intensity.",
            },
            {
              heading: "Distance",
              rows: [
                ["Effect", "Longer distance increases total burn"],
                ["Reason", "More time spent running"],
              ],
              note: "Total calorie burn is directly related to distance covered. Running 5 miles burns roughly twice as many calories as running 2.5 miles at the same pace.",
            },
            {
              heading: "Terrain",
              rows: [
                ["Effect", "Hills increase calorie burn"],
                ["Reason", "Additional work against gravity"],
              ],
              note: "Running uphill or on uneven terrain increases calorie burn significantly. Trail running and hill workouts typically burn more calories than running on flat surfaces.",
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

        {/* ── CALORIE BURN BY PACE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Calorie Burn by Running Pace
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different running paces result in different calorie burn rates. Understanding these differences helps you plan your workouts for specific goals.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Walking/Jogging (4 mph or slower)",
                body: "This pace burns approximately 0.6-0.7 calories per kg per km. It's ideal for beginners, recovery runs, or long-duration cardio. Good for building aerobic base.",
              },
              {
                n: "2",
                title: "Easy Running (5-6 mph)",
                body: "This pace burns approximately 0.8-1.0 calories per kg per km. It's comfortable enough to hold conversation. Most training runs should be at this intensity.",
              },
              {
                n: "3",
                title: "Tempo Running (6-7 mph)",
                body: "This pace burns approximately 1.0-1.2 calories per kg per km. It's comfortably hard and improves lactate threshold. Used for tempo runs and threshold training.",
              },
              {
                n: "4",
                title: "Interval/Speed Work (7+ mph)",
                body: "This pace burns 1.2+ calories per kg per km. It's high-intensity running used for intervals and speed work. Maximizes calorie burn per minute.",
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

        {/* ── USING CALORIE DATA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Using Calorie Burn Data
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Understanding your calorie burn helps you plan nutrition and training strategies for different goals.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Goal</th>
                <th className="dark:text-slate-100">Nutrition Strategy</th>
                <th className="dark:text-slate-100">Training Approach</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Weight Loss", "Create calorie deficit with running", "Combine running with diet for deficit"],
                ["Weight Maintenance", "Match calorie intake to burn", "Use running to maintain fitness level"],
                ["Performance", "Fuel adequately for training", "Eat to support training intensity"],
                ["Muscle Building", "Surplus calories + strength training", "Running complements, doesn't build muscle"],
              ].map(([goal, nutrition, training]) => (
                <tr key={goal}>
                  <td className="dark:text-slate-100">{goal}</td>
                  <td className="dark:text-slate-100">{nutrition}</td>
                  <td className="dark:text-slate-100">{training}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Running alone doesn&apos;t build significant muscle mass. For body composition changes, combine running with appropriate nutrition and strength training for best results.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Running Calorie Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate your calorie burn</>],
              [<><strong>Track your runs</strong> — distance, pace, time</>],
              [<><strong>Don&apos;t overeat back</strong> — running doesn&apos;t justify excess calories</>],
              [<><strong>Fuel appropriately</strong> — eat for your goals</>],
              [<><strong>Vary your intensity</strong> — mix easy and hard runs</>],
              [<><strong>Include hills</strong> — increase calorie burn</>],
              [<><strong>Consistency matters</strong> — regular running yields results</>],
              [<><strong>Listen to your body</strong> — avoid overtraining</>],
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
                q: "How are running calories calculated?",
                a: "Running calories are calculated using MET values that represent the energy cost of activities. The formula is: Calories = MET × Weight (kg) × Time (hours). Different paces have different MET values.",
              },
              {
                q: "Does running burn more calories than walking?",
                a: "Yes, running burns more calories per minute and per mile than walking. Running is more intense and requires more energy. However, walking can be a sustainable way to burn calories over longer durations.",
              },
              {
                q: "How many calories does running burn per mile?",
                a: "Approximately 0.75-1.0 calories per kg of body weight per mile. For a 150-pound person, this is about 100-130 calories per mile. Heavier runners burn more, lighter runners burn less.",
              },
              {
                q: "Does running speed affect calorie burn?",
                a: "Yes, faster running burns more calories per minute and per mile. However, the relationship isn't linear — doubling your speed more than doubles calorie burn due to the increased intensity.",
              },
              {
                q: "Can I rely on calorie burn estimates?",
                a: "Calorie burn estimates are approximations. Individual factors like running efficiency, fitness level, and genetics affect actual burn. Use estimates as a guide, not an exact measurement.",
              },
              {
                q: "Should I eat back calories burned from running?",
                a: "It depends on your goals. For weight loss, don't eat back all calories burned. For performance or maintenance, you may need to replace some or all calories burned to support training.",
              },
              {
                q: "Does terrain affect calorie burn?",
                a: "Yes. Running uphill or on uneven terrain increases calorie burn significantly. Trail running and hill workouts burn more calories than running on flat surfaces due to the additional work required.",
              },
              {
                q: "How accurate are fitness trackers for calorie burn?",
                a: "Fitness trackers provide estimates that can vary in accuracy. They're useful for tracking trends but may not be precise. Use them as a guide rather than relying on exact numbers.",
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
            Running is an excellent way to burn calories and improve fitness. The calculator above provides estimates based on your weight, distance, and pace to help you understand your energy expenditure.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that calorie burn estimates are approximations. Individual factors affect actual burn, and the most important thing is consistent running at appropriate intensities for your goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on building a sustainable running routine that supports your health and fitness goals. Whether you&apos;re running for weight loss, performance, or general fitness, consistency is key.
          </p>
          <div className="pull-quote mt-8">
            The best running routine is one you enjoy and can sustain. Find your pace, track your progress, and enjoy the journey to better health.
          </div>
        </section>

      </div>
    </article>
  );
}
