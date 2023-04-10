//learn.jquery.com//

//jQuery methods and properties accessed in JS via $($=jQuery)//
//non-caching; if needed later, make a variable: ex. var divs = $("div");
//MOST BASIC CONCEPT for jQuery: select some elements and do something with them -> $("id, class, attribute, compound css selector, comma-separated lists, pseudo's")
//A callback is a function that is passed as an argument to another function and is executed after its parent function has completed. Callbacks are special because they patiently wait to execute until their parent finishes. To use callbacks, it is important to know how to pass them into their parent function.//

$(document).ready(function () { //defer executing click method/function by using an anonymous function as a wrapper; the anonymous function calls any subsequent functions//
  $("a").click(function (event) {
    alert("As you can see, the link no longer took you to jquery.com");
    event.preventDefault();
    $(this).hide("slow");
  });
  $("a").addClass("test");
  $.get( "myhtmlpage.html", myCallBack );//callback function with no arguments//
  $.get( "myhtmlpage.html", function() {//callback function with arguments//
    myCallBack( param1, param2 );
});
  });

//Core jQuery Methods: methods that do not ACT on a selection that are part of the jQuery namespace//
//on the flipside, jQuery object methods are attached to jQuery-defined objects//
//these 2 distinctions can have the same name: ex. $.each() and .each()
//.attr(key, value), .attr({name:value, etc}): setter
//.attr("__"): getter; returns ___ for first element preceding the .attr statement//
//$("").has/not/filter/first/eq... ; refining and filtering selections//
//Getting/Setting information about elements: .html/text/attr/width/height/position/val(*for form elements)

//https://learn.jquery.com/using-jquery-core/working-with-selections/
