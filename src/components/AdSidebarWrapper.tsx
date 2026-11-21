"use client";

import { usePathname } from "next/navigation";
import GoogleAdSidebar from "@/components/GoogleAdSidebar";

export default function AdSidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
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
