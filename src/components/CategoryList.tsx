import Link from "next/link";
import {
  CATEGORY_TREE,
  getCalculatorsBySubCategory,
  Calculator,
} from "@/data/calculators";

function CalculatorGrid({ calculators }: { calculators: Calculator[] }) {
  if (!calculators.length) return null;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {calculators.map((calc) => (
        <li key={calc.href}>
          <Link
            href={calc.href}
            className="group flex items-center justify-between px-3.5 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-sm hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-150"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100/70 dark:group-hover:bg-indigo-900/40 transition-colors">
                <i
                  className={`fas ${calc.icon} text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-xs transition-colors`}
                  aria-hidden="true"
                />
              </span>
              <span className="truncate">{calc.name}</span>
            </span>
            <i
              className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function CategoryList({
  parentCategoryId,
}: {
  parentCategoryId: string;
}) {
  const parentNode = CATEGORY_TREE.find((p) => p.id === parentCategoryId);
  if (!parentNode) return null;

  return (
    <div className="pt-6 space-y-10">
      {parentNode.subcategories.map((subCat) => {
        const directCalcs = getCalculatorsBySubCategory(subCat.id);
        if (!directCalcs.length) return null;

        return (
          <section key={subCat.id}>
            <div className="flex items-center justify-between pb-2.5 mb-4 border-b border-slate-200/80 dark:border-slate-800">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100">
                {subCat.label}
              </h2>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                {directCalcs.length} {directCalcs.length === 1 ? "calculator" : "calculators"}
              </span>
            </div>

            <CalculatorGrid calculators={directCalcs} />
          </section>
        );
      })}
    </div>
  );
}
