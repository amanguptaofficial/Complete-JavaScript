const p1 = new Promise(function (resolve, reject) {
  console.log("Hello I'm Here inside p1 promise...");
  setTimeout(function () {
    console.log("delayed function...");
    resolve("executed resolved p1");
  }, 1000);
});

const p2 = new Promise(function (resolve, reject) {
  console.log("Hello I'm Here inside p2 promise");
  setTimeout(function () {
    console.log("delayed function inside p2 function..");
    resolve("Excuted Resolved p2");
  }, 1000);
});

Promise.all([p1, p2]).then((data) => {
  console.log(data);
});
