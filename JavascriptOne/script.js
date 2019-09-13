// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
//{
//	username: "andrei",
//	password: "supersecret"
//}

// 2. Create an array which contains the object you have made above and name the arry "database"
var database = [
  {
    username: "andrei",
    password: "supersecret"
  },
  {
    username: "billy",
    password: "secretpass"
  },
  {
    username: "alex",
    password: "wordpass"
  },
  {
    username: "tom",
    password: "passpass"
  }
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!"
  }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What is you password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and/or password!");
  }
}

signIn(userNamePrompt, passwordPrompt);
