/**
 * Breadcrumb navigation component with JSON-LD schema.
 *
 * Server component — renders accessible breadcrumb trail
 * and injects BreadcrumbList structured data.
 */

import Link from "next/link";
import {
  generateBreadcrumbSchema,
  type BreadcrumbItem,
} from "@/lib/seo/schemas";
import { JsonLd } from "./JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-2 text-sm">
        <ol className="flex items-center flex-wrap gap-1.5 text-slate-400 dark:text-slate-400">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.href}-${index}`}
                className="flex items-center gap-1.5"
              >
                {index > 0 && (
                  <i
                    className="fas fa-chevron-right text-[9px] text-slate-300 dark:text-slate-800"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span className="text-slate-800 dark:text-slate-100 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
