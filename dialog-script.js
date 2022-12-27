//script is executed 3 times. Don't know why???
//=> add a flag to make it run only once
var executed = false;

if (!executed) {
  executed = true;
  let data = localStorage.getItem("USER_PROFILE_EXT");

  if (data) {
    data = JSON.parse(data);
  }
  if (Array.isArray(data) && data.length) {
    closeCurrentDialog();

    const table = makeTable(data);
    const dialog = makeDialog(table);

    document.body.innerHTML += dialog;

    //add event handler to close 
    document.querySelector('#myModal span.close')
      .addEventListener('click', closeCurrentDialog)
  }
}

function closeCurrentDialog() {
  const dialogElement = document.getElementById("USER_PROFILE_DATA");
  if (dialogElement !== null) {
    document.body.removeChild(dialogElement);
  }
}


function makeTable(data) {
  const dataTemplate = '#DATA#';
  let table = `
    <style>
      .my-table {
        width: 100%;
      }
      .my-table > thead > tr > th {
        padding: 8px;
        border: 1px solid black;
      }
      .my-table > tbody > tr > td {
        padding: 8px; 
        border: 1px solid black; 
        vertical-align: middle; 
        text-align: center;
      }
    </style>
    <table class="my-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Avatar</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        ${dataTemplate}
      </tbody>
    </table>
  `;
  let dataRows = '';
  data.forEach((c, i) => {
    dataRows += `
      <tr>
        <td style="padding: 8px; border: 1px solid black; vertical-align: middle; text-align: center">${i + 1}</td>
        <td style="padding: 8px; border: 1px solid black; vertical-align: middle; text-align: center">
          <img height="40" width="40" src="${c.avatar}" alt="alt" />
        </td>
        <td style="padding: 8px; border: 1px solid black; vertical-align: middle">
          ${c.name}
        </td>
      </tr>

    `;
  })
  return table.replace(dataTemplate, dataRows);
}

function makeDialog(content) {
  const style = `
    .my-modal { 
      position: fixed; 
      z-index: 1; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0,0.4); 
    }
    
    .my-modal .modal-content {
      background-color: #fefefe;
      margin: 15% auto; 
      padding: 20px;
      border: 1px solid #888;
      width: 400px; 
    }
    
    .my-modal .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    
    .my-modal .close:hover,
    .my-modal .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  `;

  let dialog = `
    <div id="USER_PROFILE_DATA">
      <style>
        ${style}
      </style>
      <div id="myModal" class="my-modal">

        <div class="modal-content">
          <span class="close">&times;</span>
            ${content}
        </div>
      </div>
    </div>
  `;
  return dialog;
}