/* 
lab.js - Libraries & jQuery
Summary.
- To use jQuery in order to override <div>s into Buttons, as well as to use those buttons to change other elements of the page.
Description.
- Allow jQuery to override <div>s into Buttons as well as on click to add a Class on top of three other Classes.
Author: Jessica Jorgensen
Date: 05/17/23
*/

// Function Declaration

// Button Declaration

// Turning <div id="challengeButton"> to a Button via jQuery
$(document).ready(function() {
  $('<button class="btn-style" type="button">Surprise me!</button>').appendTo('#challengeButton')
})

// Turning <div id="problemsButton"> to a Button via jQuery
$(document).ready(function() {
  $('<button class="btn-style" type="button">Surprise me!</button>').appendTo('#problemsButton')
})

// Turning <div id="resultsButton"> to a Button via jQuery
$(document).ready(function() {
  $('<button class="btn-style" type="button">Surprise me!</button>').appendTo('#resultsButton')
})

// Button Click Function Declaration

// Adds .special to .challenge when the button is pressed
$("#challengeButton").click(function() {
  $(".challenge").addClass("special");
})

// Adds .special to .problems when the button is pressed
$("#problemsButton").click(function() {
  $(".problems").addClass("special");
})

// Adds .special to .results when the button is pressed
$("#resultsButton").click(function() {
  $(".results").addClass("special");
})
