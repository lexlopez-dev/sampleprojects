//"let" + "const"
//these are the better ways to declare variables aka "var"

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

//************************************************ */

//DESTRUCTURING

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
};

//With Destructuring, instead of doing this...
const player = obj.player;
const experience = obj.experience;
const wizardLevel = obj.wizardLevel;

//...you can do this
const { player, experience } = obj;
let { wizardLevel } = obj;

//*********************************************** */

//TEMPLATE STRINGS

const name = "Sally";
const age = 25;
const pet = "cat";

//instead of doing this..
const greeting =
  "Hello" + name + ", you are" + age + " and have a " + pet + ".";

//you can do this
const greetingBest = `Hello ${name}, you are ${age} and have a ${pet}.`;
//this ^ is much shorter and cleaner

//defaults arguments "cat", "30", and no name
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name}, you are ${age} and have a ${pet}.`;
}

//***************************************************************** */

//SYMBOL

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foooo");

//*************************************************************** */
//ARROW FUNCTION

//instead of doing this...
function add(a, b) {
  return a + b;
}

//you can do this...
const add = (a, b) => a + b;
//you don't have to use "return" if you are only using 1 return
