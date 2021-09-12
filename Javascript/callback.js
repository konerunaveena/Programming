/*
Callback is a function that is passed as a parameter in another function.
It needs to wait for another function to execute or return its value.
like when X is completed then executes Y and so on.It is generally used in 
asynchronous javascript code to execute as a synchronous code.
*/
//Example 1:
/*
greeting passed as an argument (callback) to the ‘processUserName’ function. 
Before the ‘greeting’ function executed it waits for the event ‘processUserName’ to execute first
*/
const greeting = (name) =>{
  console.log({name})
}
const processName = (callback) =>{
  let name ="Testing CallBack";
  greeting(name);
}
processName(greeting);
//Example 2:
/*
The console.log function is being passed as a callback to myFunc. 
It gets executed when setTimeout completes
*/
function myFunc(text, callback) {
  setTimeout(() => {
    callback(text)
  }, 1000);
}
myFunc("Testing Callback in timeout", console.log)