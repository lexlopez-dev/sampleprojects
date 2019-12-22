function sayHello() {
  console.log("Hello");
}

sayHello();

/////////////////////////////////////////

var sayBye = function() {
  console.log("Bye bye");
};

sayBye();

////////////////////////////////////////

function sing(song) {
  console.log(song);
}

sing("Laaa dee");
sing("YEaaaaaaaa");

//////////////////////////////////////

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}

multiply(5, 10);
