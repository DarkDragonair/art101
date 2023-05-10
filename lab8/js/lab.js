/* 
lab.js - Anon Functions and Callbacks
Summary.
- Practicing anonymous functions and callbacks through the use of JavaScript.
Description.
- Transferrance from the JavaScript console to a file, experiementing with variables used for the math of square and square root.
Author: Jessica Jorgensen
Date: 5/7/23
*/

// Variable Declaration
var array = [2, 4, 6, 8];
console.log("Array: ", array)

// Function Declaration
// Math function that returns the square of a number, or rather the number times itself.
function squareNumber(x) {
  return x * x;
};

// Test calls of the function.
console.log("2^2: ", squareNumber(2));
console.log("4^2: ", squareNumber(4));

// Returning the square of Array array.
var firstResult = array.map(squareNumber);
console.log("Array squared: ", firstResult);

// Returning the squareroot of the array.
var secondResult = array.map(function(x) {
  return Math.sqrt(x);
});
console.log("Array squareroot: ", secondResult);
