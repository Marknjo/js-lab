//Search view

class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    const inputField = this.#parentEl.querySelector('.search__field');
    inputField.value = '';
    inputField.blur();
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (evt) {
      evt.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
