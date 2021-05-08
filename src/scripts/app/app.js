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
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Accumulator is like a snowball (two arguments: callback function & initial value)
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration No. ${i}: ${acc}`);
  return acc + cur;
}, 0);

//Example use case #1: Add values of an array
const balance2 = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance2);

//Example use case #2: Find the biggest value in the array
const highestBalance = movements.reduce((acc, crrMov) => {
  acc = acc > crrMov ? acc : crrMov;
  console.log(`Accumulator ${acc} - Current ${crrMov}`);

  return acc;
}, movements[0]);

console.log(highestBalance); */

//////////////////////////////////////////////
//                                          //
//           Coding Challenge #2            //
//                                          //
//////////////////////////////////////////////
//

//Julia Example #2
//Data
/* const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

//Task #1: Calculate human age
// 1. for every age of a dog, use a formula to determine the human age (Use the Map array)
consoleSeparator('TASK #1: DATA 1', 15);
const caculateAvgHumanAgeSamp = function (arrDogsAge) {
  return arrDogsAge.map((dogAge, i) => {
    let calAge = 0;

    if (dogAge <= 2) {
      calAge = dogAge * 2;
    } else {
      calAge = dogAge * 4 + 16;
    }

    return calAge;
  });
  //.filter(dogAge => dogAge > 18);
};

const humanAgesData1 = caculateAvgHumanAgeSamp(data1);
console.log(humanAgesData1);

consoleSeparator('TASK #1: DATA 2', 15);

const humanAgesData2 = caculateAvgHumanAgeSamp(data2);
console.log(humanAgesData2);

consoleSeparator('TASK #2: Filtering', 15);
//Task#2
const adultHumaAges1 = humanAgesData1.filter(dogAge => dogAge > 18);
const adultHumaAges2 = humanAgesData2.filter(dogAge => dogAge > 18);

console.log(humanAgesData1.filter(dogAge => dogAge > 18));
console.log(humanAgesData2.filter(dogAge => dogAge > 18));

consoleSeparator('TASK #3: Filtering', 15);
//Task#3
console.log(
  humanAgesData1
    .filter(dogAge => dogAge > 18)
    .reduce((acc, hAge) => {
      return acc + hAge;
    }, 0) / adultHumaAges1.length
);
console.log(
  humanAgesData2
    .filter(dogAge => dogAge > 18)
    .reduce((acc, hAge) => {
      return acc + hAge;
    }, 0) / adultHumaAges2.length
);

//TASK #4:
consoleSeparator('TASK #4: FINAL SOLUTION', 15);

const caculateAverageHumanAge = function (arrDogsAge) {
  // const adultArr = arrDogsAge
  //   .map((dogAge, i) => {
  //     let calAge = 0;

  //     if (dogAge <= 2) {
  //       calAge = dogAge * 2;
  //     } else {
  //       calAge = dogAge * 4 + 16;
  //     }

  //     return calAge;
  //   })
  //   .filter(dogAge => dogAge >= 18);

  // return adultArr.reduce((acc, hAge) => acc + hAge, 0) / adultArr.length;

  //With chaining
  return arrDogsAge
    .map((dogAge, i) => {
      let calAge = 0;

      if (dogAge <= 2) {
        calAge = dogAge * 2;
      } else {
        calAge = dogAge * 4 + 16;
      }

      return calAge;
    })
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, hAge, _, arr) => acc + hAge / arr.length, 0);
};

console.log(Math.round(caculateAverageHumanAge(data1), 1));
console.log(Math.round(caculateAverageHumanAge(data2), 1));
 */
//////////////////////////////////////////////
//                                          //
//             The Find Method              //
//                                          //
//////////////////////////////////////////////
//

//Returns the first element found in the array/ search
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal); */

//////////////////////////////////////////////
//                                          //
//              Some & Every                //
//                                          //
//////////////////////////////////////////////
//
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//includes tests for equality
console.log(movements.includes(-400));

//Testing for a condition: Specify a condition
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//Every: It checks if all the values in the array are true. Only then it passes
const deposits = movements.filter(mov => mov > 0); //get only deposits

const checkDeposits = deposits.every(dep => dep > 0);
console.log(checkDeposits);

//callback is a function that can be written separately
consoleSeparator('Separate Function in Array Methods', 15);
const clMov = mov => mov > 0;

console.log(movements.some(clMov));
console.log(deposits.every(clMov));
console.log(movements.filter(clMov)); */

//////////////////////////////////////////////
//                                          //
//           Flat and FlatMap               //
//                                          //
//////////////////////////////////////////////
//

/* //flatten the nested arrays:: 1 level deep
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

//The default is 1, if you want several deep, you add the number.
const arrDeep = [[1, [2, 3]], [[4, [5]], 6], 7, 8];
console.log(arrDeep.flat(3));

consoleSeparator('EXPLORING flatMap');
//FlatMap, goes one level deep
// It combines the use on maps and flat
//suppose we need to add values of the movements below
// here is the solution
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Sln 1.
const sumOfMovementsSln1 = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(sumOfMovementsSln1);

//Sln 1.
const sumOfMovementsSln2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(sumOfMovementsSln2); */

//////////////////////////////////////////////
//                                          //
//             Sorting Arrays               //
//                                          //
//////////////////////////////////////////////
//
/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort()); //mutates the original array
console.log(owners);

//Sort method does sort method does sorting based on strings
//converst everything to strings firs

// Data
 const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Data Movements
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
console.log(movements.sort());
//Sort method takes a compare callback to sort numbers
//Arguments: a: Current value
//           b: next value
// return < 0, A, B -> a is bigger than a
// return > 0,B, A  -> b is bigger than a

//Ascending
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
// });

movements.sort((a, b) => a - b);

console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (b > a) {
//     return 1;
//   }
// });


movements.sort((a, b) => b - a);
console.log(movements); */

//Mixed arrays don't work
// an array with numbers and strings

//////////////////////////////////////////////
//                                          //
//         Creating & filling Arrays        //
//                                          //
//////////////////////////////////////////////
//
/* console.log([1, 2, 3, 4, 5, 6, 7, 8]);
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//programatic creating array
//#1 Methods: EMpty new Arry(value) + fill method
const x = new Array(7);
console.log(x);

//console.log(x.map(() => 5)); //desn't work

x.fill(1, 3, 5);

console.log(x);
arr.fill(23, 2, 6);
console.log(arr);

//#2. Array.from()
//Much cleaner
const fromArr = Array.from({ length: 7 }, () => 1);
console.log(fromArr);

const arr1To7 = Array.from({ length: 7 }, (_, i) => i + 1);

console.log(arr1To7);

const random100DiceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);

console.log(random100DiceRolls);
console.log(random100DiceRolls.filter(i => i === 6));
//Practical example of Array.from

const gridItems = document.querySelectorAll('.grid-items');

console.log(
  Array.from(gridItems, el => el.textContent)
    .slice(1)
    .map(el => Number(el.split(' ').slice(-1).join()))
); */

//////////////////////////////////////////////
//                                          //
//              Arrays Practice             //
//                                          //
//////////////////////////////////////////////
//

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const allTransanctions = accounts.flatMap(movs => movs.movements);

const bankDepositSum = allTransanctions
  .filter(dep => dep > 0)
  .reduce((acc, cur) => acc + cur);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(movs => movs.movements)
//   .filter(mov => mov >= 1000).length;
const numDeposits1000 = allTransanctions.reduce(
  (count, cur) => (cur >= 1000 ? ++count : count),
  0
);
console.log(allTransanctions);
console.log(numDeposits1000);

// 3.
const sums = allTransanctions.reduce(
  (sums, cur) => {
    // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

    return sums;
  },
  { deposits: 0, withdrawals: 0 }
);

const { deposits, withdrawals } = sums;
console.log(deposits, withdrawals);

// 4. title case example
// this is a nice title -> This Is a Nice Title

const convertToTitleCase = str => {
  const exceptions = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'in',
    'is',
    'and',
    'with',
  ];

  const capitalize = str => str.replace(str[0], str[0].toUpperCase());
  return capitalize(
    str
      .trim()
      .toLowerCase()
      .split(' ')
      .map(word => (exceptions.includes(word) ? word : capitalize(word)))
      .join(' ')
  );
};
const toTitleCase = convertToTitleCase(' JUMBLED leTterS in This STRIng ');
const toTitleCase1 = convertToTitleCase(' this is a nice title ');
const toTitleCase2 = convertToTitleCase(
  ' this is a LONG title but Not too Long '
);
const toTitleCase3 = convertToTitleCase(
  ' and here is another title with an EXAMPLE '
);

console.log(toTitleCase);
console.log(toTitleCase1);
console.log(toTitleCase2);
console.log(toTitleCase3);
//
//////////////////////////////////////////////////////////////////////
//
//
//
//The end separator
consoleSeparator(undefined, 30);
