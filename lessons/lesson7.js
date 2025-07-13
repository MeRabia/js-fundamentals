// loops

const numbers = [1, 2, 3, 4, 5];
// for loop 
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number at index ${i}:`, numbers[i]);
}
// ES6 for...of loop
var cars = ["Volvo", "BMW", "Mercedes"];
cars.forEach((car,index) =>{
    console.log("Car :",index, car);
    console.log(`The car at index ${index} is ${car}`);
})