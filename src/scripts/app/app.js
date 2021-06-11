import db from './firebaseConfig';

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
//         Fetch Data from Firbase          //
//                                          //
//////////////////////////////////////////////

const cafeList = document.getElementById('cafe-list');

//create item li and render cafe
const renderCafe = function (doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafeList.appendChild(li);
};

const getCafes = async function () {
  const snapshot = await db.collection('cafe').get();
  snapshot.docs.forEach(doc => {
    renderCafe(doc);
  });
};

getCafes();

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
