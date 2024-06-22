// here i am import the express package. express is web framework of node js by using express we can create rest apis very easily and we can create web application.
const express = require("express");
const multer = require("multer");
// in this line we are creating the instance of the express() by using this we can use all the functionalites of the express like server creation middleware ,routing
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//host,accept,route,header,_hasbody,writeable,query,params,path,pathname,href,raw,hostname,port,_parseurl,originalurl,baseurl,_headers
// here we are creating the rest api's if any request coming from the / then our callback function will be executed...
// app.get("/", (req, res) => {
//    // console.log(req.route) // it return a object where we can see the path ,stacj adn layer
//     //console.log(req.stack)
//    // console.log(req.query); // it return a object where we can find the data with filteration
//     //console.log(req.accept);// it return an empty array
//   //  console.log(req.host); // it return the host name localhost
//   //console.log(req.headers.name);
//   req.headers.age=25;
//   //console.log(req.headers['postman-token'])
//   //console.log(req.ips);
//    //:name/:age/:mob
//   //console.log(req.params.name);/by using req.params we can get the value which is coming from the path param
//   //console.log(req.params.age);
//   //console.log(req.params.mob);
//   //console.log(req.pathname);
//   //console.log(req.href);
//   console.log(req.ips)//it return a array and ip return the value
//   console.log(req.baseUrl)
//   console.log(req.originalUrl);
//   res.send({name:req.headers.name,age:req.headers.age,token:req.headers['postman-token']});
// });

//app.get("/", (req, res) => {
//  if(!req.headers.age){
//    res.send("please provide the age in header");
//  }

// if (req.headers.age>18) {
//   res.send("you are eligible");

// } else {
//   res.send("you are not eligible");
// }

app.get("/", (req, res) => {
  res.send("Hii This is / apis");
});
app.get("/redirect", (req, res) => {
  res.redirect("https://www.instagram.com/");
});

app.get("/getData", (req, res) => {
  res.send("data is coming").status(500);
});

app.get("/data", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  res.send(data);
});

// in this line we are creating the server in the 3000 port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀The Backend Server is up and running on port ${PORT}🚀`);
});
