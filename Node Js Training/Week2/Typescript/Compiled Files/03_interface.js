"use strict";
const newUser = {
    username: "john_doe",
    email: "john@example.com"
};
console.log(`User: ${newUser.username}, Email: ${newUser.email}`);
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} says: Woof!`);
    }
}
const myDog = new Dog("Buddy");
myDog.sound();
