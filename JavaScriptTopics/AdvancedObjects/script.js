//reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
//object 1 will not === object3 because they are different objects even thought
//their content is the same

//context (not the same as scope)

const object4 = {
  a: function() {
    console.log(this);
  }
};

//instantiation

class Player {
  constructor(name, type) {
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.tpye}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeeeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
