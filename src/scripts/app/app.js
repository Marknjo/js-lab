//Challenge #2 images
import img1 from '../../assets/images/img-1.jpg';
import img2 from '../../assets/images/img-2.jpg';
import img3 from '../../assets/images/img-3.jpg';

const mapImages = {
  img1,
  img2,
  img3,
};

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

const imgContainer = document.querySelector('.images');

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
/* const buildRequestURL = (cName, isCName = true) => {
  let country = `name/${cName}`;
  let code = `alpha/${cName}`;

  return fetch(`https://restcountries.eu/rest/v2/${isCName ? country : code}`);
};

const catchRespErr = (response, errMess = 'Something went wrong 😞!') => {
  if (!response.ok) throw new Error(`${errMess} 😞! (${response.status})`);

  return response.json();
};

const getNeghboursCountyByCode = (borders, parentCountry = 'Country') => {
  //handle error if borders is wrong data/corrupt
  if (borders.length === 0)
    throw new Error(
      `${parentCountry} does not have a bordering country or the supplied country code is not in the database`
    );

  const errMess = 'Neibouring Country Not Found';

  //neighbouring country === 1
  if (borders.length === 1) {
    return fetchJSON(borders[0], false, errMess);
  }

  //neighbouring country > 1
  borders.forEach(code =>
    buildRequestURL(code, false)
      .then(response => catchRespErr(response, errMess))
      .then(data => {
        renderCountry(data, 'neighbour');
      })
  );

  return null;
};

const fetchJSON = (cName, isCName = true, errMess) => {
  return buildRequestURL(cName, isCName).then(response =>
    catchRespErr(response, errMess)
  );
};

const getCountryData = country => {
  fetchJSON(country, true, 'Country not Found')
    .then(data => {
      data = data[0];

      //render parent country
      renderCountry(data);

      //handle rendering neighbouring countries
      return getNeghboursCountyByCode(data.borders, data.name);
    })
    .then(data => {
      return data && renderCountry(data, 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💥 💥 💥`);

      renderMessToDOM(
        `Something went wrong 💥💥 ${err.message}. Try Again`,
        'error'
      );
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');

  //getCountryData('kenya');
});
 */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//         Event loop in practice           //
//                                          //
//////////////////////////////////////////////
//

//You cannot do high precision stuff with setTimeout
//because it is queues in the event loop while micro tasks
// are given higher priority in the microtask runner queue

/* console.log('Test start');

setTimeout(() => console.log('0 sec timer'), 0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i <= 1000000000; i++) {
    if (i === 1000000000) {
      console.log('Micro task runner finished');
    }
  }

  console.log(res);
});

console.log('Test end'); */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//        Building A simple Promise         //
//                                          //
//////////////////////////////////////////////
//

//promisefying
/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('🥂 You WIN 💰💰💰');
    } else {
      reject(new Error('😭 You lost your money 💩💩💩!'));
    }
  }, 2000);
});

lotteryPromise
  .then(res => {
    renderMessToDOM(res, 'success');
  })
  .catch(e => {
    console.error(e);
    renderMessToDOM(e, 'error');
  });

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 seconds')); */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//        Promisifying Geolocation          //
//                                          //
//////////////////////////////////////////////
//

//Promisifying the geolocation API
/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(new Error(err))
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.error(e);
  });
 */
//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//           ES2017: Async Await            //
//                                          //
//////////////////////////////////////////////
//

//syntatic sugar over the .then methods

/* const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(new Error(err))
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  //1 | more awaits
  try {
    //get current user coordinates
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    //Use geocode to fetch user location use coordinates
    const ctry = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    //handle error message for geocode
    if (!ctry.ok) throw new Error('Ploblem getting location data');

    const ctryNameData = await ctry.json();

    //use restcountries to fetch user home country
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${ctryNameData.country}`
    );

    //handle error message for country
    if (!res.ok) throw new Error('Ploblem getting country');

    const data = await res.json();

    //show the user current country on the screen
    renderCountry(data[0]);

    return `My city is ${ctryNameData.city}, ${ctryNameData.country}`;
  } catch (error) {
    console.error(`${error} 💥`);
    renderMessToDOM(`${error.message} 💥💥💥`, 'error');

    //delagate error
    throw error;
  } finally {
    //all is well. No error
    countriesContainer.style.opacity = 1;
  }
};

//whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();

(async function () {
  try {
    const city = await whereAmI();

    renderMessToDOM(city, 'info');
    //await the results
  } catch (err) {
    //handle delagated errors
    renderMessToDOM(err, 'error');
  }
})(); 

const getNeghboursCountyByCode = borders => {
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

getCountryData('kenya'); 


//To be retrieved on demand
const getNeghboursCountyByCode = (borders, parentCountry = 'Country') => {
  //handle error if borders is wrong data/corrupt
  if (borders.length === 0)
    throw new Error(
      `${parentCountry} does not have a bordering country or the supplied country code is not in the database`
    );

  const errMess = 'Neibouring Country Not Found';

  //neighbouring country === 1
  if (borders.length === 1) {
    return fetchJSON(borders[0], false, errMess);
  }

  //neighbouring country > 1
  borders.forEach(code =>
    buildRequestURL(code, false)
      .then(response => catchRespErr(response, errMess))
      .then(data => {
        renderCountry(data, 'neighbour');
      })
  );

  return null;
};



*/

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//      Running Promises in Parallel        //
//                                          //
//////////////////////////////////////////////
//

/* const catchRespErr = (response, errMess = 'Something went wrong 😞!') => {
  if (!response.ok) throw new Error(`${errMess} 😞! (${response.status})`);

  return response.json();
};

const fetchJSON = async (cName, isCName = true) => {
  let country = `name/${cName}`;
  let code = `alpha/${cName}`;

  const response = await fetch(
    `https://restcountries.eu/rest/v2/${isCName ? country : code}`
  );

  return catchRespErr(response, "Can't fetch the country 💥💥💥");
};

const getMultipleCountries = async (c1, c2, c3) => {
  try {
    //  const [data1] = await fetchJSON(c1);

    // console.log(data1.name);

    // const [data2] = await fetchJSON(c2);

    // console.log(data2.name);

    // const [data3] = await fetchJSON(c3);

    // console.log(data3.name); 

    //Promise.all -> takes in an array of promises and return them at once

    const data = await Promise.all([
      fetchJSON(c1),
      fetchJSON(c2),
      fetchJSON(c3),
    ]);

    console.log(data);
    data.forEach(c => {
      renderCountry(c[0]);
    });
  } catch (e) {
    console.error(`${e} 💥💥`);
    renderMessToDOM(e, 'error');
  } finally {
    countriesContainer.style.opacity = 1;
    countriesContainer
      .querySelectorAll('.country')
      .forEach(el => (el.style.marginBottom = '6rem'));
  }
};

getMultipleCountries('kenya', 'australia', 'uganda'); */

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//          Coding challenge #01            //
//                                          //
//////////////////////////////////////////////
//

// function whereAmI
// Chains 2 promises
// renders a country based on the GPS location - need GPS
// 2nd API that

// const whereAmI = (lat, lng) => {
//   //use the navigator

//   //use promise to fetch the data
//   const geoCodedCountry = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

//   //handle the promise
//   geoCodedCountry
//     .then(resp => {
//       if (!resp.ok)
//         throw new Error(
//           `Something went wrong. Could not fetch the country using the requested coordinates: Latitude:${lat} & Longitude: ${lng}.`
//         );

//       return resp.json();
//     })
//     .then(data => {
//       if (data.error)
//         throw new Error(`${data.error.description} (Code:${data.error.code})`);

//       //fetch the country name

//       const { city, country } = data;

//       renderMessToDOM(`You are in ${city}, ${country}`, 'info');

//       //fetch countries
//       return fetch(
//         `https://restcountries.eu/rest/v2/name/${country.toLowerCase()}`
//       );
//     })
//     .then(resp => {
//       if (!resp.ok)
//         throw new Error(
//           `Something went wrong. Could not fetch the requested country (${country}).`
//         );

//       return resp.json();
//     })
//     .then(countryDt => {
//       const [data] = countryDt;
//       renderCountry(data);
//     })
//     .catch(err => {
//       renderMessToDOM(err, 'error');
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//       countriesContainer
//         .querySelectorAll('.country')
//         .forEach(c => (c.style.marginBottom = '6rem'));
//     });
// };

// //whereAmI('h', 13.381); //test for errors
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//////////////////////////////////////////////
//                                          //
//         Asychronous JavaScript           //
//          Coding challenge #02            //
//                                          //
//////////////////////////////////////////////
//

const wait = function (secs) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), secs * 1000);
  });
};



btn.style.display = 'none';

const fetchUrl = url => {
  return new Promise((resolve, reject) => {
    if (url) {
      resolve(fetch(url));
    }

    reject(new Error(`Can't find the requested image: (${url})`));
  });
};

/* const createImage = function (imgPath) {
  return fetchUrl(imgPath)
    .then(url => {
      if (!url.ok) {
        throw new Error(` ${url.status}. Could not fetch Image. `);
      }
      return new URL(url.url).pathname;
    })
    .then(validPath => {
      return new Promise(resolve => {
        const imgN = validPath
          .split('/')
          .slice(-1)[0]
          .split('.')[0]
          .split('-')[1];

        const img = document.createElement('img');
        img.src = validPath;
        img.alt = `Image ${imgN}`;
        img.classList.add(`image--${imgN}`);

        img.addEventListener('load', function () {
          resolve(imgContainer.insertAdjacentElement('beforeend', img));
        });
      });
    });
}; 

const loadImg = resp => {
  if (!resp) {
    throw new Error(` Could not fetch Image. `);
  }

  resp.addEventListener('load', function () {
    imgContainer.insertAdjacentElement('beforeend', resp);
  });

  return wait(5);
};


/* createImage(img1)
  .then(resp => {
    return loadImg(resp);
  })
  .then(() => {
    imgContainer.querySelector('.image--1').style.display = 'none';

    return createImage(img2);
  })
  .then(resp => {
    return loadImg(resp);
  })
  .then(() => {
    imgContainer.querySelector('.image--2').style.display = 'none';

    return createImage(img3);
  })
  .then(resp => {
    return loadImg(resp);
  })
  .then(() => {
    imgContainer.querySelector('.image--3').style.display = 'none';
  })
  .catch(err => {
    console.error(err);
    renderMessToDOM(err, 'error');
  }); 

 const buildImg = resp => {
  
  //there is a response

  
}; 

 createImage(img1)
  .then(resp => {
    buildImg(resp);

    return wait(2);
  })
  .then(() => {
    //wait loading the first image
    //load img #1
    imgContainer.querySelector('.image--1').style.display = 'none';

    return createImage(img2);
  })
  .then(resp => {
    buildImg(resp);

    return wait(2);
  })
  .then(() => {
    //wait loading the first image
    //load img #1
    imgContainer.querySelector('.image--2').style.display = 'none';

    return createImage(img3);
  })
  .then(resp => {
    buildImg(resp);

    return wait(2);
  })
  .then(() => {
    //wait loading the first image
    //load img #1
    imgContainer.querySelector('.image--3').style.display = 'none';
  })
  .catch(err => {
    console.error(err);
    renderMessToDOM(err, 'error');
  }); */

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgN = imgPath.split('/').slice(-1)[0].split('.')[0].split('-')[1];

    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = `Image ${imgN}`;
    img.classList.add(`image--${imgN}`);

    img.addEventListener('load', function () {
      resolve(imgContainer.insertAdjacentElement('beforeend', img));
    });

    img.addEventListener('error', function () {
      console.log('there us error');
      reject(new Error(`Could not fetch Image. (${img.src})`));
    });
  });
};


let resImg;

createImage(img1)
  .then(resp => {
    resImg = resp;
    return wait(2);
  })
  .then(() => {
    resImg.style.display = 'none';

    return createImage(img2);
  })
  .then(resp1 => {
    resImg = resp1;

    return wait(2);
  })
  .then(() => {
    resImg.style.display = 'none';

    return createImage(img3);
  })
  .then(resp2 => {
    resImg = resp2;

    return wait(2);
  })
  .then(() => {
    resImg.style.display = 'none';
  })
  .catch(err => {
    console.error(err);
    renderMessToDOM(err, 'error');
  });



//img1
//img2
//img3

//createImage(img1);

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
