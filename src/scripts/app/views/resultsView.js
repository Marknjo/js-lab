//import icons
import svgIcon from '../../../assets/images/icons.svg';

//extend from view
import View from './view';

class ResultsView extends View {
  //parent element
  _parentEl = document.querySelector('.results');

  // Error
  _errorMessage =
    '😔 We could not retrived recipes from your search query. Please try again 🤞.';

  _message = '';

  //generate markup
  _generateMarkup() {
    return this._data.map(this.#generateMarkupPreview).join('');
  }

  #generateMarkupPreview(rec) {
    return `
        <li class="preview">
            <a class="preview__link" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
                
              </div>
            </a>
          </li>
      `;
  }
}

export default new ResultsView();
