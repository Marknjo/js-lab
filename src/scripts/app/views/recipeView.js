import consoleSeparator from '../app';
//icons
import svgIcon from '../../../assets/images/icons.svg';

//fractional
import { Fraction } from 'fractional';

console.log(Fraction);

class RecipeView {
  //parent element
  #parentEl = document.querySelector('.recipe');

  //Data
  #data;

  // Error
  #errorMessage =
    '😔 We could not retrived the requested recipe. Please try again 🤞.';

  #message = '';

  #clear() {
    this.#parentEl.innerHTML = '';
  }

  renderError(message = this.#errorMessage) {
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

    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this.#message) {
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

    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${svgIcon}#icon-loader"></use>
          </svg>
        </div> 
    `;
    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  #generateMarkup() {
    return `
        <figure class="recipe__fig">
            <img src="${this.#data.image}" alt="Tomato" class="recipe__img" />
            <h1 class="recipe__title">
            <span>${this.#data.title}</span>
            </h1>
        </figure>

        <div class="recipe__details">
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${svgIcon}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${
              this.#data.cookingTime
            }</span>
            <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="${svgIcon}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${
              this.#data.servings
            }</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
                <button class="btn--tiny btn--increase-servings">
                <svg>
                    <use href="${svgIcon}#icon-minus-circle"></use>
                </svg>
                </button>
                <button class="btn--tiny btn--increase-servings">
                <svg>
                    <use href="${svgIcon}#icon-plus-circle"></use>
                </svg>
                </button>
            </div>
            </div>

            <div class="recipe__user-generated">
            <svg>
                <use href="${svgIcon}#icon-user"></use>
            </svg>
            </div>
            <button class="btn--round">
            <svg class="">
                <use href="${svgIcon}#icon-bookmark-fill"></use>
            </svg>
            </button>
        </div>

        <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${this.#data.ingredients
                  .map(ing => this.#generateMarkupIngredients(ing))
                  .join('')}
            </ul>
        </div>

        <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${
              this.#data.publisher
            }</span>. Please check out
            directions at their website.
            </p>
            <a
            class="btn--small recipe__btn"
            href="${this.#data.sourceUrl}"
            target="_blank"
            >
            <span>Directions</span>
            <svg class="search__icon">
                <use href="${svgIcon}#icon-arrow-right"></use>
            </svg>
            </a>
        </div>
    `;
  }

  #generateMarkupIngredients(ing) {
    return `
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
            <use href="${svgIcon}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${
              ing.quantity ? new Fraction(ing.quantity).toString() : ''
            }</div>
            <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
            </div>
        </li>
    `;
  }

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  render(data) {
    this.#data = data;

    const markup = this.#generateMarkup();

    this.#clear();
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new RecipeView();
