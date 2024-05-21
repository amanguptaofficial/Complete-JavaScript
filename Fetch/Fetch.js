// const post = fetch("https://jsonplaceholder.typicode.com/posts");
// const user = fetch("https://jsonplaceholder.typicode.com/users");

// // p2.then((data) => {
// //   //console.log(data);
// //   return data.json();
// // }).then((data) => {
// //   console.log(data);
// // });

// // we have promise.all method if we want to combine lots of promises then we should go fir promise.all

// Promise.all([post, user])
//   .then(([postResponse, userResponse]) => {
//     return Promise.all([postResponse.json(), userResponse.json()]);
//   })
//   .then((promiseData) => {
//     console.log(promiseData);
//   })
//   .catch((err) => console.log("something wrong...", err));

// Promise.any([post, user]).then((data) => {
//   console.log(data);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("val-1");
//   }, 0);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("val-2");
//   }, 0);
// });

// Promise.any([p1, p2]).then((data) => {
//   console.log(data);
// });

// if we are passing Empty Array inside this any then i will give AgreegateError:All Promises were rejected..

// Promise.any([]).then((data)=>{
// console.log(data);
// })

const p1 = new Promise((resolve, reject) => {
  resolve("value-1");
});

const p2 = new Promise((resolve, reject) => {
  resolve("value-2");
});

const p3 = new Promise((resolve, reject) => {
  reject("value-3");
});

Promise.any([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

//we can use directly use resolve.reject() for testing purpose'

const promise1 = Promise.resolve("Resolved...");
const promise2 = Promise.reject("Rejected....");

promise1
  .then((allData) => console.log(allData))
  .catch((err) => console.log("Something went wrong", err));
promise2
  .then((allData) => console.log(allData))
  .catch((err) => console.log("Something went wrong", err));
