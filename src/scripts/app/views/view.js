//import icons
import svgIcon from '../../../assets/images/icons.svg';

//Views Parent Class
export default class View {
  //parent element
  _parentEl = '';
  //Data
  _data;

  // Error
  _errorMessage = '';

  _message = '';

  _clear() {
    this._parentEl.innerHTML = '';
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <div>
            <svg>
                <use href="${svgIcon}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${message}</p>
        </div>
      `;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
        <div class="message">
            <div>
            <svg>
                <use href="${svgIcon}#icon-smile"></use>
            </svg>
            </div>
            <p>${message}</p>
        </div>
      `;

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${svgIcon}#icon-loader"></use>
          </svg>
        </div> 
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();

    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
