let currentURL = "";

// Function to check if the current URL matches the Gmail URL
function checkURL(currentURL) {
  // Define the pattern for Gmail URLs
  const gmailURLPattern =
    /^https:\/\/mail\.google\.com\/mail\/u\/\d+\/.*#inbox\/[A-Za-z0-9]+$/;
  // Check if the current URL matches the pattern
  return gmailURLPattern.test(currentURL);
}

chrome.runtime.onMessage.addListener((_msg, sender, _sendResponse) => {
  currentURL = sender.url;
  getBodyText(currentURL);
});

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, _tab) => {
  const currentURL = changeInfo.url;
  getBodyText(currentURL);
});

function getBodyText(currentURL) {
  let isInbox = checkURL(currentURL);
  if (!isInbox) {
    return;
  }

  // Send to content script to get innerHTML from all p tags
  chrome.runtime.sendMessage(null, null);
}
