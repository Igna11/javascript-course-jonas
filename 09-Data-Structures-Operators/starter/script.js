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
