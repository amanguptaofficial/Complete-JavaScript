const fs = require("fs") // here we are importing the inbuild module fs

// Now we want to create a file:------
   // we a two method for file creation 
       //1. writeFileSync   ---this is synchronous
       //2. writeFile       --- Asynchronous
     // It return undefind value 

// writeFileSync:-- It is a synchronous function. It block the code of the execution when the file operation is succesfully completed then go to the next line
// writeFile:--- Ot is a Asynchronous function it doest not block of the code it take a callback function it is executed one when the file operation is completed.

fs.writeFileSync("intro.txt","here i am learn how to create file");
fs.writeFile("intro1.txt","here i an learn how to create file in another function",(err)=>{if(err) {console.log("error",err)} console.log("File write success")});
