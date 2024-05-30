// Define a base class 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Define a derived class 'Student' that extends 'Person'
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying.`;
  }
}

const student1 = new Student('Bob', 20, 'A');
console.log(student1.describe()); // Output: Bob is 20 years old.
console.log(student1.study()); // Output: Bob is studying.

