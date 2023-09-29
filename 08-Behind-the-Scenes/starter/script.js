'use strict'; /*
/*
console.log(me);

var me = 'igna';

console.log(addDecl(2, 3));
//console.log(addExpr(5, 8));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a * b;
};

var addArrow = (a, b) => a ** b;
*/
/*
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
// The this Keyword in Practice
/*console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
*/

const igna = {
  firstName: 'Ignacio',
  year: 1992,
  calcAge: function () {
    console.log(2023 - this.year);
    const self = this;
    /* first example
    const isMillenial = function () {
      console.log('self:', self);
      console.log('is millenial?:', self.year >= 1981 && self.year <= 1996);
    };*/
    // second example
    const isMillenial = () => {
      console.log('this:', this);
      console.log('is millenial?:', this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log('this:', this);
    console.log(`Hey ${this.firstName}`);
  },
  grat: function () {
    console.log('this:', this);
    console.log('name:', this.firstName);
  },
};
/*
igna.calcAge();
igna.greet();
igna.grat();


console.log('======================================');

const addExpr = function (a, b) {
  console.log(arguments);
  return 1 + 2;
};

addExpr(1, 2);
addExpr(1, 2, 3, 4, 5, 6);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4, 6);

*/
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
