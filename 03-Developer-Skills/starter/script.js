// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('first console log of video 3');
console.log('asdasd');
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('testing');

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
function printForecast(temps) {
  let forecastString = '';
  for (let i = 0; i < temps.length; i++) {
    forecastString += `${temps[i]}ºC in ${i + 1} days...`;
  }
  return forecastString;
}
const tempsArray1 = [17, 21, 23];
const tempsArray2 = [12, 5, -5, 0, 4];
console.log(printForecast(tempsArray1));
console.log(printForecast(tempsArray2));
