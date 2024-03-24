let currentURL;

chrome.runtime.onMessage.addListener((_msg, sender, _sendResponse) => {
  currentURL = sender.url;
});
