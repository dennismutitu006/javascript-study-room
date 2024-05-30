class Employee {
  // Public field
  name;
  
  // Private field
  #salary;

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  // Public method
  getSalary() {
    return `The salary of ${this.name} is ${this.#salary}.`;
  }
}

const emp1 = new Employee('John', 50000);
console.log(emp1.getSalary()); // Output: The salary of John is 50000.

