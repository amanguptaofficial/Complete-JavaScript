/**
 * Task 1: Create an Object with Nested Data
Create an object person with the following properties:

name: Your name
age: Your age
address: An object with:
street: Your street name
city: Your city
state: Your state
hobbies: An array containing at least 3 hobbies (e.g., reading, cycling, swimming)
Log the entire object to the console.
 */

let person = {
  name: "John doe",
  age: 24,
  address: {
    city: "Delhi",
    state: "Delhi",
  },
  hobbies: ["reading", "cycling", "swimming"],
};

console.log(person);

// Access the name and age properties and log them to the console.

console.log("Person Name:- ", person.name);
console.log("Person Age:- ", person.age);

//Change the age property to a new value and log the updated age to the console.

person.age = 28;

console.log("Update Person Age:- ", person.age);

//Add a new property isStudent and set it to true.

person.isStudent = true;

console.log(person);

//Log the address object to the console.
console.log("Address Object :- ", person.address);

//Add a new property phoneNumber with a sample number (e.g., 123-456-7890).

person["phoneNumber"] = "123 - 456 - 789";

console.log(person);

//Delete the isStudent property from the object.

delete person.isStudent;

//Log the final object to the console.
console.log("After deleting the isStudent Property:- ", person);

//Inside the address object, delete the state property.

delete person.address.state;

console.log("After deleting the state in address:- ", person.address);


console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))