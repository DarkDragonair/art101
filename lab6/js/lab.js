/* 
lab.js - Arrays and Objects
Summary.
- Practice arrays and objects.
Description.
- Declaring and printing variables of various data types in relation to modes of transportation and a car.
Author: Jessica Jorgensen
Date: 4/28/23
*/

// Variable Declaration
// Array
var myTransport = ["Shuttle", "Walk"];
// Object
var myMainRide = {
  make: "Volkswagen",
  model: "Polo",
  color: "White",
  year: 2009,
  ownIt: false,
  // Function, used for calculation
  age: function() {
      return 2023 - this.year;
  }
}

document.writeln("Modes of transportation: " + myTransport[0] + ", " + myTransport[1] + "." + "<br>");
document.writeln("Car: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
