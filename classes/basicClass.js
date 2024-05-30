// Define a class named 'Person'
class Person {
  // Constructor method to initialize properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person's details
  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person1 = new Person('Alice', 30);
console.log(person1.describe()); // Output: Alice is 30 years old.

