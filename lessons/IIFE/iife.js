// immediately invoked fuction expression

// example using simple function

(function DB(){
    //named iife
    console.log(`Db connected`)
})();

// using arrow function

( () => {
    console.log('Arrow Function') ; // this end the error
}) () // causing error  because of semicolon it does't know where to end the express the error just coz of semicolon
( (name) => {
    console.log('Arrow Function') ; // i'm giving peremeter to this
}) ('john') 