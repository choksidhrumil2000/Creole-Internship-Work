"use strict";
//===========================================Functions==========================================
/* Functions */
//Return Type
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
//--------------------------------------------------------\
//void Return Type..........................
function printHello() {
    console.log('Hello!');
}
//---------------------------------------------------------
//Parameters............................
function multiply(a, b) {
    return a * b;
}
//----------------------------------------------------
//Optional Parameters....................
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
//----------------------------------------------------
//Default parameters........................
function pow(value, exponent = 10) {
    return value ** exponent;
}
//------------------------------------------------------
//Named Parameters...............................
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
//--------------------------------------------------------
//Rest Paramters................
function add2(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
//--------------------------------------------------------
//Function Overloading...........
class TestClass {
    someMethod(stringOrNumberParameter, stringParameter) {
        if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
            alert("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
        else
            alert("Variant #1: stringParameter = " + stringOrNumberParameter);
    }
}
//------------------------------------------------------
