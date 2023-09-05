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

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters
('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points,
according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const scoresDolphinsD1 = [44, 23, 71];
const scoresDolphinsD2 = [85, 54, 41];
const scoresKoalasD1 = [65, 54, 49];
const scoresKoalasD2 = [23, 34, 27];

const calcAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

const avgDolphinsD1 = calcAverage(scoresDolphinsD1);
const avgDolphinsD2 = calcAverage(scoresDolphinsD2);

const avgKoalasD1 = calcAverage(scoresKoalasD1);
const avgKoalasD2 = calcAverage(scoresKoalasD2);

console.log(avgDolphinsD2, avgKoalasD2);

function checkWinner(avgScoreDolphins, avgScoreKoalas) {
  if (avgScoreKoalas > 2 * avgScoreDolphins) {
    console.log(`Koalas win (${avgScoreKoalas} vs. ${avgScoreDolphins})`);
  } else if (avgScoreDolphins > 2 * avgScoreKoalas) {
    console.log(`Dolphins win (${avgScoreDolphins} vs. ${avgScoreKoalas})`);
  } else {
    console.log("nobody wins.");
  }
}

checkWinner(avgDolphinsD1, avgKoalasD1);
checkWinner(avgDolphinsD2, avgKoalasD2);

// arrays:

const vector = ["string1", "string2", "rlala", "asdasd"];
const array = new Array(1991, 1992, 1994, 1995);
const random = ["adsa", 2, 2.5, "5", "$"];
console.log(vector, typeof vector, vector.length);
console.log(array, typeof array, array.length);
console.log(random, typeof random, random.length);

vector[0] = "strang0";
console.log(vector);

// Array methods
const friends = ["jose", "Pepe", "mujica", "Uruguay"];
console.log(friends);

//push method: Adds a new value to the array and returns the length of the new array
friends.push("Argento"); //adds a value
console.log(friends);
friends[4] = 10;
console.log(friends);
const newFriends = friends.push("ASD");
console.log(newFriends);

//unshift methods: prepends value to the begin of the array and returns the length of the array
const a = friends.unshift("ginasio");
console.log(friends, a);

//pop method: remove the last element of the array and returns the value removed.
const b = friends.pop();
console.log("pop method:", friends);
console.log("pop method:", friends.pop());
console.log("pop method:", friends);

//shift metohod: Remove the first element of the array
//indexOf: return the index in which the given element is located:
console.log(friends.indexOf("mujica"));

//includes methods: Returns true or false depending on whether the element is present in the array
console.log(friends.includes("tuvieja"));
console.log(friends.includes("ginasio"));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀*/
const bills = [125, 555, 44];
function calcTip(value) {
  if (value >= 50 && value <= 300) {
    return value * 0.15;
  } else {
    return value * 0.2;
  }
}

console.log("test calcTip:", calcTip(49));

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totalAndTips = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2],
];
console.log(totalAndTips);

//objects:
const randomObject = {
  firstName: "Ginasio",
  lastName: "Martin",
  age: 2000,
  job: "chorplanerou",
  friends: ["Noone", "likes", "me"],
};
console.log(randomObject);

//add properties
randomObject.randomProperty = "random value je";
console.log(randomObject);
randomObject["anotherone"] = 123;
console.log(randomObject);

//objects methods:
// Se pueden poner funciones dentro de un objeto

const ginasio = {
  firstName: "ginasio",
  lastName: "martín",
  birthYear: 1992,
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

console.log(ginasio.calcAge(1992));

//another way using this

const ginasio2 = {
  firstName: "ginasio",
  lastName: "martín",
  birthYear: 1992,
  calcAge: function () {
    return 2023 - this.birthYear;
  },
};

console.log(ginasio2.calcAge());

//now what happens if I want to store the result of the function inside the object? we use this

const ginasio3 = {
  firstName: "ginasio3",
  lastName: "martín",
  birthYear: 1992,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return 2023 - this.birthYear;
  },
};

console.log(ginasio3.calcAge());
console.log(ginasio3.age);

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass,
and height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI
(the same method on both objects). Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const JOHN = {
  firstName: "John",
  lastName: "Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const MARK = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (JOHN.calcBMI() > MARK.calcBMI()) {
  console.log(
    `John Smith's BMI (${JOHN.calcBMI().toFixed(
      2
    )}) is higher than Mark Miller's (${MARK.calcBMI().toFixed(2)})!`
  );
} else if (MARK.calcBMI() > JOHN.calcBMI()) {
  console.log(
    `John Smith's BMI (${JOHN.calcBMI().toFixed(
      2
    )}) is higher than Mark Miller's (${MARK.calcBMI().toFixed(2)})!`
  );
}

// loops

for (let i = 0; i <= 10; i++) {
  console.log(`for loop ${i}`);
}

// looping through an array
const arrayForLooping = [
  "pepe",
  "jorge",
  2023,
  "michael",
  "scott",
  ["anoter", "array", "inside", "the", "first", "array"],
  true,
];

const newArray = [];

for (let i = 0; i < arrayForLooping.length; i++) {
  //reading the array
  console.log(`arraylooping[${i}] = ${arrayForLooping[i]}`);
  //adding data to a new arrayh
  //newArray[i] = typeof arrayForLooping[i];
  newArray.push(typeof arrayForLooping[i]);
  console.log(`newarrayforlooping[${i}] = ${newArray[i]}`);
}

//continue and break
// continuo skips that iteration and jumps to the following is the condition is met
// break stops de iterations when the condition is met

//while loops
let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}

//example with a dice:
let dice = Math.trunc(Math.random() * 6) + 1;
let counter = 0;
while (dice != 6) {
  counter++;
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`It took me ${counter} rolls of the dice to get a 6!`);
  }
}
///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
This function calculates the average of all numbers in the given array.
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array.
    To do the addition, start by creating a variable 'sum' that starts at 0.
    Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable.
    This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
