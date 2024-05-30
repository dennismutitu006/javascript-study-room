class Rectangle {
  //the constructor initilizes the width and height properties
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Getter for the area property
  get area() {
    return this.width * this.height;
  }

  // Setter for the width property
  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }

  // Getter for the width property
  get width() {
    return this._width;
  }

  // Setter for the height property
  set height(value) {
    if (value <= 0) {
      throw new Error('Height must be positive');
    }
    this._height = value;
  }

  // Getter for the height property
  get height() {
    return this._height;
  }
}

const rect = new Rectangle(10, 20);

console.log(rect.area); // Output: 200

rect.width = 15;
console.log(rect.area); // Output: 300

try {
  rect.height = -5; // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Height must be positive
}

