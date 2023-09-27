class UniqueArray extends Array {
  constructor(...args) {
    const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

    super(...uniqueValue);
  }

  push(item) {
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new UniqueArray("a", "b", "c", "a", "b", "c");
console.log(someArray);
someArray.push("d");
console.log(someArray);
someArray.push("a");
console.log(someArray);
