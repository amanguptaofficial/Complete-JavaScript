/**How to Crete a Http Server.. */

const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("Everything perfect..");
})

server.listen(4000,()=>{
   console.log("SERVER STARTED AT PORT 4000 CLICK HERE TO OPEN  \n  http://localhost:4000 ")
})



