chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.from) {
    case 'collect':
      chrome.scripting.executeScript({
        target: { tabId: request.tabId, allFrames: true },
        files: ['content-script.js'],
      });
      break;
    case 'show':
      chrome.scripting.executeScript({
        target: { tabId: request.tabId, allFrames: true },
        files: ['dialog-script.js'],
      });
      break;
    default:
      break;
  }
});