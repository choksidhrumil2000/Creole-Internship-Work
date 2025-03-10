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
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
//------------------------------------------------------
//Named Parameters...............................
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
//--------------------------------------------------------
//Rest Paramters................
function add2(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
//--------------------------------------------------------
//Function Overloading...........
var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.prototype.someMethod = function (stringOrNumberParameter, stringParameter) {
        if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
            alert("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
        else
            alert("Variant #1: stringParameter = " + stringOrNumberParameter);
    };
    return TestClass;
}());
//------------------------------------------------------
