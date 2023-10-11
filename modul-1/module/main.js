const { coffeStock, isYummy } = require("./coffeStock");
const makeCoffe = (type, count) => {
  if (coffeStock[type] >= count) {
    console.log(`Kopi ${type} berhasil di buat!`);
  } else {
    console.log("Stok tidak mencukupi!");
  }
};
const Make = makeCoffe("robusta", 20);
module.exports = Make;
