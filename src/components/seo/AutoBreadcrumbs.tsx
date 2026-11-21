import Link from "next/link";
import { BreadcrumbItem } from "@/data/calculators";

export function AutoBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items || items.length === 0) return null;
  return (
    <nav
      className="flex max-w-[1400px] px-4 sm:px-8 text-sm text-slate-500 dark:text-slate-400 mb-3"
      aria-label="Breadcrumb"
    >
      <ol className="flex space-x-1 md:space-x-2 whitespace-nowrap overflow-x-auto pb-1 scrollbar-hide">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.href}-${index}`}
              className="inline-flex items-center"
            >
              {index > 0 && (
                <i
                  className="fas fa-chevron-right text-[10px] mx-2 opacity-50"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="text-slate-800 dark:text-slate-100 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
