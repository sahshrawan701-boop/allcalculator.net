"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export type AdVariant =
  | "leaderboard"
  | "billboard"
  | "sidebar"
  | "in-article"
  | "auto";

export interface GoogleAdContainerProps {
  /** Google AdSense ad slot ID (e.g., "1234567890") */
  slotId?: string;
  /** Google AdSense publisher ID (default: "ca-pub-9144878288998314") */
  client?: string;
  /** Layout placement variant determining dimensions & recommended sizes */
  variant?: AdVariant;
  /** AdSense format attribute ("auto", "horizontal", "vertical", "rectangle") */
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  /** Whether to enable full-width responsive behavior (default: true) */
  responsive?: boolean;
  /** Additional CSS class names for the outer wrapper */
  className?: string;
}

const VARIANT_CONFIG: Record<
  AdVariant,
  {
    containerClasses: string;
    label: string;
    spec: string;
    defaultFormat: "auto" | "horizontal" | "vertical" | "rectangle";
  }
> = {
  leaderboard: {
    containerClasses:
      "w-full max-w-[970px] mx-auto min-h-[90px] sm:min-h-[100px]",
    label: "Top Leaderboard",
    spec: "728×90 / 970×90 • 320×50 Mobile",
    defaultFormat: "horizontal",
  },
  billboard: {
    containerClasses:
      "w-full max-w-[970px] mx-auto min-h-[140px] sm:min-h-[250px]",
    label: "Bottom Billboard",
    spec: "970×250 / 728×90 • 300×250 Mobile",
    defaultFormat: "auto",
  },
  sidebar: {
    containerClasses: "w-full min-h-[600px]",
    label: "Sticky Skyscraper",
    spec: "160×600 / 300×600 Wide Rail",
    defaultFormat: "vertical",
  },
  "in-article": {
    containerClasses:
      "w-full max-w-[728px] mx-auto min-h-[250px] sm:min-h-[280px]",
    label: "In-Article / Inline Ad",
    spec: "300×250 / 336×280 / Responsive",
    defaultFormat: "rectangle",
  },
  auto: {
    containerClasses: "w-full min-h-[90px]",
    label: "Responsive Ad Slot",
    spec: "Auto-Fluid Responsive",
    defaultFormat: "auto",
  },
};

export default function GoogleAdContainer({
  slotId,
  client = "ca-pub-9144878288998314",
  variant = "auto",
  format,
  responsive = true,
  className = "",
}: GoogleAdContainerProps) {
  const adPushedRef = useRef(false);
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.auto;
  const adFormat = format || config.defaultFormat;

  useEffect(() => {
    if (!slotId || !isClient || adPushedRef.current) return;

    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adPushedRef.current = true;
      }
    } catch {
      // Catch AdBlocker or script load race conditions safely
    }
  }, [slotId, isClient]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center my-2 opacity-0 pointer-events-none select-none transition-opacity ${className}`}
      aria-label="Advertisement Placement"
    >
      {slotId ? (
        /* Active Google AdSense Tag */
        <div
          className={`overflow-hidden flex items-center justify-center ${config.containerClasses}`}
        >
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={client}
            data-ad-slot={slotId}
            data-ad-format={adFormat}
            data-full-width-responsive={responsive ? "true" : "false"}
          />
        </div>
      ) : (
        /* Clean, Modern Ad Placement Placeholder */
        <div
          className={`w-full flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-4 transition-colors ${config.containerClasses}`}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-xs">
              <i className="fas fa-rectangle-ad text-xs" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Google Ads Placement • {config.label}
            </span>
          </div>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 text-center font-medium">
            {config.spec}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-200/60 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Ready for Slot ID
          </span>
        </div>
      )}
    </div>
  );
}
