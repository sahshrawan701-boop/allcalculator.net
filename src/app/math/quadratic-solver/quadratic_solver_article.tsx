import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function QuadraticSolverArticle() {
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
          <span className="meta-tag">Math · Algebra & Equations</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Quadratic Solver: Solve Quadratic Equations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to solving quadratic equations using the quadratic formula
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Quadratic equations are fundamental to algebra, appearing in countless
            applications from physics projectile motion to optimization problems. The
            ability to solve quadratic equations is essential for students, engineers,
            and scientists working with parabolic relationships.
          </p>
          <p className="mb-5">
            A Quadratic Solver finds solutions to equations of the form ax² + bx + c = 0
            using the quadratic formula. This tool provides both real and complex solutions,
            along with the discriminant that reveals the nature of the roots.
          </p>
          <p>
            Understanding quadratic equations builds the foundation for polynomial
            functions, conic sections, and many applications in science and engineering.
          </p>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-snug">
            The Quadratic Formula
          </h2>
          <div className="formula-block">
            <pre>{`x = (-b ± √(b² - 4ac)) / (2a)

Where:
a, b, c are coefficients from ax² + bx + c = 0
Discriminant: Δ = b² - 4ac

If Δ > 0: Two distinct real roots
If Δ = 0: One repeated real root
If Δ < 0: Two complex conjugate roots

Example:
x² - 5x + 6 = 0
a=1, b=-5, c=6
x = (5 ± √(25-24)) / 2 = (5 ± 1) / 2
x = 3 or x = 2`}</pre>
          </div>
        </section>

        <hr className="rule-divider" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {[
              {
                q: "What does the discriminant tell us?",
                a: "The discriminant (b² - 4ac) determines the nature of the roots. Positive means two real roots, zero means one repeated root, and negative means two complex roots.",
              },
              {
                q: "Can quadratic equations have no real solutions?",
                a: "Yes, when the discriminant is negative, the equation has no real solutions. The solutions are complex numbers with imaginary parts.",
              },
              {
                q: "What is the vertex form of a quadratic?",
                a: "The vertex form is a(x-h)² + k, where (h,k) is the vertex of the parabola. This form is useful for graphing and finding maximum/minimum values.",
              },
              {
                q: "How are quadratic equations used in real life?",
                a: "They model projectile motion, optimize areas, calculate profits/losses, describe electrical circuits, and appear in many engineering and physics applications.",
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
            Use the Quadratic Solver to find accurate solutions to quadratic equations.
            Mastering quadratics is essential for algebra and its applications in science and engineering.
          </p>
        </section>
      </div>
    </article>
  );
}
