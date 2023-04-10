$(document).ready(function () {});
let past = $(".past"); //caching elements using jquery to access later//
let present = $(".present");
let future = $(".future");

let today = dayjs();

$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

let currentHour = today.format("H"); //24-hour # value//
// let currentHour = 14;

let rows = $(".row");

let hour = [
  {
    id: "#hour-8",
    hour: 8,
  },
  {
    id: "#hour-9",
    hour: 9,
  },
  {
    id: "#hour-10",
    hour: 10,
  },
  { id: "#hour-11", hour: 11 },
  {
    id: "#hour-12",
    hour: 12,
  },
  {
    id: "#hour-13",
    hour: 13,
  },
  {
    id: "#hour-14",
    hour: 14,
  },
  {
    id: "#hour-15",
    hour: 15,
  },
  {
    id: "#hour-16",
    hour: 16,
  },
  {
    id: "#hour-17",
    hour: 17,
  },
];

$.each(hour, function (key, value) {
    let hourInt = value.hour
    let rowId = value.id
    if (hourInt < currentHour) { //working!
      console.log(rowId);
      $(rowId).attr("class", "row time-block past")
    }
    else if (hourInt === currentHour) {
      console.log(rowId);
      $(rowId).attr("class", "row time-block present")
    }
    else if (hourInt > currentHour) {
      console.log(rowId);
      $(rowId).attr("class", "row time-block future")
    }
})

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




