import consoleSeparator from '../app';
//icons
import svgIcon from '../../../assets/images/icons.svg';

//fractional
import { Fraction } from 'fractional';

//parent view
import View from './view';

class AddRecipeView extends View {
  //parent element
  _parentEl = document.querySelector('.upload');

  #window = document.querySelector('.add-recipe-window');
  #overlay = document.querySelector('.overlay');
  #btnClose = document.querySelector('.btn--close-modal');
  #btnOpen = document.querySelector('.nav__btn--add-recipe');

  // Error
  _errorMessage =
    '😔 We could not retrived the requested recipe. Please try again 🤞.';

  _message = 'Recipe was successfully Uploaded';

  constructor() {
    super();
    this.#addHandlerShowWindow();
    this.#addHandleHideWindow();
  }

  toggleWindow() {
    this.#overlay.classList.toggle('hidden');
    this.#window.classList.toggle('hidden');
  }

  #toggleWindowOnEscapeKey(evt) {
    if (evt.key !== 'Escape') return;
    //close the window
    this.#overlay.classList.add('hidden');
    this.#window.classList.add('hidden');
  }

  #addHandlerShowWindow() {
    this.#btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  #addHandleHideWindow() {
    this.#btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this.#overlay.addEventListener('click', this.toggleWindow.bind(this));
    window.addEventListener(
      'keydown',
      this.#toggleWindowOnEscapeKey.bind(this)
    );
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (evt) {
      evt.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }
}

export default new AddRecipeView();
