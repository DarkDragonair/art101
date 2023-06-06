/* 
lab.js - JSON and APIs
Summary.
- Use AJAX to implement API onto the page.
Description.
- $.ajax retrieves a comic's API (title, image, attributes) and append them into #output.
Author: Jessica Jorgensen
Date: 06/0/23
*/

$.ajax({
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json",
  data: {},

  success: function(data) {
    var comicObj = data;
    var title = comicObj.title;
    var image = comicObj.img;
    var attributes = comicObj.alt;

    console.log(comicObj);
    console.log(title);
    console.log(image);
    console.log(attributes);

    $("#output").html("<h4>" + title);
    $("#output").append("<img src=" + image + "><br><br>" + attributes + "<br>");
  },

  error: function (jqXHR, status, err) {
      console.log("Error: ", status, err);
  }
})
