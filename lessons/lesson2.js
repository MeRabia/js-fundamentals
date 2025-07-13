// Concatination and Interpolation

var price = 60;
var thing = "table";
//var messageToPrint = "the price of your table is 60 dollars";
console.log("the price of your " + thing + " is " + price + " dollars");

// interpolation
// what is interpolation?
// interpolation is a way to embed variables in strings
// it is done using backticks ` and ${variableName}
let message = `the price of you ${thing} is ${price} dollars`;
console.log(message)