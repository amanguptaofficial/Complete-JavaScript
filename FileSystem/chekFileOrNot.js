const fs = require("fs");

const ans = fs.stat("intro.txt", (err, stats) => {
  if (err) {
    return console.log("Error fetching", err);
  }

  if (stats.isFile()) {
    console.log("It is a file...");
  } else {
    console.log("It is not a file...");
  }
});
