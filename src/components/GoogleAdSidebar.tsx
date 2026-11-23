"use client";

import React from "react";
import GoogleAdContainer from "@/components/GoogleAdContainer";

interface GoogleAdSidebarProps {
  position: "left" | "right";
  slotId?: string;
}

export default function GoogleAdSidebar({
  position,
  slotId,
}: GoogleAdSidebarProps) {
  return (
    <aside
      aria-label={`Advertisement ${position}`}
      className="hidden xl:block w-[160px] 2xl:w-[300px] flex-shrink-0 py-8 px-4 opacity-0 pointer-events-none select-none"
    >
      <div className="sticky top-28 sm:top-32 flex flex-col items-center">
        <GoogleAdContainer
          variant="sidebar"
          slotId={slotId}
          format="vertical"
          className="w-full"
        />
      </div>
    </aside>
  );
}
