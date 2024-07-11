const express = require("express");
const app = express();
const fs = require("fs");
const status = require("express-status-monitor")
const zlib = require("zlib");



app.use(status());

app.get("/", (req, res) => {
  const data = fs.readFileSync("aman.txt","utf-8");
  res.send(data);
});

app.get("/data",(req,res)=>{
 const stream = fs.createReadStream("aman.txt","utf-8");
   stream.on("data", (chunk)=>res.write(chunk));
   stream.on("end",()=>res.end());
})

// write a api to convert a text to zip


const stream = fs.createReadStream("aman.txt","utf-8")
 stream.pipe(fs.createWriteStream("./akash.txt"))
   

 



app.listen(3000, () => {
  console.log("server started at 3000");
});
