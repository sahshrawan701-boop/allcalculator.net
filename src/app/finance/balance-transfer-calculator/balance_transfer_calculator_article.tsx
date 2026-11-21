"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function BalanceTransferArticle() {
  return (
    <article className="btc-root">
      <style>{`
        /* ── TOKENS ── */
        :root {
          --ink: #1a1a2e;
          --ink-secondary: #4a4a68;
          --ink-muted: #8888a8;
          --surface: #ffffff;
          --surface-raised: #f7f7fb;
          --surface-deep: #f0f0f8;
          --accent: #4f46e5;
          --accent-deep: #3730a3;
          --accent-light: #eef2ff;
          --accent-mid: #c7d2fe;
          --success: #15803d;
          --success-bg: #f0fdf4;
          --success-border: #bbf7d0;
          --success-light: #16a34a;
          --danger: #b91c1c;
          --danger-bg: #fef2f2;
          --danger-border: #fecaca;
          --danger-light: #dc2626;
          --warn: #92400e;
          --warn-bg: #fffbeb;
          --warn-border: #fde68a;
          --border: rgba(0,0,0,0.08);
          --border-strong: rgba(0,0,0,0.14);
          --radius: 12px;
          --radius-sm: 6px;
          --radius-xl: 20px;
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
          --shadow: 0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.05);
          --ff-display: 'Playfair Display', Georgia, serif;
          --ff-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --ff-mono: 'DM Mono', 'Courier New', monospace;
        }

        .dark {
          --ink: #f0f0f8;
          --ink-secondary: #b0b0d0;
          --ink-muted: #6868a0;
          --surface: #0f172a;
          --surface-raised: #1a1a2c;
          --surface-deep: #222238;
          --accent: #818cf8;
          --accent-deep: #a5b4fc;
          --accent-light: #1e1b4b;
          --accent-mid: #3730a3;
          --success: #4ade80;
          --success-bg: #052e16;
          --success-border: #166534;
          --success-light: #22c55e;
          --danger: #f87171;
          --danger-bg: #450a0a;
          --danger-border: #7f1d1d;
          --danger-light: #ef4444;
          --warn: #fcd34d;
          --warn-bg: #451a03;
          --warn-border: #92400e;
          --border: rgba(255,255,255,0.08);
          --border-strong: rgba(255,255,255,0.14);
        }

        /* ── GOOGLE FONTS IMPORT ── */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        /* ── ROOT ── */
        .btc-root {
          font-family: var(--ff-body);
          font-size: 17px;
          line-height: 1.8;
          color: var(--ink);
          max-width: 800px;
          margin: 0;
          padding: 0;
        }

        .btc-root * { box-sizing: border-box; }

        /* ── TYPOGRAPHY ── */
        .btc-root p { margin: 0 0 1.25rem; color: var(--ink); }
        .btc-root strong { font-weight: 600; }
        .btc-root em { font-style: italic; }
        .btc-root a { color: var(--accent); text-decoration: none; font-weight: 500; border-bottom: 1.5px solid transparent; transition: border-color 0.15s; }
        .btc-root a:hover { border-bottom-color: var(--accent); }

        .display { font-family: var(--ff-display); }

        h1.btc-h1 {
          font-family: var(--ff-display);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 0.75rem;
        }

        h2.btc-h2 {
          font-family: var(--ff-display);
          font-size: clamp(1.4rem, 3.5vw, 1.9rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0 0 0.75rem;
        }

        h3.btc-h3 {
          font-family: var(--ff-body);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 0.6rem;
          letter-spacing: -0.005em;
        }

        h4.btc-h4 {
          font-family: var(--ff-body);
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 0 0 0.75rem;
        }

        /* ── HEADER ── */
        .btc-header {
          padding: 4rem 0 3rem;
          text-align: center;
          border-bottom: 1px solid var(--border);
          margin-bottom: 2.5rem;
        }

        .btc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-light);
          border: 1px solid var(--accent-mid);
          padding: 0.35rem 0.85rem;
          border-radius: 40px;
          margin-bottom: 1.5rem;
        }

        .btc-subtitle {
          font-size: 1.1rem;
          color: var(--ink-secondary);
          max-width: 55ch;
          margin: 0.5rem auto 1.5rem;
          line-height: 1.7;
          font-weight: 300;
        }

        .btc-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.25rem;
        }

        .btc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          background: var(--success-bg);
          border: 1px solid var(--success-border);
          color: var(--success);
          padding: 0.28rem 0.75rem;
          border-radius: 40px;
        }

        .btc-header-divider {
          width: 48px;
          height: 3px;
          background: var(--accent);
          border-radius: 4px;
          margin: 1.5rem auto 0;
        }

        /* ── SECTION SPACING ── */
        .btc-section { margin-bottom: 3rem; }

        /* ── RULE DIVIDER ── */
        .btc-hr {
          border: none;
          height: 1px;
          background: var(--border);
          margin: 3rem 0;
        }

        /* ── SECTION LEAD ── */
        .btc-lead {
          font-size: 1.1rem;
          line-height: 1.85;
          color: var(--ink-secondary);
          margin-bottom: 1.5rem;
        }

        /* ── DROPCAP ── */
        .btc-dropcap::first-letter {
          font-family: var(--ff-display);
          font-size: 4.2rem;
          font-weight: 800;
          float: left;
          line-height: 0.82;
          margin-right: 0.1em;
          margin-top: 0.1em;
          color: var(--accent);
        }

        /* ── EDITORIAL NOTICE ── */
        .btc-editorial {
          background: var(--surface-raised);
          border: 1px solid var(--border);
          border-left: 3px solid var(--ink-muted);
          padding: 1rem 1.25rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin-bottom: 2rem;
          font-size: 0.875rem;
          color: var(--ink-secondary);
          line-height: 1.7;
        }

        .btc-editorial-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
          display: block;
          margin-bottom: 0.4rem;
        }

        /* ── KEY TAKEAWAYS ── */
        .btc-takeaways {
          background: var(--accent-light);
          border: 1px solid var(--accent-mid);
          border-left: 4px solid var(--accent);
          border-radius: 0 var(--radius) var(--radius) 0;
          padding: 1.5rem 1.75rem;
          margin: 2rem 0;
        }

        .btc-takeaways .btc-h3 { color: var(--accent); }

        .btc-takeaways ul {
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .btc-takeaways li {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--accent-mid);
          font-size: 0.9375rem;
          color: var(--ink);
          line-height: 1.65;
        }

        .btc-takeaways li:last-child { border-bottom: none; }

        .btc-takeaways li::before {
          content: "→";
          color: var(--accent);
          font-weight: 600;
          flex-shrink: 0;
          margin-top: 0.05em;
        }

        /* ── CTA BOX ── */
        .btc-cta {
          background: linear-gradient(135deg, var(--accent-light) 0%, color-mix(in srgb, var(--accent) 8%, transparent) 100%);
          border: 1px solid var(--accent-mid);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2rem;
          text-align: center;
          margin: 2rem 0;
        }

        .btc-cta-title {
          font-family: var(--ff-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--ink);
          margin: 0 0 0.6rem;
        }

        .btc-cta p { color: var(--ink-secondary); font-size: 0.9375rem; max-width: 44ch; margin: 0 auto 1.25rem; }

        .btc-cta-btn {
          display: inline-block;
          padding: 0.7rem 1.75rem;
          background: var(--accent);
          color: #fff !important;
          font-size: 0.875rem;
          font-weight: 600;
          border-radius: 40px;
          border-bottom: none !important;
          letter-spacing: 0.02em;
          transition: opacity 0.15s, transform 0.15s;
          box-shadow: 0 4px 14px rgba(79,70,229,0.3);
        }

        .btc-cta-btn:hover { opacity: 0.88; transform: translateY(-1px); }

        /* ── DECISION GRID ── */
        .btc-decision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        @media (max-width: 600px) { .btc-decision-grid { grid-template-columns: 1fr; } }

        .btc-decision-yes,
        .btc-decision-no {
          padding: 1.35rem;
          border-radius: 0 var(--radius) var(--radius) 0;
        }

        .btc-decision-yes {
          background: var(--success-bg);
          border: 1px solid var(--success-border);
          border-left: 4px solid var(--success-light);
        }

        .btc-decision-no {
          background: var(--danger-bg);
          border: 1px solid var(--danger-border);
          border-left: 4px solid var(--danger-light);
        }

        .btc-decision-yes h4 { color: var(--success); }
        .btc-decision-no h4 { color: var(--danger); }

        .btc-decision-yes ul,
        .btc-decision-no ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .btc-decision-yes li,
        .btc-decision-no li {
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          font-size: 0.875rem;
          padding: 0.3rem 0;
          color: var(--ink);
          line-height: 1.55;
        }

        .btc-decision-yes li .icon { color: var(--success); font-weight: 700; flex-shrink: 0; }
        .btc-decision-no li .icon { color: var(--danger); font-weight: 700; flex-shrink: 0; }

        /* ── CHECKLIST ── */
        .btc-checklist {
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius);
          padding: 1.5rem 1.75rem;
          margin: 1.5rem 0;
          box-shadow: var(--shadow-sm);
        }

        .btc-checklist ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .btc-checklist li {
          display: flex;
          gap: 0.875rem;
          align-items: flex-start;
          padding: 0.7rem 0;
          border-bottom: 1px solid var(--border);
          font-size: 0.9375rem;
          color: var(--ink);
          line-height: 1.6;
        }

        .btc-checklist li:last-child { border-bottom: none; }

        .btc-checkbox {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 2px solid var(--accent-mid);
          background: var(--accent-light);
          margin-top: 2px;
        }

        /* ── RED FLAG ── */
        .btc-redflag {
          background: var(--warn-bg);
          border: 1px solid var(--warn-border);
          border-left: 4px solid #ea580c;
          padding: 1.1rem 1.5rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin: 1.5rem 0;
        }

        .btc-redflag-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #c2410c;
          margin-bottom: 0.4rem;
        }

        .btc-redflag p {
          font-size: 0.9rem;
          color: var(--ink-secondary);
          margin: 0;
          line-height: 1.7;
        }

        /* ── VIZ PANELS ── */
        .btc-viz {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .btc-viz-title { font-size: 0.9375rem; font-weight: 600; color: var(--ink); margin: 0 0 0.25rem; }
        .btc-viz-sub { font-size: 0.8125rem; color: var(--ink-muted); margin-bottom: 1rem; }

        /* ── BAR CHART ── */
        .btc-bar-row { margin-bottom: 1rem; }
        .btc-bar-labels { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--ink-secondary); margin-bottom: 0.3rem; }
        .btc-bar-track { height: 36px; background: var(--surface-deep); border-radius: var(--radius-sm); overflow: hidden; }
        .btc-bar-fill { height: 100%; border-radius: var(--radius-sm); display: flex; align-items: center; padding-left: 0.75rem; font-size: 0.78rem; font-weight: 600; color: #fff; }
        .btc-bar-high { background: linear-gradient(90deg, #dc2626 0%, #f87171 100%); }
        .btc-bar-low { background: linear-gradient(90deg, #16a34a 0%, #4ade80 100%); }
        .btc-bar-section-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 0.35rem; margin-top: 0.75rem; }

        /* ── TIMELINE ── */
        .btc-timeline { overflow-x: auto; padding-bottom: 0.5rem; margin: 1rem 0; }
        .btc-timeline-track { display: flex; min-width: 520px; height: 52px; border-radius: var(--radius-sm); overflow: hidden; }
        .btc-tl-seg { display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 0 0.75rem; }
        .btc-tl-transfer { background: var(--accent-light); color: var(--accent); flex: 1; border-right: 2px solid var(--surface); }
        .btc-tl-promo { background: var(--success-bg); color: var(--success); flex: 3; border-right: 2px solid var(--surface); text-align: center; }
        .btc-tl-risk { background: var(--danger-bg); color: var(--danger); flex: 2; text-align: center; }
        .btc-tl-labels { display: flex; min-width: 520px; margin-top: 0.5rem; }
        .btc-tl-label { font-size: 0.7rem; color: var(--ink-muted); line-height: 1.4; }
        .btc-tl-label-1 { flex: 1; }
        .btc-tl-label-2 { flex: 3; text-align: center; }
        .btc-tl-label-3 { flex: 2; text-align: right; }
        .btc-tl-note { font-size: 0.8rem; color: var(--ink-muted); margin-top: 0.75rem; font-style: italic; }

        /* ── TABLES ── */
        .btc-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }

        .btc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
          font-family: var(--ff-body);
        }

        .btc-table th {
          text-align: left;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--ink-muted);
          padding: 0.65rem 0.85rem;
          border-bottom: 2px solid var(--border-strong);
          white-space: nowrap;
          background: var(--surface-raised);
        }

        .btc-table td {
          padding: 0.6rem 0.85rem;
          border-bottom: 1px solid var(--border);
          color: var(--ink);
          vertical-align: top;
          line-height: 1.55;
        }

        .btc-table tbody tr:hover td { background: var(--surface-raised); }
        .btc-table tbody tr:last-child td { border-bottom: none; }

        .btc-table .mono { font-family: var(--ff-mono); font-size: 0.8125rem; }
        .btc-table .green { color: var(--success); font-weight: 600; }

        /* ── SCENARIO CARDS ── */
        .btc-scenario {
          border: 1px solid var(--border);
          border-top: 3px solid var(--accent);
          border-radius: 0 0 var(--radius) var(--radius);
          padding: 1.5rem;
          margin: 1.25rem 0;
          background: var(--surface);
          box-shadow: var(--shadow-sm);
        }

        .btc-scenario h3 {
          color: var(--accent);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.875rem;
        }

        .btc-scenario .btc-table tr:last-child td {
          font-weight: 600;
          color: var(--accent);
          background: var(--accent-light);
          border-bottom: none;
        }

        .btc-scenario-note {
          font-size: 0.875rem;
          color: var(--ink-secondary);
          margin: 0.875rem 0 0;
          line-height: 1.65;
          font-style: italic;
        }

        .btc-scenario-note strong { font-style: normal; color: var(--ink); }

        /* ── FORMULA ── */
        .btc-formula {
          font-family: var(--ff-mono);
          font-size: 0.9rem;
          background: var(--surface-deep);
          border-left: 3px solid var(--accent);
          padding: 1.1rem 1.35rem;
          margin: 0.75rem 0 0;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          color: var(--ink);
          overflow-x: auto;
        }

        .btc-formula pre { margin: 0; font-family: inherit; white-space: pre-wrap; }

        .btc-formula-note {
          background: var(--surface-raised);
          border: 1px solid var(--border);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 0.9rem 1.1rem;
          margin: 0 0 1.5rem;
          font-size: 0.875rem;
          color: var(--ink-secondary);
          line-height: 1.7;
        }

        .btc-formula-note p { margin: 0 0 0.4rem; }
        .btc-formula-note p:last-child { margin: 0; }

        /* ── WORKED EXAMPLE ── */
        .btc-example {
          background: var(--surface-raised);
          border: 1px solid var(--border-strong);
          border-radius: var(--radius);
          padding: 1.75rem;
          margin: 1.75rem 0;
          box-shadow: var(--shadow-sm);
        }

        .btc-example-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .btc-example-inputs {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.875rem 1.1rem;
          font-size: 0.875rem;
          color: var(--ink);
          margin-bottom: 1.25rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem 1.25rem;
        }

        .btc-example-inputs span { white-space: nowrap; }
        .btc-example-inputs strong { color: var(--ink-secondary); font-weight: 600; }

        .btc-example-steps { display: flex; flex-direction: column; gap: 0.875rem; }

        .btc-step {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
          color: var(--ink);
          line-height: 1.65;
        }

        .btc-step-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-muted);
          margin-bottom: 0.3rem;
        }

        .btc-chip {
          display: inline-block;
          font-family: var(--ff-mono);
          font-size: 0.82rem;
          font-weight: 500;
          background: var(--accent-light);
          color: var(--accent-deep);
          padding: 0.15rem 0.6rem;
          border-radius: 4px;
          margin-left: 0.25rem;
        }

        .btc-chip-green {
          background: var(--success-bg);
          color: var(--success);
          font-size: 0.9rem;
          padding: 0.2rem 0.75rem;
          border-radius: 6px;
        }

        /* ── NUMBERED STEPS ── */
        .btc-steps { display: flex; flex-direction: column; gap: 0.875rem; }

        .btc-numbered {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .btc-num {
          font-family: var(--ff-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--border-strong);
          line-height: 1;
          min-width: 2rem;
          padding-top: 0.6rem;
          flex-shrink: 0;
        }

        .btc-step-card {
          flex: 1;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1rem 1.25rem;
        }

        .btc-step-card-title {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.35rem;
        }

        .btc-step-card p { font-size: 0.875rem; color: var(--ink); margin: 0; line-height: 1.65; }

        /* ── PROS/CONS GRID ── */
        .btc-proscons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 600px) { .btc-proscons { grid-template-columns: 1fr; } }

        .btc-pros, .btc-cons {
          border-radius: var(--radius);
          padding: 1.5rem;
        }

        .btc-pros {
          background: var(--success-bg);
          border: 1px solid var(--success-border);
        }

        .btc-cons {
          background: var(--danger-bg);
          border: 1px solid var(--danger-border);
        }

        .btc-pros h3 { color: var(--success); border-bottom: 1px solid var(--success-border); padding-bottom: 0.75rem; margin-bottom: 1rem; }
        .btc-cons h3 { color: var(--danger); border-bottom: 1px solid var(--danger-border); padding-bottom: 0.75rem; margin-bottom: 1rem; }

        .btc-pros ul, .btc-cons ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.875rem; }

        .btc-pros li strong, .btc-cons li strong { display: block; font-size: 0.875rem; font-weight: 600; color: var(--ink); margin-bottom: 0.2rem; }
        .btc-pros li span, .btc-cons li span { font-size: 0.8125rem; color: var(--ink-secondary); line-height: 1.6; }

        /* ── MISTAKE CARDS ── */
        .btc-mistake {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.35rem 1.5rem;
          margin-bottom: 0.875rem;
        }

        .btc-mistake h3 { font-size: 1rem; font-weight: 600; color: var(--ink); margin-bottom: 0.875rem; }

        .btc-mistake ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }

        .btc-mistake li { display: flex; gap: 0.5rem; font-size: 0.875rem; line-height: 1.6; }

        .btc-mistake li .m-label { font-weight: 600; white-space: nowrap; flex-shrink: 0; }
        .btc-mistake li .m-why { color: var(--accent); }
        .btc-mistake li .m-con { color: var(--danger); }
        .btc-mistake li .m-fix { color: var(--success); }

        /* ── CANDIDATE CARDS ── */
        .btc-candidate {
          background: var(--surface);
          border-left: 4px solid var(--accent);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          padding: 1rem 1.25rem;
          margin-bottom: 0.75rem;
        }

        .btc-candidate-alt { border-left-color: var(--danger-light); }

        .btc-candidate h4 { font-size: 0.875rem; font-weight: 600; color: var(--ink); margin-bottom: 0.25rem; }
        .btc-candidate p { font-size: 0.875rem; color: var(--ink-secondary); margin: 0; line-height: 1.6; }

        /* ── FAQ ── */
        .btc-faq { border-top: 1px solid var(--border); padding: 1.1rem 0; }
        .btc-faq h3 { font-size: 1rem; font-weight: 600; color: var(--ink); margin-bottom: 0.4rem; }
        .btc-faq p { font-size: 0.9rem; color: var(--ink-secondary); margin: 0; line-height: 1.7; }

        /* ── RELATED CALCULATORS ── */
        .btc-related {
          background: var(--surface-raised);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.1rem 1.35rem;
          margin-bottom: 0.75rem;
          transition: border-color 0.15s, box-shadow 0.15s;
        }

        .btc-related:hover { border-color: var(--accent-mid); box-shadow: var(--shadow-sm); }

        .btc-related h4 { font-size: 0.9375rem; font-weight: 600; margin-bottom: 0.25rem; }
        .btc-related h4 a { color: var(--accent); }
        .btc-related p { font-size: 0.875rem; color: var(--ink-secondary); margin: 0; line-height: 1.6; }

        /* ── METHODOLOGY ── */
        .btc-methodology {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.75rem;
          margin-bottom: 2rem;
        }

        .btc-methodology h2 { font-size: 1.2rem; margin-bottom: 1rem; }

        .btc-methodology p {
          font-size: 0.875rem;
          color: var(--ink-secondary);
          line-height: 1.75;
          margin-bottom: 0.875rem;
        }

        .btc-methodology p:last-child { margin-bottom: 0; }

        /* ── AUTHOR BOX ── */
        .btc-author {
          display: flex;
          gap: 1.1rem;
          align-items: flex-start;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.25rem;
        }

        .btc-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .btc-author-name { font-size: 0.9rem; font-weight: 600; color: var(--ink); margin-bottom: 0.15rem; }
        .btc-author-role { font-size: 0.78rem; color: var(--ink-muted); margin-bottom: 0.5rem; }
        .btc-author-bio { font-size: 0.8125rem; color: var(--ink-secondary); line-height: 1.65; margin: 0; }

        /* ── SOURCES ── */
        .btc-sources { list-style: disc; padding-left: 1.25rem; }
        .btc-sources li { font-size: 0.875rem; color: var(--ink-secondary); line-height: 1.65; margin-bottom: 0.5rem; }
        .btc-sources a { color: var(--accent); }

        /* ── INLINE CALLOUT ── */
        .btc-callout {
          border-left: 3px solid var(--accent);
          background: var(--accent-light);
          padding: 0.9rem 1.1rem;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          margin: 1.5rem 0;
          font-size: 0.9rem;
          color: var(--ink);
          font-style: italic;
          line-height: 1.7;
        }

        .btc-callout.warn {
          border-left-color: #ea580c;
          background: var(--warn-bg);
          color: var(--warn);
          font-style: normal;
        }

        /* ── SAVINGS REF TABLE ── */
        .btc-ref-table th:first-child, .btc-ref-table td:first-child { white-space: nowrap; }

        /* ── SCORE TABLE ── */
        .btc-score-high { color: var(--success); font-weight: 600; }
        .btc-score-med { color: var(--warn); font-weight: 600; }
        .btc-score-low { color: var(--danger); font-weight: 600; }

        /* ── BULLET LIST ── */
        .btc-bullet { list-style: none; padding: 0; margin: 0 0 1rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .btc-bullet li { display: flex; gap: 0.6rem; align-items: flex-start; font-size: 0.9375rem; color: var(--ink); line-height: 1.65; }
        .btc-bullet li::before { content: "◆"; color: var(--accent); flex-shrink: 0; font-size: 0.6rem; margin-top: 0.45rem; }

        /* ── RESULTS SECTION ── */
        .btc-result-item { margin-bottom: 1rem; }
        .btc-result-item strong { color: var(--ink); font-weight: 600; }

        /* ── SCROLL HINT ── */
        .btc-scroll-hint { font-size: 0.72rem; color: var(--ink-muted); text-align: right; margin-bottom: 0.25rem; display: none; }
        @media (max-width: 600px) { .btc-scroll-hint { display: block; } }

        /* ── RESPONSIVE TWEAKS ── */
        @media (max-width: 480px) {
          .btc-root { padding: 0; font-size: 16px; }
          .btc-header { padding: 2.5rem 0 2rem; }
          .btc-scenario { padding: 1.1rem; }
          .btc-example { padding: 1.25rem; }
          .btc-takeaways { padding: 1.1rem 1.25rem; }
        }

        /* ── WHAT CHANGES ── */
        .btc-factor { display: flex; gap: 0.6rem; align-items: flex-start; padding: 0.65rem 0; border-bottom: 1px solid var(--border); font-size: 0.9375rem; }
        .btc-factor:last-child { border-bottom: none; }
        .btc-factor::before { content: "◆"; color: var(--accent); flex-shrink: 0; font-size: 0.55rem; margin-top: 0.55rem; }

        /* ── INLINE COLOR CHIPS ── */
        .btc-tag-success { background: var(--success-bg); color: var(--success); border: 1px solid var(--success-border); font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.55rem; border-radius: 20px; letter-spacing: 0.03em; }
        .btc-tag-danger { background: var(--danger-bg); color: var(--danger); border: 1px solid var(--danger-border); font-size: 0.7rem; font-weight: 600; padding: 0.15rem 0.55rem; border-radius: 20px; letter-spacing: 0.03em; }
      `}</style>

      {/* ── HEADER ── */}
      <header className="btc-header">
        <div className="btc-eyebrow">Personal Finance · Debt Payoff</div>
        <h1 className="btc-h1 display">
          Balance Transfer Calculator: See How Much You Can Actually Save
        </h1>
        <p className="btc-subtitle">
          A comprehensive guide to 0% introductory APR credit cards
        </p>
        <div className="btc-badges">
          <span className="btc-badge">✓ Last reviewed: June 2026</span>
          <span className="btc-badge">✓ Fact-checked by editorial team</span>
        </div>
        <div className="btc-header-divider" />
      </header>

      {/* ── EDITORIAL NOTE ── */}
      <div className="btc-editorial">
        <span className="btc-editorial-label">Editorial Note</span>
        This article is strictly educational and does not constitute financial
        advice. Balance transfer offers, promotional APRs, transfer fees, and
        eligibility requirements vary by card issuer and individual credit
        profile. Always review official terms and conditions before applying.
      </div>

      {/* ── INTRO ── */}
      <section className="btc-section">
        <p
          className="btc-dropcap"
          style={{ fontSize: "1.05rem", lineHeight: 1.8 }}
        >
          Every month you carry a high-interest credit card balance, a
          significant chunk of your payment disappears into interest — not debt
          reduction. On a $8,000 balance at 24% APR, you're paying roughly $160
          in interest every single month before a cent touches your principal. A
          balance transfer exists to stop that drain cold.
        </p>
        <p>
          By moving your debt onto a card offering a 0% promotional APR —
          typically for 12 to 21 months — every dollar you pay reduces your
          actual balance. The math can be dramatic: on that same $8,000 debt,
          eliminating interest for 18 months could save over $1,600. The catch
          is a one-time transfer fee, usually 3% to 5% of the amount moved.
        </p>
        <p>
          This calculator answers the central question before you apply:{" "}
          <em>does the interest you'll avoid outweigh the fee you'll pay?</em>{" "}
          It calculates your net savings, your required monthly payment to pay
          off the balance before the promotion expires, and flags whether your
          current payment pace puts you at risk of hitting the post-promotional
          rate. When comparing balance transfers against fixed-rate installment
          products, a{" "}
          <Link href="/finance/debt-consolidation-calculator">
            Debt Consolidation Calculator
          </Link>{" "}
          offers a side-by-side view.
        </p>
      </section>

      {/* ── KEY TAKEAWAYS ── */}
      <div className="btc-takeaways">
        <h3 className="btc-h3">Key Takeaways</h3>
        <ul>
          {[
            [
              "Interest pause, not forgiveness:",
              "A 0% promotional APR halts interest accumulation for a fixed window, giving every payment direct impact on principal.",
            ],
            [
              "The fee is real and upfront:",
              "Most cards charge 3% to 5% of the transferred amount. Net savings only materialize when this fee is smaller than the interest you avoid.",
            ],
            [
              "Full payoff before the deadline is essential:",
              "Any remaining balance when the promotion expires converts to the card's standard variable APR — often 20% to 29%.",
            ],
            [
              "Credit score: short dip, potential long gain:",
              "Applying triggers a hard inquiry (temporary dip), but lower credit utilization from paying down debt can benefit your score over time.",
            ],
            [
              "The new card is not for new spending:",
              "New purchases on a balance transfer card carry high interest immediately and complicate payment allocation.",
            ],
          ].map(([bold, rest]) => (
            <li key={bold}>
              <strong>{bold}</strong> {rest}
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA ── */}
      <div className="btc-cta">
        <div className="btc-cta-title">Run your numbers before you apply</div>
        <p>
          The calculator at the top of this page shows your estimated net
          savings, required monthly payment, and whether your current budget is
          enough to clear the debt in time.
        </p>
        <a href="#" className="btc-cta-btn">
          Jump to Calculator ↑
        </a>
      </div>

      <hr className="btc-hr" />

      {/* ── IS IT WORTH IT ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Is a Balance Transfer Worth It?</h2>
        <p className="btc-lead">
          Not every balance transfer saves money, and not every borrower is in a
          position to benefit. Before reaching for a new card application, work
          through this decision framework.
        </p>

        <div className="btc-decision-grid">
          <div className="btc-decision-yes">
            <h4 className="btc-h4" style={{ color: "var(--success)" }}>
              ✓ Usually Makes Sense When…
            </h4>
            <ul>
              {[
                "Your current APR is 18% or higher",
                "Your balance is $2,000 or more",
                "You can clear the debt within the promo period",
                "Your credit score is 670 or above",
                "Interest is consuming most of your payment",
                "You can commit to no new spending on the card",
              ].map((item) => (
                <li key={item}>
                  <span className="icon">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="btc-decision-no">
            <h4 className="btc-h4" style={{ color: "var(--danger)" }}>
              ✗ Probably Not Worth It When…
            </h4>
            <ul>
              {[
                "Your current APR is below 12%",
                "The balance is small (under $1,000)",
                "You need 3+ years to realistically pay it off",
                "Your credit score is below 640",
                "You're currently missing minimum payments",
                "You have a pattern of accumulating new debt",
              ].map((item) => (
                <li key={item}>
                  <span className="icon">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btc-checklist">
          <h3 className="btc-h3">Quick Decision Checklist</h3>
          <ul>
            {[
              [
                "Do you qualify?",
                "You need good to excellent credit (670+) for 0% APR offers.",
              ],
              [
                "Can you pay it off in time?",
                "Divide your balance by the promo months. Is that monthly payment feasible?",
              ],
              [
                "Does the math work?",
                "Run the calculator: net savings must be positive after the fee.",
              ],
              [
                "Will you avoid new purchases?",
                "The card must be used exclusively to pay down the transferred balance.",
              ],
            ].map(([title, detail]) => (
              <li key={title}>
                <div className="btc-checkbox" />
                <span>
                  <strong>{title}</strong> {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="btc-redflag">
          <p className="btc-redflag-label">⚠ Red Flag Situations</p>
          <p>
            Reconsider a balance transfer if you are currently unable to make
            minimum payments, if you frequently carry balances to your credit
            limit, or if your debt represents more than 40% of your gross
            monthly income. In these cases, a balance transfer shifts the
            timeline but does not address the underlying cash flow problem.
            Consulting a non-profit credit counselor is often the more
            productive first step.
          </p>
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── VISUAL LEARNING ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Seeing the Difference: What Actually Changes</h2>
        <p className="btc-lead">
          The impact of eliminating interest for 12 to 21 months is easier to
          understand when you see how payment allocation changes between
          scenarios. The illustrations below use an $8,000 balance at 24% APR as
          a baseline.
        </p>

        {/* Payment Allocation */}
        <div className="btc-viz">
          <div className="btc-viz-title">Payment Allocation Over 18 Months</div>
          <div className="btc-viz-sub">
            Making $457/month toward an $8,000 debt
          </div>

          <p className="btc-bar-section-label">
            Staying on Current Card (24% APR)
          </p>
          <div className="btc-bar-row">
            <div className="btc-bar-labels">
              <span>Interest paid: ~$1,630 (28% of total payments)</span>
              <span style={{ color: "var(--danger)", fontWeight: 600 }}>
                $1,630 lost to interest
              </span>
            </div>
            <div className="btc-bar-track">
              <div
                className="btc-bar-fill btc-bar-high"
                style={{ width: "72%" }}
              >
                $6,606 to principal
              </div>
            </div>
          </div>

          <p className="btc-bar-section-label" style={{ marginTop: "1.1rem" }}>
            After Balance Transfer (0% APR, 3% fee)
          </p>
          <div className="btc-bar-row">
            <div className="btc-bar-labels">
              <span>Fee paid: $240 (one-time, adds to balance)</span>
              <span style={{ color: "var(--success)", fontWeight: 600 }}>
                ~$1,390 net savings
              </span>
            </div>
            <div className="btc-bar-track">
              <div
                className="btc-bar-fill btc-bar-low"
                style={{ width: "97%" }}
              >
                $8,232 to principal (97% efficiency)
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--ink-muted)",
              marginTop: "0.75rem",
              fontStyle: "italic",
            }}
          >
            Assumes consistent monthly payments and no new purchases. Figures
            are illustrative estimates.
          </p>
        </div>

        {/* Timeline */}
        <div className="btc-viz">
          <div className="btc-viz-title">Balance Transfer Timeline</div>
          <div className="btc-viz-sub">
            The three phases every borrower must understand
          </div>
          <div className="btc-timeline">
            <div className="btc-timeline-track">
              <div className="btc-tl-seg btc-tl-transfer">Transfer</div>
              <div className="btc-tl-seg btc-tl-promo">
                0% Promotional Period (e.g., 18 months)
              </div>
              <div className="btc-tl-seg btc-tl-risk">
                ⚠ Standard APR Kicks In
              </div>
            </div>
            <div className="btc-tl-labels">
              <div className="btc-tl-label btc-tl-label-1">
                Day 1:
                <br />
                Fee added
              </div>
              <div className="btc-tl-label btc-tl-label-2">
                Every payment = 100% principal
                <br />
                Pay off completely before this ends ↓
              </div>
              <div className="btc-tl-label btc-tl-label-3">
                Month 19+:
                <br />
                High APR applies
              </div>
            </div>
          </div>
          <p className="btc-tl-note">
            <strong>Critical window:</strong> The promotional period is fixed.
            Missing the payoff deadline by even one month means your remaining
            balance begins accruing interest at the card's full standard rate —
            often 24% to 29% APR.
          </p>
        </div>

        {/* Balance Decline Table */}
        <div className="btc-viz">
          <div className="btc-viz-title">
            How Balances Decline: $8,000 at $460/Month
          </div>
          <div className="btc-scroll-hint">← Scroll to see full table →</div>
          <div className="btc-table-wrap">
            <table className="btc-table" style={{ minWidth: 420 }}>
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Balance (24% APR Card)</th>
                  <th>Balance (0% Transfer Card)</th>
                  <th>Difference Saved</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Start", "$8,000", "$8,240 (after 3% fee)", "—"],
                  ["Month 3", "$7,427", "$6,860", "$567"],
                  ["Month 6", "$6,831", "$5,480", "$1,351"],
                  ["Month 9", "$6,210", "$4,100", "$2,110"],
                  ["Month 12", "$5,562", "$2,720", "$2,842"],
                  ["Month 15", "$4,885", "$1,340", "$3,545"],
                  [
                    "Month 18",
                    "$4,176",
                    "$0 (paid off)",
                    "~$4,176 remaining vs. $0",
                  ],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="mono">{row[0]}</td>
                    <td className="mono">{row[1]}</td>
                    <td className="mono">{row[2]}</td>
                    <td className={`mono ${i > 0 ? "green" : ""}`}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              fontSize: "0.78rem",
              color: "var(--ink-muted)",
              marginTop: "0.6rem",
              fontStyle: "italic",
            }}
          >
            Approximate values based on standard amortization. The 24% APR card
            shows estimated balance after interest deduction each month.
          </p>
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── VS OTHER OPTIONS ── */}
      <section className="btc-section">
        <h2 className="btc-h2">
          Balance Transfer vs. Other Debt Relief Options
        </h2>
        <p className="btc-lead">
          A 0% APR balance transfer is one of several credit card consolidation
          paths. The right choice depends on your payoff timeline, credit
          profile, and how disciplined you can be with a payment plan.
        </p>
        <div className="btc-scroll-hint">← Scroll to see full table →</div>
        <div className="btc-table-wrap">
          <table className="btc-table" style={{ minWidth: 720 }}>
            <thead>
              <tr>
                <th>Option</th>
                <th>Typical Rate</th>
                <th>Upfront Cost</th>
                <th>Term</th>
                <th>Credit Required</th>
                <th>Best For</th>
                <th>Main Drawback</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Balance Transfer Card",
                  "0% promo APR",
                  "3%–5% transfer fee",
                  "12–21 months",
                  "670+ (Good–Excellent)",
                  "Short-term payoff sprint",
                  "High post-promo APR (20–29%)",
                ],
                [
                  "Personal Loan",
                  "8%–24% fixed APR",
                  "0%–8% origination fee",
                  "12–60 months",
                  "580+ (Fair–Excellent)",
                  "Structured multi-year payoff",
                  "Interest accrues from day one",
                ],
                [
                  "Debt Consolidation Loan",
                  "8%–24% fixed APR",
                  "0%–8% origination fee",
                  "12–60 months",
                  "580+ (Fair–Excellent)",
                  "Consolidating large debt loads",
                  "May require closing old cards",
                ],
                [
                  "Debt Management Plan",
                  "6%–10% negotiated",
                  "Monthly admin fee ($25–$75)",
                  "36–60 months",
                  "None required",
                  "Struggling to make minimums",
                  "Closes enrolled credit accounts",
                ],
                [
                  "Home Equity Loan",
                  "6%–10% fixed APR",
                  "Closing costs (2%–5%)",
                  "5–30 years",
                  "Good credit + home equity",
                  "Very large consolidation ($50k+)",
                  "Home is collateral; foreclosure risk",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ fontSize: "0.8125rem" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          Balance transfers deliver the most value when you can eliminate the
          debt within the 12-to-21-month window. For longer timelines, a{" "}
          <Link href="/finance/personal-loan-calculator">
            Personal Loan Calculator
          </Link>{" "}
          may show that a fixed-rate installment loan is both safer and cheaper
          over three to five years.
        </p>
      </section>

      <hr className="btc-hr" />

      {/* ── HOW IT WORKS ── */}
      <section className="btc-section">
        <h2 className="btc-h2">
          How Does the Balance Transfer Calculator Work?
        </h2>
        <p className="btc-lead">
          The calculator answers one practical question:{" "}
          <em>
            Will this transfer save me money after accounting for the fee?
          </em>{" "}
          It estimates net savings and calculates the exact monthly payment
          required to clear your debt before the promotion expires. If you
          decide not to transfer, a{" "}
          <Link href="/finance/credit-card-payoff-calculator">
            Credit Card Payoff Calculator
          </Link>{" "}
          can build an aggressive payment schedule for your current card.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          Five inputs power the calculation:
        </p>
        <ul className="btc-bullet">
          {[
            [
              "Current Balance",
              "Total debt you plan to transfer. Must fall within the new card's approved credit limit.",
            ],
            [
              "Current APR",
              "The interest rate on your existing card — what you're escaping. Higher APR = more savings potential.",
            ],
            [
              "Transfer Fee %",
              "One-time fee added to your new balance (usually 3% or 5%). This is your cost for entering the 0% period.",
            ],
            [
              "Promotional Period",
              "Months the new card offers 0% APR. The longer this is, the lower your required monthly payment.",
            ],
            [
              "Monthly Payment",
              "What you can realistically afford each month. The calculator checks whether this clears the debt in time.",
            ],
          ].map(([label, desc]) => (
            <li key={label}>
              <strong>{label}</strong> – {desc}
            </li>
          ))}
        </ul>
      </section>

      <hr className="btc-hr" />

      {/* ── FORMULA ── */}
      <section className="btc-section">
        <h2 className="btc-h2">The Balance Transfer Formula Explained</h2>
        <p className="btc-lead">
          Three calculations drive the output. Understanding each one helps you
          interpret the results — and know when to trust them.
        </p>

        {[
          {
            label: "Formula 1 — Transfer Fee Amount",
            formula: "Fee Amount = Transfer Balance × (Transfer Fee % ÷ 100)",
            notes: [
              [
                "Variables:",
                "Transfer Balance is what you're moving; Transfer Fee % is the rate your new issuer charges (commonly 3% or 5%).",
              ],
              [
                "Why it matters:",
                "This fee is added to your new principal on day one. On a $10,000 transfer at 5%, you start $500 behind before making a single payment.",
              ],
              [
                "Limitation:",
                "Some cards offer a $0 promotional fee window. If yours does, enter 0% and the net savings figure increases significantly.",
              ],
            ],
          },
          {
            label: "Formula 2 — Target Monthly Payment",
            formula:
              "Target Payment = (Transfer Balance + Fee Amount) ÷ Promotional Months",
            notes: [
              [
                "Variables:",
                "The numerator is your new starting balance (original + fee); the denominator is the number of 0% months available.",
              ],
              [
                "Why it matters:",
                "This is your monthly payoff target. If your budget can meet or exceed this number, the transfer is executable. If not, you'll carry a balance into the high-APR phase.",
              ],
              [
                "Limitation:",
                "This formula assumes equal payments each month. Paying extra early accelerates payoff and lowers risk; paying minimum only is the path to losing your savings.",
              ],
            ],
          },
          {
            label: "Formula 3 — Net Savings Estimate",
            formula:
              "Net Savings = Interest Avoided on Old Card − Transfer Fee Paid",
            notes: [
              [
                "Variables:",
                "Interest Avoided is estimated using standard amortization on your current APR over the promo period; Transfer Fee Paid is the flat upfront cost.",
              ],
              [
                "Why it matters:",
                "This is the bottom-line figure. A positive number means the transfer saves money. A negative number means it costs more than staying put.",
              ],
              [
                "Limitation:",
                "The interest avoided estimate assumes you maintain consistent payments on the old card. Actual savings depend entirely on payment behavior throughout the promo window.",
              ],
            ],
          },
        ].map(({ label, formula, notes }) => (
          <div key={label} style={{ marginBottom: "1.75rem" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.35rem" }}>{label}</p>
            <div className="btc-formula">
              <pre>{formula}</pre>
            </div>
            <div className="btc-formula-note">
              {notes.map(([key, val]) => (
                <p key={key}>
                  <strong>{key}</strong> {val}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Worked Example */}
        <h3
          className="btc-h3"
          style={{
            marginTop: "2rem",
            fontSize: "1.2rem",
            fontFamily: "var(--ff-display)",
            fontWeight: 700,
          }}
        >
          Worked Example: $8,000 at 24% APR
        </h3>
        <div className="btc-example">
          <div className="btc-example-label">Scenario Inputs</div>
          <div className="btc-example-inputs">
            <span>
              <strong>Current Balance:</strong> $8,000
            </span>
            <span>
              <strong>Current APR:</strong> 24%
            </span>
            <span>
              <strong>Transfer Fee:</strong> 3%
            </span>
            <span>
              <strong>Promo Period:</strong> 18 months
            </span>
          </div>
          <div className="btc-example-steps">
            {[
              ["Step 1: Transfer fee", "$8,000 × 0.03 = ", "$240"],
              ["Step 2: New starting balance", "$8,000 + $240 = ", "$8,240"],
              [
                "Step 3: Required monthly payment",
                "$8,240 ÷ 18 = ",
                "$457.78/month",
              ],
              [
                "Step 4: Interest avoided on old card",
                "Paying $458/month toward $8,000 at 24% APR over 18 months would cost approximately ",
                "$1,630 in interest",
              ],
            ].map(([label, text, result]) => (
              <div className="btc-step" key={label}>
                <div className="btc-step-label">{label}</div>
                <span>{text}</span>
                <span className="btc-chip">{result}</span>
              </div>
            ))}
            <div
              className="btc-step"
              style={{
                borderTop: "2px solid var(--border-strong)",
                paddingTop: "1rem",
              }}
            >
              <div className="btc-step-label">Step 5: Net savings</div>
              <span>$1,630 − $240 = </span>
              <span className="btc-chip btc-chip-green">
                $1,390 in net savings
              </span>
            </div>
          </div>
        </div>

        <h3
          className="btc-h3"
          style={{ marginTop: "1.75rem", fontSize: "1.1rem" }}
        >
          What Changes Your Results
        </h3>
        <div
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
            marginBottom: "1.25rem",
          }}
        >
          {[
            [
              "Higher current APR → more savings",
              "Moving debt from a 29% card saves far more than moving from a 14% card, even with the same fee.",
            ],
            [
              "Higher transfer fee → lower net savings",
              "A 5% fee on $10,000 costs $500 upfront. A card offering 3% saves you $200 before you've paid a single dollar.",
            ],
            [
              "Faster payoff → better outcome",
              "Every month you pay above the target reduces risk and saves interest on the old-card comparison.",
            ],
            [
              "Longer promo period → lower monthly target",
              "A 21-month window reduces the required monthly payment versus a 12-month offer, easing cash flow pressure.",
            ],
            [
              "Balance left at promo expiry → reverses gains",
              "Any remaining amount converts to the standard variable APR. A $3,000 balance at 27% costs $810/year.",
            ],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="btc-factor"
              style={{ padding: "0.9rem 1.1rem", margin: 0 }}
            >
              <div>
                <strong>{title}:</strong>{" "}
                <span style={{ color: "var(--ink-secondary)" }}>{desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="btc-callout warn">
          <strong>Warning:</strong> Reconsider a balance transfer if you are
          struggling to make minimum payments, frequently reach your credit
          limit, or rely on credit for regular expenses. These are signs of a
          cash flow problem, not a rate problem — and a temporary 0% window
          won't resolve it.
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── SCENARIOS ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Six Real-World Balance Transfer Scenarios</h2>
        <p className="btc-lead">
          These examples cover the range of situations most borrowers face —
          from small balances to large ones, low fees to high, and the scenario
          that costs money instead of saving it.
        </p>

        {[
          {
            heading: "Scenario 1: Small Balance, Standard Terms",
            rows: [
              ["Current Debt", "$2,500 at 22% APR"],
              ["Transfer Fee", "3% ($75)"],
              ["Promo Period", "12 months"],
              ["New Starting Balance", "$2,575"],
              ["Target Monthly Payment", "$214.58/month"],
              ["Interest Avoided", "~$305"],
              ["Net Savings", "$230"],
            ],
            takeaway:
              "Even on a smaller balance, the transfer saves $230. The math works — but only if you hit $215/month for 12 consecutive months without exception.",
          },
          {
            heading: "Scenario 2: Medium Balance, 15-Month Window",
            rows: [
              ["Current Debt", "$5,000 at 22% APR"],
              ["Transfer Fee", "3% ($150)"],
              ["Promo Period", "15 months"],
              ["New Starting Balance", "$5,150"],
              ["Target Monthly Payment", "$343.33/month"],
              ["Interest Avoided", "~$825"],
              ["Net Savings", "$675"],
            ],
            takeaway:
              "A mid-range transfer with solid savings. The 15-month window gives a manageable monthly target while delivering meaningful interest relief.",
          },
          {
            heading: "Scenario 3: Large Balance, Long Promo",
            rows: [
              ["Current Debt", "$10,000 at 24% APR"],
              ["Transfer Fee", "5% ($500)"],
              ["Promo Period", "21 months"],
              ["New Starting Balance", "$10,500"],
              ["Target Monthly Payment", "$500.00/month"],
              ["Interest Avoided", "~$2,300"],
              ["Net Savings", "$1,800"],
            ],
            takeaway:
              "Despite a higher 5% fee, the extended 21-month promo and high APR combine to produce substantial net savings. The fee is easily offset.",
          },
          {
            heading: "Scenario 4: High Fee Hurts the Math",
            rows: [
              ["Current Debt", "$1,500 at 19% APR"],
              ["Transfer Fee", "5% ($75)"],
              ["Promo Period", "12 months"],
              ["Interest That Would Be Paid", "~$170"],
              ["Transfer Fee Cost", "$75"],
              ["Net Savings", "$95"],
            ],
            takeaway:
              "The savings exist but are modest. A 5% fee on a small, moderate-APR balance eats most of the gain. Look for a card with a 3% or $0 fee to improve the outcome.",
          },
          {
            heading: "Scenario 5: Very High APR — Maximum Benefit",
            rows: [
              ["Current Debt", "$7,000 at 30% APR"],
              ["Transfer Fee", "3% ($210)"],
              ["Promo Period", "18 months"],
              ["New Starting Balance", "$7,210"],
              ["Target Monthly Payment", "$400.56/month"],
              ["Interest Avoided", "~$2,100"],
              ["Net Savings", "$1,890"],
            ],
            takeaway:
              "High-APR debt is where balance transfers shine. A 30% rate means interest compounds aggressively — eliminating it for 18 months produces exceptional savings relative to the fee.",
          },
          {
            heading: "Scenario 6: The Costly Mistake — Not Paying Off in Time",
            rows: [
              ["Current Debt Transferred", "$6,000 at 20% APR"],
              ["Transfer Fee", "3% ($180)"],
              ["Promo Period", "12 months"],
              ["Actual Monthly Payment", "$200/month (below target)"],
              ["Balance Remaining at Month 13", "$3,780"],
              ["Post-Promo APR Applied", "27%"],
              ["Annual Interest on Remainder", "~$1,021"],
            ],
            takeaway:
              "Paying below the required target turns a savings strategy into a liability. The remaining $3,780 at 27% now costs over $1,000/year in interest — erasing the original savings and then some.",
          },
        ].map(({ heading, rows, takeaway }) => (
          <div key={heading} className="btc-scenario">
            <h3>{heading}</h3>
            <div className="btc-table-wrap">
              <table className="btc-table">
                <tbody>
                  {rows.map(([item, val]) => (
                    <tr key={item}>
                      <td>{item}</td>
                      <td className="mono" style={{ textAlign: "right" }}>
                        {val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="btc-scenario-note">
              <strong>Key Takeaway:</strong> {takeaway}
            </p>
          </div>
        ))}
      </section>

      <hr className="btc-hr" />

      {/* ── CREDIT SCORE ── */}
      <section className="btc-section">
        <h2 className="btc-h2">What Credit Score Do You Need?</h2>
        <p className="btc-lead">
          Card issuers reserve their most competitive 0% promotional offers for
          lower-risk borrowers. Your FICO score is the primary filter, though
          income, existing debt load, and recent inquiry volume all factor into
          the final approval decision.
        </p>
        <div className="btc-scroll-hint">← Scroll to see full table →</div>
        <div className="btc-table-wrap">
          <table className="btc-table" style={{ minWidth: 540 }}>
            <thead>
              <tr>
                <th>FICO Range</th>
                <th>Approval Likelihood</th>
                <th>Realistic Offer Quality</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "800+ (Exceptional)",
                  "Very High",
                  "20–21 month promos; low or $0 transfer fees; high credit limits",
                  "score-high",
                ],
                [
                  "740–799 (Very Good)",
                  "High",
                  "18–21 month promos; standard 3% fees; solid limits",
                  "score-high",
                ],
                [
                  "700–739 (Good)",
                  "Moderate to High",
                  "12–18 month promos; 3%–5% fees; moderate limits",
                  "score-med",
                ],
                [
                  "670–699 (Fair to Good)",
                  "Moderate",
                  "Shorter 6–12 month promos; 5% fees; lower limits",
                  "score-med",
                ],
                [
                  "620–669 (Fair)",
                  "Low",
                  "Rarely qualify for 0% APR; may see slightly reduced promotional rates",
                  "score-low",
                ],
                [
                  "Below 620 (Poor)",
                  "Very Low",
                  "Typically denied; focus on credit rebuilding before applying",
                  "score-low",
                ],
              ].map(([range, likelihood, quality, cls]) => (
                <tr key={range}>
                  <td
                    style={{
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {range}
                  </td>
                  <td className={`btc-${cls}`}>{likelihood}</td>
                  <td style={{ fontSize: "0.8125rem" }}>{quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          Even with an 800+ score, an issuer may cap your transfer amount or
          decline entirely if your debt-to-income ratio is high or if you have
          opened several credit accounts recently. Pre-qualification tools
          (which use soft inquiries and don't affect your score) let you check
          likely approval odds before formally applying.
        </p>
      </section>

      <hr className="btc-hr" />

      {/* ── STEP BY STEP ── */}
      <section className="btc-section">
        <h2 className="btc-h2">How to Use the Calculator: Step-by-Step</h2>
        <div className="btc-steps">
          {[
            [
              "1",
              "Enter your current balance",
              "Input the exact amount of debt you want to transfer. Ensure this stays within the credit limit of the card you're considering — including the transfer fee, which is added on top.",
            ],
            [
              "2",
              "Input your current APR",
              "Find the interest rate on your current card statement. This is the rate you're escaping — and the basis for estimating interest you'd pay if you did nothing.",
            ],
            [
              "3",
              "Enter the transfer fee percentage",
              "Check the new card's terms document (the Schumer Box) for the balance transfer fee, listed as a percentage. Most cards charge 3% or 5%. A few promotions charge $0.",
            ],
            [
              "4",
              "Set the promotional period length",
              "Enter the number of 0% APR months the card offers — typically 12, 15, 18, or 21 months. Longer is better; it lowers your monthly target and reduces timing risk.",
            ],
            [
              "5",
              "Enter your monthly payment goal",
              "Input how much you can realistically pay each month. The calculator compares this against the target payment and flags whether you're on pace to clear the debt in time.",
            ],
            [
              "6",
              "Interpret your net savings",
              "A positive net savings figure means the transfer is mathematically beneficial. A negative figure means the fee exceeds the interest you'd avoid — find a lower-fee card or consider alternatives.",
            ],
          ].map(([step, title, content]) => (
            <div key={step} className="btc-numbered">
              <span className="btc-num">{step}</span>
              <div className="btc-step-card">
                <div className="btc-step-card-title">
                  Step {step}: {title}
                </div>
                <p>{content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── ADVANTAGES / DISADVANTAGES ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Advantages and Disadvantages</h2>
        <div className="btc-proscons">
          <div className="btc-pros">
            <h3 className="btc-h3" style={{ fontSize: "1.1rem" }}>
              Advantages
            </h3>
            <ul>
              {[
                [
                  "Interest pause",
                  "Every payment reduces principal directly. No compounding interest working against you during the promotional window.",
                ],
                [
                  "Faster payoff",
                  "Without interest drag, balances fall faster on the same monthly payment — and the debt-free date arrives sooner.",
                ],
                [
                  "Credit utilization benefit",
                  "Opening a new card increases your total available credit. Keeping old zero-balance cards open can lower your overall utilization ratio.",
                ],
                [
                  "Clear deadline",
                  "The promo expiration date creates an actionable, fixed goal — a concrete month to become debt-free.",
                ],
                [
                  "Consolidation simplicity",
                  "Multiple card balances become one monthly payment to one issuer, reducing cognitive load and missed payment risk.",
                ],
              ].map(([title, desc]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="btc-cons">
            <h3 className="btc-h3" style={{ fontSize: "1.1rem" }}>
              Disadvantages
            </h3>
            <ul>
              {[
                [
                  "Upfront transfer fee",
                  "3%–5% of the transferred balance is added to your principal immediately. This must be overcome by interest savings.",
                ],
                [
                  "Credit requirements",
                  "Premium 0% offers are reserved for borrowers with good to excellent credit — excluding many who need relief most.",
                ],
                [
                  "Narrow payoff window",
                  "12–21 months is short for large balances. Miss the deadline and standard high APR applies to whatever remains.",
                ],
                [
                  "High post-promo rate",
                  "Standard variable rates on balance transfer cards often run 24%–29%. The fallback is expensive.",
                ],
                [
                  "New spending temptation",
                  "Having an open credit line invites spending, especially if the original debt came from overspending patterns.",
                ],
              ].map(([title, desc]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── 8 MISTAKES ── */}
      <section className="btc-section">
        <h2 className="btc-h2">8 Common Balance Transfer Mistakes</h2>
        <p className="btc-lead">
          An attractive promotional APR doesn't guarantee success. Each of these
          mistakes can erase your savings or leave you worse off than before.
        </p>
        {[
          {
            title: "1. Paying Only the Minimum",
            why: "Consumers treat the 0% period as a payment holiday rather than a payoff sprint.",
            consequence:
              "The promo ends with a large balance remaining, which then converts to standard high APR.",
            avoid:
              "Divide your total new balance by the promo months. Pay at least that amount every month.",
          },
          {
            title: "2. Missing the Promotional Deadline",
            why: "The exact expiration date drifts out of mind after the transfer completes.",
            consequence:
              "Deferred interest or a sudden high-rate conversion inflates the remaining debt sharply.",
            avoid:
              "Set two calendar alerts: one two months before expiration, one one month before.",
          },
          {
            title: "3. Ignoring the Transfer Fee",
            why: "The 0% rate grabs attention; the 3%–5% fee is buried in fine print.",
            consequence:
              "The fee may exceed the interest saved, making the transfer a net loss.",
            avoid:
              "Run the calculator before applying. Net savings must be a positive number.",
          },
          {
            title: "4. Applying Without Checking Your Credit Score",
            why: "Urgency for debt relief pushes borrowers to apply without checking eligibility first.",
            consequence:
              "Denial generates a hard inquiry that temporarily lowers your score — with no benefit.",
            avoid:
              "Use the issuer's pre-qualification tool (soft inquiry only) before submitting a formal application.",
          },
          {
            title: "5. Using the Card for New Purchases",
            why: "Having an active card in your wallet is tempting, especially during financial stress.",
            consequence:
              "New purchases at standard APR accrue interest from day one and complicate payment allocation.",
            avoid:
              "Remove the card from your wallet. Use it exclusively to service the transferred balance.",
          },
          {
            title: "6. Closing Old Accounts Immediately",
            why: "Eliminating temptation by closing the old card seems prudent.",
            consequence:
              "Closing reduces your total available credit and shortens average account age — both hurt your score.",
            avoid:
              "Keep zero-balance cards open. Make a small automated purchase monthly (paid in full) to keep them active.",
          },
          {
            title: "7. Transferring More Than You Can Afford to Pay",
            why: "Borrowers consolidate the maximum balance without modeling the required monthly payment.",
            consequence:
              "The target payment exceeds budget, leading to underpayment and an expensive balance at month-end.",
            avoidJSX: (
              <>
                Use a{" "}
                <Link href="/finance/debt-to-income-calculator">
                  Debt-to-Income Calculator
                </Link>{" "}
                to confirm the required payment fits your monthly cash flow
                before applying.
              </>
            ),
          },
          {
            title: "8. Assuming Same-Bank Transfers Are Allowed",
            why: "Borrowers don't read the fine print about eligible debt sources.",
            consequence:
              "The issuer rejects the transfer, wasting time and possibly the hard inquiry.",
            avoid:
              "Confirm that the debt originates from a different financial institution before applying. Same-bank transfers are almost always prohibited.",
          },
        ].map((m, i) => (
          <div key={i} className="btc-mistake">
            <h3>{m.title}</h3>
            <ul>
              <li>
                <span className="m-label m-why">Why it happens:</span>
                <span>{m.why}</span>
              </li>
              <li>
                <span className="m-label m-con">Consequence:</span>
                <span>{m.consequence}</span>
              </li>
              <li>
                <span className="m-label m-fix">How to avoid it:</span>
                <span>{m.avoidJSX || m.avoid}</span>
              </li>
            </ul>
          </div>
        ))}
      </section>

      <hr className="btc-hr" />

      {/* ── WHO BENEFITS ── */}
      <section className="btc-section">
        <h2 className="btc-h2">
          Who Benefits Most — and Who Should Consider Alternatives
        </h2>

        <h3 className="btc-h3" style={{ marginBottom: "0.875rem" }}>
          Best candidates for a balance transfer:
        </h3>
        {[
          [
            "High-APR cardholders (25%+)",
            "The interest avoided on a 25%–30% rate dramatically outweighs the transfer fee. This is the scenario where balance transfers deliver maximum value.",
          ],
          [
            "Consumers with excellent credit (740+)",
            "Qualifying for 18–21 month promos and low fees means lower monthly targets and maximum net savings.",
          ],
          [
            "People paying mostly interest",
            "If your monthly statement shows that most of your payment covers interest rather than principal, a 0% reset is highly impactful.",
          ],
          [
            "Short-term income constraint borrowers",
            "Those expecting a bonus, tax refund, or income increase within 12–18 months can bridge the gap without accumulating interest.",
          ],
          [
            "Multi-card consolidators",
            "Merging three or four high-rate balances into one 0% card simplifies tracking and removes the risk of missing a payment on one card.",
          ],
        ].map(([title, desc]) => (
          <div key={title} className="btc-candidate">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}

        <h3
          className="btc-h3"
          style={{ marginTop: "1.75rem", marginBottom: "0.875rem" }}
        >
          Better served by alternatives:
        </h3>
        {[
          [
            "Credit score below 620",
            "0% APR offers are inaccessible at this range. Focus on credit rebuilding or a Debt Management Plan with a non-profit counselor.",
          ],
          [
            "Need 3+ years to pay off",
            "The promotional period will expire long before the debt is clear. A fixed-rate personal loan with a multi-year term is a safer structure.",
          ],
          [
            "Unable to make current minimums",
            "A balance transfer moves the debt but doesn't fix the underlying cash flow problem. Broader credit counseling addresses the root cause.",
          ],
          [
            "Prefer payment certainty",
            "If an unchanging, predictable monthly payment over a fixed number of years is more important than the lowest total cost, an installment loan is better suited.",
          ],
          [
            "Facing major financial hardship",
            "Long-term unemployment, large medical debt, or insolvency may require legal interventions like bankruptcy or debt settlement that a balance transfer can't address.",
          ],
        ].map(([title, desc]) => (
          <div key={title} className="btc-candidate btc-candidate-alt">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}

        <p style={{ marginTop: "1.5rem" }}>
          If your situation points toward alternatives, an{" "}
          <Link href="/finance/apr-calculator">APR Calculator</Link> and{" "}
          <Link href="/finance/interest-calculator">Interest Calculator</Link>{" "}
          can quantify your current debt cost before comparing options.
        </p>
      </section>

      <hr className="btc-hr" />

      {/* ── RESULT INTERPRETATION ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Interpreting Your Calculator Results</h2>
        <p className="btc-lead">
          Three output numbers drive the decision. Here's what each one means in
          practice:
        </p>
        <div
          style={{
            background: "var(--surface",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          {[
            [
              "High net savings (positive number):",
              "The transfer is mathematically sound. This result is most common when transferring large balances from high-APR cards. Confirm that your monthly budget can hit the required target payment before applying.",
            ],
            [
              "Low or negative net savings:",
              "The transfer fee outweighs the interest you'd avoid. Common when the balance is small, the current APR is low, or the fee rate is high. In this case, look for a card with a lower fee — or keep the debt on the current card and pay it aggressively.",
            ],
            [
              "Target payment exceeds your budget:",
              "You can't realistically clear the debt before the promo expires. Rather than proceeding and accepting the risk, look for a card with a longer promotional period or a smaller balance to transfer — or consider a multi-year personal loan instead.",
            ],
          ].map(([bold, text], i) => (
            <div
              key={i}
              style={{
                padding: "1.1rem 1.25rem",
                borderBottom: i < 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <strong>{bold}</strong>{" "}
              <span
                style={{
                  color: "var(--ink-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── SAVINGS REFERENCE TABLE ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Estimated Savings Reference Table</h2>
        <p className="btc-lead">
          The table below shows potential first-year net savings across common
          balance sizes and APR levels, assuming a 3% transfer fee. Use it as a
          quick reference before running your specific numbers in the
          calculator.
        </p>
        <div className="btc-scroll-hint">← Scroll to see full table →</div>
        <div className="btc-table-wrap">
          <table className="btc-table btc-ref-table">
            <thead>
              <tr>
                <th>Balance</th>
                <th>Current APR</th>
                <th>Est. Annual Interest</th>
                <th>3% Fee Cost</th>
                <th>Est. 1-Year Net Savings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["$2,500", "18%", "~$450", "$75", "$375"],
                ["$2,500", "26%", "~$650", "$75", "$575"],
                ["$5,000", "18%", "~$900", "$150", "$750"],
                ["$5,000", "22%", "~$1,100", "$150", "$950"],
                ["$5,000", "30%", "~$1,500", "$150", "$1,350"],
                ["$10,000", "22%", "~$2,200", "$300", "$1,900"],
                ["$10,000", "26%", "~$2,600", "$300", "$2,300"],
                ["$10,000", "30%", "~$3,000", "$300", "$2,700"],
                ["$15,000", "18%", "~$2,700", "$450", "$2,250"],
                ["$15,000", "26%", "~$3,900", "$450", "$3,450"],
                ["$20,000", "24%", "~$4,800", "$600", "$4,200"],
                ["$20,000", "28%", "~$5,600", "$600", "$5,000"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="mono">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--ink-muted)",
            fontStyle: "italic",
            marginTop: "0.75rem",
          }}
        >
          Annual interest estimates assume no principal reduction during the
          year for comparison purposes. Actual savings vary with your payment
          schedule and exact amortization.
        </p>
      </section>

      <hr className="btc-hr" />

      {/* ── FAQs ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Frequently Asked Questions</h2>
        <div>
          {[
            [
              "Can I transfer balances from multiple cards?",
              "Yes — provided the combined transfer amounts plus fees don't exceed your new card's approved credit limit. Issuers allow consolidating multiple high-interest balances into a single 0% promotional account.",
            ],
            [
              "Can the same bank transfer be rejected?",
              "Yes. Most issuers prohibit transfers between their own products. For example, you cannot move a Chase Sapphire balance to a Chase Slate. Transfers must cross financial institutions.",
            ],
            [
              "How long does a balance transfer take to process?",
              "Most transfers complete within 3 to 14 business days. Continue making minimum payments on your old card during this window to avoid late fees or credit damage.",
            ],
            [
              "Does a balance transfer hurt my credit score?",
              "Initially, a hard inquiry reduces your score slightly. Over time, the transfer can improve your score by lowering your overall credit utilization — provided you keep the original card open and don't accumulate new balances.",
            ],
            [
              "What happens if I can't pay off the balance before the promo ends?",
              "Any remaining balance begins accruing interest at the card's standard variable APR — often 24% to 29%. You will not lose the savings already earned, but the remaining balance becomes significantly more expensive to carry.",
            ],
            [
              "Can I transfer a partial balance?",
              "Yes. You can transfer any amount up to your new card's credit limit, minus the fee. Transferring only the portion you can realistically clear during the promo period is a valid, lower-risk strategy.",
            ],
            [
              "Is the transfer fee negotiable?",
              "Rarely. Most fees are set in the cardholder agreement and applied automatically. However, some issuers periodically run promotions with $0 transfer fees — these are worth seeking out, especially for larger balances.",
            ],
            [
              "Do balance transfers earn rewards or cash back?",
              "No. Transfers are not categorized as purchases and do not generate rewards points, miles, or cash back. They also don't count toward introductory spending bonuses.",
            ],
            [
              "Does a balance transfer close my original card?",
              "No. Transferring the debt leaves the original account open with a zero balance. You must request closure separately if you want it closed — though keeping it open often benefits your credit utilization ratio.",
            ],
            [
              "Can I do multiple balance transfers over time?",
              "There is no legal limit on how many transfers you can perform. However, repeatedly opening new cards generates hard inquiries and lowers your average account age, both of which can negatively affect your credit score.",
            ],
            [
              "What is the maximum I can transfer?",
              "The cap is your new card's approved credit limit, minus the transfer fee. Some issuers also impose hard dollar limits (e.g., no single transfer exceeding $15,000), which are disclosed in the card agreement.",
            ],
            [
              "Are balance transfers taxable?",
              "No. Moving debt from one creditor to another is a restructuring of an existing liability, not income. The IRS does not treat balance transfers as taxable events.",
            ],
            [
              "Will my available credit increase after a transfer?",
              "Yes. Opening a new balance transfer card adds its credit limit to your total available credit. If you keep your old cards open, your total available credit rises while your total debt stays the same — lowering your utilization ratio.",
            ],
            [
              "Is a personal loan better than a balance transfer for large debt?",
              "It depends on your timeline. A balance transfer is cheaper if you can pay off the debt within 12–21 months at 0% APR. For debts that require 3 to 5 years to clear, a fixed-rate personal loan with predictable payments and no deadline risk is often the safer choice.",
            ],
            [
              "Can I transfer store card or retail card debt?",
              "Yes. High-interest store credit card balances (often 29%+) can be transferred to a major bank's balance transfer card. This is frequently one of the highest-value applications of a 0% transfer offer.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="btc-faq">
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="btc-hr" />

      {/* ── RELATED ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Related Financial Calculators</h2>
        <p className="btc-lead">
          These tools support a complete debt management strategy before and
          after your transfer decision:
        </p>
        {[
          {
            name: "Credit Card Payoff Calculator",
            desc: "Model how long it will take to clear your current card with different payment amounts — useful if you decide not to transfer.",
            href: "/finance/credit-card-payoff-calculator",
          },
          {
            name: "Debt Consolidation Calculator",
            desc: "Compare a fixed-rate personal loan against continued high-interest card payments to see which costs less over time.",
            href: "/finance/debt-consolidation-calculator",
          },
          {
            name: "Debt-to-Income Calculator",
            desc: "Check whether the required transfer payoff payment fits your monthly budget before applying for a new card.",
            href: "/finance/debt-to-income-calculator",
          },
          {
            name: "Personal Loan Calculator",
            desc: "Model multi-year fixed-rate payoff timelines — the right comparison tool if your balance needs more than 21 months to clear.",
            href: "/finance/personal-loan-calculator",
          },
        ].map((calc) => (
          <div key={calc.name} className="btc-related">
            <h4>
              <Link href={calc.href}>{calc.name}</Link>
            </h4>
            <p>{calc.desc}</p>
          </div>
        ))}
      </section>

      <hr className="btc-hr" />

      {/* ── METHODOLOGY ── */}
      <div className="btc-methodology">
        <h2 className="btc-h2" style={{ fontSize: "1.2rem" }}>
          Methodology, Assumptions & Editorial Standards
        </h2>
        {[
          [
            "Educational Disclaimer:",
            "All content and calculator outputs are for educational and informational purposes only. Nothing on this page constitutes financial, tax, or legal advice. Consult a certified financial planner or credit counselor before making material changes to your debt management strategy.",
          ],
          [
            "Calculation Methodology:",
            "Net savings estimates assume all target monthly payments are made on time, the promotional APR remains intact throughout the full period (no penalty-rate triggers), and no new purchases are added to the transfer card. Interest avoided is estimated using standard daily-periodic-rate amortization applied to the original balance.",
          ],
          [
            "Data Assumptions:",
            "Credit score ranges and approval likelihoods reflect general industry underwriting norms as of June 2026. Individual lender criteria vary. Promotional period lengths, transfer fees, and standard APRs cited represent typical current market offerings and are subject to change.",
          ],
          [
            "Content Update Policy:",
            "This article is reviewed and updated quarterly to reflect changes in the credit card marketplace, regulatory guidance, and consumer financial conditions. Rates and terms are verified against publicly available issuer disclosures at each update cycle.",
          ],
        ].map(([label, text]) => (
          <p key={label}>
            <strong>{label}</strong> {text}
          </p>
        ))}
      </div>

      {/* ── AUTHOR ── */}
      <div className="btc-author">
        <div className="btc-avatar">FE</div>
        <div>
          <div className="btc-author-name">
            Written by the Financial Editorial Team
          </div>
          <div className="btc-author-role">
            Reviewed by a Certified Financial Planner (CFP®)
          </div>
          <p className="btc-author-bio">
            Our editorial team specializes in personal finance, credit, and debt
            management content. All articles are fact-checked against primary
            sources including CFPB guidelines, Federal Reserve data, and major
            credit bureau publications before publication.
          </p>
        </div>
      </div>

      <hr className="btc-hr" />

      {/* ── SOURCES ── */}
      <section className="btc-section">
        <h2 className="btc-h2">References & Sources</h2>
        <ul className="btc-sources">
          <li>
            <strong>Consumer Financial Protection Bureau (CFPB):</strong>{" "}
            <a href="https://www.consumerfinance.gov/">
              Guidelines on credit card interest, fees, and consumer rights
            </a>
            .
          </li>
          <li>
            <strong>Federal Reserve:</strong>{" "}
            <a href="https://www.federalreserve.gov/">
              G.19 Consumer Credit report — average credit card interest rate
              data
            </a>
            .
          </li>
          <li>
            <strong>Experian:</strong>{" "}
            <a href="https://www.experian.com/">
              Credit utilization, hard inquiries, and balance transfer credit
              score impact
            </a>
            .
          </li>
          <li>
            <strong>FICO:</strong> Credit score factor weightings and scoring
            model documentation (myFICO.com).
          </li>
          <li>
            <strong>National Foundation for Credit Counseling (NFCC):</strong>{" "}
            Debt management plan structures and non-profit counseling resources.
          </li>
        </ul>
      </section>

      <hr className="btc-hr" />

      {/* ── CONCLUSION ── */}
      <section className="btc-section">
        <h2 className="btc-h2">Conclusion</h2>
        <p>
          A balance transfer converts what feels like a static debt problem —
          payments absorbed by interest — into a defined, winnable sprint. For
          the right borrower with the right plan, eliminating interest for 12 to
          21 months can save hundreds to thousands of dollars and accelerate
          debt freedom by years.
        </p>
        <p>
          The math is straightforward: net savings = interest avoided minus
          transfer fee. When that number is meaningfully positive and the
          required monthly payment is achievable, the case for transferring is
          strong. When it's negative, or the payment is unaffordable, a
          different tool — a personal loan, a debt management plan, or
          aggressive payoff on the current card — will serve you better.
        </p>
        <p>
          Use the calculator at the top of this page to ground your decision in
          your actual numbers. Enter your balance, current APR, and the terms of
          the card you're considering — then let the output guide your next step
          with clarity.
        </p>
      </section>
    </article>
  );
}
