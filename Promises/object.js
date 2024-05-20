function demo() {
  let symbol = Symbol("hello");
  let obj = {
    name: "Akash",
    "full Name":"Akash Gupta",
    age: 22,
    mySymbol: symbol,
  };

  console.log(obj["full Name"]);
  console.log(obj.age);
  console.log(obj.mySymbol);
}

demo();
