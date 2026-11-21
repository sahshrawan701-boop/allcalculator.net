import React from 'react';

interface GoogleAdBannerProps {
  className?: string;
  slotId?: string; // e.g., "1234567890"
}

export default function GoogleAdBanner({ className = '', slotId }: GoogleAdBannerProps) {
  return (
        <div className={`w-full flex justify-center my-3 ${className}`}>

      {/* Placeholder for Google Adsense block */}
      <div className="w-full max-w-[970px] h-[90px] md:h-[250px] bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex flex-col items-center justify-center text-center p-4">
        <span className="text-sm text-slate-400 font-medium">
          Advertisement (Banner)
        </span>
        <span className="text-xs text-slate-400 mt-1">
          Responsive ad slot
        </span>
      </div>
      
      {/* 
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slotId || "XXXXXXXXXX"}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      */}
    </div>
  );
}
