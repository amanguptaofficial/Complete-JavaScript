// let myPromise= new Promise((resolve,reject)=>
// {
//   console.log("hello");
//   if(1==1)
//     resolve();
//   else
//    reject();
// })

// console.log(myPromise);

let msg="hello 12 "
let data = fetch("https://jsonplaceholder.typicode.com/posts");

// console.log(msg,data)

data.then((data)=>{
   return data.json()
}).then((same)=>{
    console.log(same)
}).catch((err)=>{
    console.log(err)
})