//import icons
import svgIcon from '../../../assets/images/icons.svg';

//extend from view
import PreviewView from './previewView';

class ResultsView extends PreviewView {
  //parent element
  _parentEl = document.querySelector('.results');

  //Query string
  _query = '';

  _setErrorMessage() {
    this._errorMessage = `You searched for: (${this._query}) recipe. 😔 Sadly, we could not find recipes with that match. Please use a different word or a variation of the keyword 🤞.`;
  }

  getQueryString(query) {
    this._query = query;
    this._setErrorMessage();
  }

  //generate markup
  _generateMarkup() {
    return `${this._generateResultsInfoMarkup()} ${this._data
      .map(this._generateMarkupPreview)
      .join('')}`;
  }

  _generateResultsInfoMarkup() {
    return `
      <li class="preview">
          <div class="preview__recipe-counts">
              <span class="preview__recipe-page">${
                this.pageNo === 1 ? '' : `Page ` + this.pageNo + ` of `
              }</span> 
              <span class="preview__recipe-count"> ${
                this.pageNo === 1 ? 'About' : 'about'
              } ${this.totalRecipes} recipes</span>
          </div>
      </li>
    `;
  }
}

export default new ResultsView();
