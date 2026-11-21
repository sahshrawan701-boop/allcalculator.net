import React from "react";

interface GoogleAdSidebarProps {
  position: "left" | "right";
}

export default function GoogleAdSidebar({ position }: GoogleAdSidebarProps) {
  return (
    <aside
      className={`hidden xl:block w-[160px] 2xl:w-[300px] flex-shrink-0 py-8 px-4 opacity-0`}
    >
      <div className="sticky top-30 flex flex-col items-center">
        {/* Placeholder for Google Adsense block */}
        <div className="w-full h-[600px] bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg flex items-center justify-center text-center p-4">
          <span className="text-sm text-slate-400 font-medium">
            Advertisement
            <br />
            (Google Ads)
          </span>
        </div>

        {/* You can insert the actual <ins> tag for Google Ads below: */}
        {/* 
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        */}
      </div>
    </aside>
  );
}
