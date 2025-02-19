//=======================================Functions=============================================

/* function functionName(parameters) {
    // function body
    // ...
}
*/

function say(message) {
  console.log(message);
}

function say2(message) {
  console.log(message);
}

let result = say2('Hello');
console.log('Result:', result);//undefined

function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log('Sum:', sum);

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15

/* Function Hoisting */

showMe(); // a hoisting example

function showMe() {
  console.log('an hoisting example');
}
/* Stroing Functrions in Variable */

function add(a, b) {
    return a + b;
}

let sum2 = add;

/* passing a Function to another function */

/* function average(a, b, fn) {
    return fn(a, b) / 2;
}
*/
function add(a, b) {
    return a + b;
}

let sum3 = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result2 = average(10, 20, sum3);

console.log(result2);

/* Returning Functions from functions */

function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

/* Convert function as First class citizen */

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let cm = convert(inToCm, 10);
console.log(cm);

/* Anonymous Functions */

/* (function () {
   //...
});
*/

let show = function() {
    console.log('Anonymous function');
};

show();

/* Using Anonymous functions as arguments */

setTimeout(function() {
    console.log('Execute later after 1 second')
}, 1000);

/* Immediately invoked function execution */

(function() {
    console.log('IIFE');
})();

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);

/* Arrow Functions */
let show2 = () => console.log('Anonymous function');

/* passBy Value */
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result3 = square(y);

console.log(result3); // 100 
console.log(y); // 10 -- no change

/* pass by reference */
let person2 = {
  name: 'John',
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person2);

console.log(person2);

/* Recurse Functions */
/*
function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}
*/
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);

/* Default Parameters */

function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4

//Arguments object

function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3