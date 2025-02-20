//=====================================Functions==========================================

/*function name(parameter: type, parameter:type,...): returnType {
   // do something
}*/

function add(a: number, b: number): number {
    return a + b;
}


/* Function types */
let add2: (x: number, y: number) => number;

let add3 = function (x: number, y: number) {
    return x + y;
};

/* Optional Parameters */
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

/* Default parameters */
/*
function name(parameter1=defaultValue1,...) {
   // do something
}*/
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

/* Default Params and Oprtional Params */
/*
function applyDiscount(price: number, discount: number = 0.05): number {
  // ...
}
*/
/* 
function applyDiscount(price: number, discount?: number): number {
  // ...
}
*/

function getDay(year: number = new Date().getFullYear(), month: number): number {
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
    return day;
}

let day1 = getDay(2019, 2);
console.log(day1); // 28

let day2 = getDay(undefined, 2);
console.log(day2);

/* Typescript Rest Parameters */
/*
function fn(...rest: type[]) {
   //...
}
*/
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

//Rest Parameters with multiple types

function combine(...args: (number | string)[]): [number, string] {
  let total = 0;
  let str = '';
  args.forEach((arg) => {
    if (typeof arg === 'number') {
      total += arg;
    } else if (typeof arg === 'string') {
      str += arg;
    }
  });

  return [total, str];
}

const [total2, str] = combine(3, 'Happy', 2, 1, ' New Year');

console.log({ total2 });
console.log({ str });

/* Typescript Function Overloading */
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;

function add2(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log(add2(10, 20));  // 30
console.log(add2('Hello,', 'world!'));  // 'Hello, world!

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}
