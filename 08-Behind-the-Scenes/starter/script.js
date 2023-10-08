'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `${firsName} have ${age} years old, bornd in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `sos un millenial, ${firsName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firsName = 'Igna';
calcAge(1992);
