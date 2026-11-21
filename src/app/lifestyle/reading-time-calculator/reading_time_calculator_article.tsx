import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ReadingTimeArticle() {
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
          <span className="meta-tag">Lifestyle · Education & Productivity</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Reading Time Calculator: Estimate How Long to Read
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to calculating reading time and improving reading speed
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        {/* ── INTRO ── */}
        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Whether you're a student planning your study schedule, a professional
            estimating how long to review documents, or a curious reader wondering
            when you'll finish that novel, knowing your reading time is invaluable.
            Reading speed varies significantly between individuals, and understanding
            your personal pace can help you plan better and set realistic goals.
          </p>
          <p className="mb-5">
            A Reading Time Calculator helps you estimate how long it will take to
            read any text based on word count and reading speed. This tool is
            particularly useful for content creators, students, teachers, and anyone
            who needs to manage their reading time effectively.
          </p>
          <p>
            Beyond simple time estimation, understanding reading speed and how to
            improve it can enhance your productivity and learning efficiency. This
            guide explores the factors that affect reading speed, average benchmarks,
            and practical tips for becoming a faster, more efficient reader.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── HOW IT WORKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            How Does the Reading Time Calculator Work?
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The calculator divides the total word count by your reading speed
            (words per minute) to determine the total reading time in minutes.
            It then converts this to hours if needed and estimates the number of
            pages based on an average of 250 words per page.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            To use the calculator:
          </p>
          <ul className="space-y-2 text-slate-800 dark:text-slate-100 text-base">
            {[
              [
                "Enter Word Count",
                "Input the total number of words in the text you want to read.",
              ],
              [
                "Select Reading Speed",
                "Choose your reading speed in words per minute (wpm), or use the average of 200-250 wpm.",
              ],
              [
                "View Results",
                "See the estimated reading time in minutes and hours, plus the approximate page count.",
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
            The results provide a realistic estimate that helps you plan your
            reading schedule and manage your time more effectively.
          </p>
        </section>

        <hr className="rule-divider" />

        {/* ── FORMULA ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Reading Time Formula
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            The calculation is straightforward but essential for time management:
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-100 mb-2">
            Basic Reading Time Formula:
          </p>
          <div className="formula-block">
            <pre>{`Reading Time (minutes) = Word Count / Reading Speed (wpm)
Reading Time (hours) = Reading Time (minutes) / 60
Estimated Pages = Word Count / 250

Example:
Word Count: 5,000 words
Reading Speed: 250 wpm
Reading Time = 5,000 / 250 = 20 minutes
Estimated Pages = 5,000 / 250 = 20 pages`}</pre>
          </div>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4 mt-5">
            This formula assumes continuous reading without breaks. In practice,
            you may want to add 10-20% to account for pauses, comprehension time,
            and brief breaks.
          </p>
          <div className="aside-callout">
            <strong>Pro Tip:</strong> For complex technical or academic material,
            use a slower reading speed (150-200 wpm) to account for the need for
            deeper comprehension and re-reading.
          </div>
        </section>

        <hr className="rule-divider" />

        {/* ── READING SPEED BENCHMARKS ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Reading Speed Benchmarks
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-5">
            Understanding where your reading speed falls can help you set realistic
            goals and identify areas for improvement:
          </p>
          
          {[
            {
              heading: "100-150 wpm: Slow Reader",
              description: "Typical for beginners, people learning a new language, or reading complex technical material. Focus on comprehension first.",
            },
            {
              heading: "150-200 wpm: Below Average",
              description: "Common among casual readers who read occasionally. Room for improvement with practice and technique refinement.",
            },
            {
              heading: "200-250 wpm: Average",
              description: "The typical reading speed for most adults. This is the baseline used in most reading time calculations.",
            },
            {
              heading: "250-300 wpm: Above Average",
              description: "Indicates good reading efficiency. Common among college students and professionals who read regularly.",
            },
            {
              heading: "300-350 wpm: Fast Reader",
              description: "Excellent reading speed while maintaining comprehension. Achieved through practice and improved techniques.",
            },
            {
              heading: "350+ wpm: Speed Reader",
              description: "Exceptional reading speed, often achieved through specialized training. May require techniques like skimming and scanning.",
            },
          ].map(({ heading, description }) => (
            <div key={heading} className="state-card">
              <h3>{heading}</h3>
              <p className="text-sm text-slate-800 dark:text-slate-300 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        <hr className="rule-divider" />

        {/* ── IMPROVING READING SPEED ── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Tips to Improve Reading Speed
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            Want to read faster while maintaining comprehension? Try these strategies:
          </p>
          <ul className="tip-list space-y-3 text-slate-800 dark:text-slate-100">
            <li>
              <strong>Eliminate Subvocalization:</strong> Stop pronouncing words
              in your head as you read. This internal speech slows you down to
              talking speed (150-200 wpm). Practice reading faster than you can
              "speak" internally.
            </li>
            <li>
              <strong>Use a Pointer:</strong> Use your finger, a pen, or a cursor
              to guide your eyes across the text. This prevents regression
              (re-reading) and helps maintain a steady pace.
            </li>
            <li>
              <strong>Expand Your Peripheral Vision:</strong> Try to read groups
              of words rather than individual words. With practice, you can capture
              phrases or entire lines in a single glance.
            </li>
            <li>
              <strong>Pre-Read the Material:</strong> Scan headings, subheadings,
              and first sentences of paragraphs before diving in. This creates a
              mental framework that speeds up actual reading.
            </li>
            <li>
              <strong>Read Regularly:</strong> Like any skill, reading improves
              with practice. Set aside time daily to read, gradually increasing
              your speed and tackling more challenging material.
            </li>
            <li>
              <strong>Minimize Distractions:</strong> Read in a quiet environment
              free from interruptions. Each distraction breaks your flow and
              requires time to regain focus.
            </li>
            <li>
              <strong>Choose Appropriate Material:</strong> Start with simpler
              texts to build speed, then gradually progress to more complex
              material. Don't sacrifice comprehension for speed.
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
                q: "What is the average reading speed?",
                a: "The average reading speed for adults is approximately 200-250 words per minute for non-technical material. This is the baseline used in most reading time calculations.",
              },
              {
                q: "How can I test my reading speed?",
                a: "Time yourself reading a passage of known word count for one minute. Count the words you read in that minute to determine your words per minute (wpm) speed.",
              },
              {
                q: "Does reading speed affect comprehension?",
                a: "Reading too fast can reduce comprehension. The key is finding the optimal speed where you maintain understanding while increasing efficiency. Quality of comprehension matters more than speed.",
              },
              {
                q: "Why do some people read faster than others?",
                a: "Factors include vocabulary size, familiarity with the subject matter, reading practice, use of reading techniques, and natural cognitive processing speed. All of these can be improved with practice.",
              },
              {
                q: "Is speed reading effective?",
                a: "Speed reading techniques can increase reading speed, but often at the cost of comprehension. For most people, focusing on efficient reading (250-300 wpm with good comprehension) is more practical than extreme speed reading.",
              },
              {
                q: "How does reading on screens compare to paper?",
                a: "Studies show people tend to read slightly slower on screens (about 10% slower) and may comprehend less. However, this gap is narrowing as people become more accustomed to digital reading.",
              },
              {
                q: "Should I read faster for fiction or non-fiction?",
                a: "Fiction can often be read faster as you can skim descriptive passages and focus on dialogue and plot. Non-fiction, especially technical material, typically requires slower, more careful reading for full comprehension.",
              },
              {
                q: "How many words are on an average page?",
                a: "The standard estimate is 250 words per page for a typical book. However, this varies: academic texts may have 300-350 words per page, while children's books may have fewer than 200.",
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
            Understanding your reading time is a valuable skill for effective time
            management and productivity. Whether you're a student, professional,
            or casual reader, knowing how long it will take to read material helps
            you plan better and set realistic goals.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100 mb-4">
            The Reading Time Calculator provides instant estimates based on word
            count and reading speed, while understanding reading speed benchmarks
            and improvement techniques can help you become a more efficient reader
            over time.
          </p>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the calculator above to estimate reading time for any text, and
            consider practicing the speed improvement techniques to enhance your
            reading efficiency while maintaining comprehension. Remember: the goal
            is not just to read faster, but to read better.
          </p>
        </section>
      </div>
    </article>
  );
}
