//Num in javascript
// Example
const  num1 = 5;
console.log(num1); //output : 5
// if you want a Number varible stictly
const num2 = new Number(45)
console.log(num2) // output : [ Number : 45 ]

    // Some methods of Number
        // use of toFixed
        let PI = 22/7;
         console.log(PI.toFixed(2)); // its use to give presized value of output, mostly its used in  monetary calculations.
        // use of toString in Number
        console.log(num2.toString().length) // it show the length of a number  when converted into String   
            // use of toPrecision
            let num4 = 45.56564654545;
            console.log(num4.toPrecision(3)); // show the real and actull value of the variable .
            // use of valueOf
            console.log(num2.valueOf(2)) ; // return the primitive value of an object.
            // use of toLocalString
            let money  = 900000;
            console.log(money.toLocaleString('en-IN') );   // as you can see its use for change the currenacy system
            // use of toExponential
            let num5 = 452
            console.log(num5.toExponential(1))   // It is used to convert a number into exponential form.
            // use of constructure 
            console.log(num5.constructor())// output : 0