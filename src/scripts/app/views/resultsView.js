//import icons
import svgIcon from '../../../assets/images/icons.svg';

//extend from view
import View from './view';

class ResultsView extends View {
  //parent element
  _parentEl = document.querySelector('.results');

  //Query string
  _query = '';

  #setErrorMessage() {
    this._errorMessage = `You searched for: (${this._query}) recipe. 😔 Sadly, we could not find recipes with that match. Please use a different word or a variation of the keyword 🤞.`;
  }

  getQueryString(query) {
    this._query = query;
    this.#setErrorMessage();
  }

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

  #generateResultsPerPageMarkup() {
    return `
        <li class="preview">
            <div>Showing ${this._data.length} </div>
          </li>
      `;
  }
}

export default new ResultsView();
