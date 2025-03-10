//=======================================Advanced Types=============================================

/* Arrays And Tuples */

//Arrays........................

const names: string[] = [];
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
let head: number = numbers[0]; // no error

//Tuples.................................

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//---------------------------------------------

// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];

//-----------------------------------------------------

// define our tuple
let ourTuple3: [number, boolean, string];
// initialize correctly
ourTuple3 = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple3.push('Something new and wrong');
console.log(ourTuple3);

//-------------------------------------------------------

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

//--------------------------------------------------------

//Named Tuples...............
const graph: [x: number, y: number] = [55.2, 41.3];

//--------------------------------------------------

//Destructuring Tuple.........................
const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph2;

//--------------------------------------------------

/* Enums */


//Numeric Enums.................
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

//Initialized....................
enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections2.North);
// logs 4
console.log(CardinalDirections2.West);

//Fully Initialized......................
enum CardinalDirections3 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);

/* Union And Intersection Types */

//Union Types...........................

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

//------------------------------------------

function printStatusCode2(code: string | number) {
  //console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  //Property 'toUpperCase' does not exist on type 'number'
}

//--------------------------------------------

//Intersection Types............................
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
 
interface ArtworksData {
  artworks: { title: string }[];
}
 
interface ArtistsData {
  artists: { name: string }[];
}
 
// These interfaces are composed to have
// consistent error handling, and their own data.
 
type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;
 
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }
 
  console.log(response.artists);
};

//----------------------------------------------------
