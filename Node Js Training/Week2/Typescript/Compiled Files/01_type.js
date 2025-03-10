"use strict";
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person2 = {
    name: "Max",
    age: 27
};
printPersonProperty(person2, "name");
// Typeof Type Operator - Using the typeof operator to create new types
console.log(typeof "Hello world");
// Create Book instance
const book = {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: 1979,
};
// Access title property
const title = book["title"];
console.log(title);
let move;
move = "Up";
console.log(move);
//union
function printStatusCode3(code) {
    console.log(`My status code is ${code}.`);
}
console.log(printStatusCode3(404));
console.log(printStatusCode3('404'));
// Create an object of the intersection type
const hybridPet = {
    name: "Griffin",
    breed: "Labrador",
    wingspan: 1.2,
    bark: () => console.log("Woof!"),
    fly: () => console.log("Flap, flap!"),
};
// Access properties and methods
console.log(hybridPet.name);
console.log(hybridPet.wingspan);
hybridPet.bark();
hybridPet.fly();
function drawShape(shape, position) {
    console.log(`Drawing a ${shape} at (${position.x}, ${position.y})`);
}
drawShape("circle", { x: 10, y: 20 });
//Assertion
let value = "This is a string";
let lengthOfString = value.length;
console.log(lengthOfString);
