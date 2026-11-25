import Script from "next/script";

export function GoogleTagManager() {
  return (
    // App Router root layouts support beforeInteractive scripts.
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script id="google-tag-manager" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KN9NX6K3');`}
    </Script>
  );
}
