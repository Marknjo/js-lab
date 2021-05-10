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
//          Starter Sections Separtor       //
//                                          //
//////////////////////////////////////////////

//Separator for console logs
/////////////////////////////////////////////////
consoleSeparator(undefined, 40);
