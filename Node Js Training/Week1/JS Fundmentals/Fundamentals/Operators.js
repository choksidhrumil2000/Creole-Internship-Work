//================================Operators========================================

/* Arithmatic Operators */

let sum = 10 + 20;
console.log(sum); // 30

let netPrice    = 9.99,
    shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;

console.log(grossPrice);

let x = '10',
    y = '20';
let result = x + y;

console.log(result);

let result2 = 10 + '20';

console.log(result2);

let result3 = 30 - 10;
console.log(result3); // 20

let result4 = 2 * 3;
console.log(result4);

let result5 = '5' * 2;
console.log(result5);

let result6 = 20 / 10;
console.log(result6); // 2

let result7 = '20' / 2;
console.log(result7); // 10;

let energy = {
  valueOf() {
    return 100;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);

/* Remainder Operator */

let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder2 = -5 % 3;
console.log(remainder2); // -2

remainder2 = -5 % -3;
console.log(remainder2); // -2

let remainder3 = Infinity % 2;
console.log(remainder3); // NaN

let remainder4 = 10 % 0;
console.log(remainder4); // NaN

let remainder5 = Infinity % Infinity;
console.log(remainder5); // NaN

let remainder6 = 10 % Infinity;
console.log(remainder6); // 10

let remainder7 = 0 % 10;
console.log(remainder7); // 0

let remainder8 = '10' % 3;
console.log(remainder8); // 1

let num = 13;
let isOdd = num % 2 == 1;
console.log(isOdd); // true

function isOdd(num) {
  return num % 2;
}

const isOdd = (num) => num % 2;

const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;

// dividen and divisor have the same sign
console.log('remainder:', 5 % 3); // 2
console.log('modulo:', mod(5, 3)); // 2

// dividen and divisor have the different signs
console.log('remainder:', -5 % 3); // -2
console.log('modulo:', mod(-5, 3)); // 1

/* Assignment Operators */
let a = b;
let counter = 0;
let counter2 = 0;
counter2 = counter2 + 1;

let x1 = 10;
x1 += 1;
console.log(x1); // 11

let x2 = 10;
x2 -= 1;
console.log(x2); // 9

let x3 = 10;
x3 *= 10;
console.log(x3); // 100

let x4 = 10;
x4 /= 2;
console.log(x4); // 5

let x5 = 5;
x5 = x5 % 2;

console.log(x5);

//Chaining Operators

let a1 = 10, b = 20, c = 30;
a1 = b = c; // all variables are 3

let a2 = 10, b2 = 20, c2 = 30;

b2 = c2; // b is 30
a2 = b2; // a is also 30 

/* Unary Operator */
let x8 = 10;
let y8 = +x8;

console.log(y8); // 10

let s = '10';
console.log(+s); // 10

let f = false,
    t = true;

console.log(+f); // 0
console.log(+t); // 1

let person = {
  name: 'John',
  toString: function () {
    return '25';
  },
};

console.log(+person);//25

let person2 = {
  name: 'John',
  toString: function () {
    return '25';
  },
  valueOf: function () {
    return '30';
  },
};

console.log(+person2);//30

let x9 = 10;
let y9 = -x9;

console.log(y9); // -10

let age = 25;
++age;

console.log(age); // 26

let weight = 90;
weight = ++weight + 5;

console.log(weight); // 96

let weight2 = 90;
--weight2;

console.log(weight2); // 89

let weight3 = 90;
weight3 = weight3 - 1;

console.log(weight3); // 89

let weight4 = 90;
let newWeight = weight4++ + 5;

console.log(newWeight); // 95
console.log(weight); // 91

/* Comparison Operator */

let r1 = 20 > 10; // true
let r2 = 20 < 10; // false
let r3 = 10 == 10; // true

let a4 = 10, 
    b4 = 20; 

console.log(a4 >= b4);  // false
console.log(a4 == 10); // true

let name1 = 'alice',
    name2 = 'bob';    

let result8 = name1 < name2;
console.log(result8); // true
console.log(name1 == 'alice'); // true

let f1 = 'apple',
    f2 = 'Banana';
let result9 = f2 < f1;
console.log(result9); // true

let f3 = 'apple',
    f4 = 'Banana';

let result0 = f3.toLowerCase() < f4.toLowerCase();
console.log(result0); // false

console.log(10 < '20'); // true
console.log(10 == '10'); // true

let apple = {
  valueOf: function () {
    return 10;
  },
};

let orange = {
  toString: function () {
    return '20';
  },
};
console.log(apple > 10); // false
console.log(orange == 20); // true

console.log(true > 0); // true
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true

console.log(null == undefined); // true

console.log(NaN == 1); // false

console.log(NaN == NaN); // false

console.log(NaN != 1); // true

console.log(NaN != NaN); // true

console.log("10" == 10); // true
console.log("10" === 10); // false

/* Logicla Operator */

let eligible = false,
    required = true;

console.log(!eligible);
console.log(!required);

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false
console.log(!false); //true
console.log(!true); //false

let counter0 = 10;
console.log(!!counter0); // true

let eligible2 = false,
    required2 = true;

console.log(eligible2 && required2); // false

let b5 = false;
let result1 = b && (1 / 0);
console.log(result1);//false

let eligible3 = true,
    required3 = false;

console.log(eligible3 || required3); // true

