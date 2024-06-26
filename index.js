const express = require("express");
const dotenv = require("dotenv");
const app = express();

const result = dotenv.config();
console.log(result);
if (result.error) {
  throw new error();
}
console.log("returned object", result.parsed);

console.log("Secret key:", process.env.SECRET_KEY);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("secret key:", process.env.SECRET_KEY);
console.log("connection uri:", process.env.CONNECTION_URI);
console.log("username:", process.env.USERNAME);
console.log("password:", process.env.PASSWORD);

app.get("/", (req, res) => {
  res.send(
    "This is GET Api If we want to retrieave all data or retrieve perticular data then we use Get Api"
  );
});

app.listen(process.env.PORT, () => {
  console.log("The Backend Server listen at Port 3000");
});
