// Non-premitive data type or // referance type

// 1. Object : An object is collection of properties .Each property has a name associated with a value .In javascript an object is created using cur
// Object : A collection of properties .It contains key-value pairs.
let person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

console.log(typeof person);   // output: object

// Array: 

let games = ["COD", "BGMI","FIREFIRE"]
console.log(games); // output: ['COD', 'BGMI', 'FREEFIRE']
// for check from the index values
console.log(games[1]);     // output: BGMI  [1] => our index value 1 and values start from 0

// function:

function Helloworld(){
    return "Hello World";
}
console.log(Helloworld());      // Hello World

    // another way to make a function
    const sayHi = () => {
        return 'hi';
    }
    console.log(sayHi())       // hi