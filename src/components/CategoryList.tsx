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
            className={`flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl border-[1.5px] border-gray-200 dark:border-gray-800 text-slate-800 dark:text-slate-100 text-sm font-medium hover:border-blue-400 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all duration-150 group`}
          >
            <span className="flex items-center gap-2.5 min-w-0">
              <i
                className={`fas ${calc.icon} text-blue-500 text-xs flex-shrink-0`}
                aria-hidden="true"
              />
              <span className="truncate text-blue-500">{calc.name}</span>
            </span>
            <i
              className="fas fa-arrow-right text-xs text-slate-300 dark:text-slate-800 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all duration-150 flex-shrink-0 ml-2"
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
    <div className="pt-8 space-y-12">
      {parentNode.subcategories.map((subCat) => {
        const directCalcs = getCalculatorsBySubCategory(subCat.id);
        if (!directCalcs.length) return null;

        return (
          <section key={subCat.id}>
            <h2 className="text-xl sm:text-2xl font-[500] text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">
              {subCat.label}
            </h2>

            <CalculatorGrid calculators={directCalcs} />
          </section>
        );
      })}
    </div>
  );
}
