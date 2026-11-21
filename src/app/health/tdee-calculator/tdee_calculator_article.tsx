import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function TDEEArticle() {
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
          <span className="meta-tag">Health · Nutrition</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            TDEE Calculator: Calculate Your Total Daily Energy Expenditure
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for TDEE calculation
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Understanding your Total Daily Energy Expenditure (TDEE) is essential for managing your weight effectively. Whether you want to lose, gain, or maintain weight, knowing how many calories your body burns each day provides the foundation for your nutrition plan.
          </p>
          <p className="mb-5">
            TDEE represents the total number of calories your body burns in a day, including calories burned at rest (BMR) and through physical activity. It accounts for your basal metabolic rate, activity level, and the thermic effect of food.
          </p>
          <p className="mb-5">
            The TDEE calculator above estimates your daily calorie needs based on your personal stats and activity level. This provides a baseline for creating a calorie deficit for weight loss, a surplus for muscle gain, or maintaining your current weight.
          </p>
          <p>
            Use the TDEE calculator to understand your calorie needs, plan your nutrition for your goals, and take control of your weight management journey.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How TDEE Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator first estimates your Basal Metabolic Rate (BMR) using established formulas, then applies an activity multiplier to account for your physical activity level. The result is your TDEE.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            TDEE Formula:
          </p>
          <div className="formula-block">
            <pre>TDEE = BMR × Activity Multiplier</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Activity multipliers:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Sedentary", "1.2 (little or no exercise)"],
              ["Lightly Active", "1.375 (light exercise 1-3 days/week)"],
              ["Moderately Active", "1.55 (moderate exercise 3-5 days/week)"],
              ["Very Active", "1.725 (hard exercise 6-7 days/week)"],
              ["Extra Active", "1.9 (very hard exercise, physical job)"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The Mifflin-St Jeor equation is used for BMR calculation as it's considered the most accurate for modern populations. The Harris-Benedict equation is an alternative option.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TDEE COMPONENTS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding TDEE Components
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            TDEE consists of several components that contribute to your total daily calorie burn. Understanding these components helps you appreciate how different factors affect your energy expenditure.
          </p>

          {[
            {
              heading: "Basal Metabolic Rate (BMR)",
              rows: [
                ["Percentage", "60-75% of TDEE"],
                ["What It Is", "Calories burned at complete rest"],
                ["Function", "Maintains basic life functions"],
              ],
              note: "BMR is the energy your body needs to maintain basic functions like breathing, circulation, and cell production. It's the largest component of TDEE for most people.",
            },
            {
              heading: "Thermic Effect of Activity (TEA)",
              rows: [
                ["Percentage", "15-30% of TDEE"],
                ["What It Is", "Calories burned through physical activity"],
                ["Function", "Exercise and daily movement"],
              ],
              note: "This includes both intentional exercise and non-exercise activity thermogenesis (NEAT) — the calories burned through daily movement like walking, fidgeting, and standing.",
            },
            {
              heading: "Thermic Effect of Food (TEF)",
              rows: [
                ["Percentage", "10% of TDEE"],
                ["What It Is", "Calories burned digesting food"],
                ["Function", "Processing and storing nutrients"],
              ],
              note: "Your body burns calories digesting, absorbing, and storing food. Protein has a higher thermic effect than carbohydrates or fats, meaning more calories are burned digesting protein.",
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

        {/* ── USING TDEE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Using TDEE for Your Goals
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Once you know your TDEE, you can adjust your calorie intake to achieve different goals. The relationship between calories in and calories out determines weight change.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Weight loss",
                body: "Create a calorie deficit by eating 300-500 calories below your TDEE. This results in approximately 0.5-1 pound of weight loss per week. Avoid deficits larger than 500 calories without medical supervision.",
              },
              {
                n: "2",
                title: "Weight maintenance",
                body: "Eat approximately at your TDEE. This maintains your current weight. Monitor your weight and adjust intake up or down by 100-200 calories as needed to maintain stability.",
              },
              {
                n: "3",
                title: "Weight gain",
                body: "Create a calorie surplus by eating 300-500 calories above your TDEE. This supports muscle gain when combined with resistance training. For faster weight gain, a larger surplus may be appropriate.",
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

        {/* ── TRACKING ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tracking Your TDEE and Progress
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Tracking your calorie intake and progress helps you fine-tune your approach and achieve your goals more effectively.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Method</th>
                <th className="dark:text-slate-100">Implementation</th>
                <th className="dark:text-slate-100">Benefit</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Food Logging", "Track all food and beverages consumed", "Awareness of actual calorie intake"],
                ["Weight Tracking", "Weigh regularly, same time daily", "Monitor progress and adjust as needed"],
                ["Activity Tracking", "Log exercise and daily movement", "Understand calorie burn from activity"],
                ["Progress Photos", "Take photos weekly", "Visual progress beyond the scale"],
                ["Measurements", "Track body measurements", "Monitor body composition changes"],
              ].map(([method, implementation, benefit]) => (
                <tr key={method}>
                  <td className="dark:text-slate-100">{method}</td>
                  <td className="dark:text-slate-100">{implementation}</td>
                  <td className="dark:text-slate-100">{benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            TDEE calculations are estimates. Track your actual results and adjust your calorie targets based on how your body responds. Individual metabolism varies, and the calculator provides a starting point.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for TDEE Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your TDEE</>],
              [<><strong>Be honest about activity</strong> — accurate activity level matters</>],
              [<><strong>Start with small adjustments</strong> — 300-500 calorie changes</>],
              [<><strong>Track consistently</strong> — awareness is key</>],
              [<><strong>Focus on food quality</strong> — nutrient-dense foods</>],
              [<><strong>Adjust as needed</strong> — based on progress</>],
              [<><strong>Be patient</strong> — sustainable changes take time</>],
              [<><strong>Consult professionals</strong> — for personalized guidance</>],
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
                q: "How is TDEE calculated?",
                a: "TDEE is calculated by estimating your BMR using the Mifflin-St Jeor equation, then multiplying by an activity factor based on your exercise habits and daily movement. The result is your total daily calorie expenditure.",
              },
              {
                q: "What is the difference between BMR and TDEE?",
                a: "BMR (Basal Metabolic Rate) is the calories your body burns at complete rest. TDEE (Total Daily Energy Expenditure) includes BMR plus calories burned through physical activity and food digestion. TDEE is always higher than BMR.",
              },
              {
                q: "How accurate are TDEE calculators?",
                a: "TDEE calculators provide estimates that are reasonably accurate for most people. However, individual metabolism varies. Use the calculated TDEE as a starting point and adjust based on your actual results.",
              },
              {
                q: "Which activity level should I choose?",
                a: "Choose the activity level that best describes your average week. Be honest — overestimating activity level will overestimate calorie needs. If you're unsure, start with a lower activity level and adjust based on results.",
              },
              {
                q: "How often should I recalculate my TDEE?",
                a: "Recalculate your TDEE when your weight changes significantly (more than 10 pounds), your activity level changes, or your goals change. Your TDEE decreases as you lose weight, so periodic recalculation is important.",
              },
              {
                q: "Can I eat more if I exercise more?",
                a: "Yes, exercise increases your TDEE. You can eat more to maintain weight, or maintain a deficit for weight loss. However, don't overestimate calorie burn from exercise — it's often less than people think.",
              },
              {
                q: "What if I'm not losing weight at my calculated deficit?",
                a: "You may be overestimating calorie intake, underestimating activity level, or your metabolism may differ from the estimate. Track your intake accurately, consider a slightly larger deficit, and consult a healthcare provider if needed.",
              },
              {
                q: "Should I include exercise days in my TDEE calculation?",
                a: "The activity multiplier accounts for your average weekly activity. If you exercise regularly, choose an activity level that reflects this. You don't need to calculate different TDEEs for different days.",
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
            Understanding your TDEE provides the foundation for effective weight management. The calculator above estimates your daily calorie needs based on your individual factors and activity level.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that TDEE calculations are estimates. Individual metabolism varies, and the most important thing is to track your actual results and adjust your approach accordingly.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on sustainable changes rather than quick fixes. Small, consistent adjustments to your calorie intake and physical activity lead to lasting results for your health and fitness goals.
          </p>
          <div className="pull-quote mt-8">
            Knowledge is power. Understanding your TDEE empowers you to make informed decisions about your nutrition and achieve your goals effectively.
          </div>
        </section>

      </div>
    </article>
  );
}
