// async await is a keyword 
// async use with function
// if our function is async mean if we add async keyword with function then only we can use "await" otherwise we can't use.


async function sayHello(){
    try {
        
    
    console.log("Hello 1")
    console.log("Hello 2")
 
   let data =  await fetch("https://jsonplaceholder.typicode.com/posts"); // 30 sec
   console.log("Hello 3",data)

   let actualData = await data.json();
   console.log("Hello 4")
   console.log(actualData);
   console.log("hello 5")
        } catch (error) {
                console.log(error.message)
        }
}




sayHello()