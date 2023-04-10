$(document).ready(function () {});
let past = $(".past"); //caching elements using jquery to access later//
let present = $(".present");
let future = $(".future");

let today = dayjs()
console.log(today)
$('#currentDay').text(today.format("dddd, MMMM DD, YYYY"));

let currentHour = today.format("H");
console.log(currentHour); //24-hour # value//

//time is past, color gray. if time is present, set style to yellow. if time is future, set style to green)
// let hour = [$()]
let rows = $(".row")
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes?
rows.each( function(index, element ) { //working; iterating over jQuery collection stored in "rows" variable//
  // if ();
});
//if/else to compare; for loop to select or list


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

$(".saveBtn").on("click", function (e) {
  e.preventDefault();
});

// Use class for "past", "present", and "future" to apply styles to the
//         time-block divs accordingly. The javascript will need to do this by
//         adding/removing these classes on each div by comparing the hour in the
//         id to the current hour. The html provided below is meant to be an example
//         demonstrating how the css provided can be leveraged to create the
//         desired layout and colors. The html below should be removed or updated
//         in the finished product. Remember to delete this comment once the
//         code is implemented.
