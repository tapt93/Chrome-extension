var LOCAL_STORAGE_KEY = "USER_PROFILE_EXT";

(() => {
  const result = {};

  const nameDOM = document.querySelector('#main .pv-top-card .ph5 .pv-text-details__left-panel h1');
  const pictureDOM = document.querySelector('#main .pv-top-card .pv-top-card-profile-picture img')
  const memberId = document.querySelector('#main section.pv-top-card');

  if (nameDOM && pictureDOM && memberId) {
    result.name = nameDOM.innerHTML;
    result.avatar = pictureDOM.getAttribute('src');
    result.id = memberId.getAttribute('data-member-id');
    saveToLocalStorage(result);
  }
})()

function saveToLocalStorage(profile) {
  let data = [];
  const existedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (existedData) {
    data = JSON.parse(existedData);
  }
  if (!data.some(c => c.id === profile.id)) {
    data.push(profile);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }
}