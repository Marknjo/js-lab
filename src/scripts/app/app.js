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

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
