//=============================================Generics============================================

//Generic Functions........................
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

//Generic Classes .................................
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value2 = new NamedValue<number>('myNumber');
value2.setValue(10);
console.log(value2.toString()); // myNumber: 10

//Type Aliases.............................
type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

//Default value.............................
class NamedValue2<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value3 = new NamedValue2('myNumber');
value3.setValue('myValue');
console.log(value3.toString()); // myNumber: myValue

//Extends................................
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}