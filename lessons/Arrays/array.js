// Arrary
// the ways to initalised a array  in javascript

    //1.

    const arr1 = [1,2,3,4,5,6];
    // array of string
    const arr2 = ["hello","world"];
    console.log(arr1,arr2)

    //2. 
    const arr3 = new Array(1,2,3,4,5,6)
    const arr4 = new Array("Hello world", "HI world")
    console.log(arr3,"\n",arr4);

        // add elements in array
    arr1.push("new element")
    console.log(arr1) // output : [1,2,3,4,5,6,  'new element']
     
    // remove elements in array
    arr1.pop()
    console.log(arr1) // output :  [1,2,3,4,5,6]

    // shift  and unshift method for adding or removing element from beginning of an array
     
    // unshift in array
    arr1.unshift("zero")
    console.log(arr1)  

    // shift in array
    arr1.shift()
    console.log(arr1)

    // include  , indexOf & lastIndexOf methods // use for  search any thing in array
    
    console.log(arr1.includes(2)) // output : true
    console.log(arr1.indexOf(2)) // output: 1
    console.log(arr1.lastIndexOf(0)) // output: -1
    console.log(typeof arr1) // output : object

    // join element of  array to form a single string using join() method
        console.log(typeof arr2.join()) // hello,world and this is a string type array
        
        
      // slice and splice
      let sliceArr= arr1.slice(2,4)
      console.log(sliceArr) // [ 3, 4]
      console.log(arr1)
    // splice
    let spliceArr = arr1.splice(0,1)
    console.log(spliceArr)
        console.log(arr1)
    
        //concatnate and spread of
        let mar_heros= ['Ironman','Thor','Captain America']
        let dc_heros = ["Batman","Superman","flash"]
        // 2 types
     mar_heros.push(dc_heros)  // simply push the  whole array into another array
    const all_heros = mar_heros.concat(dc_heros)     // use for concatnate
        console.log(mar_heros);
        console.log(all_heros)
        // spread
   
    let superHeroes=[...mar_heros,'Spiderman',"Doctor Strange"]
    console.log(superHeroes)

    // flat
    let multiDimArray = [[1,2],[3,[5,6]]];
    let flattenedArray =(multiDimArray.flat(Infinity));   // use for spread out all array and make a single array
    console.log(flattenedArray) 

    // its use for data scraping

    console.log(Array.isArray("mayank")) // to check the value is in array or not
    console.log(Array.from("mayank")) // to make your data into array