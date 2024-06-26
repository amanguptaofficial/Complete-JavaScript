const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

console.log(cors());

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(process.env.PORT, () => {
  console.log(`The Backend Server listen at PORT ${process.env.PORT}`);
});
