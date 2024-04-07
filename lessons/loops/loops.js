
// array specific loop
// for of loop

const console = require("console");

// ["","",""]  syntax of array for different things
// [{},{},{}]

// for (const iterator of object) { // oject mean where you enter your paraments means where you wnat to apply your loop
    
// }
const arr =[1,2,"hello",4];
for (const num of arr){
    console.log(num)
}

const word =  "Hello World";
for (const wording of word){
    
    console.log(`detect the space ${wording}`)
    if(wording === ' ') {
        console.log('space is found')
    }
    continue;
   
}
console.log("after the loop")

// maps

let map = new Map();
map.set("name","John");
map.set(1,"Oliver");
map.set(true,null);
console.log(map)

// set loopson map

for (const key of map){
    console.log(key);
}

// destructuring of  arrays in map

for (const [key,value] of map){
    console.log(key ,'', value)
}

// on object 
const obj = {
    "game": "Minecraft",
    "game2": "spiderman3"
}
// for (const [key, value] in obj){             // because that not work in here
//    console.log(`${key}: ${obj[value]}`)
// } 

    // forin loop  //its used in map

for (const key in obj) {
  console.log(`${key} : ${obj[key]}`)
        
    }
// for each loop

const player = ["Mark","Jhonny","Lucas","Lucy"]

player.forEach(   (item) => {
    console.log(item )
}) 

function fu(item) {
    console.log(item)
}
player.forEach(fu)


const coding = [
    {
        name: 'HTML',
        level: 'beginner'
    },
    {
        name:'CSS',
        level:'intermediate'
    },
    {
        name:"javascript",
        level: 'expert'
    }
]
coding.forEach((item) => console.log(`${item.name}-${item.level} `));