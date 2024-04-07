// Different premitive data type
// 1. Number : It is used to represent a real number, it can have decimal values as well.
let num = 23;
console.log(typeof num);

// 2. String : A string is a sequence of characters enclosed within double or single quotes. Strings are immutable i.
// 2. String : It is used to represent text or characters. The value of string should be enclosed within either single quotes(' ')
let name = "john"
console.log(typeof name);

// 3. Boolean :  It is used to represent true or false value.
let student = true;
console.log(typeof student);

// 4. Symbol: This datatype was introduced in ES6 ,it is use for storing unique data like userId.
let studentId = Symbol(101)
console.log(typeof studentId);

// 5. Undefined variable: In this the value is exists but it's not defined 
let you;
console.log(typeof you);

// 6. Null :  It is used when we initialize any variable without assigning it a value. Its also obejct type .
let stress = null;
console.log(typeof stress) // object
console.log(stress);


//7. BigInt :  A new addition in JS which allows us to store whole numbers that are beyond the limit of Number .
let bigNum = BigInt("18446744073709551615");
console.log( typeof bigNum + 1n);

// 8. Object : An object is collection of properties .Each property has a name associated with a value .In javascript an object is created using cur
// Object : A collection of properties .It contains key-value pairs.
let person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

console.log(typeof person);