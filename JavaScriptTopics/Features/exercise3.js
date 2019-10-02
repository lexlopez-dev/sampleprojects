// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;
a = "test2";

//**Answer************************************ */
let a = "test";
let b = true;
let c = 789;
const a = "test2";

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//**Answer*********************************** */

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//**Answer N/A*********************************************** */

// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

//**Answer****************************************************** */

const messageBetter = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no??`;

// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}
//**Answer***** */
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

//******Answer****************************************************** */
let firstSym = Symbol("This is my first symbol");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

//**Answer***** */
const whereAmI = (username, location) => {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
};
