// 4. Objects
const person = {
  FirstName: "Mehdi",
  LastName: "Rabia",
  age: 28,
  occupation: "Software Engineer",
}

console.log("Person:", person);
console.log(`the person is ${person.FirstName} ${person.LastName}`)

// accessing object properties
console.log("First Name:", person.FirstName);   
console.log("Last Name:", person.LastName);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

// updating object properties
person.age = 29;
console.log("Updated Age:", person.age);

// adding new properties
person.city = "Paris";
console.log("City:", person.city);

// deleting properties
delete person.occupation;
console.log("Occupation after deletion:", person.occupation);
console.log(person)

// 5. Arrays
var cars=["Volvo", "BMW", "Mercedes"];
console.log("Cars:", cars);
console.log(` ${person.FirstName} ${person.LastName} has a beautiful ${cars[2]}`)

// accessing array elements
console.log("First Car:", cars[0]);
console.log("Second Car:", cars[1]);    
console.log("Third Car:", cars[2]);
// updating array elements
cars[1] = "Audi";
console.log("Updated Second Car:", cars[1]);
// adding new elements
cars.push("Toyota");
console.log("Cars after adding Toyota:", cars); 
// deleting elements
cars.pop();
console.log("Cars after removing last element:", cars);
