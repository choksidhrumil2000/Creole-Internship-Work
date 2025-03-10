"use strict";
//super
class Base {
    constructor(y) {
        this.x = y;
    }
}
class Derived extends Base {
    constructor(y) {
        super(y);
        console.log(this.x);
    }
}
let myDerived = new Derived(34);
//Getters / Setters
class C {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
class Sonar {
    ping() {
        console.log("ping!");
    }
}
//   class Ball implements Pingable {
// //   Class 'Ball' incorrectly implements interface 'Pingable'.
// //     Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
//     pong() {
//       console.log("pong!");
//     }
//   }
