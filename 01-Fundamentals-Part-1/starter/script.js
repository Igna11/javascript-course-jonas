let js = "amazing";
if (js === "amazing") alert("javascript will make me rich?");

 let variableInCamelCase = "Variables should be written in camelCase"
 const MAGICNUMBER = 1234 //a constant that does not change

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
console.log(undefinedVariable) //the value of an empty variable is undefined
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
BIRTHYEAR = 1990; //this will throw an exception, constants can not be re-assigned.

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
