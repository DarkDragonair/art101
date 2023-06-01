/* 
lab.js - AJAX
Summary.
- Use AJAX to implement API onto HTML.
Description.
- Utilize AJAX function to retrieve API from external source, put it into div #output, then show it when button #activate is clicked.
Author: Jessica Jorgensen
Date: 06/01/23
*/

function yesNo() {
  $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {},
  })

.done(function(data) {
  var yes = data.answer;
  var no = data.image;
  $("#output").html("<h4>" + yes);
  $("#output").append("<img src=" + no + ">");
})
}

$("button").click(yesNo);
