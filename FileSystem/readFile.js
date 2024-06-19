const fs = require("fs"); // here i am import the inbuild module of javascript

// we have a two function for read file 1. readFile(), 2. readFileSync()

const ans = fs.readFileSync("intro.txt", "utf-8");

console.log(ans);

//by using asynchronous function:----

fs.readFile("intro1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error", err);
  }
  console.log(data);
});

// readFileSync-- It is a synchronous function It block the execution of our project until file operation is not succesfuly completed..
//readFile-- It is asynchronous function It doest not block the code It has a callback function which is exeuted only once when the file operation is done 
