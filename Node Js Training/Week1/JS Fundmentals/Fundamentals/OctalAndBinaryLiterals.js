//============================Octal And Binary Literals=======================

let a = 051;
console.log(a); // 41

let b = 058; // invalid octal
console.log(b); // 58

//"use strict"
let b2 = 058; // invalid octal 
console.log(b2);

//SyntaxError: Decimals with leading zeros are not allowed in strict mode.

let c = 0o51;
console.log(c); // 41 

let d = 0o58;
console.log(d); // SyntaxError

/* Binary Literals */

let e = parseInt('111',2);
console.log(e); // 7

let f = 0b111;
console.log(f); // 7