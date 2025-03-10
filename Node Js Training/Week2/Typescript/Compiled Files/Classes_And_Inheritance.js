"use strict";
//=========================================Classes And Inheritance=======================================
/* Classes */
class Person {
    constructor() {
        this.name = '';
    }
}
const person = new Person();
person.name = "Jane";
//-------------------------------------
//Members Visibility..................
/*
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/
// class Person2 {
//   private name: string;
//   public constructor(name: string) {
//     this.name = name;
//   }
//   public getName(): string {
//     return this.name;
//   }
// }
// const person2 = new Person2("Jane");
// console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private
//Paramterer properties...........................
class Person3 {
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person3 = new Person3("Jane");
console.log(person3.getName());
//readonly Properties............................
class Person4 {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person4 = new Person4("Jane");
console.log(person4.getName());
class Rectangle {
    constructor(width2, height2) {
        this.width2 = width2;
        this.height2 = height2;
    }
    getArea() {
        return this.width2 * this.height2;
    }
}
class Rectangle5 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}
class Rectangle6 {
    // using protected for these members allows access from classes that extend from this class, such as Square
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square3 extends Rectangle6 {
    constructor(width) {
        super(width, width);
    }
    // this toString replaces the toString from Rectangle
    toString() {
        return `Square[width=${this.width}]`;
    }
}
//Abstract Classes...............................
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle7 extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
