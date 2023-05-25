/* 
lab.js - Loops
Summary.
- Use a loop to print out a series of numbers and/or a word.
Description.
- A for loop shall sift through 1 to 200, adding onto a String an Integer, in some cases additionally a String, before replacing an ID in the HTML.
Author: Jessica Jorgensen
Date: 05/15/23
*/

// Variable Declaration
// - A String used for categorization of results.
var results = "";

// Function Declaration
// - 
function fizzBuzz() {
  // For Loop
  // - 
  for (var i=1; i<=200; i++) {
    // An If statement, triggered if the number of the loop is a multiple of 3, 5, and 7.
    // - Results is added onto the number and a word.
    if (i % 105 == 0) {
      results += i + " FizzBuzzBoom!<br>";
      console.log(i + " FizzBuzzBoom!");
    }
    // - Multiple of 5 and 7, combines their Strings.
    else if (i % 35 == 0) {
      results += i + " BuzzBoom!<br>";
      console.log(i + " BuzzBoom!");
    }
    // - Multiple of 3 and 7.
    else if (i % 21 == 0) {
      results += i + " FizzBoom!<br>";
      console.log(i + " FizzBoom!");
    }
    // - Multiple of 3 and 5.
    else if (i % 15 == 0) {
      results += i + " FizzBuzz!<br>";
      console.log(i + " FizzBuzz!");
    }
    // - Multiples of 7, 5, and 3, respectively, with individual results.
    else if (i % 7 == 0) {
      results += i + " Boom!<br>";
      console.log(i + " Boom!");
    }
    else if (i % 5 == 0) {
      results += i + " Buzz!<br>";
      console.log(i + " Buzz!");
    }
    else if (i % 3 == 0) {
      results += i + " Fizz!<br>";
      console.log(i + " Fizz!");
    }
    // - Otherwise, merely add the number.
    else {
      results += i + "<br>";
      console.log(i);
    }
  }

  // When the For statement ends, transfer the HTML of results to #output.
  $("#output").html(results);
}

// Call Function
fizzBuzz();