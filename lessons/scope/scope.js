//scope

// if {} this use with function and conditational statements thats called scope
// example
/*
if  (true) {
    let x = 'hello';
}
console.log(x); // ReferenceError: x is not defined

let y;
{
   let z = "I'm inside your scope";
   y = z;
}
    console.log(y); // I'm inside your scope

function myFunction() {
    let a = 'Hello!';
    console.log(a); // Hello!
    
    if (true) {
        let b = 'I am inside the IF statement!';
        console.log(b); // I am inside the IF statement!
    }
    
    console.log(b); // undefined - because it isn't in the same scope as A
}

let var1  = 'Outside of any block!'
if(true) {
    let var1 = 40;
    const var2 = 45;
    console.log("inner:" ,var1, var2);
}

console.log( "outer:", var1 ); */// Outputs inner: 40 45 outer: Outside of any block!</s>

// how to  create an scope fuction using syntax?

function parent(){
    const father = "john"
    function child(){
        const son= "jade"
        console.log(father)
    }

   // console.log(son) // cuz error because out of scope
    child();
}
parent(); // output  : john 

// if else  using scope

if (true){
    const name = "john"
    if(name === "john"){
        const lastname = "doe"
        console.log(name + lastname)
    }
    // console.log(website) // eror coz using out of the scope
}
//console.log(name)// also error coz out  of the scope

// 2 techinque to make fuctions

function fun1(num){
    return num+2
}
fun1(3)
const print = fun1(3)
console.log(print)
 // 2.
 const fun2 = function(num){
    return +4
 }
 fun2(6)
 const print2 = fun2(6)
 console.log(print2)