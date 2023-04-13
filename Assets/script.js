$(document).ready(function () {
  populateField();
  function populateField () { //this function was worked through by myself and an awesome tutor//
    Object.keys(localStorage).some(function(currentProperty) { //localStorage is a giant object, so we can iterate through it//
      if (~currentProperty.indexOf("hour")) { //the function is looking for any Key with "hour" as a part of the name; will return a boolean//
        $(`#${currentProperty} .description`).val(JSON.parse(localStorage.getItem(currentProperty)).task) //if true, this line of code will run to parse the value held in that key FROM localStorage TO the correct textarea within the UI//
      }
    });
  }

  let today = dayjs();
  let currentHour = today.format("H"); //24-hour # value//

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

  $("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

  $.each(hour, function (key, value) {
    let hourInt = value.hour;
    let rowId = value.id;
    if (hourInt < currentHour) {
      $(rowId).attr("class", "row time-block past");
    } else if (hourInt === currentHour) {
      $(rowId).attr("class", "row time-block present");
    } else if (hourInt > currentHour) {
      $(rowId).attr("class", "row time-block future");
    }
  });

  $("button").on("click", function (e) {
    e.preventDefault();
    let getId = $(this).closest("div div").attr("id"); //working;
    let getTask = $(this).prev("textarea").val();

    let userStorage = {
      hourId: getId,
      task: getTask,
    };

    let stringedUserStorage = JSON.stringify(userStorage);
    localStorage.setItem(getId, stringedUserStorage); 
  });
});
