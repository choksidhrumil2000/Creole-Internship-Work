//===============Javascript variables===========================


/* Declaring a Variable */

var variableName;

/* Initializing a variable */

variableName = initialValue;

//example:::

let message;
message = "Hello";

let message2 = "Hello", counter = 100;

let message3 = "Hello";
message3 = 100;

/* Changeing a Variable */

let message4 = "Hello";
message4 = 'Bye';

/* Unndefined VS Undeclared Variables */

let message5;
console.log(message5); // undefined

console.log(counter);// Reference Error!!!

/* Constants */

const workday = 5;
workday = 2;

//Error:: Uncaught TypeError: Assignment to constant variable
