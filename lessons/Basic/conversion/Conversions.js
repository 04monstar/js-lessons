let score = "45";// first we check the typeof, because we don't know where the value come from
console.log(typeof score); // Output: 45 


//but it's a  string! and if we want to use this as a Number in JavaScript, we have two options:

var numScore = parseInt(score) ;   // Option 1 : Using parseInt() method
                                // It will convert the string into an integer
let  newNumScore=Number(score);    //Option 2 : Using Number() Constructor
                                //It will also convert the string into an integer

console.log(numScore);     //Output: 45
console.log(newNumScore); //Output: 45

// Sometimes the value is like (45abc) then its not a number  
let newScore = "45abc" ;
// but we exect a number input from user
console.log(typeof newScore); // another way nto find its type is:
console.log(typeof (newScore)); // output is string

// now we convert string into Number
Score_newScore = Number(newScore) ;
console.log(Score_newScore ) // output is NaN
// Number => NaN;
// String => NaN
// boolean => true / false


// Boolean conversion 
let  boolScore = "john"; // if its empty then and we also can use number there
let   boolNewScore = Boolean(boolScore) ;
console.log(boolNewScore ); //output is true , because any non-empty string converted into true

// string conversion
let strScore = 98 ;
let strNewScore = String(strScore) ;
console.log(strNewScore); // output is "98"
console.log(typeof strNewScore); // output is string</