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
const cafeForm = document.getElementById('add-cafe-form');

//Deleting data
const deleteCafe = function (event) {
  const li = event.target.closest('li');

  if (!li || li.tagName !== 'LI') return;

  const id = li.dataset.id;

  db.collection('cafe').doc(id).delete();
};
cafeList.addEventListener('click', deleteCafe);

//saving data to firestore
cafeForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const form = new FormData(cafeForm);

  db.collection('cafe').add({
    name: form.get('name'),
    city: form.get('city'),
  });

  cafeForm.city.value = '';
  cafeForm.name.value = '';
});

//create item li and render cafe
const renderCafe = function (doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = 'x';

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);
};

//Fetch all cafes data
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
