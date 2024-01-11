// Complete the js code

function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getModel = function() {
  return `Make: ${this.make}, Model: ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype, {
  constructor: {
    value: SportsCar,
    enumerable: false,
    configurable: true,
	writable: true
  }
});
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
