"use client";

import React from "react";
import { usePathname } from "next/navigation";
import GoogleAdContainer from "./GoogleAdContainer";

interface GlobalTopBannerProps {
  slotId?: string;
  className?: string;
}

export default function GlobalTopBanner({
  slotId,
  className = "",
}: GlobalTopBannerProps) {
  const pathname = usePathname();

  // Hide on home, login, and signup pages
  if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2 opacity-0 pointer-events-none select-none ${className}`}
    >
      <GoogleAdContainer
        variant="leaderboard"
        format="horizontal"
        slotId={slotId}
      />
    </div>
  );
}
