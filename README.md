## dotenv ?

dotenv is a package we can install this package by using npm i dotenv by using this package we can create a env file and define the our constant values like password connection url, secret api keys

inside the dotenv package we have a config method

- First we need to install the dotenv package.
  npm i dotenv
- after that we have to import this dotenv package
  const dotenv = require("dotenv");
- after that we need to create .env file and write some CONSTANT values like URL, PORT, MONGOOSE URL, SECRET_API_KEY etc
- afet that we have a config method inside the dotenv
  const result=dotenv.config();// this method basically read the .env file and parse the all data int set into process.env and return a object which is parsed object.
- we can access by using process.env.PORT/URL/URI/SECRET_KEY
- we have result we can access by using result result.parsed.PORT/URL/URI

## what is the use of this config method?

This method read the .env file and and parse the all content and set into the process.env file after that it return a parsed object

## what is mongodb ??

mongodb is a type of database which store information in a flexible way in the form of document that look like json
This make it easy to handle and scale large amount of data.

## what is schema??

schema is just like a template design which define how your data look like.

## what is mongoose schema?

mongoose schema define the structure of the document like default values,validator etc

## what is model??

model provide an interface to the database for creating query ,updating record,delete record.

## what is mongoose??

mongoose is package/library. which helps to create connection between mongodb and express.if we want to use mongoose in our project then we have to install the package of the mongoose by using npm i mongoose we can install the package and we can use it.

## what is callstack??
 
 call stack is a data structure that keeps tha track of the funciton calls in our code it follow the LIFO (LAST IN FIRST OUT) Order it means the last function that get pushed inside the call stack is the firstone to be poped of when is function is completed.

## what is callback queue?
  
  callback queue is aslo known as task queue It hold the task(callback and events) they are ready to be executed these task usally come from the asynchronous operation.such as DOM events ,http request ,timers

## what is event loop??
  
  event loop responsible for continiously checking the call stack and the callback queue if the call stack is empty then it take the task from the callback queue  and pushed inside the call stack for the execution.

## what is microtaskQueue? 
  
  microtask queue also hold the task they are ready to be executed they has higher priority then call backqueue these taks usally sechdule by the javascript promises ,mutation observer
