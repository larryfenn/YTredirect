var host = "https://www.youtube.com/feed/subscriptions";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: host};
    },
    {
        urls: [
            "*://youtube.com/",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);
