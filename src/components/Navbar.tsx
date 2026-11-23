"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";
import SearchBar from "./SearchBar";
import SavedCalculatorsPanel from "./SavedCalculatorsPanel";
import { CALCULATORS } from "@/data/calculators";
import DollarIcon from "./DollarIcon";
import { useSession, signOut } from "next-auth/react";

const NAV_LINKS = [{ label: "Home", href: "/" }];

const SUB_CATEGORIES = [
  { label: "Finance", href: "/finance", icon: "fa-dollar-sign" },
  { label: "Mortgage", href: "/mortgage", icon: "fa-home" },
  { label: "Tax", href: "/tax", icon: "fa-file-invoice-dollar" },
  { label: "Salary", href: "/salary", icon: "fa-money-bill-wave" },
  { label: "Investing", href: "/investing", icon: "fa-chart-pie" },
  { label: "Business", href: "/business", icon: "fa-briefcase" },
  {
    label: "Health",
    href: "/health",
    icon: "fa-heartbeat",
  },
  {
    label: "Education",
    href: "/education",
    icon: "fa-graduation-cap",
  },
  { label: "Math", href: "/math", icon: "fa-calculator" },
  {
    label: "Technology",
    href: "/technology",
    icon: "fa-microchip",
  },
  { label: "Conversion", href: "/conversion", icon: "fa-exchange-alt" },
  { label: "Lifestyle", href: "/lifestyle", icon: "fa-spa" },
  { label: "Science", href: "/science", icon: "fa-flask" },
  { label: "Other", href: "/other", icon: "fa-ellipsis-h" },
];

// Accent colors per category for the sidebar
const CATEGORY_ACCENTS: Record<string, { bg: string; icon: string }> = {
  Finance: { bg: "#f0fdf4", icon: "#16a34a" },
  Mortgage: { bg: "#f0f9ff", icon: "#0284c7" },
  Tax: { bg: "#fefce8", icon: "#ca8a04" },
  Salary: { bg: "#f0fdf4", icon: "#15803d" },
  Investing: { bg: "#fffbeb", icon: "#d97706" },
  Business: { bg: "#f0f9ff", icon: "#075985" },
  Health: { bg: "#fff1f2", icon: "#e11d48" },
  Education: { bg: "#faf5ff", icon: "#7c3aed" },
  Math: { bg: "#fffbeb", icon: "#b45309" },
  Technology: { bg: "#f0f9ff", icon: "#0369a1" },
  Conversion: { bg: "#f5f3ff", icon: "#6d28d9" },
  Lifestyle: { bg: "#fdf4ff", icon: "#a21caf" },
  Science: { bg: "#f0fdf4", icon: "#059669" },
  Other: { bg: "#f8fafc", icon: "#475569" },
};

const CATEGORY_ACCENTS_DARK: Record<string, { bg: string; icon: string }> = {
  Finance: { bg: "rgba(22,163,74,0.12)", icon: "#4ade80" },
  Mortgage: { bg: "rgba(2,132,199,0.12)", icon: "#38bdf8" },
  Tax: { bg: "rgba(202,138,4,0.12)", icon: "#fbbf24" },
  Salary: { bg: "rgba(21,128,61,0.12)", icon: "#86efac" },
  Investing: { bg: "rgba(217,119,6,0.12)", icon: "#fcd34d" },
  Business: { bg: "rgba(7,89,133,0.12)", icon: "#7dd3fc" },
  Health: { bg: "rgba(225,29,72,0.12)", icon: "#fb7185" },
  Education: { bg: "rgba(124,58,237,0.12)", icon: "#c084fc" },
  Math: { bg: "rgba(180,83,9,0.12)", icon: "#fbbf24" },
  Technology: { bg: "rgba(3,105,161,0.12)", icon: "#38bdf8" },
  Conversion: { bg: "rgba(109,40,217,0.12)", icon: "#a78bfa" },
  Lifestyle: { bg: "rgba(162,28,175,0.12)", icon: "#e879f9" },
  Science: { bg: "rgba(5,150,105,0.12)", icon: "#34d399" },
  Other: { bg: "rgba(71,85,105,0.12)", icon: "#94a3b8" },
};

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isDark = theme === "dark";
  const previousPathname = useRef(pathname);

  // Close sidebar on route change
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setSidebarOpen(false);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  // Close sidebar on outside click
  useEffect(() => {
    if (!sidebarOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sidebarOpen]);

  // Lock body scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <style>{`
        .nb-sidebar {
          position: fixed; top: 0; right: 0; bottom: 0;
          width: min(88vw, 340px);
          z-index: 200;
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.32s cubic-bezier(0.22, 0.68, 0, 1.05);
          background: var(--nb-sidebar-bg);
          border-left: 1px solid var(--nb-border);
          will-change: transform;
        }
        .nb-sidebar.open { transform: translateX(0); }

        .nb-overlay {
          position: fixed; inset: 0; z-index: 190;
          background: rgba(0,0,0,0);
          transition: background 0.3s;
          pointer-events: none;
        }
        .nb-overlay.open {
          background: rgba(0,0,0,0.45);
          pointer-events: all;
          backdrop-filter: blur(2px);
        }

        .nb-cat-item {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          text-decoration: none;
          transition: background 0.13s, transform 0.13s;
          border: 1px solid transparent;
        }
        .nb-cat-item:hover { transform: translateX(2px); }
        .nb-cat-item.active { border-color: var(--nb-active-border); }

        .nb-cat-icon {
          width: 32px; height: 32px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 12px;
          transition: transform 0.15s;
        }
        .nb-cat-item:hover .nb-cat-icon { transform: scale(1.1); }

        .nb-sidebar-scroll::-webkit-scrollbar { width: 3px; }
        .nb-sidebar-scroll::-webkit-scrollbar-thumb { background: var(--nb-border); border-radius: 2px; }

        @keyframes nb-slide-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nb-sidebar.open .nb-cat-item {
          animation: nb-slide-in 0.25s cubic-bezier(0.22,0.68,0,1.1) both;
        }
        .nb-sidebar.open .nb-cat-item:nth-child(1)  { animation-delay: 0.03s; }
        .nb-sidebar.open .nb-cat-item:nth-child(2)  { animation-delay: 0.06s; }
        .nb-sidebar.open .nb-cat-item:nth-child(3)  { animation-delay: 0.09s; }
        .nb-sidebar.open .nb-cat-item:nth-child(4)  { animation-delay: 0.12s; }
        .nb-sidebar.open .nb-cat-item:nth-child(5)  { animation-delay: 0.15s; }
        .nb-sidebar.open .nb-cat-item:nth-child(6)  { animation-delay: 0.18s; }
        .nb-sidebar.open .nb-cat-item:nth-child(7)  { animation-delay: 0.20s; }
        .nb-sidebar.open .nb-cat-item:nth-child(8)  { animation-delay: 0.22s; }
        .nb-sidebar.open .nb-cat-item:nth-child(9)  { animation-delay: 0.24s; }
        .nb-sidebar.open .nb-cat-item:nth-child(10) { animation-delay: 0.26s; }
        .nb-sidebar.open .nb-cat-item:nth-child(11) { animation-delay: 0.28s; }
        .nb-sidebar.open .nb-cat-item:nth-child(12) { animation-delay: 0.30s; }
        .nb-sidebar.open .nb-cat-item:nth-child(13) { animation-delay: 0.31s; }
        .nb-sidebar.open .nb-cat-item:nth-child(14) { animation-delay: 0.32s; }
      `}</style>

      {/* CSS variables per theme */}
      <style>{`
        :root {
          --nb-sidebar-bg: #ffffff;
          --nb-border: #e4e4eb;
          --nb-text: #111118;
          --nb-text2: #5e5c70;
          --nb-active-border: rgba(99,102,241,0.25);
          --nb-active-bg: rgba(99,102,241,0.06);
          --nb-active-text: #4f46e5;
          --nb-hover-bg: #f5f5f8;
          --nb-section-label: #9997aa;
          --nb-divider: #f0f0f4;
        }
        .dark {
          --nb-sidebar-bg: #111116;
          --nb-border: #232330;
          --nb-text: #f0eef8;
          --nb-text2: #7a7890;
          --nb-active-border: rgba(129,140,248,0.3);
          --nb-active-bg: rgba(129,140,248,0.08);
          --nb-active-text: #818cf8;
          --nb-hover-bg: #18181f;
          --nb-section-label: #5e5c70;
          --nb-divider: #1a1a24;
        }
      `}</style>

      <nav
        className="fixed w-full top-0 z-[100] bg-white dark:bg-slate-950 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
        aria-label="Main navigation"
      >
        {/* ── Main bar ── */}
        <div className="px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-3">
          {/* Logo */}
          <Logo />

          {/* Desktop search */}
          {pathname !== "/" && (
            <div className="hidden lg:block flex-1 mx-6">
              <SearchBar variant="navbar" />
            </div>
          )}

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Auth section */}
            <div className="hidden lg:flex items-center gap-3 mr-2">
              {status === "loading" ? (
                <div className="w-16 h-8 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg"></div>
              ) : session ? (
                <div className="flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 pr-3">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4 border-r border-slate-200 dark:border-slate-800 pr-3">
                  <Link
                    href="/login"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm font-medium px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-150 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <i
                className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-sm`}
                aria-hidden="true"
              />
            </button>

            {/* Hamburger — mobile/tablet only (lg:hidden) */}
            <button
              onClick={() => setSidebarOpen((o) => !o)}
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              aria-controls="mobile-sidebar"
              className="lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-[5px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span
                className={`block w-[18px] h-[2px] bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${sidebarOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 ${sidebarOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-[18px] h-[2px] bg-slate-700 dark:bg-slate-200 rounded-full transition-all duration-300 origin-center ${sidebarOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* ── Sub-nav (desktop only) ── */}
        <div className="hidden lg:block border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="px-4 sm:px-6 lg:px-8">
            <ul className="flex justify-between items-center gap-0.5 overflow-x-auto text-sm font-medium text-slate-800 dark:text-slate-400 whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {SUB_CATEGORIES.map((cat) => {
                const path = pathname ?? "/";
                const normalizedPath =
                  path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
                const isActive =
                  normalizedPath === cat.href ||
                  normalizedPath.startsWith(`${cat.href}/`);
                return (
                  <li key={cat.label} className="relative flex-shrink-0 group">
                    <Link
                      href={cat.href}
                      className={`flex items-center gap-1.5 py-3 px-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors duration-150 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                          : "hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                    >
                      {cat.icon === "fa-dollar-sign" ? (
                        <DollarIcon className="w-4 h-4" />
                      ) : (
                        <i
                          className={`fas ${cat.icon} text-[0.8em] opacity-75`}
                          aria-hidden="true"
                        />
                      )}
                      <span>{cat.label}</span>
                    </Link>
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-indigo-500 origin-center transition-transform duration-250 ease-out ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-30"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* ── Overlay ── */}
      <div
        className={`nb-overlay lg:hidden ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* ── Right Sidebar ── */}
      <div
        id="mobile-sidebar"
        ref={sidebarRef}
        className={`nb-sidebar lg:hidden ${sidebarOpen ? "open" : ""}`}
        aria-label="Navigation sidebar"
        role="dialog"
        aria-modal="true"
      >
        {/* Sidebar header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 16px",
            borderBottom: "1px solid var(--nb-divider)",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--nb-text)",
                letterSpacing: "-0.01em",
              }}
            >
              All Calculators
            </div>
            <div
              style={{ fontSize: 11, color: "var(--nb-text2)", marginTop: 1 }}
            >
              {SUB_CATEGORIES.length} categories
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              border: "1px solid var(--nb-border)",
              background: "var(--nb-hover-bg)",
              color: "var(--nb-text2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all .15s",
              flexShrink: 0,
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--nb-text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--nb-text2)")
            }
          >
            <i className="fas fa-times text-sm" aria-hidden="true" />
          </button>
        </div>

        {/* Search — shown only if on a non-home page */}
        {pathname !== "/" && (
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid var(--nb-divider)",
              flexShrink: 0,
            }}
          >
            <SearchBar variant="navbar" />
          </div>
        )}

        {/* Categories list — scrollable */}
        <div
          className="nb-sidebar-scroll"
          style={{ flex: 1, overflowY: "auto", padding: "12px 12px 24px" }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--nb-section-label)",
              padding: "4px 4px 10px",
            }}
          >
            Categories
          </div>

          {SUB_CATEGORIES.map((cat) => {
            const path = pathname ?? "/";
            const normalizedPath =
              path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
            const isActive =
              normalizedPath === cat.href ||
              normalizedPath.startsWith(`${cat.href}/`);

            const lightAccent = CATEGORY_ACCENTS[cat.label] ?? {
              bg: "#f8fafc",
              icon: "#64748b",
            };
            const darkAccent = CATEGORY_ACCENTS_DARK[cat.label] ?? {
              bg: "rgba(100,116,139,0.1)",
              icon: "#94a3b8",
            };
            const accent = isDark ? darkAccent : lightAccent;

            return (
              <Link
                key={cat.label}
                href={cat.href}
                onClick={() => setSidebarOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className="nb-cat-item focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                style={{
                  background: isActive ? "var(--nb-active-bg)" : "transparent",
                  borderColor: isActive
                    ? "var(--nb-active-border)"
                    : "transparent",
                  color: isActive ? "var(--nb-active-text)" : "var(--nb-text)",
                  marginBottom: 2,
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--nb-hover-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                }}
              >
                {/* Icon chip */}
                <div
                  className="nb-cat-icon"
                  style={{ background: accent.bg, color: accent.icon }}
                >
                  {cat.icon === "fa-dollar-sign" ? (
                    <DollarIcon className="w-5 h-5" />
                  ) : (
                    <i className={`fas ${cat.icon}`} aria-hidden="true" />
                  )}
                </div>

                {/* Label */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: isActive ? 600 : 500,
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {cat.label}
                  </div>
                </div>

                {/* Arrow */}
                <i
                  className="fas fa-chevron-right"
                  aria-hidden="true"
                  style={{
                    fontSize: 10,
                    color: isActive
                      ? "var(--nb-active-text)"
                      : "var(--nb-section-label)",
                    flexShrink: 0,
                  }}
                />
              </Link>
            );
          })}
        </div>

        {/* Sidebar footer */}
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid var(--nb-divider)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 11, color: "var(--nb-section-label)" }}>
            allcalculator.net
          </span>
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "var(--nb-text2)",
              background: "var(--nb-hover-bg)",
              border: "1px solid var(--nb-border)",
              borderRadius: 7,
              padding: "5px 10px",
              cursor: "pointer",
              transition: "all .15s",
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <i
              className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-xs`}
              aria-hidden="true"
              suppressHydrationWarning
            />
            <span suppressHydrationWarning>
              {isDark ? "Light" : "Dark"} mode
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
