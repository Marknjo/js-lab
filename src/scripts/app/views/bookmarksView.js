//Bookmarks view

//import icons
import svgIcon from '../../../assets/images/icons.svg';
import previewView from './previewView';

class BookmarksView extends previewView {
  //parent element
  _parentEl = document.querySelector('.bookmarks__list');

  //messsage
  _errorMessage = `😔 No bookmarks yet. Find a nice recipe and bookmark it 🤞.`;

  //generate markup
  _generateMarkup() {
    return `${this._data.map(this._generateMarkupPreview).join('')}`;
  }
}

export default new BookmarksView();
