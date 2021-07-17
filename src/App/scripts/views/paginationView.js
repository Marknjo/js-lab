//pagination view
//import icons
import svgIcon from '../../assets/images/icons.svg';

//extend from view
import View from './view';

class PaginationView extends View {
  //parent element
  _parentEl = document.querySelector('.pagination');

  //Query string
  _query = '';

  //numPages
  numPages;

  setNumPages() {
    const { estTotalPages: numPages } = this._data;
    this.numPages = numPages;
  }

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (evt) {
      evt.preventDefault();
      const btn = evt.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      //prevent loading a page if gablish is provided for
      if (!goToPage) return;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    //set numpages
    this.setNumPages();

    const curPage = this._data.page;

    if (curPage === 1 && this.numPages > 1) {
      return this.#generateRightPagMarkup(curPage);
    }
    //page1, and there are other pages
    //Last page
    if (curPage === this.numPages && this.numPages > 1) {
      return this.#generateLeftPagMarkup(curPage);
    }

    //Other page
    if (curPage < this.numPages && curPage > 1) {
      return `${this.#generateLeftPagMarkup(
        curPage
      )} ${this.#generateRightPagMarkup(curPage)}`;
    }

    //page 1, and there are NO other pages
    return '';
  }

  #generateRightPagMarkup(curPage) {
    return `
        <button data-goto=${
          curPage + 1
        } class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
                <use href="${svgIcon}#icon-arrow-right"></use>
            </svg>
        </button>
      `;
  }

  #generateLeftPagMarkup(curPage) {
    return `
        <button data-goto=${
          curPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${svgIcon}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button> 
      `;
  }
}

export default new PaginationView();
