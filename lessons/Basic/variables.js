let name = "John"; //we can change this
var age = 30; // it also can changed  // prefer not to use var, because issue in block scope and fuctional scope 

const Email = "john@example.com"; // it can't be changed
let city = 'New York';

age = 45;
name = " Mike" // name is changed
//Email = "Mike@gmail.com" (// we can't do that because of const keyword)

console.log(name); // Mike
console.log(age)
console.log(Email)