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
console.log("FOR TEST DATA 1:")
console.log("mark is has higher BMI than John?:", markHigherBMI);


//TEST DATA 1
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = BMI(markWeight, markHeight);
johnBMI = BMI(johnWeight, johnHeight);

markHigherBMI = markBMI > johnBMI;
console.log("FOR TEST DATA 2:")
console.log("mark is has higher BMI than John?:", markHigherBMI);


// strings
const firstNameGinasio = "Ginasio";
const jobGinasio = "garralapala";
const bdGinasio = "1992";
const yearginasio = "2023";
//concatenation of strings.
//Here I am concatenating strings with numbers and no error is thrown. This is called coercion I think.
const ginasio = "I'am " + firstNameGinasio + ", a " + (yearginasio - bdGinasio) + " years old " + jobGinasio;
console.log(ginasio);

//Another way of concatenating is using "template literals" which is using ` `
console.log(`I'am ${firstNameGinasio}, a ${yearginasio-bdGinasio} years old ${jobGinasio}`);

//newlines:
//First way works because of a bug in the language
console.log("something with a linebreak here ->\n\
and a new line here.")

//Second way
console.log(`Something with a linebreak ->
and a new line here.`)

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
}
else {
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's BMI (${markBMI.toFixed(2)})`);
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
console.log("Some string " + 56 + ": type coercion. The number was converted to a string");
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

console.log("All falsy values")
console.log("0:", Boolean(0));
console.log('"":', Boolean(""));
console.log("undefined:", Boolean(undefined));
console.log("null:", Boolean(null));
console.log("NaN:", Boolean(NaN));

console.log("Some truthy values");
console.log("{}:", Boolean({}));
console.log("[]:", Boolean([]));
console.log(" ", Boolean(" ")); 
console.log("'0':", Boolean('0'));