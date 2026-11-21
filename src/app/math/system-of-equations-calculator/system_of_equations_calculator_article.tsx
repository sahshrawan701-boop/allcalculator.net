import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function SystemOfEquationsArticle() {
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
          <span className="meta-tag">Math · Algebra & Systems</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            System of Equations Calculator: Solve Systems of Equations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to solving systems of linear equations
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Systems of equations involve multiple equations with multiple variables that
            must be satisfied simultaneously. Solving these systems is fundamental to
            algebra and has countless applications in engineering, economics, physics,
            and optimization problems.
          </p>
          <p className="mb-5">
            A System of Equations Calculator solves systems of linear equations using
            methods like substitution, elimination, or matrix operations. This tool is
            essential for students learning algebra, engineers solving network problems,
            and economists modeling equilibrium conditions.
          </p>
          <p>
            Understanding systems of equations provides the foundation for linear algebra,
            optimization, and modeling complex real-world scenarios.
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
                q: "What methods can solve systems of equations?",
                a: "Common methods include substitution (solve one equation, substitute), elimination (add/subtract equations to eliminate variables), and matrix methods (Gaussian elimination, Cramer's rule).",
              },
              {
                q: "When does a system have no solution?",
                a: "A system has no solution when equations are inconsistent—when they represent parallel lines that never intersect. Graphically, the lines don't cross.",
              },
              {
                q: "What does it mean to have infinite solutions?",
                a: "Infinite solutions occur when equations are dependent—when they represent the same line. Every point on the line satisfies all equations.",
              },
              {
                q: "How many equations do I need to solve for n variables?",
                a: "Generally, you need n independent equations to solve for n variables uniquely. Fewer equations means infinite solutions; more equations may be redundant or inconsistent.",
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
            Use the System of Equations Calculator to solve systems accurately and efficiently.
            Mastering systems of equations is essential for algebra and its applications.
          </p>
        </section>
      </div>
    </article>
  );
}
