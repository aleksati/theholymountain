import React from "react";
import Script from "next/script";

// Global Tag (gtag.js) - Google Analytics
const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CME4HPB5J2"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CME4HPB5J2');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
