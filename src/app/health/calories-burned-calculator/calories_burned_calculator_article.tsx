import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CaloriesBurnedArticle() {
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
          <span className="meta-tag">Health · Fitness</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Calories Burned Calculator: Track Your Activity Burn
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for activity calorie tracking
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You go for a 30-minute run, but how many calories did you actually burn? The answer depends on your weight, the intensity of your workout, and your individual metabolism. Understanding calories burned helps you balance your energy budget and achieve your fitness goals.
          </p>
          <p className="mb-5">
            Calories burned during physical activity vary significantly based on multiple factors. Heavier people burn more calories for the same activity because moving more mass requires more energy. Intensity matters — vigorous exercise burns more calories than moderate activity.
          </p>
          <p className="mb-5">
            But estimating calories burned isn't an exact science. Different calculators use different formulas, and individual variations exist. The calculator above provides estimates based on established metabolic equations.
          </p>
          <p>
            Use the calories burned calculator above to estimate how many calories you burn during various activities, plan your exercise routine, and balance your calorie intake with your expenditure.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Calories Burned Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator uses metabolic equivalents (METs) to estimate calories burned. METs represent the energy cost of physical activities relative to resting metabolism. One MET equals the energy cost of sitting quietly.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Calories Burned Formula:
          </p>
          <div className="formula-block">
            <pre>Calories = METs × Weight (kg) × Duration (hours)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Common MET values for activities:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Sitting quietly", "1.0 MET"],
              ["Walking (3 mph)", "3.5 MET"],
              ["Running (6 mph)", "10.0 MET"],
              ["Cycling (moderate)", "6.8 MET"],
              ["Swimming (moderate)", "6.0 MET"],
              ["Weight training", "3.0-5.0 MET"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The MET system provides standardized estimates, but individual variations exist. Your actual calorie burn may differ based on fitness level, efficiency of movement, and other factors.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ACTIVITY CALORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Calories Burned by Activity
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Different activities burn calories at different rates. Understanding these differences helps you choose activities that align with your goals and time constraints.
          </p>

          {[
            {
              heading: "Walking: 3-4 MET",
              rows: [
                ["Intensity", "Light to moderate"],
                ["Calories (150 lb person, 30 min)", "150-200 calories"],
                ["Best For", "Beginners, low-impact exercise"],
              ],
              note: "Walking is accessible to almost everyone and provides significant health benefits. It's an excellent starting point for beginners and can be scaled up by increasing speed or adding incline.",
            },
            {
              heading: "Running: 8-12 MET",
              rows: [
                ["Intensity", "Vigorous"],
                ["Calories (150 lb person, 30 min)", "300-450 calories"],
                ["Best For", "Cardiovascular fitness, calorie burn"],
              ],
              note: "Running is one of the most efficient calorie-burning activities. It requires no equipment and can be done anywhere. Start with walk-run intervals if you're new to running.",
            },
            {
              heading: "Cycling: 6-10 MET",
              rows: [
                ["Intensity", "Moderate to vigorous"],
                ["Calories (150 lb person, 30 min)", "250-400 calories"],
                ["Best For", "Low-impact cardio, leg strength"],
              ],
              note: "Cycling provides excellent cardiovascular benefits with minimal impact on joints. It's ideal for people with joint issues or those who prefer seated exercise.",
            },
            {
              heading: "Swimming: 6-8 MET",
              rows: [
                ["Intensity", "Moderate to vigorous"],
                ["Calories (150 lb person, 30 min)", "250-350 calories"],
                ["Best For", "Full-body workout, low-impact"],
              ],
              note: "Swimming engages multiple muscle groups and provides resistance training. It's particularly beneficial for people with arthritis or injuries who need low-impact exercise.",
            },
            {
              heading: "Weight Training: 3-5 MET",
              rows: [
                ["Intensity", "Moderate to vigorous"],
                ["Calories (150 lb person, 30 min)", "150-250 calories"],
                ["Best For", "Muscle building, metabolism boost"],
              ],
              note: "While weight training burns fewer calories during the workout than cardio, it builds muscle which increases resting metabolism. The calorie-burning benefits continue after the workout ends.",
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

        {/* ── FACTORS AFFECTING BURN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect Calories Burned
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your individual calorie burn during exercise depends on several factors. Understanding these helps you estimate your burn more accurately and optimize your workouts.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Body weight",
                body: "Heavier people burn more calories for the same activity because moving more mass requires more energy. This is why calorie burn estimates always include weight as a factor.",
              },
              {
                n: "2",
                title: "Exercise intensity",
                body: "Higher intensity exercise burns more calories per minute. Vigorous activity can burn twice as many calories as moderate activity in the same time period.",
              },
              {
                n: "3",
                title: "Fitness level",
                body: "Fit individuals may burn fewer calories for the same activity because their bodies are more efficient. However, they can often exercise at higher intensities for longer durations.",
              },
              {
                n: "4",
                title: "Age",
                body: "Metabolism naturally slows with age, which can affect calorie burn. Older adults may burn slightly fewer calories than younger adults for the same activity.",
              },
              {
                n: "5",
                title: "Gender",
                body: "Men typically burn more calories than women for the same activity due to generally higher muscle mass and lower body fat percentage.",
              },
              {
                n: "6",
                title: "Environmental factors",
                body: "Exercising in heat or cold can increase calorie burn as your body works to maintain temperature. Altitude can also affect calorie expenditure.",
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

        {/* ── MAXIMIZING BURN ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Maximize Calorie Burn
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            If your goal is to maximize calorie burn during exercise, several strategies can help you get more from your workouts.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Strategy</th>
                <th className="dark:text-slate-100">How It Works</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["High-Intensity Interval Training", "Alternating intense bursts with recovery", "Increases post-exercise calorie burn"],
                ["Incline Training", "Adding hills or incline to cardio", "Engages more muscles, increases intensity"],
                ["Compound Movements", "Exercises using multiple muscle groups", "Burns more calories than isolation exercises"],
                ["Circuit Training", "Moving between exercises with minimal rest", "Keeps heart rate elevated throughout"],
                ["Adding Resistance", "Using weights or resistance bands", "Increases calorie burn and builds muscle"],
              ].map(([strategy, how, benefit]) => (
                <tr key={strategy}>
                  <td className="dark:text-slate-100">{strategy}</td>
                  <td className="dark:text-slate-100">{how}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            High-Intensity Interval Training (HIIT) is particularly effective because it creates an afterburn effect — your body continues burning calories at an elevated rate for hours after the workout ends.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Tracking Activity
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — estimate calories burned accurately</>],
              [<><strong>Track consistently</strong> — same method for comparison</>],
              [<><strong>Focus on intensity</strong> — higher intensity burns more</>],
              [<><strong>Mix activities</strong> — variety prevents adaptation</>],
              [<><strong>Include strength training</strong> — builds calorie-burning muscle</>],
              [<><strong>Stay consistent</strong> — regular exercise is key</>],
              [<><strong>Listen to your body</strong> — rest when needed</>],
              [<><strong>Progress gradually</strong> — increase intensity over time</>],
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
                q: "How are calories burned calculated?",
                a: "Calories burned are calculated using METs (metabolic equivalents), which represent the energy cost of activities relative to resting metabolism. The formula is: Calories = METs × Weight (kg) × Duration (hours).",
              },
              {
                q: "Do heavier people burn more calories?",
                a: "Yes. Heavier people burn more calories for the same activity because moving more mass requires more energy. This is why weight is a key factor in calorie burn calculations.",
              },
              {
                q: "What activity burns the most calories?",
                a: "Running typically burns the most calories per minute among common activities. High-intensity activities like sprinting, jumping rope, and burpees also have very high calorie burn rates.",
              },
              {
                q: "Does muscle burn more calories than fat?",
                a: "Yes, muscle tissue burns more calories at rest than fat tissue. This is why building muscle through strength training can increase your resting metabolic rate and help with weight management.",
              },
              {
                q: "How accurate are calorie burn estimates?",
                a: "Calorie burn estimates are approximations that are generally accurate within 10-20% for most people. Individual variations exist due to fitness level, efficiency, and other factors.",
              },
              {
                q: "Should I count calories burned during exercise?",
                a: "It can be helpful for weight management, but don't rely solely on exercise calories. Focus on creating a calorie deficit primarily through diet, with exercise as a supplement.",
              },
              {
                q: "Can I eat back exercise calories?",
                a: "Be cautious. Exercise calorie estimates are often overestimated. If you're trying to lose weight, it's generally better not to eat back all your exercise calories.",
              },
              {
                q: "How does intensity affect calorie burn?",
                a: "Higher intensity exercise burns more calories per minute. Vigorous activity can burn twice as many calories as moderate activity in the same time period.",
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
            Understanding calories burned during exercise helps you plan your fitness routine and balance your energy budget. The calculator above provides estimates based on your individual factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that calorie burn estimates are approximations, not precise measurements. Your actual burn may vary based on individual factors. Use the estimates as a guide rather than an exact prescription.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on consistency and progression rather than obsessing over exact calorie numbers. Regular physical activity provides numerous health benefits beyond calorie burning, including improved cardiovascular health, mood, and longevity.
          </p>
          <div className="pull-quote mt-8">
            The best exercise is the one you'll do consistently. Find activities you enjoy and make them a regular part of your routine.
          </div>
        </section>

      </div>
    </article>
  );
}
