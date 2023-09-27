const person = { name: "Marcel", age: 18 };
const { name, age } = person;
console.log(name);
let a = 1;
let b = 2;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);
