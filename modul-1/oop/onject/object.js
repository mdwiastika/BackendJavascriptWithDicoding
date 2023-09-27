function Car(brand, series, color) {
  this.color = color;
  this.series = series;
  this.brand = brand;
}
Car.prototype.driver = function () {
  console.log(`${this.brand} with ${this.color} color is runnning`);
};
Car.prototype.service = function () {
  console.log(`${this.brand} with ${this.color} color and  in runnning`);
};
const car = new Car("BMW", "12", "white");
console.log(car.color);
console.log(car.series);
console.log(car.brand);
car.driver();
