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

const description = 2;

// Function Declaration
// - A simple function that takes a string, uses modulus, and returns a Hogwarts House's name.
function sortingHat(list, name) {
  // Variable Declaration - Function  
  // - Taking the length of the inputted String.
  var length = name.length;
  console.log(length);

  // - Modulus of 4 affecting length. Will be 0, 1, 2, or 3.
  var mod = length % list;
  console.log(mod);

  // - Variable Hogwarts house creation.
  // -- Array for the houses.
  var hogwarts = [list];

  // -- Adds the description to each house, making it a two-dimensional array.
  for (var i = 0; i < list; i++) {
    hogwarts[i] = [description];
  }

  console.log(hogwarts);

  // - Standard four houses. Can be overwritten to change or add specific Houses.
  var hogwarts = [
    ["Gryffindor", "With a color scheme of scarlet and gold, Gryffindor represents those that are chivalrous and valorous. A lion is the House's animal."], 
    ["Ravenclaw", "Those in Ravenclaw display a need to learn and sharpness, portrayed by an eagle. Their house colors are blue and bronze."],
    ["Slytherin", "Clothed in green and silver, Slytherin's students are exemplary cases of ambition and craftiness - best represented by a snake."],
    ["Hufflepuff", "Hardworking and loyal to a fault, the House of Hufflepuff is always willing to lend others a hand. Their yellow and black color scheme is accented by their animal being a badger."]
  ];

  console.log(hogwarts);

  // Assigns the house and description
  var sorted = [hogwarts[mod][0], hogwarts[mod][1]];
  console.log("Assigned House: ", sorted[0]);
  console.log("House Description: ", sorted[1]);

  return sorted;
}

// Event Listener
// - On button click, runs sortingHat().
buttonName.addEventListener("click", function() {
  // Variable Declaration - Function
  // - Allocate the inputted name from the user.
  var list = document.getElementById("number").value;
  var name = document.getElementById("input").value;

  console.log("Entered houses: ", list);
  console.log("Entered name: ", name);

  // - 
  var output = sortingHat(list, name);

  // - Statement of the chosen House.
  var result = "<p>The Sorting Hat has sorted you into " + output[0] + ".<br>" + "<p>" + output[1];

  // Assigns the HTML of the <div> "output" as the result of sortingHat().
  document.getElementById("output").innerHTML = result;
})
