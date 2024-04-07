const isUserLoggedIN = true
// shorthand notation 
if(2 == "2") console.log("true")


// all false value 
/* false, 0 -0, Bignit On, "",null ,undefined,nan*/
//all true value
/* true, "0", "false","NaN" " ", [] , {}, function(){}*/

// how to a empty array
let arr1 = []; //empty array
if(arr1.length === 0) {
    console.log("Array is Empty");
}
//if a object is empty
const obj = {}
if (Object.keys(obj).length === 0 ){
   console.log("The user is not logged in and the Object is also empty.")
}

//nullish coalescing operator (??): null undefined

let val1;
val1 =undefined ?? 10
let val2;
val2= null ?? 3
console.log(`Value of Val1: ${val1}`);
console.log(`Value of Val2: ${val2}`);

//terniary operator

//condition ? true : false


const iceLatte = 100;
iceLatte >= 50 ? console.log('You can get a discount') : console.log('Sorry you cannot get a discount');

//logical operators AND & OR

isUserLoggedIN && console.log('User is Logged In');
!isUserLoggedIN && console.log('User is Not Logged In');

//optional chaining (?.)

user?.name || 'Guest';

//Swap variables without temp variable
[x, y] = [y, x];        
console.log(`X value after swapping: ${x}, Y Value after Swapping: ${y} `);

//Destructuring Assignment

const person = { firstName:'John', lastName:'Doe', age:30 };

const {firstName: fn , lastName: ln, age } = person;
console.log(`First Name:${fn}, Last Name: ${ln}, Age: ${age}`)

//Array Destructuring

let arr = ['John','Doe',30];
[fn, ln, age] = arr;
console.log(`First Name:${fn}, Last Name: ${ln}, Age: ${age}`)

//Default Parameters
function greet(person='World'){
    return `Hello ${person}!`
}
console.log(greet()); // Outputs "Hello World!"
console.log(greet('Alice')); // Outputs "Hello Alice!"</s>

