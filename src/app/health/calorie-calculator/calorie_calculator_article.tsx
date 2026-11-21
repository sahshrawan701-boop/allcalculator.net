import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function CalorieArticle() {
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
            Calorie Calculator: Determine Your Daily Calorie Needs
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for calorie management
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to lose weight, gain muscle, or maintain your current physique. But how many calories should you actually eat each day? The answer depends on your goals, activity level, and individual factors like age, gender, and metabolism.
          </p>
          <p className="mb-5">
            Calories are units of energy that fuel your body. Your body burns calories continuously for basic functions like breathing and circulation, plus additional calories for physical activity. Understanding your calorie needs is essential for achieving your health and fitness goals.
          </p>
          <p className="mb-5">
            But calorie needs vary significantly between individuals. A sedentary office worker needs far fewer calories than an athlete. Age, gender, muscle mass, and genetics all play roles in determining your unique calorie requirements.
          </p>
          <p>
            Use the calorie calculator above to determine your daily calorie needs based on your goals, activity level, and personal characteristics. This provides the foundation for effective nutrition planning.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Calorie Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator first estimates your Basal Metabolic Rate (BMR) — the calories your body burns at complete rest. Then it applies an activity factor to determine your Total Daily Energy Expenditure (TDEE). Finally, it adjusts based on your goals.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            The Calculation Process:
          </p>
          <div className="formula-block">
            <pre>Step 1: Calculate BMR using Mifflin-St Jeor equation
Step 2: Multiply BMR by activity factor to get TDEE
Step 3: Adjust TDEE based on goal (lose, maintain, gain)</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s how the goal adjustment works:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Weight Loss", "TDEE - 500 calories/day"],
              ["Aggressive Weight Loss", "TDEE - 1,000 calories/day"],
              ["Maintenance", "TDEE (no adjustment)"],
              ["Muscle Gain", "TDEE + 200-500 calories/day"],
              ["Aggressive Muscle Gain", "TDEE + 500+ calories/day"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            A deficit of 500 calories per day typically results in about 1 pound of weight loss per week. A deficit of 1,000 calories per day results in about 2 pounds per week. Never go below your BMR.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── ACTIVITY LEVELS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Activity Levels
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your activity level significantly impacts your calorie needs. The calculator uses standard activity factors to estimate how many calories you burn beyond your resting metabolism.
          </p>

          {[
            {
              heading: "Sedentary: Little to no exercise",
              rows: [
                ["Activity Factor", "1.2"],
                ["Description", "Desk job, no regular exercise"],
                ["Example", "Office worker who doesn't exercise"],
              ],
              note: "Most people with office jobs fall into this category. Even if you walk occasionally, if you don't exercise regularly, use this factor.",
            },
            {
              heading: "Lightly Active: Light exercise 1-3 days/week",
              rows: [
                ["Activity Factor", "1.375"],
                ["Description", "Light exercise or sports 1-3 days/week"],
                ["Example", "Walking 30 minutes, 3 times per week"],
              ],
              note: "This includes people who walk regularly or do light exercise a few times per week. You're active but not intensely.",
            },
            {
              heading: "Moderately Active: Moderate exercise 3-5 days/week",
              rows: [
                ["Activity Factor", "1.55"],
                ["Description", "Moderate exercise or sports 3-5 days/week"],
                ["Example", "Jogging 30 minutes, 4 times per week"],
              ],
              note: "This is the category for people who exercise regularly at a moderate intensity. You might jog, swim, or cycle several times per week.",
            },
            {
              heading: "Very Active: Hard exercise 6-7 days/week",
              rows: [
                ["Activity Factor", "1.725"],
                ["Description", "Hard exercise or sports 6-7 days/week"],
                ["Example", "Training for a marathon, daily workouts"],
              ],
              note: "This category is for athletes and highly active individuals. You exercise intensely almost every day.",
            },
            {
              heading: "Extra Active: Very hard exercise, physical job",
              rows: [
                ["Activity Factor", "1.9"],
                ["Description", "Very hard exercise, physical job, training twice/day"],
                ["Example", "Construction worker, elite athlete"],
              ],
              note: "This is for elite athletes or people with very physically demanding jobs. Your calorie needs are significantly higher than average.",
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

        {/* ── CALORIE SOURCES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Understanding Calorie Sources
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Not all calories are created equal. The three macronutrients — carbohydrates, proteins, and fats — provide different amounts of calories per gram and serve different functions in the body.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Macronutrient</th>
                <th className="dark:text-slate-100">Calories per Gram</th>
                <th className="dark:text-slate-100">Primary Function</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Carbohydrates", "4 calories/gram", "Primary energy source"],
                ["Proteins", "4 calories/gram", "Muscle building and repair"],
                ["Fats", "9 calories/gram", "Energy storage and hormone production"],
                ["Alcohol", "7 calories/gram", "Not a nutrient but provides calories"],
              ].map(([macro, calories, func]) => (
                <tr key={macro}>
                  <td className="dark:text-slate-100">{macro}</td>
                  <td className="dark:text-slate-100">{calories}</td>
                  <td className="dark:text-slate-100">{func}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Fats are more than twice as calorie-dense as carbohydrates and proteins. This is why high-fat foods can contribute significantly to calorie intake even in small portions. Balance is key.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TRACKING CALORIES ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How to Track Calories Effectively
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Tracking calories can help you achieve your goals, but it requires consistency and accuracy. Here are proven strategies for effective calorie tracking.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Use a tracking app",
                body: "Apps like MyFitnessPal, Lose It, or Cronometer make tracking easier. They have extensive food databases and can scan barcodes. Consistency is more important than the specific app.",
              },
              {
                n: "2",
                title: "Measure portions accurately",
                body: "Eyeballing portions leads to underestimation. Use food scales, measuring cups, and spoons. Weighing food is the most accurate method for tracking.",
              },
              {
                n: "3",
                title: "Track everything",
                body: "Don't forget to track condiments, cooking oils, beverages, and snacks. Small items add up. Be honest about everything you consume.",
              },
              {
                n: "4",
                title: "Plan meals ahead",
                body: "Planning meals makes tracking easier and helps you stay within your calorie target. Meal prep on weekends can save time during busy weeks.",
              },
              {
                n: "5",
                title: "Focus on nutrient density",
                body: "While calories matter, nutrient density matters too. Prioritize whole foods that provide vitamins, minerals, and fiber along with calories.",
              },
              {
                n: "6",
                title: "Adjust as needed",
                body: "Your calorie needs may change over time. If you're not seeing results, reassess your intake and activity level. Adjust your targets accordingly.",
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
            Practical Tips for Calorie Management
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your calorie needs accurately</>],
              [<><strong>Eat whole foods</strong> — more filling, fewer calories</>],
              [<><strong>Don&apos;t go too low</strong> — never eat below BMR</>],
              [<><strong>Stay hydrated</strong> — water supports metabolism</>],
              [<><strong>Get enough protein</strong> — preserves muscle mass</>],
              [<><strong>Exercise regularly</strong> — increases calorie burn</>],
              [<><strong>Get enough sleep</strong> — affects hunger hormones</>],
              [<><strong>Be patient</strong> — sustainable changes take time</>],
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
                q: "How are calorie needs calculated?",
                a: "Calorie needs are calculated by first determining your BMR using the Mifflin-St Jeor equation, then multiplying by an activity factor to get TDEE, and finally adjusting based on your goal (lose, maintain, or gain weight).",
              },
              {
                q: "How many calories should I eat to lose weight?",
                a: "To lose weight, create a calorie deficit of 500-1,000 calories per day below your TDEE. This typically results in 1-2 pounds of weight loss per week. Never go below your BMR.",
              },
              {
                q: "Is calorie counting necessary for weight loss?",
                a: "Not strictly necessary, but it's effective. Some people succeed with intuitive eating or portion control. However, calorie counting provides awareness and accountability that helps many people achieve their goals.",
              },
              {
                q: "Why do my calorie needs change over time?",
                a: "Calorie needs change as your weight changes, as you age, and as your activity level changes. Muscle mass also affects calorie needs. Recalculate periodically as these factors change.",
              },
              {
                q: "Can I eat anything as long as I stay within calories?",
                a: "Technically yes for weight management, but not optimal for health. Focus on nutrient-dense foods that provide vitamins, minerals, and fiber. Quality matters along with quantity.",
              },
              {
                q: "How accurate are calorie calculators?",
                a: "Calorie calculators provide estimates that are accurate for most people within about 10%. Individual variations exist due to genetics, metabolism, and other factors. Use as a starting point and adjust based on results.",
              },
              {
                q: "What happens if I eat too few calories?",
                a: "Eating too few calories can slow your metabolism, cause muscle loss, lead to nutrient deficiencies, and be harmful to health. Never go below your BMR. Minimum intake is typically 1,200 for women and 1,500 for men.",
              },
              {
                q: "Should I track calories forever?",
                a: "Not necessarily. Many people track calories initially to learn portion sizes and understand their needs, then transition to intuitive eating once they've developed healthy habits. Track as long as it's helpful for you.",
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
            Understanding your calorie needs is fundamental to achieving your health and fitness goals. The calculator above provides a personalized estimate based on your individual factors.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that calorie needs are estimates, not precise prescriptions. Your actual needs may vary based on individual factors. Use the calculated values as a starting point and adjust based on your results.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on sustainable habits rather than extreme measures. Build a balanced diet with whole foods, stay active, and prioritize overall health. Calorie management is a tool, not the goal itself.
          </p>
          <div className="pull-quote mt-8">
            The best calorie plan is one you can sustain long-term. Focus on progress, not perfection, and build habits that support your health for life.
          </div>
        </section>

      </div>
    </article>
  );
}
