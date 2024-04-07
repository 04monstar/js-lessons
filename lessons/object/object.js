// object
    // type of object
        //signleton
        // litreals

    // literals
// how to use symbols in object
        // eg:
     // Define a symbol
// Create a symbol
// Create a symbol
const keyName = Symbol("userkey"); // Creates a new unique symbol with the description "userkey"

// Create an object using object literal notation
const jsUser = {
    name: 'John Doe',
    [keyName]: 123456789, // Symbol key "userkey" with value 123456789
    age: 30,
    city: 'New York',
    isMarried: false,
    email: "john.doe@gmail.com",
    lucky_number: [4, 5, 7]
};

console.log(jsUser);
console.log(jsUser.name); // Access using dot notation
console.log(jsUser['name']); // Access using bracket notation
console.log(typeof keyName); // Access symbol key "userkey" and log its type as 'symbol'


        // update data inside object
        // normal way - change property directly
            // jsUser.age = 31;     
        
        // another way - create method for updating properties
        /*
        function updateAge(person, newAge) {
            person.age = newAge;
        }
        */

        // better way - create method inside object itself (closure)
        jsUser.updateAge = function(newAge){
            this.age = newAge;
        };

        console.log(jsUser.updateAge());   // Method exists in the object
        jsUser.updateAge(31);           // Calling the method to update age
        console.log(jsUser.age);       // Logs updated age