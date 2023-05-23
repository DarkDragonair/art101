/* 
lab.js - Conditionals
Summary.
- Practicing conditionals (nested statements, particularly if-else's) by way of sorting Hogwarts Houses.
Description.
- Use a button, a function with conditionals, and an event listener to sort a user-inputted name into a Hogwarts House, returning that to the site.
Author: Jessica Jorgensen
Date: 05/22/23
*/

// Variable Declaration
// - Element "button" assigned to a variable.
var buttonName = document.getElementById("button");

// Function Declaration
// - A simple function that takes a string, uses modulus, and returns a Hogwarts House's name.
function sortingHat(str) {
  // Variable Declaration - Function  
  // - Taking the length of the inputted String.
  var length = str.length;
  // - Modulus of 4 affecting length. Will be 0, 1, 2, or 3.
  var mod = length % 4;

  // Nest
  // - A mod of 0 will return the string Gryffindor.
  if (mod == 0) {
    return "Gryffindor";
  }
  // - Else if, in the case that it is not of the previous value(s).
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  // - The final else if is not needed, because the only other Integer that could be declared after the previous statements is 3.
  else {
    return "Hufflepuff";
  }
}

// Event Listener
// - On button click, runs sortingHat() and 
buttonName.addEventListener("click", function() {
  // Variable Declaration - Function
  // - Allocate the inputted name from the user.
  var name = document.getElementById("input").value;
  console.log("Entered name: ", name);

  // - Set equal to the result of sortingHat() using name.
  var house = sortingHat(name);
  console.log("Assigned House: ", house);

  // - Statement of the chosen House.
  var sortText = "<p>The Sorting Hat has sorted you into " + house + ".<br>";

  // Assigns the HTML of the <div> "output" as the result of sortingHat().
  document.getElementById("output").innerHTML = sortText;
})
