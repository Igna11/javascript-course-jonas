'use strict';

/*

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
*/
// THIS KEYWORD
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); /// undefined
};

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this); /// undefined
};

calcAgeArrow(1991);

const igna = {
  year: 1992,
  calcAge: function () {
    console.log(this);
  },
};

igna.calcAge();

//this keyworks always points the objects that calls the method

//98 Regular functions vs Arrow functions
// arrow functions does not have they orwn "this" keyword.
// var creates properties in the window object

//99 Primitives vs objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge );
*/

//primitives types
let lastName = 'gonzales';
let oldlastname = lastName;
lastName = 'garcía';
console.log(lastName, oldlastname);

// reference types
const gonzalo = {
  firstName: 'gonzalo',
  lastName: 'garcía',
  age: 30,
};

// copied types
const gonzaloCasado = gonzalo; // NO crea un nuevo objeto en el heap, es una nueva variable en el stack que apunta a la misma dirección de memoria que gonzalo. Lo que le modifique a cualquiera (gonzalo o gonzaloCasado) es lo mismo para ambos
gonzaloCasado.lastName = 'pedrelo';
console.log('antes de casarse:', gonzalo);
console.log('después de casarse:', gonzaloCasado);

// solution to copy objects without modifying the original

const gonzaloCasado2 = Object.assign({}, gonzalo); //shallow copy: Copy properties in the first level of the object
gonzaloCasado2.lastName = 'pedrelin2';
console.log(gonzaloCasado2, gonzalo);

//por ejemplo, si hubiera un array en gonzalo y quisiera agregarle dos elementos al array de gonzaloCasado2, el array se modificaría también en gonzalo.
// Para solucionar eso hay que hacer una deep copy, pero eso es dificil
