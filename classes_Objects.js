const intern = {
  calcStipend(salary) {
    console.log(`Stipend is ${this.salary * 0.9}`);
  },
};

const lakshya = {
  salary: 90000,
};

const yoyo = {
  salary: 50000,
};
// learning about prototype
yoyo.__proto__ = intern;
lakshya.__proto__ = intern;

// learning about CLASSES
class BMWcar {
  constructor(mileage) {
    console.log("Constructor was called and details are filled");
    this.brand = "BMW";
    this.mileage = mileage;
  }
  start() {
    console.log("BMW started");
  }
  stop() {
    console.log("BMW stopped");
  }
  setBrand() {
    this.brand = "BMW";
  }
}

let m3 = new BMWcar(10);
let xM = new BMWcar(12);

//learning about INHERITENCE and SUPER keyword
class Bugatti extends BMWcar {
  constructor() {
    super(); // calling parent constructor
    this.model = "NEW";
  }
  fast() {
    super.start();
    console.log("This car is fastest");
  }
}

let chiron = new Bugatti();
