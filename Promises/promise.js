// const p1 = new Promise((resolve, reject) => {
//   console.log("first");
//   console.log("Second");
//   console.log("third");
//   console.log("fourth");
//   console.log("before setOut");
//   setTimeout(function () {
//     let data = { name: "Aman Gupta", age: 22, pin: 285001 };
//     if (1 == 2) {
//       resolve(data);
//     } else {
//       let err = { msg: "rejected Due to some reason...." };
//       reject(err);
//     }
//   }, 5000);
//   console.log("after setout function");
// });

// console.log(p1);

// p1.then((data) => {
//   console.log(data);
//   return data;
// }).catch((err) => {
//   console.log(err.msg);
// });

// new Promise((resolve, reject) => {
//   console.log("Hello Aman");
//   console.log("how are you");
//   console.log("i'm fine i m learning promise");
//   setTimeout(() => {
//     console.log("this is my settimeout");
//     let register = {
//       name: "Aman Gupta",
//       age: 22,
//       mobno: 755455671,
//       city: "ghr",
//       password: "lelomerapass",
//     };
//     if (register != null) {
//       resolve(register);
//       console.log("resteration succes.. !!!!");
//     } else {
//       error = { errmsg: "Register failed.." };
//       reject(error);
//     }
//   });
// })
//   .then((registerDetails) => {
//     console.log(registerDetails);
//   })
//   .catch((error) => {
//     console.log(error.errmsg);
//   });

// let data = fetch("https://jsonplaceholder.typicode.com/users");

//   data.then((data)=>{
//    return data;
//   })

console.log("START");
const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let user = { name: "Aman Gupta", age: 22, city: "Orai" };
    resolve(user);
  }, 2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Second promise");
  }, 4000);
});

p1.then(function (data) {
  console.log("Register Success!!", data);
  return p2;
})
  .then((data) => {
    console.log("User Details:", p2);
  })
  .catch(function (data) {
    console.log(data);
  });

console.log("END");
