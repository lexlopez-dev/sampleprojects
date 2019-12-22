//Facebook

var database = [
  {
    username: "Andre",
    password: "secret"
  }
];

var newsfeed = [
  {
    username: "John",
    timeline: "I love code!"
  },
  {
    username: "Sammy",
    timeline: "JS is the best!"
  },
  {
    username: "Betty",
    timeline: "So fun!"
  }
];

var usernamePrompt = prompt("Whats's your username?");
var passwordPrompt = prompt("Whats your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    console.log("Sorry, wrong username or password.");
  }
}

signIn(usernamePrompt, passwordPrompt);
