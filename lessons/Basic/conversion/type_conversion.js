

let student = 45;


// calculation purpose
student += 10;    //addition assignment operator // output : 55
student -= 5;     //subtraction assignment operator //output: 50
student *= 2;     //multiplication assignment operator//output: 90
student /= 3;     //division assignment operator //output: 15
student %= 3;     //modules assigment operator  //output: 0 // it shows reminder
student **= 2;    //exponentiation assignment operator //output: 2025

// prefix operator and postfix operator
student++         // student increase (postfix) by 1 // output : 46
// there are 2 methods of this
// second is :
++student         // same as above but with (prefix) increment ++student // output : 46
student--         // student decrease (postfix)by 1 // output : 44
--student         // student decrease (prefix) by 1 like above  --student // output : 44

console.log(student);
// string concentation
let name = "john";
let lastName = "wick";
console.log(name + " " + lastName)   // output : john wick

//miscellianeous type conversion

console.log(1+"2"); // expected output is 3 but the actull ouput : 12 because  javascript when we add a number and a string of miscelleneous type conversion called Type Cast
// another case
console.log(1+3+"4"); // expected output is 134 but the actuall output is 44 because in this case javascript first add number because its in sequence and javascript use interpreter so the code excute in a line by line formate.


// arthematic operation in 
// JavaScript can be performed using the following operators:
console.log(4+25-25*0/4);        // output : 8