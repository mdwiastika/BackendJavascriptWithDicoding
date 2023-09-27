class Car {
  #chassisNumber;
  constructor(brand = "Lam", color = "white", maxSpeed = 100) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = null;
  }
  set ChassisNumber(chassis_number) {
    this.#chassisNumber = chassis_number;
  }
  get ChassisNumber() {
    return this.#chassisNumber;
  }
  drive() {
    console.log(`${this.brand} with ${this.color} color is running`);
  }
  break() {
    console.log(`${this.brand} with ${this.color} color is break`);
  }
}
const car = new Car("Ferrari", "red", 400);
car.ChassisNumber = "S 2023 MCL";
console.log(car);
car.drive();
console.log(car.ChassisNumber);
