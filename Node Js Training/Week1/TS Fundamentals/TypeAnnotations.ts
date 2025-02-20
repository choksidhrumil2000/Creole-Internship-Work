//============================================Type Annotations ===================================


let name2: string = 'John';
let age: number = 25;
let active: boolean = true;


/* Arrays */

// let arrayName: type[];

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

/* Objects */

let person: {
  name: string;
  age: number;
};

person = {
  name: 'John',
  age: 25,
}; // valid

/* FunctionArguments ANd Return Types */

let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};
