// // in this file I'm Learning Async Await...

// async function gettingUserInfo(){

//     try {
//         console.log("sdfasdf")
//         console.log("sdfasdf")
//         console.log("sdfasdf")
//         console.log("sdfasdf")
//         console.log("sdfasdf")
//         console.log("sdfasdf")
//         console.log("sdfasdf")

//         let data =  await fetch("https://api.github.com/users/amanguptaofficial");
//         let jsonData = await data.json();
//         console.log(jsonData);

//     } catch (error) {
//         console.log(error);
//     }

// }

// function sky(){
//     console.log("helelo")
// }

// gettingUserInfo();
// sky()

//  function hello() {
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");

const printTest = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log("Time Taken....");
    resolve("Tttt")
  }, 0);
});

//   console.log("hii");
//   console.log("hiiii");
//   console.log("hiiii");
//   console.log("hiiii");
//   console.log("hiiii");
//   p1.then((data) => {
//     console.log(data);
//   });
// }

// hello();

async function hello() {
  console.log("Jay mahakal");
  console.log("Jay mahakal");
  console.log("Jay mahakal");

  const ans = await printTest;
  console.log(ans);

  //fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("jay mahadev");
  console.log("jay mahadev");
  console.log("jay mahadev");
}

hello();
