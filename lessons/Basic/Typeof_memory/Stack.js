// Stack memory
let username = "jade"

console.log(`Hello, ${username}!`) // output is hello, jade

// but if we can try to changed the value of username variable ?

let newusername = username; // asigned username to newusername

newusername = "john" // the value of new user name

console.log(newusername)// output : // john 

console.log(username) // output : jade , because in stack memory the value of username is asigned to the new username it's just a copy
 

//Data structure


// Stack is used to store the return address of a function call.
const stack = []; // Empty array to simulate stack

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack); // Output: Stack: [10, 20, 30]

// Pop element from the stack
const poppedElement = stack.pop();
console.log("Popped element:", poppedElement); // Output: Popped element: 30

console.log("Stack after pop:", stack); // Output: Stack after pop: [10, 20]

// Peek at the top element of the stack
const topElement = stack[stack.length - 1];
console.log("Top element:", topElement); // Output: Top element: 20
