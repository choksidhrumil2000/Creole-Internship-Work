//============================Striing Type================================================

let str = 'Hi';
let greeting = "Hello";

/* template Literals */

let name = `John`;
let mesage = `"I'm good". She said`;

let name2 = 'John';
let message = `Hi, I'm ${name2}.`;

console.log(message);//Hi, I'm John.

/* Escaping Special Characters */
let str2 = 'I\'m a string!';

/* getting length of String */
let str3 = "Good Morning!";
console.log(str3.length);  // 13

/* Accessing Characters */

let str4 = "Hello";
console.log(str4[0]); // "H"

let str5 = "Hello";
console.log(str5[str5.length -1]); // "o"

/* Concating String Via +operator */

let name3 = 'John';
let str6 = 'Hello ' + name3;

console.log(str6); // "Hello John"

let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);

/* Converting values to String */

let status = false;
let str7 = status.toString(); // "false"
let back = Boolean(str7); // true

/* Comparing Strings */

let result = 'a' < 'b';
console.log(result); // true

let result2 = 'a' < 'B';
console.log(result2); // false

