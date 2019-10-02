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
const curriedMultiply = a => b => a + b;
curriedMutliply(3)(4);

//can also do this now...
const multiplyBy5 = curriedMultiply(5);

//COMPOSE

const compose = (f, g) => a => f(g(a));

const sum = num => num + 1;

compose(
  sum,
  sum
)(5);

// ^The answer to this will be 7
