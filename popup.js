document.getElementById('collect').addEventListener('click', async () => {
  const tab = await getCurrentTab();
  await chrome.runtime.sendMessage({
    from: "newScript",
    tabId: tab.id,
  });
})

// document.getElementById('show').addEventListener('click', () => {
//   let data = localStorage.getItem("USER_PROFILE_EXT");
//   if (data) {
//     data = JSON.parse(data);
//   }
//   if (Array.isArray(data) && data.length) {
//     const listDOM = document.getElementById('list');

//     data.forEach(c => {
//       const item = document.createElement('div');
//       item.style.display = 'flex';

//       const img = document.createElement('img');
//       img.height = 20;
//       img.width = 20;
//       img.src = c.avatar;
//       img.alt = "alt";

//       const name = document.createElement('span');
//       name.innerHTML = profile.name;
//       name.style.marginLeft = 10;

//       item.appendChild(img);
//       item.appendChild(name);

//       listDOM.appendChild(item)
//     })
//     listDOM.style.display = 'flex';
//     listDOM.style.gap = 4;
//   }
// })

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}