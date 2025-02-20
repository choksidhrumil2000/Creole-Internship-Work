//==================================Control Flow Statements==========================================

/* If Statement */

/*
if(condition) {
   // if-statement
}
*/

/* If Else Statement */

/*
if(condition) {
   // if-statements
} else {
  // else statements;
}
*/

/* ternary Operator */
const max = 100;
let counter2 = 100;

counter2 < max ? counter2++ : counter2 = 1;

console.log(counter2);

/* If Else if Statement */
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
  discount = 5; // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10; // 10% discount
} else if (itemCount > 10) {
  discount = 15; // 15%
} else {
  throw new Error('The number of items cannot be negative!');
}

console.log(`You got ${discount}% discount.`);

/* TypeScript Switch case */
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}


// change the month and year
let month = 2,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);

/* Typescript for */

/* for(initialization; condition; expression) {
    // statement
} */

/*
for(;;) {
    // do something
}
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* TypeScript While */

/*
while(condition) {
    // do something
}
*/

/*
while(condition) {
    // do something
    // ...

    if(anotherCondition) 
        break;
}
*/

let counter3 = 0;

while (counter3 < 5) {
    console.log(counter3);
    counter3++;
}

/* DO while Statement */
/*
do {
    // do something
} while(condition);
*/

let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);

/* Typescript break */
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var i = 0; i < products.length; i++) {
    if (products[i].price == 900)
        break;
}

// show the products
console.log(products[i]);

let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
let product = products[1];

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);

/* Continue Statement */
let index = 9;
let count = 0;

do {
    index += 1;

    if (index % 2)
        continue;
    count += 1;
} while (index < 99);


console.log(count); // 45

