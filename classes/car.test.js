const Car = require('./car')';

test('Car details method returns correct string', () => {
	const car = new Car('Audi', 'Q7');
	expect(car.details().toBe('This car is an Audi Q7.');
});
