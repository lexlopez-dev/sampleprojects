const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();


//CLOSURES

//CURRYING

//instead of this...
const multiply = (a, b) => a * b;

//you can do this...
const curriedMultiply