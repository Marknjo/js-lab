import { AUTH } from '../configs/firebase';

//selectors
const signupForm = document.getElementById('signup-form');
const logoutBtn = document.getElementById('logout');
const loginForm = document.getElementById('login-form');

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

  //@TODO: Do some validations here first

  //send data to the database: Sign up user

  const credential = await AUTH.createUserWithEmailAndPassword(email, password);

  //reset form values
  signupForm['signup-email'].value = '';
  signupForm['signup-password'].value = '';

  //set the focus to email
  signupForm['signup-email'].focus();

  //close the modal
  closeModalHelper('modal-signup');
});

//logout user
logoutBtn.addEventListener('click', async function (event) {
  event.preventDefault();

  const resp = await AUTH.signOut();

  console.log('User Signed Out');
  console.log(resp);
});

//login user
loginForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    //get form fields
    const formValues = new FormData(loginForm);

    const email = formValues.get('login-email').trim().toLowerCase();
    const password = formValues.get('login-password').trim();

    //validata user details
    console.log(email);
    console.log(password);

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
