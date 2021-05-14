/**
 * Creates a separator markers with a title on the console
 * @param {String} title
 * @param {Number} separatorLen
 */
const consoleSeparator = (title = './END', separatorLen = 20) => {
  console.log('\n\n');
  console.log(
    `${'-'.repeat(separatorLen)}     ${title}      ${'-'.repeat(separatorLen)}`
  );
  console.log('\n');
};

//////////////////////////////////////////////
//                                          //
//          Asychronous JavaScript          //
//                                          //
//////////////////////////////////////////////

('use strict');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const messageBox = document.querySelector('.message-box');

//////////////////////////////////////////////
//                                          //
//          Asychronous JavaScript          //
//               XMLHttpRequest             //
//                                          //
//////////////////////////////////////////////
//

//Old school way
/* const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    const langs = data.languages.map(lang => lang.name);

    let html = '';
    html += `
   <article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>`;
    langs.forEach((lang, i) => {
      if (langs.length - 1 === i) {
        html += ` ${langs.length === 1 ? '' : '&'} ${lang}`;
      } else {
        html += `${lang}${langs.length > 2 ? ',' : ''} `;
      }
    });

    html += `</p>`;

    html += `<p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('kenya');
getCountryData('portugal');
getCountryData('usa');
 */

//////////////////////////////////////////////
//                                          //
//          Asychronous JavaScript          //
//               Callback Hell              //
//                                          //
//////////////////////////////////////////////
//

const renderCountry = (data, neighbour = '') => {
  const listLanguages = data => {
    let html = '';

    const langs = data.languages.map(lang => lang.name);

    langs.forEach((lang, i) => {
      if (langs.length - 1 === i) {
        html += ` ${langs.length === 1 ? '' : '&'} ${lang}`;
      } else {
        html += `${lang}${langs.length > 2 ? ',' : ''} `;
      }
    });

    return html;
  };

  const calcPopInMillions = data => (+data.population / 1000000).toFixed(1);

  let html = '';
  html += `
   <article class="country ${neighbour}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${calcPopInMillions(
        data
      )} people</p>
      <p class="country__row"><span>🗣️</span>${listLanguages(data)}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const rmvMessBy = 25000;

const messageBoxHTML = (msgText, messType) => {
  let formatMessType = '';
  switch (messType) {
    case 'error':
      formatMessType = 'message--error';
      break;

    case 'success':
      formatMessType = 'message--success';
      break;

    case 'warning':
      formatMessType = 'message--warning';
      break;

    case 'info':
      formatMessType = 'message--info';
      break;

    default:
      formatMessType = '';
  }

  return `<p class="message ${formatMessType}"><span class="message__text">${msgText}</span> <span class="message__close">&times;</span></p>`;
};

const removeMessFromDOM = (mess, removeMsgTime) => {
  mess.classList.add('fadeIn');

  setTimeout(() => {
    mess.classList.remove('fadeIn');

    mess.classList.add('fadeOut');

    setTimeout(() => {
      mess.remove();
    }, 500);
  }, removeMsgTime);
};

const renderMessToDOM = function (msgText, messType = '') {
  //check if there is array of messages
  messageBox.insertAdjacentHTML('beforeend', messageBoxHTML(msgText, messType));

  const messages = messageBox.querySelectorAll('.message');

  if (messages.length > 1) {
    //get the messsage context box
    messages.forEach((mess, i) => {
      removeMessFromDOM(mess, rmvMessBy);
    });
  } else if (messages.length === 1) {
    removeMessFromDOM(messages[0], rmvMessBy);
  }
};

//remove message from DOM by clicking it
messageBox.addEventListener('click', e => {
  if (!e.target.classList.contains('message__close')) return;

  const mess = e.target.closest('.message');

  removeMessFromDOM(mess, 0);
});

/* const getNeghboursCountyByCode = borders => {
  if (borders.length === 0) return;

  //get the borders
  borders.forEach(code => {
    getNeighbouringCountry(code, false);
  });
};

const getNeighbouringCountry = code => {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
  request.send();

  request.addEventListener('load', function () {
    const apiData = JSON.parse(this.responseText);

    //render country 1
    renderCountry(apiData, 'neighbour');

    //callback hell
    //getNeghboursCountyByCode(apiData.borders);
  });
};

const getCountryAndNeighbour = (country, isCountryName = true) => {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    isCountryName
      ? `https://restcountries.eu/rest/v2/name/${country}`
      : `https://restcountries.eu/rest/v2/alpha/${country}`
  );
  request.send();

  request.addEventListener('load', function () {
    const [apiData] = JSON.parse(this.responseText);

    //render country 1
    renderCountry(apiData);

    //callback hell
    getNeghboursCountyByCode(apiData.borders);
  });
};

const url = getCountryAndNeighbour('kenya'); */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//          Promises & Fetch API            //
//                                          //
//////////////////////////////////////////////
//

/* const getCountryData = country => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);

  request
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('kenya'); */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//            Chaining Promises             //
//                                          //
//////////////////////////////////////////////
//
const getNeighbours = country => {
  return fetch(`https://restcountries.eu/rest/v2/alpha/${country}`);
};

const getNeghboursCountyByCode = borders => {
  if (borders.length === 0) return;

  const responses = [];
  borders.forEach(code =>
    getNeighbours(code)
      .then(response => response.json())
      .then(data => {
        renderCountry(data, 'neighbour');
        return responses.push(data);
      })
  );

  return responses;
};

const getCountryData = country => {
  const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`);

  request
    .then(response => response.json())
    .then(data => {
      data = data[0];
      renderCountry(data);

      return getNeghboursCountyByCode(data.borders);
    })
    .catch(err => {
      console.error(`${err} 💥 💥 💥`);

      renderMessToDOM(
        `Something went wrong 💥💥 ${err.message}. Try Again`,
        'error'
      );
    });
};

btn.addEventListener('click', function () {
  getCountryData('adas');
});

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
