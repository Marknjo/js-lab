//Selelctors

import { DB } from '../configs/firebase';

const guides = document.querySelector('.guides');

const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const accountDetails = document.querySelector('.account-details');

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

const showUserInfo = function (userEmail, bio = '') {
  if (userEmail) {
    const html = `
              <div>Logged in as ${userEmail}</div>
              <div>${bio}</div>
          `;
    accountDetails.innerHTML = html;
  } else {
    accountDetails.innerHTML = '';
  }
};

const fetchExtraUserInfo = async function (user) {
  try {
    const doc = await DB.collection('users').doc(user.uid).get();
    showUserInfo(user.email, doc.data().bio);
  } catch (error) {
    console.log(`💥💥💥 ${error}`);
  }
};

//setup UI
export const setUpUI = function (user) {
  if (user) {
    //handling account Info
    //showUserInfo(user)
    fetchExtraUserInfo(user);
    //toggle UI elements
    loggedInLinks.forEach(el => (el.style.display = 'block'));
    loggedOutLinks.forEach(el => (el.style.display = 'none'));
  } else {
    showUserInfo('');
    //toggle UI elements
    loggedInLinks.forEach(el => (el.style.display = 'none'));
    loggedOutLinks.forEach(el => (el.style.display = 'block'));
  }
};
