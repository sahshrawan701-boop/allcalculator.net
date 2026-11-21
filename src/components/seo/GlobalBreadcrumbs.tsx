"use client";

import { usePathname } from "next/navigation";
import { AutoBreadcrumbs } from "./AutoBreadcrumbs";
import { getCalculatorBySlug, generateBreadcrumbs, PARENT_CATEGORIES } from "@/data/calculators";
import { parseStateSlug, fillTemplate } from "@/lib/seo/state-seo";

export function GlobalBreadcrumbs() {
  const pathname = usePathname();
  
  if (!pathname || pathname === "/" || pathname === "/login" || pathname === "/signup") return null;

  const segments = pathname.replace(/^\//, '').split('/');
  const slug = segments.pop() || "";
  const categorySegment = segments[0] || "";
  
  // 1. Is it a calculator?
  const calculator = getCalculatorBySlug(slug);
  if (calculator) {
    return <AutoBreadcrumbs items={generateBreadcrumbs(calculator)} />;
  }

  // 2. Is it a state-based calculator? (e.g., california-tax-calculator)
  const stateMatch = parseStateSlug(slug);
  if (stateMatch) {
    const parent = PARENT_CATEGORIES.find(p => p.slug === stateMatch.template.categorySlug || p.name === stateMatch.template.category);
    const categoryLabel = parent ? parent.name + " Calculators" : stateMatch.template.category + " Calculators";
    const categoryHref = "/" + stateMatch.template.categorySlug;
    const calcName = fillTemplate(stateMatch.template.nameTemplate, stateMatch.state);

    return <AutoBreadcrumbs items={[
      { label: "Home", href: "/" },
      { label: categoryLabel, href: categoryHref },
      { label: calcName, href: pathname }
    ]} />;
  }

  // 3. Is it a parent category?
  const parent = PARENT_CATEGORIES.find(p => p.slug === slug || p.slug === categorySegment);
  if (parent) {
    return <AutoBreadcrumbs items={[
      { label: "Home", href: "/" },
      { label: parent.name + " Calculators", href: "/" + parent.slug }
    ]} />;
  }

  // 4. Fallback for other pages
  return <AutoBreadcrumbs items={[
    { label: "Home", href: "/" },
    { label: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), href: pathname }
  ]} />;
}
