"use strict";
//=============================================Generics============================================
//Generic Functions........................
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
//Generic Classes .................................
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value2 = new NamedValue('myNumber');
value2.setValue(10);
console.log(value2.toString()); // myNumber: 10
const wrappedValue = { value: 10 };
//Default value.............................
class NamedValue2 {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value3 = new NamedValue2('myNumber');
value3.setValue('myValue');
console.log(value3.toString()); // myNumber: myValue
//Extends................................
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
