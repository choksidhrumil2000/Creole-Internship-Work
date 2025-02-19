//=================================Javascript Arrays=======================================

let scores = new Array();

let scores2 = Array(10);

let scores3 = new Array(9, 10, 8, 7, 6);

let athletes = new Array(3); // creates an array with initial size 3
let scores4 = new Array(1, 2, 3); // create an array with three numbers 1,2 3
let signs = new Array('Red'); // creates an array with one element 'Red'

let artists = Array();

let colors = ['red', 'green', 'blue'];

let emptyArray = [];

/* Accessing Array Elements */

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'

let mountains2 = ['Everest', 'Fuji', 'Nanga Parbat'];
mountains2[2] = 'K2';

console.log(mountains2);

let mountains3 = ['Everest', 'Fuji', 'Nanga Parbat'];
console.log(mountains3.length); // 3

/* Basic Operations on Array */

//Push()
let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');

console.log(seas2); 

//unshift
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.unshift('Red Sea');

console.log(seas3);

//Pop
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas.pop();
console.log(lastElement); 

//Shift
let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas4.shift();

console.log(firstElement);

//indexOf
let seas5 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas5.indexOf('North Sea');

console.log(index); // 2

//isArray
console.log(Array.isArray(seas)); // true

