const fs = require("fs");

// by using this we can see the information of the file it take only one parameter.
const information = fs.statSync("intro.txt");
console.log(information);

 // it return the information
/**
 Stats {
  dev: 2793456785,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 13229323905504604,
  size: 266,
  blocks: 0,
  atimeMs: 1718803646208.4744,
  mtimeMs: 1718803646119.4048,
  ctimeMs: 1718803646119.4048,
  birthtimeMs: 1718802204505.3977,
  atime: 2024-06-19T13:27:26.208Z,
  mtime: 2024-06-19T13:27:26.119Z,
  ctime: 2024-06-19T13:27:26.119Z,
  birthtime: 2024-06-19T13:03:24.505Z
} 
 */