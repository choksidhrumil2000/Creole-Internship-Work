//=======================================Typescript Boolean======================================

let pending2: boolean;
pending2 = true;
// after a while
// ..
pending2 = false;

// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true

let completed2: boolean = true;
