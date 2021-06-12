//Selelctors

const guides = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

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

//setup UI
export const setUpUI = function (user) {
  if (user) {
    //toggle UI elements
    loggedInLinks.forEach(el => (el.style.display = 'block'));
    loggedOutLinks.forEach(el => (el.style.display = 'none'));
  } else {
    //toggle UI elements
    loggedInLinks.forEach(el => (el.style.display = 'none'));
    loggedOutLinks.forEach(el => (el.style.display = 'block'));
  }
};
