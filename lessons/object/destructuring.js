// destructuring of object

const course = {
    subject: 'javascript',
    price: '12k',
    course_time: '4 month'
            }

          course.time //object  property, not a method
            const {course_time: time } = course // destructuring of object 
             console.log(time) // output: 4 month

             const arr = [];
arr.push('hello');
arr.push('world');

// Destructuring assignment
const [greeting, salutation] = arr;

// Logging the destructured variables
console.log(greeting); // Output: 'hello'
console.log(salutation); // Output: 'world'

// More elements in the array than variables
arr.push('!');
const [first, second] = arr;
console.log(first); // Output: 'hello'
console.log(second); // Output: 'world'

// More variables than elements in the array
const [one, two, three] = arr;
console.log(one); // Output: 'hello'
console.log(two); // Output: 'world'
console.log(three); // Output: '!'
           