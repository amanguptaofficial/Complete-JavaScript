// let obj = {};

// let obj1 = obj;

// console.log(obj);
// console.log(obj1);
// console.log(obj1==obj);

let userDetails = {
  name: "aman",
  age: 25,
  class: "12th",
  address: {
    city: "Orai",
    state: "Uttar Pradesh",
  },
  hobbies: ["cricket", "reading", "listening"],
};

// console.log(userDetails["name"]);
// console.log(userDetails.address);

// userDetails["bloodGroup"] = "B+";
// userDetails.phoneNumner = 752504534

// console.log(userDetails);

//let obj = new Object({ name: "amana", class: 12 });

//obj.name = "john";
//console.log(obj);

delete userDetails.address.state;

console.log(userDetails)