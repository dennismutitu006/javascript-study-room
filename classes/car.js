class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }


  details() {
    return `This car is an ${this.brand} ${this.model}.`;
  }
}
module.exports = Car;
