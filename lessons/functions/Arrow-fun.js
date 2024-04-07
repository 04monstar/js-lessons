//Arrow function

// this keyword
/*const  person = {
    username: 'John',
    age: 30,
    message: function(){
        console.log(`${this.username}, welcome to my course`);
        console.log(this) // let see what 'this' can do
    }
}
person.message();

person.username = "jade"
person.message(); 

function inside(){
    const username = "john"
    console.log(this.username) // undefined coz we can't use inside the function to show output outside of it
}
inside()*/

//Arrow function

const add = (num1 , num2) =>{
    return num1 + num2; //explictily return
}
console.log(add(5,6))

// implictive arrow function

const sub = (num1,num2) => (num1 - num2) // output :3 its mainly used in react library

console.log(sub(7,4));

// return object 
const obj = () => ({username:"john"})
console.log(obj())

//return array
const arr = () => ([12,31,45])
console.log(arr())