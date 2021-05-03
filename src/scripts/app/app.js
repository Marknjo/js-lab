// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////
//                                          //
//             The For of Loop              //
//                                          //
//////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); //you can add continue or break

//The for of loop does not
for (const item of menu.entries()) {
  //console.log(item);
  const [index, elem] = item;
  console.log(`${index + 1}: ${elem}`);
}

console.log([...menu.entries()]);

//////////////////////////////////////////////
//                                          //
//           Coding Challenge #1            //
//                                          //
//////////////////////////////////////////////
//Data:
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  //6. Task 6.
  // 1. Create a function printGoals
  // 2. Takes in arbitrary number of prayers names use: object destructuring
  // 3. Print their names to the console
  // 4. add the number of goals each player scored in the game.
  printGoals: function (...players) {
    console.log(players);
    try {
      if (typeof players !== 'object') {
        throw new Error(
          'TypeError: Supply names of players as separated by commas as arguments.'
        );
      }

      let playersString = '';

      for (let i = 0; i < players.length; i++) {
        if (i === players.length - 1) {
          playersString += `and ${players[i]}...`;
        } else {
          playersString += `${players[i]}, `;
        }
      }

      console.log(
        `Players who scored in the game: ${playersString}: Goals Scored ${this.score}`
      );
    } catch (e) {
      console.log(e);
    }
  },
};

//1. Taks 1
const [players1, players2] = game.players;
console.log(players1, players2);

//2. Task 2.
// 1. First player is a goalkeeper - store in gk variable
// 2. Others 10 are regular players - store in the fieldPlayers variable
console.log('---------------Bayern Munich Team ---------------');
const [gk, ...fieldPlayers] = players1; //Bayern Munich
console.log(gk, fieldPlayers);

//3. Task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4. Task 4.
// added 3 teams players to the team as subs
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5. Task 5
//Variables from object name: destructure object
const { team1, x: draw, team2 } = game.odds;

console.log(team1, draw, team2);

//6. Task 6.
// 1. Create a function printGoals
// 2. Takes in arbitrary number of prayers names use: object destructuring
// 3. Print their names to the console
// 4. add the number of goals each player scored in the game.
game.printGoals(...game.scored);

//const testData = ['Davies', 'Muller', 'Lewandowski', 'Kimmich'];
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7. Task 7
// Team with lower odd is likely to win
team1 < team2 && console.log('Team 1 is likely to win');

team2 < team1 && console.log('Team 2 is likely to win'); */

//////////////////////////////////////////////
//                                          //
//     Nullish Coalescing Operator          //
//                                          //
//////////////////////////////////////////////
/* restaurant.numGuests = null;

const guests = restaurant.numGuests ?? 10;

console.log(guests); */
//Nullish: null and undefined (Not 0 or '')

console.log('\n\n');
console.log('--------------------------------------------------------');

//////////////////////////////////////////////
//                                          //
//             Short Circuiting             //
//                (&& and ||)               //
//                                          //
//////////////////////////////////////////////

// || Use ANY data type, return ANY data type, short-circuting operation
//short-circuting - if the first operand is truthy, it is returned
/* console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
//returns "Hello" because it is the first the truthy returned

//Practical example
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

//AND operator
console.log('---AND---');

console.log(0 && 'Jonas'); //returns the falsey value
console.log(7 && 'Jonas'); //Returns the last value if all operands are true

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach'); */

//The short circuit makes code hard to read

//////////////////////////////////////////////
//                                          //
//        Rest Pattern & Parameters         //
//                                          //
//////////////////////////////////////////////

/* //1. Destructuring
//SPREAD, because of the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of ==
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

//MIXING, SPREAD & REST operators

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //skipped elements are not included: the last in the assignment

console.log(pizza, risotto, ...otherFoods);
//There can only be only one rest operator in the destructuring

//Rest in the Objets
const { sat, ...weekdays } = restaurant.openingHours;

console.log(sat, weekdays);

//2. Functions: Compress
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 6, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onions', 'Olives', 'Spinach');

restaurant.orderPizza('mushrooms'); */

//////////////////////////////////////////////
//                                          //
//              Spread Operator             //
//                                          //
//////////////////////////////////////////////

/* const arr = [7, 8, 9];

//old method of spreading
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//ES6 approach: Created a new array, do not mutate original array

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

//practical example
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Use cases.1. Shallow copy and merge arrays together
//1. Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//2. Merge two arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

//spread operators work in all iterables: arrays, strings, maps, sets, but not objects
const str = 'Jonas';

const letter = [...str, ' ', 'S.'];

console.log(letter);
console.log(...str);
//You cannot pass a spread operator into a string literal

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//since 2018, spread operators also works with objects even if not itarable
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

console.log(newRestaurant);

//Shallow copying
const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
console.log(restaurant === restaurantCopy); */

//////////////////////////////////////////////
//                                          //
//          Destructuring Objects           //
//                                          //
//////////////////////////////////////////////

//we use the {} and provide the names of the objects

/* const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//Renaming the object names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, openingHours, tags);

//setting the defaults and renaming
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //must wrap with the brackets

console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Practical application
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
}); */

//////////////////////////////////////////////
//                                          //
//           Destructuring Arrays           //
//                                          //
//////////////////////////////////////////////

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring assignment

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

//switching variables

[main, secondary] = [secondary, main];

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

//Nested array
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;

console.log(i, j, k);

//Default
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r); */
