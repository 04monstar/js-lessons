const language = ["cpp","java","shellScript","javascript", "python"];

const value = language.forEach((item) =>{
    return item
})

//console.log(value); // Output : undefined coz foreach not return the value

// other example

// using filter
const num = [1,2,3,4,5,6,7,8,9,10]
const numVal = num.filter( (value) => value > 3)
//console.log(numVal); //[4, 5,6,7,8,9,10]

let books = [
    { 
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        pages: 180
    },
    { 
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        pages: 281
    },
    { 
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        pages: 328
    },
    { 
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        pages: 234
    },
    { 
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        pages: 279
    },
    { 
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        pages: 310
    },
    { 
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        pages: 309
    },
    { 
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        pages: 1178
    },
    { 
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        pages: 635
    },
    { 
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic Poetry",
        pages: 374
    }
];

let myBooks = books.filter((item) => item.pages > 100);
  myBooks = books.filter((item) => item.genre === 'Romance')
//console.log(myBooks);
  

// chaining

const nums = [1,23,1,44,84,8,,884,56456]
//const newNum =num.map((num) => num + 4).map((num) => num /2).filter((num) => num > 3)
//console.log(newNum)

// reduce methods

    const words = [1,2,3,4,5,6,7]

   const myWords = words.reduce((acc, currval) => {
    //console.log(`acc:${acc} nd ${currval}`)
    return acc + currval
   },0)
//   console.log(myWords)

   let clothes = [
    { name: "T-shirt", price: 15.99, brand: "Nike" },
    { name: "Jeans", price: 29.99, brand: "Levi's" },
    { name: "Dress Shirt", price: 24.99, brand: "Calvin Klein" },
    { name: "Skirt", price: 19.99, brand: "H&M" },
    { name: "Sweater", price: 34.99, brand: "Gap" },
    { name: "Jacket", price: 49.99, brand: "Zara" },
    { name: "Leggings", price: 14.99, brand: "Adidas" },
    { name: "Hoodie", price: 39.99, brand: "Under Armour" },
    { name: "Shorts", price: 17.99, brand: "Puma" },
    { name: "Dress", price: 54.99, brand: "Forever 21" }
];
const newCloths = clothes.reduce((acc,item) => acc + item.price ,0)

console.log(newCloths)
 //console.log(clothes);
