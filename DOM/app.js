//const text = document.querySelector(".title");
//const changeColor = document.querySelector(".changeColor");

//changeColor.addEventListener("click", function() {
// text.classList.toggle("change");
//});

const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

//for (user of userList) {
//  user.addEventListener("click", function() {
//    this.style.color = "red";
//  });
//}

addListBtn.addEventListener("click", function() {
  //Create an li out of thin air
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside that new li
  newLi.appendChild(liContent);
  //Attaching the li to the user list
  userList.appendChild(newLi);
});
