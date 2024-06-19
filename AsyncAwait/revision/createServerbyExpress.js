const express = require('express');//here we are import the express package
const app = express(); // here we are create the package of the express.

app.get("/",(req,res)=>{      // this is a middleware it take 2parameter one is path and second is callback function
  res.send("This is / Request and success");
})

app.get("/hello",(req,res)=>{      // this is a middleware it take 2parameter one is path and second is callback function
    res.send("This is /hello Request and success");
  })

  app.get("/hii",(req,res)=>{      // this is a middleware it take 2parameter one is path and second is callback function
    res.send("This is /hii Request and success");
  })

app.listen(3000,()=>{   // by using app we are calling listen function it take 2 parameter port no and callback function
   console.log("server is created at port 3000 click here to check \n http://localhost:3000")
})
