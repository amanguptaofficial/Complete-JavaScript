const express = require("express");
const app = express();

//this is a built in middleware by using this express.js automatically parse the json formatted data into the javascript object and make it availabe in response body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Everything perfect");
});


app.listen(3000, () => {
  console.log("server started at port 3000");
});
