//Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});

console.log(double);

//map, filter, reduce

//use map when you want to for loop through an array
const mapArray = array.map(num => num * 2);

console.log("map", mapArray);

//filter
const filterArray = array.filter(num => num > 5);

console.log("filter", filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5); //34
//this will start with 5 as the accumulator

console.log("reduce", reduceArray);
