//learn.jquery.com//

//jQuery methods and properties accessed in JS via $($=jQuery)//

//non-caching; if needed later, make a variable: ex. var divs = $("div");

TODO://MOST BASIC CONCEPT for jQuery: select some elements and do something with them -> $("id, class, attribute, compound css selector, comma-separated lists, pseudo's")

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

//TODO:Random Class Notes:

var myName = "Gary";
var student = {
  name: "Ralph",
  age: 25
}

const student = {
  name: "Henry",
  age: 40
}
student.name = "Burt";
student.age = 34;

//CANNOT reassign the ENTIRE variable if declared as a const variable; use const unless prompted to use let by js; this is because const is stored in a different (more performance-efficient way) than let//

function doSomething(x,y){ //simple function taking in two parameters, and then returning those two parameters//
  return x + y
}

//Truncated Arrow Function: we are allowed to use the arrow function without the curly braces if we are only trying to do ONE THING; it implies an IMMEDIATE RETURN;
const doSomething = () => "hello"; //if no parameters are declared then we need the empty parentheses//
const doSomething = x => x**2; //if one parameter is declared then we can omit the parentheses//
const doSomething = (x,y) => x + y; 

const obj = {
  name: "whatever",
  age: 55,
  increaseAge: function(){ //this is referring to the age key inside the curly braces//
    this.age = this.age + 10;
  }
}

const obj2 = {
  name: "whatever",
  age: 55,
  increaseAge: () => this.age = age + 10 //this will break code; the arrow functions are scoped to look for where the parent object was created (obj2), which in this case is in the global namespace; in other words...NO ARROW FUNCTIONS AS METHODS INSIDE OBJECTS//
  }
