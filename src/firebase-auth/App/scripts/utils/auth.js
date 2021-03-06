import { AUTH, DB } from '../configs/firebase';
import { setupGuides, setUpUI } from './guides';

//selectors
const signupForm = document.getElementById('signup-form');
const logoutBtn = document.getElementById('logout');
const loginForm = document.getElementById('login-form');
const createForm = document.getElementById('create-form');

//getting data from firebase
const fetchGuides = function () {
  DB.collection('guides').onSnapshot(
    snapshot => {
      setupGuides(snapshot.docs);
    },
    error => console.log(`💥💥💥 ${error}`)
  );
};

//Autheticating user status check
AUTH.onAuthStateChanged(user => {
  setUpUI(user);
  if (user) {
    fetchGuides();
  } else {
    setupGuides([]);
  }
});

/**
 * A helper function to close Materialize modal .i.e. After successful action
 *
 * @param {String} modalId Modal Id
 * @return void
 * @author Mark Njoroge
 */
const closeModalHelper = function (modalId) {
  const modal = document.getElementById(modalId);
  M.Modal.getInstance(modal).close();
};

//Signup
signupForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  //get the form input values 1. email & 2. password
  const formValues = new FormData(signupForm);
  const email = formValues.get('signup-email').trim().toLowerCase();
  const password = formValues.get('signup-password').trim();
  const bio = formValues.get('signup-bio').trim();

  //@TODO: Do some validations here first

  //send data to the database: Sign up user

  const credential = await AUTH.createUserWithEmailAndPassword(email, password);

  DB.collection('users').doc(credential.user.uid).set({
    bio,
  });

  //reset form values
  signupForm['signup-email'].value = '';
  signupForm['signup-password'].value = '';
  signupForm['signup-bio'].value = '';

  //set the focus to email
  signupForm['signup-email'].focus();

  //close the modal
  closeModalHelper('modal-signup');
});

//logout user
logoutBtn.addEventListener('click', async function (event) {
  event.preventDefault();

  await AUTH.signOut();
});

//login user
loginForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    //get form fields
    const formValues = new FormData(loginForm);

    const email = formValues.get('login-email').trim().toLowerCase();
    const password = formValues.get('login-password').trim();

    //@TODO: validata user details

    //login user
    const credential = await AUTH.signInWithEmailAndPassword(email, password);

    if (credential.code) {
      throw new Error('Password/Email Invalid');
    }

    //reset form fields & Keep focus to the emil field
    loginForm.reset();
    loginForm['login-email'].focus();

    //close modal
    closeModalHelper('modal-login');
  } catch (error) {
    console.error(` 💥💥💥 ${error}`);
  }
});

//Creating Guides
createForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    //grab the form values
    const formFieldsValues = new FormData(createForm);
    const content = formFieldsValues.get('content');
    const title = formFieldsValues.get('title');

    //@TODO: clense the values

    //save the info to the db
    await DB.collection('guides').add({
      title,
      content,
    });

    //reset the fields
    createForm.reset();
    createForm['title'].focus();

    //close the modal
    closeModalHelper('modal-create');
  } catch (error) {
    console.error(`💥💥💥 ${error}`);
  }
});
