chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }; },
    {
        urls: [
            "*://*.google-analytics.com/*",
            "*://*.zedo.com/*",
            "*://*.doubleclick.net/*",
            "*://*.adnxs.com/*",
            "*://*.adsafeprotected.com/*",
            "*://*.adroll.com/*",
            "*://*.criteo.com/*",
            "*://*.rubiconproject.com/*",
            "*://*.appnexus.com/*",
            "*://*.openx.net/*",
            "*://*.pubmatic.com/*",
            "*://*.sovrn.com/*",
            "*://*.indexexchange.com/*",
            "*://*.adform.net/*",
            "*://*.adzerk.com/*",
            "*://*.adblade.com/*",
            "*://*.adcolony.com/*",
            "*://*.adf.ly/*",
            "*://*.adfoc.us/*",
            "*://*.adfreetime.com/*"
        ]
    },
    ["blocking"]
);