$(document).ready(function () {
  let textArea = $(".description");
  let savedData = localStorage.getItem("user");
  if (savedData) {
    //if true, there is saved userdata in localStorage and may be accessed on page load//
    populateField ()
  }

  function populateField () {
    let userTasks = JSON.parse(savedData)
    console.log(userTasks)//now i want to tell js to find the id associated with the row that matches that which is in localStorage and 
    // let userTask = userTasks.getTask
    // console.log(userTask)
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
      getId: getId,
      getTask: getTask,
    };

    let stringedUserStorage = JSON.stringify(userStorage);
    localStorage.setItem("user", stringedUserStorage); 
  });
});

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
