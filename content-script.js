var LOCAL_STORAGE_KEY = "USER_PROFILE_EXT";
var allowedRegURLs = [
  /https:\/\/www.linkedin.com\/in\//
];

//only this function is executed
executeCollectUserProfile();



function executeCollectUserProfile(){
  if (canThisSiteRunScript()) {
    const result = collectProfileData();
    if (result) {
      saveToLocalStorage(result);
    }
  }
  else {
    alert('Can not collect profile from this site')
  }
}

function collectProfileData() {
  const nameDOM = document.querySelector('#main .pv-top-card .pv-text-details__left-panel h1');
  const pictureDOM = document.querySelector('#main .pv-top-card .pv-top-card-profile-picture img')
  const memberId = document.querySelector('#main section.pv-top-card');

  if (nameDOM && pictureDOM && memberId) {
    return {
      name: nameDOM.innerHTML,
      avatar: pictureDOM.getAttribute('src'),
      id: memberId.getAttribute('data-member-id')
    }
  }
  return null;
}


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

function canThisSiteRunScript() {
  return allowedRegURLs.some(c => c.test(location.href))
}