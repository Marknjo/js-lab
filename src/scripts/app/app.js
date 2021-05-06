//////////////////////////////////////////////
//                                          //
//          Starter Sections Separtor       //
//                                          //
//////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

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
console.log(letters.join('-')); //Works like the string, join

//
//////////////////////////////////////////////////////////////////////
//
//
//
//The end separator
console.log('\n\n');
console.log(`${'-'.repeat(30)}      ./End       ${'-'.repeat(30)}`);
