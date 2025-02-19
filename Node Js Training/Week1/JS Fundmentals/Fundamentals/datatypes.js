//============================JavaScript Data Types ========================================


let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string

/* Use Of typeof Operator */

let counter2 = 120;
console.log(typeof(counter2)); // "number"

counter2 = false; 
console.log(typeof(counter2)); // "boolean"

counter2 = "Hi";
console.log(typeof(counter2)); // "string"

/* The Undefined Type */

let counter3;
console.log(counter3);        // undefined
console.log(typeof counter3); // undefined

/* The Null Type */

let obj = null;
console.log(typeof obj); // object

//JavaScript defines that null is equal to undefined as follows:

console.log(null == undefined); // true

/* The Number Type */

let num = 100;
let price = 12.5; 
let discount = 0.05;

let price2 = 200.00; // interpreted as an integer 200

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

/* NaN */
console.log('a'/2); // NaN;

console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

/* The String Type */
let greeting = 'Hi';
let message  = "Bye";

let message2 = 'I\'m also a valid string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String';

let s = 'JavaScript';
s[0] = 'j';
console.log(s)//Output as Javascript

/* The Boolean Type */

let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

/* the Symbol Type */

let s1 = Symbol();

console.log(Symbol() == Symbol()); // false

/* The Bigint Type */

let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

/* The Object Type */

let emptyObject = {};

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

console.log(contact.firstName);//'john'
console.log(contact.lastName);//'Doe'
console.log(contact.age); // undefined

console.log(contact['phone']); // '(408)-555-9999'
console.log(contact['email']); // 'john.doe@example.com'