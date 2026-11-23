"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  startTransition,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CALCULATORS, PARENT_CATEGORIES } from "@/data/calculators";
import { US_STATES } from "@/data/states";
import { STATE_CALCULATORS } from "@/data/stateCalculators";
import { fillTemplate } from "@/lib/seo/state-seo";

const STATE_CALC_INDEX = US_STATES.flatMap((state) =>
  STATE_CALCULATORS.map((calc) => ({
    name: fillTemplate(calc.nameTemplate, state),
    parentCategoryId: calc.category?.toLowerCase() || "other",
    href: `/${calc.categorySlug}/${state.id}-${calc.id}`,
    icon: calc.icon,
  })),
);

const ALL_SEARCHABLE_CALCULATORS = [...CALCULATORS, ...STATE_CALC_INDEX];

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function highlight(text: string, query: string) {
  if (!query.trim()) return escapeHtml(text);
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${terms.join("|")})`, "gi");

  const parts = text.split(re);
  return parts
    .map((part, i) => {
      if (i % 2 === 1) {
        return `<mark class="bg-indigo-100 dark:bg-indigo-900/40 text-inherit rounded px-0.5">${escapeHtml(
          part,
        )}</mark>`;
      }
      return escapeHtml(part);
    })
    .join("");
}

export default function SearchBar({
  variant = "hero",
}: {
  variant?: "hero" | "navbar";
}) {
  const router = useRouter();

  const search = useCallback((q: string) => {
    const query = q.trim().toLowerCase();
    if (!query) return [];

    const terms = query.split(/\s+/).filter(Boolean);

    const scored = ALL_SEARCHABLE_CALCULATORS.map((c) => {
      const name = c.name.toLowerCase();
      const cat = (c.parentCategoryId || "").toLowerCase();

      let matches = true;
      for (const term of terms) {
        if (!name.includes(term) && !cat.includes(term)) {
          matches = false;
          break;
        }
      }

      if (!matches) return { item: c, score: 0 };

      let score = 1;

      if (name === query) score += 100;
      else if (name.startsWith(query)) score += 50;
      else if (name.includes(query)) score += 30;

      if (cat === query) score += 20;
      else if (cat.includes(query)) score += 10;

      if (new RegExp(`\\b${query}\\b`).test(name)) score += 15;

      return { item: c, score };
    }).filter((x) => x.score > 0);

    scored.sort((a, b) => b.score - a.score);

    return scored.map((x) => x.item).slice(0, 10);
  }, []);

  const [query, setQuery] = useState("");
  const [manuallyClosed, setManuallyClosed] = useState(false);
  const rawResults = query.trim().length >= 1 ? search(query.trim()) : [];
  const results = Array.from(
    new Map(rawResults.map((item) => [item.href, item])).values(),
  );
  const open = results.length > 0 && !manuallyClosed;
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset manual closure when query changes
  useEffect(() => {
    startTransition(() => {
      setManuallyClosed(false);
    });
  }, [query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setManuallyClosed(true);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setManuallyClosed(true);
      inputRef.current?.blur();
    }
    if (e.key === "ArrowDown" && open) {
      e.preventDefault();
      const first =
        containerRef.current?.querySelector<HTMLAnchorElement>("[data-result]");
      first?.focus();
    }
  }

  function handleResultKeyDown(
    e: React.KeyboardEvent<HTMLAnchorElement>,
    idx: number,
  ) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const items =
        containerRef.current?.querySelectorAll<HTMLAnchorElement>(
          "[data-result]",
        );
      if (items?.[idx + 1]) items[idx + 1].focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (idx === 0) {
        inputRef.current?.focus();
      } else {
        const items =
          containerRef.current?.querySelectorAll<HTMLAnchorElement>(
            "[data-result]",
          );
        if (items?.[idx - 1]) items[idx - 1].focus();
      }
    }
  }

  return (
    <div ref={containerRef} className="relative w-full" role="search">
      {variant === "hero" && (
        <label
          htmlFor="searchInput"
          className="block text-md font-medium text-slate-800 dark:text-slate-100 mb-2 ml-3"
        >
          Find Your Calculator
        </label>
      )}
      <form
        role="search"
        aria-label="Calculator search"
        onSubmit={(e) => {
          e.preventDefault();
          if (results.length > 0) {
            router.push(results[0].href);
            setManuallyClosed(true);
          } else {
            setManuallyClosed(false);
          }
        }}
        className="relative"
      >
        <input
          ref={inputRef}
          id="searchInput"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search calculators (e.g., 'mortgage', 'BMI')…"
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls="searchResultsList"
          className={`w-full border-[1.5px] border-slate-200 dark:bg-slate-900 dark:border-slate-800 rounded-full bg-white text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-600 ${
            variant === "hero"
              ? "shadow-sm dark:shadow-none py-2.5 sm:py-3 pl-4 sm:pl-5 pr-12 sm:pr-14 text-sm sm:text-base"
              : "py-2.5 pl-4 pr-10 text-sm"
          }`}
        />
        <button
          type="submit"
          aria-label="Submit search"
          className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-gray-500 flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
            variant === "hero"
              ? "w-10 h-10 sm:w-12 sm:h-12 right-0.5"
              : "w-10 h-8"
          }`}
        >
          <i
            className={`fas fa-search ${variant === "hero" ? "text-lg sm:text-xl" : "text-lg"}`}
            aria-hidden="true"
          />
        </button>
      </form>

      {/* Results dropdown */}
      {open && (
        <div
          id="searchResultsContainer"
          role="listbox"
          aria-label="Search results"
          className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[200] max-h-[360px] overflow-y-auto"
        >
          <div
            id="searchResultsCount"
            aria-live="polite"
            className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-900 rounded-t-2xl sticky top-0"
          >
            {results.length === 0
              ? "No results"
              : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query.trim()}"`}
          </div>
          <ul id="searchResultsList" role="list" className="list-none p-0 m-0">
            {results.length === 0 ? (
              <li className="py-8 text-center text-slate-400 dark:text-slate-400 italic text-sm">
                No calculators found for &ldquo;{query.trim()}&rdquo;
              </li>
            ) : (
              results.map((c, idx) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    data-result
                    role="option"
                    tabIndex={0}
                    onKeyDown={(e) => handleResultKeyDown(e, idx)}
                    onClick={() => setManuallyClosed(true)}
                    className="flex justify-between items-center px-4 py-3.5 border-b border-slate-100 dark:border-slate-800 last:border-b-0 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/40 focus:bg-slate-50 dark:focus:bg-slate-700/40 focus:outline-none transition-colors duration-100 no-underline"
                  >
                    <span className="flex justify-between w-full">
                      <span
                        className="font-medium text-sm block mb-0.5"
                        dangerouslySetInnerHTML={{
                          __html: highlight(c.name, query.trim()),
                        }}
                      />
                      <span className="text-xs text-slate-400 dark:text-slate-400 mr-3">
                        <i
                          className={`fas ${c.icon} mr-1`}
                          aria-hidden="true"
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlight(
                              c.parentCategoryId || "",
                              query.trim(),
                            ),
                          }}
                        />
                      </span>
                    </span>
                    <i
                      className="fas fa-chevron-right text-xs text-slate-300 dark:text-slate-800"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
