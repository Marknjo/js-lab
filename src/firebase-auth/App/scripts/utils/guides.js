//Selelctors

const guides = document.querySelector('.guides');

//setup guides
export const setupGuides = function (data) {
  if (data.length > 0) {
    //show data
    let html = '';
    data.forEach(doc => {
      const { content, title } = doc.data();
      html += `
         <li>
            <div class="collapsible-header grey lighten-4">${title}</div>
            <div class="collapsible-body white">${content}</div>
        </li>
      `;
    });
    guides.innerHTML = html;
  } else {
    //user is not logged in
    guides.innerHTML = `<h5 class="center-align">Login to View guides!</h5>`;
  }
};
