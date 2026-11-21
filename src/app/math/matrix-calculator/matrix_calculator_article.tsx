import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function MatrixArticle() {
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
          <span className="meta-tag">Math · Linear Algebra</span>
          <h1 className="display-font text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5 text-slate-900 dark:text-slate-100">
            Matrix Calculator: Perform Matrix Operations
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-sans tracking-wide uppercase">
            A comprehensive guide to matrix operations and linear algebra
          </p>
          <div className="mt-8 w-16 border-t-2 border-indigo-600 mx-auto"></div>
        </header>

        <section className="mb-8 text-lg leading-relaxed text-slate-800 dark:text-slate-100">
          <p className="dropcap mb-5">
            Matrices are fundamental to linear algebra, providing powerful tools for
            representing and solving systems of equations, transforming geometric objects,
            and analyzing data. From computer graphics to quantum mechanics, matrices
            are essential in modern science and engineering.
          </p>
          <p className="mb-5">
            A Matrix Calculator performs operations including addition, subtraction,
            multiplication, inversion, and determinant calculation. This tool is
            invaluable for students learning linear algebra, engineers solving systems,
            and data scientists working with transformations.
          </p>
          <p>
            Understanding matrix operations provides the foundation for advanced
            mathematics, machine learning, computer graphics, and many engineering applications.
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
                q: "When can two matrices be multiplied?",
                a: "Two matrices can be multiplied if the number of columns in the first matrix equals the number of rows in the second. The result has dimensions (rows of first) × (columns of second).",
              },
              {
                q: "What does the determinant tell us?",
                a: "The determinant indicates whether a matrix is invertible (non-zero determinant) or singular (zero determinant). It also represents the scaling factor of the linear transformation.",
              },
              {
                q: "What is the identity matrix?",
                a: "The identity matrix is a square matrix with ones on the main diagonal and zeros elsewhere. Multiplying any matrix by the identity matrix leaves it unchanged.",
              },
              {
                q: "How do I find the inverse of a matrix?",
                a: "For a 2×2 matrix, use the formula with the determinant. For larger matrices, use Gaussian elimination or adjugate methods. Not all matrices have inverses.",
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
            Use the Matrix Calculator to perform matrix operations accurately and efficiently.
            Mastering matrices is essential for linear algebra and its applications in science and engineering.
          </p>
        </section>
      </div>
    </article>
  );
}
