class DateView {
  _copyrightDateEl = document.querySelector('.copyright-date');

  renderCurrentYear() {
    const date = new Date();
    const currYear = date.getFullYear();

    this._copyrightDateEl.textContent = currYear;
  }
}
export default new DateView();
