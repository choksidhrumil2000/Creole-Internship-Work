"use strict";
//============================================Modules And Namespaces=============================================
// // @filename: hello.ts
// export default function helloWorld() {
//   console.log("Hello, world!");
// }
// //import@b.ts.................
// import helloWorld from "./hello.js";
// helloWorld();
// // @filename: maths.ts
// export var pi = 3.14;
// export let squareTwo = 1.41;
// export const phi = 1.61;
// export class RandomNumberGenerator {}
// export function absolute(num: number) {
//   if (num < 0) return num * -1;
//   return num;
// }
// //import.............................
// import { pi, phi, absolute } from "./maths.js";
// console.log(pi);
// const absPhi = absolute(phi);
/* Namespace Example. */
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}
