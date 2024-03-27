chrome.runtime.sendMessage(null, null);

chrome.runtime.onMessage.addListener((_msg, _sender, _sendResponse) => {
  const pList = document.getElementsByTagName("p");
  for (const p of pList) {
    console.log(p.innerHTML);
  }
});
