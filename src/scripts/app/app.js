//////////////////////////////////////////////
//                                          //
//          Starter Sections Separtor       //
//                                          //
//////////////////////////////////////////////

/**
 * Creates as a separator in the console
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

/* let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); //does not mutate the arr, works like strings
console.log(arr.slice(2, 4)); //4-2 =2
console.log(arr.slice(-2));
console.log(arr.slice(1, -2)); //start from index 1 and everything except the last two items
console.log(arr.slice()); //shallow copying an array
console.log([...arr]); //Similar to spread operator
console.log(arr);

//slice: It mutates the array
//Use case: in deleting elements from the array
console.log('\n\n');
//console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); //go to position one then delete 2 elements from the array
console.log(arr);

//Reverse: It mutates the original array

console.log('\n\n');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//Concat: Joining two arrays together
//Does not mutate the original array

console.log('\n\n');

const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);

//Join
console.log(letters.join('-')); //Works like the string, join */

//////////////////////////////////////////////
//                                          //
//          Looping Arrays FOREACH          //
//                                          //
//////////////////////////////////////////////
//

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

consoleSeparator('FOREACH');
//continue and break don't work in the 'forEach': Use 'for of' or 'for' loop
movements.forEach(function (mvt, i) {
  if (mvt > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mvt}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mvt)}`);
  }
}); */

//////////////////////////////////////////////
//                                          //
//        FOREACH With Maps and Sets        //
//                                          //
//////////////////////////////////////////////
//

//For each is also available in Mpas an sets
/* consoleSeparator('FOREACH WITH MAP');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

//SET
consoleSeparator('FOREACH WITH SET');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EURO', 'EURO']);

console.log(currenciesUnique);

//both the key and value are the same in the sets
// _ in javaScript is a throw away value
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}`);
}); */

//////////////////////////////////////////////
//                                          //
//           Coding Challenge #1            //
//                                          //
//////////////////////////////////////////////
//
//JULIA AND KATE
// @each 5 dog owners [separately|different data] : dogs age
// Data stored in array
// Knowledge: If puppy or adult
// puppy age < 3 yrs
// adult age >= 3

//Data 1
/* const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

//Data 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

//solution
//1. create a function accepting an array
//2. Loop through the array
//3. check if the dog is above 3 or less than 3 and lable it adult or puppy
//4. return the arr of labled dogs || log them to the console

const checkDogType = (arrDogs = [], colName = 'Julia') => {
  const labledDogs = [];
  arrDogs.forEach((dog, i) => {
    let type = '';
    if (dog >= 3) {
      //dog is an adult
      type = 'an adult dog';
    } else if (dog < 3) {
      //dog is a puppy
      type = 'a puppy 🐶';
    }

    //Dog 2 from Julia's Data Collection is puppy age 2
    colName !== 'single'
      ? labledDogs.push(
          `Dog ${
            i + 1
          } from ${colName}'s Data Collection is ${type} age ${dog}.`
        )
      : arrDogs.length > 0
      ? labledDogs.push(
          `Dog number ${i + 1} is ${type}, and is ${dog} years old.`
        )
      : [];
  });

  return labledDogs;
};

const logDogTypes = arrDogs => {
  arrDogs.forEach(dog => {
    console.log(dog);
  });
};

//
const checkDogs = ({ arrDogs = [], arrDogsJulia = [], arrDogsKate = [] }) => {
  //Never run checkDogsType if there is no supplied
  dogsType = arrDogs.length > 0 && checkDogType(arrDogs, 'single');
  dogsJulia = arrDogsJulia.length > 0 && checkDogType(arrDogsJulia);
  dogsKate = arrDogsKate.length > 0 && checkDogType(arrDogsKate, 'Kate');

  //Log dog types
  //LOG ALL DOGS
  arrDogs.length > 0 && logDogTypes(dogsType);

  //LOG JULIA'S DATA
  arrDogsJulia.length > 0 && logDogTypes(dogsJulia);

  //LOG KATE'S DATA
  arrDogsKate.length > 0 && logDogTypes(dogsKate);

  return {
    dogsType,
    dogsJulia,
    dogsKate,
  };
};

consoleSeparator('DATA 1');
const dogsCategorizedData1 = checkDogs({
  arrDogsJulia: dogsJulia1,
  arrDogsKate: dogsKate1,
});
console.log(dogsCategorizedData1);

consoleSeparator('DATA 2');
//New data
const dogsCategorizedData2 = checkDogs({
  arrDogsJulia: dogsJulia2,
  arrDogsKate: dogsKate2,
});
console.log(dogsCategorizedData2);

//prob: 1 - Julia data contains both cats and dogs. Exclude cats & don't mutate the array
// 1 and last 2
// sln 2. use the slice(1, 2)
consoleSeparator('Prob 1. Remove Cats from Julia data', 10);
console.log(dogsJulia1);
const cleanedDogsJulia = dogsJulia1.slice(1, -2);
console.log(cleanedDogsJulia);

//Prob: 2 - new single array with both Julia and Kate's data
consoleSeparator('Prob 2. Single Array', 10);
const dogsData1 = [...cleanedDogsJulia, ...dogsKate1];
console.log(dogsData1);

//prob: 3 - Log if the dog is a puppy or a an adult
consoleSeparator('Prob 3. Merge Array', 10);
const dogsGroupedData1 = checkDogs({ arrDogs: dogsData1 });

console.log(dogsGroupedData1);
//prob: 4 - Log if the dog is a puppy or a an adult
consoleSeparator('Prob 4. Merge Array', 10);
const dogsData2 = [...dogsJulia2, ...dogsKate2];
const dogsGroupData2 = checkDogs({ arrDogs: dogsData2 });

console.log(dogsData2);
console.log(dogsGroupData2); */

//////////////////////////////////////////////
//                                          //
//                Map Method                //
//                                          //
//////////////////////////////////////////////
//

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//More inline with functional programming: This is the way to go, new and modern
const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movUSD = [];
movements.forEach(mov => movUSD.push(mov * eurToUsd));

console.log(movUSD);

consoleSeparator('New Section');

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
);
console.log(movementsDescription); */

//////////////////////////////////////////////
//                                          //
//            The Filter Method             //
//                                          //
//////////////////////////////////////////////
//
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); */
//////////////////////////////////////////////
//                                          //
//            The Reduce Method             //
//                                          //
//////////////////////////////////////////////
//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Accumulator is like a snowball (two arguments: callback function & initial value)
/* const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration No. ${i}: ${acc}`);
  return acc + cur;
}, 0); */

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

//
//////////////////////////////////////////////////////////////////////
//
//
//
//The end separator
consoleSeparator(undefined, 30);
