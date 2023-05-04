/* 
lab.js - Functions
Summary.
- To sort a user-inputted name and print it back out.
Description.
- Accept a name input from the user, transferring and sorting the characters, then printing out the result using Strings, Arrays, and Functions.
Author: Jessica Jorgensen
Date: 5/3/23
*/

// Function
// Record a user-inputted name in a String, transfer contents to an Array, sort the Array, and return the contents to a String.
function arrangeName() {
  // Declaration: Variable, String.
  // User is prompted to enter name.
  var userName = window.prompt("Please enter your name to be rearranged.");
  console.log("userName: ", userName);

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

// Output
// Print out the now-sorted String.
document.writeln("Rearranged name is as follows: ", arrangeName(), "</br>");
