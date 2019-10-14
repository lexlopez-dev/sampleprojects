const basket = ["apples", "bananas", "grapes"];
const detailedBasket = {
  apples: 5,
  bananas: 10,
  grapes: 1000
};

/******************************************************** */
//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
});

/** **********New ways write for loops*********/

//for of
//Iterating (is for arrays, strings)
for (item of basket) {
  console.log(item);
}

//for in
//Enumerating (is for objects)
for (item in detailedBasket) {
  console.log(item);
}
