console.log("PROMISE FILE START");

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("due to one problem333 ");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("due to some problemsdfsd");
  }, 2000);
});

promise1
  .then((data) => {
    console.log("p1", data);
    return p2;
  }).then((data)=>{
    console.log(data)
  })
  .catch((data) => {
    console.log("data", data);
  });

console.log("PROMISE FILE END..");
