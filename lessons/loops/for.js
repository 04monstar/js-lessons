// for loop

 for( let i = 0; i < 5 ;i++){
   for(let j = 1; j<2 ;j++ ){
     console.log(`${i} *  ${j} = ${i*j}`);
    } }

    let arr = ['flash','batman', 'superman'];
    for (let i = 0; i <arr.length; i++) {
        const element = arr[i]
    console.log(`I am ${arr[i]}`);
  }
    //keywords
    /* break  - used to exit from the loop prematurely, when a certain condition is met.
       continue- used to skip the current iteration of the loop and move directly to the next iteration. */
      //example
      for(let i=0; i<10; i++){
         if(i==4){
           
           console.log(`The value of I is detected: ${i}`)
           continue;
          }
          console.log(`The value of I is: ${i}`)
      }