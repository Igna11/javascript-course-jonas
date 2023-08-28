let js = "amazing";
if (js === "amazing") alert("javascript will make me rich?");

let variableInCamelCase = "Variables should be written in camelCase";
const MAGICNUMBER = 1234; //a constant that does not change

/*data Types:
Number: floats: let age = 23;
String: sequence of characters: let firstName = "manuelita";
Boolean: logical type, true or false: let fullAge = true;
Undefined: value taken by a variable that is not yet defined: let children;
Null: Empty values
Symbol: (introduced in ES2015) Value that is unique and cannot be changed (not useful now)
bigInt: (introduced in ES2020): Larger integers than the Number type.
 */

//typeof operator
console.log(typeof js);

//undefined type
let undefinedVariable;
console.log(undefinedVariable); //the value of an empty variable is undefined
console.log(typeof undefinedVariable); //the type of an empty variable is undefined

//number type
let someNumber = 12831;
console.log(typeof someNumber);

//bigint type
let someVeryBigNumber = 21231231283719555555552n; //the appended n defines the bigint
let someOtherBigNumber = BigInt(123); //or the function BigInt()
console.log(someVeryBigNumber);
console.log(typeof someVeryBigNumber);
console.log(typeof someOtherBigNumber);

//constants
const BIRTHYEAR = 1991;
//BIRTHYEAR = 1990; //this will throw an exception, constants can not be re-assigned.

//const EMPTYCONST; //this will throw another exception because a constant can not be re-assigned later, so it will be always empty, makes no sense

//vars: should be avoided

//variables don't need to be declared:
lastName = "ginasio"; //will work, but is not recommended. This will create a global variable.

//operators
/*
+= 
*=
++
--
<
>
<=
>=
*/

/*Coding challenge #1
Mark and John BMI comparison.
BMI = mass / height ** 2 = mass / (height * height)

1) Store Mark's and John's mass and height in variables
2) Calculate both their BMIs using the formula
3) Create a boolean variable 'markHigherBMI' containinginformation about whether Mark has a higher BMI than John.

TEST DATA 1: 
Marks weights 78kg and is 1.69m tall.
John weights 92kg and is 1.95m tall.

TEST DATA 2: 
Marks weights 95kg and is 1.88m tall.
John weights 85kg and is 1.76m tall.
*/
//TEST DATA 1
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

function BMI(weight, height) {
  return weight / height ** 2;
}

markBMI = BMI(markWeight, markHeight);
johnBMI = BMI(johnWeight, johnHeight);

let markHigherBMI = markBMI > johnBMI;
console.log("FOR TEST DATA 1:");
console.log("mark is has higher BMI than John?:", markHigherBMI);

//TEST DATA 1
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = BMI(markWeight, markHeight);
johnBMI = BMI(johnWeight, johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log("FOR TEST DATA 2:");
console.log("mark is has higher BMI than John?:", markHigherBMI);

// strings
const firstNameGinasio = "Ginasio";
const jobGinasio = "garralapala";
const bdGinasio = "1992";
const yearginasio = "2023";
//concatenation of strings.
//Here I am concatenating strings with numbers and no error is thrown. This is called coercion I think.
const ginasio =
  "I'am " +
  firstNameGinasio +
  ", a " +
  (yearginasio - bdGinasio) +
  " years old " +
  jobGinasio;
console.log(ginasio);

//Another way of concatenating is using "template literals" which is using ` `
console.log(
  `I'am ${firstNameGinasio}, a ${
    yearginasio - bdGinasio
  } years old ${jobGinasio}`
);

//newlines:
//First way works because of a bug in the language
console.log(
  "something with a linebreak here ->\n\
and a new line here."
);

//Second way
console.log(`Something with a linebreak ->
and a new line here.`);

//IF ELSE STATEMENTS
/*2nd Coding challenge
Use code in challenge 1 and improve it:
1) Print a nice output to the console, saying who has the higher BMI.
e.g.: "Mark's BMI is higher than John's"
2) Use a template string to include de BMI values in the outputs.
e.g.: "Mark's BMI  (28.3) is higher than john's BMI (23.9)"
*/

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      2
    )}) is higher than Mark's BMI (${markBMI.toFixed(2)})`
  );
}

//JavaScript type conversion and coercion
// Type conversion:
//From string to number
console.log(Number("23"));
//From number to string
console.log(String(23));
//Convert a string that is not a number into a number
console.log(Number("tuvieja")); // -> NaN (not a number but is actually an invalid number)

//Type coercion
// the "+" operator converts numbers to strings in type coercion
console.log(
  "Some string " + 56 + ": type coercion. The number was converted to a string"
);
// The "-" operator converts strings numbers into numbers
console.log("10" - 5);
// The "*" operator converts strings into numbers
console.log("2" * 3);
console.log("2" * "5");
// The "/" operator converts strings into numbers
console.log("10" / 2);
console.log("30" / "3");

// Truthy and Falsy values
// 5 Falsy values: 0, "", undefined, null, NaN
// Truthy values are al the rest of possible values

console.log("All falsy values");
console.log("0:", Boolean(0));
console.log('"":', Boolean(""));
console.log("undefined:", Boolean(undefined));
console.log("null:", Boolean(null));
console.log("NaN:", Boolean(NaN));

console.log("Some truthy values");
console.log("{}:", Boolean({}));
console.log("[]:", Boolean([]));
console.log(" ", Boolean(" "));
console.log("'0':", Boolean("0"));

// Equality Operators: == and ===;
// === Exactly comparison
const ageOperators = 19;
if (ageOperators === 19) {
  console.log("EXACT COMPARISON WITH ageOperators 19 === 19");
}

// == Loose equality operator:
console.log(
  "This prints true even though I am using 19 == '19':",
  Boolean(19 == "19")
);

//prompt function
let a = prompt("Insert something here:");
console.log(a);

// Differentiate Operators: != and !==;
// != loose
// !== strong

// Boolean logic: AND (&&), OR (||), NOT (!)

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let avgDolphins = [
  (96 + 108 + 89) / 3,
  (97 + 112 + 101) / 3,
  (97 + 112 + 101) / 3,
];
let avgKoalas = [
  (88 + 91 + 110) / 3,
  (109 + 95 + 123) / 3,
  (109 + 95 + 106) / 3,
];
let index = Number(prompt("index for the 3 test data for challenge 3"));
console.log(index);
console.log(avgKoalas[index], avgDolphins[index]);
if (avgDolphins[index] > avgKoalas[index] && avgDolphins[index] >= 100) {
  console.log(
    `Dolphins have won with ${avgDolphins[index].toFixed(2)} average points!`
  );
} else if (avgKoalas[index] > avgDolphins[index] && avgKoalas[index] >= 100) {
  console.log(
    `Koalas have won with ${avgKoalas[index].toFixed(2)} average points!`
  );
} else if (avgKoalas[index] === avgDolphins[index]) {
  console.log("There has been a draw!");
} else {
  console.log("nobody wins :'c");
}

//switch statement: Compare (strictle ===) one value with several different ones:

let day = prompt("prompt for <b> switch statement </b>");

switch (day) {
  case "monday":
    console.log("monday case");
    break;
  case "tuesday":
    console.log("tuesday case");
    break;
  case "wednesday":
  case "thursday":
    console.log("wednesday and thursday case");
  case "friday":
    console.log("friday case");
    break;
  default:
    console.log("Not a valid day!");
}

// Conditional operator: ?

const age = 23;
age >= 19
  ? console.log("Age grater than 19")
  : console.log("Age lesser than 19");

if (age >= 19) {
  console.log("Age grater than 19");
} else {
  console.log("Age lesser than 19");
}

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value.
Create a variable called 'tip' for this.
It's not allowed to use an if/else statement 😅
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀*/

const bill = [275, 40, 430];
index = prompt("Prompt for challenge 4: index");
let tip =
  bill[index] >= 50 && bill[index] <= 300
    ? bill[index] * 0.15
    : bill[index] * 0.2;

console.log(
  `The total bill was ${
    bill[index]
  }, so the tip should be ${tip} and the total value was $${bill[index] + tip}`
);
