// heap memory in javascript

        // In heap memory the value of the asign variable is call the actull  value.  that is signed to the variable.
        //Example

        let person  = {
            name: "John",
            age: 30,
        }

        console.log(person); // output :  {name: "John", age: 30}

        // but if we can asign the new value to age is actully changed the orginal value of the data
        // Example

        let newAge = person;
        person.age = 45;


        console.log(person) // the value of age is changed to 45
        console.log(newAge)       //output :  45
















// 1. Heap data structure is a complete binary tree where parent node contains at least one child node and the nodes are filled from left to
// heap memory is a special type of memory that the computer's operating system manages for you. It allows programs to allocate and dealloc
// heap is a special type of data structure that follows the parent-child relationship.  
// In JavaScript, we can use Arrays to implement heaps as objects.  

