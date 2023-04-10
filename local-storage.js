//General Purpose localStorage Methods//

//1)
var firstNameField = document.querySelector("#first-name");
var lastNameField = document.querySelector("#last-name");
var emailField = document.querySelector("#email");
var userForm = document.querySelector("form"); 

//5)
function loadSavedData() {
  var savedData = localStorage.getItem("user");
  if (savedData) {
    var userObj = JSON.parse(savedData);
  }
}

//3)
function processData() { //"ok javascript, put this function in your memory; we'll be calling it later"//
  var firstName = firstNameField.value //we're grabbing the values in the form fields...
  var lastName = lastNameField.value //it's also possible to consolidate the first 3 variables by using .value inside the var user object below//
  var email = emailField.value

  var user = { //structured data; data that has meaning to a machine; BUT, can't be moved across the internet or stored in local storage//
    firstName: firstName,
    lastName: lastName,
    email: email,
  }

  var stringedUser = JSON.stringify(user);

  localStorage.setItem("user", stringedUser); //localStorage is part of the window object available in the API (same with .setItem("",var), so we can just call it)

}

//2)
userForm.addEventListener("submit", function(e) {
  e.preventDefault()
  processData();
});

//4)
loadSavedData();

//-------------------------------------------------------------------------------------------------//

//Digital Ocean article://
//both key and value are wrapped in quotes (key variable storing a string in quotes)
let key = 'Item 1';
localStorage.setItem(key, 'Value');

let myItem = localStorage.getItem(key);

localStorage.setItem(key, 'New Value');

localStorage.removeItem(key);
localStorage.clear();

let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));
let item = JSON.parse(localStorage.getItem(key));

if (localStorage.length > 0) { //will return as truthy or falsy//
  // ...
} else {
  // ...
}

//Iterating over items in localStorage; use a for loop because localStorage and sessionStorage can't take in forEach() methods.//
for (let i = 0; i < localStorage.length; i++){

}

for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i); //i = integer value to check a specific corresponding key/value in localStorage//
  let value = localStorage.getItem(key);
  console.log(key, value);
}

//examples: //jsonlint.com is a JSON validator used to determine whether an object or array in JS is in correct JSON notation//
let form = //this is in JSON notation; normal JS notation does not use strings around each key item//
{
  "name": "Brad",
  "age": 35,
  "address": {//values can be nested objects, or nested arrays (see below)//
    "street":"5 main st",
    "city":"globetown"
  },
  "children":["Bob", "Julie"],//ordered items of similar nature stored in an array//
}