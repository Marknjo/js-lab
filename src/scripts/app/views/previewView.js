//Preview View

//extend from view
import View from './view';

class PreviewView extends View {
  _generateMarkupPreview(rec) {
    const id = window.location.hash.slice(1);

    return `
        <li class="preview">
            <a class="preview__link ${
              id === rec.id ? 'preview__link--active' : ''
            }" href="#${rec.id}">
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

export default PreviewView;
