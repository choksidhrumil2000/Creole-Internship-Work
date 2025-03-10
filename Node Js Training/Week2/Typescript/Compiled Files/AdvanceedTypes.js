"use strict";
//=======================================Advanced Types=============================================
/* Arrays And Tuples */
//Arrays........................
const names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
/* const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
*/
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0]; // no error
//Tuples.................................
// define our tuple
let ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
//---------------------------------------------
// define our tuple
let ourTuple2;
// initialized incorrectly which throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];
//-----------------------------------------------------
// define our tuple
let ourTuple3;
// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');
console.log(ourTuple3);
//-------------------------------------------------------
// define our readonly tuple
const ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
//--------------------------------------------------------
//Named Tuples...............
const graph = [55.2, 41.3];
//--------------------------------------------------
//Destructuring Tuple.........................
const graph2 = [55.2, 41.3];
const [x, y] = graph2;
//--------------------------------------------------
/* Enums */
//Numeric Enums.................
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.
//Initialized....................
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);
//Fully Initialized......................
var CardinalDirections3;
(function (CardinalDirections3) {
    CardinalDirections3["North"] = "North";
    CardinalDirections3["East"] = "East";
    CardinalDirections3["South"] = "South";
    CardinalDirections3["West"] = "West";
})(CardinalDirections3 || (CardinalDirections3 = {}));
;
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);
/* Union And Intersection Types */
//Union Types...........................
function printStatusCode(code) {
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');
//------------------------------------------
function printStatusCode2(code) {
    //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
    //Property 'toUpperCase' does not exist on type 'number'
}
const handleArtistsResponse = (response) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
//----------------------------------------------------
