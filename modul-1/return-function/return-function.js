function calculate(value) {
  console.log("oke", value);
  return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}
// 2 , 1
// 1, 0
//
console.log(calculate(3));
