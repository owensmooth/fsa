function sum(a, b) {
  return a + b
}

const multiply = function(a, b) {
  return a * b
}

const divide = (a, b) => {
  return a / b
}

const subtrakt = (a, b) => a - b

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`hello my name is ${this.name}, I am ${this.age} years old`);
  }

  setAge(newAge) {
    this.age = newAge
  }
}

class OldPerson extends Person {
  greet() {
    console.log(`hello my name is ${this.name}, I am ${this.age*2} years old`);
  }
}

module.exports = {
  sum,
  multiply,
  divide,
  subtrakt,
  power(a) {
    return a*a
  },
  Person,
  OldPerson
}
