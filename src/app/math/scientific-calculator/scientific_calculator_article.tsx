import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function ScientificCalculatorArticle() {
  return (
    <article
      className={`w-full max-w-[75ch] mx-auto px-6 py-16 text-[18px] leading-[1.8] font-sans text-slate-800 dark:text-slate-100 ${inter.variable}`}
    >
      <style>{`
        .article-root { font-family: var(--font-inter), sans-serif; }
        .display-font { font-family: var(--font-inter), sans-serif; }
        .article-root h2 { font-family: var(--font-inter), sans-serif; }
        .article-root h3 { font-family: var(--font-inter), sans-serif; }

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
        <header className="mb-12 text-center">
          <span className="meta-tag">Math · Scientific Calculation</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Scientific Calculator: Advanced Mathematical Operations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to scientific calculator functions and operations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Scientific calculators extend beyond basic arithmetic to include advanced
            mathematical functions essential for science, engineering, and higher
            mathematics. From trigonometric functions to logarithms and exponentials,
            these tools are indispensable for students and professionals.
          </p>
          <p className="mb-5">
            A Scientific Calculator provides comprehensive mathematical capabilities including
            trigonometry, logarithms, exponentials, roots, powers, and memory functions.
            This tool is essential for students in STEM fields, engineers, scientists,
            and anyone working with advanced mathematics.
          </p>
          <p>
            Mastering scientific calculator functions builds efficiency in calculations
            and provides the computational foundation for advanced coursework and
            professional work.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What is the difference between degrees and radians?",
                a: "Degrees and radians are two units for measuring angles. 360° equals 2π radians. Most scientific calculators allow switching between modes. Radians are preferred in calculus and higher mathematics.",
              },
              {
                q: "How do I use memory functions?",
                a: "Memory functions (M+, M-, MR, MC) allow you to store and recall values. Use M+ to add to memory, M- to subtract, MR to recall, and MC to clear memory.",
              },
              {
                q: "What is the difference between natural log and log base 10?",
                a: "Natural log (ln) uses base e (approximately 2.718). Log base 10 (log) uses base 10. Natural logs are common in calculus, while base 10 logs are used in many engineering applications.",
              },
              {
                q: "How do I calculate inverse trigonometric functions?",
                a: "Use the inverse functions (sin⁻¹, cos⁻¹, tan⁻¹) to find angles given their trigonometric values. Remember to check the correct angle mode (degrees or radians).",
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            Conclusion
          </h2>
          <p className="text-lg leading-relaxed text-slate-800 dark:text-slate-100">
            Use the Scientific Calculator for advanced mathematical operations.
            Mastering scientific calculator functions is essential for STEM education and professional work.
          </p>
        </section>
      </div>
    </article>
  );
}
