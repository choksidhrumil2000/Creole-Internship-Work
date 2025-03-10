"use strict";
//========================================Basic types======================================
/*
There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.

*/
//Explicit Types
let firstName = "Dylan";
//Implicit Types
let firstName2 = "Dylan";
//Error in Type Assignment...........
// let firstName: string = "Dylan"; // type string
// firstName = 33; // attempts to re-assign the value to a different type
//Infered type
// let firstName3 = "Dylan"; // inferred to type string
// firstName3 = 33; // attempts to re-assign the value to a different type
