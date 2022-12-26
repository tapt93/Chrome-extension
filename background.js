chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
  await chrome.scripting.executeScript({
    target: { tabId: request.tabId, allFrames: true },
    files: ['content-script.js'],
  });
});