"use client";

import React from "react";
import { usePathname } from "next/navigation";
import GoogleAdSidebar from "@/components/GoogleAdSidebar";

export default function AdSidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isExcluded =
    pathname === "/" || pathname === "/login" || pathname === "/signup";

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <GoogleAdSidebar position="left" />
      {children}
      <GoogleAdSidebar position="right" />
    </>
  );
}
