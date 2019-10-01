//ternary operator
//condition ? expr1 : expr2; (see line 12)

function isUserValid(bool) {
  return bool;
}

//this is pretty much the same as an if/else statement
//IF the user is valid, "You may enter"
//ELSE, "Access Denied"
//This is good for if/else statements with two choices

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

//*******************************************************************/
//switch statements

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You encounter a monster";
      break;
    case "back":
      whatHappens = "You arrived home";
      break;
    case "right":
      whatHappens = "You find a lake";
      break;
    case "left":
      whatHappens = "You run into a wizard";
      break;
    default:
      whatHappens = "Please enter a valid direction";
  }
  return whatHappens;
}
