/* 
lab.js - JavaScript for the Web
Summary.
- Experimentation of elements through JavaScript and the website.
Description.
- Declared variables through retrieving as well as modifying elements' HTML and CSS, then displaying them back onto the webpage.
Author: Jessica Jorgensen
Date: 5/10/23
*/

// Variable Declaration, Elements
// - Element retrieved from the <div> with the id "output"
var outputEl = document.getElementById("output");
// - Assigning two new elements nodes to outputEl.
var new1El = document.createElement("p");
var new2El = document.createElement("a");

// - Element retrieved from a <p> with the id "caption"
var captionEl = document.getElementById("caption");
var new3El = document.createElement("p");

// - Element retrieved from a <p> with the id "results"
var resultsEl = document.getElementById("results");
var new4El = document.createElement("c");
var new5El = document.createElement("p");

// - Element retrieved from a <p> with the id "num"
var linkEl = document.getElementById("num");
var numLink = document.createElement("p");

// - Element retrieved from a <p> with the id "doc"
var docEl = document.getElementById("doc");
var type = document.createElement("p");

// HTML Element Modification
// - Adding HTML text and an external link to a JavaScript file
new1El.innerHTML = "Loading...";
new2El.innerHTML = "New task: review JavaScript.";
new2El.setAttribute("href", "js/lab.js");

// - Adding HTML text
new3El.innerHTML = "Lab 9's JavaScript file as of [Task 2]. Features the changing of element color (CSS), links (HTML), style (CSS), and text (HTML) through multiple variables.";

new4El.innerHTML = "Including this one!";
new5El.innerHTML = "Several parts about the page have been altered from the usual format.";

numLink.innerHTML = document.links.length;

type.innerHTML = document.documentElement.nodeName;

// CSS Element Modification
// - Changing font color and style
new1El.style.fontWeight = "bold";
new2El.style.color = "white";
new2El.style.textDecoration = "underline";

new3El.style.fontStyle = "italic";

new4El.style.color = "#B6D0E2";
new4El.style.fontStyle = "italic";
new5El.style.fontFamily = "monospace";

// Apply
// - Appending the elements to outputEl - to <div> "output"
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// - Appending the element to captionEl - to <p> "caption"
captionEl.appendChild(new3El);

// - Appending the element to resultsEl - to <p> "results"
resultsEl.appendChild(new4El);
// - Prepending this element - putting it before the first element of resultsEl
resultsEl.prepend(new5El);

// - Appending the element to linkEl - to <p> "num"
linkEl.appendChild(numLink);

// - Appending the element to docEl - to <p> "doc"
docEl.appendChild(type);

// Console
// - Displaying HTML and CSS of new elements in the ID
console.log(outputEl);
// - Showing the named element nodes in a list
console.log(outputEl.childNodes);

console.log(captionEl);
console.log(captionEl.childNodes);

console.log(resultsEl);
console.log(resultsEl.childNodes);

console.log(linkEl);
console.log(linkEl.childNodes);

console.log(docEl);
console.log(docEl.childNodes);
