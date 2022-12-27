document.getElementById('collect').addEventListener('click', async () => {
  const tab = await getCurrentTab();
  await chrome.runtime.sendMessage({
    from: "collect",
    tabId: tab.id,
  })
})

document.getElementById('show').addEventListener('click',  async () => {
  const tab = await getCurrentTab();
  await chrome.runtime.sendMessage({
    from: "show",
    tabId: tab.id,
  });
  window.close();
})

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}