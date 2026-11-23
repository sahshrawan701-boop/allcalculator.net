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
            className="group flex items-center justify-between px-3.5 py-3
    bg-white dark:bg-[#0F172A]
    rounded-xl border border-[#E2E8F0] dark:border-[#1E293B]
    text-[#0000FF] dark:text-[#93A8FF]
    text-sm font-medium
    hover:border-[#CBD5E1] dark:hover:border-[#334155]
    hover:text-[#0000CC] dark:hover:text-[#B4C2FF]
    hover:bg-[#F8FAFF] dark:hover:bg-[#172554]
    shadow-[0_1px_2px_rgba(0,0,0,0.03)]
    hover:shadow-sm hover:-translate-y-0.5
    focus:outline-none focus-visible:ring-2
    focus-visible:ring-[#93C5FD] dark:focus-visible:ring-[#526FFF]
    transition-all duration-150"
          >
            <span className="flex items-center gap-3 min-w-0">
              <span
                className="w-8 h-8 rounded-lg
        bg-[#F1F5F9] dark:bg-[#1E293B]
        flex items-center justify-center flex-shrink-0
        group-hover:bg-[#DBEAFE] dark:group-hover:bg-[#1E3A8A]
        transition-colors"
              >
                <i
                  className={`fas ${calc.icon} text-[#0000FF] dark:text-[#93A8FF]
          group-hover:text-[#0000CC] dark:group-hover:text-[#B4C2FF]
          text-xs transition-colors`}
                  aria-hidden="true"
                />
              </span>

              <span className="truncate hover:underline">{calc.name}</span>
            </span>

            <i
              className="fas fa-arrow-right text-xs
      text-[#0000FF] dark:text-[#93A8FF]
      group-hover:text-[#0000CC] dark:group-hover:text-[#B4C2FF]
      group-hover:translate-x-0.5
      transition-all duration-150 flex-shrink-0 ml-2"
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
                {directCalcs.length}{" "}
                {directCalcs.length === 1 ? "calculator" : "calculators"}
              </span>
            </div>

            <CalculatorGrid calculators={directCalcs} />
          </section>
        );
      })}
    </div>
  );
}
