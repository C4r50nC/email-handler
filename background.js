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
  let isInbox = checkURL(currentURL);
  if (isInbox) {
    console.log("Inbox!");
  }
});

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, _tab) => {
  const currentURL = changeInfo.url;
  let isInbox = checkURL(currentURL);
  if (isInbox) {
    console.log("Inbox!");
  }
});
