// how to create promise - syntax

// let p1 = new Promise((resolve, reject)=>{
//    console.log("line no :4")
//     setTimeout(function(){
//         let data = {usernmae:'aman', password:133}
//         console.log("before resolve")
//         if(1==2){
//             resolve(data)
//         }else{
//             let errData = {msg:"Hi, i am rejected"}
//             reject(errData)
//         }
     


//     },0)

//     console.log("line no 9")
// })

 // how to call reject
// console.log(p1)

// for consume the promise we will use .then() and .catch()
// p1.then((data)=>{
//     console.log(data)
//     return data;
// })
// .catch((err)=>{
//     console.log(err.msg)
// })



//  new Promise((resolve, reject)=>{
//     console.log("line no :4")
//      setTimeout(function(){
//          let data = {usernmae:'aman', password:133}
//          console.log("before resolve")
//          if(1==1){
//              resolve(data)
//          }else{
//              let errData = {msg:"Hi, i am rejected"}
//              reject(errData)
//          }
      
 
 
//      },5000)
 
//      console.log("line no 9")
//  }).then((data)=>{
//     console.log(data)
//  }).catch((err)=>{
//     console.log(err.msg)
//  })


 let data = fetch("https://jsonplaceholder.typicode.com/posts")  // promise

 data.then((data)=>{
    console.log("yes i am inside data")
  return data.json()

 }).then((data)=>{
    console.log("dfsdf:",data)
 }).catch((err)=>{
    console.log("err: ", err)
 })


 // async & await 