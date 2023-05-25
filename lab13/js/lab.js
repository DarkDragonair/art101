/* 
lab.js - Loops
Summary.
- .
Description.
- .
Author: Jessica Jorgensen
Date: 05/15/23
*/

// Variable Declaration
// - 
var results = "";

// Function Declaration
// - 
function fizzBuzz() {
  // For Loop
  // - 
  for (var i=1; i<=200; i++) {
    //
    if (i % 105 == 0) {
      results += i + " FizzBuzzBoom!<br>";
      console.log(i + " FizzBuzzBoom!");
    }
    //
    else if (i % 35 == 0) {
      results += i + " BuzzBoom!<br>";
      console.log(i + " BuzzBoom!");
    }
    //
    else if (i % 21 == 0) {
      results += i + " FizzBoom!<br>";
      console.log(i + " FizzBoom!");
    }
    //
    else if (i % 15 == 0) {
      results += i + " FizzBuzz!<br>";
      console.log(i + " FizzBuzz!");
    }
    //
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
    else {
      results += i + "<br>";
      console.log(i);
    }
  }

  //
  $("#output").html(results);
}

// Call Function
fizzBuzz();