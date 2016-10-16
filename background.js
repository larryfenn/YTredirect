chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: "https://www.youtube.com/feed/subscriptions"};
    },
    {
        urls: [
            "*://*.youtube.com/"
        ]
    },
    ["blocking"]
);
