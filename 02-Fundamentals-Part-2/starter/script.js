"use strict"; // strict mode to make more secure code. It is more verbose with errors
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive");

const interface = "audio"; //-> this will throw this error: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)

*/

// function declarations vs function expressions
//function declaration -> allows you tu call them before declaring them
function foo(parameter) {
  return parameter + 10;
}
const someResult = foo(56);
console.log(someResult);

// function expression -> enforce you to declare them before calling them
const foo2 = function (parameter) {
  return parameter + 10;
};
const someOtherResult = foo2(56);
console.log(someOtherResult);

// Arrow functions
const foo3 = (parameter) => parameter + 10;
const someOtherOtherResult = foo3(56);
console.log(someOtherOtherResult);

const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstname} will retire in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1992, "jose mujica"));


// Calling functions inside other functions
