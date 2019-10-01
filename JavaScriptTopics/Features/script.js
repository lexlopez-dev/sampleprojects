//"let" + "const"
//these are the better ways to declare variables aka "var"

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

//************************************************ */

//Destructuring

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

//template strings
