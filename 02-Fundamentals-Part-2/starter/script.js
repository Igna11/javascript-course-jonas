'use strict'; // strict mode to make more secure code. It is more verbose with errors

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive");

const interface = "audio"; //-> this will throw this error: Uncaught SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)