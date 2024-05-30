class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Method to display car details
  details() {
    return `This car is a ${this.brand} ${this.model}.`;
  }
}

const car1 = new Car('Toyota', 'Corolla');
console.log(car1.details()); // Output: This car is a Toyota Corolla.

