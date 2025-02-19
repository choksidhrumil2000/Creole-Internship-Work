//==========================Javascript NUmbers===================================

/* Integer Numbers */

let counter = 100;

/* Octal Numbers */

let num = 071;
console.log(num);//57

//If not in range of Octal number like 0-7
let num2 = 080;
console.log(num2);//80

let num3 = 0o71;
console.log(num3);//57

let num4 = 0o80;
console.log(num4);//SyntaxError: Invalid or unexpected token

/* Hexadecimal Numbers */

let num5 = 0x1a;
console.log(num5);//26

/* Floating Point NUmber */

let price = 9.99;
let tax = 0.08;
let discount = .05; // valid but not recommeded

let amount = 3.14e7;
console.log(amount);//31400000

let amount2 = 5e-7; 
console.log(amount2);//0.0000005

let amount3 = 0.0000005;
console.log(amount3);//5e-7

let amount4 = 0.2 + 0.1;
console.log(amount4);//0.30000000000000004

/* BigIntegers */
let pageView = 9007199254740991n;