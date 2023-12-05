'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
      open: 0,
      close: 24,
    },
  },
  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`there are 3 ingridients: ${ing1}, ${ing2},${ing3}.`);
  },
};

//to de-strcuture objects we use curly braces {}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 0, b: 10, c: 100 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o = 1, close: c = 1, mid: m = 1 },
} = openingHours;

console.log(o, c, m);
/*
const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
*/
/* switching variables: first solution
const temp = main;
main = secondary;
secondary = temp;

console.log(secondary, main);
*/

/* switching variables: second solution
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(1, 1));

//we can de-structure it
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

const nested = [2, 3, [4, 5]];
*/
/*
const [i, , j] = nested;
console.log(i, j);*/

/*
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

// The spread operator: ...
// works on all iterables: arrays, strings, maps, sets NOT Objects
const arr = [3, 4, 5, 6, 7, 8, 9, 0];
const newArr = [0, 1, 2, ...arr];
console.log(newArr);

const newMainMenu = [...restaurant.mainMenu, 'tarta'];
console.log(newMainMenu);

const asd = [...newMainMenu, ...newArr];
console.log(asd);

const word = 'palabra';
const wordArray = [...word, ' ', 's'];
console.log(wordArray);
/*
const ingridients = [
  prompt('Introduce first ingridient:\n'),
  prompt('Introduce seocond ingridient:\n'),
  prompt('Introduce third ingridient:\n'),
];

console.log(restaurant.orderPasta(...ingridients));
*/

// OBJECTS:

const newRestaurant = { founded: 1850, ...restaurant, founder: 'Pepito' };
console.log(newRestaurant);

//Rest Pattern

const [aa, bb, ...others] = ['a', 'b', 'o', 't', 'h', 'e', 'r', 's'];
console.log(aa);
console.log(bb);
console.log(others);

const { sat, ...weekdays } = restaurant.openingHours;

console.log(weekdays);

//nullish: ??
//or assignament operator ||=
//nullish assigment operator ??=
//AND assigment operator &&=

// Coding challenge
// Coding Challenge #2
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
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
};

//1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
//2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
// ('fieldPlayers') with all the remaining 10 field players (rest syntax)
const [gk, ...fieldPlayers] = players1;
//3. Create an array 'allPlayers' containing all players of both teams (22 players) (spread operator)
const allPlayers = [...players1, ...players2];
// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, x: draw, team2 } = game.odds;
//6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...players) {
  console.log(`${players.length} where scored.`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log('team 1 is more likely to win');

for (let player of players1) {
  console.log(player);
}
console.log(menu.entries());

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item}`);
}
const salsa = 10;

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, 
  you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//1)
console.log('exercise 1:', game.scored);
let counter = 1;
for (const item of game.scored) {
  console.log(`Goal ${counter}: ${item}`);
  counter += 1;
}

// course solution
console.log(
  "course solution usign 'game.scored.entries()' where entries creates an iterable of the form '[i, element]'"
);
for (const [i, item] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${item}`);
}
//2)
let finalOdd = 0;
for (const odd of Object.values(game.odds)) {
  finalOdd += odd / 3;
}
console.log(finalOdd);

//3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of Victory ${teamStr}: ${odd}`);
}
