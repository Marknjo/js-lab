import { AUTH } from '../configs/firebase';

//Signup
const signupForm = document.getElementById('signup-form');

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
  const modal = document.getElementById('modal-signup');
  M.Modal.getInstance(modal).close();
});
