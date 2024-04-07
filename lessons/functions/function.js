// function
// 1. // how to create function

 // create a basic function
 /*var  num2= Number(prompt('enter a numbers') ) // you can use parseInt too // 
 var num3 = Number (prompt('enter a number'))
    function myFunction() { // init function () // parameter
        sum = num3 + num2
       return sum // return value from function

    }
   console.log(myFunction(num2,num3)) // call of funtion // arguments */

    // parametries function
    function User(name , age) { 
        this.name = name ;
        this.age = age;
    }
    var myUser = new User('maytank', 25);
    console.log(myUser)