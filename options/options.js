const keywordInput = document.getElementById("keyword-input");
const recipientInput = document.getElementById("recipient-input");
const replyInput = document.getElementById("reply-input");

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", () => {
  chrome.storage.sync.set({
    keyword: keywordInput.value,
    recipient: recipientInput.value,
    reply: replyInput.value,
  });
});

chrome.storage.sync.get(["keyword", "recipient", "reply"], (res) => {
  keywordInput.value = res.keyword;
  recipientInput.value = res.recipient;
  replyInput.value = res.reply;
});
