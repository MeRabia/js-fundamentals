// logical operators
// These operators combine boolean values and return a boolean result
// Examples include: && (AND), || (OR), ! (NOT)

// AND operator
var ageLessThan18 =  true
var citzenMA_1  = true
console.log("this person is allowed to get a driving license?", ageLessThan18 && citzenMA_1); // false

// OR operator
var ageMoreThan18 =  true
var citzenMA_2  = false
console.log("this person is allowed to get a driving license?", ageMoreThan18 || citzenMA_2); // true

// NOT operator
console.log("this person is allowed to get a driving license?", !ageLessThan18); // false