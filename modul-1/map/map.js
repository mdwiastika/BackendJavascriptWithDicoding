const my_map = new Map([
  [1, "Marcel"],
  ["2", "Budi"],
]);
console.log(my_map);
my_map.set("3", "Doni");
console.log(my_map.get("3"));
console.log(my_map.has("2"));
my_map.delete("2");
console.log(my_map.has("2"));
