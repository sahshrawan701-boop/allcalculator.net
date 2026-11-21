'use client';

import { usePathname } from 'next/navigation';
import GoogleAdBanner from './GoogleAdBanner';

export default function GlobalTopBanner() {
  const pathname = usePathname();

  // Hide on home, login and signup pages
  if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
    return null;
  }

  return (
    <div className="pt-6 px-4 sm:px-8 max-w-[1400px] mx-auto w-full mb-4">
      <GoogleAdBanner />
    </div>
  );
}
