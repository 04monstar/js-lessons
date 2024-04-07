// comparsion operator
console.log(45 > 5)  //output : true
console.log(45 < 5) // output : fasle
console.log( 45 == 5) // output: false
console.log("45" == 45) //output : ture because the value is same 
// its use for strictly ccomapior the values
console.log("45" === 45); //output: false because it also check for data type
console.log(45 != 5) // output : true


// comparison of null
// null doesn't means 0 because it a empty value, we can asign the value
console.log(null > 0); //output: false 
console.log(null == 0); //output: false
console.log(null === 0); //output: false
console.log(null <= 0); //output : true // because of there empty value  so it return true

// comparison of undefine 
 let x = undefined;
 // because  undefined is not have any value so it always less than or equal to anything but some value can be there which isn't defined yet
 console.log(x == 0); // output : false
 console.log(x === 0);// output : false
 console.log(x >= 0);// output : false
 console.log(x < 0);// output : false