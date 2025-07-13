// Functions   
// 1. Function Declaration
// this function can be called before its declaration
// Function Declaration is hoisted, meaning it can be called before its definition
// what is hoisted ?
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means you can call a function before it is defined in the code.

HelloOne(); // Calling the function
function HelloOne() {
    console.log("Hello from Function Declaration");
}
HelloOne(); // Calling the function

// 2. Annonymous Function or Function Expression
// this function cannot be called before its declaration
// Function Expression is not hoisted, meaning it cannot be called before its definition

var HelloTow = function() {
    console.log("Hello from Function Annonymous");
}
HelloTow(); // Calling the function

// 3. Arrow Function or ES6 Function
// this function can be called After its declaration
// Arrow Function is not hoisted, meaning it cannot be called before its definition
const HelloThree = () => {
    console.log("Hello from Arrow Function");
}
HelloThree(); // Calling the function

// 4. arguments function
// this function can take any number of arguments
var som = (a,b) => {
    console.log(`the sum of ${a} and ${b} is ${a+b}`)
}
som(5, 10); // Calling the function with two arguments

// 5. function with return
function multiply(a, b) {
    var result = a * b; // calculate the product of a and b
    return result; // returns the product of a and b
}
console.log(multiply(5, 10)); // Calling the function with two arguments

// 6. importing and exporting functions

import { hisAge } from '../helpers/helpers.js'; // Importing the function from helpers.js
console.log(hisAge(25)); // Calling the imported function with an argument

// 7. impprt everything from a module
import * as helper from '../helpers/helpers.js' // Importing everything from helpers.js
console.log(helper.hisAge(30)); // Calling the imported function with an argument