import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function BMRArticle() {
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
          <span className="meta-tag">Health · Metabolism</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            BMR Calculator: Understand Your Basal Metabolic Rate
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A complete guide for metabolic health
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            You want to lose weight, gain muscle, or just maintain your current physique. But how many calories should you actually eat? The answer starts with your Basal Metabolic Rate (BMR) — the number of calories your body burns at complete rest.
          </p>
          <p className="mb-5">
            BMR represents the minimum energy your body needs to perform vital functions like breathing, circulating blood, and producing cells. It accounts for about 60-75% of your total daily calorie expenditure. Understanding your BMR is the foundation of any nutrition plan.
          </p>
          <p className="mb-5">
            But BMR varies significantly based on age, gender, weight, height, and body composition. Two people with the same weight can have very different BMRs due to differences in muscle mass and metabolism.
          </p>
          <p>
            Use the BMR calculator above to determine your basal metabolic rate, calculate your total daily energy expenditure, and create a personalized nutrition plan that aligns with your goals.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How BMR Calculation Works
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            BMR is calculated using equations that estimate resting energy expenditure based on weight, height, age, and gender. The most widely used equations are the Mifflin-St Jeor equation and the Harris-Benedict equation.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Mifflin-St Jeor Equation (Men):
          </p>
          <div className="formula-block">
            <pre>BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5</pre>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2 mt-4">
            Mifflin-St Jeor Equation (Women):
          </p>
          <div className="formula-block">
            <pre>BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Here&apos;s a concrete example:
          </p>
          <ul className="space-y-1 text-slate-800 dark:text-slate-100 text-base mb-4">
            {[
              ["Weight", "70 kg (154 lbs)"],
              ["Height", "175 cm (5'9\")"],
              ["Age", "30 years"],
              ["Gender", "Male"],
              ["Calculation", "(10 × 70) + (6.25 × 175) - (5 × 30) + 5"],
              ["BMR", "1,692 calories/day"],
            ].map(([item, val]) => (
              <li key={item} className="flex gap-2">
                <span className="font-mono font-bold text-indigo-700 dark:text-indigo-400 w-48 shrink-0">{item}</span>
                <span>= {val}</span>
              </li>
            ))}
          </ul>
          <div className="aside-callout">
            The Mifflin-St Jeor equation is considered more accurate than the original Harris-Benedict equation for modern populations. It accounts for differences in body composition and is widely used by healthcare professionals.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TDEE ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            From BMR to Total Daily Energy Expenditure (TDEE)
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            BMR is your resting metabolism, but you don&apos;t spend all day at rest. Your Total Daily Energy Expenditure (TDEE) includes BMR plus calories burned through physical activity and the thermic effect of food.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            To calculate TDEE, multiply your BMR by an activity factor that represents your lifestyle:
          </p>

          {[
            {
              heading: "Sedentary: Little to no exercise",
              rows: [
                ["Activity Factor", "1.2"],
                ["Description", "Desk job, no regular exercise"],
                ["TDEE Example", "1,692 × 1.2 = 2,030 calories"],
              ],
              note: "Most people with office jobs fall into this category. Even if you walk occasionally, if you don't exercise regularly, use this factor.",
            },
            {
              heading: "Lightly Active: Light exercise 1-3 days/week",
              rows: [
                ["Activity Factor", "1.375"],
                ["Description", "Light exercise or sports 1-3 days/week"],
                ["TDEE Example", "1,692 × 1.375 = 2,327 calories"],
              ],
              note: "This includes people who walk regularly or do light exercise a few times per week. You're active but not intensely.",
            },
            {
              heading: "Moderately Active: Moderate exercise 3-5 days/week",
              rows: [
                ["Activity Factor", "1.55"],
                ["Description", "Moderate exercise or sports 3-5 days/week"],
                ["TDEE Example", "1,692 × 1.55 = 2,623 calories"],
              ],
              note: "This is the category for people who exercise regularly at a moderate intensity. You might jog, swim, or cycle several times per week.",
            },
            {
              heading: "Very Active: Hard exercise 6-7 days/week",
              rows: [
                ["Activity Factor", "1.725"],
                ["Description", "Hard exercise or sports 6-7 days/week"],
                ["TDEE Example", "1,692 × 1.725 = 2,919 calories"],
              ],
              note: "This category is for athletes and highly active individuals. You exercise intensely almost every day and may have a physically demanding job.",
            },
            {
              heading: "Extra Active: Very hard exercise, physical job",
              rows: [
                ["Activity Factor", "1.9"],
                ["Description", "Very hard exercise, physical job, training twice/day"],
                ["TDEE Example", "1,692 × 1.9 = 3,215 calories"],
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

        {/* ── FACTORS AFFECTING BMR ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Factors That Affect BMR
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-6">
            Your BMR isn't fixed — it changes based on several factors. Understanding these factors helps you understand why your metabolism might be faster or slower than average.
          </p>
          <div className="space-y-5">
            {[
              {
                n: "1",
                title: "Muscle mass",
                body: "Muscle tissue burns more calories at rest than fat tissue. People with higher muscle mass have higher BMRs. Strength training can increase your BMR by building muscle.",
              },
              {
                n: "2",
                title: "Age",
                body: "BMR decreases with age as muscle mass naturally decreases and metabolism slows. After age 20, BMR drops about 2-3% per decade. Maintaining muscle helps slow this decline.",
              },
              {
                n: "3",
                title: "Gender",
                body: "Men typically have higher BMRs than women because they generally have more muscle mass and less body fat. This is why BMR equations include different calculations for men and women.",
              },
              {
                n: "4",
                title: "Body size",
                body: "Larger bodies require more energy to function. Taller and heavier people generally have higher BMRs. This is why BMR calculations include weight and height.",
              },
              {
                n: "5",
                title: "Genetics",
                body: "Some people naturally have faster or slower metabolisms due to genetic factors. While you can't change your genetics, you can influence your BMR through lifestyle choices.",
              },
              {
                n: "6",
                title: "Hormones",
                body: "Thyroid hormones significantly affect metabolism. Hypothyroidism can lower BMR, while hyperthyroidism can raise it. Other hormones like cortisol and insulin also play roles.",
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

        {/* ── USING BMR FOR GOALS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Using BMR to Achieve Your Goals
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Once you know your TDEE, you can adjust your calorie intake to achieve your goals. Whether you want to lose weight, gain muscle, or maintain, the principles are the same.
          </p>
          <table className="styled-table styled-table-plain mb-6">
            <thead>
              <tr>
                <th className="dark:text-slate-100">Goal</th>
                <th className="dark:text-slate-100">Calorie Adjustment</th>
                <th className="dark:text-slate-100">Expected Result</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Weight Loss", "TDEE - 500 calories/day", "~1 lb weight loss per week"],
                ["Aggressive Weight Loss", "TDEE - 1,000 calories/day", "~2 lbs weight loss per week"],
                ["Weight Maintenance", "Eat at TDEE", "Maintain current weight"],
                ["Muscle Gain", "TDEE + 200-500 calories/day", "Support muscle growth with training"],
                ["Aggressive Muscle Gain", "TDEE + 500+ calories/day", "Maximum muscle growth potential"],
              ].map(([goal, adjustment, result]) => (
                <tr key={goal}>
                  <td className="dark:text-slate-100">{goal}</td>
                  <td className="dark:text-slate-100">{adjustment}</td>
                  <td className="dark:text-slate-100">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="aside-callout">
            Never reduce calories below your BMR. Eating below your BMR can slow your metabolism, cause muscle loss, and be harmful to health. For most people, a minimum of 1,200 calories for women and 1,500 calories for men is recommended.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── TIPS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-5 leading-snug">
            Practical Tips for Metabolic Health
          </h2>
          <ul className="tip-list list-none p-0 text-slate-800 dark:text-slate-100 text-base">
            {[
              [<><strong>Use the calculator above</strong> — determine your BMR accurately</>],
              [<><strong>Build muscle</strong> — increase your metabolic rate</>],
              [<><strong>Don't starve yourself</strong> — never eat below BMR</>],
              [<><strong>Exercise regularly</strong> — boost your TDEE</>],
              [<><strong>Eat enough protein</strong> — preserve muscle mass</>],
              [<><strong>Get enough sleep</strong> — metabolism needs rest</>],
              [<><strong>Manage stress</strong> — stress affects hormones</>],
              [<><strong>Stay hydrated</strong> — water supports metabolism</>],
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
                q: "How is BMR calculated?",
                a: "BMR is calculated using equations that consider weight, height, age, and gender. The Mifflin-St Jeor equation is the most accurate for modern populations. The calculator above uses this equation.",
              },
              {
                q: "What is the difference between BMR and TDEE?",
                a: "BMR is your resting metabolic rate — calories burned at complete rest. TDEE includes BMR plus calories burned through physical activity and food digestion. TDEE is your total daily calorie burn.",
              },
              {
                q: "Why do men have higher BMR than women?",
                a: "Men typically have more muscle mass and less body fat than women. Muscle tissue burns more calories at rest than fat tissue. This difference in body composition leads to higher BMR in men.",
              },
              {
                q: "Does BMR change with age?",
                a: "Yes. BMR decreases with age as muscle mass naturally decreases and metabolism slows. After age 20, BMR drops about 2-3% per decade. Strength training can help maintain muscle and slow this decline.",
              },
              {
                q: "Can I increase my BMR?",
                a: "Yes. Building muscle through strength training increases BMR because muscle burns more calories at rest than fat. Other factors like adequate sleep, proper nutrition, and stress management also support healthy metabolism.",
              },
              {
                q: "What happens if I eat below my BMR?",
                a: "Eating below your BMR can slow your metabolism, cause muscle loss, and be harmful to health. Your body may enter starvation mode, reducing calorie burn. Always eat at least your BMR.",
              },
              {
                q: "How accurate are BMR calculators?",
                a: "BMR calculators provide estimates that are accurate for most people within about 5-10%. Individual variations exist due to genetics, body composition, and health conditions. For precise measurements, indirect calorimetry is used.",
              },
              {
                q: "Should I recalculate my BMR?",
                a: "Yes. Recalculate your BMR when your weight changes significantly (more than 10 lbs), your activity level changes, or as you age. Regular recalculation ensures your calorie targets remain accurate.",
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
            Understanding your BMR is the foundation of effective nutrition planning. It provides the baseline calorie needs your body requires to function at rest.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Remember that BMR is an estimate, not a precise measurement. Individual variations exist, and your actual calorie needs may differ from the calculated value. Use it as a starting point and adjust based on your results.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Focus on sustainable habits rather than extreme measures. Build muscle through strength training, eat adequate protein, and stay active. These approaches support a healthy metabolism for life.
          </p>
          <div className="pull-quote mt-8">
            Your metabolism is not fixed. With the right habits, you can support healthy metabolic function and achieve your body composition goals.
          </div>
        </section>

      </div>
    </article>
  );
}
