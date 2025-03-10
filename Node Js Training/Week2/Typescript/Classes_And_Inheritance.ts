//=========================================Classes And Inheritance=======================================

/* Classes */
class Person {
  public name: string = '';
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
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());

//readonly Properties............................
class Person4 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person4 = new Person4("Jane");
console.log(person4.getName());


//Inheritance Implements............................
interface Shape2 {
  getArea: () => number;
}

class Rectangle implements Shape2 {
  public constructor(protected readonly width2: number, protected readonly height2: number) {}

  public getArea(): number {
    return this.width2 * this.height2;
  }
}

//Extends KeyWord....................................
interface Shape6 {
  getArea: () => number;
}

class Rectangle5 implements Shape6 {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}
//-----------------------------------------------------------

//Override Example...................

interface Shape3 {
  getArea: () => number;
}

class Rectangle6 implements Shape3 {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square3 extends Rectangle6 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

//Abstract Classes...............................
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle7 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

