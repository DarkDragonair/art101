/* 
lab.js - JavaScript Events and Forms
Summary.
- To utilize an input field and button with a sort function.
Description.
- Use the HTML, CSS, and JavaScript lifted from Lab 7 and 9, in the form of functions and elements, then combine them with events and forms to output a sorted user-inputted text.
Author: Jessica Jorgensen
Date: 05/15/23
*/

// Variable Declaration
var buttonEl = document.getElementById("my-button");

// Function Declaration
// Record a user-inputted name in a String, transfer contents to an Array, sort the Array, and return the contents to a String.
function arrangeName(userName) {
  // Declaration: Variable, Array.
  // Splitting characters of an Array, transferred from a String.
  var userArray = userName.split('');
  console.log("userArray: ", userArray);

  // Declaration: Variable, Array.
  // Array characters are sorted.
  var sortedArray = userArray.sort();
  console.log("arrangedArrary: ", sortedArray);

  // Declaration: Variable, String.
  // Transfer contents to String.
  var nameSorted = sortedArray.join('');
  console.log("nameSorted: ", nameSorted);

  // Return the now-sorted String.
  return nameSorted;
}

// Event - Declaration and Function
// When clicking buttonEl
buttonEl.addEventListener('click', function() {
  // Gets the value of the inputted name.
  var userInput = document.getElementById("user-name").value;

  // Creates a new element.
  var userOutput = document.createElement("p");

  // HTML is changed to the resulted call of arrangedName(), with the parameter being the inputted name by the user.
  userOutput.innerHTML = "Arranged name: " + arrangeName(userInput);

  // Appended to the file to save changes.
  document.getElementById("output").appendChild(userOutput);

  // Copied the userOutput to console to use for debugging purposes.
  console.log("Button arranged name: ", userOutput);
})
