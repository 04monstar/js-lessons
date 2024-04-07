// JavaScript Object Methods and Attributes

// Accessing object properties using dot notation
const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  
  console.log(person.name); // Output: John Doe
  console.log(person.age); // Output: 30
  console.log(person.city); // Output: New York
  
  // Accessing object properties using bracket notation
  console.log(person["name"]); // Output: John Doe
  console.log(person["age"]); // Output: 30
  console.log(person["city"]); // Output: New York
  
  // Updating object properties using dot notation
  person.age = 35;
  console.log(person.age); // Output: 35
  
  // Updating object properties using bracket notation
  person["city"] = "Los Angeles";
  console.log(person.city); // Output: Los Angeles
  
  // Adding new properties to an object using dot notation
  person.state = "California";
  console.log(person.state); // Output: California
  
  // Adding new properties to an object using bracket notation
  person["country"] = "USA";
  console.log(person.country); // Output: USA
  
  // Deleting object properties using the delete keyword
  delete person.age;
  console.log(person); // Output: { name: 'John Doe', city: 'Los Angeles', state: 'California', country: 'USA' }
  
  // Object methods
  const person2 = {
    name: "Jane Doe",
    age: 25,
    city: "Chicago",
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I live in ${this.city}.`);
    },
    updateName(newName) {
      this.name = newName;
    }
  };
  
  person2.introduce(); // Output: Hi, I'm Jane Doe and I'm 25 years old. I live in Chicago.
  person2.updateName("Jane Smith");
  person2.introduce(); // Output: Hi, I'm Jane Smith and I'm 25 years old. I live in Chicago.
  
  // Object constructor
  function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.introduce = function() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I live in ${this.city}.`);
    };
  }
  
  const person3 = new Person("John Doe", 30, "New York");
  person3.introduce(); // Output: Hi, I'm John Doe and I'm 30 years old. I live in New York.
  
  // Object.create() method
  const person4 = Object.create(person2);
  console.log(person4); // Output: { name: 'Jane Doe', age: 25, city: 'Chicago' }
  
  // ES6 class syntax
  class PersonClass {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I live in ${this.city}.`);
    }
  }
  
  const person5 = new PersonClass("John Doe", 30, "New York");
  person5.introduce(); // Output: Hi, I'm John Doe and I'm 30 years old. I live in New York.
  
  // Object.assign() method
  const person6 = {
    name: "John Doe",
    age: 30
  };
  
  const person7 = {
    city: "New York"
  };
  
  Object.assign(person6, person7);
  console.log(person6); // Output: { name: 'John Doe', age: 30, city: 'New York' }
  
  // Spread operator
  const person8 = {
    name: "John Doe",
    age: 30,
    ...person7
  };
  console.log(person8); // Output: { name: 'John Doe', age: 30, city: 'New York' }
  
  // Object.keys() method
  const person9 = {
    name: "John Doe",
    age: 30,
    city: "New York"
  };
  
  console.log(Object.keys(person9)); // Output: [ 'name', 'age', 'city' ]
  
  // Object.values() method
  console.log(Object.values(person9)); // Output: [ 'John Doe', 30, 'New York' ]
  
  // Object.entries() method
  console.log(Object.entries(person9)); // Output: [ [ 'name', 'John Doe' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
  
  // Object.freeze() method
  const person10 = {
    name: "John Doe",
    age: 30
  };
  
  Object.freeze(person10);
  
  person10.age = 35;
  console.log(person10); // Output: { name: 'John Doe', age: 30 }
  
  // Object.seal() method
  const person11 = {
    name: "John Doe",
    age: 30
  };
  
  Object.seal(person11);
  
  delete person11.age;
  console.log(person11); // Output: { name: 'John Doe' }
  
  // Object.preventExtensions() method
  const person12 = {
    name: "John Doe"
  };
  
  Object.preventExtensions(person12);
  
  person12.age = 30;
  console.log(person12); // Output: { name: 'John Doe' }
  
  // Object.isFrozen() method
  console.log(Object.isFrozen(person10)); // Output: true
  
  // Object.isSealed() method
  console.log(Object.isSealed(person11)); // Output: true
  
  // Object.isExtensible() method
  console.log(Object.isExtensible(person12)); // Output: false