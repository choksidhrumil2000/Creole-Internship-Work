//===========================================Functions==========================================

/* Functions */

//Return Type
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}
//--------------------------------------------------------\

//void Return Type..........................
function printHello(): void {
  console.log('Hello!');
}

//---------------------------------------------------------

//Parameters............................
function multiply(a: number, b: number) {
  return a * b;
}

//----------------------------------------------------

//Optional Parameters....................
// the `?` operator here marks parameter `c` as optional
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}

//----------------------------------------------------

//Default parameters........................
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

//------------------------------------------------------

//Named Parameters...............................
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

//--------------------------------------------------------

//Rest Paramters................
function add2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

//---------------------------------------------------------

//Type Alias.......................
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

//--------------------------------------------------------

//Function Overloading...........

class TestClass {
    someMethod(stringParameter: string): void;
    someMethod(numberParameter: number, stringParameter: string): void;

    someMethod(stringOrNumberParameter: any, stringParameter?: string): void {
        if (stringOrNumberParameter && typeof stringOrNumberParameter == "number")
            alert("Variant #2: numberParameter = " + stringOrNumberParameter + ", stringParameter = " + stringParameter);
        else
            alert("Variant #1: stringParameter = " + stringOrNumberParameter);
    }
}
//------------------------------------------------------



